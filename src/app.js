'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component 
{

    render() 
    {
        return (
            <>
                hola mundo xD
            </>
        );
    }

}

ReactDom.render(<App />, document.querySelector('#body'))
