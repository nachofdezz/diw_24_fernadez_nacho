<template>
  <div class="contenedor-calculadora">
    <h2>Calculadora</h2>
    <div class="entradas">
      <input type="number" v-model.number="num1" placeholder="Número 1" />
      <input type="number" v-model.number="num2" placeholder="Número 2" />
    </div>
    <div class="resultados">
      <p>Suma: {{ suma }}</p>
      <p>Producto: {{ producto }}</p>
      <p>Diferencia: {{ diferencia }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  const num1 = ref(0);
  const num2 = ref(0);

  const suma = computed(() => num1.value + num2.value);
  const producto = computed(() => num1.value * num2.value);
  const diferencia = computed(() => num1.value - num2.value);
</script>

<style scoped>
  .contenedor-calculadora {
    max-width: 400px;
    margin: 20px auto;
    padding: 15px;
    background-color: #fff3e0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .entradas {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .entradas input {
    width: 48%;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .resultados p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
</style>
