//Arquivo: painel.js
//Função construtura para objeto painel

class Painel {
   constructor(context, barco) {
      this.context = context;
      this.barco = barco;
      this.spritesheet = new Spritesheet(context, barco.imagem, 4, 4);
      this.pontuacao = 0;
   }
   atualizar() {
   }
   desenhar() {
      // Reduz o desenho pela metade
      this.context.scale(0.5, 0.5);

      var x = 20;
      var y = 20;

      for (var i = 1; i <= this.barco.vidasExtras; i++) {
         this.spritesheet.desenhar(x, y);
         x += 40;
      }

      // Torna a dobrar
      this.context.scale(2, 2);

      // Para facilitar um pouco.
      var ctx = this.context;

      // Pontuação
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.font = '18px sans-serif';
      ctx.fillText(this.pontuacao, 100, 27);
      ctx.restore();
   }
   resetar(context, barco) {
      this.context = context;
      this.barco = barco;
      this.spritesheet = new Spritesheet(context, barco.imagem, 3, 2);
      this.pontuacao = 0;
   }
};


