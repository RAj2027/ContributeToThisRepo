// alert("Welcome to your WebSite");

// Set current month/date for any date-box that has data-auto="true"
(() => {
	try {
		const monthNames = [
			'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
		];

		const els = document.querySelectorAll('.date-box[data-auto="true"]');
		if (!els.length) return;

		const now = new Date();
		const mon = monthNames[now.getMonth()];
		const day = String(now.getDate()).padStart(2, '0');

		els.forEach(el => {
			const m = el.querySelector('.month');
			const d = el.querySelector('.date');
			if (m) m.textContent = mon;
			if (d) d.textContent = day;
		});
	} catch (e) {
		// fail silently; script should never break the page
		console.error('date autopopulate error', e);
	}
})();