import type { HttpRequestQuery } from "@azure/functions"

import { textuallyTruthy } from "./textually-truthy"


export const hasGlobalAppSettings = (query: HttpRequestQuery): boolean => 
  'all' in query || Object.keys(query).length === 0

export const hasLocalAppSettings = (query: HttpRequestQuery): boolean => 
  textuallyTruthy(query.appSettings) 

export const hasProducts = (query: HttpRequestQuery): boolean => 
  textuallyTruthy(query.products) || 'all' in query
