const container = document.getElementById('container')
const size = document.getElementById('size')
const sizeText = document.getElementById('size-text')
const theHeader = document.getElementById('header')
const reset = document.getElementById('reset')
const vertical = document.getElementById('vertical')
const horizontalSize = document.getElementsByClassName('horizontal-size')
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
function sizeSlider() {
    let rangeValue = size.value;
    let allDiv = document.querySelectorAll('div')
    allDiv = Array.from(allDiv)
    for (div in allDiv) {
        let divToWhite = document.getElementById('box' + div);
        divToWhite.style.backgroundColor = "white";
    };
    removeChildNodes(container)
    for (let i = 0; i < rangeValue * rangeValue; i++) {
        let box = document.createElement('div');
        // box.textContent = i;
        box.setAttribute('id','box' + i)
        box.style.cssText = "background-color: white"
        container.appendChild(box);
        container.style.cssText = `
        display: grid; 
        grid-template-columns: repeat(` + rangeValue + `, auto);
        grid-template-rows: repeat(` + rangeValue + `, auto);
        `;
    };
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
sizeText.textContent = size.value;

for (let i = 0; i < horizontalSize.length; i++){
    horizontalSize[i].addEventListener('click', function(e){
        if (e.target && e.target.matches('span#size-text')) {
            const sizeInput = document.createElement('input')
            sizeInput.setAttribute('id', 'size-input')
            sizeInput.setAttribute('placeholder','Type Value')
            sizeInput.style.cssText = 'background-color: black; color: white; border: 0'
            size.replaceWith(sizeInput)
            console.log(sizeInput)
        };
        size.oninput = function() {
            sizeText.textContent = this.value
        }
    });
};
for (let i = 0; i < horizontalSize.length; i++){
    horizontalSize[i].addEventListener('keydown', function(e) {
        if (e.target && e.target.matches('input#size-input') && e.keyCode == 13) {
            e.stopPropagation()
            let listSize = Array.from(horizontalSize[i].childNodes)
            let sizeInputValue = listSize[1].value
            console.log(sizeInputValue)
            if (isNaN(sizeInputValue)) {
                console.log(size.value)
                listSize[1].replaceWith(size)
            } else {
                listSize[1].replaceWith(size)
                size.value = listSize[1].value
                sizeText.textContent = size.value
                sizeSlider()
            }
        }
    })
};
size.onchange = function() {
    sizeSlider();
}


