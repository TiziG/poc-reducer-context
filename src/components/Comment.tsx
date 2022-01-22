import React from 'react';
import { CommentType } from '../Types';

type Props = {
  comment: CommentType;
  onDeleteComment: (id: number) => void;
};

const Comment: React.FC<Props> = ({
  comment,
  onDeleteComment,
}: Props): JSX.Element => {
  const onDelete = (comment: CommentType): void => {
    onDeleteComment(comment.id);
  };

  return (
    <div className="Comment">
      <p>{comment.id}: {comment.text}</p>
      <button onClick={() => onDelete(comment)}>Delete</button>
    </div>
  );
};

export default Comment;
