const checkMovie = document.querySelectorAll(".movieForSelect");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const guestNameInput = document.querySelector(".guestNameInput");
const checkJoy = document.querySelector(".joy");
const body = document.querySelector("body");

function checkMovieCount() {
    let count = 0;
    checkMovie.forEach((movie) => {
        s;
        if (movie.checked) count++;
    });
    return count;
}

function getGuestName() {
    return guestNameInput.value;
}

function alertInfo() {
    const count = checkMovieCount();
    const name = getGuestName();

    if (name === "") return alert("이름을 입력해주세요");
    if (count === 0) return alert("같은 취향의 영화가 없으시군요!");
    return alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);
}

function resetPase() {
    guestNameInput.value = "";
    checkMovie.forEach((movie) => {
        movie.checked = false;
    });
}

submit.addEventListener("click", alertInfo);
reset.addEventListener("click", resetPase);
guestNameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") alertInfo();
});

function showJoy() {
    if (checkJoy.checked) {
        return (body.style.backgroundImage = "url(../images/조이.jpeg)");
    }
    return (body.style = "");
}

checkJoy.addEventListener("click", showJoy);
