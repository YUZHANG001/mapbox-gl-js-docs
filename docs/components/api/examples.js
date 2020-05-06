import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Copyable from '../../components/copyable.js';

export default class Examples extends React.Component {
    render() {
        const { section, md } = this.props;
        return (
            <React.Fragment>
                <Title section={section}>Example</Title>
                {section.examples.map((example, i) => (
                    <React.Fragment key={i}>
                        {example.caption && <p>{md(example.caption)}</p>}
                        <Copyable lang="javascript">
                            {example.description}
                        </Copyable>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}

Examples.propTypes = {
    section: PropTypes.shape({
        examples: PropTypes.arrayOf(
            PropTypes.shape({
                caption: PropTypes.string,
                description: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    md: PropTypes.func.isRequired
};
