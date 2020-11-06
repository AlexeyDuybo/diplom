import type actionType from 'types/actionsType';

const initialState = {
    isModalOpen: false,
};

const modalWindowReducer = (state = initialState, action: actionType): typeof initialState => {
    switch (action.type) {
    case 'CLOSE_MODAL_WINDOW': {
        return {
            ...state,
            isModalOpen: false,
        };
    }
    case 'OPEN_MODAL_WINDOW': {
        return {
            ...state,
            isModalOpen: true,
        };
    }
    case 'TOGGLE_MODAL_WINDOW': {
        return {
            ...state,
            isModalOpen: !state.isModalOpen,
        };
    }
    default: {
        return state;
    }
    }
};

export default modalWindowReducer;
