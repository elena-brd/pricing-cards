const cardPurple = document.getElementById('card-purple');
const cardOrange = document.getElementById('card-orange');
const cardGreen = document.getElementById('card-green');


cardPurple.addEventListener('mouseover', (e) => {
    e.target.style.borderColor = '#8221f8';
});

cardPurple.addEventListener('mouseleave', (e) => {
    e.target.style.borderColor = ''
});

cardOrange.addEventListener('mouseover', (e) => {
    e.target.style.borderColor = '#eb691e';
});

cardOrange.addEventListener('mouseleave', (e) => {
    e.target.style.borderColor = ''
});

cardGreen.addEventListener('mouseover', (e) => {
    e.target.style.borderColor = '#10b01a';
});

cardGreen.addEventListener('mouseleave', (e) => {
    e.target.style.borderColor = ''
});