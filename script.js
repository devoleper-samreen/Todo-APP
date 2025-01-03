let input = document.getElementById("input");
const addBtn = document.getElementById("btn");
let list_item = document.getElementById("list_item");

function add_item() {

  if (input.value != "") {
    console.log(input.value)

    // Creating element and adding value to it
    let li = document.createElement("li");
    li.innerText = input.value;

    // Adding li to ul
    list_item.appendChild(li);

    // Reset the value of box
    input.value = ""

    // // Delete a li item on click 
    // li.onclick = function () {
    //   this.parentNode.removeChild(this);
    // }
  }
  else {
    alert("plz add a value to item");
  }

}

addBtn.addEventListener("click", add_item);