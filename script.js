function mulaiKejutan(){


    let musik=document.getElementById("musik");


    if(musik){

        musik.volume=0.7;

        musik.play();

    }



    document.getElementById("opening").style.display="none";


    buatHati();


}



function buatHati(){


    for(let i=0;i<40;i++){


        let hati=document.createElement("div");


        hati.innerHTML="❤️";


        hati.style.position="fixed";

        hati.style.left=Math.random()*100+"vw";

        hati.style.top="-20px";

        hati.style.fontSize="25px";

        hati.style.animation="jatuh 5s linear";


        document.body.appendChild(hati);



        setTimeout(()=>{

            hati.remove();

        },5000);


    }


}