import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
enum typeList {
  SOCIAL = 'social',
  COORPORATE = 'coorporate',
  PRIVATE = 'private',
}
class duration extends Document {
  @Prop()
  startTime: Date;
  @Prop()
  endTime: Date;
}
class days extends Document {
  @Prop()
  date: Date;

  @Prop()
  day: Array<duration>;
}

export class event {
  @Prop({ required: true })
  eventTitle: String;

  @Prop()
  schedule: Array<days>;

  @Prop({ required: true })
  price: Number;

  @Prop()
  ageGroup: String;

  @Prop({ required: true, enum: typeList })
  type: String;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const eventSchema = SchemaFactory.createForClass(event);
