(function(){
	var emitter = new Event.emitter();

	emitter.on('click', function(){
		console.log('is run!');
	});

	var btn = document.getElementById('btn-test');
	btn.onclick = function(){
		emitter.fire('click');
	}
})();

(function(){
	var emitter = new Event.emitter();
	console.log(emitter.name$callback);

	emitter.on('click', function(){
		console.log('is run2!');
	});

	var btn = document.getElementById('btn-2');
	btn.onclick = function(){
		emitter.fire('click');
	}
})();