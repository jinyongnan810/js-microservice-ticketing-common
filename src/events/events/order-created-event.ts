import { Subjects } from "../subjects";
import { OrderStatus } from "../types/order-status";

export interface OrderCreatedEvent {
  subject: Subjects.ORDER_CREATED;
  data: {
    id: string;
    userId: string;
    expiredAt: string;
    status: OrderStatus;
    ticket: {
      id: string;
      price: number;
    };
  };
}
