export class UpdatePaymentDto {
    userId?: number;
    orderId?: number;
    amount?: number;
    paymentMethod?: string;
    paymentStatus?: string;
  }
  