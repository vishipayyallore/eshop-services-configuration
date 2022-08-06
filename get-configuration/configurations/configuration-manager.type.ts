import type { ConfigurationRequest } from "../configuration-request.type"
import type { Configuration } from "../configuration.type"


export interface ConfigurationManager {
  configuration: Configuration
  behavior: BehaviorFunction
}

export type BehaviorFunction = 
  (configurationRequest: ConfigurationRequest) => void