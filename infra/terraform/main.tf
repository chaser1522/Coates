# Placeholder Azure resources — extend to your environment
resource "azurerm_resource_group" "coates" {
  name     = "rg-coates-supply"
  location = "westus2"
}
# Add App Service, Azure SQL, VNet/Private Endpoint, Key Vault, etc.
