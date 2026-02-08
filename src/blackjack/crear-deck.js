import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

     if (tipos.length<=0)
        throw new Error('Tipos de carta es obligatorio y debe ser un arreglo de 4 cartas minimo');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let esp of especiales) {
        for (let tipo of tipos) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
}