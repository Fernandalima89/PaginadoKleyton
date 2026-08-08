import React, { useState }  from "react";
import { ContactFormTitle } from "@/data";

const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sucessMessage, setSucessMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    let data = {
      name,
      lastName,
      email,
      message,
      phoneNumber
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSending(false)
        setName('')
        setLastName('')
        setPhoneNumber('')
        setEmail('')
        setMessage('')
        setSucessMessage('Message sent successfully')
      }
    })
  }


  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              // action="#"
              // method="post"
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    value={name}
                    name="f_name"
                    id="f_name"
                    placeholder="First Name"
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="con_message"
                    id="con_message"
                    value={message}
                    placeholder="Write Message"
                    onChange={(e)=>{setMessage(e.target.value)}}
                  ></textarea>
                </div>
              </div>
              <h4>{sucessMessage}</h4>
              <button
                className="common_btn red_bg"
                type="submit"
                disabled={sending}
                id="con_submit"
                onClick={(e)=>{handleSubmit(e)}}
              >
                <span>{ sending ? 'Sending Message...'  : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
