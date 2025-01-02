import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import AboutImg from '../../Assets/images/about-img.jpg'
import PurbleBtn from '../PurpleBtn/PurbleBtn';


function AboutSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='about'>
        <div className='container'>
            <div className='flex-column-reservse flex-lg-row row'>
                <motion.div
                className='col-lg-6 d-flex justify-content-center'
                initial={{opacity:0, x: -300}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1}}>
                    <img className='img-fluid w-100 mt-4 mt-lg-0 rounded-4' src={AboutImg} alt="about us img" />
                </motion.div>
                <motion.div
                className='col-lg-6 d-flex flex-column justify-content-center align-items-start'
                initial={{opacity:0, x: 400}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1}}>
                    <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>us</span></h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum sequi animi. Iste nisi perspiciatis adipisci et cum perferendis culpa. Reiciendis esse pariatur, facilis molestiae dolor totam dolore est reprehenderit quasi quos blanditiis sint similique assumenda nam fugit obcaecati facere! Saepe possimus quod, qui dolorem a explicabo est porro modi eveniet consequatur! Fuga, delectus nihil?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam atque et. Totam aliquid soluta impedit ex, molestiae ea debitis nisi consequatur dicta mollitia at, dolores architecto incidunt suscipit. Quasi fuga dignissimos amet quos molestias veritatis totam placeat? Provident, facere.</p>
                    <PurbleBtn btnTitle='More about us'/>
                   
                     </motion.div>
            </div>
        </div>

    </div>
  )
}

export default AboutSection;