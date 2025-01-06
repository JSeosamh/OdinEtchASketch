const C = document.getElementById("C")
let numberofDivs = prompt();
console.log(C)
for(let i = 0; i<numberofDivs;i++){
let  div$ = document.createElement("div");


div$.classList.add("Divs");
console.log(div$)
console.log(C)
C.appendChild(div$);
div$.addEventListener("mouseover", function(){

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  div$.style.backgroundColor = color; 

})
//div$.addEventListener("mouseout",)
}



























function getRandomColor(colorForDiv) {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }