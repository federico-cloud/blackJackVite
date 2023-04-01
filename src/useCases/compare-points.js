import Swal from 'sweetalert2';

/**
 * This function compare the player points and decides the winner
 * @param {Number} minPoints Player points
 * @param {Number} cpuPoints Cpu points
 * @returns {void} 
 */
export const comparePoints = (minPoints, cpuPoints) => {

    if( cpuPoints === minPoints ) {
        Swal.fire({
            title: 'Nobody wins 🤔.',
            width: 1000,
            padding: '3em',
            color: '#000000',
            background: '#fff url(./assets/gif/tied.gif)',
            confirmButtonColor: '#30b319'
        })
    } else if ( cpuPoints > minPoints && cpuPoints <= 21 ||  minPoints > 21)  {
        Swal.fire({
            title: '☠',
            width: 800,
            padding: '3em',
            color: '#fff',
            background: '#fff url(./assets/gif/lose.gif)',
            confirmButtonColor: '#ff4f42'
          })
    } else if( minPoints <= 21 && cpuPoints < minPoints || cpuPoints > 21) {
        Swal.fire({
            title: 'Congratulations, you are the winner 😎.',
            width: 800,
            padding: '3em',
            color: '#000000',
            background: '#fff url(./assets/gif/win.gif)',
            confirmButtonColor: '#30b319'
          })
    }

    btnPick.disabled = true;
    btnStop.disabled = true;

}