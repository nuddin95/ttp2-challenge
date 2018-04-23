// Question A -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".


function sortByString(s, t){
    //hash to store letters which will later increment
    let hash={};
    let result="";
    
    //put t letters in hash
    for(let i=0; i<t.length; i++){
      hash[t[i]]=0
    }
    
    //count s letters according to t
    for(let i=0; i<s.length; i++){
      if(hash[s[i]]==0 || hash[s[i]] > 0){
        hash[s[i]]++
      }
    }
    
    //construct new string
    for(key in hash) {
      result+=key.repeat(hash[key])
    }
    
    return result;
}