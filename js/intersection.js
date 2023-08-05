const hidden = document.querySelectorAll('.hidden')
const onLeft = document.querySelectorAll('.onleft')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
                entry.target.classList.add("onright")        
                entry.target.classList.add("show")
        
        }
    })
}, {
    threshold: 0.5,
})


hidden.forEach(card =>{
    observer.observe(card)
})

onLeft.forEach(content =>{
    observer.observe(content)
})
