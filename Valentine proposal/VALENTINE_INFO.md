# Valentine's Proposal Website 💖

## Features

### Page 1: The Proposal
- Beautiful pink animated background with floating hearts
- Asks "Peace Angel" to be your Valentine
- **Yes Button**: Takes her to page 2 with white roses and plays music
- **No Button**: Has a funny escape behavior - it moves away whenever she tries to hover or click it!
  - After several attempts, the Yes button grows bigger
  - The No button text changes to funny messages

### Page 2: White Roses
- Beautiful white roses with the same pink animated background
- Elegant flower animations
- A "Next" button appears after 3 seconds to continue to the final message

### Page 3: Love Message
- Your heartfelt message in a beautiful frame with animated hearts
- The complete message you wrote to Peace Angel

## Music Setup

The code includes an audio element, but you'll need to add the actual song "It's You" by Ali Gatie. 

**To add the song:**
1. Download the MP3 file of "It's You" by Ali Gatie
2. Place it in the FLOWERS folder
3. Update line in index.html:
   ```html
   <audio id="loveAudio" loop>
     <source src="its-you-ali-gatie.mp3" type="audio/mpeg">
   </audio>
   ```
   Change `src` to match your MP3 filename.

## How to Use

1. Open `index.html` in a web browser
2. The first page will appear with the proposal
3. When she clicks "Yes", she'll see the white roses and hear the music
4. Click "Next" to see your beautiful love message

## Note

Modern browsers often block autoplay audio. The music will attempt to play automatically, but if it doesn't work, you might need to click somewhere on the page first to enable audio.

Enjoy your Valentine's proposal! 💕🌹
