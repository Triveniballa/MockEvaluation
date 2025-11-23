
// Simple Closure
function counter(){
    let count=0
    return function(){
        count++
        return count
    }
}

const c=counter()
console.log(c())
console.log(c())
console.log(c())

//Medium Closure
function createWallet(){
    let balance=0

    function addMoney(amout){
        balance+=amount
        console.log($(amount));
    }
    function checkBalance(){
        console.log($(balance))
        return balance
    }
    return(addMoney,checkBalance)
}
let myWallet=createWallet()
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700

