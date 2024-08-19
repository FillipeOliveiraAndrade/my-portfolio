import carHub from "../../assets/carHub.png";
import delivery from "../../assets/delivery.png";
import pokedex from "../../assets/pokedex.jpg";
import recipes from "../../assets/recipes.png";
import findGupy from "../../assets/findGupy.png";
import goTaxi from "../../assets/goTaxi.png";
import portfolio from "../../assets/portfolio.png";

const projectsData = [
  {
    id: 1,
    image: delivery,
    title: "Delivery de bebidas",
    category: "web",
  },
  // {
  //   id: 2,
  //   image: pokedex,
  //   title: "Biblioteca de pokemons",
  //   category: "web",
  //   link: "https://pokenext-q3a7r2ctd-rakr-18.vercel.app/",
  // },
  {
    id: 3,
    image: portfolio,
    title: "3D Portfolio",
    category: "web",
    link: "https://3-d-portfolio-orcin-eight.vercel.app",
  },
  {
    id: 4,
    image: findGupy,
    title: "FindGupy",
    category: "Web",
    link: "https://findgupy.vercel.app",
  },
  {
    id: 5,
    image: carHub,
    title: "Car Hub",
    category: "Web",
    link: "https://car-showcase-six-mu.vercel.app",
  },
  {
    id: 6,
    image: goTaxi,
    title: "Go Taxi",
    category: "Web",
    link: "https://uber-clone-beryl.vercel.app",
  },
];

const projectsNav = [{ name: "All" }, { name: "Web" }, { name: "App" }];

export { projectsData, projectsNav };
