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
		{src:"_200_arthur.jpg", id:"_200_arthur"},
		{src:"_200_bg.jpg", id:"_200_bg"},
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



(lib._200_arthur = function() {
	this.initialize(img._200_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib._200_bg = function() {
	this.initialize(img._200_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


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
	this.shape.graphics.f("#034262").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape.setTransform(110.3,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgqCQQgRgMgJgTQgKgTgBgXIAygHQACAXAIAMQAIALALAAQANAAAJgHQAIgHAAgOQAAgRgLgOQgLgOgNgNIgggZQgPgOgLgTQgLgTABgaQAAgkAUgTQAWgUAkAAQAVAAAPAJQAQAKAJAQQAJARACAVIgyAGQgBgTgJgIQgIgHgJAAQgKAAgIAIQgGAIAAAOQAAAPALANQALAOANAMQAQANAPANQAQAPAKATQAMASAAAZQAAAZgLARQgKARgSAJQgTAJgXAAQgYAAgRgLg");
	this.shape_1.setTransform(96.2,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgqCQQgRgMgKgTQgIgTgCgXIAygHQACAXAIAMQAIALALAAQAOAAAIgHQAIgHAAgOQAAgRgLgOQgLgOgNgNIgfgZQgQgOgLgTQgLgTABgaQAAgkAUgTQAWgUAkAAQAVAAAQAJQAPAKAJAQQAJARADAVIgzAGQgBgTgJgIQgIgHgJAAQgKAAgIAIQgGAIAAAOQAAAPALANQALAOANAMQAQANAQANQAPAPALATQALASAAAZQAAAZgKARQgLARgSAJQgTAJgWAAQgZAAgRgLg");
	this.shape_2.setTransform(77.5,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_3.setTransform(59.4,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_4.setTransform(42.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAfCXIgjh9IgNABIgOAAIAAB8Ig0AAIAAktIBJAAQAqAAAWAUQAXAVAAAwQgBAZgFAPQgFAQgJAGQgIAJgJAEIAsCJgAgfgOIATAAQATABAJgLQAIgKABgbQgBgagIgKQgJgLgTABIgTAAg");
	this.shape_5.setTransform(14,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgrCRQgSgLgIgRQgKgSABgVIAAiaQgBgWAKgSQAIgRASgKQARgLAaAAQAbAAASALQARAKAJARQAIASABAWIAACaQgBAVgIASQgJARgRALQgSAKgbAAQgaAAgRgKgAgUhlQgHAJABARIAACXQgBARAHAJQAGAIAOAAQAPAAAGgIQAGgJAAgRIAAiXQAAgRgGgJQgGgIgPAAQgOAAgGAIg");
	this.shape_6.setTransform(-7.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25,137.1,54.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape.setTransform(98.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_1.setTransform(85,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAbBsIgHgwIgmAAIgHAwIgkAAIAnjXIAtAAIAoDXgAAPAbIgPhbIAAAAIgOBbIAdAAg");
	this.shape_2.setTransform(70.6,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_3.setTransform(57.6,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgRBsIAAhaIgth9IAmAAIAYBTIAAAAIAZhTIAmAAIgtB9IAABag");
	this.shape_4.setTransform(44,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgeBnQgNgHgGgNQgHgMABgQIAAhtQgBgQAHgMQAGgNANgHQAMgIASAAQATAAANAIQAMAHAHANQAFAMABAQIAABtQgBAQgFAMQgHANgMAHQgNAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAEAGAKAAQALAAAEgGQAFgGgBgMIAAhrQABgNgFgGQgEgFgLAAQgKAAgEAFg");
	this.shape_5.setTransform(23.2,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape_6.setTransform(5.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_7.setTransform(-10.2,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-17,125.7,40);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(53.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHAAgIIAAg5QAAgJADgGQADgHAHgEQAHgEAIAAQAKAAAHAFQAGAEAEAHQACAHAAAJIAAAIIgUAAIAAgJQAAgHgCgDQgDgEgEAAQgEAAgDAEQgBADAAAGIAAA5QAAAGABADQADAEAEAAQAGAAACgDQABgDAAgGIAAgOIAUAAIAAANQAAAIgCAHQgEAHgGAEQgHAEgKAAQgIAAgHgEg");
	this.shape_1.setTransform(47.6,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHABgIIAAg5QgBgJAEgGQADgHAHgEQAGgEAJAAQAKAAAHAFQAGAEADAHQADAHAAAJIAAAIIgUAAIAAgJQAAgHgCgDQgDgEgEAAQgEAAgDAEQgBADAAAGIAAA5QAAAGABADQADAEAEAAQAGAAACgDQABgDAAgGIAAgOIAUAAIAAANQAAAIgDAHQgDAHgGAEQgHAEgKAAQgJAAgGgEg");
	this.shape_2.setTransform(39.6,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgIA5IAAhgIgUAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_3.setTransform(32.6,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgUAAIAABgg");
	this.shape_4.setTransform(22.8,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_5.setTransform(16.2,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAXA5IAAhYIgBAAIgSBYIgHAAIgShYIAABYIgSAAIAAhxIAaAAIANBBIAAAAIAOhBIAaAAIAABxg");
	this.shape_6.setTransform(4.1,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_7.setTransform(-4.3,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_8.setTransform(-11.7,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QAAgJADgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQADAHAAAJIAAAHIgTAAIAAgNQgCgFgDgCQgCgCgCAAQgEAAgCADQgDADABAHIAAA5QAAAGABADQADADAEABQAFAAACgEQACgEAAgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_9.setTransform(-19.9,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgHAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_10.setTransform(-27.8,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_11.setTransform(-35.7,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_12.setTransform(-43.7,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgJA5IAAgwIgXhBIAUAAIAMAsIAAAAIANgsIAUAAIgXBBIAAAwg");
	this.shape_13.setTransform(-54.9,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QgBgJAEgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQAEAHgBAJIAAAHIgTAAIgBgNQgBgFgCgCQgDgCgCAAQgDAAgDADQgDADABAHIAAA5QAAAGABADQACADAFABQAFAAACgEQADgEgBgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_14.setTransform(-62.5,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgFAAgCAEg");
	this.shape_15.setTransform(-70.5,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_16.setTransform(-77.3,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgQA3QgHgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAHgEQAHgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_17.setTransform(-84.7,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAMA5IgWhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape_18.setTransform(-92.7,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_19.setTransform(-100.7,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHAAgIIAAg5QAAgJAEgGQADgHAHgEQAGgEAJAAQAKAAAHAFQAGAEAEAHQACAHAAAJIAAAIIgTAAIAAgJQAAgHgEgDQgCgEgEAAQgEAAgCAEQgCADAAAGIAAA5QAAAGACADQACAEAEAAQAFAAADgDQACgDAAgGIAAgOIATAAIAAANQAAAIgCAHQgEAHgGAEQgHAEgKAAQgJAAgGgEg");
	this.shape_20.setTransform(-108.7,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_21.setTransform(-116.1,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_22.setTransform(-122.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-2,185.4,23.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQAAAJADAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAJAAAFAEQAGADAEAHQAEAGAAAIIgTACQgBgHgDgDQgCgDgEAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape.setTransform(-3.4,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAGgEAJAAQAKAAAGAFQAHAEADAHQAEAHAAAJIAAAIIgVAAIAAgJQAAgHgDgDQgCgEgEAAQgEAAgDAEQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAACgDQACgDAAgGIAAgOIAVAAIAAANQAAAIgEAHQgDAHgHAEQgGAEgKAAQgJAAgGgEg");
	this.shape_1.setTransform(-10.9,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_2.setTransform(-17.1,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAMA5IgXhGIAAAAIAABGIgSAAIAAhxIASAAIAXBAIAAAAIAAhAIASAAIAABxg");
	this.shape_3.setTransform(-23.3,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgFAAgCAEg");
	this.shape_4.setTransform(-31.3,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_5.setTransform(-39.2,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_6.setTransform(-46.4,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAHgEAIAAQAKAAAGAFQAHAEADAHQAEAHAAAJIAAAIIgUAAIAAgJQgBgHgDgDQgCgEgEAAQgEAAgCAEQgDADAAAGIAAA5QAAAGADADQACAEAEAAQAFAAACgDQACgDABgGIAAgOIAUAAIAAANQAAAIgEAHQgDAHgHAEQgGAEgKAAQgIAAgHgEg");
	this.shape_7.setTransform(-53.6,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_8.setTransform(-60.9,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_9.setTransform(-67.4,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_10.setTransform(-74.2,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_11.setTransform(-84.9,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_12.setTransform(-92.6,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA4AAIAAARIgTAAIAABgg");
	this.shape_13.setTransform(-99.7,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgHAvIAPAAg");
	this.shape_14.setTransform(-109.9,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_15.setTransform(-115.7,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgJA5IgXhxIATAAIANBOIAOhOIATAAIgXBxg");
	this.shape_16.setTransform(-121.4,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-4,129.4,23.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AAVAvIAAhBQgBgRgPAAQgFAAgHAEQgIAFgFAFIAABEIgMAAIAAhbIAMAAIAAAMIABAAQANgOAMAAQAMAAAIAHQAHAGAAAOIAABCg");
	this.shape.setTransform(62.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgFBBIAAhbIALAAIAABbgAgFgxIAAgPIALAAIAAAPg");
	this.shape_1.setTransform(55,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgoArQAAgHAEgEQAEgEAIgFQgFgBgDgEQgEgDAAgFQAAgEACgDIAEgDIAHgEQgNgKAAgQQAAgPAKgJQAKgJAQAAQAMAAAJAHQAKgHAKgBIAAANQgKAAgEACQAGAIAAALQAAAOgKAJQgKAIgNAAQgHAAgJgBQgHABAAAGQAAADACACQACACAEAAQAeAAANAGQANAGAAAOQAAALgLAHQgLAHgTAAQgoAAAAgWgAgWAfQgGAFAAAGQAAAGAGADQAHADAQAAQAMAAAIgDQAIgEAAgGQAAgHgIgEQgIgDgOAAQgOAAgHAEgAgRgtQgGAGAAAJQAAAJAGAHQAHAGAKAAQAJAAAGgGQAGgGAAgJQAAgLgGgGQgGgFgKAAQgLAAgFAGg");
	this.shape_2.setTransform(42.5,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAUAvIAAhBQAAgRgPAAQgFAAgHAEQgHAFgGAFIAABEIgMAAIAAhbIAMAAIAAAMIABAAQAMgOANAAQAMAAAIAHQAIAGgBAOIAABCg");
	this.shape_3.setTransform(33,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgFBBIAAhbIALAAIAABbgAgFgxIAAgPIALAAIAAAPg");
	this.shape_4.setTransform(25.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAUAvIAAhBQAAgRgOAAQgGAAgHAEQgIAFgEAFIAABEIgOAAIAAhbIAOAAIAAAMIAAAAQANgOANAAQALAAAIAHQAIAGAAAOIAABCg");
	this.shape_5.setTransform(18,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgFBBIAAhbIALAAIAABbgAgFgxIAAgPIALAAIAAAPg");
	this.shape_6.setTransform(10.5,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgbApQgIgGAAgNQAAgPANgHQANgIAegGIAAgFQAAgRgUAAQgHAAgGAEQgGAFgDAGIgLgGQALgUAWAAQAOAAAJAHQAJAHAAAOIAAAtQAAAMADAIIgOAAIgBgNQgNAPgQAAQgLAAgIgHgAgWAWQAAAHAFAEQAFAEAGAAQAGAAAHgFQAIgEAGgHIAAgXQgrAFAAATg");
	this.shape_7.setTransform(3.4,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgVAvIAAhbIAOAAIAAASIAAAAQAGgLAEgEQAIgFAKAAIAAANQgMAAgGAIQgGAHgEAPIAAAyg");
	this.shape_8.setTransform(-3.5,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgFBBIAAh1IgnAAIAAgMIBaAAIAAAMIgoAAIAAB1g");
	this.shape_9.setTransform(-12,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-12,88.7,25.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIAUAAIASBjgAAGAMIgGgpIgFApIALAAg");
	this.shape.setTransform(10.8,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgNAvQgGgEgDgFQgDgHAAgIIAQgCQABAHADAEQACAFADAAQAEgBADgCQADgCAAgFQgBgGgDgEIgHgJIgKgIQgFgEgEgHQgEgGAAgIQAAgMAHgHQAHgGALgBQAHAAAFADQAGAEADAFQADAGAAAHIgQACQgBgGgDgDQgCgCgDAAQgDAAgCACQgCADAAAFQAAAEAEAFIAGAJIALAHQAFAFADAGQAEAGAAAJQAAAIgDAFQgEAHgGACQgGADgHABQgHgBgGgEg");
	this.shape_1.setTransform(4.5,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIAUAAIASBjgAAGAMIgGgpIgFApIALAAg");
	this.shape_2.setTransform(-1.6,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA4IABAAIAAg4IAPAAIAABjg");
	this.shape_3.setTransform(-8.2,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOAwQgGgEgCgGQgDgFAAgHIAAgyQAAgIADgGQACgGAGgDQAGgDAIgBQAIABAHADQAFADADAGQADAGAAAIIAAAyQAAAHgDAFQgDAGgFAEQgHAEgIAAQgIAAgGgEgAgGghQgCADAAAGIAAAxQAAAGACADQACADAEAAQAEAAADgDQACgDgBgGIAAgxQABgGgCgDQgDgCgEAAQgEAAgCACg");
	this.shape_4.setTransform(-18.3,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_5.setTransform(-24.6,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgHAyIAAgqIgVg5IARAAIALAmIAAAAIALgmIASAAIgVA5IAAAqg");
	this.shape_6.setTransform(-33.5,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgHAyIgVhjIARAAIALBEIAMhEIARAAIgVBjg");
	this.shape_7.setTransform(-39.7,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIATAAIATBjgAAHAMIgHgpIgGApIANAAg");
	this.shape_8.setTransform(-45.9,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA4IABAAIAAg4IAPAAIAABjg");
	this.shape_9.setTransform(-52.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-12,74.1,20.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape.setTransform(22.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAIAyIAAgtIgQAAIAAAtIgRAAIAAhjIARAAIAAApIAQAAIAAgpIASAAIAABjg");
	this.shape_1.setTransform(15.9,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_2.setTransform(9.6,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAUAyIAAhNIgBAAIgPBNIgHAAIgPhNIgBAAIAABNIgPAAIAAhjIAXAAIALA5IAAAAIAMg5IAXAAIAABjg");
	this.shape_3.setTransform(-0.4,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOAwQgFgEgDgGQgDgFAAgHIAAgyQAAgIADgGQADgFAFgEQAHgDAHAAQAJAAAGADQAGAEACAFQADAGAAAIIAAAyQAAAHgDAFQgCAGgGAEQgGADgJAAQgHAAgHgDgAgGggQgCACABAGIAAAxQgBAFACADQADAEADAAQAFAAACgEQACgDAAgFIAAgxQAAgGgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_4.setTransform(-8.2,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAKAyIgKgqIgFABIgEAAIAAApIgRAAIAAhjIAXAAQANAAAIAHQAHAGAAAQQAAAJgCAFQgCAFgCABQgDADgDABIAPAugAgJgEIAGAAQAFAAADgDQADgDAAgKQAAgIgDgEQgDgDgFAAIgGAAg");
	this.shape_5.setTransform(-15,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXAyIAAhjIAvAAIAAAPIgdAAIAAAaIAVAAIAAANIgVAAIAAAtg");
	this.shape_6.setTransform(-21.6,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgRAAIAABUg");
	this.shape_7.setTransform(-30.7,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA3IABAAIAAg3IAPAAIAABjg");
	this.shape_8.setTransform(-36.9,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_9.setTransform(-43.4,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA+IAMg+IAMAAIAMA+IAAAAIAKg+IAQAAIgSBjg");
	this.shape_10.setTransform(-51.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-4,85.8,20.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape.setTransform(82.2,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AguBrQgQgQgBggIAAi2IAqAAIAAC3QAAAOAGAGQAFAHAKAAQALAAAFgHQAGgGAAgOIAAi3IAqAAIAAC2QAAAggRAQQgRARgeAAQgdAAgRgRg");
	this.shape_1.setTransform(64.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAWB6IAAhsIgrAAIAABsIgqAAIAAjzIAqAAIAABkIArAAIAAhkIAqAAIAADzg");
	this.shape_2.setTransform(47.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgTB6IAAjPIgqAAIAAgkIB6AAIAAAkIgoAAIAADPg");
	this.shape_3.setTransform(32.7,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_4.setTransform(18,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAeB6IgHg2IgsAAIgIA2IgpAAIAtjzIAzAAIAtDzgAAQAfIgQhnIAAAAIgQBnIAgAAg");
	this.shape_5.setTransform(1.6,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,1,100.6,44.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_arthur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape.setTransform(129.5,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgbApQgIgGAAgNQAAgPANgHQANgIAegGIAAgFQAAgRgUAAQgHAAgGAEQgGAFgDAGIgLgGQALgUAWAAQAOAAAJAHQAJAHAAAOIAAAtQAAAMADAIIgOAAIgBgNQgNAPgQAAQgLAAgIgHgAgWAWQAAAHAFAEQAFAEAGAAQAGAAAHgFQAIgEAGgHIAAgXQgrAFAAATg");
	this.shape_1.setTransform(122.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgZAjQgLgNAAgWQAAgVALgNQAKgNAQAAQANAAAIAGQAIAHAFAMIgMAFQgGgTgQAAQgKAAgHAKQgHAKAAAQQAAARAHAKQAHAKAKAAQAJAAAFgEQAGgEAGgJIAKAEQgIANgHAFQgIAGgNAAQgQAAgKgNg");
	this.shape_2.setTransform(113.4,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgFBBIAAhbIALAAIAABbgAgFgxIAAgPIALAAIAAAPg");
	this.shape_3.setTransform(106.5,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAUAvIAAhBQAAgRgOAAQgGAAgHAEQgIAFgEAFIAABEIgOAAIAAhbIAOAAIAAAMIAAAAQANgOANAAQALAAAIAHQAIAGAAAOIAABCg");
	this.shape_4.setTransform(99,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAUBAIAAhBQABgQgPAAQgGAAgHADQgHAFgFAFIAABEIgOAAIAAh/IAOAAIAAAwIAAAAQANgOANAAQALAAAIAHQAIAHAAAOIAABBg");
	this.shape_5.setTransform(89,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgZAjQgLgNAAgWQAAgVALgNQAKgNAQAAQANAAAIAGQAIAHAFAMIgMAFQgGgTgQAAQgKAAgHAKQgHAKAAAQQAAARAHAKQAHAKAKAAQAJAAAFgEQAGgEAGgJIAKAEQgIANgHAFQgIAGgNAAQgQAAgKgNg");
	this.shape_6.setTransform(79.4,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVALgNQAKgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgCAOIAuAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_7.setTransform(70.6,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgGBAIAAh0IgmAAIAAgLIBaAAIAAALIgnAAIAAB0g");
	this.shape_8.setTransform(61,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgoA4QgLgLAAgQQAAgWAcgPQgFgHgDgIQgCgJAAgIQAAgLAIgHQAHgHAOAAQAJAAAHAGQAIAGAAAMQAAAFgCAFQgDAFgEAFIgIAIIgIAHQAIAQATAVQAEgEADgJQAEgJABgJIAMACIgGAVQgEALgFAGQAEAFAHADQAHADADAAIAAANIgEAAQgFAAgHgEQgIgDgGgGQgNAPgVAAQgQAAgMgKgAggAMQgFAHAAALQAAALAHAHQAJAGAKAAQANAAALgLQgRgXgOgUQgJAGgFAGgAgPgyQgEAFAAAGQAAAJAHAOQAJgFADgHQAGgGAAgHQAAgGgEgEQgCgDgFAAQgHAAgDAEg");
	this.shape_9.setTransform(44.6,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgUAvIAAhcIAMAAIAAATIABAAQAFgLAGgEQAGgFAMAAIAAANQgNAAgGAHQgFAIgGAPIAAAyg");
	this.shape_10.setTransform(30.5,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVAKgNQALgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgBAOIAtAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_11.setTransform(22.6,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVAKgNQALgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgBAOIAtAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_12.setTransform(13.6,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgVAvIAAhcIAOAAIAAATIAAAAQAGgLAEgEQAIgFAKAAIAAANQgLAAgIAHQgFAIgEAPIAAAyg");
	this.shape_13.setTransform(6.5,7.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgbApQgIgGAAgNQAAgPANgHQANgIAegGIAAgFQAAgRgUAAQgHAAgGAEQgGAFgDAGIgLgGQALgUAWAAQAOAAAJAHQAJAHAAAOIAAAtQAAAMADAIIgOAAIgBgNQgNAPgQAAQgLAAgIgHgAgWAWQAAAHAFAEQAFAEAGAAQAGAAAHgFQAIgEAGgHIAAgXQgrAFAAATg");
	this.shape_14.setTransform(-1.6,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AghAxQgNgRAAggQAAgeANgSQANgRAVAAQAjAAAJAlIgNAEQgEgPgHgHQgHgHgOAAQgNAAgJAOQgKANAAAaQAAAbAKANQAKAOAPAAQANAAAIgJQAHgIADgOIANACQgKApgkAAQgUAAgOgRg");
	this.shape_15.setTransform(-11.5,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-7,153.2,25.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


// stage content:
(lib._200x200 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.667,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(152,163,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,218.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(277).to({_off:false},0).to({y:194.5},11).wait(15));

	// Layer 15
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(260).to({_off:false},0).to({x:108.3,alpha:1},11).wait(32));

	// Layer 11
	this.instance_4 = new lib.Symbol12();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(254).to({_off:false},0).to({x:103,alpha:1},11).wait(38));

	// Layer 10
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(249).to({_off:false},0).to({x:77.7,alpha:1},11).wait(43));

	// Layer 7
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(397.1,27,1,1,0,0,0,93.2,15);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(243).to({_off:false},0).to({x:117.1,alpha:1},11).wait(49));

	// Layer 5
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(354.3,35.3,1,1,0,0,0,39.4,11.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({x:174.3},13).wait(81).to({alpha:0},10).wait(60));

	// Layer 4
	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(365,20.6,1,1,0,0,0,50.1,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).to({x:185},13).wait(88).to({alpha:0},10).wait(60));

	// Layer 3
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(367.1,45.4,1,1,0,0,0,52.1,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({x:217.1},13).wait(65).to({alpha:0},10).wait(171));

	// Layer 2
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(375.5,23,1,1,0,0,0,60.5,14);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({x:225.5},13).wait(74).to({alpha:0},10).wait(171));

	// Layer 14
	this.instance_11 = new lib.Symbol6();
	this.instance_11.setTransform(87.3,-26.8,1,1,0,0,0,75.8,33.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).to({y:33.2},13).wait(81).to({alpha:0},10).wait(171));

	// Layer 13
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(150,143,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(207).to({alpha:0},10).wait(60));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;