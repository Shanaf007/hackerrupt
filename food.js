var button = document.getElementById("button");
var select = document.getElementById("select");
var basket = document.getElementById("basket");

// Add text
function addToBasket() {
  var li = document.createElement("li");
  li.innerHTML = select.options[select.selectedIndex].text;
  basket.appendChild(li);
}

button.addEventListener("click", addToBasket);
<h1>Select your items!</h1>

<form id="myForm">

  <p>Item:
    <select id="select">

      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>
      <option value="4">four</option>

    </select>

    <button id="button" type="button">+</button></p>

</form>

<h1>Basket</h1>

<ul id="basket"></ul>
