const imgComp = document.querySelector('.img-komputer');

// menentukan pilihan komputer
function pilihanComp(){
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// menentukan rules
function ambilHasil(comp, user){
  if (user == comp) return "SERI!";
  if (user == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
  if (user == "orang") return (comp == "gajah") ? "KALAH!" : "MENANG!";
  if (user == "semut") return (comp == "orang") ? "KALAH!" : "MENANG!";
}

// Timing function.
// diputar dlu : ini belum dipelajari;
function putar() {
  const gbr = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if(new Date().getTime() - waktuMulai > 1000){
      clearInterval;
      return;
    }
    
    imgComp.setAttribute('src', 'img/' + gbr[i++] + '.png');
    if(i == gbr.length) i = 0;
  }, 100);
};

// Permainan:

const choice = document.querySelectorAll('li img');
choice.forEach(function(chc){
  chc.addEventListener("click", function() {
    //pilihan computer
    const getPilihanComp = pilihanComp();
    //pilihan user
    const pilihanUser = chc.className;
    //hasilnya
    const hasil = ambilHasil(getPilihanComp, pilihanUser);
    
    putar();
    
    setTimeout(function() {
      //ganti gambar computer
    imgComp.setAttribute("src", "img/" + getPilihanComp + ".png");
    //masukan keterangan hasil kdlm info;
    const info = document.getElementsByClassName('info')[0];
    info.innerText = hasil;
    }, 1000);
    
  });
});


/* bisa menggunakan yg dibawah ini. Tapi jikalau menggunakan yg dibawah itu tidak efektif, karena harus membuat event untuk masing²/ketiga gambar trsebut. */
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener("click", function(){
//   const getPilihanComp = pilihanComp();
//   const pilihanUser = pGajah.className;
//   const hasil = ambilHasil(getPilihanComp, pilihanUser);

//   imgComp.setAttribute('src', 'img/' + getPilihanComp +'.png');
  
//   const info = document.querySelector('.info');
//   info.innerText = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener("click", function(){
//   const getPilihanComp = pilihanComp();
//   const pilihanUser = pOrang.className;
//   const hasil = ambilHasil(getPilihanComp, pilihanUser);
  
//   const imgComp = document.querySelector('.img-computer');
//   imgComp.setAttribute('src', "img/" + getPilihanComp +".png");
  
//   const info = document.querySelector('.info');
//   info.innerText = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener("click", function(){
//   const getPilihanComp = pilihanComp();
//   const pilihanUser = pSemut.className;
//   const hasil = ambilHasil(getPilihanComp, pilihanUser);
  
//   const imgComp = document.querySelector('.img-computer');
//   imgComp.setAttribute('src', "img/" + getPilihanComp +".png");
  
//   const info = document.querySelector('.info');
//   info.innerText = hasil;
// });