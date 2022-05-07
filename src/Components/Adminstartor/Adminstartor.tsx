function Administrator() {
    return(
       <div className="row">
           <div className="col-6 offset-3">
               <div className="card">
                   <div className="card-header">
                       <h3 className="text-center">Administrator Login</h3>
                   </div>
                   <div className="card-body">
                       <div className="form-body">
                           <form>
                               <label htmlFor="username">Username : </label>
                               <input type="text"
                               name="username"
                               id="username"
                               className="form-control" />
                           </form>
                           <br />
                           <div className="form-group">
                                <label htmlFor="password">Password : </label>
                                <input type="password"
                                id="password"
                                className="form-control" />
                           </div>
                           <br />
                           <div className="form-group">
                               <div className="row">
                                   <div className="col-6 offset-3">
                                       <button className="btn btn-primary btn-block"
                                       type="button" >Login</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Administrator;