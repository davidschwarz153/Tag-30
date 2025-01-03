const codingLanguages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

const sortDescending = codingLanguages.sort().reverse();
console.log(sortDescending);
//

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}
const myName = "David";
console.log(`Original: ${myName} | Umgedreht: ${reverseString(myName)}`);
const terms = ["Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner"];
terms.forEach((term) => {
  console.log(`Original: ${term} | Umgedreht: ${reverseString(term)}`);
});
const sentences = ["Ella mag alle Bohnen", "han nesaH has ennaH"];
sentences.forEach((sentence) => {
  console.log(`Original: ${sentence} | Umgedreht: ${reverseString(sentence)}`);
});
//
const string: string =
  "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string.includes("Piper"));
console.log(string.includes("piper"));

console.log(string.includes("peck", 10));
console.log(string.includes("peck", 25));
//
const artworks = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Der Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworksDates = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Der Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

const elements = artworks.map((artwork, index) => {
  const [name, artist] = artwork.split("-");
  const [, date] = artworksDates[index].split("-");
  return `${name} wurde von ${artist} im Jahre ${date} gemalt.`;
});
console.log(elements.join("\n"));
//

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks = drinks.map((drink) => drink.toUpperCase());
console.log(upperDrinks);
drinks.map((drink) => console.log(`I like to drink ${drink}`));
//

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = fahrenheit.map((grad) => Math.round((grad - 32) / 1.8));
console.log(celsius);
//
const checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];


const funCheck = checkNumber.map((num)=> {
    if (num % 3 === 0 ) {
       return num + 100
    } else {
       return num
    }
} )
console.log(funCheck);
//
const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
const processedFileNames: string[] = album.map((albumName) => {
    const lowerCaseName = albumName.toLowerCase();
    const lastDotIndex = lowerCaseName.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return "invalid";
    }
    return lowerCaseName.slice(0, lastDotIndex); 
  });
  console.log(processedFileNames);

// 
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersArrow = zahlen.filter((num) => num % 2 === 0);
const oddNumbersArrow = zahlen.filter((num) => num % 2 !== 0);

console.log("gerade:", evenNumbersArrow);
console.log("ungrade:", oddNumbersArrow);


