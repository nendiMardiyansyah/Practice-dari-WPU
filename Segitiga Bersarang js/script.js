// POLA SEGITIGA 1

console.log("satu");
// OUTPUT :
//1 *
//2 **
//3 ***
//4 ****
//5 *****

var s = "";
for (var i = 0; i <= 5; i++) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);


// POLA SEGITIGA 2

console.log("dua");
// OUTPUT :
//1 *****
//2  ****
//3   ***
//4    **
//5     *

var s2 = "";
for (var i2 = 5; i2 >= 0; i2--) {
  for (var j2 = 0; j2 < i2; j2++) {
    s2 += "*";
  }
  s2 += "\n";
}
console.log(s2);


// POLA SEGITIGA 3

console.log("tiga");
// OUTPUT :
//1  *
//2  **
//3  ***
//4  ****
//5  *****
//6  ******
//7  *****
//8  ****
//9  ***
//10 **
//11 *

var gabungan1 = "";
for (var a = 1; a <= 11; a++) {
  if (a <= 6) {
    for (var b = 1; b <= a; b++) {
      gabungan1 += "*";
    }
  } else {
    for (var c = 11; c >= a; c--) {
      gabungan1 += "*";
    }
  }
  gabungan1 += "\n";
}
console.log(gabungan1);


// POLA SEGITIGA 4

console.log("empat");
// OUTPUT :
//1      *
//2     **
//3    ***
//4   ****
//5  *****
//6 ******

var s3 = "";
for (var i3 = 5; i3 >= 0; i3--) {
  for (var j3 = 0; j3 <= 5; j3++) {
    if (j3 >= i3) {
      s3 += "*";
    } else {
      s3 += " ";
    }
  }
  s3 += "\n";
}
console.log(s3);


// POLA SEGITIGA 5

console.log("lima");
// OUTPUT :
//1 ******
//2  *****
//3   ****
//4    ***
//5     **
//6      *

var s4 = "";
for (var i4 = 5; i4 >= 0; i4--) {
  for (var j4 = 5; j4 >= 0; j4--) {
    if (j4 <= i4) {
      s4 += "*";
    } else {
      s4 += " ";
    }
  }
  s4 += "\n";
}
console.log(s4);


// POLA SEGITIGA 6

console.log("enam");
// OUTPUT :
//1      *
//2     **
//3    ***
//4   ****
//5  *****
//6 ******
//7  *****
//8   ****
//9    ***
//10    **
//11     *

var gabungan2 = "";
for (var d = 11; d >= 1; d--) {
  if (d >= 6) {
    for (var e = 6; e <= 11; e++) {
      if (e < d) {
        gabungan2 += " ";
      } else {
        gabungan2 += "*";
      }
    }
  } else {
    for (var f = 6; f >= 1; f--) {
      if (f > d) {
        gabungan2 += " ";
      } else {
        gabungan2 += "*";
      }
    }
  }
  gabungan2 += "\n";
}
console.log(gabungan2);


// PIRAMIDA
/*
|    *    |
|   ***   |
|  *****  |
| ******* |
|*********|
*/

/*
|     *     |
|    ***    |
|   *****   |
|  *******  |
| ********* |
|***********|
| ********* |
|  *******  |
|   *****   |
|    ***    |
|     *     |
*/


// SEGITIGA PIRAMIDA 1

console.log("tujuh");
//  OUTPUT :
//1    *
//2   ***
//3  *****
//4 *******

var t = "";
var polu = 4;

for (var r = 1; r <= polu; r++) {
  for (var f = polu; f >= r; f--) {
    t += " ";
  }

  for (var y = 1; y <= r + (r - 1); y++) {
    t += "*";
  }

  t += "\n";
}
console.log(t);


// SEGITIGA PIRAMIDA 2

console.log("delapan");
//  OUTPUT :
//1 *******
//2  *****
//3   ***
//4    *

var d = "";
poli = 5;

for (var x = 1; x <= poli; x++) {
  for (var o = 1; o <= x; o++) {
    d += " ";
  }

  for (var c = poli; c >= 2 * o - poli; c--) {
    d += "*";
  }
  d += "\n";
}
console.log(d);


// SEGITIGA PIRAMIDA 3

console.log("sembilan");
// OUTPUT :
//1     *
//2    ***
//3   *****
//4  *******
//5 *********
//6  *******
//7   *****
//8    ***
//9     *

var n = "";
var piramid = 4;

for (var blog = 1; blog <= piramid +1; blog++) {
  for (var turbo = piramid; turbo >= blog; turbo--) {
    n += " ";
  }

  for (var mex = 1; mex <= blog + (blog - 1); mex++) {
    n += "*";
  }
  n += "\n";
}
for (var ba = 1; ba <= piramid; ba++) {
  for (var bi = 1; bi <= ba; bi++) {
    n += " ";
  }

  for (var cu = piramid; cu >= 2 * ba - piramid; cu--) {
    n += "*";
  }
  n += "\n";
}
console.log(n);


// PAPAN CATUR | Pola zig-zag (ganjilGenap);

console.log("sempuluh");
//  OUTPUT :
//1 |# # #
//2 | # # #
//3 |# # #
//4 | # # #
//5 |# # #

var p = "";
for (var q = 1; q <= 5; q++) {
  if (q % 2 == 0) {
    for (var v = 0; v <= 5; v++) {
      if (v % 2 == 0) {
        p += " ";
      } else {
        p += "#";
      }
    }
  } else {
    for (var m = 0; m <= 5; m++) {
      if (m % 2 == 0) {
        p += "#";
      } else {
        p += " ";
      }
    }
  }
  p += "\n";
}
console.log(p);