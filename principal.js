var banner =
["  Os melhores do Brasil ","qualidade e preço baixo"]
var bannerAtual=0;


function trocarBnner ()
{bannerAtual=(bannerAtual+1)%2;
document.querySelector('h2#mensagem').textContent=banner[bannerAtual];}

setInterval(trocarBnner, 2000);
