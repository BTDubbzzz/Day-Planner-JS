$('#currentDay').text('Today is ' + dayjs().format('dddd MMMM Do YYYY'));
$('#currentTime').text(
	'The time is ' + dayjs().format('HH') + ':' + dayjs().format('ss')
);

var eightAMFormEl = {
	target: $('#eightam-form-slot'),
	time: 8,
	inputTarget: $('#eightam-input-area'),
};
var nineAMFormEL = {
	target: $('#nineam-form-slot'),
	time: 9,
	inputTarget: $('#nineam-input-area'),
};
var tenAMFormEL = {
	target: $('#tenam-form-slot'),
	time: 10,
	inputTarget: $('#tenam-input-area'),
};
var elevenAMFormEL = {
	target: $('#elevenam-form-slot'),
	time: 11,
	inputTarget: $('#elevenam-input-area'),
};
var twelvePMFormEL = {
	target: $('#twelvepm-form-slot'),
	time: 12,
	inputTarget: $('#twelvepm-input-area'),
};
var onePMFormEL = {
	target: $('#onepm-form-slot'),
	time: 13,
	inputTarget: $('#onepm-input-area'),
};
var twoPMFormEL = {
	target: $('#twopm-form-slot'),
	time: 14,
	inputTarget: $('#twopm-input-area'),
};
var threePMFormEL = {
	target: $('#threepm-form-slot'),
	time: 15,
	inputTarget: $('#threepm-input-area'),
};
var fourPMFormEL = {
	target: $('#fourpm-form-slot'),
	time: 16,
	inputTarget: $('#fourpm-input-area'),
};
var fivePMFormEL = {
	target: $('#fivepm-form-slot'),
	time: 17,
	inputTarget: $('#fivepm-input-area'),
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

function handleFormColors(elementChecked) {
	if (parseInt(dayjs().get('hour')) > parseInt(elementChecked.time)) {
		elementChecked.target.children('.re-color').addClass('bg-danger');
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

function saveFormText(currentElement) {
	var text = currentElement.inputTarget.val();
	console.log('text :>> ', text);
}

$('#eightam-button').click(function () {
	saveFormText(eightAMFormEl);
});
$('#nineam-button').click(function () {
	saveFormText(nineAMFormEL);
});
$('#tenam-button').click(function () {
	saveFormText(tenAMFormEL);
});
$('#elevenam-button').click(function () {
	saveFormText(elevenAMFormEL);
});
$('#twelvepm-button').click(function () {
	saveFormText(twelvePMFormEL);
});
$('#onepm-button').click(function () {
	saveFormText(onePMFormEL);
});
$('#twopm-button').click(function () {
	saveFormText(twoPMFormEL);
});
$('#threepm-button').click(function () {
	saveFormText(threePMFormEL);
});
$('#fourpm-button').click(function () {
	saveFormText(fourPMFormEL);
});
$('#fivepm-button').click(function () {
	saveFormText(fivePMFormEL);
});
