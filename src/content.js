export default function createHomeContent() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.id = "welcome-message";
  p.id = "description";

  h1.innerText = "Welcome Pizzalovers!";
  p.innerText = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aliquam
  suscipit aliquid impedit voluptatibus nihil perferendis sit eligendi
  tempore reiciendis? A deleniti ut quisquam ea reiciendis illum vel
  provident saepe, modi odit tempore aliquam voluptas dolor explicabo
  dignissimos eius libero iure veritatis facilis quae quidem
  exercitationem, voluptate itaque. Tempora, magnam.`;

  content.appendChild(h1);
  content.appendChild(p);
}
