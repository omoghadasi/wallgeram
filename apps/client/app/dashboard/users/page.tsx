import React from "react";

function Users() {
  return (
    <div>
      <h1 className="text-2xl pb-1">Users</h1>
      <hr />
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
