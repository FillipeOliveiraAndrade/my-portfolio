import mario from '../../assets/mario.png';
import delivery from '../../assets/delivery.png';
import pokedex from '../../assets/pokedex.jpg';
import recipes from '../../assets/recipes.png';
import Work5 from '../../assets/work5.jpg';

const projectsData = [
  {
    id: 1,
    image: mario,
    title: "Game Mário",
    category: "web",
    link: 'https://game-mario-iota.vercel.app/',
  },
  {
    id: 2,
    image: delivery,
    title: "Delivery de bebidas",
    category: "web",
  },
  {
    id: 3,
    image: pokedex,
    title: "Biblioteca de pokemons",
    category: "web",
    link: 'https://pokenext-q3a7r2ctd-rakr-18.vercel.app/'
  },
  {
    id: 4,
    image: recipes,
    title: "App de receitas",
    category: "app",
    link: 'https://pokenext-q3a7r2ctd-rakr-18.vercel.app/'
  }
];

const projectsNav = [
  { name: 'All' },
  { name: 'Web' },
  { name: 'App' },
];

export { projectsData, projectsNav };