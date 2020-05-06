import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class Returns extends React.Component {
    render() {
        const { section, formatType, md } = this.props;
        return section.returns.map((item, i) => (
            <React.Fragment key={i}>
                <Title section={section}>Returns</Title>
                <code>{formatType(item.type)}</code>
                {item.description && (
                    <span>: {md(item.description, true)}</span>
                )}
            </React.Fragment>
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
