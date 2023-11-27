import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] =  useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Muhammad-Arslan11')
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            setData(data)}
    )
    }, [])
  return (
    <div className='bg-gray-700 text-center text-2xl text-white p-4 m-2'>Github Followers: {data.followers}
    <img src={data.avatar_url} width={250} alt="Github Pic" />
    </div>
  )
}

export default Github