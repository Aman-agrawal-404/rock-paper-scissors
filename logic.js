let btn=document.querySelector("#btn");
let win_msg=document.querySelector("#win_msg");
let my_ch=document.querySelector("#my_ch");
let comp_ch=document.querySelector("#comp_ch");
let stone=document.querySelector("#option_btn1");
let paper=document.querySelector("#option_btn2");
let scissor=document.querySelector("#option_btn3");
let curr_ch="";

let possible_ch=["stone","paper","scissor"];


stone.addEventListener("click",()=>{
    curr_ch="stone";
    win_chk();
});
paper.addEventListener("click",()=>{
   curr_ch="paper";
   win_chk();
});

scissor.addEventListener("click",()=>{
   curr_ch="scissor";
   win_chk();
});


let rand_idx=Math.floor(Math.random()*possible_ch.length);
const comp_choice=possible_ch[rand_idx];


// let comp_choice="stone";
let win_chk = () => {
    my_ch.innerText=curr_ch;
    comp_ch.innerText=comp_choice;
    if(curr_ch===comp_choice)
        {
   win_msg.innerText="Draw";
        }
    else
        {
        if(curr_ch=="stone" && comp_choice=="scissor" || curr_ch=="scissor" && comp_choice=="paper" || curr_ch=="paper" && comp_choice=="stone")    
        {
            win_msg.innerText="you won";
        }
        else{
            if(curr_ch=="stone" && comp_choice=="paper" || curr_ch=="scissor" && comp_choice=="stone" || curr_ch=="paper" && comp_choice=="scissor")
                {
                    win_msg.innerText="you lose";
                }
            
            }
        }

}


btn.onclick=() => {
   location.reload();
}
