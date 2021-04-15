# Homework 5 - Work Schedule

​

## Tasks

​

1. Setup Variables
   - JQuery select DOM elements
1. Display Current Date in header
   - Get current date
   - Format current date
   - Update DOM with current date
1. Render timeblocks
   - Read from localstorage
   - Create input field
   - Create "SAVE" button
   - Add CSS classes for style
     - Determine if timeblock is `past`, `present`, or `future`
   - Add `value` from localstorage into input
   - Append to DOM
1. Event Handler for "SAVE"
   - When a user enters text into a field
   - then user clicks **matching** "SAVE" button
     - Save the related input field into localstorage
       - if field is empty, remove from localstorage
   - display notification/toast when the save is complete
     ​

```js
  var schedule = {
    9: 'class beings'
    10: ''
    11: ''
    12: 'lunch'
    13: ''
    14: 'class ends'
    15: 'weed+feed'
    16: ''
    17: 'dinner?'
  }
​
  localStorage.setItem('schedule', JSON.stringify(schedule))
```
