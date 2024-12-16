import { APIGatewayProxyHandler } from 'aws-lambda'
import { formatJSONSuccessResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import { BackendDriveUIDi } from '@core/di/BackendDriveUIModule'

const detail: APIGatewayProxyHandler = async (context) => {
  const bduiRepositry = BackendDriveUIDi.bduiRepostiory
  const { code } = context.pathParameters
  const restaurants = await bduiRepositry.getEstablishmentDetail(code).catch(err => {
    return formatJSONSuccessResponse({
      success: false,
      payload: {},
      message: err.toString()
    });
  })
  return formatJSONSuccessResponse({
    success: true,
    payload: restaurants,
    message: "GET BDUI Restaurant Detail by code"
  });
}

export const main = middyfy(detail);