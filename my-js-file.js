// DOM is basically when you are using js to change the html file
//the ${ xyz} is used to dynamically render some new value as it can be changed at any time
//Date.now returns a unique number every second
//document is the parent of dom
/*In conclusion, the backtick character (`) in JavaScript is used to define template literals,
which are a convenient way to include expressions and multi-line strings in your JavaScript code*/

//Either the arrow function or the normal function can be written as shown in the two examples below

const taskContainer = document.querySelector(".task__container");
const globalStore = []; //array of objects
console.log(taskContainer);
const generateNewCard = (taskData) => `
  <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="card-body">
        <img src=${taskData.imageUrl} class="card-img-top" alt="...">
        <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
  </div>`;


const loadInitialCardData = () => {
  //localstorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

  //convert to normal objects
  const {cards} = JSON.parse(getCardData);

  //loop over those array of task object to create HTML card, inject it to dom
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

      //update our globalStore
      globalStore.push(cardObject);

  })
};

const saveChanges = () => {
  const taskData = {
    //the line below is just creating a new unique id for every item
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);
//localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
//It is stored as an object Object format and instead we want a array of objects format so we are using the JSON code below
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};


/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Another way of writing the same code above
/*------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
const taskContainer = document.querySelector(".task__container");
const globalStorage = [];
console.log(taskContainer);

function saveChanges() {
  const saveData = {
    id:`${Date.now()}`,
    imageURL: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskDescription: document.getElementById("taskdescription").value,
    taskType: document.getElementById("tasktype").value,
  };


taskContainer.insertAdjacentHTML("beforeend", newCard(saveData));
globalStorage.push(saveData);
localStorage.setItem("tasky",JSON.stringify({cards:globalStorage}));

};

const loadInitialCardData = () => {
  //need to get the card details from the localStorage
  const getData = localStorage.getItem("tasky");

  //need to convert to the object Object using parse
  const {cards} = JSON.parse(getData);

  //need to add it to the taskContainer
  cards.map((cardObject) => {taskContainer.insertAdjacentHTML("beforeend", newCard(cardObject));

  //update the globalStorage
  globalStorage.push(cardObject);
})


};

const newCard = (saveData) => `
<div class="col-sm-12 col-md-6 col-lg-4" id=${saveData.id}>
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
      <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="card-body">
      <img src=${saveData.imageURL} class="card-img-top" alt="...">
      <h5 class="card-title mt-3 fw-bold text-primary">${saveData.taskTitle}</h5>
      <p class="card-text">${saveData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${saveData.taskType}</a>
    </div>
  </div>
</div>
</div>
`;
*/



/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Issues that we face
// Page refreshes causes the data to be deleted --> hence we use local storage
//API -> Application Programming Interface
//local storage -> Accessing application via local storage
//Interface is the middle man

// Features - Delete, edit, open the card
