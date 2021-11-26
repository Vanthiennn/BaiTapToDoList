export default class TaskService {
    getListTaskApi() {
        return axios({
            url:"https://61927954d3ae6d0017da811c.mockapi.io/api/todo",
            method: "GET" ,
        });
    }
    deleteTaskApi(id){
        return axios({
            url:`https://61927954d3ae6d0017da811c.mockapi.io/api/todo/${id}`,
            method: "DELETE" ,
        });
    }
    addTaskApi(task) {
        return axios({
            url:"https://61927954d3ae6d0017da811c.mockapi.io/api/todo",
            method: "POST" ,
            data : task
        });
    }
    getTaskById(id){
        return axios({
            url:`https://61927954d3ae6d0017da811c.mockapi.io/api/todo/${id}`,
            method: "GET" ,
        });
    }
    updateTask(task) {
        return axios({
            url:`https://61927954d3ae6d0017da811c.mockapi.io/api/todo/${task.id}`,
            method: "PUT" ,
            data : task
        });
    }
}

