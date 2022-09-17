import type { ConfigurationManager } from "./configuration-manager.type"
import appSettings from "./app-settings"
import productsSettings from "./products-settings"
import identitySettings from "./identity-settings"


const managers: Array<ConfigurationManager> = [
  appSettings,
  productsSettings,
  identitySettings
]

export default managers