import type { HttpRequestQuery } from "@azure/functions"
import { ConfigurationRequest } from "../configuration-request.type"

import { textuallyTruthy } from "./textually-truthy"


export const hasGlobalAppSettings = (query: HttpRequestQuery): boolean => 
  'all' in query || Object.keys(query).length === 0

export const hasLocalAppSettings = (query: HttpRequestQuery): boolean => 
  textuallyTruthy(query.appSettings) 

export interface HasMats {
  type: string 
  query: HttpRequestQuery
}

export const hasGlobal = ({type, query}: HasMats): boolean => 
  textuallyTruthy(query[type]) && Object.keys(query).length === 1
  
export const hasLocal = ({type, query}: HasMats): boolean => 
  (textuallyTruthy(query[type]) && Object.keys(query).length > 1)
  || hasGlobalAppSettings(query)


export const factoryGlobalBehavior = ({type, configuration}) => 
  ({query, body}: ConfigurationRequest) => {
    if(hasGlobal({type, query})) Object.assign(body, configuration)
    if(hasLocal({type, query})) body[type] = {...configuration}
  }