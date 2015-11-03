// Counter
(function() {
    var count = 1;
    var el = document.querySelector('.js-short-workout-counter');
    setInterval(function() {
        count = count + 1;
        el.innerHTML = count;
    }, 1000);
})()
