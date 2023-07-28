const names = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const img = document.getElementById("img");
const option = document.getElementById("type");
const button = document.getElementById("button");
let type=option.value;
console.log(type);

option.onchange=function(){
    type=option.value;
}

button.onclick = function (e) {
e.preventDefault();
fetch(`http://localhost:3000/${type}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(
        {
            name: names.value,
            brand: brand.value,
            price: price.value,
            count: 1,
            img: img.value
        }
    ) 
    
})
}
