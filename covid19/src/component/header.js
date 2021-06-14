import React from 'react'
// import {useState} from 'react'

let cn=""

const Header = ({contryName}) => {
    textChange = inputValue => { // whole object of selected option 
        // this.setState({ inputValue:inputValue.value });
        alert(inputValue.value);
    };
      
    return (
        <header className="header">
            <h1>COVID-19</h1>
            <select name="value" onChange={()=>{this.textChange}}>
                <option value="kr">국내</option>
                <option value="jp">일본</option>
                <option value="cn">중국</option>
                <option value="us">미국</option>
            </select>
        </header>
    )
}

export default Header
