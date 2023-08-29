(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300_bg.jpg", id:"_300_bg"},
		{src:"_300_border.png", id:"_300_border"},
		{src:"_300_elissa.jpg", id:"_300_elissa"},
		{src:"_300_footer.png", id:"_300_footer"},
		{src:"_300_logo.png", id:"_300_logo"}
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



(lib._300_bg = function() {
	this.initialize(img._300_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_elissa = function() {
	this.initialize(img._300_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib._300_footer = function() {
	this.initialize(img._300_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,23);


(lib._300_logo = function() {
	this.initialize(img._300_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,67);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(150,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_1.setTransform(138.4,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_2.setTransform(122.4,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAQAAQAQABAHgJQAIgJgBgXQABgWgIgJQgHgJgQABIgQAAg");
	this.shape_3.setTransform(105.4,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag9CCIAAkCIB7AAIAAAmIhOAAIAABEIA6AAIAAAkIg6AAIAAB0g");
	this.shape_4.setTransform(88.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgrAQIAAgfIBWAAIAAAfg");
	this.shape_5.setTransform(74,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_6.setTransform(61,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AhFCCIAAkCIBDAAQAhAAARASQARARAAAiQAAAKgDALQgEALgHAIQgGAJgLAFQARAFAJAOQAKAQAAAYQAAAWgHARQgHAQgPALQgQAJgZABgAgYBdIATAAQAPAAAIgKQAHgKAAgVQAAgTgIgKQgJgKgSAAIgOAAgAgYgWIAQAAQALAAAIgIQAJgJAAgQQAAgSgHgJQgHgKgNAAIgRAAg");
	this.shape_7.setTransform(45.2,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_8.setTransform(28.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AhDCCIAAkCIBDAAQAggBASAUQASATAAAoIAABlQAAAogSATQgSAUggAAgAgWBdIAPAAQAQAAAHgIQAHgIAAgUIAAhxQAAgTgHgJQgHgIgQAAIgPAAg");
	this.shape_9.setTransform(11,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.2,47.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape.setTransform(92.2,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_1.setTransform(84.8,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgJA5IAAhgIgSAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_2.setTransform(78,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_3.setTransform(71.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVAyQgIgHAAgQIAAhUIAUAAIAABVQAAAGACADQADAEAEAAQAFAAACgEQADgDAAgGIAAhVIAUAAIAABUQAAAQgIAHQgIAIgOAAQgNAAgIgIg");
	this.shape_4.setTransform(63.8,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_5.setTransform(55.8,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_6.setTransform(48.2,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_7.setTransform(40.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QAAgJADgGQADgHAGgEQAHgEAJAAQAIAAAHAFQAHAEADAHQADAHAAAJIAAAHIgTAAIgBgNQgBgFgCgCQgDgCgCAAQgDAAgDADQgCADgBAHIAAA5QAAAGACADQACADAFABQAEAAADgEQACgEAAgIIAAgMIgKAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_8.setTransform(32.6,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_9.setTransform(21.1,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAMA5IgXhGIAAAAIAABGIgSAAIAAhxIASAAIAXBAIAAAAIAAhAIASAAIAABxg");
	this.shape_10.setTransform(13.1,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_11.setTransform(5.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.4,23.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIATIAIgTIgHAAIAAgSIAQAAIAAASIgJATg");
	this.shape.setTransform(130.7,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVAyQgIgHAAgQIAAhUIAUAAIAABVQAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAhVIAUAAIAABUQgBAQgHAHQgIAIgOAAQgNAAgIgIg");
	this.shape_1.setTransform(125,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_2.setTransform(117,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(109,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAHAEADAHQADAGAAAJIAAA5QAAAIgDAHQgDAHgHAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_4.setTransform(97.5,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_5.setTransform(90.4,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAFAAAEgEQADgDAAgJIAAgxQAAgJgDgDQgEgEgFAAIgHAAg");
	this.shape_6.setTransform(79.7,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_7.setTransform(72.3,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_8.setTransform(64.8,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_9.setTransform(56.8,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_10.setTransform(49.2,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIA1AAIAAARIghAAIAAAeIAYAAIAAAPIgYAAIAAAzg");
	this.shape_11.setTransform(42.1,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQABAJADAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgBgHgEgDQgDgDgDAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_12.setTransform(34.8,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AANA5IgXhGIgBAAIAABGIgSAAIAAhxIATAAIAWBAIAAAAIAAhAIASAAIAABxg");
	this.shape_13.setTransform(27.3,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_14.setTransform(19.8,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_15.setTransform(12.4,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgIA5IAAhgIgUAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_16.setTransform(5.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.8,23.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAfIAMgfIgLAAIAAgeIAcAAIAAAeIgPAfg");
	this.shape.setTransform(108.9,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_1.setTransform(99.5,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAheQAAgOAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFAMAAANIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_2.setTransform(86.5,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPBeIAAieIgfAAIAAgcIBdAAIAAAcIgfAAIAACeg");
	this.shape_3.setTransform(75.1,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_4.setTransform(62.6,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgEgHAAgJIATgDQABAJADAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAJAAAGAEQAFADAEAHQADAGABAIIgTACQAAgHgDgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_5.setTransform(55.3,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgHAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_6.setTransform(47.8,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_7.setTransform(39.8,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHAAgIIAAg5QAAgJADgGQADgHAHgEQAGgEAJAAQAKAAAGAFQAHAEADAHQADAHABAJIAAAIIgVAAIAAgJQAAgHgDgDQgCgEgEAAQgEAAgDAEQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAACgDQACgDAAgGIAAgOIAVAAIAAANQgBAIgDAHQgDAHgHAEQgGAEgKAAQgJAAgGgEg");
	this.shape_8.setTransform(31.7,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_9.setTransform(20.8,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_10.setTransform(13.1,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgEgHAAgJIATgDQAAAJADAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAIAAAHAEQAFADAEAHQAEAGAAAIIgTACQgBgHgCgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_11.setTransform(5.5,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.1,35.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(159,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAVgDQABAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgDgDgEAAQgEAAgCADQgEAEAAAGQABAGAEAGQAFAGAEAFIAOAKQAGAGAFAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_1.setTransform(153,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgdBBIAAiAIA5AAIAAATIgkAAIAAAhIAcAAIAAASIgcAAIAAAmIAnAAIAAAUg");
	this.shape_2.setTransform(145.2,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQAKAAAHAEQAHAFAEAIQAEAIAAAKIAAAIIgVAAQAAgJgCgGQgBgFgCgCQgDgCgDAAQgEAAgDADQgDADAAAIIAABBQAAAGACAEQADADAFABQAFAAADgFQADgEAAgJIAAgNIgMAAIAAgQIAiAAIAABAIgKAAIgFgKQgFAGgFADQgFADgFAAQgOAAgIgJg");
	this.shape_3.setTransform(136.5,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgkAAIAAAhIAcAAIAAASIgcAAIAAAmIAnAAIAAAUg");
	this.shape_4.setTransform(128.2,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgbBBIAAiAIAWAAIAABsIAhAAIAAAUg");
	this.shape_5.setTransform(120.9,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgbBBIAAiAIAWAAIAABsIAhAAIAAAUg");
	this.shape_6.setTransform(113.9,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgEgHAAgJIAAhBQAAgKAEgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHABAKIAABBQgBAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgDAEABAHIAABAQgBAHADAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_7.setTransform(105.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAIgEAJAAQALAAAIAEQAHAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQgBgJgCgDQgDgEgFAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgHAEQgIAFgLAAQgJAAgIgFg");
	this.shape_8.setTransform(96.5,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgRA9QgHgFgFgIQgEgIAAgKIAVgDQABAKAEAFQADAFAEAAQAFAAAEgDQAEgDgBgGQABgIgFgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAPAAQAJAAAHAEQAGAEAEAHQAEAHABAJIgWACQgBgIgDgDQgDgDgEAAQgEAAgCADQgDAEAAAGQgBAGAFAGQAFAGAEAFIAOAKQAGAGAFAIQAEAIABALQgBAKgEAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_9.setTransform(84,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgYA4QgJgIAAgSIAAheIAXAAIAABfQAAAIADAEQACADAFAAQAFAAAEgDQACgEAAgIIAAhfIAXAAIAABeQgBASgIAIQgKAJgPAAQgOAAgKgJg");
	this.shape_10.setTransform(75.5,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHgBgJIAAhBQABgKADgHQADgIAJgEQAHgEAKAAQALAAAIAEQAIAEADAIQAEAHAAAKIAABBQAAAJgEAHQgDAIgIAEQgIAFgLAAQgKAAgHgFgAgIgrQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAADgEQADgEgBgHIAAhAQABgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_11.setTransform(66.5,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgJBBIAAiAIATAAIAACAg");
	this.shape_12.setTransform(59.5,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKADgHQAEgIAIgEQAGgEALAAQAKAAAHAEQAIAFADAIQAEAIAAAKIAAAIIgVAAQAAgJgBgGQgCgFgDgCQgDgCgCAAQgEAAgDADQgDADAAAIIAABBQAAAGADAEQACADAFABQAFAAADgFQADgEAAgJIAAgNIgNAAIAAgQIAjAAIAABAIgLAAIgEgKQgFAGgEADQgGADgGAAQgNAAgIgJg");
	this.shape_13.setTransform(52.5,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgKBBIAAiAIAVAAIAACAg");
	this.shape_14.setTransform(45.5,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_15.setTransform(39.5,12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgRA9QgHgFgEgIQgFgIAAgKIAWgDQAAAKADAFQAEAFAEAAQAFAAAEgDQADgDAAgGQABgIgFgGQgFgGgEgFIgOgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAOAAQAKAAAHAEQAGAEAEAHQADAHACAJIgWACQAAgIgEgDQgEgDgDAAQgEAAgDADQgCAEAAAGQgBAGAFAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_16.setTransform(32,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_17.setTransform(24.2,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgGAAIAAA2IgXAAIAAiAIAgAAQAQAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgEADgEABIATA8gAgMgFIAIAAQAGAAAEgEQAEgFAAgLQAAgMgEgEQgEgFgGABIgIAAg");
	this.shape_18.setTransform(15.7,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgjBBIAAiAIAgAAQATAAAKAJQAKAIgBAVQABAUgKAHQgKAKgTgBIgJAAIAAA2gAgMgFIAIAAQAJAAAFgEQADgFAAgLQAAgMgDgEQgFgFgJABIgIAAg");
	this.shape_19.setTransform(6.7,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.2,25.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape.setTransform(116.5,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBBIgFgdIgVAAIgFAdIgVAAIAYiAIAaAAIAXCAgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_1.setTransform(109,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghBBIAAiAIAhAAQAQgBAJAKQAJAKAAAUIAAAxQAAAUgJAKQgJAJgQABgAgKAuIAIAAQAGAAAEgEQAEgEAAgKIAAg3QAAgKgEgEQgEgFgGABIgIAAg");
	this.shape_2.setTransform(96.5,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgdBBIAAiAIA5AAIAAATIgkAAIAAAhIAbAAIAAASIgbAAIAAAmIAmAAIAAAUg");
	this.shape_3.setTransform(88.2,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_4.setTransform(80.5,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgiBBIAAiAIAfAAQATAAAKAJQAKAIAAAVQAAAUgKAHQgKAKgTgBIgKAAIAAA2gAgNgFIAJAAQAJAAAFgEQADgFAAgLQAAgMgDgEQgFgFgJABIgJAAg");
	this.shape_5.setTransform(72.7,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgdBBIAAiAIA5AAIAAATIgkAAIAAAhIAcAAIAAASIgcAAIAAAmIAnAAIAAAUg");
	this.shape_6.setTransform(64.2,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQgBgJgDgDQgCgEgFAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgKAAgHgFg");
	this.shape_7.setTransform(55.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQgBgJgDgDQgCgEgFAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgKAAgHgFg");
	this.shape_8.setTransform(46.5,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAPBBIgDgdIgWAAIgFAdIgVAAIAYiAIAaAAIAXCAgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_9.setTransform(38,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgFgGgFgFIgNgKQgGgGgFgIQgFgIAAgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgEgDgDAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_10.setTransform(26,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAQBBIgFgdIgVAAIgFAdIgVAAIAXiAIAbAAIAXCAgAAIAQIgIg2IgHA2IAPAAg");
	this.shape_11.setTransform(18,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAQBBIgQhVIAAAAIgNBVIgTAAIgZiAIAVAAIAOBRIAAAAIAPhRIAQAAIAPBRIABAAIAMhRIAVAAIgXCAg");
	this.shape_12.setTransform(7.8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.2,25.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape.setTransform(102.3,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgqCQQgRgMgKgTQgJgTgBgXIAygHQABAXAJAMQAIALALAAQAOAAAHgHQAJgHAAgOQAAgRgLgOQgKgOgOgNIgfgZQgQgOgKgTQgMgTAAgaQAAgkAWgTQAUgUAlAAQAVAAAPAJQAQAKAJAQQAJARACAVIgxAGQgDgTgHgIQgJgHgJAAQgLAAgGAIQgHAIAAAOQAAAPALANQAKAOAOAMQAQANAQANQAPAPAKATQALASABAZQgBAZgJARQgLARgTAJQgSAJgWAAQgZAAgRgLg");
	this.shape_1.setTransform(83.5,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgqCQQgRgMgJgTQgKgTgBgXIAygHQABAXAJAMQAIALALAAQANAAAIgHQAJgHAAgOQgBgRgKgOQgLgOgNgNIgggZQgPgOgLgTQgKgTgBgaQAAgkAWgTQAUgUAlAAQAVAAAPAJQAQAKAJAQQAJARACAVIgxAGQgCgTgIgIQgJgHgJAAQgKAAgIAIQgGAIAAAOQABAPAKANQAKAOAOAMQAQANAPANQAQAPAKATQAMASAAAZQAAAZgLARQgKARgTAJQgSAJgXAAQgYAAgRgLg");
	this.shape_2.setTransform(64.9,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgZCXIAAh+Ig/ivIA1AAIAjBzIAAAAIAkhzIA1AAIg/CvIAAB+g");
	this.shape_3.setTransform(46.4,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_4.setTransform(29.6,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_5.setTransform(11.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.8,54.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOA5IgDgZIgUAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape.setTransform(167.2,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_1.setTransform(159.8,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QABgJADgGQADgHAHgEQAGgEAJAAQAJAAAGAFQAHAEADAHQAEAHAAAJIAAAHIgTAAIgCgNQgBgFgDgCQgCgCgCAAQgEAAgCADQgDADAAAHIAAA5QAAAGADADQABADAFABQAFAAACgEQADgEAAgIIAAgMIgLAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_2.setTransform(151.6,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_3.setTransform(141.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAHAEADAHQADAGAAAJIAAA5QAAAIgDAHQgDAHgHAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_4.setTransform(133.9,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgQA3QgHgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAHgEQAHgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(125.9,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_6.setTransform(117.9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAHgEAIAAQAKAAAGAFQAHAEAEAHQADAHAAAJIAAAIIgUAAIAAgJQAAgHgEgDQgCgEgEAAQgEAAgCAEQgCADgBAGIAAA5QABAGACADQACAEAEAAQAGAAABgDQADgDAAgGIAAgOIAUAAIAAANQAAAIgDAHQgEAHgHAEQgGAEgKAAQgIAAgHgEg");
	this.shape_7.setTransform(109.9,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQABAJADAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgBgHgEgDQgDgDgDAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_8.setTransform(102.3,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_9.setTransform(91.3,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QABgJADgGQADgHAHgEQAGgEAJAAQAJAAAGAFQAHAEADAHQAEAHAAAJIAAAHIgTAAIgCgNQgBgFgDgCQgCgCgCAAQgEAAgCADQgDADAAAHIAAA5QAAAGADADQABADAFABQAEAAADgEQADgEAAgIIAAgMIgLAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_10.setTransform(83.2,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_11.setTransform(77,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_12.setTransform(70.8,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgMA3QgHgCgDgGQgEgGAAgJIAAgJIASAAIAAAKQAAAEACACQACAEAEAAQADgBADgDQACgDAAgIIAAgaQAAgEgCgCQgDgCgDgBQgDABgCACQgDADgBABIgPAAIAAgPIABgTIAAgXIAuAAIAAAQIgdAAIgCAZIABAAQADgDAEgCQABgBAFAAQALAAAFAIQAFAHAAAOIAAAPQAAASgGAJQgGAJgPAAQgGAAgGgDg");
	this.shape_13.setTransform(59.7,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_14.setTransform(54.4,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AACA5IAAgcIggAAIAAgOIAfhHIAUAAIAABHIAKAAIAAAOIgKAAIAAAcgAgPAPIASAAIAAgrIgBAAg");
	this.shape_15.setTransform(48.9,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_16.setTransform(38.4,11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_17.setTransform(27.3,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_18.setTransform(20.2,11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_19.setTransform(14.9,11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_20.setTransform(7.2,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,23.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_elissa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape_12.setTransform(156,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_13.setTransform(142.4,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_14.setTransform(125.3,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AhRCXIAAktIBOAAQAnAAAUAVQAUAUgBAnQAAANgDANQgEAMgIAKQgIAKgNAFQAUAHALARQALARAAAdQABAagJATQgIAUgSAMQgSALgdAAgAgcBsIAWAAQASAAAJgMQAIgLAAgXQAAgYgKgLQgJgMgWAAIgQAAgAgcgaIASAAQAOAAAJgKQAKgJAAgTQAAgVgIgLQgJgLgPAAIgTAAg");
	this.shape_15.setTransform(106,22.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_16.setTransform(86,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("Ag5CFQgVgVgBgnIAAjhIA1AAIAADjQAAARAHAIQAGAIANAAQAOAAAGgIQAHgIAAgRIAAjjIA1AAIAADhQgBAngVAVQgVAUglAAQgkAAgVgUg");
	this.shape_17.setTransform(66.2,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_18.setTransform(48.3,22.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_19.setTransform(30,22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgYCXIhAktIAzAAIAlDQIAAAAIAmjQIAzAAIg/Etg");
	this.shape_20.setTransform(11.3,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,162.8,54.4);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgZCXIAAh+Ig/ivIA1AAIAjBzIAAAAIAjhzIA1AAIg/CvIAAB+g");
	this.shape_17.setTransform(169.8,17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_18.setTransform(153,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AhRCXIAAktIBOAAQAnAAAUAVQAUAUgBAnQAAANgDANQgEAMgIAKQgIAKgNAFQAUAHALARQALARAAAdQABAagJATQgIAUgSAMQgSALgdAAgAgcBsIAWAAQASAAAJgMQAIgLAAgXQAAgYgKgLQgJgMgWAAIgQAAgAgcgaIASAAQAOAAAJgKQAKgJAAgTQAAgVgIgLQgJgLgPAAIgTAAg");
	this.shape_19.setTransform(133.8,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgZCXIAAktIAyAAIAAEtg");
	this.shape_20.setTransform(117.2,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AhOCXIAAktIBNAAQAnAAAUAWQAVAXAAAvIAAB2QAAAugVAXQgUAWgnAAgAgaBsIASAAQATABAIgKQAJgJgBgYIAAiDQABgXgJgKQgIgKgTABIgSAAg");
	this.shape_21.setTransform(100.9,17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_22.setTransform(81.5,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAfCXIgjh9IgNABIgOAAIAAB8Ig0AAIAAktIBJAAQAqAAAWAUQAXAVAAAwQgBAZgFAPQgFAQgJAGQgIAJgJAEIAsCJgAgfgOIATAAQATABAJgLQAIgKABgbQgBgagIgKQgJgLgTABIgTAAg");
	this.shape_23.setTransform(61.7,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgqCRQgSgLgIgRQgJgSAAgVIAAiaQAAgWAJgSQAIgRASgKQARgLAaAAQAaAAARALQARAMAJASQAIATAAAXIAAAWIg0AAIAAgXQAAgTgIgJQgHgJgKAAQgOAAgGAIQgGAJAAARIAACXQAAARAGAJQAGAIAOAAQAOAAAFgIQAGgIAAgPIAAgkIA0AAIAAAjQAAAVgIASQgJARgRALQgRAKgaAAQgaAAgRgKg");
	this.shape_24.setTransform(40.1,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AAiCXIhAi7IgBAAIAAC7IgwAAIAAktIAxAAIA+CrIABAAIAAirIAuAAIAAEtg");
	this.shape_25.setTransform(19.2,17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgYCXIAAktIAyAAIAAEtg");
	this.shape_26.setTransform(2.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-10,186.3,54.4);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_13.setTransform(255.3,17.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgoA4QgSgTAAglQAAghAQgUQAQgVAaAAQAYAAAPAQQAQARAAAhIAAALIhdAAQAAAZANAPQAMAPAQAAQAbAAAOgZIAPAJQgJAPgMAJQgNAJgWAAQgYAAgTgTgAgagsQgKALgBAVIBIAAQAAgVgKgLQgJgNgQAAQgQAAgKANg");
	this.shape_14.setTransform(244.1,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgIBkIAAjHIARAAIAADHg");
	this.shape_15.setTransform(233.1,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgoBUIgDAPIgPAAQABgHAAgZIAAioIAUAAIAABHIACgBQATgQAQAAQALAAAJAEQAKAEAJAIQAJAJAFAPQAGANAAAVQAAAUgGAQQgFAPgJAIQgJAIgKAEQgKAEgKAAQgVAAgTgSgAglgKIAABLQALALAIAEQAJAFAJAAQARAAALgPQALgPAAgcQAAg5gnAAQgSAAgTAUg");
	this.shape_16.setTransform(222,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgOBLQgRAAgMgLQgLgKAAgTQgBgYAVgLQATgOAwgIIAAgIQgBgbgeAAQgNAAgJAHQgKAHgDAJIgSgJQARgfAkAAQAVAAAOALQAPAKABAXIAABHQAAASACANIgUAAIgCgUQgVAXgYAAIgCAAgAgiAjQAAAKAHAGQAIAHAJAAQAKAAALgHQANgHAJgLIAAglQhEAKABAdg");
	this.shape_17.setTransform(206.5,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgTBiQgKgEgJgIQgJgIgGgPQgFgQAAgUQAAgVAFgNQAGgPAJgJQAJgIAKgEQAKgEAJAAQARAAAUAQIABABIAAhHIAUAAIAACoQAAAZABAHIgTAAIgCgOQgGAHgKAFQgKAFgMAAQgJAAgKgEgAgmAbQAAAcALAPQALAPARAAQAKAAAIgFQAIgEALgLIAAhLQgSgUgTAAQgnAAAAA5g");
	this.shape_18.setTransform(191.4,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AggBJIAAiPIATAAIAAAcIABAAQAJgQAJgHQALgIAQABIAAAUQgRAAgMALQgJANgIAXIAABOg");
	this.shape_19.setTransform(180.2,11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgqA2QgQgWAAggQAAggAQgUQAPgWAbAAQAcAAAPAWQAQAUAAAgQAAAggQAWQgPAVgcAAQgbAAgPgVgAgcgqQgKAQAAAaQAAAbAKAQQAMAPAQAAQASAAALgPQAKgQAAgbQAAgagKgQQgLgPgSAAQgQAAgMAPg");
	this.shape_20.setTransform(167.8,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgNBmIAAh+IgYAAIAAgSIAYAAIAAgQQABgZAHgJQAHgJATAAIARACIAAASIgGgBIgIgBQgLgBgEAFQgDAEAAAMIAAAVIAfAAIAAASIgfAAIAAB+g");
	this.shape_21.setTransform(156.2,8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgNBmIAAh+IgZAAIAAgSIAZAAIAAgQQAAgZAJgJQAGgJATAAIASACIAAASIgHgBIgIgBQgLgBgDAFQgFAEAAAMIAAAVIAgAAIAAASIggAAIAAB+g");
	this.shape_22.setTransform(146.9,8.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AA3BkIgSg/IhJAAIgSA/IgXAAIA+jHIAfAAIA+DHgAgeASIA9AAIgehmIgBAAg");
	this.shape_23.setTransform(133.7,8.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("Ag3BiIAAgRIALABQAeAAAIgjIgziRIAVAAIAmBtIAAAAIAihtIAWAAIgzCcQgMApgkAAIgOgBg");
	this.shape_24.setTransform(110.4,14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgJBkIAAjHIATAAIAADHg");
	this.shape_25.setTransform(100.3,8.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgoA4QgSgTAAglQAAghAQgUQAQgVAaAAQAYAAAPAQQAQARAAAhIAAALIhdAAQAAAZANAPQAMAPAQAAQAbAAAOgZIAPAJQgJAPgMAJQgNAJgWAAQgYAAgTgTgAgagsQgKALgBAVIBIAAQAAgVgKgLQgJgNgQAAQgQAAgKANg");
	this.shape_26.setTransform(89.5,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("ABJBKIAAhmQAAgbgXAAQgIAAgIAEIgNAHIgMALIAABrIgSAAIAAhmQAAgbgXAAQgIAAgHAEQgJAEgEADIgMALIAABrIgUAAIAAiQIAUAAIAAATIABgBQATgVAYAAQANAAAKAHQAIAGAEAKQAVgXAZAAQAoAAAAAtIAABmg");
	this.shape_27.setTransform(70.8,11.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgoA4QgSgTAAglQAAghAQgUQAQgVAaAAQAYAAAPAQQAQARAAAhIAAALIhdAAQAAAZANAPQAMAPAQAAQAbAAAOgZIAPAJQgJAPgMAJQgNAJgWAAQgYAAgTgTgAgagsQgKALgBAVIBIAAQAAgVgKgLQgJgNgQAAQgQAAgKANg");
	this.shape_28.setTransform(52.2,11.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AghBJIAAiPIAVAAIAAAcIAAAAQAJgQAJgHQALgIAQABIAAAUQgRAAgMALQgJANgHAXIAABOg");
	this.shape_29.setTransform(41.2,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgHBcQgHgFAAgOIAAhoIgYAAIAAgSIAYAAIAAgwIASAAIAAAwIAiAAIAAASIgiAAIAABmQAAAKARAAIASgCIAAARQgIACgQAAQgPAAgHgGg");
	this.shape_30.setTransform(30.9,9.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AAjBIIgjg7IgjA7IgWAAIAthKIgqhFIAXAAIAfAzIAdgzIAXAAIgpBFIAvBKg");
	this.shape_31.setTransform(20.3,11.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("Ag+BkIAAjHIB3AAIAAATIhhAAIAABDIBFAAIAAARIhFAAIAABOIBnAAIAAASg");
	this.shape_32.setTransform(6.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-10,266.7,37.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,67);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,23);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(310));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(187,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).to({y:238.5},11).wait(15));

	// Layer 3
	this.instance_3 = new lib.Symbol13_1();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(267).to({_off:false},0).to({x:108.3,alpha:1},11).wait(32));

	// Layer 11
	this.instance_4 = new lib.Symbol12_1();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(261).to({_off:false},0).to({x:103,alpha:1},11).wait(38));

	// Layer 16
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({x:77.7,alpha:1},11).wait(43));

	// Layer 10
	this.instance_6 = new lib.Symbol14();
	this.instance_6.setTransform(388.1,44.8,1,1,0,0,0,78.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(163).to({_off:false},0).to({x:208.1},13).wait(71).to({alpha:0},8).wait(55));

	// Layer 9
	this.instance_7 = new lib.Symbol13();
	this.instance_7.setTransform(370.1,38.6,1,1,0,0,0,49.1,11.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({x:80.1},13).wait(78).to({alpha:0},8).wait(55));

	// Layer 7
	this.instance_8 = new lib.Symbol12();
	this.instance_8.setTransform(381.3,19.6,1,1,0,0,0,67.3,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:201.3},13).wait(84).to({alpha:0},8).wait(55));

	// Layer 15
	this.instance_9 = new lib.Symbol11();
	this.instance_9.setTransform(364,15.6,1,1,0,0,0,57,17.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(145).to({_off:false},0).to({x:74},13).wait(89).to({alpha:0},8).wait(55));

	// Layer 6
	this.instance_10 = new lib.Symbol10();
	this.instance_10.setTransform(399.9,49.2,1,1,0,0,0,81.6,12.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({x:209.9},13).wait(73).to({alpha:0},8).wait(166));

	// Layer 5
	this.instance_11 = new lib.Symbol9();
	this.instance_11.setTransform(379.4,32.8,1,1,0,0,0,61.1,12.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({x:189.4},13).wait(81).to({alpha:0},8).wait(166));

	// Layer 4
	this.instance_12 = new lib.Symbol8();
	this.instance_12.setTransform(-71.6,40.2,1,1,0,0,0,56.9,27.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({x:68.4},13).wait(89).to({alpha:0},8).wait(166));

	// Layer 14
	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(100.5,-15.4,1,1,0,0,0,86.5,11.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({y:14.6},13).wait(96).to({alpha:0},8).wait(166));

	// Layer 13
	this.instance_14 = new lib.Symbol5();
	this.instance_14.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({alpha:1},13).wait(221).to({alpha:0},8).wait(55));

	// Layer 12
	this.instance_15 = new lib.Symbol1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},13).wait(297));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;