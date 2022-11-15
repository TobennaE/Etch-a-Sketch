const container = document.getElementById('container')
const size = document.getElementById('size')
function colorRandomier(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return "rgb(" + a + ", " + b + ", " + c + ")";
}
for (let i = 0; i < 256; i++) {
    let box = document.createElement('div');
    // box.textContent = i;
    box.setAttribute('id','box' + i)
    box.style.cssText = "background-color: white"
    container.appendChild(box);
}



container.addEventListener('mouseover', function(e){
    let boxId = document.getElementById(e.target.id)
    console.log(typeof(boxId))
    boxId.style.backgroundColor = colorRandomier();
});
size.addEventListener('click', function(){
    let newSize = prompt('Enter a number less than 100')
    newSize = Number(newSize)
    console.log(newSize)
    if (newSize > 100) {
        alert("Error! Please Enter a number less than 100")
    } else  if (isNaN(newSize)) {
        alert("Error! Make Sure You Enter A Number")
    }
    
})
// container.style.cssText = 
// 'display: grid; grid-template-columns: repeat(' + newSize + ' ,';


