import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class Throws extends React.Component {
    render() {
        const { section, formatType, md } = this.props;
        return (
            <React.Fragment>
                <Title section={section}>Throws</Title>
                <ul>
                    {section.throws.map((throws, i) => (
                        <li key={i}>
                            {formatType(throws.type)}:{' '}
                            {md(throws.description, true)}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

Throws.propTypes = {
    section: PropTypes.shape({
        throws: PropTypes.array
    }).isRequired,
    formatType: PropTypes.func.isRequired,
    md: PropTypes.func.isRequired
};
