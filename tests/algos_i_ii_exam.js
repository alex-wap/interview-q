// Object Constructor - Constructs Node Objects = { val: #, next: null}
function sNode(val){
    this.val = val;
    this.next = null;
}   
// Object Constructor - Constructs List Objects = {head: null}
function sList(){
    this.head = null;
}

module.exports = {
    reverseString: function(str){
        // Given a string (str), return the string in reverse.
        var arr = str.split("");
        var newStr = "";
        for (var i = arr.length-1; i>=0; i--){
            newStr+=arr[i];
        }
        return newStr;
        // return type: String
    },
    removeLetter: function(str, char){
        // Given a string (str) and a character (char), return a string without the supplied character (char).
        var arr = str.split("");
        var newStr = "";
        for (var i = 0; i<arr.length; i++){
          if(arr[i] === letter){
            continue;
          }
            newStr+=arr[i];
        }
        return newStr;
        // return type: String
    },
    factorial: function(num) {
        // Return the factorial of a number (num)
        // Given: 0 Return 1 || Given: 1 Return 1 || Given: 2 Return 2
        // Given: 3 Return 6 || Given: 4 Return 24 || Given: 5 Return 120 
        if (num === 0 || num === 1){
            return 1;
          }
        return num*factorial(num-1);
        // return type: Number
    },
    isBracketValid: function(str){
        // Given a string, returns whether the sequence of various brackets within it are valid. For example:
        // Given: "[] [] [ [] [] ]" or "[]" Return: true
        // Given: "[][]]" or "[][[[]]" Return: false
        var arr = [];
        for (var i = 0; i < str.length; i++){
          if (str[i] === "["){
            arr.push("[");
          }
          else if (str[i] === "]" && arr[arr.length-1] !== "["){
            return false;
          }
          else if (str[i] === "]" && arr[arr.length-1] === "["){
            arr.pop();
          }
          else{
            
          }
        }
        if (arr.length === 0){
          return true;
        }
        else{
          return false;
        }
        // return type: Boolean
    },
    isPalindromeStrict: function(str){
        // Create a function that returns a boolean whether the string is a strict palindrome. 
        // Given "a x a" or "racecar" Return: true
        // Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false. 
        for(var i = 0; i < Math.floor(str.length-1/2); i++){
            if(str[i] !== str[str.length-1-i]){
              return false;
            }
          }
        return true;
        // return type: Boolean
    },
    insertAt: function(arr, idx, val){
        // Given an array (arr), index (idx), and additional value (val), insert the value into the array at the given index. Do this without using built-in array methods. Return the modified or new array.
        arr[arr.length] = val;
        if (idx >= arr.length-1){return arr;} 
        var temp;
        for (var i = arr.length-1; i > idx; i--){
          temp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = temp;
        }
        return arr;
        // return type: Array
    },
    removeAt: function(arr, idx){
        // Given an array (arr) and an index (idx), remove the value from the array, this should shorten the length of the array. Do this without using any built-in array methods except pop().
        if (idx >= arr.length){
            return arr;
          }
          var temp;
          for (var i = idx; i < arr.length; i++){
            arr[i] = arr[i+1];
          }
          arr.pop();
          return arr;
        // return type: Array
    },
    invertHash: function(hash){
        // Convert the given hash's keys to values and values to corresponding keys.
        // Given: {a:1,b:2}, return: {1:a,2:b}.
        var newHash = {};
        for (var key in hash){
          newHash[hash[key]] = key;
        }
        return newHash;
        // return type: Object
    },
    removeLastNode: function(node){
        // Given the head node, pop off the last node and return the head node (if applicable).
        var head = node;
        var prev = null;
        if(!head){return null;}
        if(!head.next){return node;}
        while(node.next){
          prev = node;
          node = node.next;
        }
        prev.next = null;
        
        return head;
        // return type: Node
    },
    // - - - - BONUS ALROTIHM - - - - 
    shiftValuesByNum: function(arr, num){
        // Given an array (arr), shift the array values by num.
        // Given: arr: [1,2,3,4,5], num: 1, Return: [5,1,2,3,4]
        // Given: arr: [1,2,3,4,5], num: 3, Return: [3,4,5,1,2]
        if (num === 0 || num === arr.length){
            return arr;
          }
          var newArr = [];
          for(var i = 0; i < arr.length; i++){
            newArr.push(arr[(i+num-1)%arr.length]);
          }
          return newArr;
        // return type: Array
    }
}