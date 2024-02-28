class Tshirt{
    constructor(cost){
         this.cost = cost;
     }
 //
 //    showCost(){
 //        console.log(this.cost);
 //    }
 //
 //    calcNewCost(value){
 //        console.log(this.cost + value)
 //    }
 //}
 //
 
 
 get showCost(){
     console.log(this.cost);
 }
 
 set newCost(value){
     console.log(this.cost +  value)
 }
 
 }
 
 const t_shirt = new Tshirt(500)
 