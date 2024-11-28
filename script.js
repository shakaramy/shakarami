const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.querySelector('.background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const dots = [];
for (let i = 0; i < 100; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
    });
}

function updateDots() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.x > canvas.width || dot.x < 0) dot.speedX *= -1;
        if (dot.y > canvas.height || dot.y < 0) dot.speedY *= -1;

        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
    });

    requestAnimationFrame(updateDots);
}

canvas.addEventListener('mousemove', (e) => {
    dots.forEach(dot => {
        const dx = dot.x - e.clientX;
        const dy = dot.y - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        const speed = 3;

        if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            dot.speedX += Math.cos(angle) * speed / distance;
            dot.speedY += Math.sin(angle) * speed / distance;
        }
    });
});

updateDots();

// نمایش اطلاعات کاربر
function displayVisitorInfo() {
    const visitorInfo = document.getElementById('visitor-info');
    
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const currentYear = new Date().getFullYear();
            visitorInfo.innerHTML = `آدرس آی پی شما : ${data.ip} | © ${currentYear} | کد نویسی شده توسط : شاکرمی`;
        })
        .catch(error => {
            visitorInfo.innerHTML = 'امکان دریافت اطلاعات کاربر وجود ندارد';
        });
}

displayVisitorInfo();
