import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Edit_User } from '../Redux/Action/userAction';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  // console.log(location);


  const handleSumbit = (e) => {
    e.preventDefault();

    let obj = {
      id: location?.state[0],
      name: name,
      phone: phone
    }
    // console.log(obj);

    dispatch(Edit_User(obj));

    setName("")
    setPhone("")

    setTimeout(() => {
      navigate('/view')
    }, [1000])
  }

  useEffect(() => {
    setName(location?.state[1]?.name)
    setPhone(location?.state[1]?.phone)
  }, [])

  return (
    <div className='p-5'>
      <h1 className='text-center'>Edit User</h1>
      <form action="" className='border shadow p-5' onSubmit={handleSumbit} >
        <label className='fw-bold' htmlFor="">Name:-</label>
        <input type="text" className='form-control mb-4' onChange={(e) => setName(e.target.value)} value={name || ""} />

        <label className='fw-bold' htmlFor="">Phone:-</label>
        <input type="text" className='form-control' onChange={(e) => setPhone(e.target.value)} value={phone || ""} />

        <input type="submit" className='btn btn-primary mt-4' />
        <Link to="/view" className="btn btn-primary mt-4 ms-4">View</Link>
      </form>
    </div>
  )
}

export default Edit
