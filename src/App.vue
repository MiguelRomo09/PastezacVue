<template>
  <div class="col-12" style="color: rgb(229, 152, 155);  padding-right: 0; padding-left: 0;">
				<nav class="navbar navbar-expand-lg navbar-light mb-2 w-100 "
					style="background-color: rgb(109, 104, 117); color: rgb(229, 152, 155);">
					<div class="container-fluid">
            <router-link class="navbar-brand " style="color: rgb(255, 205, 178);" to="/">PasteZac</router-link>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item text-center">

								</li>
							</ul>
							<form class="d-flex">
                <router-link class="nav-link" style="color: rgb(255, 205, 178);" to="/cliente">Hacer pedido</router-link>
                <router-link class="nav-link" style="color: rgb(255, 205, 178);" to="/pastelero">Acceder como pastelero</router-link>
							</form>
						</div>
					</div>
				</nav>

			</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
