$("#currentDay").text('Today is ' + dayjs().format('dddd MMMM Do YYYY'))
var currentTime = dayjs().unix()

var eightAMForm = $("8am-form-slot")
var nineAMForm = $("9am-form-slot")
var tenAMForm = $("10am-form-slot")
var elevenAMForm = $("11am-form-slot")
var twelvePMForm = $("12pm-form-slot")
var onePMForm = $("1pm-form-slot")
var twoPMForm = $("2pm-form-slot")
var threePMForm = $("3pm-form-slot")
var fourPMForm = $("4pm-form-slot")
var fivePMForm = $("5pm-form-slot") 

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