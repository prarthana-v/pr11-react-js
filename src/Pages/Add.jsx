import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Add_User } from '../Redux/Action/userAction';
import { Link } from 'react-router-dom';

const Add = () => {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    let obj = {
      name: name,
      phone: phone
    }

    dispatch(Add_User(obj));
    console.log(obj);

    setName("")
    setPhone("")
  }
  return (
    <div className='p-5'>
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

export default Add
