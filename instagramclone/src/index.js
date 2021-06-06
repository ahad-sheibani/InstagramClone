import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import FirebaseContext from './context/firebase'
import {firebase,FieldValue} from './lib/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase,FieldValue}}>

  <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);




//client side rendered app : react (cra)
  //database wich is Firebase
  //react-loading-skeleton
  //tailwind-




//folder structure
  //src
    //components
    //constants
    //context
    //hooks
    //pages
    //helpers
    //lib(firebase in here)
    //services(firebase functions in here)
    //styles(tailwind)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
