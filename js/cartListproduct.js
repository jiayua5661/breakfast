        // 商品分頁 漢堡1
        document.getElementById('productham1').onclick = function () {
            document.getElementById('product1page').style = 'display: block;';
        }
        document.getElementById('product1esc').onclick = function () {
            document.getElementById('product1page').style = 'display: none;';
        }
        // 商品分頁 漢堡2
        document.getElementById('productham2').onclick = function () {
            document.getElementById('product2page').style = 'display: block;';
        }
        document.getElementById('product2esc').onclick = function () {
            document.getElementById('product2page').style = 'display: none;';
        }


        // 開啟 關閉購物車
        document.getElementById('shopcart').onclick = function () {
            document.getElementById('cartpageside').style = "transform: translateX(0%);";
        }
        document.getElementById('cartpagesideesc').onclick = function () {
            document.getElementById('cartpageside').style = "transform: translateX(100%);";
        }


        // 餐點表
        let productList = [
            { "id": "ham01", "name": "早美雞腿排堡", "price": 50 },
            { "id": "ham02", "name": "招牌豬肉堡", "price": 55 },
        ];

        let cartList = [];
        // 購物車list
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
            totalmoney();
        }

        // 加入購物車
        function addToCartList(x = "") {
            // 側邊購物車開啟
            document.getElementById('cartpageside').style = "transform: translateX(0%);";
            for (let i = 0; i < productList.length; i++) {
                // 找商品列表有沒有
                if (productList[i].id == x) {
                    let temp = 1;
                    // 找購物車有沒有
                    for (let k = 0; k < cartList.length; k++) {
                        // 如果有數量+1
                        if (cartList[k].id == x) {
                            temp = 0;
                            cartList[k].number++;
                            cartListchange();
                            document.getElementById(`cartproductnumber${x}`).value++;
                        }
                    }
                    if (temp) {
                        cartList.push(productList[i]);
                        cartList[cartList.length - 1]['number'] = 1;
                        cartListchange();
                        cartul.innerHTML += `<li id="cartLi${x}">
                        <i class="fa-solid fa-xmark" onclick="removeCartProd('${x}')"></i>
                        <div>
                            <img src="./img/cartproduct/${x}.jpg" alt="">
                        </div>
                        <div class="cartProdRight">
                            <p>${productList[i].name}</p>
                            <div class="pricenumber w-100">
                                <p>NT:${productList[i].price}</p>
                                <div class="prodnumber">
                                    <button onclick="cartProdMinu('${x}')">-</button>
                                    <input type="text" value="1" id='cartproductnumber${x}'>
                                    <button onclick="cartProdAdd('${x}')">+</button>
                                </div>
                            </div>
                        </div>
                    </li>`;
                        // 避免新增li後 前面的input.value 被改回預設值
                        for (let k = 0; k < cartList.length; k++) {
                            document.getElementById(`cartproductnumber${cartList[k].id}`).value = cartList[k].number;
                        }
                    }
                }
            }
            totalmoney();
        }


        // <li><p>${productList[i].name}</p><P>NT:${productList[i].price}</P> <input type="number" value="1"></li>


        // 購物車商品+號數量增加
        function cartProdAdd(y = "") {
            for (let k = 0; k < cartList.length; k++) {
                if (cartList[k].id == y) {
                    cartList[k].number++;
                    cartListchange();
                    document.getElementById(`cartproductnumber${y}`).value++;
                }
            }
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
            totalmoney();
        }

        // 購物車暫存
        function cartListchange() {
            localStorage.setItem('autosave', JSON.stringify(cartList));
        }