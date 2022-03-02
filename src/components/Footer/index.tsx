import React from 'react';
import classes from './footer.module.scss';

export interface IFooter {
  pageChanges: number;
}

const Footer: React.FC<IFooter> = ({ pageChanges }) => {
  return <footer className={classes.footer}>Page changed {pageChanges} times</footer>;
};

export default Footer;
