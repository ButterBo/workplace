var chart = anime({//Stagger
    targets: '.head1',
    translateX: 10,
    delay: anime.stagger(500) // increase delay by 100ms for each elements.
});

anime({
    targets: "#b",
    rotate: "25deg",
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(100)
});

var cases = anime({//Counter
    targets: '.case',
    innerHTML: [0, 257510], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
});

var numOfSick = anime({//Counter
    targets: '.hospital',
    innerHTML: [0, 1365], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
});

var ded = anime({//Counter
    targets: '.death',
    innerHTML: [0, 678], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
});

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#FFFFFF', '#997570', '#808080'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) { //section 2

            } else {
                cases.play();
                numOfSick.play();
                ded.play();
                chart.play();
            }
        }
    });
});