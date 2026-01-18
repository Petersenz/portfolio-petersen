'use client'
import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particleCount = 50;
        let particles = [];
        let animationId;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 3 + 1; 
                this.speedX = (Math.random() - 0.5) * 0.5; 
                this.speedY = Math.random() * 0.25 + 0.25; 
                this.opacity = Math.random() * 0.6 + 0.2;
                this.swing = Math.random() * 0.05; 
                this.swingStep = Math.random() * 1000;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }

            update() {

                this.swingStep += this.swing;
                this.x += Math.cos(this.swingStep) * 0.5 + this.speedX;
                this.y += this.speedY;

                if (this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;

                this.draw();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => p.update());
            animationId = requestAnimationFrame(animate);
        }

        createParticles();
        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className='fixed top-0 left-0 w-full h-full -z-10'
        />
    );
}

export default ParticlesBackground
