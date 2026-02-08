// import React from "react";
// import './ContactUs.css';
// import msg_icon from '../../assets/msg-icon.png';
// import mail_icon from '../../assets/mail-icon.png';
// import phone_icon from '../../assets/phone-icon.png';
// import location_icon from '../../assets/location-icon.png';
// import white_arrow from '../../assets/white-arrow.png';

// const ContactUs = () => {
//     const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "f3d5e290-9baa-45b5-9b05-9d6fb8c93c7b");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="name" required/>
//         <input type="email" name="email" required/>
//         <textarea name="message" required></textarea>

//         <button type="submit">Submit Form</button>

//       </form>
//       <span>{result}</span>

//     </div>
//   )

//     return (
//         <div className="contact">
//             <div className="contact-col">
//                 <h3>Send Us a Message <img src={msg_icon} alt="Message Icon" /></h3>
//                 <p>
//                     Feel free to reach out to us with any questions, inquiries, or feedback you may have. We are here to assist you and provide the information you need. Whether you want to learn more about our programs, campus facilities, or have any other queries, we would love to hear from you. Please fill out the form below or contact us through the provided channels, and we will get back to you as soon as possible.
//                 </p>
//                 <ul>
//                     <li><img src={mail_icon} alt="" />Contact@giridhar.com</li>
//                     <li><img src={phone_icon} alt="" />+91 6282073830</li>
//                     <li><img src={location_icon} alt="" />77 massachusetts Ave, Cambridge <br /> MA 02139, united States</li>
//                 </ul>
//             </div>
//             <div className="contact-col">
//                 <form onSubmit={onSubmit}>
//                     <label>Your name</label>
//                     <input type="text" name="name" placeholder="Enter your name" required/>
//                     <label>Phone Number</label>
//                     <input type="tel" name="phone" placeholder="enter your mobile number" required/>
//                     <label>Write your message here</label>
//                     <textarea name="message" rows="6" placeholder="enter your message" required></textarea>
//                     <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
//                 </form>
//                 <span>{result}</span>
//             </div>
//         </div>
//     )
// }
// export default ContactUs;
import React from "react";
import "./ContactUs.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "f3d5e290-9baa-45b5-9b05-9d6fb8c93c7b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      {/* LEFT SIDE */}
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out to us with any questions, inquiries, or feedback.
          We are here to assist you and provide the information you need.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@giridhar.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 6282073830
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" required />

          <label>Phone Number</label>
          <input type="tel" name="phoneNo" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" required />

          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactUs;
