import React from 'react';
import PropTypes from 'prop-types';
import ApiItemMember from './item-member';
import Title from './title';

export default class MembersList extends React.Component {
    render() {
        const { section, title, members } = this.props;
        return (
            <React.Fragment>
                <Title section={section}>{title}</Title>
                <div className="mb18">
                    {members.map((member, i) => (
                        <ApiItemMember {...this.props} key={i} {...member} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

MembersList.propTypes = {
    title: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired
};
