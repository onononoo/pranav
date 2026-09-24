// indian history website navigation and interactions

function showContent(sectionId) {
	const contentBoxes = document.querySelectorAll('.content-box');
	contentBoxes.forEach(box => {
		box.classList.remove('active');
	});

	const selectedBox = document.getElementById(sectionId);
	if (selectedBox) {
		selectedBox.classList.add('active');
	}

	const navLinks = document.querySelectorAll('.nav-box a');
	navLinks.forEach(link => {
		link.style.fontWeight = 'normal';
	});

	const activeLink = document.querySelector('[data-section="' + sectionId + '"]');
	if (activeLink) {
		activeLink.style.fontWeight = 'bold';
	}

	updateStatusBar('displaying: ' + sectionId);
}

function updateStatusBar(message) {
	const statusBar = document.getElementById('status-bar');
	if (statusBar) {
		statusBar.textContent = message;
	}
}

function toggleDynasty(id) {
	const element = document.getElementById(id);
	if (element) {
		element.style.display = element.style.display === 'none' ? 'block' : 'none';
	}
}

function searchContent() {
	const searchInput = document.getElementById('search-box');
	const query = searchInput.value.toLowerCase();

	if (query.length < 2) {
		alert('please enter at least 2 characters');
		return;
	}

	const contentBoxes = document.querySelectorAll('.content-box');
	let found = false;

	contentBoxes.forEach(box => {
		const text = box.innerText.toLowerCase();
		if (text.includes(query)) {
			box.classList.add('active');
			found = true;
		} else {
			box.classList.remove('active');
		}
	});

	if (found) {
		updateStatusBar('search results for: ' + query);
	} else {
		updateStatusBar('no results found for: ' + query);
	}
}

function initializePage() {
	const firstBox = document.querySelector('.content-box');
	if (firstBox) {
		firstBox.classList.add('active');
	}
	updateStatusBar('ready');

	const searchButton = document.getElementById('search-button');
	if (searchButton) {
		searchButton.addEventListener('click', searchContent);
	}

	const searchBox = document.getElementById('search-box');
	if (searchBox) {
		searchBox.addEventListener('keypress', function(e) {
			if (e.key === 'Enter') {
				searchContent();
			}
		});
	}
}

window.addEventListener('DOMContentLoaded', initializePage);

function toggleExpand(id) {
	const element = document.getElementById(id);
	if (element) {
		if (element.style.maxHeight) {
			element.style.maxHeight = null;
		} else {
			element.style.maxHeight = element.scrollHeight + 'px';
		}
	}
}