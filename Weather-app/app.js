window.addEventListner("load", () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const proxy = "https://cors-anywhere.herokuapp.com/"
			const api = '${proxy}https://api.darksky.net/forecast/41e0da1d6f34583680b6df43c7bb0978/${lat},${long}';

			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data);
				});
		});
	}
});