import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema()
export class otp {
  @Prop({ enum: ['email', 'mobile'], required: true })
  type: String;
  @Prop({
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId,
  })
  user: mongoose.Types.ObjectId;
  @Prop({ required: true })
  otp: string;
  @Prop({ default: Date.now })
  createdAt: Date;
}
export const otpSchema = SchemaFactory.createForClass(otp);
