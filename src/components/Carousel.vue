<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
							class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
							aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
							aria-label="Slide 3"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://cdn.pixabay.com/photo/2019/01/21/15/06/blueberries-3946230_960_720.jpg"
								style="height: 500px" class="d-block w-50 mx-auto " alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h5>Arándanos</h5>
							</div>
						</div>
						<div class="carousel-item">
							<img src="https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_960_720.jpg"
								style="height: 500px" class="d-block w-50 mx-auto" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h5>Queso con canela</h5>
							</div>
						</div>
						<div class="carousel-item">
							<img src="https://cdn.pixabay.com/photo/2020/03/10/03/49/red-velvet-cake-4917734_960_720.jpg"
								style="height: 500px" class="d-block w-50 mx-auto" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h5>Red velvet</h5>
								<p>Prueba este delicioso pastel.</p>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
</template>

<script>

export default {
  name: 'Carousel'
}
</script>
