const btnNode = document.querySelector('.js-btn');
const textNode = document.querySelector('.js-text');
const titleNode = document.querySelector('.js-title');
const backGroundNode = document.querySelector('html');
const notBoredText = 'Ура, теперь не скучно 🔥';

btnNode.addEventListener('click', function(){
  fetch("http://www.boredapi.com/api/activity")
  .then(response => response.json())
  .then((res) => {
  textNode.innerText = res.activity;
  titleNode.innerText = notBoredText;
  backGroundNode.classList.add('ifGetResponse');
  })
})
