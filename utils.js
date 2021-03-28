export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    };
    if (computer === 'scissors' && player === 'paper'){
        return 'loss'
    };
    if (computer === 'paper' && player === 'rock'){
        return 'loss'
    };
    if (computer === 'rock' && player === 'lizard'){
        return 'win'
    };
    if (computer ==='lizard' && player === 'spock'){
        return 'win'
    };
    if (computer === 'spock' && player === 'scissors'){
        return 'win'
    };
    if (computer === 'scissors' && player === 'lizard'){
        return 'win'
    };
    if (computer === 'lizard' && player === 'paper'){
        return 'win'
    };
    if (computer === 'paper' && player === 'spock'){
        return 'win'
    }; 
    if (computer === 'spock' && player === 'rock'){
    return 'win'
    };
    if (computer === 'rock' && player === 'scissors'){
        return 'win'
    };
    if (computer === 'lizard' && player === 'rock'){
        return 'loss'
    };
    if (computer ==='spock' && player === 'lizard'){
        return 'loss'
    };
    if (computer === 'scissors' && player === 'spock'){
        return 'loss'
    };
    if (computer === 'lizard' && player === 'scissors'){
        return 'loss'
    };
    if (computer === 'paper' && player === 'lizard'){
        return 'loss'
    };
    if (computer === 'spock' && player === 'paper'){
        return 'loss'
    }; 
    if (computer === 'rock' && player === 'spock'){
    return 'loss'
    };
    if (computer === 'scissors' && player === 'rock'){
        return 'loss'
    };


    export function randomThrow() {

        const throwNumber = Math.ceil(Math.random() *5);

        if (throwNumber === 1) return 'rock';
        
        if (throwNumber === 2) return 'paper';

        if (throwNumber === 3) return 'scissors';

        if (throwNumber === 4) return 'lizard';

        if (throwNumber === 5) return 'spock';

    };
    