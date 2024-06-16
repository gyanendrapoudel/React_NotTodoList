const Table = ({taskList}) => {
  const entryList = taskList.filter((list)=>list.type==="Entry")
  return (
   <div className="row mt-5 p-5">
            <div className="col-md-6 p-3">
                <h3 className="text-center">Entry Lists</h3>
                <table className="table table-striped border ">
                    <tbody id="entryList">
                    {entryList.map((item,i)=>{
                        return (
                          <tr key={item.id}>
                            <td className="">{i + 1}</td>
                            <td className="">{item.task}</td>
                            <td className="">{item.hr}</td>
                            <td className="text-end">
                              <button
                                onclick="handleOnDelete('${item.id}')"
                                className="btn btn-danger"
                              >
                                <i className="fa-solid fa-trash "></i>
                              </button>
                              <button
                                onclick="switchTask('${item.id}','bad')"
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
                <table className="table table-striped border">
                    <tbody id ="badList">
                        
                    </tbody>

                </table>
                <div className=" bg-light p-2 rounded">
                    You Could have saved <span id="savedHour">0</span> hours
                </div>


            </div>

        {/* <!-- total Allocated hours --> */}
         <div className=" bg-light p-2 mt-3 rounded ">
            You  have allocated <span id="totalHour"></span> hours
         </div>
        </div>
  )
}
export default Table