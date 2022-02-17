//select the elements on the page to interact with
const input = document.getElementById('Ask');
const button = document.querySelector('button');
const answer = document.querySelector('div');
// Add a click event to the button
button.addEventListener('click', ask);

// Create a function that when clicked, it insert the magic8Ball into your "answers" div
function ask(e){
// Find or select the child you want to remove, and use its parentNode property to find the parent:
    const Ball = document.getElementById('bal');
    if(Ball != null){
        Ball.parentNode.removeChild(Ball);
    }
//Hide the inpute field when displaying the answer
    input.style.display = 'none';
//Add classlist on the button when clicked
    setTimeout(() => {
    button.classList.add('shaking');
    }, 1000);

    setTimeout(() =>{
        button.classList.remove('shaking');
    },3000);
//excute the generatMagic8Bal function in two second
    setTimeout(() =>{
        document.body.style.background="linear-gradient(90deg, #3e3e60, lightblue)";
        generatMagic8Ball();
    },2000);  
}

// Generating a random Magic8Ball
function generatMagic8Ball(){ 
//Creating an Array of magic8Ball using Array constractor
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
