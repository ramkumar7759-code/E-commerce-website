let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
let html = "";

cart.forEach((item,i)=>{
 let t = item.price * item.qty;
 total += t;
 html += `<p>${item.name} - ₹${item.price} × ${item.qty} = ₹${t} <button onclick="removeItem(${i})">X</button></p>`;
});

document.getElementById("cartItems").innerHTML = html;
document.getElementById("total").innerText = "Grand Total: ₹" + total;
 

function removeItem(i){
 cart.splice(i,1);
 localStorage.setItem("cart",JSON.stringify(cart));
 location.reload();
}

function checkout(){
 localStorage.removeItem("cart");
 window.location.href = "checkout.html";
}
