<script setup>
import { ref, onMounted } from 'vue'
import ListaDeTarefas from '@/components/ListaDeTarefas.vue'
import { getAllTasks } from '@/api/tasksApi.js'

const tasks = ref([]);
const newTask = ref('');
console.log(tasks);
// onMounted(async () => {
//     try {
//         const response = await getAllTasks();
//         tasks.value = response.data.data;
//     } catch (error) {
//         console.log('Erro', error);
//     }

// });
const fetchTasks = async () => {
    try {
        const response = await getAllTasks();
        tasks.value = response.data.data;
        console.log('funcionou')
    } catch (error) {
        console.log('Erro', error)
    }
}

const addTask = async () => {
    try {
        await createTask(newTask.title);
        newTask.title = ''
        await fetchTasks()
    } catch (error) {
        console.log('Erro', error)
    }
}

onMounted(fetchTasks);

</script>


<template>
    <div class="componentes">
        <ul v-if="tasks.length">
            <li v-for="task in tasks" :key="task.id">{{ task.taskName }}</li>
        </ul>

        <input v-model="newTaskTitle"  placeholder="Nova Tarefa" />
        <button @click="addTask">Adicionar</button>
    </div>
</template>