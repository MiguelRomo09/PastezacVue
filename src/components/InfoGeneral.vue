import InfoGeneral from '@/components/InfoGeneral.vue';
<template>
  <footer class="col-md-12"><br>
				<div class="row" style="background-color: rgb(181, 131, 141);color: pink">
					<div class="col-md-5">
						<hr>
					</div>
					<div class="col-md-2 text-center">
						<i class="bi bi-twitter" style="font-size: 2rem;"></i>
						<i class="bi bi-instagram" style="font-size: 2rem;"></i>
						<i class="bi bi-facebook" style="font-size: 2rem;"></i>
					</div>
					<div class="col-md-5">
						<hr>
					</div>
				</div>
				<div class="row" style="background-color: rgb(181, 131, 141);">
					<br>
					<div class="col-md-4">

					</div>
					<div class="row col-md-4 text-center" >
						<div class="col-md-6 text-center">

							<img src="../assets/logo.png" class="img-fluid mx-auto d-block" alt="..."
								style="max-width: 50%">
							<strong>PasteZac</strong>

						</div>
						<div class="col-md-6 text-center">
							<address>
								<br /> {{$store.state.infoGeneral.calle}}, #{{$store.state.infoGeneral.num}}, <br />{{$store.state.infoGeneral.colonia}}<br /> {{$store.state.infoGeneral.municipio}}, {{$store.state.infoGeneral.estado}}<br /> <abbr
									title="Phone">Tel:</abbr> {{$store.state.infoGeneral.telefono}}<br /> {{$store.state.infoGeneral.horario}}
							</address>

						</div>
					</div>
					<div class="col-md-4">

					</div>
					<br>
				</div>
			</footer>
</template>

<script>
export default {
  name: "InfoGeneral",
};
</script>