import { makeDeck } from './make-deck';
import { types, specials, HTMLpoints, cards } from '../index';

/**
 * This function initialize the game
 * @param {Void}
 * @return {Void}
 */

export let deck = [];

export const initGame = () => {
    
    deck = makeDeck(types, specials);
      
    HTMLpoints.forEach( 
        e => { e.innerText = 0 }    
    );

    cards.forEach(
        div => {div.innerHTML = ''}
    );

    console.log(deck)

    btnPick.disabled = false;
    btnStop.disabled = false;


}