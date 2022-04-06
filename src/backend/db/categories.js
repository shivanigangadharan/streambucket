import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "piano tunes",
    description:
      "Cherish classical, bollywood and many mores genres played on this evergeen instrument.",
  },
  {
    _id: uuid(),
    categoryName: "guitar songs",
    description:
      "From bollywood to western to indie, find all your favourite song covers played on guitar.",
  },
  {
    _id: uuid(),
    categoryName: "sitar covers",
    description:
      "A blend of Indian classical into a variety of songs played on sitar by talented maestros.",
  },
];
