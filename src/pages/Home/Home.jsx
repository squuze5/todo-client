import React from 'react';
import { useSpring, animated } from 'react-spring'

// Default style / Image
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        return (
            <>
                <Navbar />
                <div className="home-screen">

                    <div className="home-content">
                        <div className="main-text">
                            <h3>Board app</h3>
                            <h3>Assistant to every day</h3>
                        </div>

                        <div className="sub-text">
                            <p>This application will help you manage to do all your daily activities very easily.</p>
                        </div>

                        <div className="buttons-block">
                            <button className="btn-start">Get Started</button>
                            <button className="btn-content">Contact Us</button>
                        </div>
                    </div>

                    <animated.div 
                        className="home-image"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    />

                    <div className="bg-circle"> </div>
                </div>
            </>
        )
    }
export default Home;