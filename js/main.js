let addButton = document.querySelector(".add-button");
let groceryInputField = document.querySelector(".grocery-input-field");
let groceryList = document.querySelector(".grocery-list");

let groceryCount = 1;

function addGroceryItem(event) {
  event.preventDefault();
  let groceryItem = groceryInputField.value;

  let groceryListItem = document.createElement("li");
  groceryListItem.className =
    "grocery-list__item grocery-list__item" + "_" + groceryCount;
  groceryListItem.textContent = groceryItem;
  groceryList.append(groceryListItem);

  let deleteButton = document.createElement("button");
  deleteButton.className = "button delete-button";
  deleteButton.textContent = "delete";
  groceryListItem.append(deleteButton);
  deleteButton.style.marginRight = "10px";

  let editButton = document.createElement("button");
  editButton.className = "button edit-button";
  editButton.textContent = "edit";
  groceryListItem.append(editButton);

  groceryCount++;
  groceryInputField.value = "";
  groceryInputField.focus();
}

addButton.addEventListener("click", addGroceryItem);
