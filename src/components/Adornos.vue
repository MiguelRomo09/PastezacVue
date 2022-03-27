<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="(item,index) in $store.state.adornos" :key="item.id">
      <div class="col">
        <div class="card h-100">
          <img v-bind:src= item.img style="height: 300px;"/> 
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ item.nombre }} {{ index }}
              <span class="badge bg-light text-dark float-left">{{ item.precio }}</span>
            </h5>
            <button
              type="button"
              class="btn btn-link float-end"
              style="
                background-color: rgb(109, 104, 117);
                color: rgb(255, 205, 178);
              "
            >
              Pedir
            </button>
          </div>
        </div>
      </div>
      <!-- {{ index }}. {{ item.img }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Adornos",
};
</script>