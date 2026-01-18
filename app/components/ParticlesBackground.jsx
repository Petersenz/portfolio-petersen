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

        const particleCount = 150;
        let particles = [];
        let animationId;

        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.3;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
                ctx.fill();
            }

            update(){
                this.x += this.speedX;
                this.y += this.speedY;

                if(this.x < 0) this.x = canvas.width;
                if(this.x > canvas.width) this.x = 0;
                if(this.y < 0) this.y = canvas.height;
                if(this.y > canvas.height) this.y = 0;
                
                this.draw();
            }
        }

        function createParticles(){
            particles = [];
            for(let i = 0; i < particleCount; i++){
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for(let i = 0; i < particles.length; i++) {
                for(let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if(distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function handleResize(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => p.update());
            connectParticles();
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
