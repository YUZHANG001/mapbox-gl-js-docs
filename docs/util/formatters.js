import createFormatters from 'documentation/src/output/util/formatters';
import LinkerStack from 'documentation/src/output/util/linker_stack';
import GithubSlugger from 'github-slugger';
import docs from '../components/api.json';
import findPage from './find-page';

const linkerStack = new LinkerStack({}).namespaceResolver(docs, namespace => {
    const page = findPage(namespace);
    const path = page ? `/mapbox-gl-js/api/${page}/` : '';
    if (namespace.indexOf('Map.') > -1) {
        return `${path}#${namespace.toLowerCase()}`;
    } else {
        const slugger = new GithubSlugger();
        const names = namespace.split('#');
        const nv = names.map(v => `#${slugger.slug(v)}`).join('');
        return `${path}${nv}`;
    }
});

export default createFormatters(linkerStack.link);
