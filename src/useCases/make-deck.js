import { shuffle } from 'underscore';

/**
 * This function makes a new deck
 * @param {Array<string>} types Example ['C', 'D', 'H', 'S']
 * @param {Array<string>} specials Example ['A', 'J', 'Q', 'K'] 
 * @returns {Array<string>} Returns a new deck. 
 */

// This function make a new deck
export const makeDeck = (types, specials) => {

    if(!types || types.length === 0){ 
        throw new Error('Error: The types of the cards aren not specified');
    }

    if(!specials|| specials.length === 0){ 
        throw new Error('Error: The specials cards are not specified');
    }

    let deck = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let type of types){
            deck.push(`${i}${type}`)
        }
    }

    for (let type of types){
        for (let special of specials){
            deck.push(`${special}${type}`)
        }
    }

    return shuffle(deck);

}