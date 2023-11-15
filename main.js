const total_project = document.getElementById("total");
const best_project = document.getElementById("best");
const success_project = document.getElementById("success");

let count1 = 0;

let intervalId = setInterval(counter1,10);

function counter1 () {
      count1++;
      total_project.innerHTML = count1;
      if (count1 === 100) {
            clearInterval(intervalId)
      }
}

let intervalId2 = setInterval(counter2,10);
let count2 = 0;
function counter2 () {
      count2++;
      best_project.innerHTML = count2;
      if (count2 === 50) {
            clearInterval(intervalId2)
      }
}


let intervalId3 = setInterval(counter3,10);
let count3 = 0;
function counter3 () {
      count3++;
      success_project.innerHTML = count3;
      if (count3 === 80) {
            clearInterval(intervalId3)
      }
}
