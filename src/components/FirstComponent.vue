<script setup>
import { ref, onMounted } from 'vue'
import ListaDeTarefas from '@/components/ListaDeTarefas.vue'
</script>

<template>
    <div class="componentes">
        <h1>Lista de Tarefas</h1>
        <ListaDeTarefas />
    </div>
</template>

<style scoped>
div {
    background-color: #0e7e28;
    padding: 20px;
    margin: 30px;
    border-radius: 5px;
    text-align: center;
}

div:hover {
    background-color: #13b939;
}

h1 {
    color: white;
    margin-bottom: 10px;

}
</style>