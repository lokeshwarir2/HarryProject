let p1 = document.getElementById("push");
var p2 = document.getElementById("pop");

p1.addEventListener("click", function () {
  let container = document.getElementById("div1");
  if (container.children.length >= 5) {
    document.getElementById("message").innerHTML = "Stack Overflow";
    console.log("Stack Overflow");
  } else {
    document.getElementById("message").innerHTML = "";
    let ele = document.getElementById("myele").value;
    let element = ele.trim();
    if (element != "") {
      console.log("HI");
      let myvalue = document.createElement("div");
      myvalue.textContent = element;
      myvalue.style.backgroundColor = "grey";
      myvalue.style.border = "2px solid white";
      myvalue.style.borderRadius = "10px";	
      myvalue.style.marginBottom = "5px";
      document.getElementById("div1").appendChild(myvalue);
    }
    document.getElementById("myele").value = "";
  }
});
p2.addEventListener("click", function () {
  let container = document.getElementById("div1");
  document.getElementById("message").innerHTML = "";
  let = document.getElementById("div1");
  if (container.children.length == 0) {
    document.getElementById("message").innerHTML = "Stack Underflow";
  }
  if (container.children.length > 0) {
    let lastChild = container.lastElementChild;
    container.removeChild(lastChild);
  } else {
    console.log("Container is empty");
  }
});
