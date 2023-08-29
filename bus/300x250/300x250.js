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
		{src:"_250_banner.png", id:"_250_banner"},
		{src:"_250_bg.jpg", id:"_250_bg"},
		{src:"_250_logo.png", id:"_250_logo"},
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



(lib._250_banner = function() {
	this.initialize(img._250_banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,55);


(lib._250_bg = function() {
	this.initialize(img._250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,84);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(120.3,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgVBxIAAi/IglAAIAAgiIB0AAIAAAiIgjAAIAAC/g");
	this.shape_1.setTransform(110.9,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AAdBxIgxh7IAAB7IgnAAIAAjhIAgAAIAxB0IAAh0IAmAAIAADhg");
	this.shape_2.setTransform(97.1,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBgAAIAAAgIgyAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_3.setTransform(83.7,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("Ag/BxIAAjhIA3AAQATAAAOAEQAPAEAJAJQAIAJADANQAEANAAATIAABQQAAAUgEANQgDAOgIAJQgJAJgOAFQgOAEgTAAgAgRBRIAJAAIAIgBIAFgCIAFgDIAEgEIABgFIABgHIABgHIAAgJIAAhZIgBgNIgCgJQgBgEgCgDIgIgDIgLgBIgJAAg");
	this.shape_4.setTransform(69.3,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgWBxIAAjhIAsAAIAADhg");
	this.shape_5.setTransform(57.1,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgrBiQgPgRgCgkIAogHQAAAVAGALQAFALAJAAQAJAAADgGQAEgFAAgIQAAgNgGgJQgGgKgLgLIgYgTQgJgIgGgHQgGgHgEgLQgDgLAAgNQAAgbAQgPQAQgQAbAAQAJAAAIACQAIACAGADQAFAEAFAFQAEAEADAGIAEAMIADAMIABANIgnAGIgBgLIgBgKIgEgIIgFgEQgDgCgDAAQgHABgEAFQgFAGAAAHQAAAHACAFQABAFAEAEIAGAHIAFAIIAYAUIAOAMIAKAOQAFAJADAJQADAKAAALQAAAZgQAQQgRAQgaAAQgdAAgQgSg");
	this.shape_6.setTransform(46.2,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBgAAIAAAgIgyAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_7.setTransform(33.3,36.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AAUBxIgYhnIgQAAIAABnIguAAIAAjhIA5AAQAQAAANADQANADAKAGQAKAHAGAMQAEAMAAARQAAAWgGAOQgGANgPAFIAfBvgAgUgPIAMAAQAOAAAHgIQAHgIAAgRQAAgRgGgIQgGgIgOAAIgOAAg");
	this.shape_8.setTransform(18.9,36.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("Ag/BxIAAjhIBEAAQA7AAAABBQAAASgEAMQgFANgJAFQgIAHgLADQgLADgPAAIgSAAIAABjgAgRgQIAOAAQAOAAAFgHQAFgHAAgRIgBgOQAAgGgDgEQgCgFgGgCQgFgCgHAAIgOAAg");
	this.shape_9.setTransform(3.4,36.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBhAAIAAAgIgzAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_10.setTransform(-17.4,36.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgdBuQgNgFgIgKQgHgLgDgNQgDgOAAgRIAAhOQAAgTADgNQADgOAHgKQAIgKANgGQANgFARAAQASAAAMAFQAMAEAIAJQAHAJAEAMQACALAAAQIAAATIgtAAIAAgVIAAgFIAAgFIAAgFIgBgEIgBgEIgDgDIgDgDIgEgBIgGgBQgDAAgEACQgEACgCADQgCACgBAFIgBAJIAAAKIAABjQAAARADAIQAFAIAJAAQAFAAADgCQADgBACgCIADgFIACgHIAAgHIAAgJIAAgWIAtAAIAAATQAAAQgCAMQgEAMgGAJQgIAKgNAFQgMAFgSAAQgQAAgOgGg");
	this.shape_11.setTransform(-31.7,36.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgWBxIAAjhIAsAAIAADhg");
	this.shape_12.setTransform(-43.6,36.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgWBxIgrjhIAoAAIAZCZIAZiZIApAAIgrDhg");
	this.shape_13.setTransform(-54.9,36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgVBxIAAi/IgkAAIAAgiIB0AAIAAAiIgkAAIAAC/g");
	this.shape_14.setTransform(-75.4,36.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAZBxIgbhIIgaBIIgnAAIAsh4IgrhpIAsAAIAYBBIAXhBIAnAAIgpByIAtBvg");
	this.shape_15.setTransform(-88.6,36.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBhAAIAAAgIgzAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_16.setTransform(-101.3,36.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AAdBxIgxh7IAAB7IgnAAIAAjhIAgAAIAwB0IAAh0IAnAAIAADhg");
	this.shape_17.setTransform(-115.6,36.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE6DF").s().p("AAQBZIgThRIgMAAIAABRIglAAIAAiwIAtAAQANAAAKABQAKADAIAFQAIAGAEAIQAEAKAAANQAAASgFAKQgFALgMAEIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_18.setTransform(134.3,-3.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAE6DF").s().p("AgYBWQgKgEgGgIQgGgIgCgLQgCgKAAgPIAAh3IAjAAIAAB7IABAJIABAIIACAGQACADADABQADACADAAQADAAAEgCIAEgEIADgGIABgIIABgJIAAh7IAjAAIAAB3QAAAPgDAKQgCALgGAIQgGAIgJAEQgKAEgPAAQgNAAgLgEg");
	this.shape_19.setTransform(121.3,-3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_20.setTransform(108.6,-3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE6DF").s().p("AAQBZIgThRIgMAAIAABRIglAAIAAiwIAtAAQANAAAKABQAKADAIAFQAIAGAEAIQAEAKAAANQAAASgFAKQgFALgMAEIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_21.setTransform(90.6,-3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_22.setTransform(77.7,-3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAE6DF").s().p("AgkBZIAAiwIBJAAIAAAYIglAAIAAAwIAfAAIAAAYIgfAAIAABQg");
	this.shape_23.setTransform(67.1,-3.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAE6DF").s().p("AghBNQgMgNgCgcIAggHQAAASAEAIQAFAJAHAAQAFgBAEgEQACgEAAgHQABgKgFgHQgFgHgIgJIgTgPIgLgMQgFgFgDgIQgEgJAAgKQAAgWAOgMQAMgMAVAAQAHAAAGACIALADIAIAHIAFAIIAEAKIADAKIABAJIggAGIgBgJIgBgIIgCgHIgEgDQgDgBgCAAQgFAAgDAEQgEAFAAAGQAAAFABADQACAEACAEIAFAGIAEAFIASARIALAIIAIAMQAFAGACAIQABAIAAAJQAAATgMAMQgNANgUAAQgXAAgMgOg");
	this.shape_24.setTransform(51.1,-3.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_25.setTransform(39.3,-3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_26.setTransform(26.9,-3.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAE6DF").s().p("AgQBZIAAiwIAiAAIAACwg");
	this.shape_27.setTransform(17.5,-3.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAE6DF").s().p("AgQBZIAAiWIgdAAIAAgaIBbAAIAAAaIgcAAIAACWg");
	this.shape_28.setTransform(9.5,-3.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAE6DF").s().p("AghBNQgNgNgBgcIAggHQAAASAEAIQAFAJAHAAQAGgBADgEQACgEAAgHQAAgKgEgHQgEgHgJgJIgTgPIgLgMQgFgFgDgIQgEgJAAgKQAAgWAOgMQANgMAUAAQAHAAAGACIALADIAIAHIAGAIIADAKIADAKIABAJIggAGIgBgJIgBgIIgCgHIgEgDQgDgBgCAAQgFAAgDAEQgEAFAAAGQAAAFABADQABAEADAEIAFAGIAEAFIATARIAKAIIAIAMQAEAGADAIQABAIAAAJQAAATgMAMQgMANgVAAQgXAAgMgOg");
	this.shape_29.setTransform(-0.7,-3.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAE6DF").s().p("AglBZIAAiwIBLAAIAAAZIgnAAIAAAvIAeAAIAAAXIgeAAIAAA4IAnAAIAAAZg");
	this.shape_30.setTransform(-10.9,-3.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgGgIQgFgIgDgLQgCgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQADAAADgCIAGgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgDAKQgCALgGAIQgFAIgLAEQgJAEgPAAQgOAAgJgEg");
	this.shape_31.setTransform(-22.4,-3.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAE6DF").s().p("AAUBeQgKgKgHgKIgDAAQgNAAgKgDQgLgEgGgIQgGgIgCgKQgDgLAAgOIAAhAQAAgOADgLQACgLAGgHQAGgHALgFQAKgEANAAQAcABAMAPQAMAOAAAdIAABAQAAApgYAMQALAMAHADIgHAYQgJgEgKgKgAgGhPQgDABgBACIgDAFIgBAHIAAAHIAABSIAAAHIABAGIADAGIAEADQADABADAAQADAAADgBIAFgDIADgGIABgGIAAgHIAAhSIAAgHIgBgHIgDgFQgCgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_32.setTransform(-35.1,-2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAE6DF").s().p("AARBZIgRhvIgPBvIgfAAIgYiwIAfAAIAMBqIAQhqIAXAAIAQBqIANhqIAeAAIgXCwg");
	this.shape_33.setTransform(-54.8,-3.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAE6DF").s().p("AgmBZIAAiwIBNAAIAAAZIgoAAIAAAvIAeAAIAAAXIgeAAIAAA4IAoAAIAAAZg");
	this.shape_34.setTransform(-67,-3.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAE6DF").s().p("AgkBZIAAiwIBJAAIAAAYIglAAIAAAwIAfAAIAAAYIgfAAIAABQg");
	this.shape_35.setTransform(-76.4,-3.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE6DF").s().p("AAVBZIgHgoIgaAAIgHAoIgiAAIAiiwIAmAAIAjCwgAgJAbIATAAIgKhFg");
	this.shape_36.setTransform(-92.9,-3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EAE6DF").s().p("AghBNQgMgNgBgcIAfgHQAAASAFAIQADAJAHAAQAHgBACgEQADgEAAgHQABgKgFgHQgEgHgJgJIgTgPIgLgMQgFgFgDgIQgEgJABgKQAAgWAMgMQANgMAVAAQAHAAAHACIAKADIAIAHIAFAIIAEAKIADAKIAAAJIgfAGIgBgJIgBgIIgCgHIgEgDQgCgBgDAAQgFAAgDAEQgEAFAAAGQAAAFACADQAAAEADAEIAFAGIAEAFIASARIALAIIAIAMQAFAGABAIQACAIAAAJQAAATgMAMQgMANgVAAQgXAAgMgOg");
	this.shape_37.setTransform(-109.8,-3.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EAE6DF").s().p("AAUBZIgGgoIgaAAIgHAoIgiAAIAjiwIAlAAIAjCwgAgJAbIATAAIgKhFg");
	this.shape_38.setTransform(-121.4,-3.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EAE6DF").s().p("AAPBZIAAhPIgdAAIAABPIgkAAIAAiwIAkAAIAABJIAdAAIAAhJIAkAAIAACwg");
	this.shape_39.setTransform(-133.9,-3.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EAE6DF").s().p("AgPBZIAAhHIgjhpIAhAAIASA/IASg/IAgAAIgiBpIAABHg");
	this.shape_40.setTransform(99,-39.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAE6DF").s().p("AgRBZIAAiWIgcAAIAAgaIBbAAIAAAaIgcAAIAACWg");
	this.shape_41.setTransform(88.8,-39.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EAE6DF").s().p("AgQBZIAAiwIAiAAIAACwg");
	this.shape_42.setTransform(80.8,-39.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAE6DF").s().p("AghBNQgNgNAAgcIAfgHQAAARAFAJQAEAJAGAAQAHgBACgEQAEgEAAgHQAAgKgFgHQgFgHgIgJIgTgPIgMgMQgEgFgDgIQgDgJAAgKQgBgWANgMQAOgMAUAAQAHAAAHACIAKADIAIAHIAFAIIAEAKIACAJIABAKIgfAGIAAgJIgBgIIgDgHIgEgDQgDgCgCABQgFAAgEAEQgDAFAAAGQAAAFACADQABAFACADIAFAGIAEAFIATARIAKAIIAJAMQADAHACAHQACAIABAIQAAAUgNANQgMAMgVAAQgXAAgMgOg");
	this.shape_43.setTransform(72.2,-39.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EAE6DF").s().p("AAQBZIgThRIgMAAIAABRIglAAIAAiwIAtAAQANAAAKABQAKADAIAFQAIAGAEAJQAEAJAAANQAAASgFAKQgFALgMADIAZBYgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_44.setTransform(60.4,-39.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAE6DF").s().p("AgmBZIAAiwIBMAAIAAAZIgnAAIAAAvIAeAAIAAAXIgeAAIAAA4IAnAAIAAAZg");
	this.shape_45.setTransform(49.3,-39.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAE6DF").s().p("AgRBZIgiiwIAfAAIAUB3IATh3IAhAAIgiCwg");
	this.shape_46.setTransform(38.4,-39.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EAE6DF").s().p("AgQBZIAAiwIAiAAIAACwg");
	this.shape_47.setTransform(29.5,-39.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_48.setTransform(20.2,-39.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgGgIQgFgIgDgLQgCgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQADAAADgCIAGgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgDAKQgCALgGAIQgFAIgLAEQgJAEgPAAQgNAAgKgEg");
	this.shape_49.setTransform(7.8,-39.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EAE6DF").s().p("AgyBZIAAiwIAsAAQAPAAALACQALADAHAHQAGAIADAKQAEAKAAAPIAAA+QAAAQgEAKQgDALgGAHQgHAIgLADQgKAEgPAAgAgNBAIAHAAIAGgBIAFgBIADgDIACgDIACgEIABgGIABgGIAAgGIAAhFIgBgLIgCgHQgBgEgCgCIgGgCIgIgBIgHAAg");
	this.shape_50.setTransform(-10.2,-39.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgLAAgOIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDAAgBADIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgDgDAAQgDgCgDAAQgDAAgDACg");
	this.shape_51.setTransform(-23,-39.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgLAAgOIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDAAgBADIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgDgDAAQgDgCgDAAQgDAAgDACg");
	this.shape_52.setTransform(-35.6,-39.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EAE6DF").s().p("AARBZIgRhvIgPBvIgfAAIgYiwIAfAAIAMBqIAQhqIAXAAIAQBqIANhqIAeAAIgXCwg");
	this.shape_53.setTransform(-49.7,-39.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EAE6DF").s().p("AgZBWQgKgEgFgIQgFgIgDgLQgDgLAAgPIAAg4QAAgNACgJQACgJADgIQAEgIAGgFQAGgFAJgDQAJgDAKAAQANAAALADQAKAEAGAHQAGAHACAJQACAKABAMIAAALIgjAAIAAgNIAAgIIgCgGIgCgGIgFgCQgCgCgFAAQgCAAgDACIgFADQgCACAAAFIgCAHIAAAIIAABLQAAANAEAHQAEAGAHAAQAKABAEgIQAEgHgBgNIAAgSIgRAAIAAgUIAzAAIAABaIgZAAIgCgRQgIATgTAAQgOAAgJgFg");
	this.shape_54.setTransform(-63.8,-39.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_55.setTransform(-76.1,-39.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgLAAgOIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDAAgBADIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgDgDAAQgDgCgDAAQgDAAgDACg");
	this.shape_56.setTransform(-88.5,-39.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EAE6DF").s().p("AgmBZIAAiwIAlAAIAACXIAoAAIAAAZg");
	this.shape_57.setTransform(-99.1,-39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-56.9,300,113.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_logo();
	this.instance.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,213,84);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_banner();
	this.instance.setTransform(0,55,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,55);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_banner();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,55);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDEEBD").s().p("AAAArIgpAWIAIgvIgiggIAvgHIAUgrIAVArIAvAHIgiAgIAIAvg");
	this.shape.setTransform(95,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEEBD").s().p("AAAArIgpAWIAIgvIgiggIAvgHIAUgrIAVArIAvAHIgiAgIAIAvg");
	this.shape_1.setTransform(205,64.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDEEBD").s().p("AgUBEQgJgDgIgIQgIgIgEgMQgEgMgBgVIAAgBQABgNADgOQAEgPAIgKQAHgKAMgGQALgGAOAAIANABIALADIAKAFIAKAGIgQAYIgHgFIgHgDIgHgCIgIgBQgFAAgEACQgGADgDAFQgDADgDAHIgCAMQAEgDAIgCQAGgEAJAAQAKAAAJAEQAJACAHAGQAGAGAEAGQAEAIgBALIAAAAQAAALgDAJQgEAJgHAGQgHAHgKADQgLAEgLAAQgMAAgJgEgAgQAKQgGAGAAAIQAAAKAGAFQAHAHAJAAQALAAAHgHQAGgFAAgJIAAgBQAAgIgHgGQgGgGgLAAQgKAAgGAGg");
	this.shape_2.setTransform(185.6,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDEEBD").s().p("AAABGIAAhsIgXAGIgGgZIAmgMIAVAAIAACLg");
	this.shape_3.setTransform(174.1,64.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDEEBD").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_4.setTransform(167.7,70.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDEEBD").s().p("AAMBGIAAgeIhCAAIgGgWIBMhXIAZAAIAABUIAUAAIAAAZIgUAAIAAAegAgXAPIAjAAIAAgqg");
	this.shape_5.setTransform(157.8,64.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDEEBD").s().p("AgYBCQgMgFgIgKQgIgKgEgMQgFgOAAgPIAAAAQAAgNAFgOQAFgNAHgKQAJgJALgHQALgFANAAQANAAAMAFQALAGAIAKQAJAKAEANQAEANAAAOIAAAAQAAAOgEAOQgEANgJAKQgHAKgMAFQgMAGgNAAQgMAAgMgGgAgLgoQgGAEgDAFQgFAHgCAIQgCAHAAAJIAAAAQAAAJACAJQACAHAFAGQAEAHAFACQAGAEAFAAQAHAAAFgDQAGgDAEgHQAEgFACgIQACgJAAgJIAAAAQAAgIgCgIQgCgIgEgHQgEgFgGgEQgGgDgGAAQgFAAgGADg");
	this.shape_6.setTransform(143.8,65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDEEBD").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_7.setTransform(133.6,70.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDEEBD").s().p("AgYBCQgMgFgIgKQgIgKgFgMQgDgOAAgPIAAAAQgBgNAFgOQAEgNAJgKQAHgJANgHQALgFAMAAQAOAAALAFQALAGAJAKQAHAKAFANQAFANAAAOIAAAAQAAAOgFAOQgFANgHAKQgJAKgMAFQgKAGgOAAQgMAAgMgGgAgLgoQgGAEgEAFQgEAHgCAIQgCAHAAAJIAAAAQAAAJACAJQACAHAEAGQAFAHAFACQAFAEAGAAQAGAAAGgDQAGgDAEgHQAEgFACgIQACgJAAgJIAAAAQAAgIgCgIQgDgIgEgHQgDgFgGgEQgGgDgGAAQgGAAgFADg");
	this.shape_8.setTransform(123.5,65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDEEBD").s().p("AAABGIAAhsIgXAGIgGgZIAmgMIAVAAIAACLg");
	this.shape_9.setTransform(111.3,64.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDEEBD").s().p("AgUBEQgJgDgIgIQgIgIgEgMQgFgMABgVIAAAAQgBgPAEgOQAEgNAHgLQAIgKALgGQAMgGAOAAIANABIALADIAKAFIAJAHIgPAXIgHgEIgHgEIgHgCIgIgBQgFAAgFACQgEADgEAEQgEAFgBAFIgEAOQAGgEAHgDQAGgCAIAAQALAAAJACQAJADAGAGQAHAFAEAHQADAIABALIAAABQAAALgFAIQgDAJgIAHQgGAGgLAEQgJADgMAAQgLAAgKgEgAgQAJQgGAHAAAJQAAAJAGAGQAHAFAJAAQAMAAAGgFQAGgGAAgJIAAAAQAAgKgGgFQgHgGgLAAQgJAAgHAFg");
	this.shape_10.setTransform(213.6,42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDEEBD").s().p("AAABGIAAhsIgXAGIgGgZIAmgMIAVAAIAACLg");
	this.shape_11.setTransform(202.1,42.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDEEBD").s().p("AgYBDQgLgGgJgKQgIgJgFgOQgDgNAAgPIAAAAQgBgOAFgNQAFgNAHgKQAJgKAMgFQAKgGANAAQANAAAMAGQAMAFAHAKQAJAKAEANQAFANgBAOIAAAAQABAOgFAOQgEANgJAKQgHAJgNAHQgLAFgNAAQgNAAgLgFgAgLgnQgGACgDAHQgEAGgDAHQgCAJAAAIIAAAAQAAAJACAIQADAIAEAHQADAFAGAEQAGADAFAAQAHAAAFgDQAGgEAEgFQAEgGACgJQACgHAAgKIAAAAQAAgIgCgIQgDgJgDgFQgEgGgGgDQgGgEgGAAQgFAAgGAEg");
	this.shape_12.setTransform(191.2,42.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDEEBD").s().p("AgyBHIAAgZIAugmIAJgIIAIgIIAEgIIABgIQAAgIgFgFQgFgFgIAAQgHAAgGAFQgGAEgIAKIgWgSIALgMQAFgFAGgEQAGgEAIgCQAHgCAIAAQAKAAAJADQAJAEAGAFQAHAGADAIQAEAIAAAKIAAAAQAAAJgDAHQgCAHgEAEQgFAGgHAGIgQAOIgVARIA7AAIAAAbg");
	this.shape_13.setTransform(177.6,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDEEBD").s().p("Ag0BGIAAiLIBoAAIAAAcIhJAAIAAAdIBAAAIAAAZIhAAAIAAAdIBKAAIAAAcg");
	this.shape_14.setTransform(159.1,42.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDEEBD").s().p("AgOBGIAAhuIgrAAIAAgdIByAAIAAAdIgrAAIAABug");
	this.shape_15.setTransform(145.6,42.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDEEBD").s().p("AApBGIgNgfIg5AAIgMAfIgfAAIA7iLIAaAAIA8CLgAgRAMIAjAAIgSgsg");
	this.shape_16.setTransform(131.2,42.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDEEBD").s().p("Ag6BGIAAiLIA/AAQAYAAANANQAJAJAAAOIAAABQAAAGgBAFQgCAFgCADIgGAGIgHAGQAMACAHAIQAHAHAAAPIAAAAQAAAJgEAIQgDAHgHAFQgHAFgKACQgKACgLABgAgcArIAjAAQAKgBAGgDQAFgEAAgIIAAAAQAAgHgFgEQgFgFgMAAIgiAAgAgcgMIAcAAQAJAAAGgEQAGgDAAgIIAAAAQAAgHgFgEQgGgEgKAAIgcAAg");
	this.shape_17.setTransform(116.5,42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDEEBD").s().p("Ag0BGIAAiLIBoAAIAAAcIhJAAIAAAdIBAAAIAAAZIhAAAIAAAdIBKAAIAAAcg");
	this.shape_18.setTransform(102.5,42.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDEEBD").s().p("Ag/BGIAAiLIA2AAQAPABANAFQAOAFAKAKQAKAJAGAMQAFANAAAOIAAAAQAAAOgFANQgGANgKAKQgKAIgOAGQgNAFgPABgAghAqIAYAAQAJAAAHgEQAIgDAFgFQAFgFADgIQAEgIAAgJIAAAAQAAgIgEgIQgDgHgFgGQgFgFgIgDQgHgDgJgBIgYAAg");
	this.shape_19.setTransform(88,42.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDEEBD").s().p("AgxBFIAAiJIAfAAIAABtIBEAAIAAAcg");
	this.shape_20.setTransform(271.6,20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDEEBD").s().p("AAqBGIgOggIg4AAIgOAgIgeAAIA7iLIAbAAIA7CLgAgRALIAiAAIgRgrg");
	this.shape_21.setTransform(257,20.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDEEBD").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_22.setTransform(245.7,20.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDEEBD").s().p("AgOBFIAAhtIgqAAIAAgcIByAAIAAAcIgrAAIAABtg");
	this.shape_23.setTransform(235.9,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDEEBD").s().p("AAjBFIhBhXIAABXIgfAAIAAiJIAcAAIBBBTIAAhTIAdAAIAACJg");
	this.shape_24.setTransform(221.5,20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDEEBD").s().p("Ag0BFIAAiJIBoAAIAAAbIhJAAIAAAdIBAAAIAAAZIhAAAIAAAdIBKAAIAAAbg");
	this.shape_25.setTransform(207.2,20.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDEEBD").s().p("Ag/BFIAAiJIA2AAQAPAAANAEQAOAGAKAJQAKAKAGAMQAFANAAAOIAAAAQAAAPgFAMQgGANgKAJQgKAKgOAFQgNAGgPgBgAghApIAYAAQAJAAAHgCQAHgDAGgGQAFgFADgIQAEgIAAgJIAAAAQAAgIgEgHQgDgJgFgFQgGgGgHgDQgHgCgJAAIgYAAg");
	this.shape_26.setTransform(192.7,20.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDEEBD").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_27.setTransform(181.2,20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDEEBD").s().p("AgaBCQgPgGgNgLIASgWQAKAIAKAFQAKAEAKAAQAKAAAFgEQAFgDAAgGIAAAAIgBgGQgBgCgDgCIgJgEIgMgEIgTgGQgJgDgGgEQgGgDgDgIQgDgGAAgLIAAgBQAAgJADgIQAEgHAGgGQAHgFAJgDQAJgDAKAAQAOgBANAFQANAEALAKIgQAWQgKgGgJgEQgJgDgHAAQgJAAgEADQgFAEAAAFIAAAAIABAGQACADADABQADADAGACIANAEIATAGQAJADAFAEQAGAFADAGQADAHAAAJIAAAAQAAAKgEAJQgEAHgHAGQgGAFgKADQgJADgMABQgOAAgPgGg");
	this.shape_28.setTransform(171.3,20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDEEBD").s().p("Ag0BFIAAiJIBoAAIAAAbIhJAAIAAAdIBAAAIAAAZIhAAAIAAAdIBKAAIAAAbg");
	this.shape_29.setTransform(158.7,20.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDEEBD").s().p("AAYBFIgcgtIAAAAIgZAAIAAAtIgeAAIAAiJIA+AAQAagBAOAOQAMAMABAVIAAAAQgBARgHAJQgJAKgOAGIAjAxgAgdgBIAeAAQALABAHgGQAFgFAAgKIAAAAQABgJgHgGQgGgEgMAAIgdAAg");
	this.shape_30.setTransform(145,20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDEEBD").s().p("Ag2BFIAAiJIA3AAQANgBAKAEQAKADAHAHQAGAGAEAJQAEAJAAALIAAAAQAAAMgFAIQgEAJgIAGQgHAGgLADQgKAEgKAAIgXAAIAAApgAgXAAIAXAAQALAAAGgEQAHgGAAgJIAAgBQAAgKgHgGQgHgEgKAAIgXAAg");
	this.shape_31.setTransform(131.1,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDEEBD").s().p("Ag0BFIAAiJIBoAAIAAAbIhJAAIAAAdIBAAAIAAAZIhAAAIAAAdIBKAAIAAAbg");
	this.shape_32.setTransform(111.5,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDEEBD").s().p("AgTBCQgOgGgKgJQgJgKgGgNQgFgNAAgPIAAAAQAAgOAFgNQAGgNAJgJQAKgLAOgFQANgGAOAAQAKAAAIACIAPAEQAGADAGAEIAKAJIgTAWQgJgHgIgFQgJgDgKAAQgIgBgHAEQgHAEgFAFQgGAHgCAHQgDAIgBAIIAAAAQABAIADAIQACAJAGAGQAFAFAHAEQAHADAIAAQAMABAIgFQAIgEAIgIIAUAUIgLAKQgGAFgGADQgIAEgHABQgJACgKAAQgNAAgNgGg");
	this.shape_33.setTransform(97.2,20.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDEEBD").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_34.setTransform(86.4,20.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDEEBD").s().p("AgMBGIg5iLIAjAAIAiBgIAkhgIAiAAIg5CLg");
	this.shape_35.setTransform(75.5,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDEEBD").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_36.setTransform(59.2,26.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDEEBD").s().p("AgaBCQgPgGgNgLIASgWQAKAIAKAFQAKAEAKAAQAKAAAFgEQAFgDAAgGIAAAAIgBgGQgBgCgDgCIgJgEIgMgEIgTgGQgJgDgGgEQgGgDgDgIQgDgGAAgLIAAgBQAAgJADgIQAEgHAGgGQAHgFAJgDQAJgDAKAAQAOgBANAFQANAEALAKIgQAWQgKgGgJgEQgJgDgHAAQgJAAgEADQgFAEAAAFIAAAAIABAGQACADADABQADADAGACIANAEIATAGQAJADAFAEQAGAFADAGQADAHAAAJIAAAAQAAAKgEAJQgEAHgHAGQgGAFgKADQgJADgMABQgOAAgPgGg");
	this.shape_37.setTransform(49.8,20.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDEEBD").s().p("AgPAPIAAgdIAfAAIAAAdg");
	this.shape_38.setTransform(40.7,26.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDEEBD").s().p("AgrA3QgRgQAAgeIAAhOIAgAAIAABNQgBARAJAIQAHAJANAAQANABAJgJQAIgJAAgQIAAhOIAfAAIAABNQgBAQgEAMQgEALgIAIQgIAIgLAEQgMAEgNAAQgbgBgQgPg");
	this.shape_39.setTransform(30.3,20.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDEEBD").s().p("AgOBGIAAg3Ig2hUIAkAAIAgA4IAig4IAjAAIg2BTIAAA4g");
	this.shape_40.setTransform(248.9,-1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDEEBD").s().p("AgxBGIAAiLIAfAAIAABvIBEAAIAAAcg");
	this.shape_41.setTransform(236.1,-1.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDEEBD").s().p("AAkBGIhChXIAABXIgeAAIAAiLIAcAAIA/BVIAAhVIAeAAIAACLg");
	this.shape_42.setTransform(221.5,-1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDEEBD").s().p("AgcBCQgOgFgKgKQgKgKgFgNQgGgNAAgPIAAAAQAAgNAGgNQAFgNAKgLQAKgJAOgGQAOgGAOAAQAQAAAOAGQANAGAKAJQAKAKAFANQAGANAAAOIAAAAQAAAOgGANQgGANgJALQgKAJgOAGQgNAGgQAAQgPAAgNgGgAgQgnQgHADgGAHQgGAFgDAIQgCAIAAAIIAAAAQAAAIACAJQAEAHAGAGQAFAHAHADQAIADAIABQAJgBAHgDQAJgDAFgHQAFgFAEgIQACgIAAgJIAAAAQAAgIgCgIQgEgHgFgGQgGgHgIgDQgHgDgJgBQgIABgIADg");
	this.shape_43.setTransform(205.1,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDEEBD").s().p("Ag0BGIAAiLIBoAAIAAAcIhJAAIAAAcIBAAAIAAAaIhAAAIAAAdIBKAAIAAAcg");
	this.shape_44.setTransform(184.2,-1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDEEBD").s().p("AAcBGIAAg4Ig3AAIAAA4IgfAAIAAiLIAfAAIAAA4IA3AAIAAg4IAeAAIAACLg");
	this.shape_45.setTransform(169.6,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDEEBD").s().p("AgOBGIAAhuIgrAAIAAgdIByAAIAAAdIgrAAIAABug");
	this.shape_46.setTransform(155.5,-1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDEEBD").s().p("Ag0BGIAAiLIBpAAIAAAcIhKAAIAAAfIBBAAIAAAaIhBAAIAAA2g");
	this.shape_47.setTransform(136.9,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDEEBD").s().p("AgcBCQgOgFgKgKQgKgKgGgNQgFgNAAgPIAAAAQAAgNAFgNQAHgNAJgLQAKgJAOgGQANgGAPAAQAQAAANAGQAOAGAKAJQAKAKAGANQAFANAAAOIAAAAQAAAOgFANQgHANgJALQgKAJgOAGQgNAGgQAAQgPAAgNgGgAgQgnQgIADgFAHQgFAFgDAIQgEAIAAAIIAAAAQAAAIAEAJQACAHAHAGQAFAHAHADQAJADAHABQAJgBAIgDQAHgDAGgHQAFgFADgIQADgIABgJIAAAAQgBgIgDgIQgCgHgHgGQgFgHgHgDQgIgDgJgBQgIABgIADg");
	this.shape_48.setTransform(121.4,-1.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDEEBD").s().p("Ag0BGIAAiLIBoAAIAAAcIhJAAIAAAcIBAAAIAAAaIhAAAIAAAdIBKAAIAAAcg");
	this.shape_49.setTransform(100.5,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FDEEBD").s().p("AAnBGIAAhaIgnA6IAAAAIgng5IAABZIgeAAIAAiLIAiAAIAjA8IAkg8IAiAAIAACLg");
	this.shape_50.setTransform(84.9,-1.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDEEBD").s().p("AgdBCQgNgFgKgKQgKgKgGgNQgFgNAAgPIAAAAQAAgNAFgNQAHgNAJgLQAKgJAOgGQAOgGAOAAQAQAAAOAGQANAGAKAJQAKAKAFANQAGANAAAOIAAAAQAAAOgGANQgFANgKALQgKAJgOAGQgOAGgPAAQgPAAgOgGgAgPgnQgJADgFAHQgFAFgEAIQgCAIAAAIIAAAAQAAAIACAJQAEAHAFAGQAGAHAIADQAIADAHABQAJgBAIgDQAHgDAGgHQAGgFACgIQADgIAAgJIAAAAQAAgIgDgIQgDgHgFgGQgGgHgHgDQgJgDgIgBQgIABgHADg");
	this.shape_51.setTransform(67.7,-1.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDEEBD").s().p("AAcBGIAAg4Ig3AAIAAA4IgfAAIAAiLIAfAAIAAA4IA3AAIAAg4IAeAAIAACLg");
	this.shape_52.setTransform(51.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,300,118.5);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(461));

	// Layer 13
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(150,-53,1,1,0,0,0,106.5,42);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(173).to({_off:false},0).to({y:47,alpha:1},15).wait(261).to({alpha:0},11).wait(1));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_34 = new cjs.Graphics().p("A8GFUIAAmZMA4NAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("A8GFlIAAm6MA4NAAAIAAG6g");
	var mask_graphics_36 = new cjs.Graphics().p("A8GF2IAAncMA4NAAAIAAHcg");
	var mask_graphics_37 = new cjs.Graphics().p("A8GGHIAAn9MA4NAAAIAAH9g");
	var mask_graphics_38 = new cjs.Graphics().p("A8GGYIAAofMA4NAAAIAAIfg");
	var mask_graphics_39 = new cjs.Graphics().p("A8GGpIAApBMA4NAAAIAAJBg");
	var mask_graphics_40 = new cjs.Graphics().p("A8GG6IAApiMA4NAAAIAAJig");
	var mask_graphics_41 = new cjs.Graphics().p("A8GHLIAAqEMA4NAAAIAAKEg");
	var mask_graphics_42 = new cjs.Graphics().p("A8GHcIAAqmMA4NAAAIAAKmg");
	var mask_graphics_43 = new cjs.Graphics().p("A8GHtIAArHMA4NAAAIAALHg");
	var mask_graphics_44 = new cjs.Graphics().p("A8GH+IAArpMA4NAAAIAALpg");
	var mask_graphics_45 = new cjs.Graphics().p("A8GIPIAAsLMA4NAAAIAAMLg");
	var mask_graphics_46 = new cjs.Graphics().p("A8GIgIAAssMA4NAAAIAAMsg");
	var mask_graphics_47 = new cjs.Graphics().p("A8GIxIAAtOMA4NAAAIAANOg");
	var mask_graphics_48 = new cjs.Graphics().p("A8GJCIAAtwMA4NAAAIAANwg");
	var mask_graphics_49 = new cjs.Graphics().p("A8GJTIAAuRMA4NAAAIAAORg");
	var mask_graphics_50 = new cjs.Graphics().p("A8GJkIAAuzMA4NAAAIAAOzg");
	var mask_graphics_51 = new cjs.Graphics().p("A8GJ2IAAvWMA4NAAAIAAPWg");
	var mask_graphics_52 = new cjs.Graphics().p("A8GKHIAAv3MA4NAAAIAAP3g");
	var mask_graphics_53 = new cjs.Graphics().p("A8GKYIAAwZMA4NAAAIAAQZg");
	var mask_graphics_54 = new cjs.Graphics().p("A8GKpIAAw6MA4NAAAIAAQ6g");
	var mask_graphics_55 = new cjs.Graphics().p("A8GK6IAAxcMA4NAAAIAARcg");
	var mask_graphics_56 = new cjs.Graphics().p("A8GLLIAAx+MA4NAAAIAAR+g");
	var mask_graphics_57 = new cjs.Graphics().p("A8GLcIAAyfMA4NAAAIAASfg");
	var mask_graphics_58 = new cjs.Graphics().p("A8GLtIAAzBMA4NAAAIAATBg");
	var mask_graphics_59 = new cjs.Graphics().p("A8GL+IAAzjMA4NAAAIAATjg");
	var mask_graphics_60 = new cjs.Graphics().p("A8GMPIAA0EMA4NAAAIAAUEg");
	var mask_graphics_61 = new cjs.Graphics().p("A8GMgIAA0mMA4NAAAIAAUmg");
	var mask_graphics_62 = new cjs.Graphics().p("A8GMxIAA1IMA4NAAAIAAVIg");
	var mask_graphics_63 = new cjs.Graphics().p("A8GNCIAA1pMA4NAAAIAAVpg");
	var mask_graphics_64 = new cjs.Graphics().p("A8GNTIAA2LMA4NAAAIAAWLg");
	var mask_graphics_65 = new cjs.Graphics().p("A8GNkIAA2tMA4NAAAIAAWtg");
	var mask_graphics_66 = new cjs.Graphics().p("A8GN1IAA3OMA4NAAAIAAXOg");
	var mask_graphics_67 = new cjs.Graphics().p("A8GOGIAA3wMA4NAAAIAAXwg");
	var mask_graphics_68 = new cjs.Graphics().p("A8GOYIAA4TMA4NAAAIAAYTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_graphics_34,x:150,y:34}).wait(1).to({graphics:mask_graphics_35,x:150,y:35.7}).wait(1).to({graphics:mask_graphics_36,x:150,y:37.4}).wait(1).to({graphics:mask_graphics_37,x:150,y:39.1}).wait(1).to({graphics:mask_graphics_38,x:150,y:40.8}).wait(1).to({graphics:mask_graphics_39,x:150,y:42.5}).wait(1).to({graphics:mask_graphics_40,x:150,y:44.2}).wait(1).to({graphics:mask_graphics_41,x:150,y:45.9}).wait(1).to({graphics:mask_graphics_42,x:150,y:47.6}).wait(1).to({graphics:mask_graphics_43,x:150,y:49.4}).wait(1).to({graphics:mask_graphics_44,x:150,y:51.1}).wait(1).to({graphics:mask_graphics_45,x:150,y:52.8}).wait(1).to({graphics:mask_graphics_46,x:150,y:54.5}).wait(1).to({graphics:mask_graphics_47,x:150,y:56.2}).wait(1).to({graphics:mask_graphics_48,x:150,y:57.9}).wait(1).to({graphics:mask_graphics_49,x:150,y:59.6}).wait(1).to({graphics:mask_graphics_50,x:150,y:61.3}).wait(1).to({graphics:mask_graphics_51,x:150,y:63}).wait(1).to({graphics:mask_graphics_52,x:150,y:64.7}).wait(1).to({graphics:mask_graphics_53,x:150,y:66.4}).wait(1).to({graphics:mask_graphics_54,x:150,y:68.1}).wait(1).to({graphics:mask_graphics_55,x:150,y:69.8}).wait(1).to({graphics:mask_graphics_56,x:150,y:71.5}).wait(1).to({graphics:mask_graphics_57,x:150,y:73.2}).wait(1).to({graphics:mask_graphics_58,x:150,y:74.9}).wait(1).to({graphics:mask_graphics_59,x:150,y:76.6}).wait(1).to({graphics:mask_graphics_60,x:150,y:78.4}).wait(1).to({graphics:mask_graphics_61,x:150,y:80.1}).wait(1).to({graphics:mask_graphics_62,x:150,y:81.8}).wait(1).to({graphics:mask_graphics_63,x:150,y:83.5}).wait(1).to({graphics:mask_graphics_64,x:150,y:85.2}).wait(1).to({graphics:mask_graphics_65,x:150,y:86.9}).wait(1).to({graphics:mask_graphics_66,x:150,y:88.6}).wait(1).to({graphics:mask_graphics_67,x:150,y:90.3}).wait(1).to({graphics:mask_graphics_68,x:150,y:92}).wait(393));

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(270.3,174.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgVBxIAAi/IgkAAIAAgiIB0AAIAAAiIgkAAIAAC/g");
	this.shape_1.setTransform(260.9,165.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AAdBxIgxh7IAAB7IgnAAIAAjhIAgAAIAwB0IAAh0IAnAAIAADhg");
	this.shape_2.setTransform(247.1,165.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBgAAIAAAgIgyAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_3.setTransform(233.7,165.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("Ag/BxIAAjhIA3AAQATAAAOAEQAPAEAJAJQAIAJAEANQADANAAATIAABQQAAAUgDANQgEAOgIAJQgJAJgOAFQgOAEgTAAgAgRBRIAJAAIAIgBIAGgCIAEgDIAEgEIACgFIAAgHIABgHIAAgJIAAhZIgBgNIgBgJQgCgEgDgDIgIgDIgKgBIgJAAg");
	this.shape_4.setTransform(219.3,165.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgWBxIAAjhIAsAAIAADhg");
	this.shape_5.setTransform(207.1,165.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgrBiQgPgRgCgkIAogHQAAAVAGALQAFALAJAAQAJAAADgGQAEgFAAgIQAAgNgGgJQgGgKgLgLIgYgTQgJgIgGgHQgGgHgEgLQgDgLAAgNQAAgbAQgPQAQgQAbAAQAJAAAIACQAIACAGADQAFAEAFAFQAEAEADAGIAEAMIADAMIABANIgnAGIgBgLIgBgKIgEgIIgFgEQgDgCgDAAQgHABgEAFQgFAGAAAHQAAAHACAFQABAFAEAEIAGAHIAFAIIAYAUIAOAMIAKAOQAFAJADAJQADAKAAALQAAAZgQAQQgRAQgaAAQgdAAgQgSg");
	this.shape_6.setTransform(196.2,165.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBgAAIAAAgIgyAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_7.setTransform(183.3,165.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AAUBxIgYhnIgQAAIAABnIguAAIAAjhIA5AAQAQAAANADQANADAKAGQAKAHAFAMQAFAMAAARQAAAWgGAOQgGANgPAFIAfBvgAgUgPIAMAAQAOAAAHgIQAHgIAAgRQAAgRgGgIQgGgIgOAAIgOAAg");
	this.shape_8.setTransform(168.9,165.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("Ag/BxIAAjhIBEAAQA7AAAABBQAAASgEAMQgFANgJAFQgIAHgLADQgLADgPAAIgSAAIAABjgAgRgQIAOAAQAOAAAFgHQAFgHAAgRIgBgOQAAgGgDgEQgCgFgGgCQgFgCgHAAIgOAAg");
	this.shape_9.setTransform(153.4,165.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBgAAIAAAgIgyAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_10.setTransform(132.6,165.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgdBuQgNgFgHgKQgIgLgDgNQgEgOAAgRIAAhOQAAgTAEgNQADgOAIgKQAHgKANgGQANgFARAAQASAAAMAFQAMAEAIAJQAHAJADAMQAEALAAAQIAAATIgtAAIAAgVIAAgFIAAgFIgBgFIgBgEIgCgEIgCgDIgDgDIgFgBIgFgBQgEAAgDACQgEACgCADQgCACgBAFIgCAJIAAAKIAABjQABARAEAIQADAIAKAAQAEAAADgCQAEgBACgCIADgFIACgHIABgHIAAgJIAAgWIAtAAIAAATQAAAQgEAMQgCAMgIAJQgGAKgNAFQgNAFgSAAQgQAAgOgGg");
	this.shape_11.setTransform(118.3,165.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgVBxIAAjhIAsAAIAADhg");
	this.shape_12.setTransform(106.4,165.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgWBxIgrjhIAoAAIAZCZIAZiZIApAAIgrDhg");
	this.shape_13.setTransform(95.1,165.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgVBxIAAi/IglAAIAAgiIB0AAIAAAiIgjAAIAAC/g");
	this.shape_14.setTransform(74.6,165.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAZBxIgbhIIgaBIIgnAAIAsh4IgrhpIAsAAIAYBBIAXhBIAnAAIgpByIAtBvg");
	this.shape_15.setTransform(61.4,165.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgwBxIAAjhIBhAAIAAAgIgzAAIAAA8IAnAAIAAAeIgnAAIAABHIAzAAIAAAgg");
	this.shape_16.setTransform(48.7,165.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AAdBxIgxh7IAAB7IgnAAIAAjhIAgAAIAwB0IAAh0IAnAAIAADhg");
	this.shape_17.setTransform(34.4,165.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE6DF").s().p("AAQBYIgThQIgMAAIAABQIglAAIAAivIAtAAQANAAAKACQAKACAIAFQAIAGAEAIQAEAKAAAOQAAARgFAKQgFALgMAEIAZBWgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_18.setTransform(284.3,125.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgFgIQgHgIgCgLQgCgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQAEAAACgCIAGgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgCAKQgDALgGAIQgFAIgLAEQgJAEgPAAQgOAAgJgEg");
	this.shape_19.setTransform(271.3,125.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgKAAgPIAAg/QAAgPADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAdIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAIIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGIAAgIIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_20.setTransform(258.6,125.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE6DF").s().p("AAQBYIgThQIgMAAIAABQIglAAIAAivIAtAAQANAAAKACQAKACAIAFQAIAGAEAIQAEAKAAAOQAAARgFAKQgFALgMAEIAZBWgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_21.setTransform(240.6,125.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgKAAgPIAAg/QAAgPADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAdIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAIIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGIAAgIIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_22.setTransform(227.7,125.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAE6DF").s().p("AgkBYIAAivIBJAAIAAAYIglAAIAAAwIAfAAIAAAYIgfAAIAABPg");
	this.shape_23.setTransform(217.1,125.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAE6DF").s().p("AghBNQgNgNgBgcIAggGQAAARAEAIQAEAJAIAAQAFAAAEgFQADgEAAgGQgBgLgEgHQgEgHgJgJIgTgPIgMgMQgEgFgDgIQgDgJgBgLQABgVANgMQANgMAUAAQAHAAAGACIALADIAIAHIAGAIIADAKIACAKIABAKIgfAEIAAgJIgBgHIgDgGIgEgEQgDgBgCAAQgFAAgEAFQgDAEAAAGQAAAFABADQACAEACAEIAFAGIAEAFIATARIAKAIIAJAMQADAGADAIQACAIAAAJQAAATgNAMQgMANgVAAQgXAAgMgOg");
	this.shape_24.setTransform(201.1,125.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAE6DF").s().p("AAXBYIgmhgIAABgIgfAAIAAivIAZAAIAmBaIAAhaIAeAAIAACvg");
	this.shape_25.setTransform(189.3,125.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgIgCgKQgDgKAAgPIAAg/QAAgPADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAdIAAA/QAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg/QgDACgBACIgDAFIgBAGIAAAIIAABRIAAAIIABAGIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgGIAAgIIAAhRIAAgIIgBgGIgDgFQgCgCgDgCQgDgBgDAAQgDAAgDABg");
	this.shape_26.setTransform(176.9,125.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAE6DF").s().p("AgQBYIAAivIAiAAIAACvg");
	this.shape_27.setTransform(167.5,125.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAE6DF").s().p("AgQBYIAAiVIgdAAIAAgaIBbAAIAAAaIgcAAIAACVg");
	this.shape_28.setTransform(159.5,125.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAE6DF").s().p("AghBNQgNgNgBgcIAggGQAAARAFAIQAEAJAGAAQAHAAACgFQAEgEAAgGQgBgLgEgHQgFgHgIgJIgTgPIgMgMQgEgFgDgIQgDgJgBgLQAAgVANgMQAOgMAUAAQAHAAAHACIAKADIAIAHIAGAIIADAKIACAKIABAKIgfAEIAAgJIgBgHIgDgGIgEgEQgDgBgCAAQgFAAgEAFQgDAEAAAGQAAAFACADQABAEACAEIAFAGIAEAFIATARIAKAIIAJAMQADAGACAIQADAIAAAJQAAATgNAMQgMANgVAAQgXAAgMgOg");
	this.shape_29.setTransform(149.3,125.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAE6DF").s().p("AgmBYIAAivIBNAAIAAAYIgoAAIAAAwIAeAAIAAAXIgeAAIAAA4IAoAAIAAAYg");
	this.shape_30.setTransform(139.1,125.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE6DF").s().p("AgYBWQgKgEgFgIQgHgIgBgLQgDgKAAgPIAAh3IAjAAIAAB7IABAJIABAIIADAGQABADADABQADACADAAQAEAAADgCIAFgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgCAKQgDALgFAIQgHAIgJAEQgLAEgOAAQgOAAgKgEg");
	this.shape_31.setTransform(127.6,125.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAE6DF").s().p("AAUBeQgKgKgHgKIgDAAQgNAAgKgDQgLgFgGgHQgGgIgCgLQgDgKAAgOIAAhAQAAgOADgLQACgKAGgIQAGgHALgFQAKgDANAAQAcgBAMAQQAMAOAAAdIAABAQAAApgYAMQALALAHAEIgHAYQgJgEgKgKgAgGhPQgDABgBACIgDAGIgBAGIAAAHIAABSIAAAHIABAGIADAGIAEADQADABADAAQADAAADgBIAFgDIADgGIABgGIAAgHIAAhSIAAgHIgBgGIgDgGQgCgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_32.setTransform(114.9,126.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAE6DF").s().p("AARBYIgRhuIgPBuIgfAAIgYivIAfAAIAMBqIAQhqIAXAAIAQBqIANhqIAeAAIgXCvg");
	this.shape_33.setTransform(95.2,125.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAE6DF").s().p("AglBYIAAivIBMAAIAAAYIgoAAIAAAwIAeAAIAAAXIgeAAIAAA4IAoAAIAAAYg");
	this.shape_34.setTransform(83,125.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAE6DF").s().p("AgkBYIAAivIBJAAIAAAYIglAAIAAAwIAfAAIAAAYIgfAAIAABPg");
	this.shape_35.setTransform(73.6,125.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE6DF").s().p("AAUBYIgGgnIgbAAIgGAnIgiAAIAjivIAlAAIAjCvgAgJAbIATAAIgKhFg");
	this.shape_36.setTransform(57.1,125.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EAE6DF").s().p("AghBNQgNgNgBgcIAggGQAAARAEAIQAFAJAHAAQAGAAADgFQACgEAAgGQAAgLgEgHQgEgHgJgJIgTgPIgLgMQgFgFgDgIQgEgJAAgLQAAgVAOgMQANgMAUAAQAHAAAGACIALADIAIAHIAGAIIADAKIADAKIABAKIggAEIgBgJIgBgHIgCgGIgEgEQgDgBgCAAQgFAAgDAFQgEAEAAAGQAAAFABADQABAEADAEIAFAGIAEAFIASARIALAIIAIAMQAEAGADAIQABAIAAAJQAAATgMAMQgMANgVAAQgXAAgMgOg");
	this.shape_37.setTransform(40.2,125.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EAE6DF").s().p("AAUBYIgGgnIgbAAIgGAnIgiAAIAjivIAmAAIAiCvgAgJAbIATAAIgKhFg");
	this.shape_38.setTransform(28.6,125.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EAE6DF").s().p("AAPBYIAAhOIgdAAIAABOIgkAAIAAivIAkAAIAABJIAdAAIAAhJIAkAAIAACvg");
	this.shape_39.setTransform(16.1,125.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EAE6DF").s().p("AgQBZIAAhHIgjhpIAiAAIARA/IASg/IAiAAIgjBpIAABHg");
	this.shape_40.setTransform(249,89.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAE6DF").s().p("AgQBZIAAiWIgdAAIAAgaIBbAAIAAAaIgcAAIAACWg");
	this.shape_41.setTransform(238.8,89.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EAE6DF").s().p("AgRBZIAAiwIAiAAIAACwg");
	this.shape_42.setTransform(230.8,89.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAE6DF").s().p("AghBNQgMgNgBgcIAfgGQAAARAFAIQADAJAIAAQAFgBADgEQADgEAAgHQABgKgFgHQgFgHgIgJIgTgPIgLgMQgFgFgDgIQgDgJAAgKQAAgWAMgMQANgMAVAAQAHAAAGACIALADIAIAHIAFAIIAEAKIADAKIABAJIggAGIgBgJIgBgIIgCgHIgEgDQgCgBgDAAQgFAAgDAEQgEAFAAAGQAAAFACADQABAEACAEIAFAGIAEAFIASARIALAIIAIAMQAFAGACAIQABAIAAAJQAAATgMAMQgNANgUAAQgXAAgMgOg");
	this.shape_43.setTransform(222.2,89.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EAE6DF").s().p("AAQBZIgThRIgMAAIAABRIglAAIAAiwIAtAAQANAAAKABQAKADAIAFQAIAGAEAIQAEAKAAANQAAASgFAKQgFALgMAEIAZBXgAgPgMIAJAAQALAAAFgGQAGgGAAgOQAAgNgFgGQgFgGgKAAIgLAAg");
	this.shape_44.setTransform(210.4,89.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAE6DF").s().p("AgmBZIAAiwIBNAAIAAAZIgoAAIAAAvIAeAAIAAAXIgeAAIAAA4IAoAAIAAAZg");
	this.shape_45.setTransform(199.3,89.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAE6DF").s().p("AgRBZIgiiwIAgAAIATB3IATh3IAhAAIgiCwg");
	this.shape_46.setTransform(188.4,89.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EAE6DF").s().p("AgRBZIAAiwIAiAAIAACwg");
	this.shape_47.setTransform(179.5,89.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_48.setTransform(170.2,89.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EAE6DF").s().p("AgXBWQgLgEgFgIQgHgIgBgLQgDgKAAgPIAAh3IAkAAIAAB7IAAAJIABAIIACAGQACADADABQADACADAAQAEAAACgCIAGgEIACgGIABgIIAAgJIAAh7IAkAAIAAB3QAAAPgCAKQgDALgFAIQgHAIgKAEQgKAEgOAAQgOAAgJgEg");
	this.shape_49.setTransform(157.8,89.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EAE6DF").s().p("AgyBZIAAiwIAsAAQAPAAALACQALAEAHAGQAGAIADAKQADAKAAAPIAAA+QAAAQgDAKQgDALgGAIQgHAHgLADQgLAEgOAAgAgNBAIAIAAIAFgBIAEgBIAEgDIACgDIACgEIABgFIAAgHIAAgHIAAhEIAAgLIgCgHQgBgDgCgDIgGgCIgIgBIgHAAg");
	this.shape_50.setTransform(139.8,89.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_51.setTransform(127,89.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_52.setTransform(114.4,89.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EAE6DF").s().p("AARBZIgRhvIgPBvIgfAAIgYiwIAfAAIAMBqIAQhqIAXAAIAQBqIANhqIAeAAIgXCwg");
	this.shape_53.setTransform(100.3,89.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EAE6DF").s().p("AgZBWQgJgDgGgJQgGgIgCgLQgCgLgBgPIAAg5QABgLABgKQABgJAFgIQADgIAGgFQAGgFAJgDQAJgDAKAAQAOAAAJAEQALADAFAHQAGAHADAKQACAJAAAMIAAAKIgiAAIAAgMIAAgIIgCgGIgCgFIgEgDQgEgCgDAAQgDAAgDACIgFADQgBACgBAFIgCAGIAAAJIAABLQABANADAHQAEAGAHABQAKAAAEgIQADgHABgNIAAgSIgSAAIAAgUIAzAAIAABaIgYAAIgDgRQgIATgTAAQgNAAgKgFg");
	this.shape_54.setTransform(86.2,89.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EAE6DF").s().p("AAXBZIgmhhIAABhIgfAAIAAiwIAZAAIAmBaIAAhaIAeAAIAACwg");
	this.shape_55.setTransform(73.9,89.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAE6DF").s().p("AgXBXQgLgEgGgIQgGgHgCgLQgDgKAAgPIAAhAQAAgOADgLQACgKAGgIQAGgHALgEQAKgEANAAQAcAAAMAPQAMAPAAAcIAABAQAAAdgMAPQgMAPgcAAQgNAAgKgEgAgGg+QgDABgBACIgDAFIgBAGIAAAHIAABSIAAAHIABAHIADAFIAEAEQADABADAAQADAAADgBIAFgEIADgFIABgHIAAgHIAAhSIAAgHIgBgGIgDgFQgCgCgDgBQgDgCgDAAQgDAAgDACg");
	this.shape_56.setTransform(61.5,89.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EAE6DF").s().p("AglBZIAAiwIAkAAIAACXIAnAAIAAAZg");
	this.shape_57.setTransform(50.9,89.3);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(150,129.1);
	this.instance_2._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},34).to({state:[{t:this.instance_2}]},126).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},276).to({state:[{t:this.instance_2}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({alpha:0},13).wait(288));

	// Layer 9
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(150,292.5,1,1,0,0,0,61,27.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({y:222.5},15).wait(418).to({alpha:0},11).wait(1));

	// Layer 8
	this.instance_4 = new lib.Symbol2copy();
	this.instance_4.setTransform(150,-32.5,1,1,0,0,0,61,27.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({y:27.5},15).wait(129).to({y:-42.5},13).wait(276).to({alpha:0},11).wait(1));

	// Layer 12
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(80,161,1,1,0,0,0,80,27.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).to({y:131,alpha:1},15).wait(254).to({alpha:0},11).wait(1));

	// Layer 16
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},15).wait(434).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;