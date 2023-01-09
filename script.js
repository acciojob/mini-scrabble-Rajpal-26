//your code here
let h3 = document.getElementById("letterCount");
h3 = prompt("enter text");
let count = 0;
for (i = 0; i < h3.length; i++){
    if (h3[i] == " ") {
        count=0;
    }
    else {
        count++;
    }
}
console.log(count);