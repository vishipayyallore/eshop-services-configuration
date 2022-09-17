import type { IdentityConfiguration } from "../configuration.type"
import type { ConfigurationRequest } from "../configuration-request.type"
import { hasGlobalAppSettings, hasIdentity } from "../utilities/query-helpers"


const configuration: IdentityConfiguration = {
  authority: process.env.IDENTITY_AUTHORITY,
  signInEndpoint: process.env.IDENTITY_SIGNIN,
  signOutEndpoint: process.env.IDENTITY_SIGNOUT,
  clientId: process.env.IDENTITY_CLIENTID,
  scope: process.env.IDENTITY_SCOPE,
  responseType: process.env.IDENTITY_RESPONSETYPE,
}

const behavior = ({query, body}: ConfigurationRequest) => {
  if(hasIdentity(query)) {
    if(hasGlobalAppSettings(query)) {
      body.identity = {...configuration}
    } else {
      Object.entries(configuration)
        .forEach(([name, value]) => body[name] = value)
    }
  }
}

export default { behavior, configuration }
