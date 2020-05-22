import React from 'react';
import createFormatters from 'documentation/src/output/util/formatters';
import LinkerStack from 'documentation/src/output/util/linker_stack';
import GithubSlugger from 'github-slugger';
import docs from '../components/api.json';
import findPage from './find-page';

const linkerStack = new LinkerStack({}).namespaceResolver(docs, namespace => {
    const page = findPage(namespace);
    const path = page ? `/mapbox-gl-js/api/${page}/` : '';
    if (namespace.indexOf('.') > -1) {
        return `${path}#${namespace.toLowerCase()}`;
    } else {
        const slugger = new GithubSlugger();
        const names = namespace.split('#');
        const nv = names.map(v => `#${slugger.slug(v)}`).join('');
        return `${path}${nv}`;
    }
});

export const formatters = createFormatters(linkerStack.link);

// convert ast to html
export function toHtml(ast, inline) {
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
}

// format api type into html
export function formatType(type) {
    return (
        <span
            dangerouslySetInnerHTML={{ __html: `${formatters.type(type)}` }}
        />
    );
}
