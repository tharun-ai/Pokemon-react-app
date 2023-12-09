import React, { useState } from 'react'

function Dropdown({ filterType,filterData=[],onDataChange}) {
    return <>
        <label htmlFor={filterType}>select {filterType}:</label>
        <select name={filterType}   onChange={(e)=>{onDataChange({filterType},e.target.value)}}>
            {
                filterData.map((filter,index)=>(<option key={index} value={filter}>{filter}</option>))
            }
        </select>
    </>
}

export default Dropdown