import React from 'react';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import Loader from '../../Shared/Loader/Loader';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const ManageItems = () => {
    const [menu,loading] = UseMenu();
    const axiosSecure = UseAxiosSecure();

        if(loading){
            return <Loader></Loader>
          
        }
        const handleMenuDelete = (item) =>{
        console.log(item);
        }

    return (
        <div className='my-6 w-full'>
            <SectionTitle heading='Manage All Items' subHeading='---Hurry Up!---'></SectionTitle>
            <div className="lg:mx-16 bg-base-300 lg:p-9 h-auto w-full">
        <h3 className=" text-2xl p-2">Total Items: {menu.length} </h3>
        <div className="overflow-x-auto lg:px-6 mt-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>NAME</th>
                <th>PRICE </th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={item?.image} />
            </div>
          </div>
        </div>
      </td>
                  <td>{item.name}</td>
                  <td className='text-right'>${item.price}</td>
                  <td>
                 <Link
                    className="text-[24px]" >                  
                        <FaEdit></FaEdit>
                    </Link>
                  </td>
                  <td>
                    <Link onClick={() =>handleMenuDelete(item)} className="text-[32px]">
                 <FaTrashCan></FaTrashCan>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default ManageItems;