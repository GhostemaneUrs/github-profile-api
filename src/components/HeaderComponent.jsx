import React from 'react';

const HeaderComponent = ({ title }) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="tittle">{title}</h1>
        </div>
    );
}

export default HeaderComponent;