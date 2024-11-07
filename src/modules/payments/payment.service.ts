import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { UpdatePaymentDto } from './dtos/update-payment.dto';
import { Payment } from './models/payment.model';

@Injectable()
export class PaymentService {
  private payments: Payment[] = [];

  create(createPaymentDto: CreatePaymentDto): Payment {
    const newPayment = { id: this.payments.length + 1, ...createPaymentDto };
    this.payments.push(newPayment);
    return newPayment;
  }

  findAll(): Payment[] {
    return this.payments;
  }

  findOne(id: number): Payment | undefined {
    return this.payments.find(payment => payment.id === id);
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto): Payment | undefined {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return undefined;

    this.payments[paymentIndex] = { ...this.payments[paymentIndex], ...updatePaymentDto };
    return this.payments[paymentIndex];
  }

  remove(id: number): boolean {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return false;

    this.payments.splice(paymentIndex, 1);
    return true;
  }
}
