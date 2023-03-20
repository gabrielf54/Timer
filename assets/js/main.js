function relogio() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {hour12: false, timeZone: "UTC"});
    }
    
    const relogio = document.querySelector(".relogio");
    const container = document.querySelector(".container");
    const title = document.querySelector(".text-color");
    const buttonPlay = document.querySelector("#btn-play");
    const buttonPause = document.querySelector("#btn-pause");
    const buttonReset = document.querySelector("#btn-reset");

    let segundos = 0;
    let timer;
    
    function playClock(){
        
         timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    
    }
    
    
    document.addEventListener("click", function(e) {
        const el = e.target; 
    
        if(el.classList.contains("zerar")) { 
            clearInterval(timer);

            relogio.classList.remove("pausado");
            container.classList.remove("container-pausado");
            title.classList.remove("pausado");

            relogio.classList.remove("play");
            title.classList.remove("play");
            container.classList.remove("play-container");

            buttonPlay.classList.remove("pause-button");
            buttonPause.classList.remove("pause-button");
            buttonReset.classList.remove("pause-button");
            buttonPlay.classList.remove("play-button");
            buttonPause.classList.remove("play-button");
            buttonReset.classList.remove("play-button");

            relogio.innerHTML = "00:00:00";
            segundos = 0;
        
        }
    
        if(el.classList.contains("pausar")) {
            clearInterval(timer);
            
            relogio.classList.remove("play");
            title.classList.remove("play");
            container.classList.remove("play-container");

            relogio.classList.add("pausado");
            title.classList.add("pausado");
            container.classList.add("container-pausado");

            buttonPlay.classList.remove("play-button");
            buttonPause.classList.remove("play-button");
            buttonReset.classList.remove("play-button");

            buttonPlay.classList.add("pause-button");
            buttonPause.classList.add("pause-button");
            buttonReset.classList.add("pause-button");
        
        }
    
        if(el.classList.contains("iniciar")) {     

            relogio.classList.remove("pausado");
            title.classList.remove("pausado");
            container.classList.remove("container-pausado");

            relogio.classList.add("play");
            title.classList.add("play");
            container.classList.add("play-container");

            buttonPlay.classList.add("play-button");
            buttonPause.classList.add("play-button");
            buttonReset.classList.add("play-button");
            
            clearInterval(timer);
            playClock();
        
        }
    });
    
}

relogio();
