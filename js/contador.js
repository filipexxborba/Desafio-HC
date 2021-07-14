// Script que faz rodar o contador da promoção
dayjs.extend(window.dayjs_plugin_duration);
dayjs().format();

function setCounters(){
    const dateTarget = dayjs().add(dayjs.duration({'days' : 2, 'hours' : 12, 'minutes' : 30}))
    
    setInterval( () => {
        const now = dayjs(), duration = dayjs.duration(dateTarget.diff(now)), dias = document.querySelector('.dias'), diasTexto = document.querySelector('.diasTexto'), horas = document.querySelector('.horas'), horasTexto = document.querySelector('.horasTexto'), minutos = document.querySelector('.minutos'), minutosTexto = document.querySelector('.minutosTexto');
        
        // Controllers
        dias.innerText = duration.days() <= 9 ? `0${duration.days()}`: duration.days();
        duration.days() <= 1 ? diasTexto.innerText = 'Dia' : diasTexto.innerText = 'Dias'
        horas.innerText = duration.hours() <= 9 ? `0${duration.hours()}`: duration.hours();
        duration.hours() <= 1 ? horasTexto.innerText = 'Hora' : horasTexto.innerText = 'Horas'
        minutos.innerText = duration.minutes() <= 9 ? `0${duration.minutes()}`: duration.minutes();
        duration.minutes() <= 1 ? minutosTexto.innerText = 'Minuto' : minutosTexto.innerText = 'Minutos' 
    }, 1000)
}

setCounters();