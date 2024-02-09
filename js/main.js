let addButton = document.querySelector(".add__button");
let groceryInputField = document.querySelector(".grocery-input-field");
let groceryList = document.querySelector(".grocery-list");
let deleteAllButton = document.querySelector(".delete-all__button");
let footer = document.querySelector(".footer");

let groceryCount = 1;

function addGroceryItem(event) {
  event.preventDefault();

  let groceryItem = groceryInputField.value;

  if (groceryItem === "") {
    return;
  }

  let groceryListItem = document.createElement("li");
  groceryListItem.className = "grocery-list__item";
  groceryList.append(groceryListItem);

  let groceryListItemText = document.createElement("p");
  groceryListItemText.className = "grocery-list__text";
  groceryListItem.textContent = groceryCount + ". " + groceryItem;
  groceryListItem.append(groceryListItemText);

  let deleteButton = document.createElement("button");
  deleteButton.className = "button delete__button";
  deleteButton.textContent = "delete";
  groceryListItem.append(deleteButton);

  groceryCount++;
  groceryInputField.value = "";
  groceryInputField.focus();

  groceryListItem.addEventListener("click", function (e) {
    groceryListItem.style.textDecoration = "line-through";
  });

  function deleteGroceryItem(event) {
    deleteButton = event.target.closest(".delete__button");
    deleteButton.parentElement.remove();
  }
  groceryList.addEventListener("click", deleteGroceryItem);
}

addButton.addEventListener("click", addGroceryItem);

deleteAllButton.addEventListener("click", function () {
  groceryList.innerHTML = "";
});
