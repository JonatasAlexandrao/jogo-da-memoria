(function (){

  const {hash} = window.location;
  const paths = []

  paths[""] = login
  paths["#/login"] = login
  paths["#/signup"] = signup
  paths["#/game"] = game
  paths["#/404"] = status404

  console.log({hash})

  paths[hash] == undefined ? paths["#/404"]() : paths[hash]()

  window.onhashchange = () => {
    let {hash} = window.location;
    document.getElementById('root').innerHTML = ''
    paths[hash] == undefined ? paths["#/404"]() : paths[hash]()
    //location.reload(true)
  };
  

  /*if(paths[hash] == undefined){
    paths["#/404"]()
  }
  else {
    paths[hash]()
    
  }*/
  //paths[hash] ? paths[hash]() : paths["#/404"]()

  

})()