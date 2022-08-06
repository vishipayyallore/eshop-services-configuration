import { AzureFunction, Context, HttpRequest } from "@azure/functions"

import type { Configuration } from "./configuration.type.js"
import { requestDispatcher } from "./request-dispatcher.js"


const FUNCTION_NAME = "get-configuration"

const httpTrigger: AzureFunction = async function (
    context: Context, 
    req: HttpRequest
): Promise<void> {
    context.log(`[${FUNCTION_NAME}] HTTP trigger function processed a request.`, req.query)

    const body: Partial<Configuration> = {}
		requestDispatcher.next({ query: req.query, body })

    context.res = {
        // status: 200, /* Defaults to 200 */
        body
    }

}

export default httpTrigger
