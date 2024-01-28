function App() {
  return (
   
 
    <div className="App">
      <div className="container overflow-hidden text-center">
        <div className="row">
          <div className="col p-3">
            <form >
              <h2>WikiTruth</h2>
              <div className="input-group g-col-4 g-3">
                <span className="input-group-text">Name</span>
                <input className="form-control" type="text" value="Test" id="message" name="message"></input>
                <button type="submit" className="g-col-4 btn btn-primary" value="Submit" >Postivity</button>
                <button type="submit" className="g-col-4 btn btn-primary" value="Submit">Fictional</button>
              </div>
            </form>
            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Summary</th>
                   
                    <th scope="col">Fictional?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <button type="submit" className="btn btn-primary" value="Submit">Yes</button>
                      <button type="submit" className="btn btn-primary" value="Submit">No</button>

                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="error"></div>

        </div >
        <footer className="bg-light text-center text-lg-start fixed-bottom">
          <div className="text-center p-3" >

          </div>
        </footer>
      </div >
    </div>

  )
}

export default App
