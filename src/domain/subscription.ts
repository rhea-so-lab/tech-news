import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../infrastructure/typeorm/entity';

@Entity()
export class DiscordSubscription extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  webhookUrl!: string;
}
