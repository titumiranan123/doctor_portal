import Image from 'next/image';
import React, { useState } from 'react';

const HoverCard = ({ imageSrc, title, description }) => {
    const [hovered, setHovered] = useState(false);

    const cardStyles = `transition-all duration-500 ease-in-out ${hovered
            ? 'bg-gradient-to-b from-blue-100 to-blue-500'
            : 'bg-gradient-to-b from-white to-white'
        }`;

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg ${cardStyles}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default HoverCard;
