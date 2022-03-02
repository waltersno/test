import React from 'react';
import classes from './comments.module.scss';
interface ICommentsFC {
  data: string | JSX.Element[];
}

const Comments: React.FC<ICommentsFC> = ({ data }) => {
  return <div className={classes.comments}>{data}</div>;
};

export default Comments;
