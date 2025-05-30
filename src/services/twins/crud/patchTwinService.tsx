import { fetchExtendedApiForDittoService } from "services/general/fetchExtendedApiService"
import { Context } from "utils/context/staticContext"

export const patchTwinService = ( context: Context, twinId: string, twin: any ) => {
  console.log(JSON.stringify(twin))
  return fetchExtendedApiForDittoService(context, "/things/" + twinId, {
    method: 'PATCH',
    headers: {
      "Authorization": 'Basic '+btoa('ditto:ditto'),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(twin)
  })
}
