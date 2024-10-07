class DataLogger{
    constructor(buttonId, cardContainerId, clearButton, logCountId) {

  
        this.logButton = document.getElementById(buttonId);
        this.cardContainerId = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButton);
        this.logButton = document.getElementById(logCountId);
        this.loggedData = [];
    
        this.logButton.addEventListener('click', () => this.loggedData());
        this.clearButton.addEventListener('click', () => this.clearButton());
    
    }

    
    loggedData() {
    const timestamp = new Date().toLocaleDateString();
    this.loggedData.push(timestamp);
    this.updateCardConatianer();
}
   
    clearLogs(){
    this.loggedData = [];
    this.updateCardConatianer();

}
    
updateCardContainer() {
    this.cardContainerId.innerHTML = '';
    this.loggedData.forEach(data => {

        const card = document.createElement('div');
        card.className = 'card mb-2';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Logged Data</h5>
                <p class="card-text">${data}</p>
            </div>
        `;
        this.cardContainerId.appendChild(card); 
    });

    this.displayLogCount();
} 
     
    countLogs() {
    return this.loggedData.length; 
}
  
   
    displayLogCount() {
    const logCount = this.countLogs();
    this.logCountElement.innerHTML = logCount;
}

}

document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('LogButton', 'cardContainer', 'clearButton', 'logCount');
});




    