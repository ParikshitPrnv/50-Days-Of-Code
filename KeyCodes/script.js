const element = document.getElementById('insert');
window.addEventListener('keydown',(event)=>{
    console.log(event)
    element.innerHTML = `
    <div class="box">
        ${event.key===' '?'Space':event.key}
        <small>Key Value</small>
      </div>

      <div class="box">
      ${event.keyCode}
        <small>Key Code</small>
      </div>

      <div class="box">
      ${event.code}
        <small>Key Name</small>
      </div>
    `
})