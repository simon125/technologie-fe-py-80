/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

/**
 * obiekt document
 */

// document.body  // po kropce możemy dostać wiele pól związanych z naszym dokumentem
// najlepszą formą sprawdzenia co jest dostępne w obiekcie document jest sprawdzenie go w konsolo deweloperskiej w przeglądarce

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia po klawiszem esc) + właściwość innerHTML
 *
 */

const divElement = document.createElement("div");

// divElement.innerHTML = `<h1 id="heading">Hello Pythonowcy
// <input class="checkbox" type="checkbox" checked/>
// <input class="checkbox" type="checkbox" />
// <input class="checkbox" type="checkbox" />
// <input class="checkbox" type="checkbox" checked/>
// <button id="clickMe">Click Me</button> </h1>`;

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector
// document.querySelector("#clickMe");

// 2) metoda getElementById
// const button = document.getElementById("clickMe");

// 3) metoda querySelectorAll - pobiera wszystkie elmenty które spełniają warunek który przekażemy w parametrze - a przekazujemy
// albo klase elementu albo nazwe elementu albo name - tutaj mamy dużą dowolonść i swobodę po czym chcemy wyciągnąć elementy
// UWAGA pobrane elemety są tablicą nodów
// const checkboxes = document.querySelectorAll(".checkbox");

// checkboxes.forEach((checkbox) => {
//   if (checkbox.checked) {
//     console.log("ten checkbox jest zaznaczony");
//   }
// });

// console.log(checkbox);

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy dużej gamy metod dostępnej też pod tym polem
 */

// divElement.classList.add("super-div");

// divElement.classList.contains('super-div'); // sprawdzanie czy klasa instenieje zwraca true/false

// divElement.classList.replace("super-div", "super-span");

// divElement.classList.remove('super-div')

/**
 * Wstawianie elementu / osadzanie w dokumencie
 *
 * appendChild - metoda dostępna na każdym elemencie HTMLowym/Nodzie
 *
 * innerHTML - pole/właściwosć elementów HTMLowych/Nodów do której mozemy przypisać html napisanego za pomocą stringa
 *
 */

document.body.appendChild(divElement);

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

// document.body.remove()

/**
 * Eventy, event listnery - interakcja z UI
 */

// const deleteButton = document.querySelector('#deleteRow')
// const deleteButton = document.getElementById("deleteRow");

// deleteButton.addEventListener("click", (event) => {
//   event.target.parentNode.parentNode.remove();
//   console.log(event);
//   console.log("test");
// });

// const usersStaticTable = document.getElementById("usersStaticTable");

// usersStaticTable.addEventListener("click", (event) => {
//   /**
//    * wersja ze sprawdzaniem klasy
//    * jezeli wcisnięty elemnt posiada klase deleteButton to usun "dziadka"
//    */
//   if (event.target.classList.contains("deleteButton")) {
//     event.target.parentNode.parentNode.remove();
//   }
//   /**
//    * wersja z tagName
//    */
//   // if (event.target.tagName === "BUTTON") {
//   //   event.target.parentNode.parentNode.remove();
//   // }
//   console.log(event.target);
// });

let users = [];

/**
 * pobranie elmentu HTMLowego form i przypisanie go do zmiennej
 */
const dynamicUserForm = document.getElementById("dynamicUserForm");

/**
 * dodanie event listenra - będziemy "nasłuchiwać" na moment gdy user kliknie przysisk typu "submit" lub enter i
 * wykonamy funkcje strzałkową przekazaną jako 2 paramter
 */
dynamicUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /**
   * Pobranie elementów (inutów) oraz wyciąganie wartości wpisanych w te inputy - wartości są od teraz w zmiennych
   */
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;

  console.log(name, lastname, age);

  /**
   * tworzenie nowego usera na podstawie wprowadzonych wartosci do inputu
   */
  const newUser = {
    id: Math.random(),
    name: name,
    lastname: lastname,
    age: age,
  };

  /**
   * pobranie danych z localStorage które są trzymane pod kluczem "users"
   * parsujemy to jednocześnie z JSONa na (w naszym przypadku) tablicę userów (obiektów)
   *
   * istnieje jednak mozliwość że przy pierwyszm wejsciu do aplikacji w localStorage nie ma tego klucza i wartosc wyciganieta jest równa null
   */
  let lsUsers = JSON.parse(localStorage.getItem("users"));

  if (lsUsers !== null) {
    lsUsers.push(newUser);
  } else {
    lsUsers = [newUser];
  }

  /**
   * aktualizacja tablicy users w localstorygu o nowego użytkownika
   */
  localStorage.setItem("users", JSON.stringify(lsUsers));

  /**
   * aktualizacja tablicy users o nowego użytkownika
   */
  users.push(newUser);

  /**
   * aktualizacja widoku - wyświetlenie nowego usera w tabelce - przygotowanie HTMLa za to odpoweidzialnego
   */
  let htmlTableRows = "";

  for (let i = 0; i < users.length; i++) {
    htmlTableRows =
      htmlTableRows +
      `<tr>
    <td>${users[i].name}</td>
    <td>${users[i].lastname}</td>
    <td>${users[i].age}</td>
    <td><button class="deleteRow" id="${users[i].id}">Delete</button></td>
    </tr>`;
  }

  /**
   * pobranie elementu w którym chcemy umieścić wiersze tabelki
   */
  const tbody = document.getElementById("dynamic-users");

  /**
   * wstawienie stworzonych wierszy do tabelki
   */
  tbody.innerHTML = htmlTableRows;

  /**
   * wyczyszczenie pól (inputów) formularza
   */
  event.target.reset();
});

const userDynamicTable = document.getElementById("dynamic-users");

/**
 * dodanie event listenra - będziemy "nasłuchiwać" na moment gdy user kliknie przyciskiem myszki gdzieś w obrędbie elemntu tbody który ma id "dynamic-users"
 * wykonamy funkcje strzałkową przekazaną jako 2 paramter
 */
userDynamicTable.addEventListener("click", (event) => {
  /**
   * sprawdzenie czy kliknięty element (w obrębie elementu tbody) posiada klase deleteRow
   * jeżeli posiada to mamy pewność że user klikną przycisk delete i możemy wykonać akcjie usuwania elementu
   */
  if (event.target.classList.contains("deleteRow")) {
    /**
     * usunięcie elementu z drzewa DOM tzn usunięcie wiersza tabelki z ekranu
     */
    event.target.parentNode.parentNode.remove();

    const userId = event.target.id;

    console.log(userId);

    /**
     * aktualizajca zmiennej w której przechowujemy tablice userów
     */
    users = users.filter((user) => user.id !== Number(userId));

    /**
     * aktualizajca localStorage nadpisujemy stan nowym stanem userów bez usunietego usera
     */
    localStorage.setItem("users", JSON.stringify(users));
  }
});

/**
 * dodanie event listenra - będziemy "nasłuchiwać" na moment gdy dokument po raz pierwszy załaduje się w przeglądarce lub user odświeży stronę i
 * wykonamy funkcje strzałkową przekazaną jako 2 paramter
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * wyciągnięcie danych z localstorage które są pod kluczem users + parsowanie tych danych z formatu JSON
   */
  let lsUsers = JSON.parse(localStorage.getItem("users"));

  /**
   * w przypadku localstorage są dwie możliwości
   * albo klucz users istniał albo nie
   * w przypadku gdy istniał mamy tablicę pod zmienną lsUsers
   * i na jej podstawie na poczatku uruchomienia aplikacji przygotowywujemy wierze tabli do wyswietlenia
   * i ją wstawiamy w pobrany element - tbody
   */
  if (lsUsers !== null) {
    users = lsUsers;

    let htmlTableRows = "";

    for (let i = 0; i < users.length; i++) {
      htmlTableRows =
        htmlTableRows +
        `<tr>
      <td>${users[i].name}</td>
      <td>${users[i].lastname}</td>
      <td>${users[i].age}</td>
      <td><button class="deleteRow" id="${users[i].id}">Delete</button></td>
      </tr>`;
    }

    const tbody = document.getElementById("dynamic-users");

    tbody.innerHTML = htmlTableRows;
  }
});
