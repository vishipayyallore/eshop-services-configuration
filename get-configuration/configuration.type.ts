export type Configuration = 
  (AppConfiguration | ProductsConfiguration) & Partial<LeafedConfiguration>

export interface LeafedConfiguration {
  appSettings: AppConfiguration
  products: ProductsConfiguration
}

export interface AppConfiguration {
  cdnHost: string
}

export interface ProductsConfiguration {
  imagesFolder: string
}
