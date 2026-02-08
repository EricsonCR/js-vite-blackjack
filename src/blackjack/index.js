import _ from 'underscore'
import { crearDeck, pedirCarta, valorCarta, puntajes, crearCarta, mensajeGanador, turnoComputador } from './metodos';

/*
2C= trebol
2D= diamantes
2H= corazon
2S= espadas
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosComputador = 0;

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

deck = crearDeck(tipos, especiales);

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntajes(0, puntosJugador);
    crearCarta(0, carta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        puntosComputador = turnoComputador(deck, puntosJugador);
        mensajeGanador(puntosJugador, puntosComputador);
    } else if (puntosJugador === 21) {
        console.warn('21, genial !');
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        puntosComputador = turnoComputador(deck, puntosJugador);
        mensajeGanador(puntosJugador, puntosComputador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    puntosComputador = turnoComputador(deck, puntosJugador);
    mensajeGanador(puntosJugador, puntosComputador);
});

btnNuevo.addEventListener(('click'), () => {
    puntosComputador = 0;
    puntosJugador = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntajes(0, 0);
    puntajes(1, 0);
    crearCarta(0, '');
    crearCarta(1, '');
});