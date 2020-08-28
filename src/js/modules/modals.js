const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault()
            }

            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
        })
        close.addEventListener(() => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })
    }
}

export default modals;