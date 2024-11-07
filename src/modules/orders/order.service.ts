import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { Order } from './models/order.model';

@Injectable()
export class OrderService {
  private orders: Order[] = [];

  create(createOrderDto: CreateOrderDto): Order {
    const newOrder = { id: this.orders.length + 1, ...createOrderDto };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto): Order | undefined {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return undefined;

    this.orders[orderIndex] = { ...this.orders[orderIndex], ...updateOrderDto };
    return this.orders[orderIndex];
  }

  remove(id: number): boolean {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) return false;

    this.orders.splice(orderIndex, 1);
    return true;
  }
}
