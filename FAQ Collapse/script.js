const puzzles = [{
    'question': 'What has to be broken before you can use it?',
    'answer': 'An Egg'
},
{
    'question': "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    'answer': "A candle"
},
{
    'question':'What month of the year has 28 days?',
    'answer':'All of them'
}
]





const container = document.querySelector('.faq-container');
console.log(container)
puzzles.forEach(puzzle=>{
    const div = document.createElement('div')
    div.classList.add("faq")

    const h3 = document.createElement('h3')
    h3.classList.add("faq-title")
    h3.innerText=puzzle['question']
    
    const p = document.createElement('p')
    p.classList.add('faq-text')
    p.innerText=puzzle['answer']
    
    bar = document.createElement('button')
    bar.classList.add('faq-toggle')
    bar.innerHTML=`
    <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
    `
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(bar)

    container.appendChild(div)
})


const buttons = document.querySelectorAll('.faq-toggle');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        button.parentNode.classList.toggle('active')
    })
})