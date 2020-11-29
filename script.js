let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];

let uppercase = tags.map(tag => tag.toUpperCase());

let exclude = tags.filter(function(value){ 
    if(value !="json" && value!="xml")
        return value;
});

let countedNames = exclude.reduce(function (alltags, tag) { 
     if (tag in alltags) {
         alltags[tag]++
    }
     else {
       alltags[tag] = 1
      }
     return alltags
}, {})
 
  console.log(countedNames);
  console.log(exclude);
  console.log(uppercase);

