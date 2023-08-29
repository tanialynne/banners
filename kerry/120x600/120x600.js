(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_120_bg.jpg", id:"_120_bg"},
		{src:"_120_btn.png", id:"_120_btn"},
		{src:"_120_kerry.jpg", id:"_120_kerry"},
		{src:"_120_logo.png", id:"_120_logo"},
		{src:"_160_border.png", id:"_160_border"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._120_bg = function() {
	this.initialize(img._120_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib._120_btn = function() {
	this.initialize(img._120_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib._120_kerry = function() {
	this.initialize(img._120_kerry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_logo = function() {
	this.initialize(img._120_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape.setTransform(97.7,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFAOgBQAPABAKAFQAKAHAFAKQAFAKAAAMIAABXQAAANgFAKQgFAKgKAGQgKAFgPAAQgOAAgKgFgAgLg5QgDAFAAAJIAABWQAAAKADAFQADAFAIgBQAIABAEgFQADgFAAgKIAAhWQAAgJgDgFQgEgFgIAAQgIAAgDAFg");
	this.shape_1.setTransform(85.7,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_2.setTransform(73.7,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_3.setTransform(62.3,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgXBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFANgBQAPAAAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAJIAABWQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAKQgFAKgKAGQgKAFgPAAQgNAAgKgFg");
	this.shape_4.setTransform(50.9,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgYBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFAOgBQAPABAKAFQAKAHAFAKQAFAKAAAMIAABXQAAANgFAKQgFAKgKAGQgKAFgPAAQgOAAgKgFgAgLg5QgDAFgBAJIAABWQABAKADAFQADAFAIgBQAJABADgFQAEgFAAgKIAAhWQAAgJgEgFQgDgFgJAAQgIAAgDAFg");
	this.shape_5.setTransform(33.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_6.setTransform(23,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,120,32.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape.setTransform(88.3,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_1.setTransform(79.1,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_2.setTransform(69.7,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_3.setTransform(60.8,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(51.3,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAaCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_5.setTransform(41.7,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAIAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgIAFgNAAQgLAAgIgFg");
	this.shape_6.setTransform(32.2,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,28);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(113,64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACAUAHAJQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgQgKgLQgJgMgLgMIgbgVQgNgMgJgQQgJgQgBgXQAAgfASgQQASgRAfAAQATAAANAIQANAIAHAOQAIAOACATIgqAEQgCgQgHgGQgHgGgIAAQgJAAgFAHQgGAGAAAMQAAANAJAMQAJALAMALQANALANALQAOANAJAQQAJAQAAAUQAAAWgJAPQgJAOgPAJQgQAHgTAAQgVAAgPgKg");
	this.shape_1.setTransform(100.9,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACAUAHAJQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgQgKgLQgJgMgLgMIgbgVQgNgMgJgQQgJgQgBgXQAAgfASgQQASgRAfAAQATAAANAIQANAIAHAOQAIAOACATIgqAEQgCgQgHgGQgHgGgIAAQgJAAgFAHQgGAGAAAMQAAANAJAMQAJALAMALQANALANALQAOANAJAQQAJAQAAAUQAAAWgJAPQgJAOgPAJQgQAHgTAAQgVAAgPgKg");
	this.shape_2.setTransform(84.9,53.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag9CBIAAkCIB1AAIAAAoIhIAAIAABCIA4AAIAAAlIg4AAIAABNIBOAAIAAAmg");
	this.shape_3.setTransform(69.4,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag4CBIAAkCIAsAAIAADcIBFAAIAAAmg");
	this.shape_4.setTransform(54.7,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBATASQATASAAApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_5.setTransform(30.4,53.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgTIAAiEQAAgSAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAASIAACEQAAATgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAOIAACCQgBAPAGAHQAFAHAMAAQANAAAFgHQAFgHAAgPIAAiCQAAgOgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_6.setTransform(12,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,120,47.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape.setTransform(94.7,54.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_1.setTransform(77.3,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_2.setTransform(58.9,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(42.5,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIABAAIAfhpIAwAAIg5CfIAAByg");
	this.shape_4.setTransform(25.3,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,120,49.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgIgQABgUIAAiLQgBgUAIgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAIAQAAAUIAACLQAAAUgIAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgGAIABAPIAACJQgBAPAGAIQAFAHANAAQAOAAAFgHQAGgIgBgPIAAiJQABgPgGgIQgFgHgOAAQgNAAgFAHg");
	this.shape.setTransform(99.1,54.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAjCJIgii0IgBAAIgeC0IgoAAIg0kRIAsAAIAdCtIABAAIAfitIAkAAIAhCtIABAAIAaitIAsAAIgxERg");
	this.shape_1.setTransform(76.5,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_2.setTransform(56.8,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAfCJIg7iqIAAAAIAACqIgrAAIAAkRIAsAAIA4CbIAAAAIAAibIAqAAIAAERg");
	this.shape_3.setTransform(31.5,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAkRIAtAAIAAERg");
	this.shape_4.setTransform(16.7,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,120,49.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape.setTransform(111.6,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_1.setTransform(102.2,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(94.4,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAWAAIAACPg");
	this.shape_3.setTransform(86.7,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgEgIgBgKIAAhJQABgKAEgIQADgJAJgFQAIgFAMAAQANAAAIAFQAIAFAEAJQAFAIAAAKIAABJQAAAKgFAIQgEAJgIAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(76.7,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(66.9,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_6.setTransform(57.7,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_7.setTransform(49.4,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgYAAIAAiPIAYAAIAAA7IAYAAIAAg7IAZAAIAACPg");
	this.shape_8.setTransform(40,21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAIAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgIAFgNAAQgLAAgIgFg");
	this.shape_9.setTransform(29.9,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(20.7,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgJAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIAShTIAgAAIAACPg");
	this.shape_11.setTransform(10,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,120,28);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQAKALAAAWIAAA3QAAAWgKALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFAAgLIAAg9QAAgLgEgFQgFgEgHAAIgIAAg");
	this.shape.setTransform(92.8,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_1.setTransform(83.6,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_2.setTransform(73.9,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_3.setTransform(63.9,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_4.setTransform(54.5,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgLBIIgeiPIAYAAIARBjIAAAAIARhjIAZAAIgeCPg");
	this.shape_5.setTransform(45.6,27.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQAKALAAAWIAAA3QAAAWgKALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFAAgLIAAg9QAAgLgEgFQgFgEgHAAIgIAAg");
	this.shape_6.setTransform(36.1,27.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_7.setTransform(26.7,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,120,28);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglBIIAAiPIAlAAQASAAAKALQAJALABAWIAAA3QgBAWgJALQgKALgSAAgAgMAzIAJAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgJAAg");
	this.shape.setTransform(95,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_1.setTransform(85,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_2.setTransform(75.6,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAcBIIAAhvIAAAAIgWBvIgKAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_3.setTransform(65,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_4.setTransform(54.7,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQALALgBAWIAAA3QABAWgLALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgIAAg");
	this.shape_5.setTransform(45,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_6.setTransform(30.6,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_7.setTransform(22.8,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,28);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(84.5,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_1.setTransform(77.2,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgJgFg");
	this.shape_2.setTransform(67.2,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(58.3,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_4.setTransform(46.1,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_5.setTransform(37.8,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,120,28);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAcBIIAAhvIAAAAIgWBvIgLAAIgWhvIAAAAIAABvIgWAAIAAiPIAhAAIAQBTIAShTIAgAAIAACPg");
	this.shape.setTransform(89.5,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAaCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_1.setTransform(78.9,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_2.setTransform(69.7,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgaBAQgKgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAIAFAFAJQADAJABALIAAAJIgYAAQAAgLgCgGQgBgFgDgDQgDgCgDAAQgFAAgDADQgDAEAAAJIAABIQAAAHADAEQACAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgGAEQgFADgHAAQgOAAgJgKg");
	this.shape_3.setTransform(59.4,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgFgIAAgKIAAhJQAAgKAFgIQADgJAJgFQAIgFAMAAQANAAAIAFQAJAFADAJQAFAIAAAKIAABJQAAAKgFAIQgDAJgJAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(49.5,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(39.7,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgnBIIAAiPIAkAAQAVAAALAKQALAKAAAXQAAAXgLAIQgLAKgVAAIgLAAIAAA7gAgOgGIAKAAQAKAAAEgFQAFgEAAgNQAAgNgFgFQgEgEgKAAIgKAAg");
	this.shape_6.setTransform(29.7,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,120,28);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape.setTransform(111.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_1.setTransform(102.2,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(94.4,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAWAAIAACPg");
	this.shape_3.setTransform(86.7,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgEgIgBgKIAAhJQABgKAEgIQADgJAJgFQAIgFAMAAQANAAAIAFQAIAFAEAJQAFAIAAAKIAABJQAAAKgFAIQgEAJgIAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(76.7,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(66.9,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_6.setTransform(57.7,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_7.setTransform(49.4,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgYAAIAAiPIAYAAIAAA7IAYAAIAAg7IAZAAIAACPg");
	this.shape_8.setTransform(40,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAIAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgIAFgNAAQgLAAgIgFg");
	this.shape_9.setTransform(29.9,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(20.7,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgJAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIAShTIAgAAIAACPg");
	this.shape_11.setTransform(10,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6,120,28);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape.setTransform(69.1,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgZAAIAAiPIAZAAIAAA7IAYAAIAAg7IAaAAIAACPg");
	this.shape_1.setTransform(59.5,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_2.setTransform(50.5,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11,120,28);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABHEgIgRiAIhrAAIgRCAIhgAAIBqo/IB5AAIBqI/gAAnBKIgnj2IAAAAIgmD2IBNAAg");
	this.shape.setTransform(88.9,70.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgwEgIAAo/IBhAAIAAI/g");
	this.shape_1.setTransform(60,70.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgwEgIh5o/IBiAAIBHGOIAAAAIBImOIBiAAIh5I/g");
	this.shape_2.setTransform(31.2,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,100);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXBSQgKgHgGgKQgEgMgCgNIAdgDQABANAFAGQAFAHAFAAQAIgBAEgEQAFgEAAgHQAAgLgGgHQgGgIgHgIIgSgNQgJgIgGgLQgGgLAAgPQgBgUAMgLQAMgLAVAAQAMAAAIAEQAJAGAGAKQAEAJACAMIgdAEQAAgLgFgFQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAHQAFAIAHAIIASANQAJAJAGALQAGAKABAOQgBAOgFAKQgHAKgKAFQgLAGgMgBQgOAAgJgGg");
	this.shape.setTransform(86.9,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_1.setTransform(76.6,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_2.setTransform(66.8,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgtBWIAAirIAsAAQAWAAALAMQALALAAAXQAAAHgCAIQgCAHgFAFQgFAGgHADQAMADAGAKQAGAJAAARQAAAPgEALQgFALgKAHQgKAGgRAAgAgQA+IANAAQAKAAAFgHQAFgHAAgNQAAgNgGgHQgGgHgLAAIgKAAgAgQgOIALAAQAHAAAFgGQAGgFAAgLQAAgMgFgGQgEgHgIAAIgMAAg");
	this.shape_3.setTransform(55.8,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_4.setTransform(44.3,36.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_5.setTransform(34.3,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,20,120,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AggBMQgLgLAAgVIAAhXQAAgNAEgKQAFgKAKgGQAKgFAOAAQANAAAKAGQAKAGAFALQAFALAAANIAAALIgcAAQAAgNgCgHQgCgHgEgDQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAJADAEQAEAFAHABQAHAAAEgGQAEgGAAgNIAAgRIgRAAIAAgVIAuAAIAABWIgOAAIgFgNQgHAIgHADQgGAEgIABQgSgBgLgMg");
	this.shape.setTransform(91.6,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_1.setTransform(79.7,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAirIAcAAIAACrg");
	this.shape_2.setTransform(70.4,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_3.setTransform(62.3,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_4.setTransform(54.4,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_5.setTransform(45.7,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_6.setTransform(32.1,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,30,120,32.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape.setTransform(105,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFAOAAQAPAAAKAFQAKAGAFAKQAFAKAAANIAABXQAAAMgFAKQgFAKgKAHQgKAFgPABQgOgBgKgFgAgLg5QgDAEAAALIAABVQAAAKADAFQAEAFAHAAQAJAAADgFQADgFAAgKIAAhVQAAgLgDgEQgDgFgJAAQgHAAgEAFg");
	this.shape_1.setTransform(91.7,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_2.setTransform(79.9,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIgzAAIAAAtIAlAAIAAAXIglAAIAABNg");
	this.shape_3.setTransform(68.6,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_4.setTransform(53,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_5.setTransform(42.3,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_6.setTransform(31.3,46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_7.setTransform(17.4,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,30,120,32.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbClIAAiJIhFjBIA6AAIAmB/IABAAIAmh/IA6AAIhFDBIAACJg");
	this.shape.setTransform(104.4,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAiCmIgmiKIgOABIgQABIAACIIg5AAIAAlKIBQAAQAugBAYAXQAZAXAAA0QAAAbgHARQgFARgKAIQgIAJgLAEIAxCXgAgigPIAVAAQAUAAAKgLQAKgLgBgeQABgcgKgMQgKgLgUAAIgVAAg");
	this.shape_1.setTransform(83.2,49.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiCmIgniKIgNABIgQABIAACIIg5AAIAAlKIBQAAQAugBAZAXQAXAXAAA0QAAAbgFARQgGARgJAIQgJAJgKAEIAwCXgAgigPIAUAAQAWAAAJgLQAKgLAAgeQAAgcgKgMQgJgLgWAAIgUAAg");
	this.shape_2.setTransform(60.2,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhOClIAAlKICXAAIAAAyIheAAIAABVIBIAAIAAAxIhIAAIAABhIBkAAIAAAxg");
	this.shape_3.setTransform(38.5,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAhClIgtiaIgBAAIgUAlIAAB1Ig5AAIAAlKIA5AAIAAB7IABAAIA6h7IA5AAIg+B8IBGDOg");
	this.shape_4.setTransform(19,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,20,120,59.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_kerry();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();
	this.instance.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(382));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(62.5,350,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(355).to({_off:false},0).to({alpha:1},13).wait(14));

	// Layer 5
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(250,420.8,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(267).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(27));

	// Layer 4
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(250,382.5,1,1,0,0,0,80,24.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(72).to({alpha:0},7).wait(27));

	// Layer 25
	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(27));

	// Layer 1
	this.instance_5 = new lib.Symbol24();
	this.instance_5.setTransform(240,336.6,1,1,0,0,0,80,17.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(27));

	// Layer 24
	this.instance_6 = new lib.Symbol20();
	this.instance_6.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(27));

	// Layer 23
	this.instance_7 = new lib.Symbol19();
	this.instance_7.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(247).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(27));

	// Layer 6
	this.instance_8 = new lib.Symbol18();
	this.instance_8.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(243).to({_off:false},0).to({x:80,alpha:1},13).wait(92).to({alpha:0},7).wait(27));

	// Layer 22
	this.instance_9 = new lib.Symbol17();
	this.instance_9.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(139));

	// Layer 21
	this.instance_10 = new lib.Symbol16();
	this.instance_10.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(138).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(139));

	// Layer 19
	this.instance_11 = new lib.Symbol15();
	this.instance_11.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(134).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(139));

	// Layer 18
	this.instance_12 = new lib.Symbol13();
	this.instance_12.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(139));

	// Layer 3
	this.instance_13 = new lib.Symbol12();
	this.instance_13.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(125).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(139));

	// Layer 7
	this.instance_14 = new lib.Symbol25();
	this.instance_14.setTransform(239,427.5,1,1,0,0,0,80,26);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(43).to({_off:false},0).to({x:78,alpha:1},12).wait(63).to({alpha:0},7).wait(257));

	// Layer 17
	this.instance_15 = new lib.Symbol11();
	this.instance_15.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(66).to({alpha:0},7).wait(257));

	// Layer 16
	this.instance_16 = new lib.Symbol10();
	this.instance_16.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(70).to({alpha:0},7).wait(257));

	// Layer 9
	this.instance_17 = new lib.Symbol9();
	this.instance_17.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(75).to({alpha:0},7).wait(257));

	// Layer 14
	this.instance_18 = new lib.Symbol4();
	this.instance_18.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(79).to({alpha:0},7).wait(257));

	// Layer 2
	this.instance_19 = new lib.Symbol2();
	this.instance_19.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({y:559,alpha:1},13).wait(356));

	// Layer 13
	this.instance_20 = new lib.Symbol5();
	this.instance_20.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(13).to({_off:false},0).to({alpha:1},13).wait(356));

	// Layer 12
	this.instance_21 = new lib.Symbol1();
	this.instance_21.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({alpha:1},13).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;