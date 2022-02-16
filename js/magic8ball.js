//select the elements on the page to interact with
const input = document.getElementById('Ask');
const button = document.querySelector('button');

// Add a click event to the button
button.addEventListener('click', ask);

// Create a function that when clicked, it insert the magic8Ball into your "answers" div
function ask(){
// Find or select the child you want to remove, and use its parentNode property to find the parent:
    const Ball = document.getElementById('bal')
    if(Ball != null){
        Ball.parentNode.removeChild(Ball);
    }
    
    setTimeout(() => {
    button.classList.add('shaking');
    }, 1000);

    setTimeout(() =>{
        button.classList.remove('shaking')
    },3000);
    setTimeout(() =>{
        generatMagic8Ball();
        label.style.display = 'block';
        // input.style.background = "green";
    },2000);  
    // input.style.display ='none';
    // input.value =true; 
    
    input.value ='';
}

// Generating a random Magic8Ball
function generatMagic8Ball(){ 
//selec the answer 'div';
const answer = document.querySelector('div');

//Creating an Array of magic8Ball
let magicBall = new Array( "images/magic/magic8ball_10.png", "images/magic/magic8ball_11.png",
"images/magic/magic8ball_9.png", "images/magic/magic8ball_13.png", "images/magic/magic8ball_14.png", "images/magic/magic8ball_4.png", "images/magic/magic8ball_6.png", "images/magic/magic8ball_7.png", "images/magic/magic8ball_2.png", "images/magic/magic8ball_1.png", "images/magic/magic8ball_3.png"); 

//Generating a random magic eight ball
const randomM8Ball = magicBall[Math.floor(Math.random() * magicBall.length)];

//Creating an image element and append it to "answers" div
const imageEl = document.createElement('img');
imageEl.setAttribute('id', 'bal');
imageEl.src = `${randomM8Ball}`;
answer.appendChild(imageEl);
};









// function ask(){
    
//     const Ball=document.getElementById('bal')
//     console.log(Ball)
//     if(Ball!=null){
//         Ball.parentNode.removeChild(Ball);

//     }

//     // setTimeout(() => {
//     //     images.classList.add('shaking');
//     // }, 1000);

//     // setTimeout(()=>{
//     //     images.classList.remove('shaking')
//     // },3000);
    
//     else{
//         setTimeout(()=>{
//             generatAnswer();
//             // input.style.display='none';
//            // input.value='visible';
//         },2000); 
//         // generatAnswer();
         
//     }
//     // input.style.display='block'; 
//     input.value='';
// }