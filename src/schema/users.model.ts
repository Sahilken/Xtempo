import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type userDocument = user & Document;

@Schema()
export class user {
  @Prop()
  name: String;
  @Prop({ required: true })
  age: Number;
  @Prop({ required: true })
  email: String;
  @Prop({ required: true })
  password: String;
  @Prop({ required: true })
  mobile: String;
  @Prop()
  token: String;
  @Prop({ default: false })
  emailVerified: Boolean;

  @Prop({
    Type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProfile',
  })
  businessProfiles: mongoose.Types.ObjectId[];

  @Prop({ default: Date.now })
  created_at: Date;
}

export const userSchema = SchemaFactory.createForClass(user);
