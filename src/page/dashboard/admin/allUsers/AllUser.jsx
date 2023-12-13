import { useQuery } from "@tanstack/react-query";
import useAxiosSicure from "../../../../hooks/useAxiosSicure";
import SectionTitle from "../../../../components/sectionTilte/SectionTitle";
import { HiUserGroup } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {

    const axiosSecure = useAxiosSicure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data
        }
    })
    const handleDeleteUser = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })

            }
        });
    }
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <SectionTitle hadding={'MANAGE ALL USERS'}
                subhandding={'---How many??---'}></SectionTitle>

            <div className="overflow-x-auto bg-gray-50 p-10">
                <h1 className="text-3xl font-bold">Total users: {users.length}</h1>
                <table className="table table-zebra mt-5 ">
                    {/* head */}
                    <thead className="bg-[#D1A054] mb-5 uppercase text-white  text-sm">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] rounded-lg btn mb-3 mt-3 text-lg  hover:bg-[#D1A054] text-white"><HiUserGroup /></button>
                                    }
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn bg-[#B91C1C] hover:bg-[#B91C1C] text-white"><FaTrashAlt /></button>
                                </th>
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;