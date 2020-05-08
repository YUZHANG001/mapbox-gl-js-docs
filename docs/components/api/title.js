import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slugg';
import classnames from 'classnames';

export default class Title extends React.Component {
    render() {
        const { children, section, headingLevel, groupedSection } = this.props;
        const id = slug(`${section ? section.name : ''} ${children}`);
        const HeadingLevel = `h${headingLevel}`;
        const style = {
            lineHeight: '24px',
            fontSize: groupedSection ? 18 : 15,
            letterSpacing: groupedSection ? '0.05em' : undefined
        };

        return (
            <HeadingLevel
                id={id}
                className={classnames(
                    'py6 mt12 txt-m my0 no-h2-border scroll-margin-top',
                    {
                        'txt-uppercase border-b border--gray-light color-gray': groupedSection
                    }
                )}
                style={style}
            >
                <a
                    className={classnames('unprose block color-blue-on-hover', {
                        'txt-bold': !groupedSection
                    })}
                    href={`#${id}`}
                >
                    {children}
                </a>
            </HeadingLevel>
        );
    }
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    section: PropTypes.shape({
        name: PropTypes.string
    }),
    headingLevel: PropTypes.number,
    groupedSection: PropTypes.bool // grouped section is for pages like "Properties and options" to make the section headings large
};
