import { useState } from 'react';

const LazyImage = ({ src, alt, className = '', wrapperClassName = '' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${wrapperClassName}`}>
            {!loaded && (
                <div className="absolute inset-0 bg-invita-cream animate-pulse rounded-inherit" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            />
        </div>
    );
};

export default LazyImage;
