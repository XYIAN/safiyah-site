'use client';

import React, { useRef, useEffect } from 'react';

// Simple particles implementation (customizable for Magic UI style)
const PURPLE_COLORS = ['#b19cd9', '#a25afd', '#c4a8e0', '#ffb3d9', '#d1b3ff', '#e0bbff'];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
  alpha: number;
}

export default function ParticlesOverlay({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function createParticles() {
      particles.current = Array.from({ length: count }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        r: randomBetween(1.5, 4),
        dx: randomBetween(-0.2, 0.2),
        dy: randomBetween(0.1, 0.4),
        color: PURPLE_COLORS[Math.floor(Math.random() * PURPLE_COLORS.length)],
        alpha: randomBetween(0.5, 0.9),
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y > height + 10) p.y = -10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      }
      animationId = requestAnimationFrame(draw);
    }

    createParticles();
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
      createParticles();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}
