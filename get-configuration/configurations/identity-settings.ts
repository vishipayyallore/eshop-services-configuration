import type { IdentityConfiguration } from "../configuration.type"
import { factoryGlobalBehavior } from "../utilities/query-helpers"


const configuration: IdentityConfiguration = {
  authority: process.env.IDENTITY_AUTHORITY,
  signInEndpoint: process.env.IDENTITY_SIGNIN,
  signOutEndpoint: process.env.IDENTITY_SIGNOUT,
  clientId: process.env.IDENTITY_CLIENTID,
  scope: process.env.IDENTITY_SCOPE,
  responseType: process.env.IDENTITY_RESPONSETYPE,
}

const behavior = factoryGlobalBehavior({type: 'identity', configuration})

export default { behavior, configuration }
