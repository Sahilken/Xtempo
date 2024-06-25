import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  businessProfile,
  businessProfileSchema,
} from './schema/businessProfile.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'mydb',
    }),
    MongooseModule.forFeature([
      { name: businessProfile.name, schema: businessProfileSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
