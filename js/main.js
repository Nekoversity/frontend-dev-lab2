const successMessage = "Дані надіслано!"
const loginErrorMessage = "Ви не можете використати логін 'administrator'!";
const passwordErrorMessage = "Паролі не сходяться!";

const button = document.getElementById("submit");
const infoBox = document.getElementsByClassName("info-box")[0]; 
const form = document.forms[0];

button.addEventListener("click", handleSubmitClick);

function handleSubmitClick() {
	if (form.login.value === "administrator") {
		setInfoBoxMessage(loginErrorMessage, "error");
	} else if (form.password.value !== form.password_confirm.value) {
		setInfoBoxMessage(passwordErrorMessage, "error");
	} else {
		setInfoBoxMessage(successMessage, "success");
	}
}

function setInfoBoxMessage(text, mtype = "") {
	infoBox.innerText = text;
	
	if (mtype === "") infoBox.style.color = "";
	if (mtype === "error") infoBox.style.color = "red";
	if (mtype === "success") infoBox.style.color = "green";
}
