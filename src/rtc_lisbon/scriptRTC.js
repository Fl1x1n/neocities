function updateClock() {
  const clockElement = document.getElementById('clock');
  const lisbonTime = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Lisbon',
    hour: '2-digit',
    minute: '2-digit',
  });
  clockElement.textContent = lisbonTime;
}

updateClock(); 
setInterval(updateClock, 59* 1000); 


