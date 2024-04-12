/**
 * ZMIENNE
 *
 * var
 *
 *
 * const
 * let
 *
 */

// var numberOfUsers = 5;

// const numberOfPosts = 5;

// let numberOfTodos = 5;

// numberOfUsers = 10;

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

// console.log(numberOfUsers);

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
 *
 * undefined
 * null
 *
 * typy referencyjne
 * obiekty
 * tablice
 * funkcje
 *
 */

// let numberOfUsers = 20; // typ number

// numberOfUsers = "test"; // typ number można nadpisać innym typem

// const NumberOfUsers = "123123"; // JS jest case sensitive

// console.log(numberOfUsers);

// console.log(NumberOfUsers);

/**
 * funkcje warunkowe
 *
 *
 */

// if (123 == "123") {
//   console.log("To są te same dane");
// }

// if (123 === "123") {
//   console.log("To są te same dane");
// } else {
//   console.log("to nie są te same dane");
// }

// let numberOfUsers = 5000;

// if (numberOfUsers > 30 && numberOfUsers < 100) {
//   console.log("Mamy więcej niż 30 osób trzeba wynaąć wiekszą sale");
// } else if (numberOfUsers <= 30) {
//   console.log("Mniej niż 30");
// } else {
//   console.log("Pogubiłem się");
// }

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 * dodatkowo sprawdzaj czy wiek ma znaczenie dodając sprawdzenie w warunku zmiennej doesAgeMatter
 */

// if (age >= 18) {
//   console.log("Użytkownik jest dorosły");
// } else if (age < 18) {
//   console.log("Użytkownik jest za młody");
//   console.log(123);
// }

// // if (doesAgeMatter === true) {
// if (doesAgeMatter) {
//   // jeżeli mamy zmienną booleanową nie musimy porównywać jej do true lub false
//   if (age >= 18) {
//     console.log("user is adult");
//   } else {
//     console.log("user is too young");
//   }
// } else {
//   console.log("You have access");
// }

// if (age >= 18) {
//   console.log("uzytkownik dorosly");
// } else {
//   console.log("dziecko");
// }

/**
 * struktury danych
 * obiekty (słowniki) i tablice
 */

// const namesOfUsers = ["John", "Jane", "Jack", 123, true];

// const user1 = {
//   name: "Jack",
//   age: 10,
//   gender: "male",
//   isAdult: false,
// };

// const user2 = {
//   name: "Jack",
//   age: 10,
//   gender: "male",
//   isAdult: false,
// };

// const user3 = {
//   name: "Jack",
//   age: 10,
//   gender: "male",
//   isAdult: false,
// };

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */
// if (user1  === user2) {
//   console.log("te obiekty są takie same");
// }

// if (JSON.stringify(user1) === JSON.stringify(user2)) {
//   console.log("te obiekty są takie same");
// }

// const users = [user1, user2, user3];

// console.log(user1);

// console.table(users);

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string
 * age: number
 * todos: array of strings
 *
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista będzie zawierała 3 elementy/obiekty
 *
//  * rezultat możesz wykonsolować za pomocą console.table(users)
//  */

// const todos = ["Wstać rano", "Zjeść śniadanie"];

// const user1 = {
//   name: "John",
//   lastName: "Wick",
//   age: 45,
//   todos: todos,
// };

// console.log(user1);

// const user2 = {
//   name: "Bill",
//   lastName: "Cosby",
//   age: 23,
//   todos: ["zrobić zakupy", "ugotować obiad", "wyprowadzić psa"],
// };
// console.log(user2);
// const user3 = {
//   name: "John",
//   lastName: "Rambo",
//   age: 70,
//   todos: ["zrobić bicki", "przebiec maraton", "przygotować napój proteinowy"],
// };
// const user4 = {
//   name: "Janet",
//   lastName: "Jackson",
//   age: 45,
//   todos: ["zaśpiewać solo", "zatańczyć z nieznajomym", "wystąpić w klubie"],
// };
// uzytkownicy = [user2, user3, user4];
// console.table(uzytkownicy);

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

// for (let i = 0; i <= 100; i++) {
//   console.log(`Index: ${i}`);
// }

// const todos = ["Wstać rano", "Zjeść śniadanie"];
// const blogPosts = [
//   { title: "test123", content: "riuhrguifheriuh uihgeiuhg", isRead: true },
//   { title: "tets222", content: "hdfhfghfd gh dfgh uihgeiuhg", isRead: false },
// ];

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

// console.table(blogPosts);

// for (let i = 0; i < blogPosts.length; i++) {
//   if (blogPosts[i].isRead === false) {
//     blogPosts[i].isRead = true;
//   }
// }

// console.table(blogPosts);

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 */

// const user1 = {
//   name: "Bill",
//   lastName: "Cosby",
//   age: 13,
// };

// const user2 = {
//   name: "Bill",
//   lastName: "Cosby",
//   age: 23,
// };

// const user3 = {
//   name: "John",
//   lastName: "Rambo",
//   age: 70,
// };

// const user4 = {
//   name: "Janet",
//   lastName: "Jackson",
//   age: 15,
// };

// const users = [user1, user2, user3, user4];

// console.table(users);

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age >= 18) {
//     users[i].isAdult = true;
//   } else {
//     users[i].isAdult = false;
//   }
// }

// for (let i = 0; i < users.length; i++) {
//   users[i].isAdult = users[i].age >= 18;
// }

// console.table(users);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

// function addTwoNumbers(number1, number2) {
//   const suma = number1 + number2;

//   return suma;
// }

// const addTwoNumbers = (number1, number2) => number1 + number2;

const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
};

console.log(addTwoNumbers(20, 20));
console.log(addTwoNumbers(10, 20));
console.log(addTwoNumbers(50, 200));
console.log(addTwoNumbers(60, 20));

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

// const user3 = {
//   name: "John",
//   lastName: "Rambo",
//   age: 70,
// };

// const isUserAdult = (user) => {
//   if (user && typeof user.age === "number") {
//     if (user.age >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     console.log("Podałeś nie poprawne dane");
//   }
// };

// isUserAdult(undefined);

// // const isUserAdult = (user) => user.age >= 18;

// console.log(isUserAdult(user3));

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
