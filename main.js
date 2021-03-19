var app = new Vue(
    {
        el: '#root',
        data : {
            imgs: [
                "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
                "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
                "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
                "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
            ],
            counterI: 0,
            player: true
        },

        created: function() {
            interval = setInterval(() => {
                this.slideup();
            }, 3000);
        },

        methods: {
            slideup: function() {
                this.counterI += 1;

                if (this.counterI > (this.imgs.length - 1)) this.counterI = 0;

            },
            slidedown: function() {
                this.counterI -= 1;

                if (this.counterI < 0) this.counterI = (this.imgs.length - 1);
                    
            },
            changeI: function(index) {
                this.counterI = index;
            }, 
            playI: function() {
                
                if (this.player == true) {
                    this.player = false;
                    clearInterval(interval);
                } else {
                    this.player = true;
                    interval = setInterval(() => {
                        this.slideup();
                    }, 3000);        
                }
            }  
        }
    }
);