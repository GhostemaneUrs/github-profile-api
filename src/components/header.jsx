import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="tittle">{title}</h1>
        </div>
    );
}

export default Header;