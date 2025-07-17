

const app ={
  data(){
    return{
      string:'1',
      ProductNum: new Date().getTime().toString(),
      // 頁面切換
      indexShow: true, //首頁先設 false, 寫完改回
      blackShoesShow: false,

      
      //單一物件存放資料
      chooseItem:{
        
      },
      //原始陣列商品資訊
      productsItem :[
        {
          merchandiseName:'所有商品'
        },
        {
          merchandiseName:'慢跑鞋',
          shoesModel: ['Neofoam','R:UNER'],
          price: 'NT$4,000'
        },
        {
          merchandiseName:'滑板鞋',
          shoesModel: ['PLATFORM 404','VM001'],
          price: 'NT$2,600'
        },
        {
          merchandiseName:'厚底鞋',
          shoesModel: 'BOOMBLOK',
          price: 'NT$3,200'
        },
        {
          merchandiseName:'限定 / 聯名企劃',
          shoesModel: ['Melty Kiss','Sugar Snap'],
          price: 'NT$4,000'
        }
      ],
    }
  },
  methods:{
    clickItem(shoesItem){
      console.log(shoesItem.merchandiseName);
      this.chooseItem={
        name:shoesItem.merchandiseName,
        price:shoesItem.price,
        shoesModel: shoesItem.shoesModel
      }
      console.log(this.chooseItem);
    },
    getStyle(val){
      // console.log(val);
      // 商品列表
      if(this.chooseItem.name === '所有商品'){
        // console.log('err');
        return this.chooseItem.name === '所有商品'?'faded':'active';
      }

      if(!this.chooseItem.name || this.chooseItem.name === val.merchandiseName){
        // console.log('success');
        return this.chooseItem.name === val.merchandiseName?'active':'faded'
      } 

    }
    ,
    watchItem(lookItem){
      // console.log(lookItem);
      // console.log(this.chooseItem.name);
      if(!this.chooseItem.name || this.chooseItem.name === '所有商品'){
        return {opacity: 1 };
      }else{
        return { opacity: this.chooseItem.name === lookItem? 1 : 0.3 };
      }
    },
    changeBg(num){
      // console.log(typeof num.target.innerText);
      this.string = num.target.innerText;
      // console.log(this.string);
    },
    //鞋子介面切換
    shoeIntroduction(e){
      console.log(e.target.dataset.num);
      if(e.target.dataset.num === this.ProductNum){
        this.indexShow = !this.indexShow;
        this.blackShoesShow = !this.blackShoesShow;
      }
    }
  }
}

Vue.createApp(app).mount('#app');