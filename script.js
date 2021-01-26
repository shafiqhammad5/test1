// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    console.log("click merese amk....");
    const loginArea = document.getElementById("login-area")
    loginArea.style.display ="none";
    const transectionArea = document.getElementById("transection-area")
    transectionArea.style.display ="block";
})

//deposit button handler
const depositbtn = document.getElementById("addDeposit");
depositbtn.addEventListener("click", function(){
    const despositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(despositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    console.log(totalDeposit);
})