




document.addEventListener("DOMContentLoaded", ()=>{
  let input = document.querySelector("input");

  document.querySelector("#calculate").addEventListener("click",(e) => {
    console.log('calculate');
    console.log('input',input.value);


    let n = parseInt(input.value);
    if(n<2 || isNaN(n))
    {
      document.querySelector("#result").innerText = "Invalid input!"
    }
    else
    {
      
    }


  });






});
