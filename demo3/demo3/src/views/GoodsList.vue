<template>
  <div>
    这是商品列表页面
    <span>{{$route.params.goodsId}}</span></br>
    <span>{{$route.params.user}}</span>

    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <router-link to="/goods/axios">axios组件</router-link>
    <div>
      <router-view></router-view>
    </div>

    <router-link to="/cart">用path跳转到购物车组件</router-link>
    <router-link v-bind:to="{name: 'cart', params: {cartId:123}}">用名字绑定购物车组件</router-link>
    <button @click="jump">用编程式路由跳转到购物车</button>
    



  </div>
</template>


<style>
</style>

<script>
  export default{
    data() {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      jump() {
        //this.$router.push('/cart');                   //跳转到cart.vue
        //this.$router.push({path: '/cart'})            //跳转到cart.vue
        this.$router.push({path: '/cart?goodsId=123'})  //跳转到cart.vue并传递参数goodsId=123, 使用$route.query.goodsId来接收参数
        //this.$router.go(-2)                           //后退两个页面
      }
    }
  }
</script>


