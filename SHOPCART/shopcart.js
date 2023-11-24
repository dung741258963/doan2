function loadCart() {
    // Lấy dữ liệu từ Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Hiển thị giỏ hàng hoặc thực hiện các thao tác cần thiết với dữ liệu giỏ hàng
    // (ví dụ: cập nhật giao diện người dùng)
    if(cart!=null){
        var kq= "";
        for(let i=0;i<cart.length;i++){
            kq+=`
            <tbody>
                <tr>
                    <td><img style="width: 100px;" src="`+cart[i]["hinh"]+`" /></td>
                    <td><div style="margin-left:30px">`+cart[i]["ten"]+`</div></td>
                    <td>`+cart[i]["gia"]+`</td>
                    <td><input style="outline: none;width: 30px;cursor: pointer;" type="number" value=1 , min="1"></td>
                </tr>
            </tbody>
            `;
        }
            }
        document.getElementById("them").innerHTML=kq;
    }
    //console.log('cart', them);
// Gọi hàm khi trang tải
loadCart()
// 
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    console.log(cartItem.length)
    var productPrice = product.querySelector("span").innerText
    console.log(productPrice)
}

//     totalC = 0
//     //console.log(cartItem.length)
//     for (var i=0;i<cartItem.length;i++){
//         var inputValue = cartItem[i].querySelector("input").value
//         console.log(inputValue)
//         var productPrice = cartItem[i].querySelector("span").innerHTML
//         //console.log(productPrice)
//         totalA = inputValue*productPrice*1000
//         //console.log(totalA)
//         //totalB = totalA.toLocaleString('de-DE')
//         //console.log(totalB)
//         totalC = totalC + totalA
//         //console.log(totalC)
//         //totalD = totalC.toLocaleString('de-DE')
//     }
//     var carttotalA = document.querySelector(".price-total span")
//     carttotalA.innerHTML = totalC.toLocaleString('de-DE')
//     inputchange()
//     //console.log(carttotalA)

// }
// function inputchange(){
//     var cartItem = document.querySelectorAll("tbody tr")
//     for(var i=0;i<cartItem.length;i++){
//         var inputValue = cartItem[i].querySelector("input")
//         inputValue.addEventListener("change",function(){
//             carttotal()
//         })
        
//     }
// }
