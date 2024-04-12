
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
    var totalPrice = parseFloat(document.getElementById("itemPrice0").value) + parseFloat(document.getElementById("itemPrice1").value);
    document.getElementById("totalPrice").textContent = " ¥" + totalPrice.toFixed(2);
    }
    function updateTime() {
    var now = new Date();
    var dateElement = document.getElementById("date");
    var year = now.getFullYear();
    var month = now.getMonth() + 1; 
    var day = now.getDate();
    dateElement.textContent = year + "年" + month + "月" + day + "日";
    var timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();