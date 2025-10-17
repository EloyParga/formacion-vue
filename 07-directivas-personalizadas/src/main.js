import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Directiva ESTATICA
app.directive('color', {
    beforeMount: (el, binding) => {     //el : elemento, binding: valor que le pasamos a la directiva
        el.style.color = "#000000"
    } 
})

// Directiva con VALUE
app.directive('font-size', {
    beforeMount: (el, binding) => {     //el : elemento, binding: valor que le pasamos a la directiva
        el.style.fontSize = binding.value + 'px'
    } 
})

// Directiva con ARGUMENTO
app.directive('color-arg', {
    beforeMount: (el, binding) => {     //el : elemento, binding: valor que le pasamos a la directiva
        
    } 
})

// Directiva con MODIFICADORES
app.directive('custom-font', {
    beforMount: (el, binding) => {
        let size = 18
        
        if(binding.modifiers.sm){
            size = 10
        }else if (binding.modifiers.md){
            size = 16
        }else if (binding.modifiers.lg){
            size = 22
        }
        el.style.fontSize = size + 'px'
    }
})

app.mount('#app')


