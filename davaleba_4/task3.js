//3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false }
];
let filtered=students.filter(obj => obj.passed===true)
console.log(filtered)