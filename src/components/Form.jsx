const Form = ({handleSubmit}) => {
  return (
    <div className="container">
         <form id="form"  onSubmit={handleSubmit} className="container shadow border p-5">
        <div className="row gy-2">
            <div className="col-md-6 d-grid">
                 <input  type="text"className="ps-2 " placeholder="Task" name="task" id="task"/>
            </div>
            <div className="col-md-2 d-grid ">
                <input type="number" placeholder="0" min="1" className="ps-2" name="hr" id="hr"/>

            </div>
            <div  className="col-md-4 d-grid">
                <button type="submit" className="btn btn-primary">Add To Task</button>
            </div>
        </div>
       </form>
    </div>
  )
}
export default Form