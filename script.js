let myinput       = document.getElementById('myinput');
let myinput1      = document.getElementById('myinput1');
let serviceQual   = document.getElementById('serviceQual');
let tipAmount     = document.getElementById('tip amount');
let Amount        = document.getElementById('total amount');
let owes          = document.getElementById('owes');
let errorMessage  = document.getElementById('message');
let errorMessage1 = document.getElementById('message1');
let errorMessage2 = document.getElementById('message2');

 
 let calculate    = document.getElementById('calculate');
 calculate.addEventListener('click',(e)=>{

   e.preventDefault()
   
      
   let Bill          = Number(myinput.value);
   
   let users         = Number(myinput1.value);
  
   let myserviceQual = Number(serviceQual.value);
  

   let TipAmount     = Number(tipAmount.value);
   let myAmount      = Number(Amount.value);
   let myOwes        = Number(owes.value);
    

   if(Bill === "" || myserviceQual == 0 || users <=0){

     alert('Please enter values');
     return;
   }
   

   
   setTimeout((calculate)=>{
   
   let totalBill = Bill * myserviceQual;
   totalBill1 = totalBill.toFixed(2);
   tipAmount.innerHTML = `Tip Amount $ ${totalBill1}`;    
   tipAmount.value = "";
 
  
   let totalTipAmount = totalBill + Bill;
   totalTipAmount1 = totalTipAmount.toFixed(2)
   Amount.innerHTML = `Total Amount $ ${totalTipAmount1}`;
   Amount.value = "";
 

    let totalOwes   = totalTipAmount / users;
    totalOwes1 = totalOwes.toFixed(2);
    owes.innerHTML = `Each Person Owes  $ ${totalOwes1}`;
    owes.value = "";
     


 },2000);
   

});