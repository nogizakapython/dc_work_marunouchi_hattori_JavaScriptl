'use strict'

{
  const btn = document.getElementById('btn');
  const result = document.getElementById("result");
  const omiku_array = ["大吉","中吉","吉","小吉","凶"];


  btn.addEventListener('click',() => {
    const random = Math.floor(Math.random() * omiku_array.length);
    result.textContent = omiku_array[random];
  })

}
