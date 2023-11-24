const heart = document.getElementById('heart');
        heart.addEventListener('click', function() {
            this.classList.toggle('is-active');
        });

var i=1;
var N=3;
function next(){
    if(i<N)
        i+=1;
    else
        i=1;
    document.getElementById("slide").setAttribute("src",i+".jpg");
}
function back(){
    if(i>1)
        i-=1;
    else
        i=N;
    document.getElementById("slide").setAttribute("src",i+".jpg");
}
autoPlay()
function autoPlay(){
    setInterval(next,5000);
}
function showcart(){
    var x= document.getElementById("showcart")
    if(x.style.display=="none"){
        x.style.display ="block"
    } 
    else{
        x.style.display ="none"
    }
}
const btn = document.querySelectorAll(".add")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    //console.log(product)
    var productImg = product.querySelector("img").src
    //console.log(productImg)
    var productName = product.querySelector("b").innerText
    // console.log(productName)
    var productPrice = product.querySelector("span").innerText
    var dong = product.querySelector("a").innerHTML
    // console.log(dong)
    // console.log(productPrice)
    // console.log(productImg,productName,productPrice)
    addcart(dong,productPrice,productImg,productName)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    var sp={
        "hinh": productImg,
        "ten": productName,
        "gia" : productPrice,
        "dong" : dong
    }
    // Thêm sản phẩm vào giỏ hàng
    cart.push(sp);
    // Lưu lại giỏ hàng vào Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
}})
})
let soluong=0;
function addcart(dong,productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName){
        alert("Sản phẩm của bạn đã có trong giỏ hàng")
        return
        }
    }
    soluong++;
    document.querySelector(".cart-count").innerText=soluong;
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img src='+productImg+' style="width: 70px;"><b class="title">'+productName+'</b></td><td><span class="title123">'+productPrice+'</span></td><td><a style="margin-left:-5px">'+dong+'</a></td><td><input style="outline: none;width: 30px;cursor: pointer;" type="number" value=1 , min="1"></td><td style="cursor: pointer;"><i class="fa-solid fa-trash-can"></i><a class ="cart-delete">Xóa</a></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deletecart()
}
function xoasanpham(){
    if(soluong>0){
        soluong--;
        document.querySelector('.cart-count').innerHTML=soluong;
    }
}
function xoatatca(){
    document.getElementById('tbody').innerHTML=''
    document.getElementById('tien').innerHTML='0'
}
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    totalC = 0
    //console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector("span").innerHTML
        //console.log(productPrice)
        totalA = inputValue*productPrice*1000
        //console.log(totalA)
        //totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC + totalA
        //console.log(totalC)
        //totalD = totalC.toLocaleString('de-DE')
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    //console.log(carttotalA)

}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
        
    }
}
document.getElementById('xoatatca').addEventListener('click', function(event) {
    deleteDataFromLocalStorage();
})
function deleteDataFromLocalStorage() {
    // Thực hiện xóa dữ liệu (ví dụ: xóa toàn bộ dữ liệu)
    localStorage.clear();

    // Thông báo cho người dùng hoặc thực hiện các công việc khác sau khi xóa
    alert('Dữ liệu đã được xóa từ Local Storage.')
}
function deletecart(){
    var cartItem = document.querySelectorAll("tbody tr")
    //console.log(cartItem)
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            xoasanpham()
            //console.log(cartItemR)
            
        })
        
    }
}
// function changeQuantity($idProduct, $type){
//     switch ($type) {
//         case '+':
//             listCart[$idProduct].quantity++;
//             break;
//         case '-':
//             listCart[$idProduct].quantity--;

//             // if quantity <= 0 then remove product in cart
//             if(listCart[$idProduct].quantity <= 0){
//                 delete listCart[$idProduct];
//             }
//             break;
    
//         default:
//             break;
//     }
//     // save new data in cookie
//     document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
//     // reload html view cart
//     addcart();
// }
// const clickableImage = document.getElementById('clickableImage');
//         const overlay = document.getElementById('overlay');
//         const enlargedImage = document.getElementById('enlargedImage');
//         clickableImage.addEventListener('click', function () {
//             const imagePath = this.src;
//             enlargedImage.src = imagePath;
//             overlay.style.display = 'flex';
// })




