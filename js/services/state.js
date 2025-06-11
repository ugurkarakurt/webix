/* === JS/SERVICES/STATE.JS === */
window.StateService = {
    state: {
        currentPage: 'home',
        selectedProduct: null,
        products: []
    },

    setState: function (newState) {
        this.state = Object.assign(this.state, newState);
        this.saveToStorage();
    },

    getState: function () {
        return this.state;
    },

    saveToStorage: function () {
        try {
            localStorage.setItem('techstore_state', JSON.stringify(this.state));
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    },

    loadFromStorage: function () {
        try {
            const saved = localStorage.getItem('techstore_state');
            if (saved) {
                this.state = Object.assign(this.state, JSON.parse(saved));
            }
        } catch (e) {
            console.warn('Could not load from localStorage');
        }
    }
};