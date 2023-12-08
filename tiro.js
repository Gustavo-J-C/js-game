//Arquivo: tiro.js
//Função construtura para objeto tiro

var SOM_TIRO = new Audio();
SOM_TIRO.src = 'snd/tiro2.mp3';
SOM_TIRO.volume = 0.1;
SOM_TIRO.load();

class Tiro {
   constructor(context, barco, teclado) {
      this.context = context;
      this.barco = barco;
      // Posicionar o tiro no bico da barco | Começa na posição de x e centraliza o tiro no bico da barco
      this.velocidade = 400;
      this.largura = 3;
      this.altura = 10;
      this.x = barco.x + 65; // 36 / 2
      this.y = barco.y + 35;
      if (teclado.pressionada(SETA_ESQUERDA)) {
         this.x = barco.x + 55;
         this.y = barco.y + 70;
      } else if (teclado.pressionada(SETA_DIREITA)) {
         this.x = barco.x + 40;
         this.y = barco.y + 70;
      }

      this.cor = 'black';
      SOM_TIRO.currentTime = 0.4;
      SOM_TIRO.play();
   }
   /*Devemos cronometrar o movimento do 'Tiro' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores.*/
   atualizar() {
      //Sobe na tela, subtraindo a posição y
      this.y -= this.velocidade * this.animacao.decorrido / 1000;

      // Excluir o tiro quando sumir da tela
      if (this.y < -this.altura) {
         this.animacao.excluirSprite(this);
         this.colisor.excluirSprite(this);
      }
   }
   /*Devemos cronometrar o movimento do 'Tiro' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores.*/
   desenhar() {
      //imgVaca.src = 'image/barco.png'
      var ctx = this.context;
      //Salvar a cofiguração e subir na pilha
      ctx.save();
      //Define cor da imagem
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
      //Voltamos para o nível anterior na pilha
      ctx.restore();
   }
   /*Devemos cronometrar o movimento do 'Tiro' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores.*/
   //Tratar colisão | Definir retângulos de colisão
   retangulosColisao() {
      return [{
         x: this.x, y: this.y, largura: this.largura,
         altura: this.altura
      }];
   }
   /*Devemos cronometrar o movimento do 'Tiro' aplicando no método
   'atualizar', a fórmula a seguir:
   
   O incremento da posição do sprite, em pixels =
   velocidade * tempoDecorrido / 1000
   
   Sendo:
   
   • 'velocidade' em pixels por segundo;
   • 'tempoDecorrido' em segundos (como o tempo dado por 'Date.getTime()'
   é em milissegundos, dividimos esse valor por 1000).
   
   Podemos ajustar novas velocidades com valores maiores.*/
   colidiuCom(outro) {
   }
}

SOM_TIRO.addEventListener('timeupdate', function() {
   // Verifique se o tempo decorrido é maior que 3 segundos
   if (SOM_TIRO.currentTime >= 2.5) {
     SOM_TIRO.pause(); // Pare a reprodução
     SOM_TIRO.currentTime = 0; // Reinicie o ponto de início para futuras reproduções
   }
 });


