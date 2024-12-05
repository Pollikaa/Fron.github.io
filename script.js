function loadGame(gameId) {
    const audio = document.getElementById('sound');
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    switch (gameId) {
        case 'game1':
            location.href = 'game1.html';
            break;
        case 'game2':
            location.href = 'game2.html';
            break;
        case 'game3':
            location.href = 'game3.html';
            break;
        case 'game4':
            location.href = 'game4.html';
            break;
        default:
            alert('Гра не знайдена');
    }
}