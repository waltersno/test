import React from 'react';
import classes from './comment.module.scss';

interface ICommentFC {
  data: string | JSX.Element[];
}

const Comment: React.FC<ICommentFC> = ({ data }) => {
  return <div className={classes.comment}>{data}</div>;
};

export default Comment;
