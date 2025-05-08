import axios from 'axios';
import api from '@/environment/api.js'



export function getAllTasks() {
    return api.get('JWT/GetAllTaskList');
}

// export function createTask(taskTitle) {
//     return api.post('JWT/CreateNewTask', {
//         taskTitle: taskTitle
//     }

//     );
// }

