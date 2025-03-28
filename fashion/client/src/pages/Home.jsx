import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import {useSnapshot} from 'valtio';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import state from '../store';
import Login from './Login';
const Home = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate();


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header className='flex gap-10'>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain'/>
            <CustomButton
            type='filled'
            title='Login/Sign Up'
            handleClick={()=>navigate('/login')}
            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
          />
          </motion.header>
         <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>  
                <h1 className='head-text'>
                  LETS'S <br className='xl:block hidden'/> DO IT
                </h1>
            </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
        <p className='max-w-md font-normal text-white text-base'>Create your unique and exclusive shirt with our brand-new 3D customiztion tool <strong>Unleash your imagination</strong>{" "} and define your own style</p>
          <CustomButton
            type='filled'
            title='Customize it'
            handleClick={()=> state.intro=false}
            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
          />
          </motion.div>
          </motion.div>
        </motion.section>

      )}
    </AnimatePresence>
  )
}

export default Home
