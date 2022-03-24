import React, { useState } from 'react';
import "./Contact.css"

const Contact = () => {
  const [text, setText] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
const [text_area,SetText_area]= useState()
  const submit = () => {
    console.log("Click")
  }
  return (
      <div className="contect-form">
        <h2> Contect Us </h2>
        <form>
          <input type="text" className="input-field" placeholder="Your Name" value={text}
          onChange={(e) => setText(e.target.value)} />
          <input type="email" className="input-field" placeholder="Your Email " value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <input type="number" className="input-field" placeholder="Your Number" value={number}
          onChange={(e) => setNumber(e.target.value)} />
          <textarea className="input-field text-area" placeholder="Your Message " value={text_area} 
          onChange={(e) => SetText_area(e.target.value)} />
          <button type="submit" className="btn" onClick={submit}> Submit </button>

        </form>

      </div>

  )
}

export default Contact