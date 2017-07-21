import commentsReducer from '../../app/reducers/commentsReducer';
import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT
} from '../../app/actions/types';

describe('Comments Reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = [{
                id: '1',
                comment: 'test',
                user: 'Ash'
            },
            {
                id: '2',
                comment: 'test',
                user: 'Ash'
            },
            {
                id: '3',
                comment: 'test',
                user: 'Ash'
            }
        ];
    })

    it('should exist', () => {
        expect(commentsReducer).not.toBeUndefined();
    });

    it('should return same value if the action type is unknown', () => {
        expect(commentsReducer([], {
            action: 'unknown_type'
        })).toEqual([]);
    });

    it('should add a comment when the ADD_COMMENT action is dispatched to it', () => {
        const action = {
            type: ADD_COMMENT,
            comment: 'test',
            user: 'user',
            id: '1'
        };
        expect(commentsReducer([], action)).toEqual([{
            comment: action.comment,
            user: action.user,
            id: action.id
        }]);
    });

    it('should edit a comment when EDIT_COMMENT action is dispatched', () => {
        const action = {
            type: EDIT_COMMENT,
            id: '2',
            comment: 'test4321'
        }
        const reducer = commentsReducer(initialState, action);
        expect(reducer[1]).toEqual({
            comment: action.comment,
            id: action.id,
            user: reducer[1].user
        });
    });

    it('should remove a comment when REMOVE_COMMENT action is dispatched', () => {
        const action = {
            type: REMOVE_COMMENT,
            id: '2'
        };

        const reducer = commentsReducer(initialState,action);
        expect(reducer.length).toEqual(2);
    });
})