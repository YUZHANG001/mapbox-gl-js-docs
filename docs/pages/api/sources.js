/*---
title: Sources
description: Sources specify the geographic features to be rendered on the map. Source objects may be obtained from Map#getSource.
contentType: API
language:
    - JavaScript
---*/

import React from 'react';
import PageWrapper from '../../components/api/page-wrapper.js';

export default class Page extends React.Component {
    render() {
        return <PageWrapper {...this.props} />;
    }
}
