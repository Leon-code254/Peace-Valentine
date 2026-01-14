
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const loveAudio = document.getElementById('loveAudio');

// Track button position
let clickCount = 0;
const funnyMessages = [
  "No", "Are you sure? 🥺", "Really? 💔", "Think again! 😢",
  "Please reconsider 🙏", "Don't do this 😭", "My heart! 💔",
  "You're breaking my heart 😿", "Come on now! 😅", "Not funny! 🥲",
  "Please? 🥺🥺", "I'm begging you! 😩", "Why? 😭😭",
  "One more chance? 💕", "You're killing me! 😵", "Seriously? 🤨",
  "Just say yes! 💖", "Think of us! 💑", "Please baby! 😘", "YES is better! 💕"
];

// Yes button - Go to page 2 and play music
yesBtn.addEventListener('click', () => {
  page1.classList.remove('active');
  
  // Small delay to ensure smooth transition
  setTimeout(() => {
    page2.classList.add('active');
  }, 100);
  
  // Show next button after 3 seconds
  setTimeout(() => {
    nextBtn.classList.remove('hidden');
  }, 3500);
  
  // Play music
  loveAudio.play().catch(err => {
    console.log('Audio play failed:', err);
  });
});

// Next button - Go to page 3 (stays visible until manually navigated away)
nextBtn.addEventListener('click', () => {
  page2.classList.remove('active');
  
  // Small delay to ensure smooth transition
  setTimeout(() => {
    page3.classList.add('active');
    nextBtn.classList.add('hidden');
  }, 100);
});

// Back button - Return to page 2 (flowers)
backBtn.addEventListener('click', () => {
  page3.classList.remove('active');
  
  // Small delay to ensure smooth transition
  setTimeout(() => {
    page2.classList.add('active');
    nextBtn.classList.remove('hidden');
  }, 100);
});

// Function to move No button to random position
function moveNoButton() {
  // Update click count
  clickCount++;
  
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  
  // Calculate safe random position (with padding from edges)
  const padding = 50;
  const maxX = viewportWidth - btnWidth - padding;
  const maxY = viewportHeight - btnHeight - padding;
  const minX = padding;
  const minY = padding;
  
  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;
  
  // Move the button
  noBtn.style.position = 'fixed';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
  noBtn.style.transition = 'all 0.3s ease';
  
  // Change button text with funny messages
  if (clickCount < funnyMessages.length) {
    noBtn.textContent = funnyMessages[clickCount];
  } else {
    noBtn.textContent = funnyMessages[funnyMessages.length - 1];
  }
  
  // Make Yes button bigger after a few attempts
  if (clickCount > 3) {
    const scale = 1 + (clickCount * 0.08);
    yesBtn.style.transform = 'scale(' + Math.min(scale, 2.5) + ')';
    yesBtn.style.transition = 'transform 0.3s ease';
  }
}

// No button click event - moves away and shows funny comments
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

// Also move on hover for extra fun
noBtn.addEventListener('mouseenter', () => {
  if (clickCount > 0) { // Only start moving on hover after first click
    moveNoButton();
  }
});

