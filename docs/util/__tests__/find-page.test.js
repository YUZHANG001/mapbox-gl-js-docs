import findPage from '../find-page';

it('findPage', () => {
    expect(findPage('Map#addLayer')).toBe('map');
});

it('findPage', () => {
    expect(findPage('Map.event:webglcontextlost')).toBe('map');
});

it('findPage', () => {
    expect(findPage('CustomLayerInterface')).toBe('properties');
});

it('findPage', () => {
    expect(findPage('StyleImageInterface#render')).toBe('properties');
});

it('findPage', () => {
    expect(findPage('PointLike')).toBe('geography');
});
