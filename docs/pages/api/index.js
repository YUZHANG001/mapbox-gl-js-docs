/*---
title: API Reference
description: The Mapbox GL JS API documentation to render interactive maps from vector tiles and Mapbox styles.
contentType: API
lanaguage:
    - JavaScript
---*/

import React from 'react';
import PropTypes from 'prop-types';
import PageShell from '../../components/page_shell';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { version } from '../../../mapbox-gl-js/package.json';
import DrUiNote from '@mapbox/dr-ui/note';
import Feedback from '../../components/feedback';

export default class Api extends React.Component {
    render() {
        return (
            <PageShell {...this.props}>
                <div className="prose">
                    <h1 className="mt24 mt0-mm txt-fancy">Mapbox GL JS</h1>
                    <div className="py6 color-gray txt-s mt-neg24 mb12">
                        Current version:{' '}
                        <span className="round bg-gray-faint py3 px6">
                            <a href="https://github.com/mapbox/mapbox-gl-js/releases">
                                mapbox-gl.js v{version}
                            </a>
                        </span>
                    </div>
                    <p>
                        Mapbox GL JS is a JavaScript library that uses WebGL to
                        render interactive maps from{' '}
                        <a href="https://www.mapbox.com/help/define-vector-tiles">
                            vector tiles
                        </a>{' '}
                        and <a href={prefixUrl('/style-spec')}>Mapbox styles</a>
                        . It is part of the Mapbox GL ecosystem, which includes{' '}
                        <a href="https://www.mapbox.com/mobile/">
                            Mapbox Mobile
                        </a>
                        , a compatible renderer written in C++ with bindings for
                        desktop and mobile platforms.
                    </p>
                    <DrUiNote title="Pricing for Mapbox GL JS">
                        <p>
                            If you are using Mapbox GL JS v1.0.0 or higher your
                            usage is counted in{' '}
                            <a href="https://docs.mapbox.com/help/glossary/map-loads/">
                                map loads
                            </a>
                            . If you are using Mapbox GL JS {'<'} v1.0.0, your
                            usage is measured in tile requests.
                        </p>
                        <p>
                            For more details see{' '}
                            <a href="https://docs.mapbox.com/accounts/overview/pricing/#mapbox-gl-js--v100">
                                our pricing guide
                            </a>{' '}
                            or reach out to our{' '}
                            <a href="https://support.mapbox.com/hc/en-us">
                                support team
                            </a>
                            .
                        </p>
                    </DrUiNote>
                    <Feedback location={this.props.location} />
                </div>
            </PageShell>
        );
    }
}

Api.propTypes = {
    location: PropTypes.object
};
