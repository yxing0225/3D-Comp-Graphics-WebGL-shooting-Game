(function() {
    var time = {
        curr: 60,
        timer: null,
        dom: document.getElementById('bgTime'),
        start: function() {

            this.timer = setInterval(function() {
                if(this.curr <= 0) {
                    clearInterval(this.timer);
                    level.over(false);
                    return ;
                }
                this.dom.innerHTML = --this.curr;
            }.bind(this), 1000);
        },

        end: function() {
            
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                if(this.curr <= 0) {
                    clearInterval(this.timer);
                    alert('Game Over，Final Score: ' + score.total);
                    return ;
                }

                this.dom.innerHTML = --this.curr;
                score.add(0.5);
            }.bind(this), 16);
        }
    };
    window.time = time; 
})();