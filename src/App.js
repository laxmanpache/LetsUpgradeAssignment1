import React from 'react'
import NameCop from './NameCop'
import BodyComp from './BodyComp';
import FooterComp from './FooterComp';

const App = () => {
    return (
       <>
         <h1>This is msg from App component</h1>
         <NameCop />
         <BodyComp />
         <FooterComp />
       </>
    )
}

export default App
