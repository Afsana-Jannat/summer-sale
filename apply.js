let total = 0;

function handleClickBtn(target){
    const allItemContainer = document.getElementById("all-items");
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    allItemContainer.appendChild(li);
    const price = target.childNodes[7].innerText.split(" ")
    [0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total").innerText = total;

    if(total>0){
        document.getElementById("total-tk").innerText = total;
    }
    if(total>=200){
        discount = total * 20/100;
        document.getElementById("discount").innerText = discount;
        totaltk = total - discount;
        document.getElementById("total-tk").innerText = totaltk;
    }
}
