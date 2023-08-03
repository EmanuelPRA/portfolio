const hidden = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
        entry.target.classList.add("show")
        }
    })
}, {
    threshold: 0.5,
})


hidden.forEach(card =>{
    observer.observe(card)
})
