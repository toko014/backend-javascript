//7)დაბეჭდე 300- გვერდიანზე მეტი 
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];
console.log(books.filter(obj => obj.pages>=300).map(obj =>obj.title))