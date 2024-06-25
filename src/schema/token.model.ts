import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type tokenDocument = token & Document;

@Schema()
export class token {
  @Prop()
  userId: String;
  @Prop()
  token: String;
}

export const tokenSchema = SchemaFactory.createForClass(token);
