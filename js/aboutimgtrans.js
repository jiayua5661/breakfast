for (let i = 0; i < 5; i++) {
    function scrollAppear() {
        let introText = document.getElementById(`aboutimg${i}`)
        let itemheight = introText.clientHeight; // 元素本身高度
        let introPosition = introText.getBoundingClientRect().top;  // 元素相對網頁座標高度
        let screenPosition = window.innerHeight - itemheight;
        
        if (introPosition < screenPosition) {
            introText.classList.add('aboutimg-appear');
        }
        if (introPosition > screenPosition) {
            introText.classList.remove('aboutimg-appear');
        }
    }
    window.addEventListener("scroll", scrollAppear);
}