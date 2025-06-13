const URL = "http://127.0.0.1:5000/graphql";

export async function fetchMeals() {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          meals {
            id
            title
            description
            price
            img
          }
        }
      `,
    }),
  });
  const data = await res.json();
  return data.data.meals;
} 