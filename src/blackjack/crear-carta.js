export const crearCarta = (numeroJugador, carta) => {
    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComputador = document.querySelector('#computador-cartas');

    if (carta == '') {
        divCartasJugador.innerHTML = '';
        divCartasComputador.innerHTML = '';
        return;
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    if (numeroJugador === 0)
        divCartasJugador.append(imgCarta);
    else
        divCartasComputador.append(imgCarta);
}