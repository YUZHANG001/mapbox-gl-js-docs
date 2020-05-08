import React from 'react';
import PropTypes from 'prop-types';
import ApiItemMember from './item-member';
import SectionWrapper from './section-wrapper';

export default class MembersList extends React.Component {
    render() {
        const { title, members } = this.props;
        return (
            <SectionWrapper title={title} {...this.props}>
                {members.map((member, i) => (
                    <ApiItemMember {...this.props} key={i} {...member} />
                ))}
            </SectionWrapper>
        );
    }
}

MembersList.propTypes = {
    title: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired
};
