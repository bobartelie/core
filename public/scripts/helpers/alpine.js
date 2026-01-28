document.addEventListener('alpine:init', () => {
    Alpine.store('user', {
        user: {'teste': '123'},
        
        async init() {
            this.user = await window.getUser()
        }
    })
})