// slider function - changes the pageviews and the price
const pageviewsNum = document.querySelector('#pageviews-num');
const priceNum = document.querySelector('#price-num');
const range = document.querySelector('input[type=range]');

let isHolding = false;

function handleRange(e) {
	if (!isHolding) return;

	const value = range.value;
	if (value <= 20) {
		pageviewsNum.textContent = '10K';
		priceNum.textContent = '$8.00';
	} else if (value <= 40) {
		pageviewsNum.textContent = '50K';
		priceNum.textContent = '$12.00';
	} else if (value <= 60) {
		pageviewsNum.textContent = '100K';
		priceNum.textContent = '$16.00';
	} else if (value <= 80) {
		pageviewsNum.textContent = '500K';
		priceNum.textContent = '$24.00';
	} else if (value <= 100) {
		pageviewsNum.textContent = '1M';
		priceNum.textContent = '$36.00';
	}
	if (checkbox.classList.contains('checked')) applyDiscount();
}

// for desktop ver.
range.addEventListener('mousemove', handleRange);
range.addEventListener('mousedown', () => (isHolding = true));
range.addEventListener('mouseup', () => (isHolding = false));
range.addEventListener('mouseout', () => (isHolding = false));

// toggle switch function
const checkbox = document.querySelector('input[type=checkbox]');

function toggleCheck() {
	checkbox.classList.toggle('checked');
	applyDiscount();
}

function applyDiscount() {
	const currentPrice = parseInt(priceNum.textContent.slice(1)); // get the current price as integer
	if (checkbox.classList.contains('checked')) {
		priceNum.textContent = `$${currentPrice * 0.75}.00`;
	} else {
		priceNum.textContent = `$${currentPrice * (1 / 0.75)}.00`;
	}
}

checkbox.addEventListener('click', toggleCheck);
