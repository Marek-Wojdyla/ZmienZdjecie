const changeButton = document.querySelector(".change");
const img = document.querySelector(".img");

const URL = "https://dog.ceo/api/breeds/image/random";

const downloadPhoto = () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute("src", data.message))
		.then(
			(data1) => img.setAttribute("width", "400"),
			img.setAttribute("heigh", "530")
		)
		.catch((err) => console.error(err));
};

const checkClick = () => {
	changeButton.addEventListener("click", downloadPhoto);
};

const showPhoto = () => {
	downloadPhoto();
	checkClick();
};

showPhoto();
