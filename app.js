new Vue({
    el:'#app',
    data:{
        playerHealth : 100,
        monsterHealth : 100,
        gameRuning : false   
    },
    methods:{
        startGame:function(){
            this.playerHealth =100;
            this.monsterHealth = 100;
            this.gameRuning =true;
        },
        attack: function(){
           this.monsterHealth-=this.calculateDamage(10, 3);
           if(this.checkWin()){
               return true;
           }
          this.monsterAttack();
        },
        specialAttack: function(){
           this.monsterHealth-=this.calculateDamage(10, 3);
           if(this.checkWin()){
               return true;
           }
           this.monsterAttack();
        },
        heal: function(){

        },
        giveUp:function(){

        },
        monsterAttack:function(){
            this.playerHealth-=this.calculateDamage(12, 5);
            this.checkWin();
        },
        calculateDamage:function(max , min){
           return Math.max(Math.floor(Math.random() * max)+1, min) ;
        },
        checkWin:function(){
            if(this.monsterHealth<=0){
                if(confirm('you won! New game?')){
                    this.startGame();
                }
                else{
                    this.gameRuning = false;
                }
            return true;
            }
            else if(this.playerHealth<=0){
                if(confirm('Monster won! New game?')){
                    this.startGame();
                }
                else{
                    this.gameRuning = false;
                }
            return true;
            }
        return false;
        }

    }
})