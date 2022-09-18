import type { ConfigurationRequest } from "./configuration-request.type.js"
import type { ConfigurationManager } from "./configurations/configuration-manager.type.js"
import configurations from "./configurations"


/**
 * @name requestDispatcher
 * @description implements a forwarding pattern sort of approach to response 
 * composition, in avoidance of a switch statement and mixed responsibilities 
 **/
export const requestDispatcher = {
	configurations,
	next(configurationRequest: ConfigurationRequest) {
		requestDispatcher.configurations.forEach(
			(manager: ConfigurationManager) => manager.behavior(configurationRequest))
	}
}
Object.freeze(requestDispatcher)