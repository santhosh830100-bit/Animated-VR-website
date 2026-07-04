// ScrollSequence class to manage independent scroll animation sequences
class ScrollSequence {
  constructor(options) {
    this.canvas = document.getElementById(options.canvasId);
    this.context = this.canvas.getContext("2d");
    this.container = document.querySelector(options.containerSelector);
    
    this.totalFrames = options.totalFrames;
    this.getFramePath = options.getFramePath;
    
    this.images = [];
    this.currentScroll = 0;
    this.targetScroll = 0;
    this.lerpEase = 0.15; // Increased smoothness ease coefficient for responsiveness
    
    this.imageWidth = 1280;
    this.imageHeight = 720;
    this.imageRatio = this.imageWidth / this.imageHeight;
    this.offsetTop = 0;
  }
  
  // Re-calculate absolute document-level offset top of the container
  updateOffsetTop() {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.offsetTop = rect.top + scrollTop;
  }
  
  // Handles canvas resizing for High-DPI screens without subpixel blur
  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(window.innerWidth * dpr);
    this.canvas.height = Math.round(window.innerHeight * dpr);
    
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    
    this.updateOffsetTop();
    this.render();
  }
  
  // Preloads images and triggers callback upon each load
  preload(onImageLoaded) {
    for (let i = 0; i < this.totalFrames; i++) {
      const img = new Image();
      img.src = this.getFramePath(i);
      img.onload = () => {
        onImageLoaded();
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${i} at path: ${img.src}`);
        onImageLoaded();
      };
      this.images[i] = img;
    }
  }
  
  // Renders the appropriate frame based on current scroll position
  render() {
    const maxScroll = this.container.offsetHeight - window.innerHeight;
    
    // Calculate raw progress (0.0 to 1.0)
    const scrollFraction = maxScroll > 0 ? Math.max(0, Math.min(1, this.currentScroll / maxScroll)) : 0;
    
    // Map progress to frame index
    let frameIndex = Math.floor(scrollFraction * (this.totalFrames - 1));
    frameIndex = Math.max(0, Math.min(this.totalFrames - 1, frameIndex));
    
    const img = this.images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    const canvasWidth = this.canvas.width;
    const canvasHeight = this.canvas.height;
    
    // Clear canvas
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Compute cover scaling values
    const canvasRatio = canvasWidth / canvasHeight;
    let drawWidth, drawHeight, drawX, drawY;
    
    if (canvasRatio > this.imageRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / this.imageRatio;
      drawX = 0;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * this.imageRatio;
      drawHeight = canvasHeight;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = 0;
    }
    
    // Prevent subpixel scaling blur
    drawWidth = Math.round(drawWidth);
    drawHeight = Math.round(drawHeight);
    drawX = Math.round(drawX);
    drawY = Math.round(drawY);
    
    // Configure high-quality image smoothing
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = "high";
    
    this.context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }
  
  // Interpolates target scroll relative to container bounds
  animate(globalScrollY) {
    this.targetScroll = globalScrollY - this.offsetTop;
    
    const diff = this.targetScroll - this.currentScroll;
    
    if (Math.abs(diff) > 0.05) {
      this.currentScroll += diff * this.lerpEase;
      this.render();
    } else if (this.currentScroll !== this.targetScroll) {
      this.currentScroll = this.targetScroll;
      this.render();
    }
  }
}

// Preloader & sequence manager elements
const loader = document.getElementById("loader");
const progressText = document.getElementById("progress");
let totalLoaded = 0;
const totalImages = 291; // 87 (seq 1) + 204 (seq 2)

// Frame mapping for Sequence 1 (ezgif-4657b26a95f87208-jpg)
const getFramePath1 = (index) => {
  const fileNumber = index + 1; // 0-indexed index to 1-indexed filename
  const paddedIndex = fileNumber.toString().padStart(3, "0");
  return `ezgif-4657b26a95f87208-jpg/ezgif-frame-${paddedIndex}.jpg`;
};

// Discontinuous frames mapping for Sequence 2 (ezgif-3c22d2419c9ba3ac-jpg)
const seq2Indices = [];
for (let i = 6; i <= 149; i++) seq2Indices.push(i);
for (let i = 155; i <= 178; i++) seq2Indices.push(i);
for (let i = 184; i <= 218; i++) seq2Indices.push(i);
seq2Indices.push(229);

const getFramePath2 = (index) => {
  const fileNumber = seq2Indices[index];
  const paddedIndex = fileNumber.toString().padStart(3, "0");
  return `ezgif-3c22d2419c9ba3ac-jpg/ezgif-frame-${paddedIndex}.jpg`;
};

// Instantiate sequences
const seq1 = new ScrollSequence({
  canvasId: "animation-canvas-1",
  containerSelector: ".scroll-container.seq-1",
  totalFrames: 87,
  getFramePath: getFramePath1
});

const seq2 = new ScrollSequence({
  canvasId: "animation-canvas-2",
  containerSelector: ".scroll-container.seq-2",
  totalFrames: 204,
  getFramePath: getFramePath2
});

const sequences = [seq1, seq2];

// Callback updated when any image of either sequence finishes loading
function onImageLoaded() {
  totalLoaded++;
  const percent = Math.floor((totalLoaded / totalImages) * 100);
  progressText.textContent = `${percent}%`;
  
  if (totalLoaded === totalImages) {
    onPreloadComplete();
  }
}

// Triggers once all 324 images are loaded
function onPreloadComplete() {
  loader.classList.add("fade-out");
  
  // Set up layouts and draw initial frames
  resizeAll();
  
  // Listen for resize and global scroll events
  window.addEventListener("resize", resizeAll);
  
  // Start drawing frames loop
  requestAnimationFrame(animateLoop);
}

function resizeAll() {
  sequences.forEach(seq => seq.resize());
}

function animateLoop() {
  const globalScrollY = window.scrollY || document.documentElement.scrollTop;
  sequences.forEach(seq => seq.animate(globalScrollY));
  requestAnimationFrame(animateLoop);
}

// Start preloading process
sequences.forEach(seq => seq.preload(onImageLoaded));

// Intersection Observer for scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
