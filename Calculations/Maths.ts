export class PaymentsYearly {
  constructor(private readonly payments: number) {
    this.payments = payments;
  }

  public getPayments() {
    return this.payments;
  }
}
