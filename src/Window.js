// your-app-name/src/App.js
import React from 'react';
import Main from './main';
import Header from './Header';
// import fetchGraphQL from './fetchGraphQL';

function Window() {
  // Render "Loading" until the query completes
  return (
    <div className="window">
      <Header />
      <Main />
      <div class="b-example-divider"></div>
    </div>
  );
}

export default Window;