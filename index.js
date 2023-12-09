console.log('funguju!');

/*3.1
const alarm = document.querySelector('.alarm');

setTimeout(() => {
  alarm.classList.add('alarm--ring');}, 5 * 1000);
*/



/*3.2
const alarm = document.querySelector('.alarm');
const vteriny = prompt('Zadejte počet vteřin, než minutka začne zvonit:');
setTimeout(() => {
  alarm.classList.add('alarm--ring');}, vteriny * 1000);
*/

//3.3

document.body.innerHTML += "<button>Tlačítko</button>"
  const btn = document.querySelector("button")
  btn.classList.add("tlacitko")


const alarm = document.querySelector('.alarm');
const vteriny = prompt('Zadejte počet vteřin, než minutka začne zvonit:');

const time = setTimeout(() => {
  alarm.classList.add('alarm--ring');
const audio = document.querySelector('audio');
  audio.play();}, vteriny * 1000);
//3.4

const myFunction = () => {clearTimeout(time)};
btn.addEventListener("click", myFunction);

