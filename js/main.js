var contentText = document.querySelector(".text-content");

var button = document.querySelector(".btn");

const arr = [
    {
        paragraf: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read "
    }
]

const arr2 = [
    {
        paragraf: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read jkahsdkjas molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read "
    }
]

const arr3 = [
    {
        paragraf: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read kslajdklajkldad molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! Ravan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint quisquam commodi dolores beatae, aspernatur magni earum nihil neque placeat, molestias ullam! Cupiditate cumque vero tempora reprehenderit quibusdam. Nam, magni! just read "
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

    paragraf.textContent = element.paragraf;

    history.appendChild(paragraf);
})



arr2.forEach(element => {

    
    var vision = document.createElement('div');
    
    vision.classList.add('vision-text');

    vision.classList.add('hidden');

    tabContents.appendChild(vision);


    const paragraf2 = document.createElement('p'); 

    paragraf2.textContent = element.paragraf;

    vision.appendChild(paragraf2);

})


arr3.forEach(element => {

    var goals = document.createElement('div');

    goals.classList.add('goals-text');
    
    goals.classList.add('hidden');
    
    tabContents.appendChild(goals);


    const paragraf3 = document.createElement('p'); 

    paragraf3.textContent = element.paragraf;

    goals.appendChild(paragraf3);

})

    var textHistory = document.querySelector(".history-text");
    var textGoals = document.querySelector(".goals-text");
    var textVision = document.querySelector(".vision-text");



btnVision.addEventListener("click", function(){


    textVision.classList.remove("hidden");
    textHistory.classList.add("hidden");
    textGoals.classList.add("hidden");

})

btnHistory.addEventListener("click", function(){


    textHistory.classList.remove("hidden");
    textVision.classList.add("hidden");
    textGoals.classList.add("hidden");

})

btnGoals.addEventListener("click", function(){


    textVision.classList.add("hidden");
    textGoals.classList.remove("hidden");
    textHistory.classList.add("hidden");

    })
