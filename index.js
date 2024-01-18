const left = document.getElementById("leftSide");

const handleOnMove = e => {
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e);