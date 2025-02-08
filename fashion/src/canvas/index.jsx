import React from 'react'
import { Canvas } from '@react-three/fiber'
import {Environment,Center} from '@react-three/fiber'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import Camerarig from './Camerarig'


const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>

      <Camerarig>
        <BackDrop/>
        <Center>
          <Shirt/>
        </Center>
      </Camerarig>
    </Canvas>
  )
}

export default CanvasModel
/*Kenneth is testing github*/ 