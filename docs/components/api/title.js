import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slugg';

export default class Title extends React.Component {
    render() {
        const { children, section, heading } = this.props;
        const id = slug(`${section ? section.name : ''} ${children}`);
        const HeadingLevel = `h${heading}`;
        return (
            <HeadingLevel id={id} className="unprose py6 mt12 txt-m txt-bold">
                <a
                    className="unprose block color-blue-on-hover"
                    href={`#${id}`}
                >
                    {children}
                </a>
            </HeadingLevel>
        );
    }
}

Title.defaultProps = {
    heading: 4
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    section: PropTypes.shape({
        name: PropTypes.string
    }),
    heading: PropTypes.number
};
