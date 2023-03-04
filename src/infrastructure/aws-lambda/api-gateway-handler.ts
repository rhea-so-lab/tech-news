import { APIGatewayProxyEventV2, Callback, Context, Handler } from 'aws-lambda';

export function APIGatewayHandler(
  execute: (event: APIGatewayProxyEventV2, context: Context, callback: Callback) => Promise<unknown>,
): Handler {
  return async (event, context, callback) => await execute(event, context, callback);
}
