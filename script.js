let a = document.getElementsByClassName("playbackRateButtons")[0]
let btn = document.createElement("btn");
btn.classList.add("btn");
btn.classList.add("blue");
btn.innerHTML = "16.0X";
btn.style.padding = "7px 32px";
btn.onclick = () => {
    document.querySelector("video").playbackRate = 16.0;
    document.getElementsByClassName('active')[0].classList.remove('active');
    btn.style.backgroundColor = "#f00"
}
a.appendChild(btn)