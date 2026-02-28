/**
 * common.js — 全站公共脚本
 * 1. 粒子背景 (可配色, 后台暂停)
 * 2. 汉堡菜单
 *
 * 用法:
 *   <canvas id="particles-canvas"></canvas>
 *   <script src="js/common.js"></script>
 *
 * 自定义颜色 (可选):
 *   <canvas id="particles-canvas"
 *     data-particle-color="59, 130, 246"
 *     data-line-color="139, 92, 246">
 *   </canvas>
 */
(function () {
    // ===== 汉堡菜单 =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        // 点击链接后关闭菜单
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== 粒子背景 =====
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const pColor = canvas.dataset.particleColor || '59, 130, 246';
    const lColor = canvas.dataset.lineColor || '139, 92, 246';

    let particles = [];
    let animationId = null;
    let isVisible = true;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(${pColor}, ${(Math.random() * 0.5 + 0.2).toFixed(2)})`;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(window.innerWidth * window.innerHeight / 10000, 100);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            for (let j = index + 1; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100²=10000, 避免 sqrt
                    const alpha = 1 - Math.sqrt(distSq) / 100;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${lColor}, ${alpha.toFixed(2)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        animationId = requestAnimationFrame(animate);
    }

    // Visibility API: 后台标签暂停动画
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isVisible = false;
            if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
        } else {
            isVisible = true;
            if (!animationId) animate();
        }
    });

    initParticles();
    animate();
})();
