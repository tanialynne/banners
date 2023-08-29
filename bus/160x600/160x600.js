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
		{src:"_160_banner.png", id:"_160_banner"},
		{src:"_160_bg.jpg", id:"_160_bg"},
		{src:"_160_border.png", id:"_160_border"},
		{src:"_160_footer.png", id:"_160_footer"}
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



(lib._160_banner = function() {
	this.initialize(img._160_banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,76);


(lib._160_bg = function() {
	this.initialize(img._160_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_footer = function() {
	this.initialize(img._160_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,86);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_border();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(147.5,57.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgYB9IAAjUIgoAAIAAglICBAAIAAAlIgoAAIAADUg");
	this.shape_1.setTransform(137.1,47.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AAgB9Ig2iIIAACIIgrAAIAAj5IAjAAIA2CBIAAiBIArAAIAAD5g");
	this.shape_2.setTransform(121.8,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("Ag2B9IAAj5IBsAAIAAAjIg4AAIAABDIArAAIAAAhIgrAAIAABPIA5AAIAAAjg");
	this.shape_3.setTransform(107.1,47.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AhGB9IAAj5IA9AAQAWAAAQAFQAPAEAKAKQAJAKAEAOQAEAPAAAVIAABZQAAAVgEAPQgEAPgJALQgKAKgPAFQgQAEgVAAgAgTBZIAKAAIAJAAIAGgCIAFgEIAEgEIACgGIABgHIABgIIAAgKIAAhjIgBgOIgCgKQgBgFgEgCQgDgDgFgCQgEgBgIAAIgKAAg");
	this.shape_4.setTransform(91.1,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgYB9IAAj5IAxAAIAAD5g");
	this.shape_5.setTransform(77.6,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgvBtQgSgTgBgoIAsgIQAAAXAHAMQAFAMALAAQAJAAAEgGQAEgFAAgJQAAgPgHgKQgGgKgMgNIgbgVQgLgJgGgIQgGgIgEgMQgFgMAAgOQAAgfASgQQASgRAeAAQAKAAAJACQAJACAGADQAGAEAFAGQAFAFADAGIAFANIADAOIACAOIgsAHIgBgNIgCgKQgBgGgCgDQgCgDgEgCQgDgCgEAAQgIABgEAGQgFAGAAAIQAAAHACAGQABAFAEAFIAGAIIAHAJIAaAXIAPAMQAGAHAGAJQAGAKADAKQACALAAANQAAAbgRASQgSARgdAAQghAAgRgTg");
	this.shape_6.setTransform(65.5,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("Ag2B9IAAj5IBsAAIAAAjIg5AAIAABDIAsAAIAAAhIgsAAIAABPIA6AAIAAAjg");
	this.shape_7.setTransform(51.3,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AAWB9IgahxIgSAAIAABxIgzAAIAAj5IA/AAQASAAAPADQAOADALAIQALAHAGANQAFANAAAUQAAAYgGAPQgHAPgRAFIAiB7gAgWgRIANAAQAQAAAIgJQAIgJAAgTQAAgSgHgJQgHgJgQABIgPAAg");
	this.shape_8.setTransform(35.3,47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AhHB9IAAj5IBNAAQBBAAAABIQAAATgEAPQgGANgJAGQgLAIgMAEQgMADgQAAIgUAAIAABtgAgTgSIAQAAQAPAAAFgIQAHgHAAgUIgBgPQgBgGgDgFQgDgFgGgCQgFgCgIAAIgQAAg");
	this.shape_9.setTransform(18.1,47.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("Ag1B9IAAj5IBrAAIAAAjIg4AAIAABDIArAAIAAAhIgrAAIAABPIA4AAIAAAjg");
	this.shape_10.setTransform(135.6,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AggB6QgOgGgJgLQgIgMgEgPQgDgPgBgTIAAhXQABgUADgPQAEgPAIgMQAJgLAOgGQAOgFATAAQATAAAOAFQAPAFAHAKQAIAJAEANQADANAAARIAAAWIgxAAIAAgYIAAgGIAAgFIgBgFIgBgFIgCgEIgCgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFgCIgGgBQgEAAgEACQgEACgDADIgDAJIgBAJIAAAMIAABuQAAASAEAJQAEAIALAAIAIgBIAHgEIADgFIABgIIACgIIAAgJIAAgZIAxAAIAAAVQAAASgDANQgDANgIALQgIAKgOAGQgOAFgUAAQgTAAgOgGg");
	this.shape_11.setTransform(119.8,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgYB9IAAj5IAxAAIAAD5g");
	this.shape_12.setTransform(106.6,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgZB9Igvj5IAsAAIAcCpIAbipIAuAAIgvD5g");
	this.shape_13.setTransform(94.1,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgYB9IAAjUIgoAAIAAglICBAAIAAAlIgoAAIAADUg");
	this.shape_14.setTransform(71.4,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAcB9IgfhPIgcBPIgsAAIAyiFIgwh0IAwAAIAcBIIAZhIIAsAAIgvB+IAzB7g");
	this.shape_15.setTransform(56.8,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("Ag2B9IAAj5IBsAAIAAAjIg5AAIAABDIAsAAIAAAhIgsAAIAABPIA6AAIAAAjg");
	this.shape_16.setTransform(42.7,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AAgB9Ig2iIIAACIIgsAAIAAj5IAkAAIA2CBIAAiBIAqAAIAAD5g");
	this.shape_17.setTransform(26.8,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,160,90.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AAQBYIgThQIgMAAIAABQIglAAIAAiwIAtAAQANAAAKADQAKACAIAFQAIAFAEAKQAEAJAAAOQAAARgFALQgFAKgMADIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgNQAAgOgFgGQgFgGgKAAIgLAAg");
	this.shape.setTransform(113,83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgGgIQgFgIgDgLQgCgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQADAAADgCIAFgEIADgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgDAKQgCALgGAIQgFAIgLAEQgJAEgPAAQgNAAgKgEg");
	this.shape_1.setTransform(100.1,84);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgHQgGgJgCgKQgDgLAAgOIAAg/QAAgPADgKQACgLAGgHQAGgIALgEQAKgEANAAQAcAAAMAPQAMAOAAAeIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAIIABAFIADAGIAEADQADACADAAQADAAADgCIAFgDIADgGIABgFIAAgIIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_2.setTransform(87.4,83.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AAQBYIgThQIgMAAIAABQIglAAIAAiwIAtAAQANAAAKADQAKACAIAFQAIAFAEAKQAEAJAAAOQAAARgFALQgFAKgMADIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgNQAAgOgFgGQgFgGgKAAIgLAAg");
	this.shape_3.setTransform(69.4,83.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgHQgGgJgCgKQgDgLAAgOIAAg/QAAgPADgKQACgLAGgHQAGgIALgEQAKgEANAAQAcAAAMAPQAMAOAAAeIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAIIABAFIADAGIAEADQADACADAAQADAAADgCIAFgDIADgGIABgFIAAgIIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_4.setTransform(56.4,83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgkBYIAAiwIBJAAIAAAZIglAAIAAAwIAfAAIAAAXIgfAAIAABQg");
	this.shape_5.setTransform(45.9,83.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AghBNQgMgNgCgcIAggGQAAARAEAIQAFAJAHAAQAFAAAEgFQACgEAAgHQABgKgFgHQgFgHgIgJIgTgPIgLgMQgFgFgDgIQgEgJAAgLQAAgVAOgMQAMgMAVAAQAHAAAGACIALADIAIAHIAFAIIAEAKIADAKIABAKIggAEIgBgJIgBgHIgCgGIgEgEQgDgBgCAAQgFAAgDAFQgEAEAAAGQAAAFABADQACAEACAEIAFAGIAEAFIASARIALAIIAIAMQAFAGACAIQABAIAAAJQAAATgMAMQgNANgUAAQgXAAgMgOg");
	this.shape_6.setTransform(123.6,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AAXBYIgmhgIAABgIgfAAIAAivIAZAAIAmBaIAAhaIAeAAIAACvg");
	this.shape_7.setTransform(111.8,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgKAAgPIAAg/QAAgPADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAdIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_8.setTransform(99.4,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AgQBYIAAivIAiAAIAACvg");
	this.shape_9.setTransform(89.9,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgRBYIAAiVIgcAAIAAgaIBbAAIAAAaIgcAAIAACVg");
	this.shape_10.setTransform(81.9,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AghBNQgNgNgBgcIAggGQAAARAEAIQAFAJAHAAQAGAAADgFQACgEAAgHQAAgKgEgHQgEgHgJgJIgTgPIgLgMQgFgFgDgIQgEgJAAgLQAAgVAOgMQANgMAUAAQAHAAAGACIALADIAIAHIAGAIIADAKIADAKIABAKIggAEIgBgJIAAgHIgDgGIgEgEQgDgBgCAAQgFAAgDAFQgEAEAAAGQAAAFABADQABAEADAEIAFAGIAEAFIASARIALAIIAIAMQAEAGADAIQABAIAAAJQAAATgMAMQgMANgVAAQgXAAgMgOg");
	this.shape_11.setTransform(71.7,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AglBYIAAivIBLAAIAAAYIgnAAIAAAwIAeAAIAAAXIgeAAIAAA4IAnAAIAAAYg");
	this.shape_12.setTransform(61.6,50);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgGgIQgFgIgDgLQgCgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQAEAAACgCIAGgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgDAKQgCALgGAIQgFAIgLAEQgJAEgPAAQgOAAgJgEg");
	this.shape_13.setTransform(50,50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AAUBeQgKgKgHgKIgDAAQgNAAgKgDQgLgFgGgHQgGgIgCgLQgDgKAAgOIAAhAQAAgOADgLQACgKAGgIQAGgHALgFQAKgDANAAQAcgBAMAQQAMAOAAAdIAABAQAAApgYAMQALALAHAEIgHAYQgJgEgKgKgAgGhPQgDABgBACIgDAGIgBAGIAAAHIAABSIAAAHIABAGIADAGIAEADQADABADAAQADAAADgBIAFgDIADgGIABgGIAAgHIAAhSIAAgHIgBgGIgDgGQgCgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_14.setTransform(37.3,51.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AARBZIgRhvIgPBvIgfAAIgYixIAfAAIAMBrIAQhrIAXAAIAQBqIANhqIAeAAIgXCxg");
	this.shape_15.setTransform(118.9,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgmBZIAAixIBNAAIAAAaIgoAAIAAAuIAeAAIAAAYIgeAAIAAA4IAoAAIAAAZg");
	this.shape_16.setTransform(106.7,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AgkBZIAAixIBJAAIAAAZIglAAIAAAwIAfAAIAAAYIgfAAIAABQg");
	this.shape_17.setTransform(97.3,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE6DF").s().p("AAVBZIgHgoIgaAAIgHAoIgiAAIAiixIAmAAIAjCxgAgJAbIATAAIgKhGg");
	this.shape_18.setTransform(80.8,16.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAE6DF").s().p("AghBNQgMgOgBgbIAfgHQAAARAFAJQADAIAHAAQAHAAACgEQADgEAAgHQABgKgFgHQgEgHgJgJIgTgPIgLgMQgFgFgDgIQgEgJABgKQAAgWAMgMQANgMAVAAQAHAAAHACIAKADIAIAHIAFAIIAEAJIADAKIABAKIggAGIgBgJIgBgIIgCgHIgEgDQgCgCgDABQgFAAgDAEQgEAFAAAGQAAAFACADQAAAEADAEIAFAGIAEAFIASARIALAIIAIAMQAFAHABAHQACAIAAAIQAAAUgMANQgMAMgVAAQgXAAgMgOg");
	this.shape_19.setTransform(63.9,16.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE6DF").s().p("AAUBZIgGgoIgaAAIgHAoIgiAAIAjixIAlAAIAjCxgAgJAbIATAAIgKhGg");
	this.shape_20.setTransform(52.3,16.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE6DF").s().p("AAPBZIAAhPIgdAAIAABPIgkAAIAAixIAkAAIAABJIAdAAIAAhJIAkAAIAACxg");
	this.shape_21.setTransform(39.8,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,160,101.7);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgPBZIAAhHIgjhpIAiAAIARA/IASg/IAgAAIgiBpIAABHg");
	this.shape.setTransform(126.1,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgRBZIAAiWIgcAAIAAgaIBbAAIAAAaIgcAAIAACWg");
	this.shape_1.setTransform(115.9,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AgQBZIAAiwIAiAAIAACwg");
	this.shape_2.setTransform(107.9,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AghBNQgNgNAAgcIAfgHQAAARAEAJQAFAJAGAAQAHgBACgEQAEgEAAgHQgBgKgEgHQgFgHgIgJIgTgPIgMgMQgEgFgDgIQgDgJAAgKQgBgWANgMQAOgMAUAAQAHAAAHACIAKADIAIAHIAGAIIADAKIACAJIABAKIgfAGIAAgJIgBgIIgDgHIgEgDQgDgCgCABQgFAAgEAEQgDAFAAAGQAAAFABADQACAFACADIAFAGIAEAFIATARIAKAIIAJAMQADAHACAHQADAIAAAIQAAAUgNANQgMAMgVAAQgXAAgMgOg");
	this.shape_3.setTransform(99.3,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AAQBZIgThRIgMAAIAABRIglAAIAAiwIAtAAQANAAAKABQAKADAIAFQAIAGAEAJQAEAJAAANQAAASgFAKQgFALgMAEIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_4.setTransform(87.5,61);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AglBZIAAiwIBLAAIAAAZIgnAAIAAAvIAeAAIAAAXIgeAAIAAA4IAnAAIAAAZg");
	this.shape_5.setTransform(76.4,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgRBZIgiiwIAfAAIAUB3IATh3IAhAAIgiCwg");
	this.shape_6.setTransform(65.5,61);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AgQBZIAAiwIAiAAIAACwg");
	this.shape_7.setTransform(56.6,61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_8.setTransform(47.3,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AgYBWQgKgEgGgIQgGgIgCgLQgCgKAAgPIAAh3IAjAAIAAB7IABAJIABAIIACAGQACADADABQADACADAAQADAAAEgCIAEgEIADgGIABgIIABgJIAAh7IAjAAIAAB3QAAAPgDAKQgCALgGAIQgGAIgJAEQgKAEgPAAQgNAAgLgEg");
	this.shape_9.setTransform(34.9,61.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgxBYIAAiwIArAAQAPAAALAEQAMACAGAIQAGAHAEAKQADAKAAAPIAAA/QAAAPgDAKQgEALgGAHQgHAIgKADQgMADgOAAgAgNA/IAHAAIAGAAIAFgCIADgCIACgDIACgEIABgGIABgFIAAgHIAAhGIgBgKIgBgHQgCgDgCgDIgGgCIgIgBIgHAAg");
	this.shape_10.setTransform(124,27.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgHQgGgIgCgLQgDgLAAgOIAAhAQAAgOADgKQACgLAGgHQAGgIALgEQAKgEANAAQAcAAAMAPQAMAOAAAdIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAHIAABSIAAAIIABAFIADAGIAEADQADACADAAQADAAADgCIAFgDIADgGIABgFIAAgIIAAhSIAAgHIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_11.setTransform(111.2,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgHQgGgIgCgLQgDgLAAgOIAAhAQAAgOADgKQACgLAGgHQAGgIALgEQAKgEANAAQAcAAAMAPQAMAOAAAdIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAHIAABSIAAAIIABAFIADAGIAEADQADACADAAQADAAADgCIAFgDIADgGIABgFIAAgIIAAhSIAAgHIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_12.setTransform(98.6,27.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AARBYIgRhuIgPBuIgfAAIgYiwIAfAAIAMBrIAQhrIAXAAIAQBqIANhqIAeAAIgXCwg");
	this.shape_13.setTransform(84.5,27.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgZBXQgJgFgGgIQgGgIgCgLQgDgLAAgPIAAg4QAAgMACgKQABgJAEgIQAEgIAGgFQAGgFAJgDQAJgDAKAAQANAAALADQAJAEAHAHQAFAHADAJQACAKABANIAAAKIgkAAIAAgMIAAgIIgBgHIgCgGIgFgDQgCgBgFAAQgCAAgDABIgFAEQgCADAAADIgBAIIAAAIIAABLQAAANADAHQAEAHAHgBQAKAAAEgGQAEgIgBgOIAAgRIgRAAIAAgUIAyAAIAABZIgYAAIgCgQQgIATgTAAQgOAAgJgEg");
	this.shape_14.setTransform(70.4,27.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAXBYIgmhgIAABgIgfAAIAAiwIAZAAIAmBbIAAhbIAeAAIAACwg");
	this.shape_15.setTransform(58.1,27.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgHQgGgIgCgLQgDgLAAgOIAAhAQAAgOADgKQACgLAGgHQAGgIALgEQAKgEANAAQAcAAAMAPQAMAOAAAdIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAHIAABSIAAAIIABAFIADAGIAEADQADACADAAQADAAADgCIAFgDIADgGIABgFIAAgIIAAhSIAAgHIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_16.setTransform(45.7,27.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AgmBYIAAiwIAlAAIAACYIAoAAIAAAYg");
	this.shape_17.setTransform(35.1,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,160,67.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_footer();
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15,160,86);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_banner();
	this.instance.setTransform(0,76,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,76);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_banner();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,76);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDEEBD").s().p("AAAAXIgWANIAFgaIgTgRIAagEIAKgXIALAXIAaAEIgSARIAEAag");
	this.shape.setTransform(50.3,57.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEEBD").s().p("AAAAXIgWANIAFgaIgTgRIAagEIAKgXIALAXIAaAEIgSARIAEAag");
	this.shape_1.setTransform(110.8,57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDEEBD").s().p("AgKAlQgGgCgEgEQgEgEgCgHQgDgGAAgMIAAAAQAAgHACgIQACgIAEgFQAFgGAGgDQAGgDAHgBIAHABIAGACIAGADIAFADIgJAOIgDgEIgEgBIgEgBIgFgBQgCAAgCABIgEAEIgEAGIgBAHIAGgEQAEgBAEAAQAGAAAFABQAEACAEADQAEAEACACQACAFAAAFQAAAGgCAFQgDAFgEAEQgDAEgGACQgFACgGAAQgGgBgFgCgAgIAFQgDADAAAFIAAAAQAAAFADADQAEAEAEAAQAGAAAEgEQADgDAAgFIAAAAQAAgFgDgDQgEgDgGAAQgFAAgDADg");
	this.shape_2.setTransform(99.6,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDEEBD").s().p("AAAAmIAAg6IgMADIgDgOIAUgGIAMAAIAABLg");
	this.shape_3.setTransform(93.3,57.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDEEBD").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_4.setTransform(89.8,60.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDEEBD").s().p("AAGAmIAAgQIgkAAIgCgMIAogvIAOAAIAAAtIALAAIAAAOIgLAAIAAAQgAgMAIIASAAIAAgWg");
	this.shape_5.setTransform(84.3,57.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDEEBD").s().p("AgNAlQgGgEgEgFQgFgFgCgIQgDgHAAgIIAAAAQAAgHADgHQACgHAFgGQAEgFAHgDQAGgDAGgBQAHAAAGADQAHAEAEAFQAFAFACAIQADAHAAAHQAAAIgDAHQgCAHgFAGQgEAFgHAEQgGADgHAAQgGAAgHgDgAgGgVQgDACgCADIgDAHIgBAJIABAKIADAHQACADAEACQADACACAAQADAAADgCQADgCADgDIADgHIABgKIAAAAIgBgIIgDgIIgGgFQgDgCgDAAQgDAAgDACg");
	this.shape_6.setTransform(76.6,57.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDEEBD").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_7.setTransform(71,60.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDEEBD").s().p("AgNAlQgGgEgEgFQgFgFgCgIQgDgHAAgIIAAAAQAAgHADgHQACgHAFgGQAEgFAHgDQAGgDAGgBQAHAAAGADQAHAEAEAFQAFAFACAIQADAHAAAHQAAAIgDAHQgCAHgFAGQgEAFgHAEQgGADgHAAQgGAAgHgDgAgGgVQgDACgCADIgDAHIgBAJIABAKIADAHQACADAEACQADACACAAQADAAADgCQADgCADgDIADgHIABgKIAAAAIgBgIIgDgIIgGgFQgDgCgDAAQgDAAgDACg");
	this.shape_8.setTransform(65.4,57.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDEEBD").s().p("AAAAmIAAg6IgMADIgDgOIAUgGIAMAAIAABLg");
	this.shape_9.setTransform(58.7,57.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDEEBD").s().p("AgKAlQgGgCgEgEQgEgEgCgHQgDgHAAgLIAAgBQAAgGACgIQACgIAEgFQAFgGAGgDQAGgDAHAAIAHAAIAGACIAGACIAFAEIgJANIgDgCIgEgCIgEgCIgFAAQgCAAgCABIgEAEIgEAGIgBAHIAGgDQAEgCAEAAQAGAAAFACQAEABAEADQAEADACADQACAEAAAGQAAAGgCAGQgDAFgEADQgDADgGACQgFACgGAAQgGAAgFgCgAgIAFQgDADAAAFIAAABQAAAEADADQAEAEAEAAQAGAAAEgEQADgDAAgEIAAgBQAAgFgDgDQgEgDgGAAQgFAAgDADg");
	this.shape_10.setTransform(114.9,41);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDEEBD").s().p("AAAAmIAAg6IgMADIgDgOIAUgGIAMAAIAABLg");
	this.shape_11.setTransform(108.6,40.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDEEBD").s().p("AgNAkQgGgDgEgFQgFgGgCgGQgDgIAAgIIAAAAQAAgHADgHQACgHAFgGQAEgFAHgDQAGgDAGAAQAHAAAGADQAHADAEAFQAFAGACAGQADAIAAAHQAAAIgDAHQgCAHgFAGQgEAFgHADQgGADgHAAQgGAAgHgDgAgGgVQgDABgCAEIgDAIIgBAIIABAJIADAIQACAEAEABQADACACAAQADAAADgCQADgBADgEIADgIIABgJIAAAAIgBgIIgDgIIgGgFQgDgCgDAAQgDAAgDACg");
	this.shape_12.setTransform(102.6,41);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDEEBD").s().p("AgbAnIAAgOIAagVIAEgEIAEgEIACgEIABgEQAAgFgDgDQgDgDgEABQgDgBgEADQgDADgEAFIgMgJIAGgIIAGgEIAHgEIAHgBQAGABAGABQAFACADADQADADACAFQACAEAAAFIAAABIgBAIIgEAFIgGAHIgJAHIgKAKIAfAAIAAAPg");
	this.shape_13.setTransform(95.2,40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA4AAIAAAPIgnAAIAAAPIAjAAIAAAOIgjAAIAAAQIAoAAIAAAPg");
	this.shape_14.setTransform(85,41);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDEEBD").s().p("AgHAmIAAg8IgXAAIAAgPIA9AAIAAAPIgXAAIAAA8g");
	this.shape_15.setTransform(77.5,41);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDEEBD").s().p("AAXAmIgIgRIgeAAIgHARIgRAAIAghLIAOAAIAiBLgAgJAGIASAAIgJgXg");
	this.shape_16.setTransform(69.6,40.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDEEBD").s().p("AgfAmIAAhLIAiAAQANAAAHAHQAFAFAAAIIgBAGIgCAEIgDAEIgEADQAHAAAEAFQADAEAAAIIAAAAQAAAFgCAEQgCAEgDADQgEACgGABQgFACgGAAgAgPAXIATAAQAFAAADgCQAEgCAAgEIAAAAQAAgFgDgCQgDgCgHAAIgSAAgAgPgGIAPAAQAFAAADgCQADgCAAgEQAAgEgCgCQgDgCgGAAIgPAAg");
	this.shape_17.setTransform(61.5,41);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA5AAIAAAPIgoAAIAAAPIAiAAIAAAOIgiAAIAAAQIAoAAIAAAPg");
	this.shape_18.setTransform(53.8,41);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDEEBD").s().p("AgiAmIAAhLIAeAAQAHAAAIADQAHADAGAFQAFAFADAHQADAHAAAHQAAAIgDAHQgDAGgFAGQgGAFgHADQgIADgHAAgAgRAXIANAAQAEAAADgCQAFgBADgDQADgEACgEQACgEAAgFQAAgDgCgFQgCgEgDgDQgDgEgFgBQgDgCgEAAIgNAAg");
	this.shape_19.setTransform(45.8,41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDEEBD").s().p("AgaAmIAAhLIARAAIAAA7IAkAAIAAAQg");
	this.shape_20.setTransform(146.9,24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDEEBD").s().p("AAWAmIgGgRIgfAAIgHARIgSAAIAihLIANAAIAhBLgAgJAGIATAAIgKgXg");
	this.shape_21.setTransform(138.9,24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDEEBD").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_22.setTransform(132.7,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDEEBD").s().p("AgHAmIAAg7IgXAAIAAgQIA9AAIAAAQIgXAAIAAA7g");
	this.shape_23.setTransform(127.2,24.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDEEBD").s().p("AAUAmIgkgvIAAAvIgRAAIAAhLIAQAAIAiAtIAAgtIARAAIAABLg");
	this.shape_24.setTransform(119.3,24.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA5AAIAAAPIgoAAIAAAQIAiAAIAAANIgiAAIAAAQIAoAAIAAAPg");
	this.shape_25.setTransform(111.5,24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDEEBD").s().p("AgiAmIAAhLIAfAAQAHAAAHADQAHADAGAFQAFAFADAHQADAHAAAHQAAAIgDAGQgDAIgFAFQgGAFgHADQgHADgHAAgAgRAWIAOAAQADAAAEgBQAEgBADgEQADgDABgEQACgEAAgFQAAgEgCgEQgBgEgDgDQgDgDgEgCQgEgCgDABIgOAAg");
	this.shape_26.setTransform(103.5,24.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDEEBD").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_27.setTransform(97.2,24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDEEBD").s().p("AgOAkQgIgDgHgHIAKgMQAGAFAFADQAGACAEAAQAFAAADgCQADgCAAgDIAAgBIgBgCIgCgCIgEgDIgGgCIgLgDIgIgEQgDgCgCgDQgCgEAAgFIAAgBQAAgFACgEQACgFAEgCQADgEAFgCQAFgBAFAAQAHAAAIACQAHADAFAEIgIAOIgKgGQgFgCgEAAQgEAAgCACQgDACAAACIAAABIABADIACACIAGACIAGADIAKADIAIADQADACABAEQACAEAAAFQAAAGgCAEQgDAFgDADQgEADgFACQgFABgHAAQgGAAgJgDg");
	this.shape_28.setTransform(91.7,24.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA5AAIAAAPIgoAAIAAAQIAiAAIAAANIgiAAIAAAQIAoAAIAAAPg");
	this.shape_29.setTransform(84.8,24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDEEBD").s().p("AANAmIgPgYIgNAAIAAAYIgRAAIAAhLIAiAAQAOAAAIAIQAGAGAAALQABAKgFAEQgFAGgHADIATAbgAgPAAIAQAAQAFAAAEgDQAEgDgBgFIAAAAQABgFgEgDQgDgDgHABIgPAAg");
	this.shape_30.setTransform(77.2,24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDEEBD").s().p("AgdAmIAAhLIAeAAQAGAAAGACQAFACAEAEQAEADACAFQACAFAAAFIAAABQAAAGgCAEQgDAFgEADQgEADgGACQgFACgGAAIgMAAIAAAXgAgMAAIAMAAQAGAAAEgCQADgDAAgFQAAgGgDgDQgEgDgGABIgMAAg");
	this.shape_31.setTransform(69.6,24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA5AAIAAAPIgoAAIAAAQIAjAAIAAANIgjAAIAAAQIAoAAIAAAPg");
	this.shape_32.setTransform(58.8,24.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDEEBD").s().p("AgLAlQgGgEgGgFQgFgGgDgHQgDgHAAgIIAAAAQAAgGADgIQADgHAFgGQAGgFAGgDQAIgDAHgBIAKABIAIADIAHAEIAGAEIgMANIgJgGQgFgCgFAAQgEgBgDACQgEACgDAEQgDADgCAEQgBAEAAAEQAAAFABAEIAFAHQACAEAFACQADACAEgBQAHAAAEgBQAFgDAEgFIALALIgGAGIgHAEIgJAEIgKABQgGAAgIgDg");
	this.shape_33.setTransform(51,24.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDEEBD").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_34.setTransform(45,24.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDEEBD").s().p("AgGAmIgfhLIATAAIASA0IAUg0IASAAIgfBLg");
	this.shape_35.setTransform(39,24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDEEBD").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_36.setTransform(30,27.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDEEBD").s().p("AgOAkQgIgDgHgHIAKgMQAGAFAFADQAFACAFAAQAGAAACgCQADgCAAgDIAAgBIAAgCIgDgCIgEgDIgGgCIgLgDIgIgEQgDgCgCgDQgCgEAAgFIAAgBQAAgFACgEQACgFAEgCQADgEAFgCQAFgBAFAAQAHAAAIACQAGADAGAEIgIAOIgLgGQgFgCgDAAQgEAAgDACQgCACAAACIAAABIABADIACACIAGACIAGADIAKADIAIADQADACABAEQACAEAAAFQAAAGgCAEQgDAFgDADQgDADgGACQgFABgHAAQgGAAgJgDg");
	this.shape_37.setTransform(24.9,24.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDEEBD").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_38.setTransform(19.8,27.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDEEBD").s().p("AgXAeQgJgJAAgQIAAgqIARAAIAAApQAAAKAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgJIAAgqIARAAIAAApQAAAJgDAGQgCAHgEAEQgEAEgHACQgGACgHAAQgOABgJgJg");
	this.shape_39.setTransform(14.1,24.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDEEBD").s().p("AgHAmIAAgeIgdgtIATAAIARAfIASgfIATAAIgdAtIAAAeg");
	this.shape_40.setTransform(134.4,8.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDEEBD").s().p("AgaAmIAAhLIARAAIAAA7IAkAAIAAAQg");
	this.shape_41.setTransform(127.3,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDEEBD").s().p("AAUAmIgkgvIAAAvIgRAAIAAhLIAQAAIAiAuIAAguIARAAIAABLg");
	this.shape_42.setTransform(119.2,8.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDEEBD").s().p("AgPAkQgHgDgGgFQgFgFgDgIQgDgHAAgIIAAAAQAAgHADgHQADgHAFgFQAGgGAHgDQAIgEAHAAQAJAAAHAEQAHADAGAGQAFAEADAIQADAHAAAHQAAAIgDAHQgDAHgFAGQgGAFgHADQgIAEgIgBQgHABgIgEgAgIgVQgEACgDAEQgDACgCAFQgCAFAAADQAAAEACAFQACAEADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQACgEAAgFIAAAAQAAgDgCgFQgCgEgDgDQgDgEgEgCQgFgCgEAAQgEABgEABg");
	this.shape_43.setTransform(110.2,8.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA4AAIAAAPIgnAAIAAAQIAjAAIAAANIgjAAIAAAQIAoAAIAAAPg");
	this.shape_44.setTransform(98.8,8.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDEEBD").s().p("AAPAmIAAgfIgdAAIAAAfIgRAAIAAhLIARAAIAAAfIAdAAIAAgfIARAAIAABLg");
	this.shape_45.setTransform(90.7,8.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDEEBD").s().p("AgHAmIAAg8IgXAAIAAgPIA9AAIAAAPIgXAAIAAA8g");
	this.shape_46.setTransform(83,8.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA5AAIAAAPIgoAAIAAARIAjAAIAAANIgjAAIAAAeg");
	this.shape_47.setTransform(72.8,8.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDEEBD").s().p("AgPAkQgHgDgGgFQgFgFgDgIQgDgHAAgIIAAAAQAAgHADgHQADgHAFgFQAGgGAHgDQAIgEAHAAQAJAAAHAEQAHADAGAGQAFAEADAIQADAHAAAHQAAAIgDAHQgDAHgFAGQgGAFgHADQgIAEgIgBQgHABgIgEgAgIgVQgEACgDAEQgDACgCAFQgCAFAAADQAAAEACAFQACAEADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQACgEAAgFIAAAAQAAgDgCgFQgCgEgDgDQgDgEgEgCQgFgCgEAAQgEABgEABg");
	this.shape_48.setTransform(64.2,8.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDEEBD").s().p("AgcAmIAAhLIA4AAIAAAPIgnAAIAAAQIAjAAIAAANIgjAAIAAAQIAoAAIAAAPg");
	this.shape_49.setTransform(52.8,8.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FDEEBD").s().p("AAVAmIAAgwIgVAeIgUgeIAAAwIgRAAIAAhLIASAAIATAgIAUggIASAAIAABLg");
	this.shape_50.setTransform(44.1,8.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDEEBD").s().p("AgPAkQgHgDgGgFQgFgFgDgIQgDgHAAgIIAAAAQAAgHADgHQADgHAFgFQAGgGAHgDQAIgEAHAAQAJAAAHAEQAHADAGAGQAFAEADAIQADAHAAAHQAAAIgDAHQgDAHgFAGQgGAFgHADQgIAEgIgBQgHABgIgEgAgIgVQgEACgDAEQgDACgCAFQgCAFAAADQAAAEACAFQACAEADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQACgEAAgFIAAAAQAAgDgCgFQgCgEgDgDQgDgEgEgCQgFgCgEAAQgEABgEABg");
	this.shape_51.setTransform(34.7,8.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDEEBD").s().p("AAPAmIAAgfIgdAAIAAAfIgRAAIAAhLIARAAIAAAfIAdAAIAAgfIARAAIAABLg");
	this.shape_52.setTransform(25.8,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,81.7);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(365));

	// Layer 11
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(80,391,1,1,0,0,0,80,27.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},14).wait(229).to({alpha:0},12).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(250,322.8,1,1,0,0,0,80,41.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({x:80,alpha:1},14).wait(266).to({alpha:0},12).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(250,220.8,1,1,0,0,0,80,61.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).to({x:80,alpha:1},14).wait(277).to({alpha:0},12).wait(1));

	// Layer 10
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(250,120.8,1,1,0,0,0,80,41.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({x:80,alpha:1},14).wait(288).to({alpha:0},12).wait(1));

	// Layer 9
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(80,-52,1,1,0,0,0,80,38);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).to({y:38},14).wait(306).to({alpha:0},12).wait(1));

	// Layer 4
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(80,647,1,1,0,0,0,80,43);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:557},14).wait(324).to({alpha:0},12).wait(1));

	// Layer 6
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(80,566,1,1,0,0,0,80,38);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({y:491},14).wait(306).to({alpha:0},12).wait(1));

	// Layer 5
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},13).wait(339).to({alpha:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;