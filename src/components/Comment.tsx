import React, { useContext } from 'react';
import { CommentType } from '../Types';
import { GlobalStateContext } from '../App';

type Props = {
  comment: CommentType;
};

const Comment: React.FC<Props> = ({ comment }: Props): JSX.Element => {
  const {dispatch} = useContext(GlobalStateContext);
  const onDelete = (comment: CommentType): void => {
    dispatch({
      type: 'DELETE_COMMENT',
      commentId: comment.id,
    });
  };

  return (
    <div className="Comment">
      <p>{comment.id}: {comment.text}</p>
      <button onClick={() => onDelete(comment)}>Delete</button>
    </div>
  );
};

export default Comment;
