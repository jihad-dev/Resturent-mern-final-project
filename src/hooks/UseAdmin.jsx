import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data : isAdmin} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin];
};

export default UseAdmin;