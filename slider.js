let i =1;
const images = ["https://www.didoocovers.com/wp-content/uploads/2019/09/skullscam-1.jpg" ,
"https://www.didoocovers.com/wp-content/uploads/2019/08/didoo-mayanoam-39-1.jpg",
"https://www.didoocovers.com/wp-content/uploads/2019/08/didoo-mayanoam-69-1.jpg",
"https://www.didoocovers.com/wp-content/uploads/2019/09/catcam.jpg"];
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

img1.src=images[0];

setInterval(()=>{
    img2.src =images[i];
    img2.classList.add('active');
    img1.classList.add('active');
   
    
    i++;
    if(i==images.length){i=0};
    setTimeout(function(){
        img1.src=img2.src;
        img1.classList.remove('active');
        img2.classList.remove('active');
    },1500)
},4000)



// //slider2
let images2 = ["https://www.didoocovers.com/wp-content/uploads/2019/08/didoo-mayanoam-69-1.jpg",
"https://www.didoocovers.com/wp-content/uploads/2019/09/catcam.jpg",]

let q = 1;
let s2Img1= document.getElementById('slider2Img1');
let s2Img2= document.getElementById('slider2Img2');
let sliderContiener=document.getElementsByClassName('imgSlider2')[0];

s2Img1.src=images2[0];
setInterval(() => {
    sliderContiener.classList.add('slideScreen');
    s2Img2.classList.remove('active');
    setTimeout(() => {
        s2Img2.src=images2[q];
    
        q++;
        if(q==images2.length){q=0};
        s2Img2.classList.add('active');
    }, 1000);
   
    setTimeout(() => {
        
        sliderContiener.classList.remove('slideScreen');
        s2Img1.src=s2Img2.src;
    }, 2500);


}, 4000);

//slider3

let p = 1;
let s3img1=document.getElementById('firstImg');
let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let allParts =[part1,part2,part3,part4];


s3img1.src=images[0];

setInterval(() => {

for (let index = 0; index < allParts.length; index++) {
    allParts[index].src=images[p];
     allParts[index].classList.add('active'); 
}
    // s3img1.classList.remove('active');

    p++
    if (p===images.length) {p=0};

setTimeout(() => {
    for (let index = 0; index < allParts.length; index++) {
        allParts[index].classList.remove('active'); 
        
    }
 
    // s3img1.classList.add('active');

    
    s3img1.src=images[p++];
    if (p===images.length) {p=0};
    
}, 2300);
    
}, 5000);
