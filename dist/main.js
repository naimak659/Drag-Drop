let rightBox = document.getElementById('rightBox')
let leftBox = document.getElementById('leftBox')
let items = document.querySelectorAll(".drag");

for (const list of items) {
    console.log(list)
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}