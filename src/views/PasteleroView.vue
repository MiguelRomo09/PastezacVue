<template>
  <div class="row">
    <div class="col-5 row mx-auto" style="color: rgb(109, 104, 117); ">
			
				<h2 class="col-10 text-center">Materiales restantes para pasteles</h2>
				<table class="table">
					<thead>
					  <tr>
						<th scope="col">Material</th>
						<th scope="col">Cantidad</th>
					  </tr>
					</thead>
					<tbody>
					  <tr v-for="(item) in $store.state.pasteles" :key="item.id">
						<td>{{ item.sabor }} </td>
						<td>{{ item.cantidad }}</td>
					  </tr>
					</tbody>
				  </table>
				  
			</div>
			<div class="col-5 row mx-auto" style="color: rgb(109, 104, 117); ">
			
				<h2 class="col-10 text-center">Adornos restantes para pasteles</h2>
				<table class="table">
					<thead>
					  <tr>
						<th scope="col">Adorno</th>
						<th scope="col">Cantidad</th>
					  </tr>
					</thead>
					<tbody>
						<tr v-for="(item) in $store.state.adornos" :key="item.id">
						<td>{{ item.nombre }} </td>
						<td>{{ item.cantidad }}</td>
						</tr>
					</tbody>
				  </table>
				  
			</div>
			<div class="mb-3">
				<br>
				<hr>
			</div>
			<div class="col-10 row mx-auto" style="color: rgb(109, 104, 117); ">
			
				<h2 class="col-10 text-center">Pedidos realizados</h2>
				<table class="table">
					<thead>
					  <tr>
						<th scope="col">Nombre</th>
						<th scope="col">Teléfono</th>
						<th scope="col">Correo electrónico</th>
						<th scope="col">Pastel(es)</th>
						<th scope="col">Adorno(s)</th>
						<th scope="col">Descripción</th>
					  </tr>
					</thead>
					<tbody>
					  <tr v-for="item in $store.state.pedidos" :key="item.id">
						<td>{{ item.nombre }}</td>
						<td>{{ item.telefono }}</td>
						<td>{{ item.email }}</td>
						<td>{{ item.pastel }}</td>
						<td>{{ item.adorno }}</td>
						<td>{{ item.descripcion }}</td>
					  </tr>
					</tbody>
				  </table>
				  
			</div>
  </div>
    <InfoGeneral/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</template>
<script>
import InfoGeneral from '@/components/InfoGeneral.vue'


export default {
  name: 'ClienteView',
  components: {
    InfoGeneral
  },
 
}
</script>