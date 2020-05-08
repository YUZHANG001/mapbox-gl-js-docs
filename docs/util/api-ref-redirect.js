// the `pages` object maps hashes with their new pages
// keys = new page name
// values = array of hashes that belong to that page
const pages = {
    map: ['#map'],
    events: [
        '#evented',
        '#mapmouseevent',
        '#maptouchevent',
        '#mapboxzoomevent',
        '#mapdataevent',
        '#mapwheelevent'
    ],
    geography: [
        '#lnglat',
        '#lnglatlike',
        '#lnglatbounds',
        '#lnglatboundslike',
        '#point',
        '#pointlike',
        '#mercatorcoordinate',
        '#edgeinsets'
    ],
    handlers: [
        '#boxzoomhandler',
        '#scrollzoomhandler',
        '#dragpanhandler',
        '#dragrotatehandler',
        '#keyboardhandler',
        '#doubleclickzoomhandler',
        '#touchzoomrotatehandler',
        '#touchpitchhandler'
    ],
    markers: [
        '#icontrol',
        '#navigationcontrol',
        '#geolocatecontrol',
        '#attributioncontrol',
        '#scalecontrol',
        '#fullscreencontrol',
        '#popup',
        '#marker'
    ],
    properties: [
        '#accesstoken',
        '#baseapiurl',
        '#workercount',
        '#maxparallelimagerequests',
        '#supported',
        '#version',
        '#setrtltextplugin',
        '#getrtltextpluginstatus',
        '#clearstorage',
        '#animationoptions',
        '#cameraoptions',
        '#paddingoptions',
        '#requestparameters',
        '#styleimageinterface',
        '#customlayerinterface',
        '#prewarm',
        '#clearprewarmedresources'
    ],
    sources: [
        '#geojsonsource',
        '#videosource',
        '#imagesource',
        '#canvassource',
        '#canvassourceoptions'
    ]
};

function redirect(location) {
    const page = findPage(location) || undefined;
    // if page path isn't defined, do nothing
    if (!page) return;
    return `/mapbox-gl-js/api/${page}/${location.hash || ''}`;
}

function findPage(location) {
    let pagePath = '';
    Object.keys(pages).forEach(page => {
        const options = pages[page];
        options.forEach(option => {
            if (
                location.hash === option ||
                location.hash.indexOf(option) !== -1
            )
                pagePath = page;
        });
    });
    return pagePath;
}

module.exports = redirect;
