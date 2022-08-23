/*
 * Created by king at 2022-8-23 16:29:16
 * Copyright (c) 2022
 */
import React, { cloneElement } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const matchClass = match ? 'match' : 'no-match';
    const className = children.props.className ? `${children.props.className} ${matchClass}` : matchClass;
    const content = cloneElement(children, {
        ...children.props,
        className
    });
    return (
        <div>
            <Link to={to} {...props}>
                {content}
            </Link>
        </div>
    );
}

export default React.memo(CustomLink);
