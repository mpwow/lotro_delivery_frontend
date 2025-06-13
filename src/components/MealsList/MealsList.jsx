import styles from "./MealsList.module.scss";
import MealItem from "../MealItem/MealItem";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import EmptySearchResult from "../EmptySearchResult/EmptySearchResult";
import { useSearch } from "../../context/SearchContext";
import { Meal } from "../../domain/Meal";

export default function MealsList({ meals, isLoaderShown, isErorrShown }) {
  const { searchQuery } = useSearch();

  const filteredMeals = meals.filter((meal) => meal.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const mainContent = filteredMeals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        meal={meal}
      />
    );
  });

  return (
    <ul className={styles.meals}>
      {isLoaderShown && <Loader />}
      {isErorrShown && <Error />}
      {!isLoaderShown & !isErorrShown && mainContent}
      {filteredMeals.length === 0 && <EmptySearchResult />}
    </ul>
  );
}
