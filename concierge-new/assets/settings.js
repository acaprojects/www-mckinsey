/**
 * ROOT SETTIGNS
 */
var SETTINGS = {
    env: 'prod',
    debug: true,
    composer: {
        domain: '',
        route: '/concierge-new',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app: {},
    mock: false,
};
/**
 * ROOT APPLICATION SETTINGS
 */
SETTINGS.app = {
    title: 'McKinsey Concierge',
    description: 'McKinsey Concierge UI written with Angular Framework',
    short_name: 'CONCIERGE',
    logo_dark: {
        type: 'img',
        src: 'assets/img/logo.svg',
        background: '',
    },
    logo_light: {
        type: 'img',
        src: 'assets/img/logo-inverse.svg',
        background: '#0a0d2e',
    },
    general: {},
    booking: {},
    day_view: {},
    visitors: {},
    reports: {},
};
/**
 * GENERAL APPLICATION SETTINGS
 */
SETTINGS.app.general = {
    menu: {
        items: [
            {
                name: 'Day View',
                route: '/day-view',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'wb_sunny',
                },
            },
            {
                name: 'Week View',
                route: '/week-view',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'date_range',
                },
            },
            {
                name: 'Catering',
                route: '/catering',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'room_service',
                },
            },
            {
                name: 'Visitors',
                route: '/visitors',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'face',
                },
            },
            {
                name: 'Reports',
                route: '/reports',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'warning',
                },
            },
        ],
        copyright: 'ACA Projects',
    },
};
/*=========================*\
||  BOOKING FLOW SETTINGS  ||
\*=========================*/
SETTINGS.app.booking = {
    booking_types: [
        { name: 'Internal', id: 'internal' },
        { name: 'Client', id: 'client' },
        { name: 'External', id: 'external' },
        { name: 'Setup', id: 'setup' },
        { name: 'Training', id: 'training' },
        { name: 'Interview', id: 'interview' },
    ],
    show_fields: [
        'attendees',
        'body',
        'catering',
        'date',
        'duration',
        'organiser',
        'recurrence',
        'title',
        'type',
        'all_day',
        'has_catering',
    ],
    html_body: true,
    multiple_spaces: true,
    desk_start: 9,
};

/*=========================*\
||    DAY VIEW SETTINGS    ||
\*=========================*/
SETTINGS.app.day_view = {
    dragdrop: false,
};

/*=========================*\
||    VISITORS SETTINGS    ||
\*=========================*/
SETTINGS.app.visitors = {};

/*=========================*\
||    REPORTS SETTINGS     ||
\*=========================*/
SETTINGS.app.reports = {};

// Add settings to global space
window['settings.json'] = SETTINGS;
console.log('Embedded setting.json');
