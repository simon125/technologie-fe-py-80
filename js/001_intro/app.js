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

// console.log(zmienna);

// var zmienna = 123;

// zmienna = "123";

// linijka poniżej powoduje
// app.js Uncaught ReferenceError: Cannot access 'name1' before initialization
// // console.log(name1);

// const age = 123;

// let name1 = "John";

// age = 123;

// console.log("test123");
// console.log(age);
// console.log(name1);

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

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

const przykładowyString = "test"; // rodzaj cudzysłowi nei ma znaczenia
const stringBactici = `werw
er ${przykładowyString}   f
ef ${przykładowyString}`;

przykładowyString.includes("te");

przykładowyString.length;

// przykładowyString

const przykładowyNumber = 312.123; // wszystkie typy liczbowe są wrzucone do jednego
const przykładowyBoolean = true; // false

// wartości negatywne
const przykładwyNull = null; // odpowiednik none w pythonie
let przykładowyUndefined = undefined;

/**
 * funkcje warunkowe
 *
 *
 */

if (
  przykładowyBoolean === true &&
  (przykładwyNull === null || przykładowyString.length >= 10)
) {
  console.log("Jupiii");
} else if (przykładowyBoolean === false) {
  console.log("test");
} else {
  console.log("tu już na pewno wejde jeżeli nie byłem nigdzie indziej");
}

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 * dodatkowo sprawdzaj czy wiek ma znaczenie dodając sprawdzenie w warunku zmiennej doesAgeMatter
 */

const age = 12;
const doesAgeMatter = true;

if (age >= 18 && doesAgeMatter) {
  console.log("Użytkownik dorosły");
} else {
  console.log("Użytkownik nieletni");
}

/**
 * struktury danych
 * obiekty (słowniki) i tablice
 */

const user = {
  name: "John",
  lastName: "Doe",
  age: 16,
  isAdult: false,
  hobbies: ["programowanie", "zakupy", "spanie"],
};

/**
 * Aktualizacja istniejacych pól w słowniku
 */
user.age = 20;
user.isAdult = true;

/**
 * dodawanie nowych kluczy/pól do słownika/obiektu
 */
user.newKey = ["hej", 123];

user.nowyKluczPoprawny = user.newKey;
// usunięcie konkretnego klucza/pola ze słownika/obiektu
delete user.newKey;

console.log(user);

console.log(user.hobbies);

// const todos = [123,"123", true, {}, null];
const todos = ["Pouczyć się JSa", "Pouczyć się HTMLa"];
console.log(todos[0]);

// Przypisanie nowej tablicy do zmiennej const jest nie możliwe
// todos = ['123', '123']
// dodanie nowych wartości do tablicy const jest poprawne
// metoda 1 na dodawanie nowch wartości
todos.push("poczuyć się struktur danych");
// metoda 2 na dodawanie nowch wartości
todos[3] = "Poczuyc się CSSa";

// edycja istniejących elementów w tablicy
todos[0] = "JSa już umiem";

console.table(todos);

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user1 który będzie posiadał
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
 * rezultat możesz wykonsolować za pomocą console.table(users)
 */

const testUser1 = {
  name: "John",
  lastName: "Doe",
  age: 123,
  todos: ["pouczyć się JSa"],
};

const testUser2 = {
  name: "Jane",
  lastName: "Doe",
  age: 22,
  todos: ["pouczyć się JSa"],
};

const testUsers = [
  testUser1,
  testUser2,
  { name: "Jim", lastName: "Doe", age: 3, todos: [] },
];

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

for (let i = 0; i < testUsers.length; i++) {
  console.log("test");
  testUsers[i].isProccessed = true;
}

console.table(testUsers);

/**
 * funkcja przekazana do forEacha (najczęsciej jest to funckja strzałkowa czyli lambda)
 * przyjmuje 3 parametry w określonej kolejności - są to:
 * - element - referencja do elementu z danego obrotu pętli
 * - index - liczba wskazująca na number obrótu pętli
 * - arr - referencja do całej tablicy po której iteruje się funckja forEach
 * 
 testUsers.forEach((element, index, arr) => {
    if (element.age >= 18) {
     console.log(`${element.name} is adult`);
    }
  });
 *  
 */
testUsers.forEach((user, index) => {
  if (user.age >= 18) {
    console.log(`${user.name} is adult`);
  }
});

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 */

const user1 = {
  name: "Bill",
  lastName: "Cosby",
  age: 13,
};

const user2 = {
  name: "Bill",
  lastName: "Cosby",
  age: 23,
};

const user3 = {
  name: "John",
  lastName: "Rambo",
  age: 70,
};

const user4 = {
  name: "Janet",
  lastName: "Jackson",
  age: 15,
};

const users5 = [user1, user2, user3, user4];

// users5.forEach((user) => {
//   if (user.age > 18) {
//     user.isAdult = true;
//   } else {
//     user.isAdult = false;
//   }
// });

users5.forEach((user) => {
  user.isAdult = user.age > 18;
});

console.table(users5);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

function exampleVoidFunction() {
  console.log("Hej jestem funkją pustą bo nic nie zwracam");
}

function addTwoNumbers1(number1, number2) {
  const sum = number1 + number2;
  /**
   * ciało funkcji
   */
  return sum;
}

const addTwoNumbers2 = (number1, number2) => {
  const sum = number1 + number2;
  /**
   * ciało funkcji
   */
  return sum;
};

const addTwoNumbers3 = (number1, number2) => number1 + number2;

const sum123 = addTwoNumbers1(123, 321);

console.log(sum123);

const subTwoNumbers = (n1, n2) => {
  return n1 - n2;
};

const divideTwoNumbers = (n1, n2) => n1 / n2;

const addAgesOfTwoUsers = (user1, user2) => {
  return user1.age + user2.age;
};

const result = addAgesOfTwoUsers(
  { name: "John", age: 20 },
  { name: "Jerry", age: 30 }
);
console.log(result);

// function isUserAdult(user){
//   if(user.age > 18){
//     return true
//   }else {
//     return false
//   }
// }

// function isUserAdult(user){
//  return user.age > 18;
// }

function isUserAdult(user) {
  if (typeof user === "object" && !!user && user.age) {
    return user.age > 18;
  }

  return "Nie poprawne dane";
}

const result1 = isUserAdult(null);
const result2 = isUserAdult("");
const result3 = isUserAdult();
const result4 = isUserAdult(123);
const result5 = isUserAdult({ age: 20 });
const result6 = isUserAdult({ age: 16 });

console.table([result1, result2, result3, result4, result5, result6]);

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

const getAvarageAge = (users) => {
  let sum = 0;
  users.forEach((user) => {
    // sum = user.age + sum;
    sum += user.age;
  });

  return sum / users.length;
};

const avgAge = getAvarageAge(users5);

console.log(avgAge);

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
