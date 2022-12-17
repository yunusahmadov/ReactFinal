import React from 'react'

function ProgressBar() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.opacity = "1";
          scrollProgress.style.bottom="50px"
        } else {
          scrollProgress.style.opacity = "0";
          scrollProgress.style.bottom="0px"
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(var(--bg-color) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      };
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;
  return (
    <div id="progress">
    <span id="progress-value"><i class="fa-solid fa-arrow-up"></i></span>
    </div>
  )
}

export default ProgressBar