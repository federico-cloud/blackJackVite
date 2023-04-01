
/**
 * This function make a HTML card and append into the player div 
 * @param {String} card Card picked for the player
 * @param {HTMLElement} divCards HTML where the cards will display
 * @param {Number} turn Turn of the player for cpu = 1, for player number 1 = 0
 * @returns {HTMLElement} The HTML element with the card image
 */
export const makeCard = (card, divCards ,turn) => {

    if (!card) throw new Error('The card is mandatory')

    let newCard   = document.createElement('img');
    newCard.src   = `./assets/cartas/${card}.png`;
    newCard.classList.add('card')
    divCards[turn].append(newCard);

    return newCard;

}