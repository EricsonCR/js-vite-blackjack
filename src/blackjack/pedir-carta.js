/**
 * Funcion que extrae una carta del deck
 * @param {Array<String>} deck Arreglo de string, Ejemplo: ['2C','2D','2H','2S',....]
 * @returns {String} Retorna un valor string, Ejemplo: '2C'
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0)
        throw new Error('No hay cartas en el Deck');
    return deck.pop();
}