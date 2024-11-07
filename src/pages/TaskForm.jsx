import { Form, Formik } from "formik";
import {createTaskRequest} from '../api/task.api'
function TaskForm() {
return(
    <div>
      <Formik initialValues={{
        title:"",
        description:""
      }}
      onSubmit={ async (values)=> {
        console.log(values)
        try{
           const response = await createTaskRequest(values)
           console.log("Task created:", response); 
        }catch(error){
            console.log(error)

        }

      }}
      >

       
      {({handleChange, handleSubmit})=>(
        <form onSubmit={handleSubmit}>
          <label> title</label>
          <input type="text" name="title" placeholder="write a tittle" onChange={handleChange}/>
          <label> description</label>
          <textarea  name="description" rows="3" placeholder="WRITE A description" onChange={handleChange}   />
          <button type="submit">save</button>
        </form>
      )}
      </Formik>
    </div>
)
}

export default TaskForm;
