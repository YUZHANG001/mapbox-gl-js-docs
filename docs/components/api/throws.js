import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './section-wrapper';

export default class Throws extends React.Component {
    render() {
        const { section, formatType, md } = this.props;
        return (
            <SectionWrapper title="Throws" {...this.props}>
                <ul>
                    {section.throws.map((throws, i) => (
                        <li key={i}>
                            {formatType(throws.type)}:{' '}
                            {md(throws.description, true)}
                        </li>
                    ))}
                </ul>
            </SectionWrapper>
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
