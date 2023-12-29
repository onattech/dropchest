"use client"

import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase"

function RenameModal() {
    const { user } = useUser()
    const [input, setInput] = useState("")

    const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] = useAppStore((state) => [
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.filename,
    ])

    async function renameFile() {
        if (!user || !fileId) return

        await updateDoc(doc(db, "users", user.id, "files", fileId), {
            filename: input,
        })

        setIsRenameModalOpen(false)
    }

    return (
        <Dialog
            open={isRenameModalOpen}
            onOpenChange={(isOpen) => {
                setIsRenameModalOpen(isOpen)
            }}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="pb-2">Rename the File</DialogTitle>

                    <Input
                        id="link"
                        defaultValue={filename}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDownCapture={(e) => {
                            if (e.key === "Enter") {
                                renameFile()
                            }
                        }}
                    />

                    <div className="flex justify-end space-x-2 py-3">
                        <Button size="sm" className="px-3" variant="ghost" onClick={() => setIsRenameModalOpen(false)}>
                            <span className="sr-only">Cancel</span>
                            <span>Cancel</span>
                        </Button>

                        <Button type="submit" size="sm" className="px-3" onClick={() => renameFile()}>
                            <span className="sr-only">Rename</span>
                            <span>Rename</span>
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default RenameModal
