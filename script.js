window.addEventListener('load', function () {
    const trailer1 = document.getElementById("trailer1");
    const trailer2 = document.getElementById("trailer2");

    window.onmousemove = e => {
        if (trailer1 != null && trailer2 != null) {
            const x = e.clientX - trailer1.offsetWidth / 2,
                y = e.clientY - trailer1.offsetHeight / 2;

            const x2 = e.clientX - trailer2.offsetWidth / 2,
            y2 = e.clientY - trailer2.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`
            }
            const keyframes2 = {
                transform: `translate(${x2}px, ${y2}px)`
            }

            trailer1.animate(keyframes, {
                duration: 400,
                fill: "forwards"
            });
            trailer2.animate(keyframes2, {
                duration: 0,
                fill: "forwards"
            });
        }
    }
})