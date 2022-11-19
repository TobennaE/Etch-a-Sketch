const mainHTML = document.documentElement
const container = document.getElementById('container')
const size = document.getElementById('size')
const vSize = document.getElementById('sizeV')
const sizeText = document.getElementById('size-text')
const vSizeText = document.getElementById('size-textV')
const theHeader = document.getElementById('header')
const reset = document.getElementById('reset')
const vertical = document.getElementById('vertical')
const horizontalSize = document.getElementsByClassName('horizontal-size')
const verticalSize = document.getElementsByClassName('vertical-size')
const backGroundChange = document.getElementById('backGroundChange')
const blackBack = document.getElementById('blackBack')
const grayBack = document.getElementById('grayBack')
const blackColor = document.getElementById('blackColor')

blackBack.oninput = function() {
    mainHTML.style.backgroundColor = 'black'
}
grayBack.oninput = function() {
    mainHTML.style.backgroundColor = 'gray'
}
function colorRandomier(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return "rgb(" + a + ", " + b + ", " + c + ")";
}
function colorRandomierOpacity(opac) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return "rgb(" + a + ", " + b + ", " + c + ', ' + opac + ")";
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
function sizeSliderV() {
    let verticalSize = vSize.value
    let allDiv = document.querySelectorAll('div')
    allDiv = Array.from(allDiv)
    for (div in allDiv) {
        let divToWhite = document.getElementById('box' + div);
        divToWhite.style.backgroundColor = "white";
    };
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
        if (blackColor.checked == true) {
            spanId.style.color = 'black'
        } else {
            spanId.style.color = colorRandomier();
        }
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

sizeText.textContent = size.value + ' X ' + size.value;
size.oninput = function() {
    sizeText.textContent = this.value + ' X ' + this.value
};

vSizeText.textContent = vSize.value;
vSize.oninput = function() {
    vSizeText.textContent = this.value
};
container.addEventListener('mouseover', function(e){
    let boxId = document.getElementById(e.target.id)
    if (blackColor.checked == true) {
        boxId.style.backgroundColor = 'black';
    } else {
        boxId.style.backgroundColor = colorRandomier();
    }
});


for (let i = 0; i < horizontalSize.length; i++){
    horizontalSize[i].addEventListener('click', function(e){
        if (e.target && e.target.matches('span#size-text')) {
            const sizeInput = document.createElement('input')
            sizeInput.setAttribute('id', 'size-input')
            sizeInput.setAttribute('placeholder','Type Value')
            sizeInput.style.cssText = 'background-color: black; color: white; border: 0'
            size.replaceWith(sizeInput)
        };
        size.oninput = function() {
            sizeText.textContent = this.value + ' X ' + this.value
        }
    });
};

for (let i = 0; i < horizontalSize.length; i++){
    horizontalSize[i].addEventListener('keydown', function(e) {
        if (e.target && e.target.matches('input#size-input') && e.keyCode == 13) {
            e.stopPropagation()
            let listSize = Array.from(horizontalSize[i].childNodes)
            let sizeInputValue = listSize[1].value
            if (isNaN(sizeInputValue)) {
                console.log(size.value)
                listSize[1].replaceWith(size)
            } else {
                listSize[1].replaceWith(size)
                size.value = listSize[1].value
                sizeText.textContent = size.value + ' X ' + size.value
                vSize.value = 1
                vSizeText.textContent = 1
                sizeSlider()
            }
        }
    })
};


for (let i = 0; i < verticalSize.length; i++){
    verticalSize[i].addEventListener('click', function(e){
        if (e.target && e.target.matches('span#size-textV')) {
            const sizeInputV = document.createElement('input')
            sizeInputV.setAttribute('id', 'sizeV-input')
            sizeInputV.setAttribute('placeholder','Type Value')
            sizeInputV.style.cssText = 'background-color: black; color: white; border: 0'
            vSize.replaceWith(sizeInputV)
        };
        vSize.oninput = function() {
            vSizeText.textContent = this.value
        }
    });
};

for (let i = 0; i < verticalSize.length; i++){
    verticalSize[i].addEventListener('keydown', function(e) {
        if (e.target && e.target.matches('input#sizeV-input') && e.keyCode == 13) {
            e.stopPropagation()
            let listSize = Array.from(verticalSize[i].childNodes)
            let vSizeInputValue = listSize[1].value
            if (isNaN(vSizeInputValue)) {
                console.log(vSize.value)
                listSize[1].replaceWith(vSize)
            } else {
                listSize[1].replaceWith(vSize)
                vSize.value = listSize[1].value
                vSizeText.textContent = vSize.value
                size.value = 1
                sizeText.textContent = 1 + ' X ' + 1
                sizeSliderV()
                
            }
        }
    })
};



size.onchange = function() {
    vSize.value = 1
    vSizeText.textContent = 1
    sizeSlider();
}
vSize.onchange = function() {
    size.value = 1
    sizeText.textContent = 1 + ' X ' + 1
    sizeSliderV();
}

