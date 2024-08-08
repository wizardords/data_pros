// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// Optional: Custom Scroll Events
scroll.on('scroll', (event) => {
    console.log('Scrolling:', event.scroll.y);
});
