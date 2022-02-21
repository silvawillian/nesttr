import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create.dto';
import { UpdateTweetDto } from './dto/update.dto';
import { Tweet } from './tweet.interface';

@Injectable()
export class TweetsService {
  private lastTweetId = 0;
  private tweets: Tweet[] = [];

  constructor(private readonly prismaService: PrismaService) { }

  getAll() {
    return this.prismaService.tweet.findMany();
  }

  async getById(id: number) {
    const tweet = await this.prismaService.tweet.findUnique({ where: { id } });

    if (tweet) return tweet;
    throw new HttpException('TWEET_NOT_FOUND', HttpStatus.NOT_FOUND);
  }

  async update(id: number, tweet: UpdateTweetDto) {
    return this.prismaService.tweet.update({
      where: { id },
      data: { ...tweet },
    });
  }

  async create(tweet: CreateTweetDto) {
    const newTweet = {
      id: ++this.lastTweetId,
      ...tweet,
    };

    return this.prismaService.tweet.create({ data: { ...newTweet } });
  }

  delete(id: number) {
    return this.prismaService.tweet.delete({ where: { id } });
  }
}
