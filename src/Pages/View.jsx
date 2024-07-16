import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_User, View_User } from '../Redux/Action/userAction';
import './style.css'
import { useNavigate } from 'react-router-dom';

const View = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(View_User());
  }, [])

  const users = useSelector((state) => state.Users.Users);
  console.log(users);

  return (
    <div className='p-3 '>
      <table className='table border shadow '>
        <thead>
          <tr>
            <th scope='col'>S.No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users && Object.entries(users).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.phone}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => dispatch(Delete_User(key))}>Del</button>
                    <button className='btn btn-primary' onClick={() => navigate(`/edit/${key}`, { state: [key, value] })}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default View
