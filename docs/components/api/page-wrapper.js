import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageshell from '../markdown-page-shell';
import ApiPageItems from './api-page-items.js';

export default class Api extends React.Component {
    render() {
        return (
            <MarkdownPageshell {...this.props}>
                <ApiPageItems pageTitle={this.props.frontMatter.title} />
            </MarkdownPageshell>
        );
    }
}

Api.propTypes = {
    frontMatter: PropTypes.shape({
        title: PropTypes.string
    })
};
