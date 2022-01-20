class Human{
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight= weight;
    }
    isMale(){
        return this.gender;
    }
    setGender(x){
        this.gender = x;
    }
    checkApple(x){
        return x.weight;
    }
    eat(apple){
        this.weight++;
        apple.decreaseApple();
    }
    say(x){
        console.log(this.name+": "+x);
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(x){
        this.weight = x;
    }
}
let ip10 = new Apple(10);
console.log("Apple weight: "+ ip10.getWeight());
let Adam = new Human("Adam",true,50);
let Eva = new Human("Eva",false,100);
let Storyteller = new Human("Storyteller",true,70);
let God = new Human("God",true,1000)
console.log(Adam);
console.log(Eva);
console.log(God);
console.log(Storyteller);

Adam.say("Eva look! U see those juicy ip10 down there dont u? Lets get some!")
Eva.say("Boy dont u hear God said, behave yourself in this palace and ull be happy forever?")
Adam.say("Im getting bored of this sh*tty land, let do sth CRAZYYYY")
Eva.say("Oh honey we're going to jail")
Storyteller.say("Then, the 2 dumbass go straight to the park where stands a tall fking apple tree. They should fking listen but...")
Adam.say("Here's the first golden apple to be eaten, by human. Lady first!")
Storyteller.say("The gentleman hands the big shinny golden apple to the fatass lady, and she begin to destroy the view with that miserable apple... " +
    "God helps us!")
let cntEva =0;
let cntAdam =0;
Eva.eat(ip10);
cntEva++;
console.log(Eva);
console.log(ip10);
Eva.say("Oh honey so juicy, u should try some too. Let's party!");
Storyteller.say("...And then, the two stupid ass pigs begin to act like animals. They dance around the tree and the dude" +
    "bring an axe to chop down the tree");
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.eat(ip10);
cntEva++;
Eva.say("Honey im a bit full, dont be shy and have a taste")
Adam.eat(ip10);
cntAdam++;
Adam.eat(ip10)
cntAdam++;
console.log(ip10)
Adam.say("Naniiiiiiii! But why?")
Eva.say("Cuz u ate too much honey.")
console.log(Adam)
console.log(Eva)
Storyteller.say("No it's you my lady, dont blame our gentleman")
Eva.say("Mind your own business u mudblood, or ill Avada Kedavra you!")
God.say("Excuse me but do u guys see my lovely Golden Apples? It used to be there.")
Eva.say("Adam ate them all")
God.say("Not all, i can see with my holy eyes that his weight is "+cntAdam+" pound heavier, but u're "+cntEva+" pound" +
    "heavier. Oh my God... imean Oh me. What should i do with the contract with the apples buyer? ")
Storyteller.say("And then, God had the contract canceled, bankrupted and the 3 were kicked out of Heaven. End!")


