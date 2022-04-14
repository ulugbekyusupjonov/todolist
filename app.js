const inputText = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoForm = document.querySelector('.todo-form')

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = inputText.value
    addTodolist(inputValue)
    inputText.value = ''
})
function addTodolist(todo) {
    const li = document.createElement('li')
    li.textContent = todo
    li.classList.add('todo-item')

    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkBtn.classList.add('check-btn')
    li.appendChild(checkBtn)
    

    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn')
    li.appendChild(trashBtn)
    

    todos.appendChild(li)
}

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'trash-btn') {
        const iteam = e.target.parentElement
        iteam.remove() 
    }
    if(e.target.classList[0] == 'check-btn') {
        const iteam = e.target.parentElement
        iteam.classList.toggle('done')
    }
    
})

let modalBtn=document.querySelector('.modal-btn')
let modalContent=document.querySelector('.modal-bg')
let modalContentBg=document.querySelector('.bg-modal-blur')
modalBtn.addEventListener('click',()=>{
     modalContent.classList.remove('hidden')
     modalContentBg.classList.remove('hidden')
})
modalContentBg.addEventListener('click',()=>{
   modalContentBg.classList.add('hidden')
   modalContent.classList.add('hidden')
})






