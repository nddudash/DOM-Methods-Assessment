let documentBody = document.querySelector('body');
documentBody.style.backgroundImage = "url('./assets/testChamber.jpg')";
documentBody.style.backgroundSize = 'cover';
documentBody.style.backgroundRepeat = 'no-repeat'

let buttonElement = document.createElement(`button`);
buttonElement.append("Push Me!");
documentBody.append(buttonElement);

let documentMain = document.createElement('main');
documentBody.append(documentMain);

let dancingGordon = document.createElement('img')
dancingGordon.src = "https://vignette.wikia.nocookie.net/svencoopedia/images/1/1a/Dancing_sven.gif/revision/latest/scale-to-width-down/340?cb=20190525211137"
dancingGordon.classList.add(`image`);
documentMain.append(dancingGordon);

let klaxionBeatLink = document.createElement('a');
klaxionBeatLink.href = "https://www.youtube.com/watch?v=IXyVMQa6MeY"
klaxionBeatLink.target = "blank"
klaxionBeatLink.append("Hazardous Environment Suit activated.")
klaxionBeatLink.style.fontSize = '2em'
klaxionBeatLink.style.color = 'orange'
documentMain.append(klaxionBeatLink);

buttonElement.addEventListener('click', function() {
    documentMain.remove();
})

let removeElementInput = document.createElement(`input`);
removeElementInput.placeholder = "enter target element...";
documentBody.append(removeElementInput);
let removeElementButton = document.createElement(`button`)
removeElementButton.append(`Remove Element!`);
documentBody.append(removeElementButton);

removeElementButton.addEventListener('click', function() {
    let removeTarget = removeElementInput.value;
    let targetElement = document.querySelector(removeTarget);
    targetElement.remove();
})

let addElementInput = document.createElement('input');
addElementInput.placeholder = "enter element type...";
documentBody.append(addElementInput); 
let addElementButton = document.createElement('button');
addElementButton.append('Create Element!');
documentBody.append(addElementButton);

addElementButton.addEventListener('click', function() {
    let createdElementGuts = addElementInput.value;
    let createdElement = document.createElement('div');
    createdElement.append(createdElementGuts)
    createdElement.style.color = 'orange'
    createdElement.style.fontSize = '1.5em'
    documentBody.append(createdElement);
})