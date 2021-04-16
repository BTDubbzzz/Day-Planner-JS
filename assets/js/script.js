$('#currentDay').text('Today is ' + dayjs().format('dddd MMMM Do YYYY'));
$('#currentTime').text(
	'The time is ' + dayjs().format('HH') + ':' + dayjs().format('ss')
);

var eightAMFormEl = {
	target: $('#eightam-form-slot'),
	time: 8,
};
var nineAMFormEL = {
	target: $('#nineam-form-slot'),
	time: 9,
};
var tenAMFormEL = {
	target: $('#tenam-form-slot'),
	time: 10,
};
var elevenAMFormEL = {
	target: $('#elevenam-form-slot'),
	time: 11,
};
var twelvePMFormEL = {
	target: $('#twelvepm-form-slot'),
	time: 12,
};
var onePMFormEL = {
	target: $('#onepm-form-slot'),
	time: 13,
};
var twoPMFormEL = {
	target: $('#twopm-form-slot'),
	time: 14,
};
var threePMFormEL = {
	target: $('#threepm-form-slot'),
	time: 15,
};
var fourPMFormEL = {
	target: $('#fourpm-form-slot'),
	time: 16,
};
var fivePMFormEL = {
	target: $('#fivepm-form-slot'),
	time: 17,
};

var timeSlots = [
	eightAMFormEl,
	nineAMFormEL,
	tenAMFormEL,
	elevenAMFormEL,
	twelvePMFormEL,
	onePMFormEL,
	twoPMFormEL,
	threePMFormEL,
	fourPMFormEL,
	fivePMFormEL,
];

var todayEightAM = dayjs().set('hour', 8).set('minute', 0);

function handleFormColors(elementChecked) {
	console.log(
		'parseInt(dayjs().get("hour")) :>> ',
		parseInt(dayjs().get('hour'))
	);
	console.log(
		'parseInt(elementChecked.time) :>> ',
		parseInt(elementChecked.time)
	);
	if (parseInt(dayjs().get('hour')) > parseInt(elementChecked.time)) {
		elementChecked.target.children('.re-color').addClass('bg-danger');
	} else if (parseInt(dayjs().get('hour')) === parseInt(elementChecked.time)) {
		elementChecked.target.children('.re-color').addClass('bg-secondary');
	} else if (parseInt(dayjs().get('hour')) < parseInt(elementChecked.time)) {
		elementChecked.target.children('.re-color').addClass('bg-success');
	}
}

function renderFormColors() {
	for (let i = 0; i < timeSlots.length; i++) {
		handleFormColors(timeSlots[i]);
	}
}
renderFormColors();
