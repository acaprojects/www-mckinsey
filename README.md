Base www directory which can be forked for new clients. Generally placed in /home/aca-apps/www on prod and uat web servers and contains minified final production builds of:
- backoffice/
- meeting/
- bookings/
- staff/
and any other client-branded/custom frontends for this particular client

When pushing, please ensure that any environment related settings (e.g. staff/assets/settings.json) match the actual production setting that is required. UAT settings can go into a `uat` branch