import { validateOrReject } from 'class-validator';
import { DiscordSubscription } from '../../domain/subscription';
import { APIGatewayHandler } from '../../infrastructure/aws-lambda/api-gateway-handler';
import { dataSource } from '../../infrastructure/typeorm/data-source';
import { AddDiscordSubscriptionInput } from './dto';

export const handler = APIGatewayHandler(async (event) => {
  const input: AddDiscordSubscriptionInput = new AddDiscordSubscriptionInput(JSON.parse(event.body ?? '{}'));
  await validateOrReject(input);

  await dataSource.initialize();

  const subscription: DiscordSubscription = DiscordSubscription.create();
  subscription.webhookUrl = input.webhookUrl;
  await subscription.save();

  await dataSource.destroy();

  return { id: subscription.id };
});
