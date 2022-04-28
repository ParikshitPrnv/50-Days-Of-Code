const bg = document.querySelector('.bg');
const load = document.querySelector('.load');
let interval = setInterval(loading,30);
val =0

function rangeCoversion(origMin, origMax, newMin, newMax,givenVal)
{
    numOfOrigUnits = origMax - origMin
    numOfNewUnits = newMax - newMin
    xFactor = numOfNewUnits / numOfOrigUnits
    return xFactor*(givenVal-origMin) + newMin
}



function loading()
{
    val++
    load.innerText = `${val}%` 
    if(val>99)
        clearInterval(interval)
    load.style.opacity =  rangeCoversion(0,100,1,0,val);
    bg.style.filter =  `blur(${rangeCoversion(0,100,40,0,val)}px)`
}