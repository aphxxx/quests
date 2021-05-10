function friend(friends){
    result = [];
    for(i = 0; i < friends.length; i++){
        if(friends[i].length == 4 ){
            result.push(friends[i]);
        }
        else{
            {};
        }       
    }
    return result;
  }

console.log(friend(["Ryan", "Kieran", "Mark"]))  
