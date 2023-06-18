import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"

const pStyle = {padding:"20px", fontSize: "24px"};

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
              <pre style={pStyle}><b>Phone:</b>   123-456-7890</pre>
              <pre style={{fontSize: "24px", paddingLeft:"20px"}}><b>Email:</b>   info@example.com</pre>
              <pre style={pStyle}><b>Address:</b>   123 Main Street, City, State, ZIP</pre>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
