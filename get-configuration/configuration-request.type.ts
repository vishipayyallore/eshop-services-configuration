import type { HttpRequestQuery } from "@azure/functions"

import type { Configuration } from "./configuration.type"


export interface ConfigurationRequest {
  query: HttpRequestQuery
  body: Partial<Configuration>
}
