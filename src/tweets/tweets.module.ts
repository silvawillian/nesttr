import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService, PrismaService],
})
export class TweetsModule { }
