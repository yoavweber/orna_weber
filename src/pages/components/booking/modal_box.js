import React, {useState} from 'react';
import './modal_box.css'



const ModalBox = () => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [date,setDate] = useState('')
    const [text,setText] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        const form = { "name": name, "date": date, "email": email, "text": text}


        var url = 'http://localhost:3000/bookings';
        
        fetch(url, {
          method: 'POST', 
          body: JSON.stringify(form), 
          headers:{
            'Content-Type': 'application/json',
          }
          
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type='text'
                value ={name}
                onChange={e => setName(e.target.value)} />
            <label>Date</label>
            <input 
                type='date'
                value ={date}
                onChange={e => setDate(e.target.value)} />
            <input 
                type='email'
                value ={email}
                onChange={e => setEmail(e.target.value)} />
            <textarea
                value ={text}
                onChange={e => setText(e.target.value)} />
            
            <input type='submit' />
        </form>
    )


}


export default ModalBox;