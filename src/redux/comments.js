import { COMMENTS } from '../shared/comments';
import * as AtionTypes from './ActionType';



export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case AtionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default: 
            return state;
    }
}