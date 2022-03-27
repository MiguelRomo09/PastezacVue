<template>
  <div class="" style="color: rgb(109, 104, 117); "><h1 class="text-center">Pedido</h1>
				<h2 class="text-center">Datos del cliente</h2>
				<div class="col-3 mx-auto">
					<form>
						<div class="mb-3">
						  <label for="" class="form-label">Nombre</label>
						  <input type="text" class="form-control" id="" aria-describedby="emailHelp"
						  v-model="nombreCliente">
						</div>
						<div class="mb-3">
						  <label for="" class="form-label">Teléfono</label>
						  <input type="text" class="form-control" id="" aria-describedby="emailHelp"
						  v-model="telefonoCliente">
						</div>
						<div class="mb-3">
						  <label for="" class="form-label">Correo electrónico</label>
						  <input type="text" class="form-control" id="" aria-describedby="emailHelp"
						  v-model="emailCliente">
						</div>
					  </form>

				</div>
				<div class="col-6 mx-auto">
					<form>
						<div class="mb-3">
							<label for="exampleFormControlTextarea1" class="form-label">Descripción del pastel</label>
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="descCliente"></textarea>
						</div>
					  </form>

				</div>
				<hr>
				<h2 class="col-12 text-center w-100">Seleccione el sabor que desea</h2>
				<h4 class="col-12 text-center w-100">(Si selecciona mas de 1 sabor, se hara por mitades iguales y tendra un costo extra)</h4>
    <br>
	
	<!-- <h1>pedido:</h1>{{$store.state.pedidoSabor}} <br> -->
	<!-- datos cliente: {{$store.state.datosCliente}} -->
    <SaboresSelect/>
				<hr>
				<h2 class="col-12 mx-auto">Nuestros adornos para pastel</h2>
				<br>
    <AdornosSelect/>
    <InfoGeneral/>

    
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import SaboresSelect from '@/components/SaboresSelect.vue'
import AdornosSelect from '@/components/AdornosSelect.vue'
import InfoGeneral from '@/components/InfoGeneral.vue'


export default {
  name: 'ClienteView',
  components: {
    Carousel,
    SaboresSelect,
    AdornosSelect,
    InfoGeneral
  },
  
    data() {
      return this.inicial();
//       this.state.pedidoSabor = [];
//       this.state.pedidoAdornos = [];
//       this.state.datosCliente = {
//         nombre: '',
//         telefono: '',
//         email: '',
//         desc: '',
//       };
},  
  computed: {
    nombreCliente: {
      get(){
        return this.$store.state.nombre;
      },
      set(nombre){
        this.$store.dispatch("datosCliente",{"nombre":nombre});
      }
    },
    telefonoCliente: {
      get(){
        return this.$store.state.telefono;
      },
      set(telefono){
        this.$store.dispatch("datosCliente",{"telefono":telefono});
      },
    },
    emailCliente: {
      get(){
        return this.$store.state.email;
      },
      set(email){
        this.$store.dispatch("datosCliente",{"email":email});
      },
    },
    descCliente: {
      get(){
        return this.$store.state.desc;
      },
      set(desc){
        this.$store.dispatch("datosCliente",{"desc":desc});
      },
    }
  },
  methods: {
    inicial(){
      return this.$store.dispatch("clearAll");
    }
//     computed: {
//     nombreCliente: {
//       set(){
//         this.$store.dispatch("clearAll");
//       }
//     },
//   },
}
}
</script>