
const checkbox = document.getElementById(`checkbox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardBtn`);
const paypalBtn = document.getElementById(`paypalBtn`);
const submitBtn = document.getElementById(`submitBtn`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);
const amountBtn = document.getElementById(`amountBtn`);
const discountP = document.getElementById(`discountP`);
const checkout = document.getElementById(`checkout`);

amountBtn.onclick = function () {
    let amount = parseFloat(document.getElementById(`amount`).value);
    let discount = amount * 10 / 100;

    switch (true) {
        case amount >= 1000:
               discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        case amount >= 900:
                discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        case amount >= 800:
                discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        case amount >= 700:
                discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        case amount >= 600:
                discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        case amount >= 500:
                discountP.textContent =`Your discount is: sh ${discount}`;
            break;
        default:
            discountP.textContent = `Discount is only applicable to goods worth  ksh 500 and above`;
    }
}
submitBtn.onclick = function(){
    if(checkbox.checked){
        subResult.textContent= `You are now subscribed`
    }
    else{
        subResult.textContent= `You are not yet subscribed`
    }
    if(visaBtn.checked){
        paymentResult.textContent= `You are using Visa to pay`
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent= `You are using Mastercard to pay`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent= `You are using Paypal to pay`
    }
    else{
        paymentResult.textContent= `Please choose a payment option`
    }
    checkout.textContent = `Thankyou for shopping with us.`
}


