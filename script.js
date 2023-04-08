let a=document.querySelector('#inp1').value;
let b=document.querySelector('#inp2').value;
let button1=document.querySelector('#btn1');
let txt=document.querySelector('#txt1');

button1.addEventListener("click", () =>{
  c=Number(a)+Number(b);
  txt.innerHTML="Результат:"+(c);
})

let button2=document.querySelector('#btn2');
button2.addEventListener('click', addCircle);

function addcircle() {
  let newCircle=document.createElement('div');
  tsk2.appendchild(newCircle);
  newCircle.classList.add('circle');
}
