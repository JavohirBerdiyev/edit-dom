let cartItemsArray = [
  {
    id: 1,
    name: "Husan Dadajonov",
    desc: ` Some quick example text to build on the card title and make up the bulk of the card's content.`,
  },
  {
    id: 2,
    name: "Muhammadsodiq",
    desc: `Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and Popper. `,
  },
];

const cartList = document.querySelector("#card-list");
const addedModal = document.querySelector("#addedModal");
const exampleInputName1 = document.querySelector("#exampleInputName1");
const floatingTextarea = document.querySelector("#floatingTextarea");
const formAdded = document.querySelector("#formAdded");
const formEdit = document.querySelector("#formEdit");
const staticName = document.querySelector("#staticName");
const staticDesc = document.querySelector("#staticDesc");
const editTextarea = document.querySelector("#editTextarea");
const inputNameEdit = document.querySelector("#inputNameEdit");

let newItems = [];

function showItems(cartItemsArray) {
  newItems = [];
  cartItemsArray.forEach((item) => {
    let div = ` 
     <div class="card col-xs-4">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.desc}</p>
        <a href="#" class="btn btn-primary"
         data-bs-toggle="modal"
        data-bs-target="#moreViewCard"
        onclick='viewMore(${item.id})';
          ><i class="bx bx-wink-smile"></i
        ></a>
        <a href="#" class="btn btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#editModal"  onclick='editCard(${item.id})'><i class="bx bx-edit-alt"></i
        ></a>
      </div>
    </div>
  `;
    newItems.push(div);
  });

  cartList.innerHTML = newItems.join("");
}
showItems(cartItemsArray);

formAdded.addEventListener("submit", (e) => {
  let count = cartItemsArray[cartItemsArray.length - 1].id;
  e.preventDefault();
  cartItemsArray.push({
    id: ++count,
    name: exampleInputName1.value,
    desc: floatingTextarea.value,
  });
  showItems(cartItemsArray);

  exampleInputName1.value = "";
  floatingTextarea.value = "";
});

function viewMore(elId) {
  console.log(elId);
  cartItemsArray.forEach((item) => {
    if (elId === item.id) {
      staticName.innerHTML = item.name;
      staticDesc.innerHTML = item.desc;
    }
  });
}

function editCard(elId) {
  cartItemsArray.forEach((item) => {
    if (elId === item.id) {
      inputNameEdit.value = item.name;
      editTextarea.value = item.desc;
      editItem(elId);
    }
  });
}

function editItem(elId) {
  let count = 1;
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(cartItemsArray[elId - 1].name);
    if (count == 1) {
      cartItemsArray[elId - 1].name = inputNameEdit.value;
      cartItemsArray[elId - 1].desc = editTextarea.value;
      showItems(cartItemsArray);
      count++;
    }
  });
}
