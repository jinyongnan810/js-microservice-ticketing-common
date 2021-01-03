export enum OrderStatus {
  // order created, but the ticket has not beed reserved
  CREATED = "CREATED",
  // ticket reserved, or order cancelled, pr order expires before payment
  CANCELLED = "CANCELLED",
  // ticket reserved
  AWAITING_PAYMENT = "AWAITING_PAYMENT",
  // ticket reserved and paied
  COMPLETE = "COMPLETE",
}
