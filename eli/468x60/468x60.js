(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_468_bg.jpg", id:"_468_bg"},
		{src:"_468_btn.png", id:"_468_btn"},
		{src:"_468_eli.jpg", id:"_468_eli"},
		{src:"_468_eli2.jpg", id:"_468_eli2"},
		{src:"_468_logo.png", id:"_468_logo"},
		{src:"_728_border.png", id:"_728_border"}
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



(lib._468_bg = function() {
	this.initialize(img._468_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib._468_btn = function() {
	this.initialize(img._468_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,24);


(lib._468_eli = function() {
	this.initialize(img._468_eli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._468_eli2 = function() {
	this.initialize(img._468_eli2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._468_logo = function() {
	this.initialize(img._468_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,60);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(206.7,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAbBsIgHgwIgnAAIgGAwIgkAAIAnjXIAtAAIAoDXgAAOAbIgOhbIAAAAIgNBbIAbAAg");
	this.shape_1.setTransform(196.7,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgRBsIgtjXIAkAAIAaCUIAAAAIAbiUIAkAAIgtDXg");
	this.shape_2.setTransform(183.4,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgoBeQgPgOgBgcIAAigIAlAAIAAChQABAMAFAGQAEAGAJAAQAJAAAFgGQAGgGAAgMIAAihIAlAAIAACgQgBAcgPAOQgOAPgbAAQgZAAgPgPg");
	this.shape_3.setTransform(169.3,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgfBnQgMgHgHgNQgFgMAAgQIAAhtQAAgQAFgMQAHgNAMgHQANgIASAAQATAAANAIQAMAHAHANQAFAMAAAQIAABtQAAAQgFAMQgHANgMAHQgNAIgTAAQgSAAgNgIgAgOhIQgFAGABANIAABrQgBAMAFAGQAEAGAKAAQALAAAEgGQAFgGgBgMIAAhrQABgNgFgGQgEgFgLAAQgKAAgEAFg");
	this.shape_4.setTransform(147.6,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_5.setTransform(134.3,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAYBsIguiGIAAAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_6.setTransform(114.3,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgeBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIASAAQATAAANAIQAMAHAHANQAFAMABAQIAABtQgBAQgFAMQgHANgMAHQgNAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAhrQAAgNgFgGQgFgFgKAAQgJAAgFAFg");
	this.shape_7.setTransform(99.3,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAYBsIguiGIAAAAIAACGIgiAAIAAjXIAjAAIArB6IABAAIAAh6IAhAAIAADXg");
	this.shape_8.setTransform(77.7,5.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_9.setTransform(63.9,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAUBsIAAhgIgnAAIAABgIglAAIAAjXIAlAAIAABYIAnAAIAAhYIAlAAIAADXg");
	this.shape_10.setTransform(49.4,5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_11.setTransform(36,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AiVAKIAAgTIErAAIAAATg");
	this.shape_12.setTransform(8.6,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_13.setTransform(-18.9,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_14.setTransform(-31.9,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAOAbIgOhbIAAAAIgNBbIAbAAg");
	this.shape_15.setTransform(-46.4,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_16.setTransform(-58.9,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_17.setTransform(-71.4,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-15,292.2,40);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape.setTransform(213.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_1.setTransform(197.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAYBsIgtiGIgBAAIAACGIgiAAIAAjXIAjAAIAsB6IAAAAIAAh6IAiAAIAADXg");
	this.shape_2.setTransform(182.6,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgNBbIAcAAg");
	this.shape_3.setTransform(161.8,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_4.setTransform(141.3,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgeBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIASAAQATAAAMAIQANAHAGANQAHAMAAAQIAABtQAAAQgHAMQgGANgNAHQgMAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAhrQAAgNgFgGQgFgFgKAAQgJAAgFAFg");
	this.shape_5.setTransform(126,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAxAAIAAAfIgxAAIAABgg");
	this.shape_6.setTransform(112.2,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgdBnQgNgHgHgNQgFgMAAgQIAAhtQAAgQAFgMQAHgNANgHQAMgIARAAQATAAANAIQALAIAHAOQAFANAAAQIAAAQIglAAIAAgQQAAgOgFgGQgFgHgIABQgJAAgEAFQgEAGAAANIAABrQAAAMAEAGQAEAGAJAAQAKAAAFgFQADgGAAgLIAAgaIAlAAIAAAZQAAAQgFAMQgHANgLAHQgNAIgTAAQgRAAgMgIg");
	this.shape_7.setTransform(90.9,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgdBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIARAAQATAAANAIQALAIAHAOQAFANABAQIAAAQIgmAAIAAgQQABgOgGgGQgFgHgIABQgIAAgFAFQgEAGgBANIAABrQABAMAEAGQAFAGAIAAQALAAAEgFQADgGAAgLIAAgaIAmAAIAAAZQgBAQgFAMQgHANgLAHQgNAIgTAAQgRAAgMgIg");
	this.shape_8.setTransform(75.9,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_9.setTransform(62.7,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgeBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIASAAQATAAAMAIQANAHAGANQAHAMAAAQIAABtQAAAQgHAMQgGANgNAHQgMAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAhrQAAgNgFgGQgFgFgKAAQgJAAgFAFg");
	this.shape_10.setTransform(42.7,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_11.setTransform(29.4,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_12.setTransform(11.1,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAYBsIguiGIAAAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_13.setTransform(-2.2,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBBAAIAAAhg");
	this.shape_14.setTransform(-16,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape_15.setTransform(-33.3,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_16.setTransform(-56,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAUBsIAAhgIgnAAIAABgIglAAIAAjXIAlAAIAABYIAnAAIAAhYIAkAAIAADXg");
	this.shape_17.setTransform(-70.5,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-4,305.6,40);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(159,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBSQgKgHgGgKQgEgMgBgNIAcgDQABANAFAGQAFAHAFAAQAIAAAEgFQAFgEAAgHQAAgLgGgHQgGgIgHgIIgSgNQgJgJgGgKQgGgLAAgOQgBgVAMgMQAMgLAUABQANAAAIAEQAKAGAFAJQAEAKACAMIgdAEQAAgMgFgEQgFgEgFAAQgFAAgEAEQgEAFAAAIQAAAJAHAHQAFAIAHAHIASAOQAJAJAGALQAGAKABAOQAAAOgHAKQgFAKgLAFQgKAGgNAAQgNgBgKgGg");
	this.shape_1.setTransform(150.9,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_2.setTransform(141,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgXBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFANAAQAPAAAKAGQAKAGAFALQAEALAAANIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAFAHAAQAIAAAEgFQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFAKgKAHQgKAFgPABQgNgBgKgFg");
	this.shape_3.setTransform(130.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_4.setTransform(119.3,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_5.setTransform(107.9,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXBSQgKgHgGgKQgEgMgCgNIAdgDQABANAFAGQAEAHAGAAQAIAAAFgFQAEgEAAgHQAAgLgGgHQgGgIgHgIIgSgNQgJgJgGgKQgGgLAAgOQAAgVAMgMQALgLAVABQAMAAAIAEQAJAGAGAJQAFAKABAMIgdAEQgBgMgEgEQgFgEgFAAQgGAAgDAEQgEAFAAAIQAAAJAHAHQAFAIAHAHIASAOQAJAJAGALQAGAKABAOQgBAOgFAKQgHAKgKAFQgLAGgMAAQgOgBgJgGg");
	this.shape_6.setTransform(96.3,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFAOAAQAPAAAKAFQAKAGAFAKQAFAKAAANIAABXQAAAMgFAKQgFAKgKAHQgKAFgPABQgOgBgKgFgAgLg5QgEAEABALIAABVQgBAKAEAFQAEAFAHAAQAJAAADgFQAEgFgBgKIAAhVQABgLgEgEQgDgFgJAAQgHAAgEAFg");
	this.shape_7.setTransform(85,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_8.setTransform(73.3,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_9.setTransform(61.3,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_10.setTransform(41.4,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgwAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_11.setTransform(28.6,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIg0AAIAAAtIAnAAIAAAXIgnAAIAABNg");
	this.shape_12.setTransform(18,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAQBWIAAhNIgfAAIAABNIgdAAIAAirIAdAAIAABHIAfAAIAAhHIAdAAIAACrg");
	this.shape_13.setTransform(1,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_14.setTransform(-9.7,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_15.setTransform(-17.6,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_16.setTransform(-29.2,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgtBWIAAirIAsAAQAWAAALAMQALALAAAXQAAAHgCAIQgCAHgFAFQgFAGgHADQAMADAGAKQAGAJAAARQAAAPgEALQgFALgKAHQgKAGgRAAgAgQA+IANAAQAKAAAFgHQAFgHAAgNQAAgNgGgHQgGgHgLAAIgKAAgAgQgOIALAAQAHAAAFgGQAGgFAAgLQAAgMgFgGQgEgHgIAAIgMAAg");
	this.shape_17.setTransform(-48.2,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgYBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFAOAAQAPAAAKAFQAKAGAFAKQAFAKAAANIAABXQAAAMgFAKQgFAKgKAHQgKAFgPABQgOgBgKgFgAgLg5QgEAEABALIAABVQgBAKAEAFQAEAFAHAAQAJAAADgFQAEgFgBgKIAAhVQABgLgEgEQgDgFgJAAQgHAAgEAFg");
	this.shape_18.setTransform(-60.3,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgZBYIAAgaIAHAAQAIAAAEgEQADgDABgIIAAiGIAbAAIAACJQABALgEAJQgEAIgJAEQgJAFgOABg");
	this.shape_19.setTransform(-70.3,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_20.setTransform(-83.7,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAGgFAAgNIAAhKQAAgOgGgFQgEgGgKAAIgLAAg");
	this.shape_21.setTransform(-100.3,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIABAAIAAhhIAaAAIAACrg");
	this.shape_22.setTransform(-112.3,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_23.setTransform(-123.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-15,294.9,32.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape.setTransform(111.3,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_1.setTransform(100.6,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_2.setTransform(89.3,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgNAEgJQAFgLAKgFQAKgHAOAAQANABAKAGQAKAHAFAKQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAIADAGQAEAEAHAAQAHAAAEgFQAEgFAAgOIAAgQIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIAAQgSAAgLgLg");
	this.shape_3.setTransform(76.9,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_4.setTransform(66,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAFgFABgNIAAhKQgBgOgFgFQgEgGgKAAIgLAAg");
	this.shape_5.setTransform(54.4,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_6.setTransform(38.8,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPAAQgOAAgKgGgAgLg5QgEAEAAAKIAABWQAAAKAEAFQAEAEAHAAQAJAAADgEQADgFAAgKIAAhWQAAgKgDgEQgDgFgJAAQgHAAgEAFg");
	this.shape_7.setTransform(27.7,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPAAQgOAAgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAJAAADgEQAEgFAAgKIAAhWQAAgKgEgEQgDgFgJAAQgIAAgDAFg");
	this.shape_8.setTransform(15.7,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_9.setTransform(3.7,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgXBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHANAAQAPABAKAGQAKAHAFAKQAEAKAAAOIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAAKIAABWQAAAKAEAFQADAEAHAAQAIAAAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAGQgKAGgPAAQgNAAgKgGg");
	this.shape_10.setTransform(-8.4,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgXBRQgKgGgGgLQgEgKgCgNIAdgFQABANAFAHQAFAGAFAAQAIAAAEgDQAFgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLAAgPQgBgVAMgLQAMgKAVgBQAMAAAIAGQAJAFAGAJQAEAKACANIgdACQAAgLgFgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAIQAFAHAHAHIASAOQAJAJAGAKQAGALABAOQgBAOgGAKQgGAKgKAFQgLAFgMAAQgOAAgJgHg");
	this.shape_11.setTransform(-19.7,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAQBWIAAhNIgfAAIAABNIgdAAIAAirIAdAAIAABHIAfAAIAAhHIAdAAIAACrg");
	this.shape_12.setTransform(-36.3,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgNAEgJQAFgLAKgFQAKgHAOAAQANABAKAGQAKAHAFAKQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAIADAGQAEAEAHAAQAHAAAEgFQAEgFAAgOIAAgQIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIAAQgSAAgLgLg");
	this.shape_13.setTransform(-48.4,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_14.setTransform(-57.6,14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_15.setTransform(-67,14.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_16.setTransform(-83.7,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAGgFAAgNIAAhKQAAgOgGgFQgEgGgKAAIgLAAg");
	this.shape_17.setTransform(-100.3,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_18.setTransform(-111.7,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_19.setTransform(-123,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-2,249.5,32.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkDYIAAmvIBIAAIAAGvg");
	this.shape.setTransform(-44.7,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AheDYIAAmvIBKAAIAAFvIBzAAIAABAg");
	this.shape_1.setTransform(-63.5,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AhmDYIAAmvIDFAAIAABBIh7AAIAABwIBeAAIAAA+IheAAIAACAICEAAIAABAg");
	this.shape_2.setTransform(-89,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,0,70.9,76);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_eli2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_eli();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Symbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgLANIAAgYIAYAAIAAAYg");
	this.shape_18.setTransform(132.5,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKgBgMIAagEQABANAFAFQAEAHAFAAQAHgBAEgDQAFgEAAgHQgBgJgFgIQgGgHgFgGIgRgNQgIgHgGgKQgGgKABgNQAAgUALgJQALgLARAAQALAAAJAFQAIAFAFAIQAEAJACAMIgaACQgBgKgFgEQgEgEgFAAQgEABgEAEQgDAEAAAIQgBAHAGAHQAFAHAHAHIAQANQAJAHAFAKQAGAKAAAMQgBAOgFAIQgFAKgKAEQgKAFgLAAQgMAAgJgGg");
	this.shape_19.setTransform(125.1,6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgiBPIAAidIAcAAIAACGIApAAIAAAXg");
	this.shape_20.setTransform(116.5,6.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgWBMQgJgGgFgJQgEgJAAgMIAAhPQAAgLAEgKQAFgJAJgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAKgBALIAABPQABAMgFAJQgFAJgJAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAJIAABPQAAAJADAEQADAEAHABQAHgBAEgEQADgEAAgJIAAhPQAAgJgDgEQgEgEgHgBQgHABgDAEg");
	this.shape_21.setTransform(106.3,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgWBMQgJgGgFgJQgFgJABgMIAAhPQgBgLAFgKQAFgJAJgGQAJgFANAAQAOAAAJAFQAKAGAEAJQAEAKAAALIAABPQAAAMgEAJQgEAJgKAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAJIAABPQAAAJADAEQAEAEAGABQAIgBADgEQADgEAAgJIAAhPQAAgJgDgEQgDgEgIgBQgGABgEAEg");
	this.shape_22.setTransform(95.3,6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAcAAIAACdg");
	this.shape_23.setTransform(84.3,6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004262").s().p("AgVBMQgKgGgEgJQgFgJAAgMIAAhPQAAgLAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAKQAFAKAAALIAAAMIgcAAIAAgMQAAgKgEgFQgDgEgGgBQgGABgDAEQgDAEAAAJIAABPQAAAJADAEQADAEAGABQAIgBADgEQADgEgBgIIAAgTIAcAAIAAASQAAAMgFAJQgEAJgJAGQgJAFgOAAQgMAAgJgFg");
	this.shape_24.setTransform(73.2,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgEgKgCgMIAbgEQABANAEAFQAEAHAFAAQAHgBAEgDQAEgEABgHQAAgJgGgIQgFgHgHgGIgQgNQgJgHgFgKQgGgKAAgNQAAgUAMgJQAKgLASAAQALAAAJAFQAIAFAFAIQAEAJABAMIgaACQAAgKgFgEQgEgEgFAAQgFABgDAEQgEAEAAAIQAAAHAGAHQAGAHAFAHIARANQAIAHAGAKQAGAKgBAMQAAAOgEAIQgGAKgKAEQgJAFgMAAQgMAAgJgGg");
	this.shape_25.setTransform(62.8,6.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004262").s().p("AAQBPIgRhBIgHAAIgHAAIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJgBAFgFQAFgFAAgOQAAgOgFgFQgFgGgJAAIgJAAg");
	this.shape_26.setTransform(47.8,6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_27.setTransform(37.2,6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAwIAvAAIAAAXg");
	this.shape_28.setTransform(27.7,6.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#004262").s().p("AgMBPIAAhCIghhbIAbAAIASA8IAAAAIASg8IAcAAIghBbIAABCg");
	this.shape_29.setTransform(17.8,6.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#004262").s().p("AgZAKIAAgTIA0AAIAAATg");
	this.shape_30.setTransform(9.2,8.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#004262").s().p("AADBPIAAgnIgtAAIAAgTIAshjIAaAAIAABjIAPAAIAAATIgPAAIAAAngAgVAVIAZAAIAAg8IgBAAg");
	this.shape_31.setTransform(0.5,6.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_32.setTransform(-13.4,6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKAAgMIAagEQAAANAFAFQAEAHAFAAQAHgBAFgDQADgEAAgHQAAgJgFgIQgFgHgHgGIgQgNQgIgHgGgKQgFgKgBgNQAAgUALgJQALgLATAAQAKAAAJAFQAIAFAEAIQAFAJACAMIgbACQgBgKgEgEQgEgEgFAAQgFABgDAEQgDAEAAAIQAAAHAFAHQAFAHAGAHIARANQAIAHAGAKQAFAKAAAMQABAOgGAIQgFAKgKAEQgJAFgMAAQgMAAgJgGg");
	this.shape_33.setTransform(-22.6,6.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAwIAvAAIAAAXg");
	this.shape_34.setTransform(-32.1,6.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#004262").s().p("AgpBPIAAidIAoAAQAUAAAKALQAKAKAAAVQAAAHgBAHQgCAGgFAFQgEAFgHADQALADAGAIQAFAKAAAPQAAANgEALQgEAKgKAGQgIAGgQAAgAgOA5IALAAQAJAAAFgHQAFgGgBgMQABgMgGgGQgFgHgKAAIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgEgFQgFgHgHAAIgKAAg");
	this.shape_35.setTransform(-42.6,6.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKgBgMIAagEQABANAFAFQAEAHAFAAQAHgBAEgDQAFgEAAgHQgBgJgFgIQgGgHgFgGIgRgNQgIgHgGgKQgGgKABgNQAAgUALgJQALgLARAAQALAAAJAFQAIAFAFAIQAEAJACAMIgaACQgBgKgFgEQgEgEgFAAQgEABgEAEQgDAEAAAIQgBAHAGAHQAFAHAHAHIAQANQAJAHAFAKQAGAKAAAMQgBAOgFAIQgFAKgKAEQgKAFgLAAQgMAAgJgGg");
	this.shape_36.setTransform(-58,6.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#004262").s().p("AgJAeIAAg7IATAAIAAA7g");
	this.shape_37.setTransform(-65.3,1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_38.setTransform(-72.6,6.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_39.setTransform(-80.5,6.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#004262").s().p("AARBPIghhiIAABiIgZAAIAAidIAaAAIAgBZIAAhZIAZAAIAACdg");
	this.shape_40.setTransform(-89.1,6.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_41.setTransform(-97.6,6.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#004262").s().p("AgdBGQgKgKgBgUIAAhPQAAgLAFgKQAEgJAJgGQAJgFANAAQAMAAAJAGQAJAGAFAKQAEAKAAALIAAAKIgaAAQAAgLgBgHQgCgGgDgDQgEgCgDgBQgFAAgEAEQgDAEAAAKIAABPQAAAJADAEQADAEAGABQAHAAADgGQAEgFgBgMIAAgPIgPAAIAAgUIArAAIAABPIgNAAIgGgMQgFAIgHACQgGAEgHAAQgQAAgKgLg");
	this.shape_42.setTransform(-106.3,6.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#004262").s().p("AAQBPIgRhBIgHAAIgHAAIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJgBAFgFQAFgFAAgOQAAgOgFgFQgFgGgJAAIgJAAg");
	this.shape_43.setTransform(-117,6.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_44.setTransform(-125.7,6.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#004262").s().p("AgMBPIghidIAbAAIASBtIAAAAIAUhtIAaAAIghCdg");
	this.shape_45.setTransform(-133.7,6.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#004262").s().p("AgWBMQgJgGgFgJQgFgJAAgMIAAhPQAAgLAFgKQAFgJAJgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAKAAALIAABPQAAAMgFAJQgFAJgJAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAJIAABPQAAAJADAEQADAEAHABQAIgBADgEQADgEAAgJIAAhPQAAgJgDgEQgDgEgIgBQgHABgDAEg");
	this.shape_46.setTransform(-148.9,6.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_47.setTransform(-158.7,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-9,302.2,30.4);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAcCFIgfhuIgLAAIgNABIAABtIguAAIAAkJIBAAAQAlAAAUASQATATAAAqQAAAVgEAOQgGAOgHAFQgHAIgIADIAnB5gAgbgMIAQAAQARAAAHgJQAJgJgBgXQABgXgJgKQgHgJgRABIgQAAg");
	this.shape_18.setTransform(101.8,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("Ag/CFIAAkJIB5AAIAAAoIhLAAIAABEIA6AAIAAAnIg6AAIAABOIBRAAIAAAog");
	this.shape_19.setTransform(84.3,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("Ag/CFIAAkJIB/AAIAAAoIhRAAIAABEIA8AAIAAAnIg8AAIAAB2g");
	this.shape_20.setTransform(67.8,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AglB/QgPgLgIgQQgIgRgBgUIArgGQACAUAHAKQAHAKAKAAQAMAAAHgGQAHgHAAgLQAAgQgJgMQgKgNgLgLQgOgLgOgLQgOgMgJgRQgKgQAAgXQAAggATgRQASgRAggBQATABANAIQAOAIAIAPQAIAOACATIgsAFQgCgRgHgGQgHgHgIAAQgJAAgGAHQgGAHAAANQAAANAKAMQAJALALAMQAOALAOALQAOANAJAQQAKARAAAVQAAAWgJAQQgJAPgRAIQgQAIgUAAQgVAAgPgKg");
	this.shape_21.setTransform(50.9,17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AAeCFIg5ilIAAAAIAAClIgqAAIAAkJIAqAAIA2CWIABAAIAAiWIAqAAIAAEJg");
	this.shape_22.setTransform(33.5,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004262").s().p("AAhCFIgIg8IgxAAIgIA8IgsAAIAxkJIA3AAIAxEJgAASAiIgShxIAAAAIgRBxIAjAAg");
	this.shape_23.setTransform(16,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004262").s().p("AAbCFIgehuIgLAAIgNABIAABtIguAAIAAkJIBAAAQAlAAAUASQATATAAAqQAAAVgFAOQgEAOgIAFQgHAIgIADIAnB5gAgbgMIAQAAQARAAAIgJQAHgJABgXQgBgXgHgKQgIgJgRABIgQAAg");
	this.shape_24.setTransform(-1,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004262").s().p("AgVCFIAAjhIgtAAIAAgoICFAAIAAAoIgtAAIAADhg");
	this.shape_25.setTransform(-17.9,17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004262").s().p("AhFCFIAAkJIBEAAQAiAAASAUQASATABApIAABoQgBAqgSATQgSAUgiAAgAgXBfIAQAAQAQAAAHgIQAIgIAAgVIAAhzQAAgVgIgJQgHgIgQABIgQAAg");
	this.shape_26.setTransform(-42.5,17.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#004262").s().p("Ag/CFIAAkJIB5AAIAAAoIhLAAIAABEIA6AAIAAAnIg6AAIAABOIBRAAIAAAog");
	this.shape_27.setTransform(-59.6,17.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#004262").s().p("Ag/CFIAAkJIB5AAIAAAoIhLAAIAABEIA6AAIAAAnIg6AAIAABOIBRAAIAAAog");
	this.shape_28.setTransform(-76.1,17.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#004262").s().p("AgVCFIAAjhIgtAAIAAgoICFAAIAAAoIgtAAIAADhg");
	this.shape_29.setTransform(-91.9,17.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#004262").s().p("AAeCFIg5ilIAAAAIAAClIgqAAIAAkJIAqAAIA2CWIABAAIAAiWIAqAAIAAEJg");
	this.shape_30.setTransform(-108.3,17.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#004262").s().p("AAhCFIgIg8IgxAAIgIA8IgsAAIAxkJIA3AAIAxEJgAASAiIgShxIAAAAIgRBxIAjAAg");
	this.shape_31.setTransform(-125.8,17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#004262").s().p("AAbCFIgehuIgLAAIgNABIAABtIguAAIAAkJIBAAAQAlAAAUASQATATAAAqQAAAVgFAOQgEAOgIAFQgHAIgIADIAnB5gAgbgMIARAAQAQAAAIgJQAHgJABgXQgBgXgHgKQgIgJgQABIgRAAg");
	this.shape_32.setTransform(-142.9,17.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#004262").s().p("AAhCFIgIg8IgxAAIgIA8IgsAAIAxkJIA3AAIAxEJgAASAiIgShxIAAAAIgRBxIAjAAg");
	this.shape_33.setTransform(-160.8,17.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#004262").s().p("AgyB1QgSgTgBgiIAAjGIAuAAIAADIQAAAOAGAIQAGAHALAAQAMAAAGgHQAGgIAAgOIAAjIIAuAAIAADGQAAAigTATQgTASggAAQgfAAgTgSg");
	this.shape_34.setTransform(-178.2,17.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#004262").s().p("AgyB3QgRgSgBghIAAiHQAAgTAIgQQAHgPAPgJQAPgJAXgBQAVABAPAKQAPAJAIARQAIAQAAAVIAAARIgsAAQAAgUgDgLQgDgLgFgEQgGgFgHAAQgJAAgGAHQgFAGgBARIAACHQAAANAFAHQAFAIAMAAQAMAAAFgJQAGgIAAgUIAAgaIgbAAIAAgiIBJAAIAACFIgWAAIgJgUQgKAMgKAGQgKAGgOAAQgcAAgQgSg");
	this.shape_35.setTransform(-196.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-7,320.8,48.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_btn();
	this.instance.setTransform(-209,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-14,74,24);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_logo();
	this.instance.setTransform(-110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,0,210,60);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib._728_border();
	this.instance.setTransform(0,0,0.643,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(364));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(344).to({_off:false},0).to({y:62},13).wait(7));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(338).to({_off:false},0).to({alpha:1},13).wait(13));

	// Layer 6
	this.instance_3 = new lib.Symbol10_1();
	this.instance_3.setTransform(854.6,63,1,1,0,0,0,114.1,23.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245).to({_off:false},0).to({x:424.6},13).wait(70).to({alpha:0},9).to({_off:true},1).wait(26));

	// Layer 5
	this.instance_4 = new lib.Symbol9_1();
	this.instance_4.setTransform(938.6,26.6,1,1,0,0,0,198.1,23.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(237).to({_off:false},0).to({x:508.6},13).wait(78).to({alpha:0},9).to({_off:true},1).wait(26));

	// Layer 4
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(946.8,65.4,1,1,0,0,0,194.3,26);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).to({x:396.8},13).wait(68).to({alpha:0},9).wait(127));

	// Layer 12
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(955.7,28,1,1,0,0,0,203.2,26);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(138).to({_off:false},0).to({x:405.7},13).wait(77).to({alpha:0},9).wait(127));

	// Layer 3
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(958,62.8,1,1,0,0,0,208,22.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).to({x:508},13).wait(72).to({alpha:0},9).wait(227));

	// Layer 2
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(925.8,26.4,1,1,0,0,0,175.8,22.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).to({x:475.8},13).wait(80).to({alpha:0},9).wait(227));

	// Layer 13
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(247.8,144.6,1,1,0,0,0,48.8,52.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({y:44.6},13).wait(88).to({alpha:0},9).wait(227));

	// Layer 1
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(89.5,45,1,1,0,0,0,89.5,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(339).to({_off:false},0).to({alpha:1},13).wait(12));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:89.5},13).wait(338));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},13).wait(351));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;