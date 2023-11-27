import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white p-4 m-2 text-center text-2xl '>User: {userid} </div>
  )
}

export default User