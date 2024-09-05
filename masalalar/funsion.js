// 1 - masala
{
  console.log(`1 - masala`);
  function age(n) {
    if (2024 - n > 18) return `Kattasiz`;
    else return `kichiksiz`;
  }
  console.log(age(2015));
}
// 2 - masala
{
  console.log(`2 - masala`);
  function ishora(n) {
    if (n >= 0) return `musbat`;
    else return `manfiy`;
  }
  console.log(ishora(-7));
}
// 3 - masala
{
  console.log(`3 - masala`);
  function foo(a, b, c) {
    let musbat = 0;
    if (a > 0) musbat++;
    if (b > 0) musbat++;
    if (c > 0) musbat++;
    return console.log(`musbat = ${musbat}`);
  }
  foo(-4, -6, 8);
}
// 4 - masala
{
  console.log(`4 - masala`);
  function toqYokiJuft(a) {
    if (a % 2 === 0) return ` ${a} - juft`;
    else return ` ${a} - toq`;
  }
  console.log(toqYokiJuft(7));
}
// 5 - masala
{
  console.log(`5  - masala`);
  function foo(n) {
    if (n % 2 === 0) return `${n} / 2 = ${n / 2}`;
    else return `${n} * 2 = ${n * 2}`;
  }
  console.log(foo(90));
}
// 6- masala
{
  console.log(`6 - masala`);
  function masala(n) {
    if (n > 0) {
      n++;
      return n;
    } else if (n === 0) {
      n = 10;
      return n;
    } else return n - 2;
  }
  console.log(masala(-8));
}
// 7 - masala
{
  console.log(`7 - masala`);
  function avvalKatta(a, b) {
    if (a > b) {
      return `${a}, ${b}`;
    } else {
      return `${b}, ${a}`;
    }
  }
  console.log(avvalKatta(6, 9));
}
// 8 - masala
{
  console.log(`8 - masala`);
  function masala(n) {
    if (n > 0 && n % 2 === 0) {
      n++;
      return n;
    } else return n;
  }
  console.log(masala(6));
}
// 9- masala
{
  console.log(`9 - masala`);
  function masala(a, b) {
    if (a > b) {
      a *= 10;
      return a;
    } else {
      b *= 10;
      return b;
    }
  }
  console.log(masala(2, 7));
}
// 10 - masala
{
  console.log(`10 - masala`);
  function juftVaToq(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
      let juft = 0;
      let toq = 0;
      if (a % 2 === 0) juft++;
      else toq++;

      if (b % 2 === 0) juft++;
      else toq++;

      if (c % 2 === 0) juft++;
      else toq++;

      return ` juft = ${juft}, toq = ${toq}`;
    } else return `faqat musbat son kirit`;
  }
  console.log(juftVaToq(3, 4, 6));
}
