const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.className = 'panel active'
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.className = 'panel'
    })
}