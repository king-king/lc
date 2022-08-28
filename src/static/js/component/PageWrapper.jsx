import React, { useEffect } from 'react';

export default (Com, title) => () => {
    useEffect(() => {
        document.title = title;
    }, []);
    return <Com />;
};
