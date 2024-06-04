import pepperoniPizza from "./pepperoni-pizza.png";

export default function createMenuContent() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  const menuItemsContainer = document.createElement("div");
  const img = new Image(300, 300);

  h1.innerText = "Our Delicious Menu";
  content.appendChild(h1);
  menuItemsContainer.classList.add("menu-container");

  // create a menu item
  const firstMenuItem = document.createElement("div");
  firstMenuItem.classList.add("menu-item");

  const firstMenuItemTitle = document.createElement("h3");
  const firstMenuItemDescription = document.createElement("p");

  firstMenuItemTitle.innerText = "Pepperoni Pizza";
  firstMenuItemDescription.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quasi assumenda voluptas autem necessitatibus harum eaque sed illum illo doloremque!`;
  img.src = pepperoniPizza;

  firstMenuItem.append(firstMenuItemTitle);
  firstMenuItem.append(firstMenuItemDescription);
  firstMenuItem.append(img);

  menuItemsContainer.append(firstMenuItem);

  content.appendChild(menuItemsContainer);
}
