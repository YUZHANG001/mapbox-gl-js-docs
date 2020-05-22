import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Fuse from 'fuse.js';
import apiSearch from '@mapbox/batfish/data/api-search'; // eslint-disable-line
import classnames from 'classnames';

export default class ApiSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: '' };
    }

    filterMembers = value => {
        this.setState({ filter: value });
    };

    render() {
        const fuse = new Fuse(apiSearch, {
            keys: ['name', 'description', 'namespace'], // keys to perform search on
            threshold: 0.3 // slightly stricter
        });
        const results = fuse.search(this.state.filter)
            ? fuse.search(this.state.filter).map(result => result.item)
            : [];
        return (
            <Downshift
                id="api-reference-search"
                inputValue={this.state.filter}
                onChange={selection => {
                    // track click
                    if (window && window.analytics) {
                        analytics.track('Searched GL JS API Reference', {
                            query: this.state.filter,
                            clicked: selection.path
                        });
                    }
                    // open selection in current window
                    window.open(selection.path, '_self');
                }}
                onInputValueChange={this.filterMembers}
                itemToString={() => this.state.filter}
            >
                {downshiftProps => {
                    const {
                        getInputProps,
                        isOpen,
                        getItemProps,
                        openMenu,
                        getLabelProps
                    } = downshiftProps;

                    return (
                        <div className="px24 none block-mm mb6">
                            <div className="relative">
                                <label
                                    className="hide-visually"
                                    {...getLabelProps()}
                                >
                                    Search API Reference
                                </label>
                                <input
                                    placeholder="Search API Reference"
                                    className="input bg-white"
                                    {...getInputProps({
                                        onFocus: () => {
                                            openMenu();
                                        }
                                    })}
                                />
                                {isOpen && this.state.filter && (
                                    <div className="color-text shadow-darken25 round mt3 bg-white scroll-auto scroll-styled hmax240 absolute z4 w-full align-l py3">
                                        {results.length > 0 ? (
                                            <ul>
                                                {results.map(
                                                    (result, index) => (
                                                        <Result
                                                            getItemProps={
                                                                getItemProps
                                                            }
                                                            index={index}
                                                            result={result}
                                                            key={index}
                                                            downshiftProps={
                                                                downshiftProps
                                                            }
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <div className="px12">
                                                No results
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                }}
            </Downshift>
        );
    }
}

class Result extends React.Component {
    render() {
        return (
            <div
                {...this.props.getItemProps({
                    key: this.props.index,
                    item: this.props.result,
                    className: classnames(
                        'py3 px12 link--gray cursor-pointer',
                        {
                            'bg-gray-faint txt-bold':
                                this.props.downshiftProps.highlightedIndex ===
                                this.props.index
                        }
                    )
                })}
            >
                {this.props.result.namespace}
            </div>
        );
    }
}

Result.propTypes = {
    getItemProps: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    result: PropTypes.object.isRequired,
    downshiftProps: PropTypes.shape({
        highlightedIndex: PropTypes.number
    })
};
