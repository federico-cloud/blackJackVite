import { drawCard }       from './draw-card';
import { accPoints }      from './acc-points';
import { makeCard  }      from './make-card';
import { comparePoints  } from './compare-points';
import { cards } from '../index';

/**
 *  This function start the cpu turn
 * @param {Number} minPoints Minimum points for the cpu wins the game
 * @param {HTMLElement} HTMLpoints HTML element where the cpu points are displayed
 * @param {Array<String>} deck
 */

export const cpuTurn = (minPoints, HTMLpoints, deck) => {
    
    let cpuPoints = 0;

    if (!minPoints)  throw new Error('The points of the player are needed');
    if (!deck)       throw new Error('The deck is needed');
    if (!HTMLpoints) throw new Error('The HTML elemment is needed');

    do {
        const card   = drawCard(deck);
        cpuPoints    = accPoints(card, HTMLpoints, 1, cpuPoints);

        makeCard(card, cards, 1);
    
    } while ( (minPoints > cpuPoints) && minPoints <= 21 || (cpuPoints === minPoints) && cpuPoints < 21);

    comparePoints(minPoints, cpuPoints);

    btnGame.disabled = false;

}