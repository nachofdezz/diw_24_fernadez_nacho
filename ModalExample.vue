<template>
  <div class="contenedor-ejemplo-modal">
    <button class="btn-abrir" @click="mostrarModal = true">Abrir Modal</button>
    <ModalContainer :visible="mostrarModal" @cerrar="mostrarModal = false">
      <template #default>
        <h3>Titulo</h3>
        <p>Este es el contenido principal del modal.</p>
      </template>
      <template #actions>
        <button class="btn-accion" @click="mostrarModal = false">Cancelar</button>
        <button class="btn-accion aceptar" @click="aceptar">Aceptar</button>
      </template>
    </ModalContainer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ModalContainer from './ModalContainer.vue';

  const mostrarModal = ref(false);

  function aceptar() {
    alert('Modal aceptado');
    mostrarModal.value = false;
  }
</script>

<style scoped>
  .contenedor-ejemplo-modal {
    text-align: center;
    margin-top: 20px;
  }
  .btn-abrir {
    padding: 10px 20px;
    background-color: #0077b6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-abrir:hover {
    background-color: #005f8c;
  }
  .btn-accion {
    padding: 5px 10px;
    margin-left: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-accion.aceptar {
    background-color: #28a745;
    color: white;
  }
  .btn-accion:hover {
    opacity: 0.9;
  }
</style>
