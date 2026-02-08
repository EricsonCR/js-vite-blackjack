/**
 * Funcion que devuelve el valor de una carta
 * @param {String} carta Retorna string, Ejemplo: '10H' 
 * @returns {Number} Retorna valor Number, Ejemplo: 10
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}