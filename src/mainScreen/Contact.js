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
      setMessage("Sending message...")
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
      <div className={classes.fullElement}>
        <form onSubmit={sendEmail}>
          <div>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              name="name"
            ></input>
          </div>
          <div>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              name="email"
            ></input>
          </div>
          <div>
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              name="subject"
            ></input>
          </div>
          <div>
            <textarea
              ref={messageRef}
              placeholder="Your message"
              name="message"
              cols="40"
              rows="20"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              placeholder="Name"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
      <p className={messageClass}>{message}</p>
    </>
  );
};

export default Contact;
