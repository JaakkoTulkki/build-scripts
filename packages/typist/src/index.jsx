import React from 'react';
import ReactDom from 'react-dom';

var elem = document.getElementById('root');

const App = () => <div>Hello React!!!!</div>;
ReactDom.render(<App />, elem)