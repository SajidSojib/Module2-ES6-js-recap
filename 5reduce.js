//* reduce
/**
 ** it is like recursion
 ** it takes an array and reduces it to a single value
 ** arr.reduce((accumulator, current) => {return something that stored in acc}, initialValue of acc)
 */

 const cartItems =[
    {name: "Product 1", price: 10, quantity: 2},
    {name: "Product 2", price: 20, quantity: 3},
    {name: "Product 3", price: 30, quantity: 1},
    {name: "Product 4", price: 40, quantity: 4},
    {name: "Product 5", price: 50, quantity: 2},
 ]
 const subTotal = cartItems.reduce((total,item)=>{
    console.log(total,item);
    return total + item.price * item.quantity;
 }, 0);
 console.log(subTotal);
 console.log();
 

 const players = [
    {name: "Player 1", score: 100},
    {name: "Player 2", score: 200},
    {name: "Player 3", score: 300},
    {name: "Player 4", score: 800},
    {name: "Player 5", score: 500},
 ]
 const bestPlayer = players.reduce((bestPlayer,player)=>{
    if(player.score > bestPlayer.score){
        return player;
    }
    return bestPlayer;
 }, players[0]);
 console.log(bestPlayer);
