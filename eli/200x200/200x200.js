(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_200_bg.jpg", id:"_200_bg"},
		{src:"_200_eli.jpg", id:"_200_eli"},
		{src:"_200_footer.png", id:"_200_footer"},
		{src:"_200_logo.png", id:"_200_logo"},
		{src:"_300_border.png", id:"_300_border"}
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



(lib._200_bg = function() {
	this.initialize(img._200_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib._200_eli = function() {
	this.initialize(img._200_eli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib._200_footer = function() {
	this.initialize(img._200_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


(lib._200_logo = function() {
	this.initialize(img._200_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(162.2,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgbBgQgMgIgGgNQgGgMgBgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgGgKgJgIQgLgIgKgIQgKgKgIgMQgHgNAAgRQABgYAOgNQANgNAYAAQAOAAALAGQAJAGAHALQAFALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFAAAKQgBAKAIAJQAGAJAJAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgMAGQgNAGgOAAQgQAAgLgHg");
	this.shape_1.setTransform(152.8,-11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgrBlIAAjJIAjAAIAACrIA0AAIAAAeg");
	this.shape_2.setTransform(141.7,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQAMgHARAAQARAAANAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgNAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_3.setTransform(128.8,-11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQAMgHAQAAQARAAAMAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgMAHgRAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(114.8,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AASBlIAAhaIgjAAIAABaIgiAAIAAjJIAiAAIAABTIAjAAIAAhTIAiAAIAADJg");
	this.shape_5.setTransform(100.8,-11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_6.setTransform(86.7,-11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgbBgQgMgIgGgNQgGgMgBgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAGALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFgBAKQAAAKAHAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgLAGgPAAQgQAAgLgHg");
	this.shape_7.setTransform(73.5,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_8.setTransform(54.4,-11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAaIgNhVIAAAAIgMBVIAZAAg");
	this.shape_9.setTransform(40.9,-11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAA0IArAAIAAAcIgrAAIAAA8IA8AAIAAAeg");
	this.shape_10.setTransform(28.8,-11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgQBlIAAhUIgqh1IAjAAIAXBNIAAAAIAYhNIAjAAIgqB1IAABUg");
	this.shape_11.setTransform(16,-11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AghAMIAAgXIBDAAIAAAXg");
	this.shape_12.setTransform(5.1,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAFBlIAAgyIg7AAIAAgZIA5h+IAhAAIAAB+IATAAIAAAZIgTAAIAAAygAgcAaIAhAAIAAhNIAAAAg");
	this.shape_13.setTransform(-6,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-30,181.5,37.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(169.7,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_1.setTransform(161.7,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgNBWIglirIAeAAIAUB2IAAAAIAVh2IAeAAIglCrg");
	this.shape_2.setTransform(151.1,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggBMQgMgNAAgVIAAiBIAdAAIAACCQABAJADAFQAFAEAGAAQAHAAAEgEQAEgFABgJIAAiCIAdAAIAACBQAAAVgMANQgMALgVABQgUgBgMgLg");
	this.shape_3.setTransform(139.8,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgJAAgNIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAANgFAJQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAJAAADgEQADgFABgKIAAhWQgBgKgDgEQgDgFgJAAQgIAAgDAFg");
	this.shape_4.setTransform(122.4,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_5.setTransform(111.7,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_6.setTransform(95.7,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgJAAgNIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAANgFAJQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAJAAADgEQADgFABgKIAAhWQgBgKgDgEQgDgFgJAAQgIAAgDAFg");
	this.shape_7.setTransform(83.7,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_8.setTransform(66.4,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_9.setTransform(55.3,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_10.setTransform(43.7,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_11.setTransform(33,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("Ah2AIIAAgPIDuAAIAAAPg");
	this.shape_12.setTransform(11,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,177.6,32.8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgRAAIAABUg");
	this.shape.setTransform(170.3,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAKAyIgKgqIgFAAIgEAAIAAAqIgRAAIAAhjIAYAAQANAAAHAGQAHAIAAAQQAAAIgBAFQgCAFgEABQgCADgDABIAOAugAgJgDIAGAAQAFAAADgEQADgDAAgJQAAgJgDgDQgDgEgFAAIgGAAg");
	this.shape_1.setTransform(164.3,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAMAyIgDgXIgRAAIgDAXIgRAAIAThjIATAAIATBjgAAHANIgHgqIgGAqIANAAg");
	this.shape_2.setTransform(157.5,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_3.setTransform(151.7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgNAwQgGgFgDgGQgDgGAAgHIAQgDQABAIADAEQACADADAAQAEAAADgCQADgDAAgEQgBgGgDgFIgHgJIgKgHQgFgEgEgGQgEgHAAgJQAAgMAHgGQAHgHALAAQAHABAFADQAGADADAGQADAFAAAHIgQACQgBgHgDgCQgCgCgDgBQgDABgCACQgCADAAAEQAAAFAEAFIAGAIIALAIQAFAFADAGQAEAHAAAHQAAAJgDAGQgEAFgGAEQgGACgHAAQgHAAgGgDg");
	this.shape_4.setTransform(145.8,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA/IAMg/IAMAAIAMA/IAAAAIAKg/IAQAAIgSBjg");
	this.shape_5.setTransform(134.8,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_6.setTransform(127.4,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AALAyIgUg9IAAAAIAAA9IgQAAIAAhjIAQAAIATA4IAAAAIAAg4IAQAAIAABjg");
	this.shape_7.setTransform(120.6,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMAyIgDgXIgRAAIgDAXIgRAAIAThjIATAAIATBjgAAGANIgGgqIgGAqIAMAAg");
	this.shape_8.setTransform(110.9,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKAyIgKgqIgFAAIgEAAIAAAqIgSAAIAAhjIAZAAQAMAAAIAGQAHAIAAAQQAAAIgBAFQgDAFgDABQgCADgDABIAOAugAgJgDIAGAAQAFAAADgEQADgDAAgJQAAgJgDgDQgDgEgFAAIgGAAg");
	this.shape_9.setTransform(101.4,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgOAwQgFgDgDgGQgDgGAAgIIAAgyQAAgHADgFQADgGAFgEQAGgEAIAAQAIAAAGAEQAHAEACAGQADAFAAAHIAAAyQAAAIgDAGQgCAGgHADQgGADgIAAQgIAAgGgDgAgFghQgDADABAGIAAAxQgBAGADACQABADAEAAQAEAAACgDQADgCAAgGIAAgxQAAgGgDgDQgCgDgEAAQgEAAgBADg");
	this.shape_10.setTransform(94.2,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgXAyIAAhjIAvAAIAAAPIgdAAIAAAaIAVAAIAAANIgVAAIAAAtg");
	this.shape_11.setTransform(87.8,7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgNAwQgGgDgDgGQgDgGAAgIIAAgyQAAgHADgFQADgGAGgEQAGgEAHAAQAIABAGAEQAGADADAGQADAGAAAIIAAAHIgSAAIAAgHQAAgGgCgEQgDgDgDAAQgDAAgCADQgDADABAGIAAAxQgBAGADACQACADADAAQAEAAACgDQACgCAAgFIAAgMIASAAIAAALQAAAIgDAGQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape_12.setTransform(77.9,7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgNAwQgGgDgDgGQgDgGAAgIIAAgyQAAgHADgFQADgGAGgEQAGgEAHAAQAIABAGAEQAGADADAGQADAGAAAIIAAAHIgSAAIAAgHQAAgGgCgEQgDgDgDAAQgDAAgCADQgDADABAGIAAAxQgBAGADACQACADADAAQAEAAACgDQACgCAAgFIAAgMIASAAIAAALQAAAIgDAGQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape_13.setTransform(70.9,7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgRAAIAABUg");
	this.shape_14.setTransform(64.7,7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgOAwQgFgDgDgGQgDgGAAgIIAAgyQAAgHADgFQADgGAFgEQAGgEAIAAQAIAAAHAEQAFAEADAGQADAFAAAHIAAAyQAAAIgDAGQgDAGgFADQgHADgIAAQgIAAgGgDgAgGghQgCADABAGIAAAxQgBAGACACQADADADAAQAEAAADgDQACgCgBgGIAAgxQABgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_15.setTransform(55.4,7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_16.setTransform(49.1,7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_17.setTransform(40.6,7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA4IABAAIAAg4IAPAAIAABjg");
	this.shape_18.setTransform(34.4,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_19.setTransform(27.9,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA/IAMg/IAMAAIAMA/IAAAAIAKg/IAQAAIgSBjg");
	this.shape_20.setTransform(19.8,7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_21.setTransform(9.3,7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AAJAyIAAgtIgQAAIAAAtIgSAAIAAhjIASAAIAAApIAQAAIAAgpIARAAIAABjg");
	this.shape_22.setTransform(2.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,178.3,20.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(71.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_1.setTransform(66.8,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_2.setTransform(60.7,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgOAzQgGgDgDgHQgEgGAAgIIAAg1QAAgIAEgGQADgHAGgDQAHgEAHAAQAKAAAFAEQAHAEACAHQADAGABAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgDgDAAQgDAAgDADQgCADAAAGIAAA1QAAAGACADQADADADAAQAFAAACgDQACgDAAgFIAAgNIATAAIAAAMQgBAIgDAGQgCAHgHADQgFAEgKAAQgHAAgHgEg");
	this.shape_3.setTransform(54,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgZA2IAAhrIAwAAIAAARIgdAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_4.setTransform(47.1,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgdA2IAAhrIAbAAQAPAAAIAIQAJAHAAARQAAASgJAFQgIAIgPgBIgIAAIAAAtgAgKgEIAHAAQAHAAAEgDQADgEAAgKQAAgJgDgEQgEgDgHAAIgHAAg");
	this.shape_5.setTransform(40,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_6.setTransform(32.7,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgGgjQgCADgBAGIAAA1QABAGACADQACADAEAAQAFAAACgDQADgDAAgGIAAg1QAAgGgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_7.setTransform(25.7,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_8.setTransform(18.4,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgdA2IAAhrIAbAAQAPAAAIAIQAJAHAAARQAAASgJAFQgIAIgPgBIgIAAIAAAtgAgKgEIAHAAQAHAAAEgDQADgEAAgKQAAgJgDgEQgEgDgHAAIgHAAg");
	this.shape_9.setTransform(10.9,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AANA2IgNhGIgLBGIgPAAIgVhrIARAAIAMBDIAMhDIAOAAIAMBDIAAAAIALhDIARAAIgTBrg");
	this.shape_10.setTransform(-1.5,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_11.setTransform(-9.5,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgZA2IAAhrIAzAAIAAARIggAAIAAAcIAXAAIAAAOIgXAAIAAAwg");
	this.shape_12.setTransform(-16.2,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAJA2IAAgwIgSAAIAAAwIgSAAIAAhrIASAAIAAAtIASAAIAAgtIATAAIAABrg");
	this.shape_13.setTransform(-26.8,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_14.setTransform(-33.4,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_15.setTransform(-38.4,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AANA2IgNhGIgLBGIgPAAIgVhrIARAAIAMBDIAMhDIAOAAIAMBDIAAAAIALhDIARAAIgTBrg");
	this.shape_16.setTransform(-45.6,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-13,128.3,22);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgcA2IAAhrIAcAAQANAAAHAIQAHAHAAAOIgCAJIgEAIQgDAEgEACQAHABAEAGQAEAGAAAKQAAAJgDAHQgDAHgGAFQgHAEgKAAgAgJAmIAIAAQAFAAADgEQADgEAAgIQAAgJgDgEQgEgEgGAAIgGAAgAgJgIIAHAAQADAAADgEQAEgDAAgHQAAgIgDgDQgDgEgEAAIgHAAg");
	this.shape.setTransform(45.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPAzQgGgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAGgDQAHgEAIAAQAJAAAHAEQAGADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgGADQgHAEgJAAQgIAAgHgEgAgHgjQgBADAAAGIAAA1QAAAGABADQADADAEAAQAFAAADgDQACgDAAgGIAAg1QAAgGgCgDQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(37.7,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOA3IAAgQIADAAQAFgBADgCQACgCAAgEIAAhUIAQAAIAABVQAAAIgCAEQgCAGgGACQgFAEgJAAg");
	this.shape_2.setTransform(31.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AANA2IgEgYIgSAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_3.setTransform(23.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgJAmIAHAAQAGABADgEQACgDAAgJIAAgtQAAgJgCgDQgDgDgGAAIgHAAg");
	this.shape_4.setTransform(12.7,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAMA2IgWhCIAABCIgRAAIAAhrIARAAIAVA8IAAg8IARAAIAABrg");
	this.shape_5.setTransform(5.2,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_6.setTransform(-1.8,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_7.setTransform(-11.7,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_8.setTransform(-18.3,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_9.setTransform(-25.4,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgUAwQgGgHAAgOIAAg1QAAgIADgGQACgHAHgDQAFgEAJAAQAIAAAGAEQAHAEACAHQAEAGAAAJIAAAHIgSAAIgBgNQgCgEgCgCQgCgCgCAAQgDAAgCADQgDACAAAHIAAA2QAAAFACADQACADAEAAQAFAAABgDQADgEAAgIIAAgKIgKAAIAAgOIAdAAIAAA2IgJAAIgEgIQgEAFgEACQgEACgFAAQgLAAgHgHg");
	this.shape_10.setTransform(-33.1,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgYA2IAAhrIAvAAIAAARIgdAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_11.setTransform(-40,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgIAmIAGAAQAGABADgEQACgDAAgJIAAgtQAAgJgCgDQgDgDgGAAIgGAAg");
	this.shape_12.setTransform(-47.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-11.5,104.2,22);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXA2IAAhrIATAAIAABbIAcAAIAAAQg");
	this.shape.setTransform(53.9,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgGgjQgCADAAAGIAAA1QAAAGACADQACADAEAAQAFAAADgDQACgDAAgGIAAg1QAAgGgCgDQgDgDgFAAQgEAAgCADg");
	this.shape_1.setTransform(47,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgHgjQgCADAAAGIAAA1QAAAGACADQADADAEAAQAFAAACgDQACgDAAgGIAAg1QAAgGgCgDQgCgDgFAAQgEAAgDADg");
	this.shape_2.setTransform(39.5,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAJA2IAAgwIgRAAIAAAwIgTAAIAAhrIATAAIAAAtIARAAIAAgtIATAAIAABrg");
	this.shape_3.setTransform(32,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOAzQgGgDgEgHQgDgGABgIIAAg1QgBgIADgGQAEgHAGgDQAGgEAIAAQAJAAAHAEQAFAEAEAHQACAGAAAJIAAAIIgSAAIAAgJQAAgHgCgDQgDgDgEAAQgEAAgCADQgCADAAAGIAAA1QAAAGACADQACADAEAAQAFAAACgDQACgDAAgFIAAgNIASAAIAAAMQAAAIgCAGQgEAHgFADQgHAEgJAAQgIAAgGgEg");
	this.shape_4.setTransform(24.4,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_5.setTransform(17.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAJA2IAAgwIgSAAIAAAwIgSAAIAAhrIASAAIAAAtIASAAIAAgtIATAAIAABrg");
	this.shape_6.setTransform(7,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgUAwQgHgHAAgOIAAg1QAAgIAEgGQACgHAHgDQAFgEAJAAQAIAAAGAEQAGAEADAHQADAGAAAJIAAAHIgRAAIgBgNQgBgEgCgCQgDgCgCAAQgDAAgCADQgDACAAAHIAAA2QAAAFACADQACADAEAAQAEAAACgDQADgEAAgIIAAgKIgKAAIAAgOIAcAAIAAA2IgJAAIgDgIQgEAFgEACQgEACgFAAQgLAAgHgHg");
	this.shape_7.setTransform(-0.6,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_8.setTransform(-6.4,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKA2IAAgwIgTAAIAAAwIgSAAIAAhrIASAAIAAAtIATAAIAAgtIASAAIAABrg");
	this.shape_9.setTransform(-12.2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AANA2IgEgYIgSAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_10.setTransform(-22.6,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgIAmIAGAAQAFABAEgEQADgDAAgJIAAgtQAAgJgDgDQgEgDgFAAIgGAAg");
	this.shape_11.setTransform(-33,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_12.setTransform(-40.1,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAKA2IAAgwIgTAAIAAAwIgSAAIAAhrIASAAIAAAtIATAAIAAgtIASAAIAABrg");
	this.shape_13.setTransform(-47.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-9,111.7,22);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgeC0IAAlnIA8AAIAAFng");
	this.shape.setTransform(10.6,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhOC0IAAlnIA+AAIAAExIBfAAIAAA2g");
	this.shape_1.setTransform(-5.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AhVC0IAAlnICkAAIAAA2IhmAAIAABdIBOAAIAAA0IhOAAIAABqIBtAAIAAA2g");
	this.shape_2.setTransform(-26.3,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-8,59.8,64);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_eli();
	this.instance.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.5,200,155);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgQBkIAAiqIgiAAIAAgdIBlAAIAAAdIgiAAIAACqg");
	this.shape_13.setTransform(147.5,-7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAGALACAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFAAAKQABAKAGAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgMAGgOAAQgQAAgMgHg");
	this.shape_14.setTransform(135.8,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgvBkIAAjHIBbAAIAAAdIg4AAIAAA0IArAAIAAAdIgrAAIAAA8IA8AAIAAAdg");
	this.shape_15.setTransform(123.7,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("Ag1BkIAAjHIAzAAQAaAAANANQANAOAAAaQAAAJgCAIQgDAIgGAHQgEAGgJAEQANAEAIALQAHAMAAATQAAARgGANQgEANgNAHQgMAIgTAAgAgTBIIAPAAQAMAAAFgIQAHgIAAgPQgBgPgGgJQgHgHgNgBIgMAAgAgTgRIANAAQAIAAAHgHQAGgGAAgNQABgNgGgIQgGgHgJAAIgOAAg");
	this.shape_16.setTransform(110.3,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFAAAKQABAKAGAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgMAGgOAAQgQAAgMgHg");
	this.shape_17.setTransform(90.7,-7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgMAmIAAhLIAZAAIAABLg");
	this.shape_18.setTransform(81.4,-13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_19.setTransform(72.1,-7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_20.setTransform(62,-7.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAhAAIAoBxIABAAIAAhxIAeAAIAADHg");
	this.shape_21.setTransform(51.1,-7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_22.setTransform(40.2,-7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_23.setTransform(29.2,-7.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_24.setTransform(15.6,-7.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_25.setTransform(4.4,-7.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgQBkIgqjHIAiAAIAYCJIAAAAIAZiJIAiAAIgqDHg");
	this.shape_26.setTransform(-5.8,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-26,169.2,37.6);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgXAfQgKgNABgSQgBgRAKgMQAIgNAPAAQAQAAAIANQAJAMAAARQAAASgJANQgIAMgQAAQgPAAgIgMgAgPgXQgGAJAAAOQAAAPAGAJQAGAJAJAAQAKAAAGgJQAGgJAAgPQAAgOgGgJQgGgJgKAAQgJAAgGAJg");
	this.shape_13.setTransform(144.2,-6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgDA1QgEgDAAgIIAAg7IgOAAIAAgKIAOAAIAAgbIAJAAIAAAbIATAAIAAAKIgTAAIAAA5QAAAFAKAAIAKAAIAAAJIgOABQgIAAgDgCg");
	this.shape_14.setTransform(137.3,-8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgSAqIAAhRIAMAAIAAAQIAAAAQAFgJAEgEQAGgFAKAAIAAAMQgKAAgHAHQgEAGgEAOIAAAsg");
	this.shape_15.setTransform(127.6,-6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgWAgQgLgLAAgVQABgSAIgMQAKgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAIAAQAQAAAIgOIAJAEQgGAKgHAFQgHAFgNAAQgMAAgLgLgAgPgZQgFAHgBAMIAoAAQABgMgGgHQgFgHgJAAQgIAAgHAHg");
	this.shape_16.setTransform(120.6,-6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgHA6IAAhHIgOAAIAAgKIAOAAIAAgJQAAgOAFgGQADgFALAAIAKAAIAAALIgEgBIgFAAQgGAAgCACQgCADAAAGIAAANIASAAIAAAKIgSAAIAABHg");
	this.shape_17.setTransform(113.9,-8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgPAnQgJgEgGgIIAJgHQAKANANAAQAIAAAEgEQAFgEAAgGQAAgGgFgDQgFgEgHgCIgNgEQgGAAgFgFQgFgFAAgIIAAgBQAAgLAHgGQAIgGAMAAIAAAAQAHABAHAEQAJAEAEAGIgIAHQgFgGgFgDQgFgDgFAAQgHAAgEAEQgDADAAAGQAAAFAEADQAGADAFACIANAEQAIACAFAEQAEAGAAAIQAAAMgIAGQgIAHgMAAQgIAAgJgEg");
	this.shape_18.setTransform(107.6,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAAMIAAA7g");
	this.shape_19.setTransform(99.6,-6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_20.setTransform(91.1,-6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgSAqIAAhRIALAAIAAAQIABAAQAFgJAEgEQAGgFAKAAIAAAMQgLAAgFAHQgFAGgFAOIAAAsg");
	this.shape_21.setTransform(84.9,-6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgFA5IAAhmIgjAAIAAgLIBRAAIAAALIgjAAIAABmg");
	this.shape_22.setTransform(77.4,-8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgKA4QgGgCgFgFQgFgEgDgKQgDgIAAgMQAAgLADgHQADgJAFgFQAFgFAFgCQAGgCAFgBQAKAAALAKIABAAIAAgoIALAAIAABgIAAASIgKAAIgBgIQgDADgGADQgHADgGAAQgEAAgGgCgAgVAPQAAAQAGAJQAHAIAIAAQAGAAAFgDQAEgCAHgGIAAgqQgLgMgLAAQgVAAAAAgg");
	this.shape_23.setTransform(63.3,-8.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgWAgQgLgLABgVQAAgSAJgMQAJgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAJAAQAPAAAHgOIAJAEQgFAKgGAFQgIAFgMAAQgOAAgKgLgAgOgZQgGAHgBAMIApAAQAAgMgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_24.setTransform(55.2,-6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgWAgQgKgLAAgVQAAgSAJgMQAJgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAJAAQAPAAAHgOIAJAEQgFAKgGAFQgIAFgMAAQgNAAgLgLgAgOgZQgGAHgBAMIApAAQAAgMgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_25.setTransform(47.2,-6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgDA1QgEgDAAgIIAAg7IgOAAIAAgKIAOAAIAAgbIAJAAIAAAbIATAAIAAAKIgTAAIAAA5QAAAFAKAAIAKAAIAAAJIgOABQgIAAgDgCg");
	this.shape_26.setTransform(40.3,-8.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAAMIAAA7g");
	this.shape_27.setTransform(33.3,-6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_28.setTransform(24.8,-6.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AgSAqIAAhRIAMAAIAAAQIAAAAQAFgJAEgEQAGgFAKAAIAAAMQgKAAgHAHQgEAGgEAOIAAAsg");
	this.shape_29.setTransform(18.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_30.setTransform(11.4,-6.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AgWAkQgHgGAAgMIAAg7IAMAAIAAA6QAAAPAOAAQAEAAAGgEQAHgEAEgFIAAg8IAMAAIAABRIgMAAIAAgLQgLANgMAAQgKAAgHgGg");
	this.shape_31.setTransform(3.1,-6.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("AgdAsQgNgPAAgdQAAgcANgPQAMgPATAAQAfAAAKAiIgMACQgFgNgGgGQgIgGgKAAQgMAAgKALQgJAMAAAYQAAAZAJAMQAKALAMAAQANAAAIgHQAGgHABgMIAAgJIgaAAIAAgLIAmAAIAAA3IgKAAIAAgKIAAAAQgKAMgUAAQgTAAgMgPg");
	this.shape_32.setTransform(-6.9,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-20,164.4,23);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


// stage content:
(lib._200x200 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.667,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy2();
	this.instance_1.setTransform(152,163,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).to({alpha:1},11).wait(5));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy2();
	this.instance_2.setTransform(150,218.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({y:194.5},11).wait(16));

	// Layer 9
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(258).to({_off:false},0).to({x:108.3,alpha:1},11).wait(33));

	// Layer 10
	this.instance_4 = new lib.Symbol12_1();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).to({x:103,alpha:1},11).wait(39));

	// Layer 11
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({x:77.7,alpha:1},11).wait(44));

	// Layer 7
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(453.3,42.2,1,1,0,0,0,139.3,24.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).to({x:153.3},13).wait(78).to({alpha:0},9).wait(56));

	// Layer 2
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(430.3,18.4,1,1,0,0,0,120.3,13.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({x:130.3},13).wait(87).to({alpha:0},9).wait(56));

	// Layer 6
	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(386.8,50,1,1,0,0,0,68.3,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).to({x:186.8},13).wait(67).to({alpha:0},9).wait(166));

	// Layer 5
	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(373.9,35.3,1,1,0,0,0,55.4,11.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({x:173.9},13).wait(74).to({alpha:0},9).wait(166));

	// Layer 4
	this.instance_10 = new lib.Symbol8();
	this.instance_10.setTransform(377.9,20.6,1,1,0,0,0,59.4,11.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({x:177.9},13).wait(80).to({alpha:0},9).wait(166));

	// Layer 14
	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(78.2,-35.4,1,1,0,0,0,33.2,35.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:34.6},13).wait(88).to({alpha:0},9).wait(166));

	// Layer 13
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(211).to({alpha:0},9).wait(56));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;