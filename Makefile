# Constant Variables
NPX := pnpm dlx

# Commands
.PHONY: list
list:
	@echo "📋 Available commands:"
	@awk -F':.*?## ' '/^[a-zA-Z0-9_-]+:/ && !/^[[:blank:]]*list:/ { if ($$2 == "") { printf "   • %s\n", $$1 } else { printf "   • %-20s %s\n", $$1, $$2 } }' $(MAKEFILE_LIST)

.PHONY: dev
dev: ## 💠 Starts NextJS dev environment
	pnpm dev

.PHONY: lint
lint: ## ✅ Checks for linting errors
	pnpm next lint
