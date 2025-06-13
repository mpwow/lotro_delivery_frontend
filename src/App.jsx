import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MealsList from "./components/MealsList/MealsList";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import SearchMeals from "./components/SearchMeals/SearchMeals";
import { SearchProvider } from "./context/SearchContext";
import CartModal from "./components/CartModal/CartModal";
import { getMeals } from "./application/mealsService";

function App() {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsFetching(true);
      const mealsData = await getMeals();
      setMeals(mealsData);
    } catch (error) {
      setError({ message: error.message || "Failed to fetch data." });
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <SearchProvider>
      <Header />
      <CartModal />
      <SearchMeals />
      <MealsList
        meals={meals}
        isLoaderShown={isFetching}
        isErorrShown={error}
      />
      <MobileNavBar />
    </SearchProvider>
  );
}

export default App;
