const panels = document.querySelectorAll('.panel')  // select all the classes of panel

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {  
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}