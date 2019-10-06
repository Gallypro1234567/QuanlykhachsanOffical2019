import React from 'react'

function User(){
    return (
        <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title ">Danh sách nhân viên</h4>
              <p className="card-category"> Here is a subtitle for this table</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className=" text-primary">
                    <th>
                      ID
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Country
                    </th>
                    <th>
                      City
                    </th>
                    <th>
                      Salary
                    </th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Dakota Rice
                      </td>
                      <td>
                        Niger
                      </td>
                      <td>
                        Oud-Turnhout
                      </td>
                      <td className="text-primary">
                        $36,738
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        Minerva Hooper
                      </td>
                      <td>
                        Curaçao
                      </td>
                      <td>
                        Sinaai-Waas
                      </td>
                      <td className="text-primary">
                        $23,789
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        Sage Rodriguez
                      </td>
                      <td>
                        Netherlands
                      </td>
                      <td>
                        Baileux
                      </td>
                      <td className="text-primary">
                        $56,142
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        Philip Chaney
                      </td>
                      <td>
                        Korea, South
                      </td>
                      <td>
                        Overland Park
                      </td>
                      <td className="text-primary">
                        $38,735
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        Doris Greene
                      </td>
                      <td>
                        Malawi
                      </td>
                      <td>
                        Feldkirchen in Kärnten
                      </td>
                      <td className="text-primary">
                        $63,542
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                        Mason Porter
                      </td>
                      <td>
                        Chile
                      </td>
                      <td>
                        Gloucester
                      </td>
                      <td className="text-primary">
                        $78,615
                      </td>
                      <td className="td-actions ">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    )
}
export default User