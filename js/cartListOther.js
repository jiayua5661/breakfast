        // 開啟 關閉購物車
        document.getElementById('shopcart').onclick = function () {
            document.getElementById('cartpageside').style = "transform: translateX(0%);";
        }
        document.getElementById('cartpagesideesc').onclick = function () {
            document.getElementById('cartpageside').style = "transform: translateX(100%);";
        }

        let cartList = [];
        let cartul = document.getElementById('cartul');

        // 有暫存就讀取
        if (localStorage.getItem('autosave')) {
            cartList = JSON.parse(localStorage.getItem('autosave'));
            for (let d = 0; d < cartList.length; d++) { 
                cartul.innerHTML += `<li id="cartLi${cartList[d].id}">
                        <i class="fa-solid fa-xmark" onclick="removeCartProd('${cartList[d].id}')"></i>
                        <div>
                            <img src="./img/cartproduct/${cartList[d].id}.jpg" alt="">
                        </div>
                        <div class="cartProdRight">
                            <p>${cartList[d].name}</p>
                            <div class="pricenumber w-100">
                                <p>NT:${cartList[d].price}</p>
                                <div class="prodnumber">
                                    <button onclick="cartProdMinu('${cartList[d].id}')">-</button>
                                    <input type="text" value="${cartList[d].number}" id='cartproductnumber${cartList[d].id}'>
                                    <button onclick="cartProdAdd('${cartList[d].id}')">+</button>
                                </div>
                            </div>
                        </div>
                    </li>`;
            }
            cartListNumber();
            totalmoney();
            console.log(cartList);
        }

        // 購物車商品+號數量增加
        function cartProdAdd(y = "") {
            for (let k = 0; k < cartList.length; k++) {
                if (cartList[k].id == y) {
                    cartList[k].number++;
                    cartListchange();
                    document.getElementById(`cartproductnumber${y}`).value++;
                }
            }
            cartListNumber();
            totalmoney();
        }

        // 購物車商品-號數量減少
        function cartProdMinu(z = "") {
            for (let k = 0; k < cartList.length; k++) {
                if (cartList[k].id == z) {
                    cartList[k].number--;
                    cartListchange();
                    document.getElementById(`cartproductnumber${z}`).value--;
                    if (cartList[k].number == 0) {
                        cartList.splice(k, 1);
                        cartListchange();
                        document.getElementById('cartul').removeChild(document.getElementById(`cartLi${z}`));
                    }
                }
            }
            cartListNumber();
            totalmoney();
        }

        // 叉叉按鈕
        function removeCartProd(z = "") {
            for (let k = 0; k < cartList.length; k++) {
                if (cartList[k].id == z) {
                    cartList.splice(k, 1);
                    cartListchange();
                    document.getElementById('cartul').removeChild(document.getElementById(`cartLi${z}`));
                }
            }
            cartListNumber();
            totalmoney();
        }

        // 計算總金額
        function totalmoney() {
            let total = 0;
            for (let i = 0; i < cartList.length; i++) {
                total += cartList[i].price * cartList[i].number;
            }
            document.getElementById('cartTotalmoney').innerHTML = `NT:${total}`;
        }

        // 結帳紐清空購物車
        function checkout() {
            document.getElementById('cartul').innerHTML = "";
            cartList = [];
            cartListchange();
            cartListNumber();
            totalmoney();
        }

        // 購物車暫存
        function cartListchange() {
            localStorage.setItem('autosave', JSON.stringify(cartList));
        }

        // 購物車商品數量
        function cartListNumber(){
            let cartNumber = 0;
            for(let i = 0; i < cartList.length; i++){
                cartNumber += cartList[i].number;
            }
            document.getElementById('shopcartnumber').innerHTML = cartNumber;
        }