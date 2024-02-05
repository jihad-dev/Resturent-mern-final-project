import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
const image_host_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_host_url = `https://api.imgbb.com/1/upload?key=${image_host_key}`
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async(data) => {
    const imageFile = {image:data.image[0]}
   const res = await axiosPublic.post(image_host_url,imageFile,{
    headers:{
      "content-type": "multipart/form-data",
    }
  })
    // now send the menu item to the server and database //

      if(res.data.success){
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price:parseFloat(data.price),
        image:res.data.data.display_url
      }
      const menuRes = await  axiosSecure.post('/menu', menuItem)
      if(menuRes.data.insertedId){
        // show success popup in the client side 
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your ${data.name} item added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      
      }
      }
  
  }
    return (
        <div className='my-6'>
           <SectionTitle heading='Add on Items' subHeading='What,s new?'></SectionTitle>
           <div className='lg:mx-32 p-4 mx-8 bg-base-300 lg:p-9 h-auto w-[85%]'>


         <div>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-4 text-gray-700"
              >
              Recipe name*
              </label>
              <div className="mt-1">
                <input {...register('name',{required:true})}
                  type="text"
                placeholder="Enter Recipe Name"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-5 mt-3">
            <div className='w-full'>
            <span>Category*</span>
            <select defaultValue={'DEFAULT'} {...register('category',{required:true})} className="select select-bordered w-full  py-2">
              <option disabled value={'DEFAULT'}>Category?</option>
              <option value="salad">Salad</option>
              <option value="pizza">pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            
            </select>
            </div>
            <div className='w-full'>
              <label
                htmlFor="text"
                className="block text-sm font-medium   text-gray-700"
              >
             Price*
              </label>
              <div className="mt-1 w-full">
              <input {...register('price',{required:true})} type="text" placeholder="Type here" className="input input-bordered input-success w-full" />
              </div>
            </div>
            </div>
            {/* recepe details */}
            <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" required placeholder="Recipe Details*"></textarea>
          </label>
          {/* image choise */}
          <div  className="my-4">
          <input {...register('image',{required:true})}  required type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
          </div>
            <div className='my-5 '>
            <button className="btn hover:bg-slate-400">Add Item 🍴</button> 
            </div>
          </form>
         </div>


           </div>
        </div>
    );
};

export default AddItems;