// function changeTime(){
//     let date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();
//     let ampm = h >= 12 ? "PM" : "AM";
//     h = h % 12;
//     h = h ? h : 12;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
//     let time = h + ":" + m + ":"  +s + "" +ampm + "";
//     document.getElementById("clock").textContent = time;
//     setInterval(changeTime,1000);
// }
// changeTime()


// function change(){
//     let ele = document.querySelector('#year');
//     let res = document.querySelector('#print');
//     let mydropdown = document.querySelector('.dropdown');

//     ele.addEventListener("change", function(){
//         const selectedValue = year.value;
//         const selectedText = ele.option[ele.selectedIndex].text;

//         if (selectedValue){
//             res.textContent = `$(selectedText) ($(selectedValue))`;
//         } else {
//             res.textContent = "Please the option";
//         }
//     });
//     document.addEventListener("")
// }
function change() {
  let ele = document.querySelector("#ele");
  let res = document.querySelector("#print");
  // let mydropdown = document.querySelector(".dropdown");

  ele.addEventListener("change", function () {
    const selectedValue = ele.value;
    const selectedText = ele.options[ele.selectedIndex].text;

    if (selectedValue) {
      res.textContent = ` ${selectedText} (${selectedValue})`;
    } else {
      res.textContent = "Please the option";
    }
  });

  document.addEventListener("ContentLoaded", function () {
    res.textContent = "Please select the option";
  });
}