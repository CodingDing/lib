var Event = (function(){

	/*
	* 简易事件处理器
	* name$callback	
	*/
	function emitter (){

		this.name$callback={};
	}

	/*
	* 事件收集器
	* @name {string},事件名
	* @callback {function},事件的回调函数,同个事件支持绑定多个函数
	*/
	emitter.prototype.on = function(name, callback){

		if(!this.name$callback.hasOwnProperty(name) ){
			this.name$callback[name]=[];
		}

		this.name$callback[name].push(callback);

	};

	/*
	* 事件触发器
	* @name {string},需要触发的事件名
	* @data {object},事件回调函数的参数
	*/
	emitter.prototype.fire = function(name, data){
		
		if(!this.name$callback.hasOwnProperty(name) ){
			return;
		}

		var funcs = this.name$callback[name];
		for(var i=0;i<funcs.length;i++){
			funcs[i](data);
		}
	}



})();