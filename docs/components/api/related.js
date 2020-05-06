import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class Related extends React.Component {
    render() {
        const { section, md } = this.props;
        return (
            <React.Fragment>
                <Title section={section}>Related</Title>
                <ul>
                    {section.sees.map((see, i) => (
                        <li key={i}>{md(see, true)}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

Related.propTypes = {
    section: PropTypes.shape({
        sees: PropTypes.array.isRequired
    }).isRequired,
    md: PropTypes.func.isRequired
};
