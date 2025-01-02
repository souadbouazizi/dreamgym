import React from 'react';
import './TrainSection.css';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function TrainSection() {
  return (
    <div className='train-section py-5 position-relative'>
        <motion.div className='bg-shape position-absolute '
        initial={{opacity: 0, x: -300}}
        whileInView={{opacity: 1, x:0}}
        transition={{duration: 1}}>

        </motion.div>
        <Container>
            <div className='row'>
                <div className='col-md-4 z-2 text-white'>
                    <h2 className='text-start text-capitalize'>Let's train together</h2>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi asperiores vel esse sequi quaerat perspiciatis ex quidem recusandae quis, consectetur velit ea commodi autem.</p>
               <div className='d-flex'>
                    <h5 className='text-capitalize fw-semibold text-nowrap'>Call us:</h5>
                    <a href="tel:+216 56285557" className='mx-2 text-decoration-none h5'>+216 56 285 557</a>
               </div>
               
        
               
                </div>
            </div>
        </Container>
    </div>
  )
}

export default TrainSection