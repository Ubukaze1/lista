<template>
  <div class="container">
    <header>
      <h1>Lista enlazada</h1>
      <button>Cambio</button>
    </header>
    <div class="hr"></div>
    <section class="nodos">
      <div class="nodo" v-for="elm in arr" :key="elm.id">
        <p>{{ elm.title }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
import {nodo} from '../types/nodo'

let arr: Ref<Array<nodo>> = ref([
  {
    id: 1,
    title: "1"
  },
  {
    id: 2,
    title: "2"
  },
  {
    id: 3,
    title: "3"
  },
  {
    id: 4,
    title: "4"
  },
])




</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    font-size: 50px;
    background: linear-gradient(#8a3186, #290c22);
    margin: 0;
    margin-left: 41vw;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  button {
    border: none;
    border-radius: 15px;
    font-size: 16px;
    background-color: lightskyblue;
    cursor: pointer;
  }
}
.hr {
  width: 100%;
  margin: 20px 0px;
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
  margin: 100px auto;
  width: 75vw;
  height: 75vh;
}
</style>