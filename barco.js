//Arquivo: barco.js
//Função construtura para objeto barco
/*No construtor da classe 'barco', vamos iniciar o objeto que 
 controla a spritesheet. Usaremos inicialmente a linha zero, 
 que representa a barco parada. */

class Barco {
   constructor(context, teclado, imagem, imgExplosao, imgAfundar) {
      this.context = context;
      this.teclado = teclado;
      this.imagem = imagem;
      this.imgAfundar = imgAfundar;
      this.x = 0;
      this.y = 0;
      this.velocidade = 0;
      //O sprite inicia na linha 3 e coluna 2
      this.spritesheet = new Spritesheet(context, imagem, 4, 4);
      this.spritesheet.linha = 0;
      this.spritesheet.intervalo = 100;
      this.imgExplosao = imgExplosao;
      this.acabaramVidas = null;
      this.vidasExtras = 3;
   }
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   /*São quatro 'if', sem o uso do 'else', para permitir que
   mais de uma seta possam estar pressionadas ao mesmo tempo.
   Isso permite mover a barco na diagonal.*/
   atualizar() {
      var incremento = this.velocidade * this.animacao.decorrido / 1000;

      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
         this.x -= incremento;

      if (this.teclado.pressionada(SETA_DIREITA) &&
         this.x < this.context.canvas.width - 100)
         this.x += incremento;

      if (this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
         this.y -= incremento;

      if (this.teclado.pressionada(SETA_ABAIXO) &&
         this.y < this.context.canvas.height - 120)
         this.y += incremento;
   }
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   /*Tratando a spritesheet da barco:
   - Selecionar o quadro da spritesheet
   - Para definir a linha a ser animada, lemos o estado das setas do teclado
   */
   desenhar() {
      if (this.teclado.pressionada(SETA_ESQUERDA))
         this.spritesheet.linha = 1;
      else if (this.teclado.pressionada(SETA_DIREITA))
         this.spritesheet.linha = 2;
      else if (this.teclado.pressionada(SETA_ABAIXO))
         this.spritesheet.linha = 0;

      else
         this.spritesheet.linha = 3;

      this.spritesheet.desenhar(this.x, this.y);
      this.spritesheet.proximoQuadro();
   }
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   atirar() {
      var t = new Tiro(this.context, this, this.teclado);
      this.animacao.novoSprite(t);
      this.colisor.novoSprite(t);
   }
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   //Tratar as colisões | Definir retângulos de colisão
   retangulosColisao() {
      // Estes valores vão sendo ajustados aos poucos
      var rets = [
         { x: this.x + 50, y: this.y + 40, largura: 30, altura: 90 },
      ];

      if (this.teclado.pressionada(SETA_ESQUERDA) || this.teclado.pressionada(SETA_DIREITA)) {
         // rets[0].x = this.x+30;
         rets[0].y = this.y + 90;
         rets[0].largura = 110;
         rets[0].altura = 30;
         if (this.teclado.pressionada(SETA_DIREITA)) {
            rets[0].x = this.x + 10;
         } else {
            rets[0].x = this.x;
         }
      }

      // Desenhando os retângulos para visualização | Comentar após concluir modificações
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
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   colidiuCom(outro) {
      // Se colidiu com um Ovni...
      if (outro instanceof Ovni) {
         this.animacao.excluirSprite(this);
         this.animacao.excluirSprite(outro);
         this.colisor.excluirSprite(this);
         this.colisor.excluirSprite(outro);

         var exp1 = new Explosao(this.context, this.imgExplosao,
            this.x, this.y);

         this.animacao.novoSprite(exp1);
         // this.animacao.novoSprite(exp2);
         var barco = this;
         exp1.fimDaExplosao = function () {
            barco.vidasExtras--;

            if (barco.vidasExtras < 0) {
               if (barco.acabaramVidas) barco.acabaramVidas();
            }
            else {
               // Recolocar a barco no engine
               barco.colisor.novoSprite(barco);
               barco.animacao.novoSprite(barco);

               barco.posicionar();
            }
         };
      }
   }
   /*Devemos cronometrar o movimento da 'barco' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores em
   'barco.velocidade' da página HTML.*/
   /*Na imagem 'barco-spritesheet.png' temos a barco parada, movendo-se
   para a esquerda e movendo-se para a direita. Em uma linha, a
   animação ocorre avançando as colunas. Em cada uma destas linhas,
   há duas colunas que animam o fogo na cauda. */
   posicionar() {
      var canvas = this.context.canvas;
      this.x = canvas.width / 2 - 100; // 36 / 2
      this.y = canvas.height - 100;
   }
}

        /*}
        1) drawImage(imagem, x, y, largura, altura): desenha a imagem
        inteira, na posição e tamanho especificados
        
        2) drawImage(imagem, xOrigem, yOrigem, larguraOrigem, alturaOrigem, 
        xDestino, yDestino, larguraDestino, alturaDestino): desenha parte 
        da imagem.*/
