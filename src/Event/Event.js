var Event = (function(){

	function emitter(){

		// 用于存储时间的json
		// var name$callback = {
		// 	name: [callback1 ,[callback2]]
		// }; 
		this.name$callback = {};
	}

	/*
	* 用来添加事件至事件队列
	* @name {string}，事件名称
	* @callback {function}，事件的回调函数
	*/
	emitter.prototype.on = function(name, callback){
		var self = this;

		if(!(name in this.name$callback)){
			this.name$callback[name] = [];
		}
		this.name$callback[name].push(callback);
	};

	/*
	* 触发指定名称的事件，传入参数，并执行对应的回调函数
	* @name {string}，事件名称
	* @data {Object}，回调函数的参数
	*/
	emitter.prototype.fire = function(name,data){
		var self = this;

		if(!(name in this.name$callback)){
			return;
		}
		var funs = this.name$callback[name];

		for(var i =0;i<funs.length;i++){
			funs[i](data);
		}
	};

	return{
		emitter: emitter
	}

})();