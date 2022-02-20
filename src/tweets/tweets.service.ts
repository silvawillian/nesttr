import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create.dto';
import { UpdateTweetDto } from './dto/update.dto';
import { Tweet } from './tweet.interface';

@Injectable()
export class TweetsService {
  private lastTweetId = 0;
  private tweets: Tweet[] = [];

  getAll() {
    return this.tweets;
  }

  getById(id: number) {
    const tweet = this.tweets.find((tweet) => tweet.id === id);

    if (tweet) return tweet;
    throw new HttpException('TWEET_NOT_FOUND', HttpStatus.NOT_FOUND);
  }

  update(id: number, tweet: UpdateTweetDto): Tweet {
    const index = this.tweets.findIndex((tweet) => tweet.id === id);
    if (index > -1) {
      this.tweets[index].content = tweet.content;
      return tweet;
    }

    throw new HttpException('TWEET_NOT_FOUND', HttpStatus.NOT_FOUND);
  }

  create(tweet: CreateTweetDto): Tweet {
    const newTweet = {
      id: ++this.lastTweetId,
      ...tweet,
    };

    this.tweets.push(newTweet);
    return newTweet;
  }

  delete(id: number) {
    const index = this.tweets.findIndex((tweet) => tweet.id === id);
    if (index > -1) {
      this.tweets.splice(index, 1);
    }

    throw new HttpException('TWEET_NOT_FOUND', HttpStatus.NOT_FOUND);
  }
}
