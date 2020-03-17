import React from 'react';

const SearchBox = ({ searchfield, searchchange }) => {
    return (
        <div className="pa2">
        <input type="search" 
        placeholder = "type to search the robot characters"
        className="pa3 ba b--green bg-lightest-blue" 
            onChange={ searchchange }
        />
        </div>
    );
}

export default SearchBox;