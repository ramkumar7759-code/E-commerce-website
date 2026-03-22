const products = [
 {id:1,name:"Nike Shoes",price:3000,desc:"Running shoes",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
 {id:2,name:"Watch",price:2000,desc:"Smart watch",img:"https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-S8-stainless-steel-graphite-220907_inline.jpg.large_2x.jpg"},
 {id:3,name:"Phone",price:15000,desc:"Android phone",img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
 {id:4,name:"Bag",price:1200,desc:"Travel bag",img:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"},
 {id:5,name:"Headphones",price:1800,desc:"Wireless",img:"https://m.media-amazon.com/images/I/51h2FBaNKyL._AC_SL1000_.jpg"},
 {id:6,name:"Laptop",price:60000,desc:"Gaming laptop",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"}
];

function displayProducts(id, limit) {
 let container = document.getElementById(id);
 let data = limit ? products.slice(0, limit) : products;
 container.innerHTML = data.map(p => `
 <div class="card">
 <img src="${p.img}">
 <h3>${p.name}</h3>
 <p>₹${p.price}</p>
 <button onclick="viewProduct(${p.id})">View</button>
 </div>`).join("");
}

function viewProduct(id) {
 localStorage.setItem("productId", id);
 window.location.href = "product.html";
}

function loadProduct() {
 let p = products.find(x => x.id == localStorage.getItem("productId"));
 document.getElementById("name").innerText = p.name;
 document.getElementById("image").src = p.img;
 document.getElementById("desc").innerText = p.desc;
 document.getElementById("price").innerText = "₹" + p.price;
}

function addToCart() {
 let p = products.find(x => x.id == localStorage.getItem("productId"));
 let qty = document.getElementById("qty").value;
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 cart.push({...p, qty});
 localStorage.setItem("cart", JSON.stringify(cart));
 window.location.href = "cart.html";
}
