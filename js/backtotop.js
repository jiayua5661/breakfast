        // 節流函式
        function throttle(fn, delay) {
            let timer = null;
            return (...args) => {
                if (timer) return;
                timer = setTimeout(() => {
                    fn(...args);
                    timer = null;
                }, delay);
            };
        }
        const throttleBackTop = throttle(() => {
            if (window.pageYOffset < 100) {
                document.getElementById('backtotop').style = "display: none;"
                console.log("隱藏");
            }
            else {
                document.getElementById('backtotop').style = "display: block;"
                console.log("出現");
            }
        }, 500);
        // 呼叫
        window.addEventListener("scroll", () => {
            throttleBackTop();
        });


        // function temp() {
        //     if (window.pageYOffset < 100) {
        //         document.getElementById('backtotop').style = "display: none;"
        //         console.log("隱藏");
        //     }
        //     else {
        //         document.getElementById('backtotop').style = "display: block;"
        //         console.log("出現");
        //     }
        // }
        // window.addEventListener("scroll", temp);