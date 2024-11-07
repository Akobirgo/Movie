export interface UpdatePayment {
    userId?: number;
    orderId?: number;
    amount?: number;
    paymentMethod?: string;
    paymentStatus?: string;
  }
  