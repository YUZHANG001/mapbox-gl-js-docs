import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageshell from '../markdown-page-shell';
import ApiPageItems from './api-page-items.js';

export default class Api extends React.Component {
    render() {
        // The feedback module will be added in ApiPageItem
        return (
            <MarkdownPageshell feedback={false} {...this.props}>
                <ApiPageItems
                    pageTitle={this.props.frontMatter.title}
                    location={this.props.location}
                />
            </MarkdownPageshell>
        );
    }
}

Api.propTypes = {
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.object.isRequired
};
