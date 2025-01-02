import React from 'react';
import './JoinSection.css';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import PurbleBtn from '../PurpleBtn/PurbleBtn';

function JoinSection() {
  return (
    <div className='join-section py-5 text-light'>
        <Container className='h-100'>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                <motion.h2
                className='section-title text-capitalise fw-bold mb-3'
                initial={{opacity:0, x:-300}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1}}
                >
                    <span className='text-purple'>Shape</span> your body
                </motion.h2>
                <motion.p className='text-center w-75'
                 initial={{opacity:0, x:300}}
                 whileInView={{opacity:1, x:0}}
                 transition={{duration:1}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime omnis tempore maiores reiciendis at illo fuga temporibus provident soluta alias, amet culpa, libero nam perspiciatis magnam dolorum corporis iusto dolor? Rem expedita magni id ratione quas explicabo. Fugiat, voluptatum assumenda. Assumenda iure optio excepturi corporis maiores quis dicta expedita.

                </motion.p>
                <motion.p className='text-center w-75'
                 initial={{opacity:0, x:-300}}
                 whileInView={{opacity:1, x:0}}
                 transition={{duration:1}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil in aperiam similique totam at quas incidunt odio optio illum, quaerat tempora ullam, delectus voluptates neque ea sit mollitia hic.
                </motion.p>
                <motion.div
                     initial={{opacity:0, x: 300}}
                     whileInView={{opacity:1, x:0}}
                     transition={{duration:1}}
                >
                    <PurbleBtn btnTitle='Join now'/>
                </motion.div>
            </div>
        </Container>
    </div>
  )
}

export default JoinSection;