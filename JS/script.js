const { createApp } = Vue

createApp({
  data() {
    return {
      newItemText: '',
      itemsList: [],
    }
  },
  methods: {
    removeItem(index) {
      this.itemsList.splice(index, 1)
    },
    addItem(){
      if (this.newItemText.length > 2) {
        
        const newItemObject = {
          text: this.newItemText.toLowerCase(),
          done: false,
        }
        
        if (!this.itemsList.some((item) => item.text === newItemObject.text)) {
          this.itemsList.push(newItemObject)
          this.newItemText = ''
        } else {
          alert('L\'elemento è già presente nella lista.')
        }
      
      } else {
        alert('Inserisci un elemento lungo almeno 3 caratteri.')
      }
    },
  },
}).mount('#app')