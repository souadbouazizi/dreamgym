import React from "react";
import "./ContactForm.css";
import Form from "react-bootstrap/form";
import { motion } from "framer-motion";
import PurbleBtn from "../PurpleBtn/PurbleBtn";

function ContactForm() {
  return (
    <motion.form
      className="contact-form"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">Full name</Form.Label>
        <Form.Control className="rounded-0" type="text"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label className="text-capitalize">Email adress</Form.Label>
      <Form.Control className="rounded-0" type="email"></Form.Control>

      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label className="text-capitalize">your message</Form.Label>
      <Form.Control className="rounded-0" as='textarea' rows={5}></Form.Control>

      </Form.Group>
      <PurbleBtn btnTitle='Submit' />
    </motion.form>
  );
}

export default ContactForm;
