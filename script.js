/*
Simple Script.js

* Smooth scroll
* Active nav highlight
* Optional small interactions
  */

// ===== Smooth Scroll =====
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();

```
const targetId = link.getAttribute('href');
const target = document.querySelector(targetId);

if (target) {
  target.scrollIntoView({
    behavior: 'smooth'
  });
}
```

});
});

// ===== Active Nav Highlight =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (scrollY >= sectionTop) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});

// ===== Optional: console signature (biar ada personality dikit 😄) =====
console.log("Welcome 👋");
