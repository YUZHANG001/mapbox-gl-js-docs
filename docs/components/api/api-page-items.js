import React from 'react';
import PropTypes from 'prop-types';
import apiFilterItems from '../../util/api-filter-items.js';
import ApiItem from './item';
import ApiItemContents from './item-contents';
import SectionWrapper from './section-wrapper';
import Github from './github';

export default class ApiPageItems extends React.Component {
    render() {
        const pageDocSource = apiFilterItems(this.props.pageTitle);
        const children = pageDocSource[0].members.static;

        // There are 3 layouts based on the content:
        // 1. `SingleSection` (for Maps page)
        // 2. `GroupedSection` (for Properties and options page)
        // 3. loop through children with `ApiItem` (for all other pages)

        if (children.length === 1) {
            return <SingleSection key={children[0].name} {...children[0]} />;
        }
        return children.map(child => {
            if (child.kind === 'note') {
                return <GroupedSection key={child.name} {...child} />;
            } else {
                return <ApiItem headingLevel={2} key={child.name} {...child} />;
            }
        });
    }
}

ApiPageItems.propTypes = {
    pageTitle: PropTypes.string.isRequired
};

class GroupedSection extends React.Component {
    render() {
        return (
            <SectionWrapper
                groupedSection={true} // this prop style the `Title` for each section differently
                headingLevel={2}
                title={this.props.name}
                section={this.props}
            >
                {this.props.members.static.map(item => {
                    return (
                        <ApiItem headingLevel={3} key={item.name} {...item} />
                    );
                })}
            </SectionWrapper>
        );
    }
}
GroupedSection.propTypes = {
    name: PropTypes.string,
    members: PropTypes.object
};

class SingleSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-neg30">
                    <Github section={this.props} />
                </div>
                <ApiItemContents
                    key={this.props.name}
                    {...this.props}
                    headingLevel={2}
                />
            </React.Fragment>
        );
    }
}
SingleSection.propTypes = {
    name: PropTypes.string
};
