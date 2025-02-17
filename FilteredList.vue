<template>
  <div class="contenedor-lista-filtrada">
    <h2>Lista Filtrada</h2>
    <input type="text" v-model="filtro" placeholder="Filtrar por nombre" />
    <ul>
      <li v-for="(item, index) in itemsFiltrados" :key="index">
        {{ item.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';

  interface Item {
    nombre: string;
  }

  const items = ref<Item[]>([
    { nombre: 'Manzana' },
    { nombre: 'Melón' },
    { nombre: 'Platano' },
    { nombre: 'Naranja' },
  ]);

  const filtro = ref('');

  const itemsFiltrados = computed(() => {
    if (!filtro.value) return items.value;
    return items.value.filter(item =>
      item.nombre.toLowerCase().includes(filtro.value.toLowerCase())
    );
  });

  watch(filtro, (nuevoValor, valorAnterior) => {
    console.log(`Filtro cambiado de "${valorAnterior}" a "${nuevoValor}"`);
  });
</script>

<style scoped>
  .contenedor-lista-filtrada {
    max-width: 400px;
    margin: 20px auto;
    padding: 15px;
    background-color: #e8f5e9;
    border-radius: 8px;
  }
  .contenedor-lista-filtrada input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .contenedor-lista-filtrada ul {
    list-style: none;
    padding: 0;
  }
  .contenedor-lista-filtrada li {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }
  .contenedor-lista-filtrada li:last-child {
    border-bottom: none;
  }
</style>
