let clickBtn=document.getElementById("clickBtn");
// console.log(clickBtn);
let cardAll=document.querySelector(".cardAll");
let p="5"
clickBtn.addEventListener('click',function(){
    let card=`
    <div class="card">
        <img src="https://images.unsplash.com/photo-1674574124349-0928f4b2bce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">
       <div class="content">
        <h1>New Oil </h1>
        <div class="price">
            <span>${p++}</span>
            <span>$599.00</span>
        </div>
        </div>
     <button class="deleteBtn">Delete</button>
    </div>
    `;
    cardAll.innerHTML+=card;
    let deleteBtn=document.getElementsByClassName('deleteBtn');

    for(var i=0;i<deleteBtn.length;i++){
        deleteBtn[i].addEventListener("click",function(e){
            e.preventDefault();
            // console.log("hii")
            var parent=this.parentElement;
            parent.style.display="none"
        })
    }

   
});


// function createCard(){

// }

// setTimeout(()=>{
//     console.log("bye")
// },1000)
// var createCard=()=>{
// console.log("hii")
// }