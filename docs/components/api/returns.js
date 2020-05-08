import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './section-wrapper';

export default class Returns extends React.Component {
    render() {
        const { section, formatType, md } = this.props;
        return section.returns.map((item, i) => (
            <SectionWrapper key={i} title="Returns" {...this.props}>
                <code>{formatType(item.type)}</code>
                {item.description && (
                    <span>: {md(item.description, true)}</span>
                )}
            </SectionWrapper>
        ));
    }
}

Returns.propTypes = {
    section: PropTypes.shape({
        returns: PropTypes.array.isRequired
    }).isRequired,
    formatType: PropTypes.func.isRequired,
    md: PropTypes.func.isRequired
};
