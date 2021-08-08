import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import TopBar from './TopBar';
function App() {
  return (
    <React.Fragment>
       <TopBar />
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
