const hidden = document.querySelectorAll('.hidden')
const onLeft = document.querySelectorAll('.onleft')
const frost = document.querySelectorAll('.outside')
const fadein = document.querySelectorAll('.fadein')

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

const frostObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("movein")
    
        }
    })
}, {
    threshold: 0.5,
})

const fadeObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade-show")
    
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

frost.forEach(content =>{
    frostObserver.observe(content)
})

fadein.forEach(content =>{
    fadeObserver.observe(content)
})