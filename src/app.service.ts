import { Injectable } from '@nestjs/common';
import {
  businessProfile,
  businessProfileDocument,
} from './schema/businessProfile.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(businessProfile.name)
    businessProfilesModel: Model<businessProfileDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
