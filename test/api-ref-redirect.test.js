const test = require('tape');
const redirect = require('../docs/util/api-ref-redirect.js');

test(`api-ref-redirect`, t => {
    t.equal(
        redirect({
            hash: '#poptarts'
        }),
        undefined
    );

    t.equal(
        redirect({
            hash: '#map'
        }),
        '/mapbox-gl-js/api/map/#map'
    );
    t.equal(
        redirect({
            hash: '#map#scrollzoom'
        }),
        '/mapbox-gl-js/api/map/#map#scrollzoom'
    );

    t.equal(
        redirect({
            hash: '#map.event:mouseover'
        }),
        '/mapbox-gl-js/api/map/#map.event:mouseover'
    );

    t.equal(
        redirect({
            hash: '#lnglat'
        }),
        '/mapbox-gl-js/api/geography/#lnglat'
    );

    t.equal(
        redirect({
            hash: '#icontrol'
        }),
        '/mapbox-gl-js/api/markers/#icontrol'
    );

    t.equal(
        redirect({
            hash: '#icontrol#getdefaultposition'
        }),
        '/mapbox-gl-js/api/markers/#icontrol#getdefaultposition'
    );

    t.equal(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        }),
        '/mapbox-gl-js/api/handlers/#touchpitchhandler#isenabled'
    );

    t.equal(
        redirect({
            hash: '#canvassource#getcanvas'
        }),
        '/mapbox-gl-js/api/sources/#canvassource#getcanvas'
    );

    t.equal(
        redirect({
            hash: '#mapwheelevent'
        }),
        '/mapbox-gl-js/api/events/#mapwheelevent'
    );

    t.equal(
        redirect({
            hash: '#mapwheelevent#type'
        }),
        '/mapbox-gl-js/api/events/#mapwheelevent#type'
    );

    t.equal(
        redirect({
            hash: '#clearprewarmedresources'
        }),
        '/mapbox-gl-js/api/properties/#clearprewarmedresources'
    );

    t.end();
});
