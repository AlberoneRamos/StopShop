import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                {
                    id: action.id,
                    comment: action.comment,
                    user: action.user
                }
            ];
        case EDIT_COMMENT:
            const index = state.findIndex(comment => comment.id === action.id);
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    comment: action.comment
                },
                ...state.slice(index + 1),
            ];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id != action.id);
        default:
            return state;
    }
}