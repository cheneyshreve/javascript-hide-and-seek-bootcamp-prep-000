
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
<<<<<<< HEAD
  const rankedLists = document.querySelectorAll(".ranked-list")
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children;
   for (let i = 0, l = children.length; i < l; i++){
    var val = parseInt(children[i].innerHTML);
     children[i].innerHTML = val + n
=======
  const rankedList = document.querySelectorAll("ul.ranked-list li")
  const firstList = rankedList[0]
  const secondList = rankedList[1]

  let children = firstList.children;
   for (let i = 0; i < children.length; i++){
     var val = children[i].innerHTML;
     return children[i].innerHTML = parseInt(val + n)
>>>>>>> 14023313ef99517b13818fe1ee5bb1c87ce97541
   }

   children = secondList.children;
    for (let i = 0, l = children.length; i < l; i++){
<<<<<<< HEAD
      var val = parseInt(children[i].innerHTML);
       children[i].innerHTML = val + n
    }
   /* */
=======
      var val = children[i].innerHTML;
      return children[i].innerHTML = parseInt(val - n)
    }

   /* */
   return
>>>>>>> 14023313ef99517b13818fe1ee5bb1c87ce97541
}

function deepestChild(){
 const family = document.querySelector('#grand-node div div div div')
 return family
}
