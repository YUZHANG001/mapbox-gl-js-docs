// the `pages` object maps hashes with their new pages
// keys = new page name
// values = array of hashes that belong to that page
import findPage from './find-page';

export default function redirect(location) {
    const preparedHash = location.hash ? location.hash.replace('#', '') : ''; // remove the first # sign
    const page = preparedHash ? findPage(preparedHash) : undefined;
    // if page path isn't defined, do nothing
    if (!page) return;
    return `/mapbox-gl-js/api/${page}/${location.hash || ''}`;
}
