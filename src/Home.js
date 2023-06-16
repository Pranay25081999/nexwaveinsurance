
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const url = "http://localhost:8080/get";
const pUrl="http://localhost:8080/update/2";



const fetchInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

function Home(){
    const [employee, setEmployee] = useState({
        name: '', email: '', mobileno: '', address: '', nomineeName: '', relationWithNominee: '', typeofInsurance: '', tenure: '', price: ''
    });
    console.log(employee);
const handleChange = (e) => {
    
    setEmployee({
        ...employee,
        [e.target.name]: e.target.value
    })
}
const updateUser = async () => {
    const ress =await fetch(pUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(employee)
    });
    const datas= await ress.json();
    console.log(datas);
}

    return(
        <dev>
            <input type='button' onClick={fetchInfo} value='get'/>
            <input type='button' onClick={updateUser} value='edit'/>

            <input type='button' onClick={''} onChange={handleChange} value='delete'/>
        
        </dev>
    )
}
export default Home;