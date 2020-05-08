import React from 'react';
import PropTypes from 'prop-types';
import formatters from '../../util/formatters';
import ApiItem from './item';
import Icon from '@mapbox/mr-ui/icon';

class ApiItemMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disclosed: false };
        this.hashChange = this.hashChange.bind(this);
    }

    href = m => `#${m.namespace.toLowerCase()}`;

    render() {
        const member = this.props;
        return (
            <div
                className="border-b border--gray-light scroll-margin-top"
                id={member.namespace.toLowerCase()}
            >
                <React.Fragment>
                    <button
                        className="cursor-pointer toggle-sibling color-blue-on-hover w-full py18"
                        onClick={e => {
                            this.setState({ disclosed: !this.state.disclosed });
                            if (history.pushState) {
                                history.pushState(
                                    null,
                                    null,
                                    this.href(member)
                                );
                            } else {
                                location.hash = this.href(member);
                            }

                            e.preventDefault();
                        }}
                    >
                        <span className="txt-code truncate bg-white">
                            {member.name}
                        </span>
                        {member.kind === 'function' && (
                            <span
                                className="color-gray txt-code mr12"
                                dangerouslySetInnerHTML={{
                                    __html: `${formatters.parameters(
                                        member,
                                        true
                                    )}`
                                }}
                            />
                        )}
                        <div className="fr">
                            <Icon
                                size={30}
                                name={`${
                                    this.state.disclosed
                                        ? 'caret-down'
                                        : 'caret-right'
                                }`}
                                inline={true}
                            />
                        </div>
                    </button>
                </React.Fragment>

                {this.state.disclosed && (
                    <div className="toggle-target bg-gray-faint round py18 px18 mb12">
                        <ApiItem
                            nested={true}
                            location={this.props.location}
                            {...member}
                        />
                    </div>
                )}
            </div>
        );
    }

    hashChange() {
        if (window.location.hash === this.href(this.props)) {
            this.setState({ disclosed: true });
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.hashChange);
        this.hashChange();
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.hashChange);
    }
}

ApiItemMember.propTypes = {
    namespace: PropTypes.string,
    name: PropTypes.string,
    kind: PropTypes.string,
    location: PropTypes.object
};

export default ApiItemMember;
