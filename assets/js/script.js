$("#currentDay").text('Today is ' + dayjs().format('dddd MMMM Do YYYY'))
var currentTime = dayjs().unix()

var todayEightAM = dayjs().set('hour', 8).set('minute', 0)
console.log(todayEightAM.format('HHmm'))

function handleFormColors() {
    if (isTimeSlotPassed()) {
        //color the block red
    }
}

function isTimeSlotPassed(timeSlot) {
    if (todayEightAM < parseInt(dayjs().get('hour'))) {
        return true
    }
}