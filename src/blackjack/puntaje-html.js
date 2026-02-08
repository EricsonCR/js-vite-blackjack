/**
 * 
 * @param {Number} jugador Numero de jugador: 0 = Jugador, 1 = Computadora
 * @param {Number} puntaje Puntaje del jugador: Ejemplo: 2,3,4, ...
 */
export const puntajes = (jugador, puntaje) => {
    const smallPuntajes = document.querySelectorAll('small');
    smallPuntajes[jugador].innerText = puntaje;
}