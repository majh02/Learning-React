import React from 'react'
// import {useState} from 'react'

const Header = ({value}) => {
    console.log(value)
    return (
        <header className="header">
            <h1>COVID-19</h1>
            <select>
                <option value="kr">국내</option>
                <option value="jp">일본</option>
                <option value="cn">중국</option>
                <option value="us">미국</option>
            </select>
        </header>
    )
}

export default Header
