import React from 'react';
import PropTypes from 'prop-types';
import MembersList from './members-list';
import SectionHeading from './section-heading';
import Augments from './augments';
import ClassName from './class-name';
import Parameters from './parameters';
import Properties from './properties';
import Returns from './returns';
import Throws from './throws';
import Examples from './examples';
import Related from './related';
import formatters from '../../util/formatters';
import empty from '../../util/empty';

class ApiItem extends React.Component {
    md = (ast, inline) => {
        if (
            inline &&
            ast &&
            ast.children.length &&
            ast.children[0].type === 'paragraph'
        ) {
            ast = {
                type: 'root',
                children: ast.children[0].children.concat(ast.children.slice(1))
            };
        }
        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: `${formatters.markdown(ast)}`
                }}
            />
        );
    };
    formatType = type => (
        <span
            dangerouslySetInnerHTML={{ __html: `${formatters.type(type)}` }}
        />
    );

    render() {
        const section = this.props;

        const membersList = (members, title) =>
            !empty(members) && (
                <MembersList
                    section={section}
                    title={title}
                    members={members}
                />
            );

        return (
            <section className="prose mb24">
                {!this.props.nested && <SectionHeading section={section} />}

                {this.md(section.description)}

                {!empty(section.augments) && (
                    <Augments formatters={formatters} section={section} />
                )}

                {section.kind === 'class' &&
                    !section.interface &&
                    (!section.constructorComment ||
                        section.constructorComment.access !== 'private') && (
                        <ClassName formatters={formatters} section={section} />
                    )}

                {!empty(section.params) &&
                    (section.kind !== 'class' ||
                        !section.constructorComment ||
                        section.constructorComment.access !== 'private') && (
                        <Parameters
                            formatType={this.formatType}
                            md={this.md}
                            section={section}
                        />
                    )}

                {!empty(section.properties) && (
                    <Properties
                        formatType={this.formatType}
                        md={this.md}
                        section={section}
                    />
                )}

                {section.returns && (
                    <Returns
                        formatType={this.formatType}
                        md={this.md}
                        section={section}
                    />
                )}

                {!empty(section.throws) && (
                    <Throws
                        formatType={this.formatType}
                        md={this.md}
                        section={section}
                    />
                )}

                {!empty(section.examples) && (
                    <Examples md={this.md} section={section} />
                )}

                {membersList(section.members.static, 'Static Members')}
                {membersList(section.members.instance, 'Instance Members')}
                {membersList(section.members.events, 'Events')}

                {!empty(section.sees) && (
                    <Related md={this.md} section={section} />
                )}
            </section>
        );
    }
}

ApiItem.propTypes = {
    nested: PropTypes.bool,
    augments: PropTypes.array,
    kind: PropTypes.string,
    constructorComment: PropTypes.shape({
        access: PropTypes.string
    }),
    description: PropTypes.object,
    interface: PropTypes.string,
    params: PropTypes.array,
    properties: PropTypes.array,
    returns: PropTypes.array,
    throws: PropTypes.array,
    examples: PropTypes.array,
    members: PropTypes.object,
    sees: PropTypes.array
};

export default ApiItem;
