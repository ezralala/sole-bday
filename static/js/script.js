/* ==========================================
   HAPPY BIRTHDAY MY SOLE 💙
   SCRIPT.JS FINAL
   PART 1
========================================== */



// ==========================
// ELEMENTS
// ==========================


const music = document.getElementById("music");



const openingPage =
document.getElementById("openingPage");


const questionPage =
document.getElementById("questionPage");


const cakePage =
document.getElementById("cakePage");


const menuPage =
document.getElementById("menuPage");



const continueBtn =
document.getElementById("continueBtn");




// ==========================
// PAGE SYSTEM
// ==========================


function showPage(page){


    document
    .querySelectorAll(".page")
    .forEach(item=>{


        item.classList.add("hidden");


    });



    page.classList.remove("hidden");



    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


}






// ==========================
// START PAGE
// ==========================


window.onload=function(){


    showPage(openingPage);



    if(continueBtn){

        continueBtn.classList.add("hidden");

    }


};







// ==========================
// MUSIC
// ==========================


function startMusic(){


    if(music){


        music.volume = 0.25;



        music.play()

        .then(()=>{


            console.log("Music playing");


        })


        .catch(()=>{


            console.log("Music blocked");


        });


    }


}

// ==========================
// OPEN ENVELOPE
// ==========================


function openQuestion(){

    showPage(questionPage);

    if(music){

        music.volume = 0.25;

        music.play();

    }

}











// ==========================
// QUESTION BUTTON
// ==========================



const yesBtn =
document.getElementById("yesBtn");



const noBtn =
document.getElementById("noBtn");





if(yesBtn){


yesBtn.onclick=function(){


    showPage(cakePage);


};



}







if(noBtn){


noBtn.onmouseover=function(){



let x =
Math.random()*200-100;


let y =
Math.random()*100-50;



noBtn.style.transform =

`translate(${x}px,${y}px)`;



};



}
/* ==========================================
   CANDLE SYSTEM
========================================== */


const candle =
document.querySelector(".candle");


const flame =
document.querySelector(".flame");





// AMEN HIDDEN FIRST


if(continueBtn){

    continueBtn.classList.add("hidden");

}






if(candle){


    candle.onclick=function(){



        // remove flame


        if(flame){

            flame.classList.add("off");

        }






        // prayer message


        const note =
        document.querySelector(".cake-note");



        if(note){


            note.innerHTML =

            "Your prayer has been lifted and trust God to answer it in His perfect timing. 💙";


        }







        // show amen only after candle


        if(continueBtn){


            continueBtn.classList.remove("hidden");


        }





    };


}








// AMEN BUTTON


if(continueBtn){



continueBtn.onclick=function(){



    showPage(menuPage);



};



}








/* ==========================================
   MENU NAVIGATION
========================================== */



const letterPage =
document.getElementById("letterPage");



const memoryPage =
document.getElementById("memoryPage");



const flowerPage =
document.getElementById("flowerPage");



const endingPage =
document.getElementById("endingPage");







function openLetter(){


    showPage(letterPage);


}







function openMemories(){


    showPage(memoryPage);


}







function openFlowers(){


    showPage(flowerPage);


}







function backMenu(){


    showPage(menuPage);


}
/* ==========================================
   MEMORY DATA
========================================== */


const memories = {

    1:{
        image:"pic1.jpg",
        title:"Admiring from Afar",
        story:"This was our first ever picture together. I admired you a lot then and I still do now. Etuccc hah!",

        gallery:[
            "pic1.jpg"
        ]
    },

    2:{
        image:"pic2.jpg",
        title:"A Real One",
        story:"Ito true na HAHAHA. That was my happiest moment din with you. Sofer talaga, nakapagpic ba naman sa ultimate LOML??!! To know and encourage you more.",

        gallery:[
            "pic2.jpg",
            "pic2a.jpg",
            "pic2b.jpg",
            "pic2c.jpg"
        ]
    },

    3:{
        image:"pic3.jpg",
        title:"Cherished every moment",
        story:"Sabi sayo eh, ichecherish ko lahat ng moments natin. I did and I will always do. First ever dagat natin ito, sole mwheehehehehe. Talks a lot talaga yan sila.",

        gallery:[
            "pic3.jpg",
            "pic3a.jpg",
            "pic3b.jpg"
        ]
    },

    4:{
        image:"pic4.jpg",
        title:"A Day To Remember",
        story:"Oh cherished moments na namern. I will always remember this day, sole. I can't even describe how happy I was that day. I will always be grateful for this day and for you, mwheheheheheeh ><.",

        gallery:[
            "pic4.jpg",
            "pic4a.jpg",
            "pic4b.jpg",
            "pic4c.jpg",
            "pic4d.jpg"
        ]
    },

    5:{
        image:"pic5.jpg",
        title:"A Pinky Promise",
        story:"A day I will never forget. Independence day pero hindi tayo nagpalaya HAHAHAHA kidding aside, plus spiritual birthday ko yann pero sofer blessed talaga. I hope we will have more days like this, sole. Consistency and a Prayer. ",

        gallery:[
            "pic5.jpg",
            "pic5a.jpg",
            "pic5b.jpg",
            "pic5c.jpg"
        ]
    },

    6:{
        image:"pic6.jpg",
        title:"LDR Things",
        story:"LDR YERN HAHAHAHA. So grateful to witness your milestone, sole. I will always be here to support you and to witness more of your milestones. I will always be proud of you, sole.",

        gallery:[
            "pic6.jpg",
            "pic6a.jpg",
            "pic6b.jpg"
        ]
    },

    7:{
        image:"pic7.jpg",
        title:"Finally",
        story:"Sa wakas, legit na sa wakas. Minimiss u talaga. Mineet half way yernn HAHAHAHA. basta etucc ito.",

        gallery:[
            "pic7.jpg",
            "pic7a.jpg",
            "pic7b.jpg"
        ]
    },

    8:{
        image:"pic8.jpg",
        title:"Calm Sea",
        story:"This is so memorable, sole. Huwag mo iwawalaaa ang bato. The sea is calm but your presence is much more calming. I thank God because He always taming our raging waves. To more seas and more memories with you, sole. ",

        gallery:[
            "pic8.jpg",
            "pic8a.jpg",
            "pic8b.jpg",
            "pic8c.jpg",
            "pic8d.jpg"
        ]
    }

};









/* ==========================================
   SHOW MEMORY
========================================== */


function showMemory(number){

    const data = memories[number];

    const view = document.querySelector(".memory-view");
    const bg = document.getElementById("memoryBg");

    view.style.display = "block";

    // Background
    if(bg){
        bg.style.backgroundImage =
        `url('/static/images/${data.image}')`;
    }

    // Main Photo
    const mainPhoto =
    document.getElementById("memoryImage");

    mainPhoto.src =
    `/static/images/${data.image}`;

    // Title
    document.getElementById("memoryTitle").innerHTML =
    data.title;

    // Story
    document.getElementById("memoryStory").innerHTML =
    data.story;



    /* ==========================
       MINI GALLERY
    ========================== */

    const gallery =
    document.getElementById("memoryGallery");

    gallery.innerHTML = "";



    data.gallery.forEach(photo=>{

        const img =
        document.createElement("img");

        img.src =
        `/static/images/${photo}`;

        img.className =
        "gallery-thumb";



        img.onclick=function(){

            mainPhoto.src =
            `/static/images/${photo}`;

        };



        gallery.appendChild(img);

    });

}









/* ==========================================
   FLOWERS TO ENDING
========================================== */


const finishBtn =
document.getElementById("finishBtn");





if(finishBtn){



finishBtn.onclick=function(){



    showPage(endingPage);



    createConfetti();



};



}









/* ==========================================
   RESTART
========================================== */


const restartBtn =
document.getElementById("restartBtn");




if(restartBtn){



restartBtn.onclick=function(){



    showPage(openingPage);



    // reset candle


    if(flame){

        flame.classList.remove("off");

    }




    if(continueBtn){

        continueBtn.classList.add("hidden");

    }



};



}
/* ==========================================
   FLOATING HEARTS
========================================== */


function createHeart(){



    let heart =
    document.createElement("div");



    heart.innerHTML="💙";



    heart.style.position="fixed";

    heart.style.bottom="-20px";

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize="25px";

    heart.style.zIndex="999";

    heart.style.pointerEvents="none";







    heart.animate(

    [


        {

            transform:"translateY(0)",

            opacity:1

        },


        {

            transform:"translateY(-100vh)",

            opacity:0

        }


    ],


    {


        duration:6000


    }


    );







    document.body.appendChild(heart);







    setTimeout(()=>{


        heart.remove();


    },6000);



}








// CREATE HEART EVERY FEW SECONDS


setInterval(createHeart,2000);