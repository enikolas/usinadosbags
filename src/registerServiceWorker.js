/* eslint-env browser */
function registerValidSW(swUrl) {
	navigator.serviceWorker.register(swUrl).then((registration) => {
		console.log('SW registered: ', registration); // eslint-disable-line
	}).catch((registrationError) => {
		console.log('SW registration failed: ', registrationError); // eslint-disable-line
	});
}

export default function register() {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			const swUrl = '/sw.js';
			registerValidSW(swUrl);
		});
	}
}
