import React from 'react';
import PropTypes from 'prop-types';
import apiFilterItems from '../../util/api-filter-items.js';
import ApiItem from './item';
import Title from './title';

export default class ApiPageItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const GroupedSection = child => (
            <div>
                <Title heading={2}>{child.name}</Title>
                {child.members.static.map(item => {
                    return (
                        <ApiItem
                            location={this.props.location}
                            key={item.name}
                            {...item}
                        />
                    );
                })}
            </div>
        );

        const pageDocSource = apiFilterItems(this.props.pageTitle);
        const children = pageDocSource[0].members.static;

        return (
            <section
                key={pageDocSource.name}
                className="mb24 prose api-section"
            >
                {children.map(child => {
                    if (child.kind === 'note') {
                        return <GroupedSection key={child.name} {...child} />;
                    } else {
                        return (
                            <ApiItem
                                location={this.props.location}
                                key={child.name}
                                {...child}
                            />
                        );
                    }
                })}
            </section>
        );
    }
}

ApiPageItems.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
};
