import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type businessProfileDocument = businessProfile & Document;

class transaction extends Document {
  @Prop()
  amount: Number;
  @Prop()
  currency: String;
  @Prop()
  transactionId: String;
}

class subscription extends Document {
  @Prop()
  serviceType: String;
  @Prop()
  product: String;
  @Prop()
  startDate: String;
  @Prop()
  endDate: String;
  @Prop()
  transactions: Array<transaction>;
}
class location extends Document {
  @Prop()
  latitude: String;
  @Prop()
  longitude: String;
  @Prop()
  accuracy: String;
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
class event extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events',
  })
  event: mongoose.Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Outlet',
  })
  eligibleOutletsforEvent: mongoose.Schema.Types.ObjectId[];
}

@Schema()
export class businessProfile {
  @Prop()
  title: String;
  @Prop()
  bio: String;
  @Prop({ type: subscription })
  subscriptions: Array<subscription>;
  @Prop()
  locations: Array<location>;
  @Prop()
  countryCode: String;
  @Prop()
  phone: Number;
  @Prop()
  email: String;
  @Prop()
  website: String;
  @Prop()
  gstin: String;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  })
  businessOwner: mongoose.Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Outlet',
  })
  outlets: mongoose.Schema.Types.ObjectId[];
  @Prop()
  events: Array<event>;
}

export const businessProfileSchema =
  SchemaFactory.createForClass(businessProfile);
