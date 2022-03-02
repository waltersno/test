import React from 'react';
import CommentAPI from '../../service/postApi';
import Footer, { IFooter } from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';
import { PageNames } from './hoc-types';
import { useParams } from 'react-router-dom';
import { IComment } from '../../service/service-types';
import classes from './hoc.module.scss';
import { Link } from 'react-router-dom';

const MainHOC = (
  Component: React.FC<{ data: string | JSX.Element[] }>,
  title: string,
): React.FC<IFooter> => {
  const ComponentWrapper: React.FC<IFooter> = ({
    pageChanges,
  }): JSX.Element => {
    const [data, setData] = React.useState<IComment | IComment[]>([]);
    const { id: page } = useParams<string>();

    React.useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      let componentData;
      if (title === PageNames.HOME) {
        componentData = await CommentAPI.getComments();
      } else if (title === PageNames.COMMENT) {
        const commentId = page ? +page : 1;
        componentData = await CommentAPI.getComment(commentId);
      }
      if (componentData) {
        setData(componentData);
      }
    };

    let renderData;
    let headerTitle;

    if (Array.isArray(data)) {
      renderData = data.map((com) => (
        <div className={classes.comment} key={com.id}>
          <Link to={`/${com.id}`}>{com.name}</Link>
        </div>
      ));
      headerTitle = PageNames.HOME;
    } else {
      renderData = data.body;
      headerTitle = data.name;
    }

    return (
      <>
        <Header title={headerTitle} />
        <Component data={renderData} />
        <Navbar />
        <Footer pageChanges={pageChanges} />
      </>
    );
  };

  return ComponentWrapper;
};

export default MainHOC;
