// 當靜態元素載入完畢，執行...
// function(){}
$(document).ready(function () {
    // 當.toggle-chatroom被點擊時，執行...
    $('.toggle-chatroom').click(function () {
        $('.chatroom').fadeToggle();
    });
});
