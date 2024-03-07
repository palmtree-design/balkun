'use strict';

document.addEventListener("DOMContentLoaded", function () {
	function isVisible(elem) {
		let coords = elem.getBoundingClientRect();
		let windowHeight = document.documentElement.clientHeight;
		// 上辺が画面内にあるか、または下辺が画面内にあるかをチェック
		let topVisible = coords.top > 0 && coords.top < windowHeight;
		let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
		return topVisible || bottomVisible;
	}

	function showVisible() {
		let elements = document.querySelectorAll('.fade-in');
		for (let i = 0; i < elements.length; i++) {
			if (isVisible(elements[i])) {
				elements[i].classList.add('fade-in-visible');
			}
		}
	}

	window.addEventListener('scroll', showVisible);
	showVisible(); // ページ読み込み時にも実行
});