'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component 
{

    render() 
    {
        return (
            <React.Fragment>
                <Nav nombre="mundo" />
            </React.Fragment>
        );
    }

}

ReactDom.render(<App />, document.querySelector('#body'))
