<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/timer">Timer</router-link>
        <router-link to="/modal">Modal</router-link>
        <router-link to="/calculator">Calculadora</router-link>
        <router-link to="/filtered-list">Lista Filtrada</router-link>
        <router-link to="/local-storage">Local Storage</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
  <!-- Ejercicio 1 -->
  <section>
    <h2>Ejercicio 1</h2>
    <p>{{ mensajeArea }}</p>
  </section>

  <!-- Ejercicio 2 -->
  <section>
    <h2>Ejercicio 2</h2>
    <p>{{ saludo }}</p>
    <p>Identificador: {{ identificadorStr }}</p>
    <p>Identificador: {{ identificadorNum }}</p>
  </section>

  <!-- Ejercicio 3 -->
  <section>
    <h2>Ejercicio 3</h2>
    <p>Producto creado: {{ productoCompletoText }}</p>
    <p>Producto obtenido por ID: {{ productoObtenidoText }}</p>
  </section>
</template>

<script setup lang="ts">
/*  Ejercicio 1  */
  function calcularAreaRectangulo(ancho: number, alto: number): number {
    return ancho * alto;
  }

  function imprimirArea(area: number): string {
    return `El área es: ${area}`;
  }

  const areaRect = calcularAreaRectangulo(5, 10);
  const mensajeArea = imprimirArea(areaRect);

  /*  Ejercicio 2  */
  interface Persona {
    nombre: string;
    edad: number;
  }

  function obtenerSaludo(persona: Persona): string {
    return `Hola ${persona.nombre}, tu edad es ${persona.edad}`;
  }

  const personaEjemplo: Persona = { nombre: 'Pablo', edad: 20 };
  const saludo = obtenerSaludo(personaEjemplo);

  let identificador: string | number = 'ABC123';
  const identificadorStr = identificador;
  identificador = 12345;
  const identificadorNum = identificador;

  /*  Ejercicio 3  */
  interface Producto {
    id: number;
    nombre: string;
    precio: number;
  }

  function crearProductoParcial(parcial: Partial<Producto>): Producto {
    return {
      id: parcial.id ?? 0,
      nombre: parcial.nombre ?? 'Producto sin nombre',
      precio: parcial.precio ?? 0,
    };
  }

  function obtenerProductosPorId(productos: Record<number, Producto>, id: number): Producto | undefined {
    return productos[id];
  }

  const productoParcial: Partial<Producto> = { nombre: 'Ordenador', precio: 800 };
  const productoCompleto = crearProductoParcial(productoParcial);
  const productoCompletoText = JSON.stringify(productoCompleto);

  const productos: Record<number, Producto> = {
    1: { id: 1, nombre: 'Iphone', precio: 900 },
    2: { id: 2, nombre: 'Ipad', precio: 500 },
  };
  const productoObtenido = obtenerProductosPorId(productos, 2);
  const productoObtenidoText = productoObtenido ? JSON.stringify(productoObtenido) : 'No encontrado';
</script>

<style scoped>
  #app {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
  }

  header {
    margin-bottom: 20px;
  }

  nav {
    display: flex;
    gap: 10px;
  }

  nav a {
    text-decoration: none;
    padding: 5px 10px;
    background-color: #0077b6;
    color: #fff;
    border-radius: 4px;
  }

  nav a:hover {
    background-color: #005f8c;
  }
  section {
    margin-bottom: 20px;
  }

  h1, h2 {
    color: #333;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }
</style>
