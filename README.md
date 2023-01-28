# Script

A script for <a href="https://ptccjh.teamslite.com.tw/student/cinemaVideo.html">ptccjh.teamslite.com.tw</a><br />
## How it works 
It basically just appends a button element to the document object model (DOM) and when you click the button it sets video playbackrate to 16
### Usage

1. Go to <a href="https://ptccjh.teamslite.com.tw/student/cinemaVideo.html">ptccjh.teamslite.com.tw</a>
2. Open up console <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd>
3. Paste in the script 
```js
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
```
5. You will now see a button with the value ```16.0X```
<br/><img src="./example.PNG" /><br/>
6. Click on it and the playback rate should change
