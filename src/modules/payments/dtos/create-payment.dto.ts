export class CreatePaymentDto {
    userId: number;
    orderId: number;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
  }
  