import Card from "./Card";
import HarryPotter from "../assets/harrypotter.jpg";
import GOT from "../assets/agameofthrones.jpg";
import LOTR from "../assets/lordoftherings.jpg";

const data = [
  {
    id: 1,
    name: "Harry Potter and the Sorcerer's Stone",
    image: HarryPotter,
    description:
      "'Harry Potter and the Sorcerer's Stone' follows the journey of a young boy, Harry Potter, who discovers on his eleventh birthday that he is a wizard. He attends Hogwarts School of Witchcraft and Wizardry, makes friends, and uncovers the mystery of the Sorcerer's Stone, an alchemical substance with the power to grant immortality.",
    characters: ["Harry Potter", "Ron Weasley", "Hermione Granger"]
    },
  {
    id: 2,
    name: "A Game Of Thrones",
    image: GOT,
    description:
      "'Game of Thrones', the first book in George R.R. Martin's series, follows noble families vying for control of the Iron Throne in the land of Westeros, amidst political intrigue, betrayal, and the looming threat of supernatural forces.",
    characters: ["Eddard Stark", "Daenerys Targaryen", "Tyrion Lannister"]
    },
  {
    id: 3,
    name: "Lord Of The Rings",
    image: LOTR,
    description:
      "'The Fellowship of the Ring,' the first book of J.R.R. Tolkien's 'The Lord of the Rings' trilogy, follows Frodo Baggins as he embarks on a perilous journey to destroy a powerful ring that threatens Middle-earth, joined by a diverse group of allies.",
    characters: ["Frodo Baggins", "Gandalf the Grey", "Aragorn"]
    },
];

const CardList = () => {

    function action(name, characters){
        console.log(`The title of this book is ${name}, and its main characters are ${characters}`)
    }

  return (
    <div className="card-list">
      {data.map((card) => (
        <Card key={card.id} name={card.name} image={card.image} description={card.description} characters = {card.characters} action={action}/>
      ))}
    </div>
  );
};

export default CardList;
