const randomNumbers=function(min,max,times){
    const randoms = []

    for (let i = 0; i < times; i++) {
        randoms.push(Math.floor((Math.random() * 9) + 1));
    }

    return randoms
};

var smileyInterval,score=0;
function startTimer(){
    smileyInterval = setInterval(initiate_game,500);
}

function stopTimer(){
    clearInterval(smileyInterval);
    document.querySelectorAll('.hole').forEach(function(value){
        if(value.classList.contains("active")){value.classList.remove("active");}
        if(value.classList.contains("caught")){value.classList.remove("caught");}
    });
}

function initiate_game(){
    document.querySelectorAll('.hole').forEach(function(value){
        if(value.classList.contains("active")){value.classList.remove("active");}
        if(value.classList.contains("caught")){value.classList.remove("caught");}
    });
    numbers=randomNumbers(1,9,Math.floor(Math.random() * (8 - 3)) + 3);
    numbers.forEach(function(value){
        document.getElementsByClassName('hole-'+value)[0].classList.add('active');
    });
    document.querySelectorAll('.hole').forEach(function(cls,indx){
        cls.addEventListener('click',function(event){
            if(cls.classList.contains("active")){
                cls.classList.remove("active");
                cls.classList.add("caught");
                score++;
                document.getElementsByClassName('score')[0].innerHTML=score;
            }
        });
    });
}

document.getElementsByClassName('start-btn')[0].addEventListener('click',function(cls){
    if(document.getElementsByClassName('start-btn')[0].innerHTML==='start'){
        document.getElementsByClassName('start-btn')[0].innerHTML='pause';
        startTimer(); 
    }else{
        document.getElementsByClassName('start-btn')[0].innerHTML='start';
        stopTimer();
    }
    
});

document.getElementsByClassName('reset')[0].addEventListener('click',function(){
    document.getElementsByClassName('score')[0].innerHTML=0;
    score=0;
});