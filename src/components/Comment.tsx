import Comment from '../domain-model/Comment';
import React from 'react';

type Props = {
  comment: Comment;
};

const comment: React.FC<Props> = ({ comment }: Props): JSX.Element => {
  const onDelete = (comment: Comment): void => {
    // todo delete comment
  };

  return (
    <div className="Comment">
      <p>{comment.text}</p>
      <button onClick={() => onDelete(comment)}>Delete</button>
    </div>
  );
};

export default comment;
