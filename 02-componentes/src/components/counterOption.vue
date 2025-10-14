<template>
    <h3>{{ counter }}</h3>
    <button @click="incrementCounter">Incrementar</button>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data() {
            let counter = 0;
            return { counter };
        },
        methods: {
            incrementCounter() {
                this.counter += 1;
            }
        }

    })
</script>

<style>
    h3 {
        color: #42b983;
    }

    button {
        background-color: #42b983;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
    }

    button:hover {
        background-color: #369870;
    }
</style>