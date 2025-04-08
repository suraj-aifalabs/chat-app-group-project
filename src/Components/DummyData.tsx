import avocadoToast from "../Images/foodImages/avocadoToast.jpg";
import burgerBliss from "../Images/foodImages/burgerBliss.jpg";
import margherithaPizza from "../Images/foodImages/margheritaPizza.webp";
import pancake from "../Images/foodImages/pancake.jpg";
import scrambledEggs from "../Images/foodImages/scrambledEggs.jpg";
import waffle from "../Images/foodImages/waffle.jpg";
import pasta from "../Images/foodImages/pasta.png";
import frenchToast from "../Images/foodImages/frenchToast.jpg";
import frenchFries from "../Images/foodImages/frenchFries.webp";
import smoothieBowl from "../Images/foodImages/smoothieBowl.jpg";
import salad from "../Images/foodImages/salad.webp";
import Croissant from "../Images/foodImages/Croissant.jpg";
import icedCoffee from "../Images/beveragesImages/icedCoffee.webp";
import Cappuccino from "../Images/beveragesImages/Cappuccino.jpg";
import bubbleTea from "../Images/beveragesImages/bubbleTea.webp";
import oreoShake from "../Images/beveragesImages/oreoShake.jpg";
import hotChocolate from "../Images/beveragesImages/hotChocolate.webp";
import greenTea from "../Images/beveragesImages/greenTea.webp";

type Item = {
  id: number;
  image: string;
  cost: string;
  name: string;
};

// Dummy data with type annotation
export const bestSellersData: Item[] = [
  {
    id: 1,
    image: avocadoToast,
    cost: "350",
    name: "Avocado Toast",
  },
  {
    id: 2,
    image: burgerBliss,
    cost: "450",
    name: "Burger Bliss",
  },
  {
    id: 3,
    image: margherithaPizza,
    cost: "599",
    name: "Margherita Pizza",
  },
];
export const foodData: Item[] = [
  {
    id: 1,
    image: pancake,
    cost: "399",
    name: "Pancake",
  },
  {
    id: 2,
    image: scrambledEggs,
    cost: "350",
    name: "Scrambled Eggs",
  },
  {
    id: 3,
    image: waffle,
    cost: "399",
    name: "Waffle",
  },
  {
    id: 4,
    image: pasta,
    cost: "450",
    name: "Pasta",
  },
  {
    id: 5,
    image: frenchToast,
    cost: "399",
    name: "French Toast",
  },
  {
    id: 6,
    image: frenchFries,
    cost: "250",
    name: "French Fries",
  },
  {
    id: 7,
    image: smoothieBowl,
    cost: "380",
    name: "Smoothie Bowl",
  },
  {
    id: 8,
    image: salad,
    cost: "350",
    name: "Salad",
  },
  {
    id: 9,
    image: Croissant,
    cost: "299",
    name: "Croissant",
  },
];
export const beveragesData: Item[] = [
  {
    id: 1,
    image: icedCoffee,
    cost: "150",
    name: "Iced Coffee",
  },
  {
    id: 2,
    image: Cappuccino,
    cost: "199",
    name: "Cappuccino",
  },
  {
    id: 3,
    image: bubbleTea,
    cost: "250",
    name: "Bubble Tea",
  },
  {
    id: 4,
    image: hotChocolate,
    cost: "299",
    name: "Hot Chocolate",
  },
  {
    id: 5,
    image: oreoShake,
    cost: "180",
    name: "Oreo Shake",
  },
  {
    id: 6,
    image: greenTea,
    cost: "120",
    name: "Green Tea",
  },
];
