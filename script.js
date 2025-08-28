// time setting for call history
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');
hours = hours % 12;
hours = hours ? hours : 12; 
hours = hours.toString().padStart(2, '0');
let am_pm = hours >= 12 ? "PM" : "AM";
let localTime = `${hours}:${minutes}:${seconds} ${am_pm}`;
console.log(localTime);

// code part
const love_count1=document.getElementById('love-count1');
const love_count2=document.getElementById('love-count2');
const love_count3=document.getElementById('love-count3');
const love_count4=document.getElementById('love-count4');
const love_count5=document.getElementById('love-count5');
const love_count6=document.getElementById('love-count6');
const love_count7=document.getElementById('love-count7');
const love_count8=document.getElementById('love-count8');
const love_count9=document.getElementById('love-count9');
const love=document.getElementById('love');
let count=0

love_count1.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count2.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count3.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count4.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count5.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count6.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count7.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count8.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


love_count9.addEventListener('click',(e)=>{
    
    e.preventDefault()
    count++
    love.innerText=count;
})


const number_1=document.getElementById("number-1");
const copy_btn1=document.getElementById("copy-btn1");
const number_2=document.getElementById("number-2");
const copy_btn2=document.getElementById("copy-btn2");
const number_3=document.getElementById("number-3");
const copy_btn3=document.getElementById("copy-btn3");
const number_4=document.getElementById("number-4");
const copy_btn4=document.getElementById("copy-btn4");
const number_5=document.getElementById("number-5");
const copy_btn5=document.getElementById("copy-btn5");
const number_6=document.getElementById("number-6");
const copy_btn6=document.getElementById("copy-btn6");
const number_7=document.getElementById("number-7");
const copy_btn7=document.getElementById("copy-btn7");
const number_8=document.getElementById("number-8");
const copy_btn8=document.getElementById("copy-btn8");
const number_9=document.getElementById("number-9");
const copy_btn9=document.getElementById("copy-btn9");


const numbers=document.getElementById("numbers")

let copy_count=1
// cpy1
copy_btn1.addEventListener('click',(e)=>{
    e.preventDefault()
    
   
    navigator.clipboard.writeText(number_1.innerText)
    .then(() => {
    alert("Number copied"+' '+number_1.innerText);
 numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})


// cpy2
copy_btn2.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_2.innerText)
    .then(() => {
    alert("Number copied"+' '+number_2.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy3
copy_btn3.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_3.innerText)
    .then(() => {
    alert("Number copied"+' '+number_3.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy4
copy_btn4.addEventListener('click',(e)=>{
    e.preventDefault()
    
   
    navigator.clipboard.writeText(number_4.innerText)
    .then(() => {
    alert("Number copied"+' '+number_4.innerText);
 numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy5
copy_btn5.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_5.innerText)
    .then(() => {
    alert("Number copied"+' '+number_5.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy6
copy_btn6.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_6.innerText)
    .then(() => {
    alert("Number copied"+' '+number_6.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy7
copy_btn7.addEventListener('click',(e)=>{
    e.preventDefault()
    
   
    navigator.clipboard.writeText(number_7.innerText)
    .then(() => {
    alert("Number copied"+' '+number_7.innerText);
 numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})


// cpy8
copy_btn8.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_8.innerText)
    .then(() => {
    alert("Number copied"+' '+number_8.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})

// cpy9
copy_btn9.addEventListener('click',(e)=>{
    e.preventDefault()
    
    
    navigator.clipboard.writeText(number_9.innerText)
    .then(() => {
    alert("Number copied"+' '+number_9.innerText);
numbers.innerText=copy_count++;
  })

  .catch(err => {
    console.error("Failed to copy: ", err);
  });
})







const add_call = document.getElementById('add-call');
const call_1 = document.getElementById('call-1');
const service_1=document.getElementById('service-1');
const call_2 = document.getElementById('call-2');
const service_2=document.getElementById('service-2');
const call_3= document.getElementById('call-3');
const service_3=document.getElementById('service-3');
const call_4 = document.getElementById('call-4');
const service_4=document.getElementById('service-4');
const call_5 = document.getElementById('call-5');
const service_5=document.getElementById('service-5');
const call_6 = document.getElementById('call-6');
const service_6=document.getElementById('service-6');
const call_7 = document.getElementById('call-7');
const service_7=document.getElementById('service-7');
const call_8 = document.getElementById('call-8');
const service_8=document.getElementById('service-8');
const call_9 = document.getElementById('call-9');
const service_9=document.getElementById('service-9');




// card 1
call_1.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_1.innerText+" "+number_1.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_1.innerText}</p>
          <p class="text-xs text-gray-500">${number_1.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});



// card 2
call_2.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_2.innerText+" "+number_2.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_2.innerText}</p>
          <p class="text-xs text-gray-500">${number_2.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});




// card 3
call_3.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_3.innerText+" "+number_3.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_3.innerText}</p>
          <p class="text-xs text-gray-500">${number_3.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});




// card 4
call_4.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_4.innerText+" "+number_4.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_4.innerText}</p>
          <p class="text-xs text-gray-500">${number_4.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});



// card 5
call_5.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_5.innerText+" "+number_5.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_5.innerText}</p>
          <p class="text-xs text-gray-500">${number_5.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});




// card 6
call_6.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_6.innerText+" "+number_6.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_6.innerText}</p>
          <p class="text-xs text-gray-500">${number_6.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});



// card 7
call_7.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_7.innerText+" "+number_7.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_7.innerText}</p>
          <p class="text-xs text-gray-500">${number_7.innerText}</p>
         </div>
          <p class="text-xs text-black ">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});



// card 8
call_8.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_8.innerText+" "+number_8.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_8.innerText}</p>
          <p class="text-xs text-gray-500 ">${number_8.innerText}</p>
         </div>
          <p class="text-xs  text-black">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});



// card 9
call_9.addEventListener('click', (e) => {
  e.preventDefault();

  let call_balance = parseInt(document.getElementById("call-balance").innerText);

  if (call_balance >= 20) {
    call_balance -= 20;
    document.getElementById("call-balance").innerText = call_balance; 
    alert("calling to "+" "+service_9.innerText+" "+number_9.innerText);
    
//  tst

const newDiv=document.createElement('div');
newDiv.innerHTML=`<div class="border-b pb-1 flex justify-between items-center">
         <div>
           <p class="text-sm font-semibold text-black">${service_9.innerText}</p>
          <p class="text-xs text-gray-500">${number_9.innerText}</p>
         </div>
          <p class="text-xs  text-black">${localTime}</p>
        </div>`

        add_call.appendChild(newDiv)

        document.getElementById('clear-btn').addEventListener('click',(e)=>{
          e.preventDefault()
          add_call.removeChild(newDiv)
        })

    // console.log("New balance:", call_balance);
  } else {
    alert("Not Enough Balance");
  }
});


