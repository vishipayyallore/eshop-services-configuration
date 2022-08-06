import type { ConfigurationRequest } from "../configuration-request.type"
import type { ProductsConfiguration } from "../configuration.type"
import { hasGlobalAppSettings, hasProducts } from "../utilities/query-helpers"


const configuration: ProductsConfiguration = {
  imagesFolder: process.env.PRODUCTS_IMAGES_FOLDER ?? null
}

const behavior = ({query, body}: ConfigurationRequest) => {
  if(hasProducts(query)) {
    if(hasGlobalAppSettings(query)) {
      body.products = {...configuration}
    } else {
      Object.entries(configuration)
        .forEach(([name, value]) => body[name] = value)
    }
  }
}

export default { behavior, configuration }
