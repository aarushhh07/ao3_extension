let demo = document.getElementById("demo");

// --- 1. Font Size Setup ---
let fsizeInput = document.getElementById("fsize");
let fontOutput = document.getElementById("value_fsize");

fontOutput.innerHTML = fsizeInput.value + "pt";
fsizeInput.oninput = function () {
    fontOutput.innerHTML = this.value + "pt";
    demo.style.fontSize = this.value + "pt";
}

// --- 2. Brightness Setup ---
let brightInput = document.getElementById("brightness");
let brightOutput = document.getElementById("value_brightness");

brightOutput.innerHTML = brightInput.value + "%";
brightInput.oninput = function () {
    brightOutput.innerHTML = this.value + "%";
    demo.style.filter = `brightness(${this.value}%)`;
}

// --- 3. Width Setup ---
let widthInput = document.getElementById("width");
let widthOutput = document.getElementById("value_width");

widthOutput.innerHTML = widthInput.value + "%";
widthInput.oninput = function () {
    widthOutput.innerHTML = this.value + "%";
    demo.style.width = this.value + "%";
}

// --- 4. Background Setup ---
let backInput = document.getElementById("background");
let backOutput = document.getElementById("value_background");

backOutput.innerHTML = backInput.value;
backInput.oninput = function () {
    backOutput.innerHTML = this.value;
    demo.style.backgroundColor = this.value;
}

// --- 5. Font Color Setup ---
let fcolorInput = document.getElementById("fcolor");
let fcolorOutput = document.getElementById("value_fcolor");

fcolorOutput.innerHTML = fcolorInput.value;
fcolorInput.oninput = function () {
    fcolorOutput.innerHTML = this.value;
    demo.style.color = this.value;
}

// --- 6. Font Setup ---

let fbuttons=document.getElementById("fbuttons");
let fonts=document.getElementsByClassName("font");
for(let m=0; m<fonts.length;m++){
    fonts[m].style.fontFamily=fonts[m].id;  
}
fbuttons.addEventListener('click',function(event) {
demo.style.fontFamily=event.target.id;
});

