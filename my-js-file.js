// DOM is basically when you are using js to change the html file
//the ${ xyz} is used to dynamically render some new value as it can be changed at any time
//Date.now returns a unique number every second
//document is the parent of dom
/*In conclusion, the backtick character (`) in JavaScript is used to define template literals,
which are a convenient way to include expressions and multi-line strings in your JavaScript code*/

const taskContainer = document.querySelector(".task__container")
console.log(taskContainer);

const saveChanges = () => {
  const taskData = {
    //the line below is just creating a new unique id for every item
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

const newCard = `
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
</div>`


taskContainer.insertAdjacentHTML("beforeend", newCard);

};
