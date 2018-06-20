
## Bindings
These *Settings* can be set at the System level, or at the Driver level:

| Name        | Description   | Type  | Example |
| ----------- | ------------- | ----- | ------- |
| touch_enabled | Enables inputs on the UI | Boolean | `true` |
| timeout | Enables start/stop and auto-cancellations. Value specifies the seconds with which the event is cancelled  | Number | `900` |
| arrow_direction | Displays an arrow with the given direction | String | `"left"` or `"right"` |
| hearing_assistance | Enables assistive technologies | Boolean | `true` |
| booking_controls | Enables access to the control UI for the associated room | Boolean | `false` |
| booking_catering | Enables the catering interface | Boolean | `true`|
| booking_hide_details | Hides the booking details displayed on the UI | Boolean |  `false` |
| booking_hide_availability | Hides the events displayed on the timeline | Boolean | `true` |
| booking_hide_user | Hides the user details for the displayed booking | Boolean | `true` |
| booking_hide_modal | Prevents user from making bookings using the UI | Boolean | `false` |
| booking_hide_title | Hides the title of the displayed booking | Boolean | `true` |
| booking_hide_description | Hides the description of the the displayed booking | Boolean | `false` |
| booking_set_host | Shows the host field on the booking modal | Boolean | `true` |
| booking_set_title | Shows the meeting name field on the booking modal | Boolean | `true` |
| booking_set_ext | Shows the host phone extension field on the booking modal | Boolean | `false` |
| booking_search_user | Enables the user search modal for selecting the booking host | Boolean | `true` |
| booking_disable_future | Disables bookings from timeline and the time picker on the booking modal | Boolean | `false` |
| booking_min_duration | Sets the min duration and the default size of the steps on the slider. Defaults to `15` minutes | Number | `30` |
| booking_max_duration | Sets the max duration of a booking in minutes. Defaults to `240` minutes | Number | `60` |
| booking_duration_step | Sets the step of the duration slide for the booking in minutes. Defaults to booking_min_duration | Number | `20` |
| booking_endable | If true the users will be able to end bookings early when timeout is set | Boolean | `false` |
| booking_default_title | Default meeting title if the user has not set one | String | `"Awesome Meeting"` |
| booking_select_free | Changes the time picker modal to only allow the user to select free blocks of time | Boolean | `false` |
| booking_hide_all | Hides all useful details displayed on the UI | Boolean | `false` |
| timeline_start | Sets the start hour of the timeline. Defaults to `6.5`(6:30 am) | Number | `2` |
| timeline_end | Sets the end hour of the timeline. Defaults to `19.5`(7:30 pm) | Number | `22` |
| title | Value is display as an extra name for the room | String | `"Awesome Room"` |
| description | Value is displayed as a description of the title field | String | `"Cause reasons"` |
| icon | URL to a image to display to the right of the description | String | `"i/nyan-cat.gif"` |