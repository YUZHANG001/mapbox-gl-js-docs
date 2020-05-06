import docs from '../components/api.json';

export default function apiItemFilter(pageName) {
    const filtered = docs.filter(doc => doc.name === pageName);
    return filtered;
}
