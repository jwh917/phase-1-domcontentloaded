// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let t = document.querySelector('#text')
    t.textContent = 'This is really cool!'
});
  
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

//let t = document.querySelector('#text')
//console.log(t)

