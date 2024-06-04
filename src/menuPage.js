export default function createMenuContent() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const menuItemsContainer = document.createElement("div");

  h1.innerText = "Pepperoni Pizza";
  p.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quasiassumenda voluptas autem necessitatibus harum eaque sed illum illo doloremque!`;
  content.appendChild(h1);
  content.appendChild(p);

  // create a menu item
  const firstMenuItem = document.createElement("div");
  firstMenuItem.classList.add("menu-item");

  const firstMenuItemTitle = document.createElement("h3");
  const firstMenuItemDescription = document.createElement("p");

  firstMenuItemTitle.innerText = "Pepperoni Pizza";
  firstMenuItemDescription.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quasi assumenda voluptas autem necessitatibus harum eaque sed illum illo doloremque!`;

  firstMenuItem.append(firstMenuItemTitle);
  firstMenuItem.append(firstMenuItemDescription);

  menuItemsContainer.append(firstMenuItem);
}
