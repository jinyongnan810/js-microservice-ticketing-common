import { Subjects } from "../subjects";

export interface PaymentCreatedEvent {
  subject: Subjects.PAYMENT_CREATED;
  data: {
    orderId: string;
    paymentId: string;
  };
}
