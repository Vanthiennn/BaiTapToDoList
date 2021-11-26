import TaskService from "../service/TaskService.js";
import Task from "../models/Task.js";

const taskService = new TaskService() ;

const getEle = (id) => document.getElementById(id)

const getListTask = () => {
    taskService
    .getListTaskApi()
    .then((result)=>{
        renderTask(result.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
getListTask()

const renderTask = (data) => {
    let t = "" ;
    let n = "" ;
     data?.forEach((item)=>{
        if(item.status === "todo") {
            t += `
            <li>
                <span>${item.textTask}</span>
                <div class="buttons">
                      <button class="remove" onclick="deleteTask(${item.id})">
                        <i class="fa fa-trash-alt"></i>
                      </button>
                      <button class="complete" onclick="changeStatus(${item.id})">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                      </button>
                    </div>
            </li>
            `
        } else {
            n += `
            <li>
                <span>${item.textTask}</span>
                <div class="buttons">
                      <button class="remove" onclick="deleteTask(${item.id})">
                        <i class="fa fa-trash-alt"></i>
                      </button>
                      <button class="complete" onclick="changeStatus(${item.id})">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                      </button>
                    </div>
            </li>
            `
        }
    }) 
    getEle("todo").innerHTML = t ; 
    getEle("completed").innerHTML = n;
}

const deleteTask = (id) => {
  taskService
  .deleteTaskApi(id)
  .then((result)=>{
    alert("Delete Success")
    getListTask()
  })
  .catch((error)=>{
    console.log(error)
  })
}
window.deleteTask = deleteTask;

// Add Task
getEle("addItem").addEventListener("click",()=>{
  const textTask = getEle("newTask").value;
  const task = new Task(textTask,"todo","") 
  taskService
  .addTaskApi(task)
  .then((result)=>{
    alert("Add Success")
    getListTask()
  })
  .catch((error)=>{
    console.log(error)
  })
});

const changeStatus = (id) => {
    const textTask = "";
    const status = "";
    const task = new Task(textTask,status,id);
    taskService.getTaskById(task.id).then((result)=> {   
      task.textTask = result.data.textTask
      task.status = result.data.status 
      if(task.status === "todo"){
        task.status = "completed"
      } else {
        task.status = "todo"
      }
      taskService
      .updateTask(task)
      .then((result)=>{
        alert("Change Status Success")
        getListTask()
      })
    }) 
}

window.changeStatus = changeStatus