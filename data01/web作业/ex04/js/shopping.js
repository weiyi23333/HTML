function close_plan() {
            window.close();
    }

    function del() {
        var result = confirm("确定删除？");
        if (result) {
            alert("删除成功！");
        } }
    function collection() {
        alert("商品已收藏");
    }
    function plus(id) {
        var amountField = document.getElementById("amount" + id);
        var priceField = document.getElementById("itemPrice" + id);
        var amount = parseInt(amountField.value);
        amountField.value = amount + 1;
        priceField.value = (amount + 1) * 159.00;
    }
    function minus(id) {
        var amountField = document.getElementById("amount" + id);
        var priceField = document.getElementById("itemPrice" + id);
        var amount = parseInt(amountField.value);
        if (amount > 1) {
            amountField.value = amount - 1;
            priceField.value = (amount - 1) * 159.00;
        }}
    function accounts() {
        var totalPrice = parseFloat(document.getElementById("itemPrice0").value) +
         parseFloat(document.getElementById("itemPrice1").value);
        document.getElementById("totalPrice").textContent = " ¥" + totalPrice.toFixed(2);
    }
    function updateTime() {
        var now = new Date();
        Month=now.getMonth()+1
        document.getElementById("date").textContent = now.getFullYear() + "年" + Month + "月" + now.getDate() + "日";
        document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();