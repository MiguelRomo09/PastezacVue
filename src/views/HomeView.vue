<template>
  <div class="home" style="color: rgb(109, 104, 117); ">
    <Carousel/>
    <hr>
    <h2 class="col-12 text-center w-100">Nuestros sabores de pastel</h2>
    <br>
    <Sabores/>
				<hr>
				<h2 class="col-12 mx-auto">Nuestros adornos para pastel</h2>
				<br>
    <Adornos/>
    <InfoGeneral/>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import InfoGeneral from '@/components/InfoGeneral.vue'


export default {
  name: 'HomeView',
  components: {
    Carousel,
    Sabores,
    Adornos,
    InfoGeneral,
  },

}
</script>
