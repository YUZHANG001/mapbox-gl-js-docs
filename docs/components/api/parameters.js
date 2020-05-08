import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './section-wrapper';

export default class Parameters extends React.Component {
    render() {
        const { section, formatType, md } = this.props;
        return (
            <SectionWrapper title="Parameters" {...this.props}>
                {section.params.map((param, i) => (
                    <div key={i} className="mb6">
                        <React.Fragment>
                            <span className="txt-mono txt-bold">
                                {param.name}
                            </span>
                            <code className="color-gray">
                                ({formatType(param.type)})
                            </code>
                            {param.default && (
                                <span>
                                    {'('}
                                    default <code>{param.default}</code>
                                    {')'}
                                </span>
                            )}
                            {md(param.description, true)}
                        </React.Fragment>
                        {param.properties && (
                            <div className="mt6 mb12 scroll-auto">
                                <table className="fixed-table">
                                    <colgroup>
                                        <col width="30%" />
                                        <col width="70%" />
                                    </colgroup>
                                    <thead>
                                        <tr className="txt-bold bg-gray-faint">
                                            <td
                                                style={{
                                                    borderTopLeftRadius: '4px'
                                                }}
                                            >
                                                Name
                                            </td>
                                            <td
                                                style={{
                                                    borderTopRightRadius: '4px'
                                                }}
                                            >
                                                Description
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="mt6">
                                        {param.properties.map((property, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <span className="txt-mono txt-bold txt-break-word">
                                                        {property.name}
                                                    </span>
                                                    <br />
                                                    <code className="color-gray txt-break-word">
                                                        {formatType(
                                                            property.type
                                                        )}
                                                    </code>
                                                    <br />
                                                    {property.default && (
                                                        <span className="color-gray txt-break-word">
                                                            default{' '}
                                                            <code>
                                                                {
                                                                    property.default
                                                                }
                                                            </code>
                                                        </span>
                                                    )}
                                                </td>
                                                <td>
                                                    <span>
                                                        {md(
                                                            property.description,
                                                            true
                                                        )}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </SectionWrapper>
        );
    }
}

Parameters.propTypes = {
    section: PropTypes.shape({
        params: PropTypes.array.isRequired
    }).isRequired,
    formatType: PropTypes.func.isRequired,
    md: PropTypes.func.isRequired
};
