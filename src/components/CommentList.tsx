import CommentComponent from './Comment';
import React from 'react';
import { CommentType } from '../Types';

type Props = {
  comments: CommentType[];
  onDeleteComment: (id: number) => void;
};

const commentList: React.FC<Props> = ({
  comments,
  onDeleteComment,
}: Props) => (
  <>
    {comments.length > 0 && (
      <div className="Comment-container">
        <h4>Comments</h4>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <CommentComponent
                comment={comment}
                onDeleteComment={onDeleteComment} />
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

export default commentList;
