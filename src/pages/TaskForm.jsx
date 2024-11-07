import { Form, Formik } from "formik";

function TaskForm() {
return(
    <div>
      <Formik initialValues={{
        title:"",
        description:""
      }}
      onSubmit={(values)=>{
        console.log(values)

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
