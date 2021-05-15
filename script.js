const pageviewsNum = document.querySelector('#pageviews-num');
const priceNum = document.querySelector('#price-num');
const range = document.querySelector('input[type=range]');

function handleRange() {
	const value = this.value;
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
}

range.addEventListener('change', handleRange);
range.addEventListener('mousemove', handleRange);
