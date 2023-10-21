import React, {useRef} from 'react'
import '../styles.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    function handleSubmit(e){
        e.preventDefault();
 
    emailjs.sendForm('service_s8b4vep', 'template_e2fglfg', form.current, '-5EntjEEuC2PrJWO4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });e.target.reset()
    }

  return (

    <div>

        
         <form ref={form} className='form' onSubmit={handleSubmit}>  
            <div className="inputs1">
                <input className='inputs' 
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input className='inputs'
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <input className='inputs'
                    type="text"
                    placeholder="Company"
                    name="company"
                />
             </div>
             <div className='inputs2'>
                    <textarea className='inputs' 
                        cols="30" 
                        rows="10"
                        placeholder="Please send me an email if you liked my portfolio and are interested in aquiring my services."
                        name="comments"
                    />

            </div>

            <button type="submit" value="Send" className='send'>Submit
            </button>       
        </form>

        
    </div>   
    )
}
