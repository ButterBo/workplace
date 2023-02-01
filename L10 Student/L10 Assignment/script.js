
const template = document.getElementById('template');

tippy('#circle1', {
    content: template.innerHTML,
});

tippy('#circle2', {
    content: ['Bukit Batok Polyclinic', ' Address: 50 Bukit Batok West Avenue 3, Singapore 659164', ' Vaccine Type: Moderna', ' Phone: +65 6343 1122'],
});

tippy('#circle3', {
    content: ['Jurong Polyclinic, Address: 190 Jurong East Avenue 1, Singapore 609788, Vaccine Type: Pfizer, Phone: +65 6765 1122'],
});

tippy('#circle4', {
    content: 'Pioneer Polyclinic, Address: 26 Jurong West Street 61, Singapore 648201, Vaccine Type: Moderna, Phone: +65 6765 1126',
});

tippy('#circle5', {
    content: 'Clementi Polyclinic,  Address: 451 Clementi Avenue 3, Singapore 120451, Vaccine Type: Pfizer, Phone: +65 6343 1125',
});

tippy('#circle6', {
    content: 'Bukit Merah Polyclinic,  Address: 162 Bukit Merah Central Level 4, Singapore 150163, Vaccine Type: Pfizer, Phone: +65 6343 1123',
});

tippy('#circle7', {
    content: 'Outram Polyclinic,  Address: 3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937, Vaccine Type: Comirnaty, Phone: +65 6765 1124',
});

tippy('#circle8', {
    content: 'Marine Parade Polyclinic,  Address: 80 Marine Parade Central, Singapore 440080, Vaccine Type: Pfizer, Phone: +65 6765 1123',
});

tippy('#circle9', {
    content: 'Geylang Polyclinic,  Address: 21 Geylang East Central, Singapore 389707, Vaccine Type: Pfizer, Phone: +65 6343 1126',
});

tippy('#circle10', {
    content: 'Bedok Polyclinic,  Address: 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662, Vaccine Type: Pfizer, Phone: +65 6343 1121',
});

tippy('#circle11', {
    content: 'Pasir Ris Polyclinic,  Address: 1 Pasir Ris Drive 4, Singapore 519457, Vaccine Type: Comirnaty, Phone: +65 6765 1125',
});

tippy('#circle12', {
    content: 'Hougang Polyclinic,  Address: 89 Hougang Avenue 4, Singapore 538829, Vaccine Type: Pfizer, Phone: +65 6765 1121',
});

tippy('#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7', '#circle8', '#circle9', '#circle10', '#circle11', '#circle12', {
    // default
    arrow: true,
});

// Define chart labels
const labels = [
    '1 Dec 2021',
    '2 Dec 2021',
    '3 Dec 2021',
    '4 Dec 2021',
    '5 Dec 2021',
    '6 Dec 2021',
    '7 Dec 2021',
    '8 Dec 2021',
    '9 Dec 2021',
    '10 Dec 2021',
    '11 Dec 2021',
    '12 Dec 2021',
    '13 Dec 2021',
    '14 Dec 2021'
];
// Set labels, colours and data
const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Cases',
        backgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};
// Configure chart
const config = {
    type: 'bar',
    data: data
};
// Render chart in <canvas>
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

var chart = anime({//Stagger
    targets: '.head1',
    translateX: 10,
    delay: anime.stagger(500) // increase delay by 100ms for each elements.
});