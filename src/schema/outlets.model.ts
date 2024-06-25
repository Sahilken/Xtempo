import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
class Address extends Document {
  @Prop()
  latitude: String;
  @Prop()
  longitude: String;
  @Prop()
  address1: String;
  @Prop()
  address2: String;
  @Prop()
  city: String;
  @Prop()
  state: String;
  @Prop()
  zip: String;
  @Prop()
  website: String;
  @Prop()
  email: String;
  @Prop()
  phone: String;
}
@Schema()
export class registration {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessProfile',
  })
  underBusiness: mongoose.Types.ObjectId;
  @Prop({ type: Address, required: true })
  address: Address;
  @Prop({ required: true })
  manager: String;
  @Prop({ required: true })
  mobile: String;
  @Prop({ required: true })
  email: String;
  @Prop({ ref: 'event' })
  eventsList: mongoose.Types.ObjectId[];
}
