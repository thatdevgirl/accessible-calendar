# Accessible Calendar

This repo contains code for a HTML and CSS only accessible calendar.

## The HTML

The calendar is contained in a table, since a calendar is basically a data table of dates and events.

It would be really easy to recreate this table with loops in PHP or Javascript if you would like. A couple of notes:

* Table cells that are holding spaces in the large-screen calendar that have no dates have the `empty` class on the `<td>`.
* Table cells for dates with no events also have the `empty` class on the `<td>`.

## The CSS

The CSS in this repo is all in SCSS. The bulk of what you want has been localized in a component SCSS file called `/source/scss/component/_calendar.scss`.

The calendar displays as a typical wall calendar for large screens. It displays as a list of dates and events for small screens. (Also for small screens, dates with no events are hidden.)

All of the SCSS files in `/source/base` are either reset styles, SCSS variables, or miscellaneous styles to set up the page.
