const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.querySelector('.progress')


let currentActive = 1

next.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>circles.length)
        currentActive = circles.length
    update()
})

prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive<1)
    currentActive = 1
    update()
})

function update()
{
    circles.forEach( (circle, idx)=> {
        if(idx< currentActive)
        circle.classList.add('active')
        else
        circle.classList.remove('active')
    })


    if(currentActive==1)
    {
        prev.disabled = true;
        next.disabled = false;
    }
    else if(currentActive==circles.length){
        prev.disabled = false;
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }

    progress.style.width = ( (currentActive -1 ) / (circles.length -1 )) *100 + '%' 
}