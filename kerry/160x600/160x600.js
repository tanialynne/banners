(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_160_bg.jpg", id:"_160_bg"},
		{src:"_160_border.png", id:"_160_border"},
		{src:"_160_btn.png", id:"_160_btn"},
		{src:"_160_kerry.jpg", id:"_160_kerry"},
		{src:"_160_logo.png", id:"_160_logo"}
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



(lib._160_bg = function() {
	this.initialize(img._160_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_btn = function() {
	this.initialize(img._160_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,35);


(lib._160_kerry = function() {
	this.initialize(img._160_kerry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160_logo = function() {
	this.initialize(img._160_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,114);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAgCQIg9iyIgBAAIAACyIgtAAIAAkfIAuAAIA7CjIABAAIAAijIAsAAIAAEfg");
	this.shape.setTransform(141.1,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgpCKQgRgKgJgRQgIgRAAgUIAAiSQAAgWAIgQQAJgRARgJQARgLAYAAQAZAAARALQARAJAIARQAJAQgBAWIAACSQABAUgJARQgIARgRAKQgRAKgZAAQgYAAgRgKgAgThgQgGAIAAARIAACPQAAARAGAIQAFAIAOAAQAPAAAFgIQAGgIAAgRIAAiPQAAgRgGgIQgFgIgPAAQgOAAgFAIg");
	this.shape_1.setTransform(121.1,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAhCQIg+iyIAAAAIAACyIgtAAIAAkfIAtAAIA7CjIABAAIAAijIAtAAIAAEfg");
	this.shape_2.setTransform(101.1,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAkCQIgJhAIg1AAIgIBAIgwAAIA0kfIA8AAIA1EfgAATAlIgTh6IAAAAIgSB6IAlAAg");
	this.shape_3.setTransform(82.3,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoCKQgRgKgIgRQgIgRAAgUIAAiSQAAgWAIgQQAIgRARgJQARgLAYAAQAZAAAQALQAQALAIASQAIASAAAVIAAAWIgxAAIAAgXQAAgSgHgJQgHgIgKAAQgNAAgGAIQgGAIAAARIAACPQAAARAGAIQAGAIANAAQANAAAGgIQAFgHAAgPIAAgiIAxAAIAAAhQAAAUgIARQgIARgQAKQgQAKgZAAQgYAAgRgKg");
	this.shape_4.setTransform(63.2,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgqCKQgQgKgJgRQgHgRgBgUIAAiSQABgWAHgQQAJgRAQgJQARgLAZAAQAZAAASALQAQAJAIARQAJAQgBAWIAACSQABAUgJARQgIARgQAKQgSAKgZAAQgZAAgRgKgAgThgQgGAIAAARIAACPQAAARAGAIQAFAIAOAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgOAAgFAIg");
	this.shape_5.setTransform(34.5,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgYCQIAAjzIgvAAIAAgsICPAAIAAAsIgvAAIAADzg");
	this.shape_6.setTransform(16.7,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,52);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgFQAGgEAAgIQgBgLgGgIQgHgJgHgIIgUgPQgKgJgGgLQgHgMAAgQQAAgXANgLQANgMAWgBQANAAAKAGQAJAGAGAKQAFAKACANIgfAEQgBgMgFgEQgFgFgGABQgGgBgEAFQgEAFAAAJQAAAJAHAJQAGAIAIAHIATAPQAKAKAHAMQAGALAAAPQAAAPgGALQgHALgLAFQgLAGgOAAQgPAAgKgHg");
	this.shape.setTransform(116.7,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AATBeIgVhOIgIABIgIAAIAABNIghAAIAAi6IAuAAQAZAAANAMQAOANAAAeQAAAPgDAKQgEAJgFADQgFAGgFACIAbBWgAgSgIIALAAQALAAAFgGQAGgGAAgRQAAgQgGgHQgFgGgLABIgLAAg");
	this.shape_1.setTransform(104.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAoAAIAAAaIgoAAIAAA3IA3AAIAAAdg");
	this.shape_2.setTransform(92.6,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA4AAIAAAdg");
	this.shape_3.setTransform(81,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBeIgVhOIgIABIgIAAIAABNIghAAIAAi6IAuAAQAZAAANAMQAOANAAAeQAAAPgDAKQgEAJgFADQgFAGgFACIAbBWgAgSgIIALAAQALAAAFgGQAGgGAAgRQAAgQgGgHQgFgGgLABIgLAAg");
	this.shape_4.setTransform(68.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_5.setTransform(56.2,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_6.setTransform(43.8,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,35.2);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(135.9,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_1.setTransform(123.1,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_2.setTransform(106.3,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(90,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_4.setTransform(74.4,54.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_5.setTransform(48.8,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgHgQgBgUIAAiLQABgUAHgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAHAQAAAUIAACLQAAAUgHAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgGAIAAAPIAACJQAAAPAGAIQAGAHAMAAQANAAAGgHQAFgIABgPIAAiJQgBgPgFgIQgGgHgNAAQgMAAgGAHg");
	this.shape_6.setTransform(29.4,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,160,49.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape.setTransform(114.7,54.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_1.setTransform(97.3,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_2.setTransform(78.9,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(62.5,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIABAAIAfhpIAwAAIg5CfIAAByg");
	this.shape_4.setTransform(45.3,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,160,49.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgHgQAAgUIAAiLQAAgUAHgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAIAQAAAUIAACLQAAAUgIAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgFAIgBAPIAACJQABAPAFAIQAGAHAMAAQAOAAAFgHQAGgIAAgPIAAiJQAAgPgGgIQgFgHgOAAQgMAAgGAHg");
	this.shape.setTransform(119.1,54.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAjCJIgii0IgBAAIgeC0IgoAAIgzkRIArAAIAeCtIAAAAIAfitIAkAAIAgCtIABAAIAbitIAsAAIgwERg");
	this.shape_1.setTransform(96.5,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_2.setTransform(76.8,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAeCJIg6iqIAAAAIAACqIgqAAIAAkRIArAAIA4CbIAAAAIAAibIArAAIAAERg");
	this.shape_3.setTransform(51.5,54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAkRIAtAAIAAERg");
	this.shape_4.setTransform(36.7,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,160,49.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgFQAGgEAAgIQgBgLgGgIQgHgJgHgIIgUgPQgKgJgGgLQgHgMAAgQQAAgXANgLQANgMAWgBQANAAAKAGQAJAGAGAKQAFAKACANIgfAEQgBgMgFgEQgFgFgGABQgGgBgEAFQgEAFAAAJQAAAJAHAJQAGAIAIAHIATAPQAKAKAHAMQAGALAAAPQAAAPgGALQgHALgLAFQgLAGgOAAQgPAAgKgHg");
	this.shape.setTransform(147.1,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_1.setTransform(134.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_2.setTransform(124.8,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi6IAeAAIAlBpIABAAIAAhpIAdAAIAAC6g");
	this.shape_3.setTransform(114.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgbBZQgKgGgFgLQgGgLAAgNIAAheQAAgOAGgLQAFgLAKgGQALgHAQAAQARAAALAHQAKAGAFALQAGALAAAOIAABeQAAANgGALQgFALgKAGQgLAHgRAAQgQAAgLgHgAgMg+QgEAGABAKIAABdQgBAKAEAGQAEAFAIAAQAJAAAEgFQAEgGgBgKIAAhdQABgKgEgGQgEgEgJAAQgIAAgEAEg");
	this.shape_4.setTransform(101.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBeIgVhOIgIABIgIAAIAABNIghAAIAAi6IAuAAQAZAAANAMQAOANAAAeQAAAPgDAKQgEAJgFADQgFAGgFACIAbBWgAgSgIIALAAQALAAAFgGQAGgGAAgRQAAgQgGgHQgFgGgLABIgLAAg");
	this.shape_5.setTransform(88.9,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBeIAAieIggAAIAAgcIBdAAIAAAcIggAAIAACeg");
	this.shape_6.setTransform(77.1,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_7.setTransform(66.3,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBeIAAhUIghAAIAABUIggAAIAAi6IAgAAIAABMIAhAAIAAhMIAgAAIAAC6g");
	this.shape_8.setTransform(54,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_9.setTransform(40.9,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA3AAIAAAdg");
	this.shape_10.setTransform(29,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAlBeIAAiRIAAAAIgeCRIgNAAIgdiRIgBAAIAACRIgcAAIAAi6IAqAAIAWBsIAAAAIAWhsIArAAIAAC6g");
	this.shape_11.setTransform(15,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,35.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwBeIAAi6IAwAAQAXAAANANQANAOAAAdIAABJQAAAdgNANQgNAPgXAAgAgQBDIAMAAQAKAAAGgFQAFgGgBgPIAAhQQABgPgFgGQgGgGgKABIgMAAg");
	this.shape.setTransform(122.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBeIAAi6IBUAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA4AAIAAAdg");
	this.shape_1.setTransform(110.6,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_2.setTransform(98,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi6IAeAAIAlBpIABAAIAAhpIAdAAIAAC6g");
	this.shape_3.setTransform(85.1,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_4.setTransform(72.8,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPBeIgni6IAgAAIAWCAIAAAAIAXiAIAgAAIgnC6g");
	this.shape_5.setTransform(61.2,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgwBeIAAi6IAwAAQAXAAANANQANAOAAAdIAABJQAAAdgNANQgNAPgXAAgAgQBDIALAAQALAAAFgFQAGgGAAgPIAAhQQAAgPgGgGQgFgGgLABIgLAAg");
	this.shape_6.setTransform(49,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_7.setTransform(36.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,35.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwBeIAAi6IAwAAQAXAAANANQANAOAAAdIAABJQAAAdgNANQgNAPgXAAgAgPBDIALAAQAKAAAGgFQAFgGgBgPIAAhQQABgPgFgGQgGgGgKABIgLAAg");
	this.shape.setTransform(125.5,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi6IAeAAIAlBpIABAAIAAhpIAdAAIAAC6g");
	this.shape_1.setTransform(112.5,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_2.setTransform(100.2,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAlBeIAAiRIgBAAIgdCRIgOAAIgdiRIAAAAIAACRIgcAAIAAi6IAqAAIAWBsIAAAAIAXhsIAqAAIAAC6g");
	this.shape_3.setTransform(86.5,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgrBeIAAi6IBUAAIAAAcIg0AAIAAAwIAoAAIAAAaIgoAAIAAA3IA4AAIAAAdg");
	this.shape_4.setTransform(73.1,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgwBeIAAi6IAwAAQAXAAANANQANAOAAAdIAABJQAAAdgNANQgNAPgXAAgAgQBDIAMAAQAKAAAGgFQAFgGgBgPIAAhQQABgPgFgGQgGgGgKABIgMAAg");
	this.shape_5.setTransform(60.5,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi6IAeAAIAlBpIABAAIAAhpIAdAAIAAC6g");
	this.shape_6.setTransform(41.8,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_7.setTransform(31.6,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,35.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(111.7,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgKAAgOIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAHAFALQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAAOgFAKQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_1.setTransform(102.3,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgKAAgOIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAHAFALQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAAOgFAKQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_2.setTransform(89.3,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_3.setTransform(77.8,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_4.setTransform(62,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_5.setTransform(51.1,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,160,35.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAlBdIAAiQIgBAAIgdCQIgOAAIgciQIgBAAIAACQIgcAAIAAi6IAqAAIAWBtIAAAAIAWhtIArAAIAAC6g");
	this.shape.setTransform(118.3,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_1.setTransform(104.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZAAANAOQAOANAAAdQAAAPgDAJQgEALgFACQgFAGgFADIAbBUgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgQgGgHQgFgGgLAAIgLAAg");
	this.shape_2.setTransform(92.5,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgjBTQgMgNAAgWIAAheQAAgOAFgLQAFgLALgGQAKgGAQgBQAOAAALAHQALAIAFALQAGALAAAPIAAALIgfAAQAAgNgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAFQgEAEAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABdIgQAAIgFgNQgHAIgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_3.setTransform(79.2,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgaBaQgLgHgGgLQgFgKAAgOIAAheQAAgOAFgLQAGgLALgGQALgGAPgBQAQABALAGQALAGAGALQAFALAAAOIAABeQAAAOgFAKQgGALgLAHQgLAGgQAAQgPAAgLgGgAgMg9QgEAEAAALIAABdQAAAKAEAGQAEAFAIAAQAJAAAEgFQAEgGgBgKIAAhdQABgLgEgEQgEgFgJgBQgIABgEAFg");
	this.shape_4.setTransform(66.3,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZAAANAOQAOANAAAdQAAAPgDAJQgEALgFACQgFAGgFADIAbBUgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgQgGgHQgFgGgLAAIgLAAg");
	this.shape_5.setTransform(53.5,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgzBdIAAi6IAvAAQAbAAAPAOQAOANAAAdQAAAegOALQgPANgbAAIgOAAIAABMgAgSgIIAMAAQAOAAAGgGQAGgHAAgQQAAgQgGgHQgGgGgOAAIgMAAg");
	this.shape_6.setTransform(40.5,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,160,35.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgFQAGgEAAgIQgBgLgGgIQgHgJgHgIIgUgPQgKgJgGgLQgHgMAAgQQAAgXANgLQANgMAWgBQANAAAKAGQAJAGAGAKQAFAKACANIgfAEQgBgMgFgEQgFgFgGABQgGgBgEAFQgEAFAAAJQAAAJAHAJQAGAIAIAHIATAPQAKAKAHAMQAGALAAAPQAAAPgGALQgHALgLAFQgLAGgOAAQgPAAgKgHg");
	this.shape.setTransform(147.1,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_1.setTransform(134.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_2.setTransform(124.8,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi6IAeAAIAlBpIABAAIAAhpIAdAAIAAC6g");
	this.shape_3.setTransform(114.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgbBZQgKgGgFgLQgGgLAAgNIAAheQAAgOAGgLQAFgLAKgGQALgHAQAAQARAAALAHQAKAGAFALQAGALAAAOIAABeQAAANgGALQgFALgKAGQgLAHgRAAQgQAAgLgHgAgMg+QgEAGABAKIAABdQgBAKAEAGQAEAFAIAAQAJAAAEgFQAEgGgBgKIAAhdQABgKgEgGQgEgEgJAAQgIAAgEAEg");
	this.shape_4.setTransform(101.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBeIgVhOIgIABIgIAAIAABNIghAAIAAi6IAuAAQAZAAANAMQAOANAAAeQAAAPgDAKQgEAJgFADQgFAGgFACIAbBWgAgSgIIALAAQALAAAFgGQAGgGAAgRQAAgQgGgHQgFgGgLABIgLAAg");
	this.shape_5.setTransform(88.9,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBeIAAieIggAAIAAgcIBdAAIAAAcIggAAIAACeg");
	this.shape_6.setTransform(77.1,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_7.setTransform(66.3,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBeIAAhUIghAAIAABUIggAAIAAi6IAgAAIAABMIAhAAIAAhMIAgAAIAAC6g");
	this.shape_8.setTransform(54,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_9.setTransform(40.9,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA3AAIAAAdg");
	this.shape_10.setTransform(29,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAlBeIAAiRIAAAAIgeCRIgNAAIgdiRIgBAAIAACRIgcAAIAAi6IAqAAIAWBsIAAAAIAWhsIArAAIAAC6g");
	this.shape_11.setTransform(15,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,35.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAnAAIAAAbIgnAAIAAA3IA3AAIAAAcg");
	this.shape.setTransform(91.8,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBeIAAhTIgfAAIAABTIghAAIAAi6IAhAAIAABMIAfAAIAAhMIAhAAIAAC6g");
	this.shape_1.setTransform(79.3,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBeIAAieIgfAAIAAgcIBdAAIAAAcIggAAIAACeg");
	this.shape_2.setTransform(67.7,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,160,35.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABZFoIgVifIiGAAIgWCfIh4AAICErQICZAAICELQgAAyBdIgyk1IAAAAIgwE1IBiAAg");
	this.shape.setTransform(116.1,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag9FoIAArQIB7AAIAALQg");
	this.shape_1.setTransform(80,62.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag9FoIiWrQIB6AAIBZH0IAAAAIBan0IB6AAIiXLQg");
	this.shape_2.setTransform(43.9,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,124);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgnCJQgRgLgJgSQgIgSgCgWIAvgHQACAWAIALQAIALAKAAQANgBAIgGQAIgHAAgMQgBgRgKgNQgJgOgNgMQgQgMgPgMQgPgNgJgTQgKgRgBgZQAAgiAUgTQAUgSAjgBQAUAAAPAJQAOAJAJAQQAIAPADAVIgwAFQgBgSgJgHQgHgHgJAAQgKAAgHAIQgFAHAAAOQAAAPAKAMQAKAMANAMIAeAZQAOAOALASQAJASABAXQAAAYgKARQgKAPgRAKQgSAIgWAAQgXAAgPgLg");
	this.shape.setTransform(123.2,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_1.setTransform(106,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_2.setTransform(89.6,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhNCQIAAkfIBKAAQAmAAASAUQATATAAAmQAAAMgEAMQgEAMgHAKQgIAJgMAFQATAGALAQQAKAQAAAdQABAYgIASQgIATgRALQgRALgcAAgAgbBnIAVAAQARAAAJgLQAIgMAAgVQAAgWgKgLQgJgMgUABIgQAAgAgbgZIASAAQAMAAAJgJQAKgKAAgRQAAgUgIgKQgIgLgOAAIgTAAg");
	this.shape_3.setTransform(71.3,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAkCQIgJhAIg1AAIgIBAIgxAAIA1kfIA8AAIA2EfgAAUAlIgUh6IAAAAIgTB6IAnAAg");
	this.shape_4.setTransform(52.3,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgYCQIAAjzIgvAAIAAgsICPAAIAAAsIgvAAIAADzg");
	this.shape_5.setTransform(35.6,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,160,52);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag3CAQgSgTAAgjIAAiSQAAgWAIgQQAIgRAQgJQAQgLAZAAQAWABARAKQAQALAJARQAIASAAAWIAAASIgvAAQAAgUgDgMQgDgMgHgFQgGgFgIAAQgJAAgGAHQgGAHgBASIAACSQAAAOAFAJQAGAHANABQAMAAAHgJQAGgKAAgWIAAgbIgeAAIAAglIBPAAIAACQIgYAAIgJgVQgLAMgLAHQgLAGgPAAQgegBgSgTg");
	this.shape.setTransform(131,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAgCQIg9izIAAAAIAACzIgtAAIAAkfIAtAAIA7CjIABAAIAAijIAtAAIAAEfg");
	this.shape_1.setTransform(111.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgXCQIAAkfIAvAAIAAEfg");
	this.shape_2.setTransform(95.6,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgXCQIAAjzIgxAAIAAgsICQAAIAAAsIgwAAIAADzg");
	this.shape_3.setTransform(82.2,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgXCQIAAkfIAvAAIAAEfg");
	this.shape_4.setTransform(68.9,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAkCQIgJhAIg1AAIgIBAIgxAAIA1kfIA8AAIA2EfgAAUAlIgUh6IAAAAIgTB6IAnAAg");
	this.shape_5.setTransform(54.5,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAlCQIgki9IgBAAIggC9IgpAAIg3kfIAvAAIAeC2IAAAAIAhi2IAnAAIAhC2IABAAIAbi2IAvAAIgyEfg");
	this.shape_6.setTransform(31.9,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,160,52);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AArBsIAAinIgBAAIghCnIgQAAIgiinIgBAAIAACnIggAAIAAjXIAxAAIAZB9IAAAAIAah9IAxAAIAADXg");
	this.shape.setTransform(134.9,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgfBnQgMgHgHgNQgFgMAAgQIAAhtQAAgQAFgMQAHgNAMgHQANgIASAAQATAAAMAIQANAHAHANQAFAMAAAQIAABtQAAAQgFAMQgHANgNAHQgMAIgTAAQgSAAgNgIgAgOhIQgFAGABANIAABrQgBAMAFAGQAEAGAKAAQALAAAEgGQAEgGAAgMIAAhrQAAgNgEgGQgEgFgLAAQgKAAgEAFg");
	this.shape_1.setTransform(118.3,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_2.setTransform(103.6,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAxAAIAAAfIgxAAIAABgg");
	this.shape_3.setTransform(89.5,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_4.setTransform(70,30.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAYBsIgtiGIgBAAIAACGIgiAAIAAjXIAjAAIAsB6IAAAAIAAh6IAiAAIAADXg");
	this.shape_5.setTransform(56.7,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_6.setTransform(42.9,30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape_7.setTransform(25.6,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,160,40);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_kerry();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgjDRIAAiuIhWjzIBJAAIAwCgIABAAIAwigIBKAAIhYDzIAACug");
	this.shape.setTransform(134.8,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AArDRIgxitIgSABIgTABIAACrIhIAAIAAmhIBkAAQA8AAAeAdQAeAdABBCQgBAigHAVQgHAVgMAKQgMAMgMAGIA9C9gAgrgUIAaAAQAaABAMgOQANgOAAglQAAglgNgOQgMgOgaABIgaAAg");
	this.shape_1.setTransform(108,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AArDRIgxitIgSABIgTABIAACrIhIAAIAAmhIBlAAQA6AAAfAdQAfAdAABCQgBAigHAVQgHAVgMAKQgMAMgMAGIA9C9gAgrgUIAaAAQAaABAMgOQANgOAAglQAAglgNgOQgMgOgaABIgaAAg");
	this.shape_2.setTransform(79,36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhjDRIAAmhIC/AAIAAA+Ih3AAIAABtIBbAAIAAA8IhbAAIAAB8IB/AAIAAA+g");
	this.shape_3.setTransform(51.6,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAqDRIg5jDIgBAAIgaAuIAACVIhIAAIAAmhIBIAAIAACbIABAAIBKibIBIAAIhOCcIBYEFg");
	this.shape_4.setTransform(27,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,73.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,35);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,114);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(382));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,330,1,1,0,0,0,53.5,17.5);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(356));

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
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;