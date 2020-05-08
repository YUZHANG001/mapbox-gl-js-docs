import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './section-wrapper';

export default class Related extends React.Component {
    render() {
        const { section, md } = this.props;
        return (
            <SectionWrapper title="Related" {...this.props}>
                <ul>
                    {section.sees.map((see, i) => (
                        <li key={i}>{md(see, true)}</li>
                    ))}
                </ul>
            </SectionWrapper>
        );
    }
}

Related.propTypes = {
    section: PropTypes.shape({
        sees: PropTypes.array.isRequired
    }).isRequired,
    md: PropTypes.func.isRequired
};
