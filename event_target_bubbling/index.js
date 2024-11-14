// window.onload = function() {
var resultElem = document.getElementById("result");
document.getElementById("1").addEventListener(
  "click",
  function (event) {
    resultElem.innerHTML += "<div>target: " + event.target["id"] + "</div>";
    resultElem.innerHTML +=
      "<div>currentTarget: " + event.currentTarget["id"] + "</div>";
  },
  false
);
document
  .getElementById("2")
  .dispatchEvent(new Event("click", { bubbles: true }));
// }

function parentClick(){
  console.log("Parent clicked");
  }
  
 function childClick(){
  console.log("child clicked");
  }
  
  // If we click on this element it will give this output-
  
  // child clicked
  
  // Parent clicked

  // To Stop Event Bubbling means to prevent calling parent element we use stopPropagation method.

// Example-


function parentClick(){
console.log("Parent clicked");
}

function childClick(event){
event.stopPropagation()
console.log("child clicked");
}

// So, now when you click on this button it will give an output

// child clicked

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
  }
  
  function editCell(e) {
  var target = this.getEventTarget(e);
  console.log(target)
  if(target.tagName.toLowerCase() === 'td') {
  // DO SOMETHING WITH THE CELL
  }
  }


  const divs = Array.from(document.querySelectorAll('div'));
        
  const button = document.querySelector('button');
  
  function logText(e) {
  
  console.log(this.classList.value);
  
  e.stopPropagation(); // stop bubbling!
  
  // console.log(this);
  
  }
  
  divs.forEach(div => div.addEventListener('click', logText, {
  
  capture: false,
  
  once: true
  
  }));
  
  button.addEventListener('click', () => {
  
  console.log('Click!!!');
  
  }, {
  
  once: true
  
  });
  
  