import {useMatcapTexture, Center ,Text3D, Stage, OrbitControls } from '@react-three/drei'
import { Level } from './Level.js'
import useGame from './stores/useGame.js'
import Player from './Player.js'
import {useMemo, useEffect, useRef } from 'react'
import { MeshMatcapMaterial } from 'three'
import Lights from './Lights.js'
import {InstancedRigidBodies ,RigidBody, Physics } from '@react-three/rapier'
import * as THREE from 'three'
import Back from './Back.js'
export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)

    const ref = useRef()
   
    return <>
     
     <color args={ [ '#bdedfc' ] } attach="background" />

     <OrbitControls  
     minAzimuthAngle={ -Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
     minPolarAngle={Math.PI / 4}
     maxPolarAngle={Math.PI - Math.PI/ 2 } 
     ref={ref} 
     target={[0, 1, 0]}
     />
    <Physics  >
        <Level  count={ blocksCount } seed={ blocksSeed } />
        <Lights />
        <Player />
    </Physics>
    <Back/>
    
       </>
      
  }