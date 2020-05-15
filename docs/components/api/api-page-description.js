import React from 'react';
import PropTypes from 'prop-types';
import { toHtml } from '../../util/formatters';

export default class ApiPageDescription extends React.Component {
    render() {
        return <div>{toHtml(this.props.pageDescription)}</div>;
    }
}

ApiPageDescription.propTypes = {
    pageDescription: PropTypes.object.isRequired
};
