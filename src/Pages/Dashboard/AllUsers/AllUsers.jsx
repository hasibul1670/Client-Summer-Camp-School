import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Total Users: </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <h1>all users</h1>
            {/* {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        } */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
