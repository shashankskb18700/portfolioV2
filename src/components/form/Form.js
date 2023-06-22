import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const notify = () => toast("Email sent");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tk1xqfw",
        "template_37jsv5f",
        form.current,
        "mOVLw4IsqnD9DGzME"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="viewer-details regularInp">
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div className="viewer-details regularInp">
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div className="viewer-details textarea">
        <label>Message</label>
        <textarea name="message" rows="3" />
      </div>
      <input type="submit" value="Send" className="send" onClick={notify} />

      <ToastContainer className="toast" />
    </form>
  );
};

export default Form;

// const Form = () => {
//   return (
//     <div className="contact-form">
//       <div className="viewer-details">
//         <div>Name</div>
//         <input name="name" type="text" placeholder="name"></input>
//       </div>

//       <div className="viewer-details">
//         <div>Email</div>
//         <input name="email" type="text" placeholder="jhondoe@email.com"></input>
//       </div>
//       <div className="viewer-details">
//         <div>Message</div>
//         <input name="message" type="text" placeholder="message"></input>
//       </div>
//     </div>
//   );
// };

// export default Form;
