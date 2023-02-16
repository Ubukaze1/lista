<template>
  <div class="container">
    <!-- :style="elm.no ? ' animation: grow 2s ease-in-out;' : ' '" -->
    <header>
      <h1>Lista Enlazada</h1>
      <!-- <button>Cambio</button> -->
    </header>
    <div class="hr"></div>
    <section class="nodos">
      <div class="fle" v-for="(elm, index) of arr" :key="index">
        <div class="nodo"
          :style="elm.no ? elm.ultN ? 'animation: prii 2s ease-in-out;' : 'animation: grow 2s ease-in-out' : ' '"
          :class="elm.ultN ? 'priN' : ' '">
          <p>{{ elm.info }}</p>
        </div>
        <img src="../assets/flecha-correcta (1).png" alt="Flecha"
          :style="elm.ar ? elm.ultF ? 'animation: salida 2s ease-in-out ' : 'animation: rotate 2s ease-in-out;' : ' '"
          :class="elm.ultF ? 'priF' : ' '">
      </div>
    </section>
    <section class="foot">
      <div>
        <button class="bt-add" @click="handleClick()">Añadir</button>
        <input type="number" placeholder="Dato" v-model="dato" autofocus pattern="[0-9]*">
      </div>
    </section>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { nodo } from '../types/nodo'
import {nodoAnimatio, flechaAnimation, flechaAnimationUlt, nodoAnimationUlt} from '../func/animations'

let dato: Ref<string> = ref("");
let arr: Ref<Array<nodo>> = ref([])

arr.value.push({
  info: "1",
  no: false,
  ar: false,
  ultN: false,
  ultF: false
})

const handleClick = async () => {


  for (let i = 0; i < arr.value.length; i++) {
    await nodoAnimatio(i,arr)
    await flechaAnimation(i, arr)
  }

  arr.value.push({
    info: dato.value,
    no: false,
    ar: false,
    ultN: true,
    ultF: true
  })
  dato.value = " "

  await nodoAnimationUlt(arr.value.length - 1, arr)
  await flechaAnimationUlt(arr.value.length - 1, arr)
}
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;

  h1 {
    font-size: 40px;
    font-weight: 500;
    /* background: linear-gradient(#8a3186, #290c22);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: white;
    margin: 0;
    margin-left: 42vw;
  }

  button {
    border: none;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
  }
}

.hr {
  width: 95%;
  margin: 20px auto;
  border: 1px solid #003366;
}

.nodo {
  scale: 1;
  display: flex;
  width: 85px;
  height: 85px;
  background-color: #8a3186;
  border-radius: 50%;
  justify-content: center;
  margin-left: 5px;

  p {
    margin-top: 13px;
    margin-right: 3px;
    color: white;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
  }

  /* animation: grow 2s ease-in-out; */
}

@keyframes grow {
  0% {
    scale: 1;
  }

  50% {
    scale: 1.2;
  }

  100% {
    scale: 1;
  }
}

.priN {
  opacity: 0;
  scale: 0;
}
.priF {
  opacity: 0;
  scale: 1;
  z-index: -1;
}

@keyframes prii {
  0% {
    opacity: 1;
  }

  50% {
    scale: 1.2;
  }

  100% {
    scale: 1;
    opacity: 1;
  }
}

@keyframes salida {
  0% {
    opacity: 1;
    translate: (-100px);
  }

  50%{
  }

  100% {
    translate: (px);
    opacity: 1;
  }

}

.fle {

  display: flex;
  flex-direction: row;

  img {
    margin-left: 15px;
    margin-right: 15px;
    width: 80px;
    height: 80px;
    /* animation: rotate 2s ease-in-out; */
  }
}

@keyframes rotate {

  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(-10deg);
  }


  100% {
    transform: rotate(0deg);
  }


}

.nodos {
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  width: 75vw;
  height: 50vh;

}

.foot {
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    button {
      scale: 1;
      padding: 10px 125px;
      border: none;
      background: linear-gradient(#8a3186, #290c22);
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
      color: white;
      margin-bottom: 20px;
      cursor: pointer;
      transition: 1s;

      &:hover {
        scale: 1.1;
      }
    }

    input {
      font-size: 18px;
      font-style: italic;
    }
  }
}
</style>