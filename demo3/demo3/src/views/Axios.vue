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
				this.$ajax.get('index.html', {
					params: {
						useId: '999'
					},
					headers: {
						token: 'jack'
					},
					before() {
						console.log('before init')
					}
				}).then(res => {
					this.msg = res.data;
				}).catch(error => {
					this.msg = error;
				})
			},
			post() {
				this.$ajax.post('index.html', {
					useId: '888'
				}, {
					headers: {
						token: 'tom'
					}
				}).then(res => {
					this.msg = res.data;
				}).catch(error => {
					this.msg = error;
				})
			},
			http() {
				this.$ajax({
					url: 'index.html',
					methods: 'get',
					data: {				
						userId: '101'
					},
					params: {			
						userId: '102'
					},
					headers: {
						token: 'http-test'
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