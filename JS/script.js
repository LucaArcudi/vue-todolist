const { createApp } = Vue

createApp({
  data() {
    return {
        newItem: '',
        itemsList: [],
    }
  },
  methods: {
    removeItem(index) {
        this.itemsList.splice(index, 1)
    },
    addItem(){
        if (this.newItem.length > 2) {
            this.itemsList.push({text: this.newItem.toLowerCase(), done: false})
            this.newItem = ''
        } else {
            alert('Inserisci un elemento lungo almeno 3 caratteri.')
            this.newItem = ''
        }
    }
  }
}).mount('#app')