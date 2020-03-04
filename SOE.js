




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
      document.querySelector("#result").innerText = "" + soe(n);
    }


  });

  function soe(number)
  {
    let arr=[];
    let boolArr=[];
    for(let i=2; i<=number; i++)
    {
      boolArr.push(true);
    }
    for(let i=2; i<=number; i++)
    {
      if(boolArr[i-2])
      {
        for(let j=i; j<=number; j=j+i)
        {
          if(j!=2&&j!=i)
          {
            boolArr[j-2]=false;
          }
        }
      }
    }
    for(let i=2; i<=number; i++)
    {
      if(boolArr[i-2])
      {
        arr.push(i);
      }
    }

    return arr;


  }






});
