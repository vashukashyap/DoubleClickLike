const container = document.querySelector('.container');
const heart = document.querySelector('.heart');

container.addEventListener('dblclick', (e)=>{
    
    let xValue = 0;
    let yValue = 0;

    xValue = e.clientX - e.target.offsetLeft;
    yValue = e.clientY - e.target.offsetTop;

    heart.style.left = `${xValue}px`;
    heart.style.top = `${yValue}px`;

    heart.classList.add("active");

    setTimeout(() => {
        heart.classList.remove("active");
    }, 1000);

})