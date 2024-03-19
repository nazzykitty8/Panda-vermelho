var motivos = [
    "Extremamente dócil e tímido ",
    "Eles são preguisoços",
    "Eles gostam do 4 Town",
    "Eles são ágeis    ",
      "eles são extramamente fofos"
  ];
  
  var imagens = [ "https://i.pinimg.com/736x/5f/17/c7/5f17c7e06d64e904440d642cafee3c22.jpg",
    "https://static.wikia.nocookie.net/dublagem/images/2/2a/Red_-_Crescer_%C3%A9_uma_Fera_-_P%C3%B4ster_Nacional_-_04.jpg/revision/latest?cb=20230911143244&path-prefix=pt-br",
    "https://www.stylourbano.com.br/wp-content/uploads/2023/02/gdsdegs.jpg",    "https://www.tehcute.com/pics/201107/Red-panda.jpg","https://static.vecteezy.com/ti/vetor-gratis/p3/6231105-elegante-letra-p-graceful-royal-caligrafico-bonito-logo-vintage-gold-drawn-emblem-for-book-design-brand-name-business-card-restaurant-boutique-or-hotel-vetor.jpg"
    
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }