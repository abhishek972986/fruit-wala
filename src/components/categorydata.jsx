import { TiThSmallOutline } from "react-icons/ti";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: <FaGlassMartiniAlt className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 3,
    name: "Fruits",
    icon: <GiFruitBowl className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 4,
    name: "Coffee",
    icon: <CiCoffeeCup className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 5,
    name: "Veg",
    icon: <FaLeaf className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 6,
    name: "Pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 7,
    name: "Burger",
    icon: <GiHamburger className="w-[60px] h-[60px] text-blue-500" />,
  },
];

export default Categories;
