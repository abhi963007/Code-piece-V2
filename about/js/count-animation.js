document.addEventListener('DOMContentLoaded', function() {
  // Select the number elements
  const numberElements = document.querySelectorAll('.about-number');
  
  // Code-related symbols for different types of counters
  // const codeSymbols = {
  //   languages: ['JS', 'PY', 'TS', 'GO', 'CS', 'RS', 'JV', 'KT', 'SW', 'RB', 'PH', 'CP'],
  //   projects: ['<>', '//', '{}', '[]', '()', '=>', '::'],
  //   lines: ['0101', '1010', 'func', 'var', 'let', 'for', 'if', 'else', 'while', 'class']
  // };
  
  // const codeColors = {
  //   languages: ['#61dafb', '#3572A5', '#2b7489', '#00ADD8', '#178600', '#dea584', '#b07219', '#A97BFF', '#ffac45', '#701516', '#4F5D95', '#f34b7d'],
  //   projects: ['#00ccff', '#33ff99', '#ff6699', '#ffcc00'],
  //   lines: ['#00ff00', '#33cc33', '#00cc00', '#66ff66']
  // };
  
  // Create an intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is in view
      if (entry.isIntersecting) {
        const element = entry.target;
        const codeType = element.getAttribute('data-code-type') || 'default';
        
        // Get the text content and extract the number
        let text = element.textContent.trim();
        let prefix = '';
        let suffix = '';
        let targetNumber = 0;
        let isMillion = false;
        
        // Handle special case for 1M+
        if (text.includes('M')) {
          const parts = text.split('M');
          targetNumber = parseInt(parts[0].trim()) * 1000000;
          isMillion = true;
          if (parts[1].includes('+')) {
            suffix = 'M+';
          } else {
            suffix = 'M';
          }
        }
        // Handle the +10 format
        else if (text.includes('+')) {
          if (text.startsWith('+')) {
            prefix = '+';
            targetNumber = parseInt(text.substring(1));
          } else {
            const parts = text.split('+');
            targetNumber = parseInt(parts[0].trim());
            suffix = '+';
          }
        } else {
          // Just a plain number
          targetNumber = parseInt(text);
        }
        
        // Store original text color
        const originalColor = window.getComputedStyle(element).color;
        
        // Add a subtle highlight effect during animation
        // element.style.textShadow = '0 0 8px rgba(0, 255, 255, 0.7)';
        
        // Add a code-like background effect
        // const codeBackground = document.createElement('div');
        // codeBackground.className = 'code-background';
        // codeBackground.style.position = 'absolute';
        // codeBackground.style.top = '0';
        // codeBackground.style.left = '0';
        // codeBackground.style.width = '100%';
        // codeBackground.style.height = '100%';
        // codeBackground.style.opacity = '0.1';
        // codeBackground.style.zIndex = '-1';
        // codeBackground.style.pointerEvents = 'none';
        // codeBackground.style.fontFamily = 'monospace';
        // codeBackground.style.fontSize = '10px';
        // codeBackground.style.overflow = 'hidden';
        // codeBackground.style.color = '#00ff00';
        
        // Position the element relatively if it's not already
        // const currentPosition = window.getComputedStyle(element).position;
        // if (currentPosition === 'static') {
        //   element.style.position = 'relative';
        // }
        
        // element.appendChild(codeBackground);
        
        // Digital scramble effect variables
        let scrambleInterval;
        let scrambleCount = 0;
        const maxScrambles = 20; // Number of scrambles before settling
        const scrambleDuration = 2000; // Duration of scramble effect in ms
        
        // Function to generate random code-like content
        // const generateCodeBackground = () => {
        //   const symbols = codeSymbols[codeType] || ['0', '1'];
        //   let content = '';
        //   for (let i = 0; i < 50; i++) {
        //     content += symbols[Math.floor(Math.random() * symbols.length)] + ' ';
            if (i % 5 === 4) content += '<br>';
          }
          codeBackground.innerHTML = content;
        };
        
        // Generate initial code background
        // generateCodeBackground();
        
        // Function to format number for display
        const formatNumber = (num) => {
          if (isMillion) {
            return (num / 1000000).toFixed(1).replace('.0', '') + suffix;
          }
          return prefix + Math.floor(num) + suffix;
        };
        
        // Start with scramble effect
        scrambleInterval = setInterval(() => {
          scrambleCount++;
          
          // Update code background
          // if (scrambleCount % 2 === 0) {
          //   generateCodeBackground();
          // }
          
          // Generate random number close to target as we progress
          let randomNum;
          if (scrambleCount < maxScrambles / 2) {
            // Early: completely random
            randomNum = Math.floor(Math.random() * targetNumber * 2);
            if (randomNum > targetNumber * 3) randomNum = targetNumber; // Prevent extreme values
          } else {
            // Later: closer to target
            const closeness = (scrambleCount / maxScrambles) * 0.8; // 0 to 0.8
            const minRange = targetNumber * (1 - (0.5 - closeness));
            const maxRange = targetNumber * (1 + (0.5 - closeness));
            randomNum = Math.floor(minRange + Math.random() * (maxRange - minRange));
          }
          
          // Display the random number
          element.firstChild.textContent = formatNumber(randomNum);
          
          // Add code-like styling during scramble
          // const colors = codeColors[codeType] || ['#00ffcc', '#00ccff'];
          // element.style.color = colors[scrambleCount % colors.length];
          
          // Add code symbols for certain types
          // if (codeType === 'languages' && scrambleCount < maxScrambles - 5) {
          //   const randomLang = codeSymbols.languages[Math.floor(Math.random() * codeSymbols.languages.length)];
          //   element.firstChild.textContent = randomLang + ' ' + formatNumber(randomNum);
          // }
          
          // End scramble effect and start smooth counting
          if (scrambleCount >= maxScrambles) {
            clearInterval(scrambleInterval);
            
            // Reset color
            // element.style.color = originalColor;
            
            // Fade out code background
            // const fadeOut = setInterval(() => {
            //   const currentOpacity = parseFloat(codeBackground.style.opacity);
            //   if (currentOpacity > 0) {
            //     codeBackground.style.opacity = (currentOpacity - 0.01).toString();
            //   } else {
            //     clearInterval(fadeOut);
            //     codeBackground.remove();
            //   }
            // }, 20);
            
            // Start the smooth counting animation
            let startNumber = Math.floor(targetNumber * 0.7); // Start from 70% of target
            const duration = 800; // 0.8 seconds for final count
            const frameDuration = 1000/60; // 60fps
            const totalFrames = Math.round(duration / frameDuration);
            const increment = (targetNumber - startNumber) / totalFrames;
            
            // Animation function for smooth counting
            const animate = () => {
              startNumber += increment;
              if (startNumber < targetNumber) {
                element.firstChild.textContent = formatNumber(startNumber);
                requestAnimationFrame(animate);
              } else {
                // Final state
                element.firstChild.textContent = text;
                
                // Remove effects after a short delay
                // setTimeout(() => {
                //   element.style.textShadow = 'none';
                // }, 300);
              }
            };
            
            // Start smooth counting animation
            animate();
          }
        }, scrambleDuration / maxScrambles);
        
        // Unobserve the element after animation starts
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.5 }); // Trigger when at least 50% of the element is visible
  
  // Observe all number elements
  numberElements.forEach(element => {
    observer.observe(element);
  });
});