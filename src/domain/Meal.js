export class Meal {
  constructor({ id, title, description, price, img }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.img = img;
  }

  get formattedPrice() {
    return `${this.price} Silver Pennies`;
  }
}
