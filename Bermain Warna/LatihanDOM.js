const h1 = document.querySelector("h1");
//CASE 1
const btn = document.createElement('button');
const textBtn = document.createTextNode('Ubah Warna');
btn.append(textBtn);
h1.after(btn);

btn.setAttribute('type', 'button');

btn.addEventListener("click", function(){
  //document.body.style.backgroundColor = "lightblue";
  //document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle('biru-muda');
});


//CASE 2
const tombol = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");
tombol.append(textTombol);
tombol.setAttribute('type', 'button');

btn.after(tombol);

tombol.addEventListener("click", function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});


//CASE 3
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb("+ r +", "+ g +","+ b +")";
});

sHijau.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb("+ r +", "+ g +","+ b +")";
});

sBiru.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb("+ r +", "+ g +","+ b +")";
});

//CASE TERAKHIR LATIHAN 1.
document.body.addEventListener("mousemove", function(event){
  //posisi mouse
  //console.log(event.clientX);
  //ukuran browser
  //console.log(window.innerWidth);
  
  const sumX = Math.round((event.clientX / window.innerWidth) * 255);
  const sumY = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb("+ sumX +","+ sumY +", 100)";
});