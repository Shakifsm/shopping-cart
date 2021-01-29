// document.getElementById("case-increase").addEventListener("click", function(){
//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     var caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;
// });

// document.getElementById("case-decrease").addEventListener("click", function(){
//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     var caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;

// });

// Using code short method

document.getElementById("case-increase").addEventListener("click", function(){
    handlecaseChange(true);
});

document.getElementById("case-decrease").addEventListener("click", function(){
    handlecaseChange(false);
});

function handlecaseChange(isIncrease){
    var caseInput = document.getElementById("case-count");
    var caseCount = parseInt(caseInput.value);
    // var caseNewCount = caseCount - 1;
    var caseNewCount = caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    var caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = "$" + caseTotal;
    calculateTotal();

};

// document.getElementById("case-increase").addEventListener("click", function(){
//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     var caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;
// });

// document.getElementById("case-decrease").addEventListener("click", function(){
//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     var caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;

// });

document.getElementById("phone-increase").addEventListener("click", function(){
    handlePhoneChange(true);
});

document.getElementById("phone-decrease").addEventListener("click", function(){
    handlePhoneChange(false);
});

function handlePhoneChange(isIncrease){
    var phoneInput = document.getElementById("phone-count");
    var phoneCount = parseInt(phoneInput.value);
    var phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount +1;
    }
    if(isIncrease == false && phoneCount > 0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    var phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
    calculateTotal();
};

function calculateTotal(){
    var phoneInput = document.getElementById("phone-count");
    var phoneCount = parseInt(phoneInput.value);

    var caseInput = document.getElementById("case-count");
    var caseCount = parseInt(caseInput.value);

    var totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("sub-total").innerText = "$" + totalPrice;

    var tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    var grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
};