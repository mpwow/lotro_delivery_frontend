export class CartItem {
  constructor({ meal, quantity }) {
    this.meal = meal;
    this.quantity = quantity;
  }

  inc() {
    this.quantity += 1;
  }

  dec() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  get totalPrice() {
    return this.quantity * this.meal.price;
  }
}
