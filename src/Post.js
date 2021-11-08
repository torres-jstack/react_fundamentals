import React from "react";
import propTypes from 'prop-types';

export default function Post({
    likes,
    title = 'Missing title',
    subtitle = 'Missing subtitle'
}) {
    return (
        <>
            <article>
                <strong>{title}</strong><br />
                <small>{subtitle}</small><br />
                <small>Likes: {likes}</small>
            </article>
            <br />
        </>
    );
}

Post.propTypes = {
    likes: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,

}