import React from 'react';
import classes from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { CommentPage } from './pages/Comment';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [locationChanges, setLocationChanges] = React.useState<number>(0);
  
  React.useEffect(() => {
    setLocationChanges((prev) => prev + 1);
  }, [location]);

  return (
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<HomePage pageChanges={locationChanges}/>} />
          <Route path="/:id" element={<CommentPage pageChanges={locationChanges}/>} />
        </Routes>
      </div>
  );
};

export default App;
