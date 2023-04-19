import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      // console.log(nameRef.current.value);
      // console.log(emailRef.current.value);
      // console.log(subjectRef.current.value);
      // console.log(messageRef.current.value);
      setMessage(
        "Message not sent, please make sure all fields above are filled out correctly"
      );
    } else {
      setMessage("Sending message...");
      emailjs
        .sendForm(
          "service_cy06yzi",
          "template_fcdw21x",
          e.target,
          "mDbXf0TtpYl_kESzU"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage("Thank you!, Your message has been sent");
          },
          (error) => {
            console.log(error.text);
            setMessage(
              "Our apologies, your message was not sent. This service is temporarily unavailable"
            );
          }
        );
    }

    e.target.reset();
  }

  const messageClass =
    message === "Thank you!, Your message has been sent"
      ? classes.successfulMessage
      : classes.unsuccessfulMessage;

  return (
    <>
      <div className="d-flex justify-content-center">
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              name="name"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              name="email"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <textarea
              ref={messageRef}
              class="form-control"
              placeholder="Your message"
              name="message"
              rows="10"
              cols="30"
            ></textarea>
          </div>
          <button class="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
      <p className={messageClass}>{message}</p>
    </>
  );
};

export default Contact;
