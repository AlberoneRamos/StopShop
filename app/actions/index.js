import * as types from './types';
export function addComment(id,comment,user){
    return{
        type:types.ADD_COMMENT,
        id,
        comment,
        user
    };
}