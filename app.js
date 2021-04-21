new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRuning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameRuning = true;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(10, 3);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text:'player his monster for '+damage
            });
            if (this.checkWin()) {
                return true;
            }
            this.monsterAttack();
        },
        specialAttack: function () {
            damage = this.calculateDamage(10, 3);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text:'player his monster hard for '+damage
            });
            if (this.checkWin()) {
                return true;
            }
            this.monsterAttack();
        },
        heal: function () {
            
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer:true,
                text:'player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp: function () {
            this.gameRuning = false;
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(12, 5);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer:false,
                text:'monster his player for ' + damage
            });
        },
        calculateDamage: function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('you won! New game?')) {
                    this.startGame();
                }
                else {
                    this.gameRuning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('Monster won! New game?')) {
                    this.startGame();
                }
                else {
                    this.gameRuning = false;
                }
                return true;
            }
            return false;
        }

    }
})