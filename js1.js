class Apple {
    constructor(weight){
        this.weight=weight;
    }
    isEmpty(){
        if(this.weight==0){
            return true;
        }
        return false;
    }
    decreaseApple(){
        this.weight--;
        if(this.isEmpty()){
            console.log("FirewallSystem: 404 Apple not found. Find the dirty thieves!")
        }
    }

    getWeight(){
        return this.weight;
    }
}