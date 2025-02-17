<template>
  <div class="contenedor-reloj-tiempo-real">
    <h2>Reloj en Tiempo Real</h2>
    <p class="hora">{{ tiempo }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  const tiempo = ref('');

  function actualizarHora() {
    const ahora = new Date();
    tiempo.value = ahora.toLocaleTimeString();
  }

  let idIntervalo: number;

  onMounted(() => {
    actualizarHora();
    idIntervalo = window.setInterval(actualizarHora, 1000);
  });

  onUnmounted(() => {
    clearInterval(idIntervalo);
  });
</script>

<style scoped>
  .contenedor-reloj-tiempo-real {
    text-align: center;
    padding: 20px;
    background-color: #e8f4fa;
    border-radius: 8px;
    width: 300px;
    margin: 20px auto;
  }

  .hora {
    font-size: 2rem;
    font-weight: bold;
    color: #0077b6;
  }
</style>
