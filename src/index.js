// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Add event listeners to example row
exampleRow.querySelector(".btn-delete").addEventListener("click", () => {
  exampleRow.remove();
});

exampleRow.querySelector(".btn-like").addEventListener('click', () => {
  exampleRow.classList.toggle("btn-like");
});






// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((element) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${element.pictureUrl}" />
    </td>
    <td> ${element.name} </td>
    <td> ${element.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  }); 
  
  // ITERATION 3 - Like Buttons
  newRow.querySelector(".btn-like").addEventListener('click', () => {
    newRow.classList.toggle("btn-like1");
  });
});
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener('click', () => {

  const index = Math.floor(Math.random() * contacts.length);

  const list = document.createElement("tr");

  list.innerHTML = `
    <td>
      <img src="${contacts[index].pictureUrl}" />
    </td>
    <td> ${contacts[index].name} </td>
    <td> ${contacts[index].popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(list);

  // Add event listeners to newly added row
  list.querySelector(".btn-delete").addEventListener("click", () => {
    list.remove();
  });

  list.querySelector(".btn-like").addEventListener('click', () => {
    list.classList.toggle("btn-like1");
  });

});