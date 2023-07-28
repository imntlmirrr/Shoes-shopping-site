const basket = document.querySelector(".basket");
function busketOn() {
  basket.classList.toggle("elmir");
}
const burger = document.querySelector(".burger");
function burgerOn() {
  burger.classList.toggle("burger2");
}
const header = document.querySelector(".topHeader");

window.addEventListener("scroll", function(){
  header.classList.toggle("headerWhite" , window.scrollY > 700)
})
window.addEventListener("scroll", function(){
  header.classList.toggle("headerWhite2" , window.scrollY > 270)
})

let basketIN = [];
const basketHTML = document.querySelector(".basket-cards");
basketIN = JSON.parse(localStorage.getItem("basket")) || []

console.log(basketIN);

const card1 = document.querySelector(".cards1");
const search = document.querySelector(".search");
const card2 = document.querySelector(".cards2");
const card3 = document.querySelector(".cards3");
const more1 = document.querySelector(".button1");
const more2 = document.querySelector(".button2");
const more3 = document.querySelector(".button3");
n=8
m=8
f=8


fetch("db1.json")
  .then((response) => response.json())
  .then((datas) => {
    shoes = datas.shoes;
    clothes = datas.clothes;
    slides = datas.slides;
    function show() {
      shoes
        .filter((shoes) =>
          shoes.name.toLowerCase().includes(search.value.toLowerCase())
        )
        .slice(0,n)
        .map(
          (shoes) =>
            (card1.innerHTML += `
                    <div class="card" id="${shoes.id}">
                        <div class="img">
                            <img src="${shoes.img}" alt="">
                        </div>
                        <div class="brand"><a>${shoes.brand}</a></div>
                        <div class="model"><a href="">${shoes.name}</a></div>
                        <button data-id="${shoes.id}" class="addBtn">Add to basket</button>
                    </div>
            `)
        );
        
      const addBtn = document.querySelectorAll(".addBtn");
      addBtn.forEach((btn) => {
        btn.onclick = function (e) {
          const id = e.target.getAttribute("data-id");
          let findProducts = shoes.find((x) => x.id == id);
          let existingProducts = basketIN.find((y) => y.id == id);
          if (existingProducts) {
            findProducts.count++;
          } else {
            basketIN.push(findProducts);
          }
          basketHTML.innerHTML = "";

          basketIN.map(
            (item) =>
              (basketHTML.innerHTML += `
                    <div class="basket-card" id=${item.id}>
                    <div class="img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="aboutCard">
                        <p class="count">${item.count}</p>
                        <p>x</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="remove">
                        <p style="cursor: pointer;" >X</p>
                    </div>
                </div>
                    `)
          );
          const deleted = document.querySelectorAll(".remove");
          deleted.forEach((delet) => {
            delet.onclick = function () {
              basketIN = basketIN.filter(
                (item) => item.id != delet.parentNode.id
              );
              delet.parentNode.remove();
            };
          });
        };
      });
    }
    show();
    more1.onclick = function(){
      n+=4;
      card1.innerHTML = ''
      show()
    }
    function show2() {
      clothes
        .filter((clothes) =>
          clothes.name.toLowerCase().includes(search.value.toLowerCase())
        )
        .slice(0,m)
        .map(
          (clothes) =>
            (card2.innerHTML += `
                    <div class="card" id="${clothes.id}">
                        <div class="img">
                            <img src="${clothes.img}" alt="">
                        </div>
                        <div class="brand"><a>${clothes.brand}</a></div>
                        <div class="model"><a href="">${clothes.name}</a></div>
                        <button data-id="${clothes.id}" class="addBtn2">Add to basket</button>
                    </div>
            `)
        );
      const addBtn = document.querySelectorAll(".addBtn2");
      addBtn.forEach((btn) => {
        btn.onclick = function (e) {
          const id = e.target.getAttribute("data-id");
          let findProducts = clothes.find((x) => x.id == id);
          let existingProducts = basketIN.find((y) => y.id == id);
          if (existingProducts) {
            findProducts.count++;
          } else {
            basketIN.push(findProducts);
          }
          basketHTML.innerHTML = "";

          basketIN.map(
            (item) =>
              (basketHTML.innerHTML += `
                    <div class="basket-card" id=${item.id}>
                    <div class="img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="aboutCard">
                        <p class="count">${item.count}</p>
                        <p>x</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="remove2">
                        <p style="cursor: pointer;">X</p>
                    </div>
                </div>
                    `)
          );
          const deleted = document.querySelectorAll(".remove2");
          deleted.forEach((delet) => {
            delet.onclick = function () {
              basketIN = basketIN.filter(
                (item) => item.id != delet.parentNode.id
              );
              delet.parentNode.remove();
            };
          });
        };
      });
    }
    show2();
    more2.onclick = function(){
      m+=4;
      card2.innerHTML = ''
      show2()
    }
    function show3() {
      slides
        .filter((slides) =>
          slides.name.toLowerCase().includes(search.value.toLowerCase())
        )
        .slice(0,f)
        .map(
          (slides) =>
            (card3.innerHTML += `
                    <div class="card" id="${slides.id}">
                        <div class="img">
                            <img src="${slides.img}" alt="">
                        </div>
                        <div class="brand"><a>${slides.brand}</a></div>
                        <div class="model"><a href="">${slides.name}</a></div>
                        <button data-id="${slides.id}" class="addBtn3">Add to basket</button>
                    </div>
            `)
        );
      const addBtn = document.querySelectorAll(".addBtn3");
      addBtn.forEach((btn) => {
        btn.onclick = function (e) {
          const id = e.target.getAttribute("data-id");
          let findProducts = slides.find((x) => x.id == id);
          let existingProducts = basketIN.find((y) => y.id == id);
          if (existingProducts) {
            findProducts.count++;
          } else {
            basketIN.push(findProducts);
          }
          basketHTML.innerHTML = "";

          basketIN.map(
            (item) =>
              (basketHTML.innerHTML += `
                    <div class="basket-card" id=${item.id}>
                    <div class="img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="aboutCard">
                        <p class="count">${item.count}</p>
                        <p>x</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="remove3">
                        <p style="cursor: pointer;" >X</p>
                    </div>
                </div>
                    `)
          );
          const deleted = document.querySelectorAll(".remove3");
          deleted.forEach((delet) => {
            delet.onclick = function () {
              basketIN = basketIN.filter(
                (item) => item.id != delet.parentNode.id
              );
              delet.parentNode.remove();
            };
          });
        };
      });
    }
    show3();
    more3.onclick = function(){
      f+=4;
      card3.innerHTML = ''
      show3()
    }

    

    search.oninput = function () {
      card1.innerHTML = "";
      card2.innerHTML = '';
      card3.innerHTML = '';
      show();
      show2();
      show3();
    };
  });
