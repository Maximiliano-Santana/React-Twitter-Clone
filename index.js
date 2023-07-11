const button = document.querySelector('button');

button.addEventListener('click', ()=>{    
    
    const id = button.getAttribute('data-id');
    
    if(button.classList.contains('liked')){
        button.classList.remove('liked');
        button.innerText = 'Like'
    } else {
        button.classList.add('liked');
        button.innerText = 'Remove Like'
    }
})

