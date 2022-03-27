import { createStore } from 'vuex'
import Swal from 'sweetalert2';

export default createStore({
  state: {
    pasteles:[
      {
        id:0,
        sabor:"Arándanos",
        img:"https://cdn.pixabay.com/photo/2019/01/21/15/06/blueberries-3946230_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:15
      },
      {
        id:1,
        sabor:"Zanahorias",
        img:"https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_960_720.jpg",
        precio:"$300",
        desc:"",
        cantidad:3
      },
      {
        id:2,
        sabor:"Bayas con crema",
        img:"https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:31
      },
      {
        id:3,
        sabor:"Queso con canela",
        img:"https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_960_720.jpg",
        precio:"$325",
        desc:"",
        cantidad:2
      },
      {
        id:4,
        sabor:"Fresa",
        img:"https://cdn.pixabay.com/photo/2021/05/24/13/15/cake-6279252_960_720.jpg",
        precio:"$300",
        desc:"",
        cantidad:6
      },
      {
        id:5,
        sabor:"Chocolate",
        img:"https://cdn.pixabay.com/photo/2014/10/13/16/11/cake-486874_960_720.jpg",
        precio:"$500",
        desc:"",
        cantidad:34
      },
      {
        id:6,
        sabor:"Chocolate sueco",
        img:"https://cdn.pixabay.com/photo/2017/03/07/04/40/swede-cakes-2123191_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:9
      },
      
      
    ],
    pasteles2:[
      {
        sabor:"Arándanos",
        img:"https://cdn.pixabay.com/photo/2019/01/21/15/06/blueberries-3946230_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:15
      },
      {
        sabor:"Zanahorias",
        img:"https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_960_720.jpg",
        precio:"$300",
        desc:"",
        cantidad:3
      },
      {
        sabor:"Bayas con crema",
        img:"https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:31
      },
      {
        sabor:"Bayas con crema",
        img:"https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_960_720.jpg",
        precio:"$350",
        desc:"",
        cantidad:31
      },
      
      
    ],
    adornos:[
      {
        id:0,
        nombre:"Topper personalizado",
        img:"https://i.etsystatic.com/7988025/r/il/287b89/1781295095/il_794xN.1781295095_84qq.jpg",
        precio:"$100",
        desc:"",
        cantidad:7
      },
      {
        id:1,
        nombre:"Topper de pastel de oro para bodas",
        img:"https://i.etsystatic.com/26050850/r/il/9b1569/3438574292/il_794xN.3438574292_q5sq.jpg",
        precio:"$150",
        desc:"",
        cantidad:3
      },
      {
        id:2,
        nombre:"3D 'ROSE' Palillos",
        img:"https://i.etsystatic.com/8073810/r/il/af7e1a/609754689/il_794xN.609754689_bwnh.jpg",
        precio:"$200",
        desc:"",
        cantidad:4
      },
      {
        id:3,
        nombre:"Toppers para graduación",
        img:"https://i.etsystatic.com/11962847/r/il/05cb62/2243489754/il_794xN.2243489754_oxnm.jpg",
        precio:"$120",
        desc:"",
        cantidad:15
      },
      {
        id:4,
        nombre:"Toppers de gimnasia",
        img:"https://i.etsystatic.com/9527521/r/il/9f9881/779828651/il_794xN.779828651_6m28.jpg",
        precio:"$90",
        desc:"",
        cantidad:1
      },
      
      
    ],
    infoGeneral:
      {
        calle:"Calle Tacuba",
        num:"143",
        colonia:"Col. Centro",
        municipio:"Zacatecas",
        estado:"Zacatecas",
        telefono:"4921448523",
        horario:"9:00 - 18:00",
      },

      pedidos:[
        {
          nombre : "Melissa Luevano",
          telefono:	 "4926988541",
          email:  "mluevano@gmail.com",
          pastel:  "Fresa, Chocolate",
          adorno:	 "Topper personalizado	",
          descripcion: "Quiero que el pastel sea blanco con las fresas alrededor"
        },
        // {
        //   nombre : "",
        //   telefono:	 "",
        //   email:  "",
        //   pastel:  "",
        //   adorno:	 "",
        //   descripcion: ""
        // },
        {
          nombre : "Luis Máquez",
          telefono:	 "4925548754",
          email:  "luismarquez@gmail.com",
          pastel:  "Arándanos",
          adorno:	 "-",
          descripcion: "-"
        }
      ],
    
    pedidoSabor:[],
    pedidoAdornos:[],
    datosCliente:{
      nombre: '',
      telefono: '',
      email: '',
      desc: '',
    },
      
      
    
    
    
  },
  getters: {
  },
  mutations: {
    dataCliente(state,  data) {
      console.log("data", data);
      console.log(Object.keys(data)[0]);
      if(Object.keys(data)[0] == "nombre"){
        state.datosCliente.nombre = data.nombre;
      }

      if(Object.keys(data)[0] == "telefono"){
        state.datosCliente.telefono = data.telefono;
      }
      if(Object.keys(data)[0] == "email"){
        state.datosCliente.email = data.email;
      }
      if(Object.keys(data)[0] == "desc"){
        state.datosCliente.desc = data.desc;
      }
      console.log('dataCliente',state.datosCliente);
    },
  },
  actions: {
    addOrRemovePastel(aux,item){
      const auxPastel = item;
      var i = this.state.pedidoSabor.indexOf( auxPastel );
      console.log("auxPastel",auxPastel.id);
      if ( i !== -1 ) {
        this.state.pedidoSabor.splice( i, 1 );
      }else{
        this.state.pedidoSabor.push(auxPastel);
      }
      console.log('pedidoSabor',this.state.pedidoSabor)
    },
    addOrRemoveAdornos(aux,item){
      const auxAdornos = item;
      var i = this.state.pedidoAdornos.indexOf( auxAdornos );
      console.log("auxAdornos",auxAdornos.id);
      if ( i !== -1 ) {
        this.state.pedidoAdornos.splice( i, 1 );
      }else{
        this.state.pedidoAdornos.push(auxAdornos);
      }
      console.log('pedidoAdornos',this.state.pedidoAdornos)
    },
    datosCliente({commit}, data) {
      commit("dataCliente",  data);
    },
    clearAll(){
      console.log('entro?');
      this.state.pedidoSabor = [];
      this.state.pedidoAdornos = [];
      this.state.datosCliente = {
        nombre: '',
        telefono: '',
        email: '',
        desc: '',
      };
    },
  },
  modules: {
  }
})
