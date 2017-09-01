<template>
	<div id="app" class="container">
		<h1>axios插件讲解</h1>
		<!-- <a href="javascript:;"></a>防止a链接的跳转和页面的刷新 -->
		<a href="javascript:;" class="btn btn-primary" @click="get">Get请求</a>
		<a href="javascript:;" class="btn btn-primary" @click="post">Post请求</a>
		<a href="javascript:;" class="btn btn-primary" @click="http">http请求</a>
		<div>
			<span>{{msg}}</span>
		</div>
	</div>
</template>
<style>
</style>

<script>
	export default{
		data() {
			return{
				msg: ''
			}
		},
		mounted: function () {
			this.$ajax.interceptors.request.use(function (config) {
				console.log('request init');
				return config;
			}),
			this.$ajax.interceptors.response.use(function (response) {
				console.log('response init');
				return response;
			})
		},
		methods: {
			get() {
				this.$ajax.get('http://127.0.0.1:3000/goods', {
					params: {
						
					},
					headers: {
						
					},
					before() {
						console.log('before init')
					}
				}).then(res => {
					this.msg = res.data;
					console.log(this.msg)
				}).catch(error => {
					this.msg = error;
				})
			},
			post() {
				this.$ajax.post('index.html', {
					
				}, {
					headers: {
						
					}
				}).then(res => {
					this.msg = res.data;
				}).catch(error => {
					this.msg = error;
				})
			},
			http() {
				this.$ajax({
					url: 'http://127.0.0.1:3000/goods',
					methods: 'get',
					data: {				
						
					},
					params: {			
						
					},
					headers: {
						
					}
				}).then(res => {
					this.msg = res.data;
				}).catch(error => {
					this.msg = error;
				})
			}
		}
	}
</script>