const ingredients = [
  {
    id: 1,
    title: "Type de catègorie : Economie, Politique",
  },
  {
    id: 2,
    title: "20/01/2024",
  },
  {
    id: 3,
    title: "L'integration de : African",
  },
  {
    id: 4,
    title: "Soutenue par l'ONU",
  },
];

const recipes = [
  {
    id: 1,
    name: "Flesh Salad",
    discount: "20%",
    price: 55,
    image: require("../../assets/restaurant/yoav-aziz-AiHJiRCwB3w-unsplash.jpeg"),
    ingredients,
    description:
      "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
    rating: 4.7,
    time: "15 min",
    del_time: "8k",
    cooking_time: "4k",
  },
  {
    id: 2,
    name: "African MINING",
    discount: "30%",
    price: 25,
    image: require("../../assets/restaurant/user10.jpg"),
    ingredients,
    description:
      "In Dakar, the Ministers of Petroleum, Mines and Energy of the Islamic Republic of Mauritania and of Petroleum and Energy of the Republic of Senegal met on January 18 and 19 to discuss the development of the Grand Tortue Ahmeyim (GTA) field. The ministers and their teams held working meetings to take stock of the project's progress, particularly in the face of recent delays and cost increases. These discussions were an integral part of the joint monitoring of the development of the field's gas resources, supervised by the GTA Consultative Commission.The evaluation of the overall impact of the project's implementation delay and cost increases was the main point on the agenda. In accordance with the directives of their respective Heads of State and in harmony with their convergence of opinions, the ministers reaffirmed their unwavering commitment to the success of the GTA project. The start of production of gas from the Grand Tortue Ahmeyim field is now scheduled for the third quarter of 2024. The ministers stressed their determination to guarantee the rights of contractors and to protect the national interests related to the project.",
    rating: 4,
    time: "10 min",
    del_time: "5k",
    cooking_time: "3k",
  },
  
];

export default recipes;
