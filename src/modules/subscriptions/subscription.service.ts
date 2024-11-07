import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dtos/create-subscription.dto';
import { UpdateSubscriptionDto } from './dtos/update-subscription.dto';
import { Subscription } from './models/subscription.model';

@Injectable()
export class SubscriptionService {
  private subscriptions: Subscription[] = [];

  create(createSubscriptionDto: CreateSubscriptionDto): Subscription {
    const newSubscription = { id: this.subscriptions.length + 1, ...createSubscriptionDto };
    this.subscriptions.push(newSubscription);
    return newSubscription;
  }

  findAll(): Subscription[] {
    return this.subscriptions;
  }

  findOne(id: number): Subscription | undefined {
    return this.subscriptions.find(subscription => subscription.id === id);
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): Subscription | undefined {
    const subscriptionIndex = this.subscriptions.findIndex(subscription => subscription.id === id);
    if (subscriptionIndex === -1) return undefined;

    this.subscriptions[subscriptionIndex] = { ...this.subscriptions[subscriptionIndex], ...updateSubscriptionDto };
    return this.subscriptions[subscriptionIndex];
  }

  remove(id: number): boolean {
    const subscriptionIndex = this.subscriptions.findIndex(subscription => subscription.id === id);
    if (subscriptionIndex === -1) return false;

    this.subscriptions.splice(subscriptionIndex, 1);
    return true;
  }
}
