import type { ProductsConfiguration } from "../configuration.type"
import { factoryGlobalBehavior } from "../utilities/query-helpers"


const configuration: ProductsConfiguration = {
  imagesFolder: process.env.PRODUCTS_IMAGES_FOLDER ?? null
}

const behavior = factoryGlobalBehavior({type: 'products', configuration})

export default { behavior, configuration }
