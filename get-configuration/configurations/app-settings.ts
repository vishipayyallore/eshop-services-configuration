import type { AppConfiguration } from "../configuration.type"
import type { ConfigurationRequest } from "../configuration-request.type"
import { hasGlobalAppSettings, hasLocalAppSettings } from "../utilities/query-helpers"


const configuration: AppConfiguration = {
  cdnHost: process.env.CDNHOST ?? null,
  apiHost: process.env.APIHOST ?? null
}

const behavior = ({query, body}: ConfigurationRequest) => {
  if(hasGlobalAppSettings(query)) Object.assign(body, configuration)
  if(hasLocalAppSettings(query)) body.appSettings = {...configuration}
}

export default { behavior, configuration }
