<template>
  <div class="contenedor-localstorage">
    <h2>Ejemplo de Local Storage</h2>
    <textarea v-model="nota" placeholder="Escribe tu nota aquí..." rows="5" cols="30"></textarea>
    <p>Nota guardada: {{ nota }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';

  const nota = ref('');

  onMounted(() => {
    const notaGuardada = localStorage.getItem('miNota');
    if (notaGuardada) {
      nota.value = notaGuardada;
    }
  });

  watch(nota, (nuevoValor) => {
    localStorage.setItem('miNota', nuevoValor);
  });
</script>

<style scoped>
  .contenedor-localstorage {
    max-width: 400px;
    margin: 20px auto;
    padding: 15px;
    background-color: #f0f4c3;
    border-radius: 8px;
    text-align: center;
  }
  .contenedor-localstorage textarea {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
