<template>
    <h3>{{ counter }}</h3>
    <button @click="incrementCounter">Incrementar</button>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
         name: 'CounterOption',
         components: {},
         setup(){
            let counter = ref(0);
            const incrementCounter = () => {
                counter.value ++;
            }
            return { counter, incrementCounter };
         }
    })
</script>