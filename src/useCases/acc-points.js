import { cardValue } from './card-value';

// This function return the player point
// cpu points are arrPoints.length - 1

/**
 * 
 * @param {String} card The card picked for the player 
 * @param {HTMLElement} HTMLpoints Element where the points will display
 * @param {Number} turn Turn of the player for cpu = 1, for player number 1 = 0
 * @param {Number} points The points of the player
 * @returns {Number} The points of the card
 */

export const accPoints = (card, HTMLpoints, turn, points) => {

    points += cardValue(card);
    HTMLpoints[turn].innerText = points;

    return points;

}