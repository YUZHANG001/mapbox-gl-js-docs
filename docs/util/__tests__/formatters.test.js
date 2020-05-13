/* eslint-disable xss/no-mixed-html */

import formatters from '../formatters';

it('formatters', () => {
    expect(formatters.autolink('Map#addLayer')).toEqual(
        '<a href="/mapbox-gl-js/api/map/#map#addlayer">Map#addLayer</a>'
    );
    expect(formatters.autolink('Map.event:webglcontextlost')).toEqual(
        '<a href="/mapbox-gl-js/api/map/#map.event:webglcontextlost">Map.event:webglcontextlost</a>'
    );
    expect(formatters.autolink('Map')).toEqual(
        '<a href="/mapbox-gl-js/api/map/#map">Map</a>'
    );
    expect(
        formatters.parameters(
            {
                params: [
                    {
                        title: 'param',
                        name: 'sourceId',
                        lineNumber: 5,

                        type: { type: 'NameExpression', name: 'string' }
                    },
                    {
                        title: 'param',
                        name: 'parameters',
                        lineNumber: 6,

                        type: {
                            type: 'OptionalType',
                            expression: {
                                type: 'NameExpression',
                                name: 'Object'
                            }
                        }
                    }
                ]
            },
            true
        )
    ).toEqual('(sourceId, parameters?)');
    expect(formatters.type({ type: 'NameExpression', name: 'number' })).toEqual(
        '<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>'
    );
    expect(
        formatters.markdown({
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'inlineCode',
                            value: 'MapWheelEvent',
                            position: {
                                start: { line: 1, column: 1, offset: 0 },
                                end: { line: 1, column: 16, offset: 15 },
                                indent: []
                            }
                        },
                        {
                            type: 'text',
                            value: ' is the event type for the ',
                            position: {
                                start: { line: 1, column: 16, offset: 15 },
                                end: { line: 1, column: 43, offset: 42 },
                                indent: []
                            }
                        },
                        {
                            type: 'inlineCode',
                            value: 'wheel',
                            position: {
                                start: { line: 1, column: 43, offset: 42 },
                                end: { line: 1, column: 50, offset: 49 },
                                indent: []
                            }
                        },
                        {
                            type: 'text',
                            value: ' map event.',
                            position: {
                                start: { line: 1, column: 50, offset: 49 },
                                end: { line: 1, column: 61, offset: 60 },
                                indent: []
                            }
                        }
                    ],
                    position: {
                        start: { line: 1, column: 1, offset: 0 },
                        end: { line: 1, column: 61, offset: 60 },
                        indent: []
                    }
                }
            ],
            position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 61, offset: 60 }
            }
        })
    )
        .toEqual(`<p><code>MapWheelEvent</code> is the event type for the <code>wheel</code> map event.</p>
`);
});
