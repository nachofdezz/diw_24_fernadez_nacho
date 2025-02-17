<template>
  <div v-if="props.visible" class="superposicion-modal">
    <div class="contenido-modal">
      <div class="cuerpo-modal">
        <slot>Contenido predeterminado del modal</slot>
      </div>
      <div class="acciones-modal">
        <slot name="actions">
          <button @click="emitir('cerrar')">Cerrar</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps<{
    visible: boolean;
  }>();

  const emitir = defineEmits<{
    (e: 'cerrar'): void;
  }>();
</script>

<style scoped>
  .superposicion-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contenido-modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
  }
  .cuerpo-modal {
    margin-bottom: 10px;
  }
  .acciones-modal {
    text-align: right;
  }
</style>
