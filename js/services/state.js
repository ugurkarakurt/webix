/* === DÜZELTILMIŞ JS/SERVICES/STATE.JS === */
window.StateService = {
    state: {
        currentPage: 'home',
        selectedProduct: null,
        products: [],
        cart: []
    },

    setState: function (newState) {
        this.state = Object.assign(this.state, newState);
        this.saveToStorage();
        console.log('State updated:', this.state);
    },

    getState: function () {
        return this.state;
    },

    // Cart işlemleri
    addToCart: function (productId, quantity = 1) {
        const existingItem = this.state.cart.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.state.cart.push({
                productId: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        this.saveToStorage();
        return this.state.cart;
    },

    removeFromCart: function (productId) {
        this.state.cart = this.state.cart.filter(item => item.productId !== productId);
        this.saveToStorage();
        return this.state.cart;
    },

    getCartCount: function () {
        return this.state.cart.reduce((total, item) => total + item.quantity, 0);
    },

    clearCart: function () {
        this.state.cart = [];
        this.saveToStorage();
    },

    saveToStorage: function () {
        try {
            localStorage.setItem('techstore_state', JSON.stringify(this.state));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    },

    loadFromStorage: function () {
        try {
            const saved = localStorage.getItem('techstore_state');
            if (saved) {
                const parsedState = JSON.parse(saved);
                this.state = Object.assign(this.state, parsedState);
                console.log('State loaded from storage:', this.state);
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }
};