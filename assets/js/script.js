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

function renderFormText() {
	var eightAMRender = JSON.parse(localStorage.getItem('eightAM'));
	$('#eightam-input-area').val(eightAMRender);
	var nineAMRender = JSON.parse(localStorage.getItem('nineAM'));
	$('#nineam-input-area').val(nineAMRender);
	var tenAMRender = JSON.parse(localStorage.getItem('tenAM'));
	$('#tenam-input-area').val(tenAMRender);
	var elevenAMRender = JSON.parse(localStorage.getItem('elevenAM'));
	$('#elevenam-input-area').val(elevenAMRender);
	var twelvePMRender = JSON.parse(localStorage.getItem('twelvePM'));
	$('#twelvepm-input-area').val(twelvePMRender);
	var onePMRender = JSON.parse(localStorage.getItem('onePM'));
	$('#onepm-input-area').val(onePMRender);
	var twoPMRender = JSON.parse(localStorage.getItem('twoPM'));
	$('#twopm-input-area').val(twoPMRender);
	var threePMRender = JSON.parse(localStorage.getItem('threePM'));
	$('#threepm-input-area').val(threePMRender);
	var fourPMRender = JSON.parse(localStorage.getItem('fourPM'));
	$('#fourpm-input-area').val(fourPMRender);
	var fivePMRender = JSON.parse(localStorage.getItem('fivePM'));
	$('#fivepm-input-area').val(fivePMRender);
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
	return text;
}

$('#eightam-button').click(function () {
	var eightAMValue = saveFormText(eightAMFormEl);
	if (eightAMValue) {
		localStorage.setItem('eightAM', JSON.stringify(eightAMValue));
	}
});
$('#nineam-button').click(function () {
	var nineAMValue = saveFormText(nineAMFormEL);
	if (nineAMValue) {
		localStorage.setItem('nineAM', JSON.stringify(nineAMValue));
	}
});
$('#tenam-button').click(function () {
	var tenAMValue = saveFormText(tenAMFormEL);
	if (tenAMValue) {
		localStorage.setItem('tenAM', JSON.stringify(tenAMValue));
	}
});
$('#elevenam-button').click(function () {
	var elevenAMValue = saveFormText(elevenAMFormEL);
	if (elevenAMValue) {
		localStorage.setItem('elevenAM', JSON.stringify(elevenAMValue));
	}
});
$('#twelvepm-button').click(function () {
	var twelvePMValue = saveFormText(twelvePMFormEL);
	if (twelvePMValue) {
		localStorage.setItem('twelvePM', JSON.stringify(twelvePMValue));
	}
});
$('#onepm-button').click(function () {
	var onePMValue = saveFormText(onePMFormEL);
	if (onePMValue) {
		localStorage.setItem('onePM', JSON.stringify(onePMValue));
	}
});
$('#twopm-button').click(function () {
	var twoPMValue = saveFormText(twoPMFormEL);
	if (twoPMValue) {
		localStorage.setItem('twoPM', JSON.stringify(twoPMValue));
	}
});
$('#threepm-button').click(function () {
	var threePMValue = saveFormText(threePMFormEL);
	if (threePMValue) {
		localStorage.setItem('threePM', JSON.stringify(threePMValue));
	}
});
$('#fourpm-button').click(function () {
	var fourPMValue = saveFormText(fourPMFormEL);
	if (fourPMValue) {
		localStorage.setItem('fourPM', JSON.stringify(fourPMValue));
	}
});
$('#fivepm-button').click(function () {
	var fivePMValue = saveFormText(fivePMFormEL);
	if (fivePMValue) {
		localStorage.setItem('fivePM', JSON.stringify(fivePMValue));
	}
});

renderFormText();
$('#reset-button').click(function () {
	localStorage.clear();
});
