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
        }
    }
})