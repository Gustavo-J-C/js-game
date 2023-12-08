//Arquivo: explosao.js
//Função construtura para objeto explosão

var SOM_EXPLOSAO = new Audio();
SOM_EXPLOSAO.src = 'snd/som-baixa.mp3';
SOM_EXPLOSAO.volume = 1;
SOM_EXPLOSAO.load();

class Explosao {
   constructor(context, imagem, x, y) {
      this.context = context;
      this.imagem = imagem;

      //Definindo o quadro do spritesheet | linha 1 e coluna 5
      this.spritesheet = new Spritesheet(context, imagem, 4, 4);
      //Definir um intervalo de tempo para mudança de quadro
      this.spritesheet.intervalo = 100;
      this.x = x;
      this.y = y;
      this.animando = false;

      var explosao = this;
      this.fimDaExplosao = null;
      this.spritesheet.fimDoCiclo = function () {
         explosao.animacao.excluirSprite(explosao);
         if (explosao.fimDaExplosao) explosao.fimDaExplosao();
      };

      SOM_EXPLOSAO.currentTime = 0.0;
      SOM_EXPLOSAO.play();
   }
   atualizar() {
   }
   //Desenhamos o quadro atual e animamos a spritesheet
   desenhar() {
      this.spritesheet.desenhar(this.x, this.y);
      this.spritesheet.proximoQuadro();
   }
}
