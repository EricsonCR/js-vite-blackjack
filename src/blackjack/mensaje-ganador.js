export const mensajeGanador = (puntosJugador, puntosComputador) => {
    setTimeout(() => {
        if (puntosJugador > 21) {
            alert('La casa gana !')
        } else if (puntosComputador == puntosJugador) {
            alert('La casa gana !');
        } else if (puntosComputador > puntosJugador && puntosComputador <= 21) {
            alert('La casa gana !');
        } else {
            alert('Felicidades ganaste !');
        }
    }, 1000);
}