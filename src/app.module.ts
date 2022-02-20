import { Module } from '@nestjs/common';
import { TweetsController } from './tweets/tweets.controller';
import { TweetsService } from './tweets/tweets.service';

@Module({
  imports: [],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class AppModule { }
