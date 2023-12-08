//arquivo: teclado.js
//Função construtura para objeto Teclado
//Códigos de teclas - aqui vão todos os que forem necessários 
var SETA_ESQUERDA = 37;
var SETA_ACIMA = 38;
var SETA_DIREITA = 39;
var SETA_ABAIXO = 40;
var ESPACO = 32;
var ENTER = 13;

class Teclado {
   constructor(elemento) {
      this.elemento = elemento;

      // Array de teclas pressionadas
      this.pressionadas = [];

      // Array de teclas disparadas
      this.disparadas = [];

      // Funções de disparo registradas
      this.funcoesDisparo = [];

      var teclado = this;

      //Clica e segura
      elemento.addEventListener('keydown', function (evento) {
         var tecla = evento.keyCode; // Tornando mais legível ;)
         teclado.pressionadas[tecla] = true;

         // Disparar somente se for o primeiro keydown da tecla
         if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {

            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla]();
         }
      });

      //Libera tecla
      elemento.addEventListener('keyup', function (evento) {
         teclado.pressionadas[evento.keyCode] = false;
         teclado.disparadas[evento.keyCode] = false;
      });
   }
   pressionada(tecla) {
      return this.pressionadas[tecla];
   }
   disparou(tecla, callback) {
      this.funcoesDisparo[tecla] = callback;
   }
}


