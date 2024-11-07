export interface CreatePayment {
    userId: number;
    orderId: number;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
  }
  