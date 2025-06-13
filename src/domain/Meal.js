export class Meal {
  constructor({ id, title, description, price, img }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.img = img;
  }

  get formattedPrice() {
    if (this.isAvailableToOrder) {
      return `${this.price} Silver Pennies`;
    } else {
      return "Out of Stock";
    }
  }

  get isAvailableToOrder() {
    return this.price > 0;
  }
}
