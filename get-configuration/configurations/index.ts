import type { ConfigurationManager } from "./configuration-manager.type"
import appSettings from "./app-settings"
import productsSettings from "./products-settings"


const managers: Array<ConfigurationManager> = [
  appSettings,
  productsSettings
]

export default managers