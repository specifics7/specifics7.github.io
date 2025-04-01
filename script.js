document.getElementById("shoot-btn").addEventListener("click", () => {
    const sky = document.getElementById("sky");
    const star = document.createElement("div");
    star.classList.add("shooting-star");
  
    star.style.top = Math.random() * 100 + "px";
    star.style.left = Math.random() * 100 + "px";
  
    sky.appendChild(star);
  
    setTimeout(() => {
      sky.removeChild(star);
    }, 1000);
  });
  