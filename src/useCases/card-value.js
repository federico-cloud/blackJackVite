/**
 * This function gives the card value
 * @param {String} card String with the value of the card
 * @returns {Number} The number of points on the card
 */
export const cardValue = (card) => {

    const value = card.substring(0, card.length-1);
    let points  = 0;

    isNaN(value)
        ? points = (value === 'A') ? 11: 10
        : points = value * 1;

    return points;

}