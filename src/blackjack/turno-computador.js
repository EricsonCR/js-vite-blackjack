import { pedirCarta, valorCarta, puntajes, crearCarta } from './metodos'

export const turnoComputador = (deck, puntosMinimos) => {
    let puntosComputador = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputador = puntosComputador + valorCarta(carta);

        puntajes(1, puntosComputador);
        crearCarta(1, carta);

        if (puntosMinimos > 21) { break; }
    } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    return puntosComputador;
}