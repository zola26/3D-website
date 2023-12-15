import * as THREE from 'three'
import {InstancedRigidBodies , CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshMatcapMaterial } from 'three'
import {useMatcapTexture, Float, Center ,Text3D, useGLTF } from '@react-three/drei'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: '#222222', metalness: 0, roughness: 0 })
const floor2Material = new THREE.MeshStandardMaterial({ color: '#222222', metalness: 0, roughness: 0 })
const wallMaterial = new THREE.MeshStandardMaterial({ color: '#887777', metalness: 0, roughness: 0 })

export function BlockStart({ position = [ 0, -3, 0 ] })
{
    const hamburger = useGLTF('/office_chair.glb')

    hamburger.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
            //dron
    // const drone= useGLTF('/drone.glb')
    // drone.scene.children.forEach((mesh) =>
    // {
    //     mesh.castShadow = true
    // })        



            //computer
    const desktop= useGLTF('/desktop_computer.glb')
    desktop.scene.children.forEach((mesh) =>
     {
        mesh.castShadow = true
     })       
    const laptop= useGLTF('/laptop.glb')
    laptop.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const laptop1= useGLTF('/laptop1.glb')

    laptop1.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const laptop2= useGLTF('/laptop2.glb')

    laptop2.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const laptop3= useGLTF('/laptop3.glb')

    laptop3.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })

     
               //table
    const table = useGLTF('/table.glb')

    table.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const table1 = useGLTF('/table1.glb')

    table1.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const table2 = useGLTF('/table2.glb')

    table2.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const table3 = useGLTF('/table3.glb')

    table3.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const table4 = useGLTF('/table4.glb')

    table4.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })

         

               // chairs
    const chairs = useGLTF('/chairs0.glb')

    chairs.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const chars1 = useGLTF('/chars1.glb')

    chars1.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    const chairs2 = useGLTF('/chairs2.glb')

    chairs2.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    // const chairs3 = useGLTF('/table4.glb')

    // chairs3.scene.children.forEach((mesh) =>
    // {
    //     mesh.castShadow = true
    // })
    const [matcapTexture] = useMatcapTexture('463F37_ACCFBB_818B78_91A494', 256)
    const cubes = useRef()
    const cubeTransforms = useMemo(() =>
    {
        const positions = []
        const rotations = []
        const scales = []

        for(let i = 0; i < 100; i++)
        {
            positions.push([ (Math.random() - 0.5) * 8, 6 + i * 0.2, (Math.random() - 0.5) * 8 ])
            rotations.push([ Math.random(), Math.random(), Math.random() ])

            const scale = 0.3
            scales.push([ scale, scale, scale ])
        }

        return { positions, rotations, scales }
    }, [])
    return <group position={ position }>
      
    
      <RigidBody type="fixed" colliders="hull" position={ [ -1,0.7,-2.3] } rotation={[0,0,0]} restitution={ 0.2 } friction={ 0 }>
          <Text3D font=" ./font/he.typeface.json"
            size={ 0.2}
        
            height={ 0.2}
            curveSegments={ 12 }
            bevelEnabled
            lineHeight={ 20}
            bevelThickness={ 0.02 }
            // position={ [ 0, 4, 5.8] }
            bevelSize={ 0.01 }
            bevelOffset={ 0}
            bevelSegments={ 5}
>
                 BOAZ
                 <meshMatcapMaterial matcap = {matcapTexture}/>
          </Text3D>
          </RigidBody>
          <RigidBody type="fixed" colliders="hull" position={ [ -1,0.5,-2.3] } rotation={[0,0,0]} restitution={ 0.2 } friction={ 0 }>
          <Text3D font=" ./font/he.typeface.json"
            size={ 0.18}
        
            height={ 0.2}
            curveSegments={ 12 }
            bevelEnabled
            lineHeight={ 20}
            bevelThickness={ 0.02 }
            // position={ [  4,3,6] }
            // rotation={ [  0,0,0] }
            bevelSize={ 0.01 }
            bevelOffset={ 0}
            bevelSegments={ 5}
>
                 BERHANU
                 <meshMatcapMaterial matcap = {matcapTexture}/>
          </Text3D>
          </RigidBody>
    <RigidBody type="fixed" colliders="hull" position={ [ -0.5,0.3,-2.15] } rotation={[0,0,0]} restitution={ 0.2 } friction={ 0 }>
        
        <Text3D font="./font/he.typeface.json"
            size={ 0.1}
        
            height={ 0.05}
            curveSegments={ 12 }
            bevelEnabled
            
            bevelThickness={ 0.02 }
            // position={ [ 1, 1.5, 8] }
            // rotation={ [  0,0,0] }
            bevelSize={ 0.01 }
            bevelOffset={ 0}
            bevelSegments={ 5}
>
                 DIRECTOR
                 <meshMatcapMaterial matcap = {matcapTexture}/>
          </Text3D>
          
       </RigidBody>
       <RigidBody type="fixed" colliders="hull" position={ [ 0,0.7,0] } rotation={[0,0,0]} restitution={ 0.2 } friction={ 0 }>
        
        <Text3D font="./font/he.typeface.json"
            size={ 0.18}
        
            height={ 0.2}
            curveSegments={ 12 }
            bevelEnabled
            
            bevelThickness={ 0.02 }
            // position={ [ 1, 1.5, 8] }
            // rotation={ [  0,0,0] }
            bevelSize={ 0.01 }
            bevelOffset={ 0}
            bevelSegments={ 5}
>
                 JIT AI
                 <meshMatcapMaterial matcap = {matcapTexture}/>
          </Text3D>
          
       </RigidBody>
       <RigidBody type="fixed" colliders="hull" position={ [ 0,0.5,0] } rotation={[0,0,0]} restitution={ 0.2 } friction={ 0 }>
        
        <Text3D font="./font/he.typeface.json"
            size={ 0.18}
        
            height={ 0.2}
            curveSegments={ 12 }
            bevelEnabled
            
            bevelThickness={ 0.02 }
            // position={ [ 1, 1.5, 8] }
            // rotation={ [  0,0,0] }
            bevelSize={ 0.01 }
            bevelOffset={ 0}
            bevelSegments={ 5}
>
                 CENTER
                 <meshMatcapMaterial matcap = {matcapTexture}/>
          </Text3D>
          
       </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [ -2.5, 0, -3.1] } rotation={[-1.5,1.5,1.5]} restitution={ 0.2 } friction={ 0 }>
         < primitive object={ hamburger.scene } scale={ 0.01 } />
        </RigidBody>

                //drone
                {/* < RigidBody type="fixed" colliders="hull" position={ [ -0.1,0.7,-10] } rotation={[0,-3.2,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ drone.scene } scale={ 0.0015 } />
        </RigidBody> */}
         
                 //computer
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0.9,-2.5] } rotation={[0,-1.5,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ desktop.scene } scale={ 0.4 } />
        </RigidBody>       
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0.75,-3.3] } rotation={[0,-1.3,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ laptop.scene } scale={ 0.002 } />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0.75,-8] } rotation={[0,-1.5,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ laptop1.scene } scale={ 0.002 } />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0.75,-16.3] } rotation={[0,-1.5,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ laptop2.scene } scale={ 0.002 } />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [ 0.4 ,0.75,-20.8] } rotation={[0,-3,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ laptop3.scene } scale={ 0.002 } />
        </RigidBody>



                    //table
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0,-3] } rotation={[0,1.5,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ table.scene } scale={ 0.001 } />
        </RigidBody>
       
        <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0,-8] } rotation={[0,1.5,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ table1.scene } scale={ 0.001 } />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [ 0,0,-10] } rotation={[0,3.1,0]} restitution={ 0.2 } friction={ 0 }>
        <primitive object={ table2.scene } scale={ 0.001 } />
       </RigidBody>
       <RigidBody type="fixed" colliders="hull" position={ [ -1.7,0,-16.5] } rotation={[0,1.5,0]} restitution={ 0.2 } friction={ 0 }>
       <primitive object={ table3.scene } scale={ 0.001 } />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull" position={ [ 0.34,0,-21] } rotation={[0,3.1,0]} restitution={ 0.2 } friction={ 0 }>
      <primitive object={ table4.scene } scale={ 0.001 } />
     </RigidBody>
     <RigidBody type="fixed" colliders="hull" position={ [ -3.5,0,-16] } rotation={[0,3.1,0]} restitution={ 0.2 } friction={ 0 }>
         <primitive object={ chairs.scene } scale={ 0.02 } />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull" position={ [  2.6,0,-12] } rotation={[0,4.6,0]} restitution={ 0.2 } friction={ 0 }>
        <primitive object={ chars1.scene } scale={ 0.02  } />
       </RigidBody>
       <RigidBody type="fixed" colliders="hull" position={ [  2.6,0,-3.5] } rotation={[0,4.6,0]} restitution={ 0.2 } friction={ 0 }>
       <primitive object={ chairs2.scene } scale={ 0.02 } />
      </RigidBody>
      {/* <RigidBody type="fixed" colliders="hull" position={ [ -0.7,0,-20] } rotation={[0,1.5,0]} restitution={ 0.2 } friction={ 0 }>
      <primitive object={ chairs3.scene } scale={ 0.0011 } />
     </RigidBody> */}
       
        <mesh geometry={ boxGeometry } material={ floor1Material } position={ [ 0, - 0.1, 0 ] } scale={ [ 6.5, 0.2, 4 ] }  receiveShadow />
    </group>
}

// export function BlockEnd({ position = [ 0, 0, 0 ] })
// {
   

//     return <group position={ position }>
       
//         <mesh geometry={ boxGeometry } material={ floor1Material } position={ [ 0, -0.1, 0 ] } scale={ [ 6.5, 0.2, 4 ] } receiveShadow />
//         <RigidBody type="fixed" colliders="hull" position={ [ 0, 0.25, 0 ] } restitution={ 0.2 } friction={ 0 }>
        
//         </RigidBody>
//     </group>
// }

export function BlockSpinner({ position = [ 0, 0, 0 ] })
{
    
    return <group position={ position }>
        <mesh geometry={ boxGeometry } material={ floor2Material } position={ [ 0, - 0.1, 0 ] } scale={ [ 6.5, 0.2, 4 ] }  receiveShadow />
       
    </group>
}

export function BlockLimbo({ position = [ 0, 0, 0 ] })
{
  
    return <group position={ position }>
        <mesh geometry={ boxGeometry } material={ floor2Material } position={ [ 0, - 0.1, 0 ] } scale={ [ 6.5, 0.2, 4 ] }  receiveShadow />
      
    </group>
}

export function BlockAxe({ position = [ 0, 0, 0 ] })
{
   
    return <group position={ position }>
        <mesh geometry={ boxGeometry } material={ floor2Material } position={ [ 0, - 0.1, 0 ] } scale={ [ 6.5, 0.2, 4 ] }  receiveShadow />
      
    </group>
}

function Bounds({ length = 1})
{
    return <>
        <RigidBody type="fixed" restitution={ 0.2 } friction={ 0 }>
            <mesh
                position={ [ 3.15, 0.75, - (length * 2) + 14] }
                geometry={ boxGeometry }
                material={ wallMaterial }
                scale={ [ 0.3, 1.5, 2* length ] }
                castShadow
            />
            <mesh
                position={ [ - 3.15, 0.75, - (length * 2) + 14 ] }
                geometry={ boxGeometry }
                material={ wallMaterial }
                scale={ [ 0.3, 1.5, 2* length ] }
                receiveShadow
            />
            <mesh
                position={ [ 0, 0.75, - (length * 3) + 14] }
                geometry={ boxGeometry }
                material={ wallMaterial }
                scale={ [ 6, 1.5, 0.3 ] }
                receiveShadow
            />
            <CuboidCollider
                type="fixed"
                args={ [ 4, 0.1, 2 * length ] }
                position={ [ 0, -0.1, - (length * 2) + 2 ] }
                restitution={ 0.2 }
                friction={ 1 }
            />
        </RigidBody>
    </>
}

export function Level({
    count = 5,
    types = [ BlockSpinner, BlockAxe, BlockLimbo],
    seed = 0
})
{
    const blocks = useMemo(() =>
    {
        const blocks = []

        for(let i = 0; i < count; i++)
        {
            const type = types[ Math.floor(Math.random() * types.length) ]
            blocks.push(type)
        }

        return blocks
    }, [ count, types, seed ])
    
    return <>
        <BlockStart position={ [ 0, 0, 0 ] } />

        { blocks.map((Block, index) => <Block key={ index } position={ [ 0, 0, - (index + 1) * 2] } />) }
        
        {/* <BlockEnd position={ [ 0, 0, - (count + 1) * 4 ] } /> */}

        <Bounds length={ count + 2} />
    </>
}