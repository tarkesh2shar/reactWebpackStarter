import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';

//extras just to test//
import BigImage from "../assets/1.jpg";
import SmallImage from "../assets/3.jpg";

ReactDom.render(<App />,
    document.querySelector("#root")
);
if (module.hot) {
    module.hot.accept(App, function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}