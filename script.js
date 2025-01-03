let input = document.getElementById("input");
const addBtn = document.getElementById("btn");
let list_item = document.getElementById("list_item");

function add_item() {

  if (input.value != "") {
    console.log(input.value)


    let li = document.createElement("li");
    li.innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add('Dbtn');
    li.appendChild(btn);


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