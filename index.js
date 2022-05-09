function tick(){
    // Data
    const time = new Date().toLocaleTimeString();
  
    // Template String
    const clockTemplate = `
      <div>
          <span>${time}</span>
      </div>
    `;
  
    // giving the final output to the browser
    document.getElementById("clockEle").innerHTML = clockTemplate;
  }
  
  setInterval(tick, 1000);

