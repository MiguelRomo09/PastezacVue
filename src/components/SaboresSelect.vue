<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div v-for="(item, index) in $store.state.pasteles" :key="item.id">
      <div class="col">
        <input type="checkbox" class="btn-check" :id=index  autocomplete="off" @click="$store.dispatch('addOrRemovePastel',item)">
        <label class="btn btn-outline-primary" :for=index  >
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
  name: "SaboresSelect",
};
</script>