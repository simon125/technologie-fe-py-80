/**
 * AJAX i nowe podejście do wymiany danych z serwerem
 */

/**
 * fetch
 */

/**
 * pobranie listy użytkowników
 * 
 * 
 fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 * 
 */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let htmlTableRows = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].completed);
      htmlTableRows =
        htmlTableRows +
        `<tr>
       <td>${data[i].id}</td>
       <td>${data[i].title}</td>
       <td>
          <input type="checkbox" ${data[i].completed && "checked"}/>
       </td>
   
       </tr>`;
    }

    const tbody = document.getElementById("todos");

    tbody.innerHTML = htmlTableRows;
  })
  .catch(() => {
    console.error("Coś poszło nie tak skontatkuj się z ADMINem");
  })
  .finally(() => {});

/**
 * dodawanie nowego uzytkownika *
 */

document.querySelector("#createUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formProps),
  });
});
