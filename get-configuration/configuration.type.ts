import type { OpenIdConfiguration } from "angular-auth-oidc-client"

export type Configuration = 
  (AppConfiguration | ProductsConfiguration | IdentityConfiguration) & Partial<LeafedConfiguration>

export interface LeafedConfiguration {
  appSettings: AppConfiguration
  products: ProductsConfiguration
  identity: IdentityConfiguration
}

export interface AppConfiguration {
  cdnHost: string
  apiHost: string
}

export interface ProductsConfiguration {
  imagesFolder: string
}

export type IdentityConfiguration = Partial<OpenIdConfiguration & {
  signInEndpoint: string,
  signOutEndpoint: string
}>
