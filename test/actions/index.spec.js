import * as actions from '../../app/actions/';
import * as types from '../../app/actions/types';

describe('Action Creators', () => {

    describe('AddComment', () => {
        it('should exist', () => {
            expect(actions.addComment).not.toBeUndefined();
        });

        it('should return an action with type ADD_COMMENT and a payload with comment, user and id', () => {
            const values = {
                type: types.ADD_COMMENT,
                id: '1',
                comment: 'test',
                user: 'user'
            };
            expect(actions.addComment('1','test', 'user')).toEqual(values);
        })
    });

})