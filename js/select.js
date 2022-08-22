const cart = [];
function addToCart(element) {
  element.disabled = true;
  element.classList.add("disabled:bg-gray-500");
  const pdName = element.parentNode.children[0].innerText;
  const pd = {
    pdName: pdName,
  };

  if (cart.length == 5) {
    alert("Already you selected five players");
  } else {
    cart.push(pd);
    const ol = document.getElementById("selected-player");
    const li = document.createElement("li");

    li.innerText = `${pdName}`;
    ol.appendChild(li);
  }
}
