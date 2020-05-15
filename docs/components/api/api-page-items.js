import React from 'react';
import PropTypes from 'prop-types';
import ApiItem from './item';
import ApiItemContents from './item-contents';
import SectionWrapper from './section-wrapper';
import Github from './github';
import Feedback from '../feedback';
import ApiPageDescription from './api-page-description';

const apiFilterItems = require('../../util/api-filter-items.js');

export default class ApiPageItems extends React.Component {
    pageDocSource = apiFilterItems(this.props.pageTitle);
    children = this.pageDocSource[0].members.static;
    renderDescription = () => {
        const description = this.pageDocSource[0].description || false;
        if (description)
            return <ApiPageDescription pageDescription={description} />;
    };

    render() {
        // There are 3 layouts based on the content:
        // 1. `SingleSection` (for Maps page)
        // 2. `GroupedSection` (for Properties and options page)
        // 3. `Section` (for all other pages)

        if (this.children.length === 1) {
            return (
                <React.Fragment>
                    {this.renderDescription()}
                    <SingleSection
                        key={this.children[0].name}
                        {...this.children[0]}
                        {...this.props}
                    />
                </React.Fragment>
            );
        }
        return this.children.map(child => {
            if (child.kind === 'note') {
                return (
                    <React.Fragment key={child.name}>
                        {this.renderDescription()}
                        <GroupedSection
                            key={child.name}
                            location={this.props.location}
                            members={child.members}
                            name={child.name}
                        />
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment key={child.name}>
                        {this.renderDescription()}
                        <Section key={child.name} {...this.props} {...child} />
                    </React.Fragment>
                );
            }
        });
    }
}

ApiPageItems.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
};

class Section extends React.Component {
    render() {
        const child = this.props;
        return (
            <React.Fragment>
                <div className="mb18">
                    <ApiItem headingLevel={2} {...child} />
                </div>
                <Feedback
                    type={`section on ${child.name}`}
                    location={this.props.location}
                />
            </React.Fragment>
        );
    }
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
};

class GroupedSection extends React.Component {
    render() {
        return (
            <SectionWrapper
                groupedSection={true} // this prop style the `Title` for each section differently
                headingLevel={2}
                title={this.props.name}
            >
                {this.props.members.static.map(item => {
                    return (
                        <ApiItem headingLevel={3} key={item.name} {...item} />
                    );
                })}
                <div className="mb18">
                    <Feedback
                        type={`section on ${this.props.name}`}
                        location={this.props.location}
                    />
                </div>
            </SectionWrapper>
        );
    }
}
GroupedSection.propTypes = {
    name: PropTypes.string.isRequired,
    members: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

class SingleSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-neg30">
                    <Github section={this.props} />
                </div>
                <div className="mb18">
                    <ApiItemContents
                        key={this.props.name}
                        {...this.props}
                        headingLevel={2}
                    />
                </div>
                <Feedback location={this.props.location} />
            </React.Fragment>
        );
    }
}
SingleSection.propTypes = {
    name: PropTypes.string,
    location: PropTypes.object.isRequired
};
