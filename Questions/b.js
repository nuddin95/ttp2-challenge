//For this exercise I believe the best structure is a suffix trie, because it will help cut down on space by not storing repeating parts but only the unique parts. If we visit 'www.google.com' and 'www.google.com/kittens' we store only 'www.google.com' and have it point to a node containing '/kittens' so we don't write 'www.google.com' twice



const set1 = new Set([
    'https://www.google.com/kittens',
    'https://www.google.com/kittens/videos',
    'https://www.udacity.com/mobile',
    'https://www.repl.it.com',
    'https://www.google.com/dogs'
]);

class SuffixTrie {
    constructor(url){
      this.root = {};
      this.end = '*';
      this.insertUrl(url)
    }
    
    //inserts a new url to our suffix trie
    insertUrl(url){
      //removed the 'https://'
      let trimUrl = (url.split("//"))[1];
      let urlSection = trimUrl.split('/');
      let node = this.root;
      
      for(let i=0; i<urlSection.length; i++){
        if(node[urlSection[i]]){
          node=node[urlSection[i]]
        }else{
          node[urlSection[i]] = {}
          node=node[urlSection[i]]
        }
      }
      node[this.end]=true;
    }
    
    //checks if a url is in the trie
    contain(url){
      let trimUrl = (url.split("//"))[1];
      let urlSection = trimUrl.split('/');
      let node = this.root;
      
      for(let i=0; i<urlSection.length; i++){
        if(node[urlSection[i]]){
          node=node[urlSection[i]]
        }else{
          return false;
        }
      }
      
        return node[this.end]  
    }
}

const test = new SuffixTrie('https://www.google.com');

for(key of set1){
  test.insertUrl(key)
}

test.contain('https://www.google.com') //true
test.contain('https://www.google.com/kittens') //true
test.contain('https://www.google.com/kittens/videos') //true
test.contain('https://www.google.com/kittens/videos/funny') //false