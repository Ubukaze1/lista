<template>
  <div class="container">
    <header>
      <h1>Lista Enlazada</h1>
      <!-- <button>Cambio</button> -->
    </header>
    <div class="hr"></div>
    <section class="nodos">
      <div class="nodo" v-for="(elm, index) of arr" :key="index">
        <p>{{ elm.info }}</p>
      </div>
    </section>
    <section class="foot">
      <div>
        <button class="bt-add" @click="handleClick()">Añadir</button>
        <input type="text" placeholder="Dato" v-model="dato" autofocus >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { nodo } from '../types/nodo'

let dato: Ref<string> = ref(" ");

let arr: Ref<Array<nodo>> = ref([])


const handleClick = () => {
  arr.value.push({
    info: dato.value
  })
  dato.value = " "

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
  display: flex;
  width: 65px;
  height: 65px;
  background-color: #8a3186;
  border-radius: 50%;
  justify-content: center;
  margin-left: 5px;

  p {
    color: #1d0718;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
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
      &:hover{
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