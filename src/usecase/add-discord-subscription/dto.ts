import { IsString, IsUrl, Length } from 'class-validator';

export class AddDiscordSubscriptionInput {
  @IsString()
  @IsUrl()
  @Length(1, 255)
  webhookUrl!: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
