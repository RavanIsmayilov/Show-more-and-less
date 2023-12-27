var contentText = document.querySelector(".text-content");

var button = document.querySelector(".btn");

const arr = [
    {
        paragraf: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi int quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just rea  agni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdamagni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ips. Nam, magni! just read Lorem, ips agni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ips!  "
    },
    {
        paragraf2: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just rea sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just rea  "
      
    },
    {
        paragraf3: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi d sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just rea sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just rea "
       
    }
    
]


button.addEventListener('click', function (e) {
    e.preventDefault();
    contentText.classList.toggle('show-more');
    if (contentText.classList.contains('show-more')) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'See More';
    }
});


var btnHistory = document.querySelector("#history-tab");
var btnVision = document.querySelector("#vision-tab");
var btnGoals = document.querySelector("#goals-tab");

var tabContents = document.querySelector(".text-content");



arr.forEach(element => {
    
    var history = document.createElement('div');

    history.classList.add("history-text")

    tabContents.appendChild(history);   



    const paragraf = document.createElement('p'); 

    const paragraf2 = document.createElement('p'); 

    const paragraf3 = document.createElement('p');

    paragraf3.textContent = element.paragraf3

    paragraf2.textContent = element.paragraf2;

    paragraf.textContent = element.paragraf;

    history.appendChild(paragraf);
    history.appendChild(paragraf2);
    history.appendChild(paragraf3);



paragraf2.style.display = 'none';
paragraf3.style.display = 'none';

btnVision.addEventListener("click", function(){
    if (btnVision.textContent =='Bigdrop' ){

        paragraf.style.display = 'none';
        paragraf2.style.display = 'block';
        paragraf3.style.display = 'none';
       
    }
})

btnHistory.addEventListener("click", function(){
    if (btnHistory.textContent =='Tommy' ){

        paragraf2.style.display = 'none';
        paragraf.style.display = 'block';
        paragraf3.style.display = 'none';
       
    } 
})

btnGoals.addEventListener("click", function(){
    if (btnGoals.textContent =='Cuker' ){

        paragraf.style.display = 'none';
        paragraf2.style.display = 'none';
        paragraf3.style.display = 'block';
       
    }
})

})



    
    // var vision = document.createElement('div');
    
    // vision.classList.add('vision-text');

    // vision.classList.add('hidden');

    // tabContents.appendChild(vision);


    // const paragraf2 = document.createElement('p'); 

    // paragraf2.textContent = element.paragraf;

    // vision.appendChild(paragraf2);


    // var goals = document.createElement('div');

    // goals.classList.add('goals-text');
    
    // goals.classList.add('hidden');
    
    // tabContents.appendChild(goals);


    // const paragraf3 = document.createElement('p'); 

    // paragraf3.textContent = element.paragraf;

    // goals.appendChild(paragraf3);


//     var textHistory = document.querySelector(".history-text");
//     var textGoals = document.querySelector(".goals-text");
//     var textVision = document.querySelector(".vision-text");



// btnVision.addEventListener("click", function(){


//     textVision.classList.remove("hidden");
//     textHistory.classList.add("hidden");
//     textGoals.classList.add("hidden");

// })

// btnHistory.addEventListener("click", function(){


//     textHistory.classList.remove("hidden");
//     textVision.classList.add("hidden");
//     textGoals.classList.add("hidden");

// })

// btnGoals.addEventListener("click", function(){


//     textVision.classList.add("hidden");
//     textGoals.classList.remove("hidden");
//     textHistory.classList.add("hidden");

//     })
