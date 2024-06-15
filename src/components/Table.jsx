const Table = () => {
  return (
   <div className="row mt-5 p-5">
            <div className="col-md-6 p-3">
                <h3 className="text-center">Entry Lists</h3>
                <table className="table table-striped border ">
                    <tbody id="entryList">
                    
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
            You  have allocated <span id="totalHour">0</span> hours
         </div>
        </div>
  )
}
export default Table