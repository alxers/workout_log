// Counter
document.addEventListener('DOMContentLoaded', function() {
    var count = 1;
    var el = document.querySelector('.js-workout-counter');
    setInterval(function() {
    // debugger;
        count = count + 1;
        el.innerHTML = count;
    }, 1000);
});
