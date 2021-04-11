

const pumpWorking = document.querySelector('.pump-working');

const tankOpen = document.querySelector('.tank-open');

const pipeOpen = document.querySelector('.pipe-open');

const button = document.querySelector('.start');


button.addEventListener('click', ()=>{
    pipeOpen.style.display = "block"
    // pipee.classList.add('.open-pipe');
} );


// button.addEventListener('click', ()=>{
//     tankOpen.style.height = "70" + "%"
//     //  70 is max !!!
//     // pipee.classList.add('.open-pipe');
// } );


let pipeWidth = 6;
let tankFilled = 8;
let pumpDrained = 74;

function waterStart(){
    if(pipeWidth <=61) {
        pipeOpen.style.width = `${pipeWidth}` + "%";
        pipeWidth ++
        pipeOpen.style.backgroundColor = "#6495ED"
        console.log( pipeOpen.style.width)

    } else if (pipeWidth > 61 && tankFilled <= 41 ) {
        pumpWorking.style.height = `${pumpDrained}` + "%";
        pumpDrained -= 1
        pumpWorking.style.backgroundColor = "#6495ED"

        tankOpen.style.height = `${tankFilled}` + "%";
        tankFilled ++
        tankOpen.style.backgroundColor = "#6495ED"

      

        // decrease and increase 
    } else {

    }

}


button.addEventListener('click', ()=>{
    window.setInterval(waterStart, [300]);
    //  70 is max !!!
    // pipee.classList.add('.open-pipe');
} );



