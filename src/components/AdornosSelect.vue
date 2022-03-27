<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div v-for="(item) in $store.state.adornos" :key="item.id">
      <div class="col">
        <input type="checkbox" class="btn-check" :id=item.nombre  autocomplete="off" @click="$store.dispatch('addOrRemoveAdornos',item)">
        <label class="btn btn-outline-primary" :for=item.nombre  >
        <div class="card h-100">
            <img v-bind:src= item.img class="card-img-top" style="height: 200px;"/> 
            <div class="card-body ">
                <h5 class="card-title text-center" style="color: rgb(109, 104, 117);">{{ item.sabor }} <span class="badge bg-light text-dark float-left">{{ item.precio }}</span></h5>
            </div>
        </div>
    </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdornosSelect",
};
</script>