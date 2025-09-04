// Count contributor cards and update the top navbar count.
function countContributors() {
	const cards = Array.from(document.querySelectorAll('.cards-section .card'));
	// Exclude the card template which contains "Your Name"
	const realCards = cards.filter(c => {
		const nameEl = c.querySelector('.name');
		if (!nameEl) return false;
		const nameText = nameEl.textContent.trim().toLowerCase();
		return nameText !== 'your name' && nameText.length > 0;
	});
	const countEl = document.getElementById('contrib-count');
	if (countEl) countEl.textContent = String(realCards.length);
	return realCards.length;
}

// Update count on load
window.addEventListener('DOMContentLoaded', () => {
	countContributors();
	// Observe changes to the cards-section so count updates when cards are added/removed
	const cardsSection = document.querySelector('.cards-section');
	if (cardsSection) {
		const mo = new MutationObserver(() => countContributors());
		mo.observe(cardsSection, { childList: true, subtree: true });
	}
});

// Theme toggle: persist preference in localStorage and update DOM
const THEME_KEY = 'contrib_theme';
function applyTheme(theme) {
	if (theme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.body.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.removeAttribute('data-theme');
		document.body.removeAttribute('data-theme');
	}
	const btn = document.getElementById('theme-toggle');
	if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

function toggleTheme() {
	const current = localStorage.getItem(THEME_KEY) || 'light';
	const next = current === 'dark' ? 'light' : 'dark';
	localStorage.setItem(THEME_KEY, next);
	applyTheme(next);
}

window.addEventListener('DOMContentLoaded', () => {
	// initialize theme from storage. Default to Light if not set.
	const stored = localStorage.getItem(THEME_KEY);
	if (stored) {
		applyTheme(stored);
	} else {
		// Default to light theme. Do not persist until the user toggles.
		applyTheme('light');
	}
	const tbtn = document.getElementById('theme-toggle');
	if (tbtn) tbtn.addEventListener('click', toggleTheme);
});
