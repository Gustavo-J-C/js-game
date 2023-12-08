//Arquivo: ovni.js
//Função construtura para objeto ovni

class Ovni {
   constructor(context, imagem, imgExplosao) {
      this.context = context;
      this.imagem = imagem;
      this.x = 0;
      this.y = 0;
      this.velocidade = 0;
      this.imgExplosao = imgExplosao;
   }
   /*Devemos cronometrar o movimento do 'Ovni' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'ovni.velocidade' da página HTML.*/
   atualizar() {
      this.y +=
         this.velocidade * this.animacao.decorrido / 1000;

      if (this.y > this.context.canvas.height) {
         this.animacao.excluirSprite(this);
         this.colisor.excluirSprite(this);
      }
   }
   /*Devemos cronometrar o movimento do 'Ovni' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'ovni.velocidade' da página HTML.*/
   desenhar() {
      var ctx = this.context;
      var img = this.imagem;
      ctx.drawImage(img, this.x, this.y, 110, 100);
   }
   /*Devemos cronometrar o movimento do 'Ovni' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'ovni.velocidade' da página HTML.*/
   //Tratar as colisões | Definir retângulos de colisão
   retangulosColisao() {
      // Estes valores vão sendo ajustados aos poucos
      var rets = [
         { x: this.x + 30, y: this.y + 20, largura: 40, altura: 60 },
         // {x: this.x+40, y: this.y+60, largura: 15, altura: 25},
      ];

      // Desenhando os retângulos para visualização | Comentar após realizar modificações
      var ctx = this.context;

      for (var i in rets) {
         ctx.save();
         ctx.strokeStyle = 'yellow';
         ctx.strokeRect(rets[i].x, rets[i].y, rets[i].largura,
            rets[i].altura);
         ctx.restore();
      }
      return rets;
   }
   /*Devemos cronometrar o movimento do 'Ovni' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'ovni.velocidade' da página HTML.*/
   colidiuCom(outro) {
      // Se colidiu com um Tiro, os dois desaparecem
      if (outro instanceof Tiro) {
         this.animacao.excluirSprite(this);
         this.colisor.excluirSprite(this);
         this.animacao.excluirSprite(outro);
         this.colisor.excluirSprite(outro);

         var explosao = new Explosao(this.context, this.imgExplosao, this.x, this.y);
         this.animacao.novoSprite(explosao);
      }
   }
}


