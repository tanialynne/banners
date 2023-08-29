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
		{src:"_160_arthur.jpg", id:"_160_arthur"},
		{src:"_160_bg.jpg", id:"_160_bg"},
		{src:"_160_border.png", id:"_160_border"},
		{src:"_160_btn.png", id:"_160_btn"},
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



(lib._160_arthur = function() {
	this.initialize(img._160_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


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


(lib._160_logo = function() {
	this.initialize(img._160_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,114);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(135.9,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_1.setTransform(123.1,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_2.setTransform(106.3,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(90,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_4.setTransform(74.4,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_5.setTransform(48.8,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgHgQgBgUIAAiLQABgUAHgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAHAQAAAUIAACLQAAAUgHAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgGAIAAAPIAACJQAAAPAGAIQAGAHAMAAQANAAAGgHQAFgIABgPIAAiJQgBgPgFgIQgGgHgNAAQgMAAgGAHg");
	this.shape_6.setTransform(29.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,49.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape.setTransform(114.7,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_1.setTransform(97.3,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_2.setTransform(78.9,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(62.5,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIABAAIAfhpIAwAAIg5CfIAAByg");
	this.shape_4.setTransform(45.3,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,49.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgHgQAAgUIAAiLQAAgUAHgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAIAQAAAUIAACLQAAAUgIAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgFAIgBAPIAACJQABAPAFAIQAGAHAMAAQAOAAAFgHQAGgIAAgPIAAiJQAAgPgGgIQgFgHgOAAQgMAAgGAHg");
	this.shape.setTransform(119.1,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAjCJIgii0IgBAAIgeC0IgoAAIgzkRIArAAIAeCtIAAAAIAfitIAkAAIAgCtIABAAIAbitIAsAAIgwERg");
	this.shape_1.setTransform(96.5,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_2.setTransform(76.8,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAeCJIg6iqIAAAAIAACqIgqAAIAAkRIArAAIA4CbIAAAAIAAibIArAAIAAERg");
	this.shape_3.setTransform(51.5,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWCJIAAkRIAtAAIAAERg");
	this.shape_4.setTransform(36.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,49.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape.setTransform(120.4,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAWBkIgqh8IgBAAIAAB8IgeAAIAAjHIAfAAIApBxIAAAAIAAhxIAgAAIAADHg");
	this.shape_1.setTransform(106.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_2.setTransform(95.6,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAWBkIgqh8IgBAAIAAB8IgeAAIAAjHIAfAAIApBxIAAAAIAAhxIAfAAIAADHg");
	this.shape_3.setTransform(84.7,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_4.setTransform(73.8,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_5.setTransform(63.6,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_6.setTransform(50.7,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBkAAIAAAdIghAAIAACqg");
	this.shape_7.setTransform(38,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgrBkIAAjHIAjAAIAACqIA0AAIAAAdg");
	this.shape.setTransform(130.3,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_1.setTransform(118.1,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_2.setTransform(104.8,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_3.setTransform(94,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAhAAIAoBxIABAAIAAhxIAeAAIAADHg");
	this.shape_4.setTransform(83.1,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AASBkIAAhZIgjAAIAABZIgiAAIAAjHIAiAAIAABSIAjAAIAAhSIAjAAIAADHg");
	this.shape_5.setTransform(69.1,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_6.setTransform(55,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_7.setTransform(42.2,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgdIBjAAIAAAdIgiAAIAACqg");
	this.shape_8.setTransform(30.2,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAqBjQgKgEgIgHQgIAIgKAEQgHADgNAAQgWAAgNgNQgNgMAAgWQAAgKAEgLQADgKAGgJQAGgJAHgHIgKgaQgFgPgBgOQAAgOAFgKQAFgLAKgGQAKgGAOAAQASAAALALQAKAMABATQgBAMgFALQgFALgIAJIgOARIAJAUIAOAUIAHgSIAFgTIAdAHQgDAOgFANIgLAaIAJAGQAFADAFABIAAAeQgLAAgKgEgAgcAnQgCAFAAAIQAAAJAFAGQAGAGAJAAIAJgBIAFgFIgNgTQgHgKgGgLQgEAGgCAGgAgThNQgEAFAAAKQAAAKADAKIAHATIALgSQADgJAAgKQAAgMgBgFQgDgFgGAAQgHAAgDAFg");
	this.shape.setTransform(122.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_1.setTransform(102.1,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_2.setTransform(88.9,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg4AAIAAA1IArAAIAAAcIgrAAIAAA8IA8AAIAAAdg");
	this.shape_3.setTransform(76.5,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_4.setTransform(63.2,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_5.setTransform(49.7,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_6.setTransform(36.4,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(114.2,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(104,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_2.setTransform(90,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBkAAIAAAdIghAAIAACqg");
	this.shape_3.setTransform(77.7,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBkAAIAAAdIghAAIAACqg");
	this.shape_4.setTransform(60.6,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_5.setTransform(48.9,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAoBkIAAibIgBAAIgfCbIgPAAIgfibIgBAAIAACbIgeAAIAAjHIAtAAIAYB0IAAAAIAZh0IAtAAIAADHg");
	this.shape.setTransform(121.3,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_1.setTransform(106.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_2.setTransform(93.6,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_3.setTransform(79.2,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQAMgHAQAAQARAAAMAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgMAHgRAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(65.3,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_5.setTransform(51.6,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("Ag3BlIAAjIIAyAAQAegBAPAOQAQAOAAAgQAAAggQAMQgPAOgeAAIgPAAIAABTgAgUgJIANAAQAPABAHgHQAGgHAAgSQAAgRgGgHQgHgHgPAAIgNAAg");
	this.shape_6.setTransform(37.6,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAFgFABgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQAAgYAOgNQAOgNAYAAQAOAAALAGQAJAGAGALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFABAKQAAAKAGAJQAIAJAIAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgNAGQgLAGgPAAQgQAAgMgHg");
	this.shape.setTransform(142.2,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(128.9,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_2.setTransform(118.1,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAhAAIAoBxIABAAIAAhxIAeAAIAADHg");
	this.shape_3.setTransform(107.2,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQAMgHARAAQARAAANAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgNAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(93.2,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_5.setTransform(79.5,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBkAAIAAAdIghAAIAACqg");
	this.shape_6.setTransform(66.8,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_7.setTransform(54.2,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_8.setTransform(41.4,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgrBkIAAjHIAjAAIAACqIA0AAIAAAdg");
	this.shape_9.setTransform(29.9,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_10.setTransform(18.1,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape.setTransform(92.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AASBkIAAhZIgjAAIAABZIgjAAIAAjHIAjAAIAABSIAjAAIAAhSIAjAAIAADHg");
	this.shape_1.setTransform(79.2,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBkAAIAAAdIghAAIAACqg");
	this.shape_2.setTransform(66.8,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


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
	this.shape.graphics.f("#004262").s().p("AAjCQIgJhAIg0AAIgJBAIgwAAIA2kfIA7AAIA2EfgAAUAlIgUh6IAAAAIgTB6IAnAAg");
	this.shape.setTransform(130,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgnCJQgRgLgJgSQgIgSgCgWIAvgHQACAWAIALQAIALAKAAQANAAAIgHQAHgGABgNQgBgRgJgOQgLgNgMgMQgPgMgPgMQgQgNgJgTQgLgRAAgZQAAgjAUgSQAUgSAjgBQAUAAAOAJQAPAJAJAQQAJAPACAVIgvAGQgDgTgIgHQgHgHgJAAQgKAAgGAIQgHAHABANQAAAQAKAMQAKAMANAMIAdAZQAPAOALASQAKASAAAXQAAAYgKARQgKAPgRAKQgSAIgWAAQgWAAgQgLg");
	this.shape_1.setTransform(112.1,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAjCQIgJhAIg0AAIgIBAIgwAAIA1kfIA7AAIA1EfgAATAlIgTh6IAAAAIgSB6IAlAAg");
	this.shape_2.setTransform(94.5,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAhCQIg+iyIAAAAIAACyIgtAAIAAkfIAuAAIA6CjIABAAIAAijIAsAAIAAEfg");
	this.shape_3.setTransform(75.6,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgqCKQgQgKgJgRQgHgRgBgUIAAiSQABgWAHgQQAJgRAQgJQARgLAZAAQAZAAASALQAQAJAIARQAIAQAAAWIAACSQAAAUgIARQgIARgQAKQgSAKgZAAQgZAAgRgKgAgThgQgGAIAAARIAACPQAAARAGAIQAGAIANAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgNAAgGAIg");
	this.shape_4.setTransform(46.7,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgYCQIAAjzIgvAAIAAgsICPAAIAAAsIgvAAIAADzg");
	this.shape_5.setTransform(28.9,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,52);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXCQIAAh4Ig8inIAyAAIAhBuIABAAIAhhuIAyAAIg8CnIAAB4g");
	this.shape.setTransform(138.8,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXCQIg9kfIAxAAIAjDGIAAAAIAkjGIAxAAIg9Efg");
	this.shape_1.setTransform(121.1,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAjCQIgJhAIg0AAIgJBAIgwAAIA2kfIA7AAIA2EfgAAUAlIgUh6IAAAAIgTB6IAnAAg");
	this.shape_2.setTransform(103.4,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAhCQIg+iyIAAAAIAACyIgtAAIAAkfIAtAAIA7CjIABAAIAAijIAtAAIAAEfg");
	this.shape_3.setTransform(84.5,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_4.setTransform(57.1,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaCQIAAiAIgzAAIAACAIgxAAIAAkfIAxAAIAAB2IAzAAIAAh2IAxAAIAAEfg");
	this.shape_5.setTransform(37.8,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgYCQIAAjzIgwAAIAAgsICQAAIAAAsIgvAAIAADzg");
	this.shape_6.setTransform(20,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,52);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AArBsIAAinIgBAAIghCnIgQAAIgiinIgBAAIAACnIggAAIAAjXIAxAAIAZB9IAAAAIAah9IAxAAIAADXg");
	this.shape.setTransform(134.9,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgfBnQgMgHgHgNQgFgMAAgQIAAhtQAAgQAFgMQAHgNAMgHQANgIASAAQATAAAMAIQANAHAHANQAFAMAAAQIAABtQAAAQgFAMQgHANgNAHQgMAIgTAAQgSAAgNgIgAgOhIQgFAGABANIAABrQgBAMAFAGQAEAGAKAAQALAAAEgGQAEgGAAgMIAAhrQAAgNgEgGQgEgFgLAAQgKAAgEAFg");
	this.shape_1.setTransform(118.3,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_2.setTransform(103.6,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAxAAIAAAfIgxAAIAABgg");
	this.shape_3.setTransform(89.5,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_4.setTransform(70,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAYBsIgtiGIgBAAIAACGIgiAAIAAjXIAjAAIAsB6IAAAAIAAh6IAiAAIAADXg");
	this.shape_5.setTransform(56.7,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_6.setTransform(42.9,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape_7.setTransform(25.6,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,40);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_arthur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAkCtIgpiQIgOABIgQABIAACOIg8AAIAAlZIBUAAQAwAAAZAYQAZAXAAA3QAAAcgGASQgGASgKAHQgJALgKAEIAyCdgAgjgQIAVAAQAWAAAKgMQAKgLAAgfQAAgegKgMQgKgLgWAAIgVAAg");
	this.shape.setTransform(136.5,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhCCXQgXgXAAgtIAAkBIA7AAIAAEEQAAATAHAJQAJAKAOAAQAPAAAJgKQAHgJAAgTIAAkEIA7AAIAAEBQAAAtgYAXQgXAYgrAAQgpAAgZgYg");
	this.shape_1.setTransform(112,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAfCtIAAiaIg9AAIAACaIg8AAIAAlZIA8AAIAACNIA9AAIAAiNIA7AAIAAFZg");
	this.shape_2.setTransform(88,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_3.setTransform(66.6,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAkCtIgpiQIgOABIgQABIAACOIg8AAIAAlZIBUAAQAwAAAZAYQAZAXAAA3QAAAcgGASQgGASgKAHQgJALgKAEIAyCdgAgjgQIAVAAQAWAAAKgMQAKgLAAgfQAAgegKgMQgKgLgWAAIgVAAg");
	this.shape_4.setTransform(45.8,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAAXAsIgXiTIAAAAIgXCTIAuAAg");
	this.shape_5.setTransform(22.7,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,61.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(378));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,330,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(351).to({_off:false},0).to({alpha:1},13).wait(14));

	// Layer 5
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(250,420.8,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(27));

	// Layer 4
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(250,382.5,1,1,0,0,0,80,24.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(72).to({alpha:0},7).wait(27));

	// Layer 25
	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(27));

	// Layer 24
	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(27));

	// Layer 23
	this.instance_6 = new lib.Symbol19();
	this.instance_6.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(247).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(27));

	// Layer 6
	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(243).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(27));

	// Layer 22
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(135));

	// Layer 21
	this.instance_9 = new lib.Symbol16();
	this.instance_9.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(138).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(135));

	// Layer 19
	this.instance_10 = new lib.Symbol15();
	this.instance_10.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(135));

	// Layer 18
	this.instance_11 = new lib.Symbol13();
	this.instance_11.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(135));

	// Layer 3
	this.instance_12 = new lib.Symbol12();
	this.instance_12.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(135));

	// Layer 17
	this.instance_13 = new lib.Symbol11();
	this.instance_13.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(66).to({alpha:0},7).wait(253));

	// Layer 16
	this.instance_14 = new lib.Symbol10();
	this.instance_14.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(70).to({alpha:0},7).wait(253));

	// Layer 9
	this.instance_15 = new lib.Symbol9();
	this.instance_15.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(75).to({alpha:0},7).wait(253));

	// Layer 14
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(79).to({alpha:0},7).wait(253));

	// Layer 2
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(352));

	// Layer 13
	this.instance_18 = new lib.Symbol5();
	this.instance_18.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).to({alpha:1},13).wait(352));

	// Layer 12
	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},13).wait(365));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;