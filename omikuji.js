'use strict'

{
  const btn = document.getElementById('btn');
  const result = document.getElementById("result");


  function disp1(num){
    switch(num){
      case 0:
          result.textContent = "大吉";
          break;
      case 1:
          result.textContent = "中吉";
          break;
      case 2:
          result.textContent = "吉";
          break;
      default:
          result.textContent = "凶";
    }
  }

  btn.addEventListener('click',() => {
    const random = Math.floor(Math.random()*4);
    disp1(random);
  })



}
