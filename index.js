
function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
  /* */
}

function nestedTarget(){
  var tar = document.querySelector('#nested .target')
  return tar
  /* */
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll(".ranked-list")
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children;
   for (let i = 0, l = children.length; i < l; i++){
    var val = parseInt(children[i].innerHTML);
     children[i].innerHTML = val + n
   }

   children = secondList.children;
    for (let i = 0, l = children.length; i < l; i++){
      var val = parseInt(children[i].innerHTML);
       children[i].innerHTML = val + n
    }
   /* */
}

function deepestChild(){
 const family = document.querySelector('#grand-node div div div div')
 return family
}
