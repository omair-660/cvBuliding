let darkBtn = document.querySelector('.darkBtn')
let body = document.body
let isDark = false

if (JSON.parse(localStorage.getItem('dark'))) {
    body.classList.add('dark')
    darkBtn.innerHTML = `<i style='color:#ffd43f' class='fa-solid fa-sun'></i>`
}else{
    body.classList.remove('dark')
    darkBtn.innerHTML = `<i class='fa-solid fa-moon'></i>`
}

darkBtn.addEventListener('click' , ()=>{
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        isDark = true
        darkBtn.innerHTML = `<i style='color:#ffd43f' class='fa-solid fa-sun'></i>`
    }else{
        isDark = false
    darkBtn.innerHTML = `<i class='fa-solid fa-moon'></i>`
    }
    localStorage.setItem('dark' , JSON.stringify(isDark))
})

