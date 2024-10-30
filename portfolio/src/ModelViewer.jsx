import React, {Suspense, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css';


const Model = ({scale}) => {
    const { scene } = useGLTF('./public/scene.gltf');

    useEffect(() => {
        scene.scale.set(scale,scale,scale);
    }, [scene, scale]);

    return <primitive object={scene} />;
};

const ModelViewer = () => {
    return (
        <div className={"adjustModel"} >
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model scale={0.5}/>
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    );
};



export default ModelViewer;
