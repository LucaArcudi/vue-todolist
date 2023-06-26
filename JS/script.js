const { createApp } = Vue

createApp({
  data() {
    return {
        newItem: '',
        itemsList: [
            {
                text: 'farina',
                done: false
            },
            {
                text: 'uova',
                done: false
            },
            {
                text: 'pane',
                done: false
            },
            {
                text: 'petto di pollo',
                done: false
            },
            {
                text: 'grana padano',
                done: false
            },
        ],
    }
  },
  methods: {

  }
}).mount('#app')