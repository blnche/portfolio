import React, { useState } from 'react';

const AcademicsSkill = ({ src, alt }) => {
    const [hover, setHover] = useState(false);
    const [altText, setAltText] = useState('');

    const handleAltText = (e) => {
        setHover(true);
        setAltText(e.target.alt);
    };

    const handleEmptyAltText = () => {
        setHover(false);
        setAltText('');
    };

    return (
        <div
            className="indicator"
            onMouseEnter={handleAltText}
            onMouseLeave={handleEmptyAltText}
            onTouchStart={handleAltText}
            onTouchEnd={handleEmptyAltText}
        >
            <span className={`indicator-item indicator-middle indicator-center badge badge-success ${hover ? 'inline-flex' : 'hidden'}`}>{altText}</span>
            <div className="bg-base-300 place-items-center">
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default AcademicsSkill;
