function




document.addEventListener("DOMContentLoaded", ()=>{
  let input = document.querySelector("input");

  document.querySelector("#calculate").addEventListener("click",(e) => {
    console.log('addition');
    console.log('input',input1.value);


    let n = parseInt(input.value);
    if(n<2 || !isNaN(n))
    {
      document.querySelector("#result").innerText = "Invalid input!"
    }


  });






});
