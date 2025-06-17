const URL = "http://127.0.0.1:5000/graphql";

export async function fetchMeals() {
  // const res = await fetch(URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     query: `
  //       query {
  //         meals {
  //           id
  //           title
  //           description
  //           price
  //           img
  //         }
  //       }
  //     `,
  //   }),
  // });
  // const data = await res.json();
  // TO DO - when backend will be deployed - return fetch
  const data = {
    data: {
      meals: [
        {
          id: 1,
          title: "Mushroom Pie",
          description: "Buttery crust filled with wild mushrooms, garlic, and thyme. A favorite of Bilbo and Frodo.",
          price: 5,
          img: "https://yastatic.net/naydex/shedevrum/S1s6Rp257/df1d89H_T/IoZLdugV2MQYkJKSTvqYGjfJSl8YrnahDIu0RX7hoNxd1KAGKbIwuBY-Zaog9Z0RwxFhKxI8klwCmH_cU3BS3iOLR06QbcXcGYSCw1PGuV5u5Ts_NecrmQiP6DBeAUgJ7RB8rvEC9FT6R3j7aaigDPJtABMS9HA",
        },
        {
          id: 2,
          title: "Fried Trout with Lemon",
          description: "Fresh river trout, pan-fried in butter, served with lemon wedges. Often eaten at The Prancing Pony.",
          price: 8,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16118108/img_71164e9f437f11f0b6c6ce263fd3d7f5/orig",
        },
        {
          id: 3,
          title: "Apple Fritters with Honey",
          description: "Crispy fried dough with spiced apples, drizzled with Shire honey.",
          price: 3,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16449972/img_a7e7f771437f11f0bcec7a2185b4a86a/orig",
        },
        {
          id: 4,
          title: "Herb-Roasted Lamb",
          description: "Slow-cooked with rosemary, garlic, and a dash of Brandywine. Served at birthday feasts.",
          price: 12,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16449972/img_fe79d7de44f511f0a176c2cc1b8e0efd/orig",
        },
        {
          id: 5,
          title: "Fresh Bread with Butter & Honey",
          description: "Warm crusty bread with creamy butter and golden honeycomb.",
          price: 2,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16312463/img_2fca040444f611f08df54e4a591835e2/orig",
        },
        {
          id: 6,
          title: "Mashed Potatoes with Fried Onions",
          description: "Creamy potatoes topped with golden onions. A Hobbit staple.",
          price: 4,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16293477/img_a536bb0844f511f0979fc2c0b36eba4b/orig",
        },
        {
          id: 7,
          title: "Rabbit Stew with Thyme",
          description: "Tender rabbit, carrots, and herbs in a rich broth. Perfect for cold evenings.",
          price: 7,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16500899/img_00214de644f711f08a0cceaf04b5ef38/orig",
        },
        {
          id: 8,
          title: "Salted Pretzels",
          description: "Soft, warm pretzels with coarse salt. Best paired with ale.",
          price: 2,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15351718/img_1f946add44f711f0bd7be65daf6e7141/orig",
        },
        {
          id: 9,
          title: "Creamy Tomato Soup",
          description: "Made with ripe tomatoes, cream, and a hint of basil.",
          price: 4,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16500899/img_5365166244f811f0bcb952aa4dba7032/orig",
        },
        {
          id: 10,
          title: "Baked Apples with Cinnamon",
          description: "Stuffed with nuts, raisins, and cinnamon. A sweet ending to any meal.",
          price: 5,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15240847/img_6f83c40e44f811f0b6c6ce263fd3d7f5/orig",
        },
        {
          id: 11,
          title: "Lembas Bread",
          description: "Sweet, dense waybread that sustains travelers for days. One bite fills a grown man’s stomach.",
          price: 0,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16500899/img_f9a9587044f811f0bd7be65daf6e7141/orig",
        },
        {
          id: 12,
          title: "Honey Cakes",
          description: "Light, airy cakes infused with flower nectar. Legolas’ favorite snack.",
          price: 6,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15067795/img_2d6c4c5744f911f094ed421a7b1dd356/orig",
        },
        {
          id: 13,
          title: "Forest Herb Soup",
          description: "A delicate broth with wild herbs, edible flowers, and roots. Healing and refreshing.",
          price: 8,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15067795/img_cbcd162244f911f092d752d8e6a785d9/orig",
        },
        {
          id: 14,
          title: "Pickled Berries",
          description: "Tart berries preserved in elderflower syrup. An Elven delicacy.",
          price: 5,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16500899/img_fb54294044f911f0a176c2cc1b8e0efd/orig",
        },
        {
          id: 15,
          title: "Mallorn Leaf Tea",
          description: "A fragrant tea from the golden leaves of Lothlórien. Calms the mind.",
          price: 7,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16449972/img_361a4b5344fa11f0b383c69e8a5adaee/orig",
        },
        {
          id: 16,
          title: "Roasted Boar",
          description: "A whole boar roasted with mountain spices. Served in Erebor’s grand halls.",
          price: 15,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16449972/img_55834c5344fa11f0ba1abe1f098d7bb4/orig",
        },
        {
          id: 17,
          title: "Meat & Onion Pies",
          description: "Flaky crust stuffed with beef, onions, and black pepper. Dwarven travel food.",
          price: 5,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16295926/img_842f7b1f44fa11f0a0a97acc1207f44c/orig",
        },
        {
          id: 18,
          title: "Salt-Cured Beef Strips",
          description: "Dried, spiced meat for long journeys. Gimli always carries some.",
          price: 3,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16293477/img_d859179e44fa11f08d8f8a1f92f7a718/orig",
        },
        {
          id: 19,
          title: "Dark Honey Mead",
          description: 'Strong, sweet, and served in tankards. "They say it puts hair on your chest."',
          price: 6,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15240802/img_49db3ca344fb11f086cae2eafd4d8d77/orig",
        },
        {
          id: 20,
          title: "Mushroom & Onion Porridge ",
          description: "Thick, savory porridge made with wild mushrooms.",
          price: 4,
          img: "https://avatars.mds.yandex.net/get-shedevrum/14766198/img_684d2d2644fb11f0bb5aa25c0e438dce/orig",
        },
        {
          id: 21,
          title: "Gondorian Brown Bread",
          description: "Dense, nutty bread baked with barley and rye.",
          price: 3,
          img: "https://avatars.mds.yandex.net/get-shedevrum/15240847/img_8bd625e744fb11f080a5da33849e98dc/orig",
        },
        {
          id: 22,
          title: "Rohirric Fire-Roasted Meat ",
          description: "Venison or beef seared over open flames. Eaten in Meduseld’s great hall.",
          price: 10,
          img: "https://avatars.mds.yandex.net/get-shedevrum/14791598/img_ac60febd44fb11f0aa863223b50e1b7f/orig",
        },
        {
          id: 23,
          title: "Cheese Flatbreads",
          description: "Crispy flatbread topped with goat cheese and herbs. A Minas Tirith street food.",
          price: 4,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16500899/img_c90047e444fb11f0b383c69e8a5adaee/orig",
        },
        {
          id: 24,
          title: "Edoras Golden Honey",
          description: " Thick, floral honey from Rohan’s fields.",
          price: 8,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16312463/img_08a68b0344fc11f083f8aa21ebb699bc/orig",
        },
        {
          id: 25,
          title: "Spiced Mulled Cider",
          description: "Warm cider with cinnamon, cloves, and a splash of brandy.",
          price: 5,
          img: "https://avatars.mds.yandex.net/get-shedevrum/16312463/img_242d3a3144fc11f0aa863223b50e1b7f/orig",
        },
      ],
    },
  };
  return data.data.meals;
}
