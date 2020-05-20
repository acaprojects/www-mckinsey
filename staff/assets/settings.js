/**
 * ROOT SETTIGNS
 */
var settings = {
    env: 'staging',
    debug: true,
    composer: {
        domain: '',
        route: '/staff',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false
    },
    app: {},
    mock: false
};
/**
 * ROOT APPLICATION SETTINGS
 */
settings.app = {
    title: 'McKinsey & Company',
    description: 'McKinsey & Company Staff UI written with Angular Framework',
    short_name: 'STAFF',
    logo_light: {
        type: 'img',
        src: 'assets/img/logo.svg',
        background: ''
    },
    logo_dark: {
        type: 'img',
        src: 'assets/img/logo-inverse.svg',
        background: ''
    },
    heap_io: {
        app_id: 3540602199,
        force_ssl: true,
        secure_cookie: true,
        disable_text_capture: true,
        cookie_path: '/staff/'
    },
    general: {},
    home: {},
    help: {},
    booking: {},
    space_display: {},
    directory: {},
    explore: {}
};
/**
 * GENERAL APPLICATION SETTINGS
 */
settings.app.general = {
    menu: {
        items: [],
        copyright: 'McKinsey & Company',
        position: 'left'
    }
};
/**
 * HOME PAGE SETTINGS
 */
settings.app.home = {
    background: 'assets/img/skyline.jpg',
    tiles: [
        {
            name: 'Book',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'custom-book'
            }
        },
        {
            name: 'Maps',
            route: '/explore/space',
            icon: {
                type: 'icon',
                class: 'custom-spaces'
            }
        },
        {
            name: 'My Day',
            route: '/schedule',
            icon: {
                type: 'icon',
                class: 'custom-schedule'
            }
        }
    ]
};
/**
 * HELP/SUPPORT SETTINGS
 */
settings.app.help = {
    tiles: [],
    columns: 2
};
/**
 * BOOKING FLOW SETTINGS
 */
settings.app.booking = {
    booking_types: [
        { name: 'Internal', id: 'internal' },
        { name: 'Client', id: 'client' },
        { name: 'External', id: 'external' },
        { name: 'Setup', id: 'setup' },
        { name: 'Training', id: 'training' },
        { name: 'Interview', id: 'interview' }
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
        'needs_space',
        'has_catering'
    ],
    html_body: true,
    multiple_spaces: true,
    desk_start: 9
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
settings.app.space_display = {
    show_images: false
};
/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/
settings.app.directory = {
    show_avatars: true,
    min_search_length: 3
};
/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/
settings.app.explore = {
    colors: {
        'space-available': '#43a047',
        'space-requestable': '#ffb300',
        'space-unavailable': '#e53935',
        'space-not-bookable': '#ccc',
        'desk-available': '#43a047',
        'desk-available-stroke': '#1b5e20',
        'desk-unavailable': '#e53935',
        'desk-unavailable-stroke': '#b71c1c',
        'desk-reserved': '#ffb300',
        'desk-reserved-stroke': '#ff6f00',
        'desk-not-bookable': '#fff',
        'desk-not-bookable-stroke': '#ccc',
        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935'
    },
    can_select_building: true,
    show_legend_group_names: false,
    show_timeline: true,
    legend: {
        General: [
            { key: 'space-available', name: 'Available' },
            { key: 'space-requestable', name: 'Available by request' },
            { key: 'space-unavailable', name: 'In use' },
            { key: 'space-not-bookable', name: 'Not Bookable' }
        ]
    }
};
// Add settings to global space
window['settings.json'] = settings;
console.log('Embedded setting.json');
