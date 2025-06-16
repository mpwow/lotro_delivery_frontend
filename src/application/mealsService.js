import { Meal } from "../domain/Meal";
import { fetchMeals } from "../api/api";

export async function getMeals() {
  try {
    const mealsData = await fetchMeals();
    return mealsData.map((mealData) => new Meal(mealData));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to load data");
  }
}
