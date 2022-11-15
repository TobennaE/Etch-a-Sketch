const container = document.getElementById('container')
const size = document.getElementById('size')
const theHeader = document.getElementById('header')
const reset = document.getElementById('reset')
const vertical = document.getElementById('vertical')
function colorRandomier(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return "rgb(" + a + ", " + b + ", " + c + ")";
}
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
for (let i = 0; i < 16 * 16; i++) {
    let box = document.createElement('div');
    // box.textContent = i;
    box.setAttribute('id','box' + i)
    box.style.cssText = "background-color: white"
    container.appendChild(box);
    container.style.cssText = `
    display: grid; 
    grid-template-columns: repeat(` + 16 + `, auto);
    grid-template-rows: repeat(` + 16 + `, auto);
    `;
}
theHeader.addEventListener('mouseover', function(e){
    if (e.target.id != 'header'){
        let spanId = document.getElementById(e.target.id)
        console.log(typeof(spanId));
        spanId.style.color = colorRandomier();
    };
});
reset.addEventListener('click', function(){
    let allDiv = document.querySelectorAll('div')
    allDiv = Array.from(allDiv)
    for (div in allDiv) {
        let divToWhite = document.getElementById('box' + div)
        divToWhite.style.backgroundColor = "white";

    }
});
vertical.addEventListener('click', function(){
    let verticalSize = prompt('Enter a number less than or equal to 1225')
    verticalSize = Number(verticalSize)
    console.log(verticalSize)
    if (verticalSize > 1225) {
        alert("Error! Please Enter a number less than or equal to 1225")
    } else  if (isNaN(verticalSize)) {
        alert("Error! Make Sure You Enter A Number")
    }
    if (verticalSize <= 1225) {
        removeChildNodes(container)
        for (let i = 0; i < verticalSize; i++) {
            let box = document.createElement('div');
            box.setAttribute('id','box' + i)
            box.style.cssText = "background-color: white"
            container.appendChild(box);
            container.style.cssText = `
            display: grid; 
            grid-template-columns: repeat(` + verticalSize + `);
            grid-template-rows: repeat(` + verticalSize + `);
            `;
        };
    };
})





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
    if (newSize <= 100) {
        removeChildNodes(container)
        for (let i = 0; i < newSize * newSize; i++) {
            let box = document.createElement('div');
            // box.textContent = i;
            box.setAttribute('id','box' + i)
            box.style.cssText = "background-color: white"
            container.appendChild(box);
            container.style.cssText = `
            display: grid; 
            grid-template-columns: repeat(` + newSize + `, auto);
            grid-template-rows: repeat(` + newSize + `, auto);
            `;
        };
    }
    
})


