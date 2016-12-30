import { createStore } from 'redux';

const defaultScores = [
    {
        team1: {
            name:'Team Fire',
            score: 0,
            color: '#ff3333',
            winner: false
        },
        team2: {
            name:'Team Ice',
            score: 0,
            color: '#6666ff',
            winner: false
        },
        date: new Date().toLocaleString()
    },
];

const defaultStore = {
    scores: defaultScores,
    allScores: defaultScores,
};

function scoreStore(state = defaultStore, action) {
    switch (action.type) {
    case 'ADD_SCORE':
        const allScores = state.allScores.concat([{
            task: action.task,
            team1: {
                name: action.team1.name,
                score: action.team1.score,
                color: action.team1.color,
                winner: action.team1.winner
            },
            team2: {
                name: action.team2.name,
                score: action.team2.score,
                color: action.team2.color,
                winner: action.team2.winner
            },
            date: new Date().toLocaleString(),
        }]);
        return Object.assign({}, state, {
            allScores,
            scores: allScores,
        });
    default:
        return state;
    }
}

export default createStore(scoreStore);
