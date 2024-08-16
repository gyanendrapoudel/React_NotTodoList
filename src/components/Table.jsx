import { useState } from "react"

const Table = ({ taskList, handleSwitchTask, handleDelete}) => {
  const [itemToDelete, setItemToDelete]=useState([])
  const entryList = taskList.filter((list) => list.type === 'entry')
  const badList = taskList.filter((list) => list.type === 'bad')
  const handleChange= (e)=>{
    const {checked, value} = e.target
    let tempArray=[]
    if(value==="entry"){
       tempArray=entryList
    }
    if(value ==="bad"){
      tempArray=badList
    }
    if(checked){
      if(value==="entry" || value==="bad"){
          const newList = tempArray.filter((list)=> !itemToDelete.includes(list._id))
          const newListId = newList.map((list)=>list._id)
          return setItemToDelete([...itemToDelete,...newListId])
      }
      !itemToDelete.includes(value) && setItemToDelete([...itemToDelete,value])
    }else{
          if(value==="entry" || value==='bad'){
            const ids = tempArray.map((item)=>item._id)
            return setItemToDelete(
              itemToDelete.filter((item) => !ids.includes(item))
            )
          }
          setItemToDelete(itemToDelete.filter((id)=>id!==value))
    }
  }
  console.log(itemToDelete)
  return (
    <div className="row mt-5 p-5">
      <div className="col-md-6 p-3">
        <h3 className="text-center">Entry Lists</h3>
        <input
          className="form-check-input me-2 fs-5"
          type="checkbox"
          value="entry"
          onChange={handleChange}
          id="entryTasks"
        />
        <label className="form-check-label fs-5" htmlFor="entryTasks">
          Select All
        </label>
        <table className="table table-striped border ">
          <tbody id="entryList">
            {entryList.map((item, i) => {
              return (
                <tr key={item?._id}>
                  <td className="">
                    <span className="me-2">{i + 1}</span>
                    <input
                      type="checkbox"
                      className="form-check-input "
                      value={item?._id}
                      checked={itemToDelete?.includes(item?._id)}
                      onChange={handleChange}
                      style={{ border: '2px solid black' }}
                    />
                  </td>
                  <td className="">{item.task}</td>
                  <td className="">{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash "></i>
                    </button>
                    <button
                      onClick={() => handleSwitchTask(item?._id, 'bad')}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-6 p-3">
        <h3 className="text-center">Bad Lists</h3>
        <input
          className="form-check-input me-2 fs-5"
          type="checkbox"
          value="bad"
          id="badTasks"
          onChange={handleChange}
        />
        <label className="form-check-label fs-5" htmlFor="badTasks">
          Select All
        </label>
        <table className="table table-striped border">
          <tbody id="badList">
            {badList.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td className="  ">
                    <span className="me-2">{i + 1}</span>
                    <input
                      type="checkbox"
                      className="form-check-input "
                      value={item?._id}
                      checked={itemToDelete?.includes(item?._id)}
                      onChange={handleChange}
                      style={{ border: '2px solid black' }}
                    />
                  </td>
                  <td className="">{item.task}</td>
                  <td className="">{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleSwitchTask(item?._id, 'entry')}
                      className="btn btn-warning"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash "></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className=" bg-light p-2 rounded">
          You Could have saved{' '}
          <span id="savedHour">
            {badList.reduce((acc, item) => acc + parseInt(item.hr), 0)}
          </span>{' '}
          hours
        </div>
      </div>
      {itemToDelete.length > 0 && (
        <div className="  text-center">
          <button className="btn btn-danger w-50">
            {itemToDelete.length} Tasks(s)
          </button>
        </div>
      )}
      {/* <!-- total Allocated hours --> */}
      <div className=" bg-light p-2 mt-3 rounded ">
        You have allocated{' '}
        <span id="totalHour">
          {badList.reduce((acc, item) => acc + parseInt(item.hr), 0) +
            entryList.reduce((acc, item) => acc + parseInt(item.hr), 0)}
        </span>{' '}
        hours
      </div>
    </div>
  )
}
export default Table