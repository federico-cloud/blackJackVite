/**
 * This function allows draw a card
 * @param {Array<String>} deck Array of Strings 
 * @returns {String} Returns the picked card
 */
export const drawCard = (deck) => {

    if (!deck || deck.length === 0){
        throw new Error('No hay mas cartas en el deck')
    }

    return deck.pop();   

}