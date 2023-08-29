(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_250_bg.jpg", id:"_250_bg"},
		{src:"_250_elissa.jpg", id:"_250_elissa"},
		{src:"_250_footer.png", id:"_250_footer"},
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



(lib._250_bg = function() {
	this.initialize(img._250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib._250_elissa = function() {
	this.initialize(img._250_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,191);


(lib._250_footer = function() {
	this.initialize(img._250_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(111.2,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_1.setTransform(101.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_2.setTransform(88.3,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_3.setTransform(74.1,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAxAAIAAAfIgxAAIAABgg");
	this.shape_4.setTransform(60,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgjANIAAgZIBHAAIAAAZg");
	this.shape_5.setTransform(47.9,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_6.setTransform(37.1,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("Ag5BsIAAjXIA3AAQAcAAAOAPQAOAPAAAbQAAAKgDAJQgDAJgFAHQgGAHgJAEQAPAEAHAMQAIAMAAAVQAAASgGAOQgFAOgNAIQgNAJgVAAgAgUBNIAQAAQANAAAGgIQAGgJAAgQQAAgRgHgIQgHgJgPAAIgMAAgAgUgSIANAAQAKAAAGgHQAIgHgBgOQABgPgHgIQgFgHgLAAIgOAAg");
	this.shape_7.setTransform(24,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_8.setTransform(10,21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag3BsIAAjXIA3AAQAbAAAPAQQAOAQAAAiIAABTQAAAigOAQQgPAQgbAAgAgSBNIAMAAQANAAAHgGQAFgHAAgRIAAhdQAAgRgFgHQgHgHgNABIgMAAg");
	this.shape_9.setTransform(-4.5,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,1,130.7,40);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgIAmIAGAAQAGABADgEQACgDAAgJIAAgtQAAgJgCgDQgDgDgGAAIgGAAg");
	this.shape.setTransform(76.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_1.setTransform(69.6,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_2.setTransform(63.2,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AANA2IgEgYIgSAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_3.setTransform(57,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUAvQgHgHAAgPIAAhPIASAAIAABQQAAAHADACQACAEAEAAQAFAAACgEQADgCAAgHIAAhQIASAAIAABPQAAAPgHAHQgIAIgNgBQgMABgIgIg");
	this.shape_4.setTransform(49.9,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgJAmIAHAAQAGABADgEQACgDAAgJIAAgtQAAgJgCgDQgDgDgGAAIgHAAg");
	this.shape_5.setTransform(42.4,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_6.setTransform(35.4,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_7.setTransform(28.4,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgTAwQgIgHABgOIAAg1QAAgIACgGQADgHAGgDQAHgEAIAAQAIAAAHAEQAFAEAEAHQADAGgBAJIAAAHIgRAAIgBgNQgCgEgBgCQgDgCgCAAQgDAAgDADQgCACAAAHIAAA2QAAAFACADQACADAEAAQAFAAACgDQACgEAAgIIAAgKIgKAAIAAgOIAcAAIAAA2IgJAAIgDgIQgEAFgEACQgEACgEAAQgMAAgGgHg");
	this.shape_8.setTransform(20.7,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAHAIQAIAJAAAQIAAApQAAARgIAIQgHAIgNAAgAgIAmIAGAAQAGABADgEQACgDAAgJIAAgtQAAgJgCgDQgDgDgGAAIgGAAg");
	this.shape_9.setTransform(9.9,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAMA2IgWhCIAABCIgRAAIAAhrIARAAIAVA8IAAg8IARAAIAABrg");
	this.shape_10.setTransform(2.4,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AANA2IgEgYIgSAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_11.setTransform(-4.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,92.5,22);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIARIAIgRIgHAAIAAgRIAQAAIAAARIgJARg");
	this.shape.setTransform(106.7,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUAvQgHgIAAgOIAAhPIASAAIAABQQAAAHADACQACADAEABQAFgBACgDQADgCAAgHIAAhQIASAAIAABPQAAAOgHAIQgIAIgNgBQgMABgIgIg");
	this.shape_1.setTransform(101.3,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAIAIQAHAJAAAQIAAApQAAARgHAIQgIAIgNAAgAgJAmIAHAAQAGABACgEQADgDAAgJIAAgtQAAgJgDgDQgCgDgGAAIgHAAg");
	this.shape_2.setTransform(93.8,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPAzQgGgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAGgDQAHgEAIAAQAJAAAHAEQAGADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgGADQgHAEgJAAQgIAAgHgEgAgHgjQgBADAAAGIAAA1QAAAGABADQADADAEAAQAFAAADgDQABgDAAgGIAAg1QAAgGgBgDQgDgDgFAAQgEAAgDADg");
	this.shape_3.setTransform(86.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgHgjQgCADAAAGIAAA1QAAAGACADQADADAEAAQAFAAACgDQACgDAAgGIAAg1QAAgGgCgDQgCgDgFAAQgEAAgDADg");
	this.shape_4.setTransform(75.5,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_5.setTransform(68.8,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAIAIQAHAJAAAQIAAApQAAARgHAIQgIAIgNAAgAgJAmIAHAAQAGABACgEQADgDAAgJIAAgtQAAgJgDgDQgCgDgGAAIgHAAg");
	this.shape_6.setTransform(58.8,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYA2IAAhrIAvAAIAAARIgdAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_7.setTransform(51.9,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_8.setTransform(44.8,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_9.setTransform(37.3,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_10.setTransform(30.3,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgZA2IAAhrIAyAAIAAARIgfAAIAAAcIAXAAIAAAOIgXAAIAAAwg");
	this.shape_11.setTransform(23.6,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_12.setTransform(16.7,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAMA2IgWhCIAABCIgRAAIAAhrIARAAIAVA8IAAg8IARAAIAABrg");
	this.shape_13.setTransform(9.7,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_14.setTransform(2.7,10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_15.setTransform(-4.3,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_16.setTransform(-11.1,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-1,126.6,22);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAdIALgdIgKAAIAAgcIAaAAIAAAcIgOAdg");
	this.shape.setTransform(93,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFANgBQAPAAAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAJIAABWQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAKQgFAKgKAGQgKAFgPAAQgNAAgKgFg");
	this.shape_1.setTransform(84.3,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgXBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFANgBQAPAAAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAJIAABWQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAKQgFAKgKAGQgKAFgPAAQgNAAgKgFg");
	this.shape_2.setTransform(72.3,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_3.setTransform(61.7,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_4.setTransform(48.8,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_5.setTransform(41.9,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgPAzQgGgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAGgDQAHgEAIAAQAJAAAHAEQAGADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgGADQgHAEgJAAQgIAAgHgEgAgGgjQgCADAAAGIAAA1QAAAGACADQACADAEAAQAFAAADgDQACgDAAgGIAAg1QAAgGgCgDQgDgDgFAAQgEAAgCADg");
	this.shape_6.setTransform(34.9,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAKA2IAAgwIgTAAIAAAwIgSAAIAAhrIASAAIAAAtIATAAIAAgtIASAAIAABrg");
	this.shape_7.setTransform(27.4,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgOAzQgGgDgDgHQgDgGgBgIIAAg1QABgIADgGQADgHAGgDQAGgEAIAAQAKAAAFAEQAHAEACAHQAEAGAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgDgDAAQgEAAgCADQgCADAAAGIAAA1QAAAGACADQACADAEAAQAFAAACgDQACgDAAgFIAAgNIATAAIAAAMQAAAIgEAGQgCAHgHADQgFAEgKAAQgIAAgGgEg");
	this.shape_8.setTransform(19.9,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_9.setTransform(9.7,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAKA2IAAgwIgSAAIAAAwIgTAAIAAhrIATAAIAAAtIASAAIAAgtIASAAIAABrg");
	this.shape_10.setTransform(2.4,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_11.setTransform(-4.7,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,107.9,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(115.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_1.setTransform(110.6,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAfAAIAAAQg");
	this.shape_2.setTransform(104.2,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgTAwQgIgHAAgOIAAg1QAAgIADgGQAEgHAFgDQAHgEAIAAQAIAAAHAEQAGAEADAHQACAGAAAJIAAAHIgRAAIgBgNQgCgEgBgCQgDgCgCAAQgDAAgDADQgCACAAAHIAAA2QAAAFACADQACADAEAAQAFAAACgDQACgEAAgIIAAgKIgKAAIAAgOIAcAAIAAA2IgJAAIgDgIQgEAFgEACQgEACgEAAQgMAAgGgHg");
	this.shape_3.setTransform(96.9,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_4.setTransform(90,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgWA2IAAhrIASAAIAABbIAcAAIAAAQg");
	this.shape_5.setTransform(83.9,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXA2IAAhrIATAAIAABbIAbAAIAAAQg");
	this.shape_6.setTransform(78.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgGgjQgCADgBAGIAAA1QABAGACADQACADAEAAQAFAAACgDQADgDAAgGIAAg1QAAgGgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_7.setTransform(71.2,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgOAzQgGgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAGgDQAHgEAHAAQAKAAAFAEQAHAEACAHQAEAGAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgDgDAAQgDAAgDADQgCADAAAGIAAA1QAAAGACADQADADADAAQAFAAACgDQACgDAAgFIAAgNIATAAIAAAMQAAAIgEAGQgCAHgHADQgFAEgKAAQgHAAgHgEg");
	this.shape_8.setTransform(63.6,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_9.setTransform(53.2,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgUAvQgHgIAAgOIAAhPIATAAIAABQQAAAHACACQADADADAAQAEAAADgDQACgCABgHIAAhQIASAAIAABPQAAAOgIAIQgHAHgNAAQgMAAgIgHg");
	this.shape_10.setTransform(46.2,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgDgGAAgIIAAg1QAAgIADgGQADgHAHgDQAGgEAIAAQAJAAAGAEQAHADADAHQADAGAAAIIAAA1QAAAIgDAGQgDAHgHADQgGAEgJAAQgIAAgGgEgAgGgjQgDADAAAGIAAA1QAAAGADADQACADAEAAQAFAAACgDQACgDABgGIAAg1QgBgGgCgDQgCgDgFAAQgEAAgCADg");
	this.shape_11.setTransform(38.7,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_12.setTransform(32.8,9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgUAwQgGgHgBgOIAAg1QAAgIAEgGQACgHAHgDQAFgEAJAAQAIAAAGAEQAHAEACAHQADAGAAAJIAAAHIgRAAIgBgNQgBgEgDgCQgCgCgCAAQgDAAgCADQgDACAAAHIAAA2QAAAFACADQACADAEAAQAEAAACgDQADgEAAgIIAAgKIgKAAIAAgOIAdAAIAAA2IgJAAIgEgIQgEAFgEACQgEACgFAAQgLAAgHgHg");
	this.shape_13.setTransform(27,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgIA2IAAhrIARAAIAABrg");
	this.shape_14.setTransform(21.2,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_15.setTransform(16.2,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_16.setTransform(9.9,9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_17.setTransform(3.5,9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AALA2IgMgtIgEAAIgFAAIAAAtIgTAAIAAhrIAaAAQAOAAAIAIQAIAHAAARQAAAJgCAGQgCAFgDABQgDADgDACIAQAxgAgKgEIAGAAQAGAAADgDQADgEAAgKQAAgJgDgEQgDgDgGAAIgGAAg");
	this.shape_18.setTransform(-3.6,9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgdA2IAAhrIAbAAQAPAAAIAIQAJAHAAARQAAASgJAFQgIAIgPgBIgIAAIAAAtgAgKgEIAHAAQAHAAAEgDQADgEAAgKQAAgJgDgEQgEgDgHAAIgHAAg");
	this.shape_19.setTransform(-11.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-2,136.5,22);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape.setTransform(81.3,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_1.setTransform(75.1,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgbA2IAAhrIAbAAQANAAAIAIQAHAJAAAQIAAApQAAARgHAIQgIAIgNAAgAgJAmIAHAAQAGABACgEQADgDAAgJIAAgtQAAgJgDgDQgCgDgGAAIgHAAg");
	this.shape_2.setTransform(64.7,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA2IAAhrIAvAAIAAARIgdAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_3.setTransform(57.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgIA2IAAhaIgSAAIAAgRIA1AAIAAARIgSAAIAABag");
	this.shape_4.setTransform(51.4,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgdA2IAAhrIAbAAQAPAAAIAIQAJAHAAARQAAASgJAFQgIAIgPgBIgIAAIAAAtgAgKgEIAHAAQAHAAAEgDQADgEAAgKQAAgJgDgEQgEgDgHAAIgHAAg");
	this.shape_5.setTransform(44.9,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgZA2IAAhrIAxAAIAAARIgeAAIAAAcIAWAAIAAAOIgWAAIAAAgIAgAAIAAAQg");
	this.shape_6.setTransform(37.8,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgOAzQgHgDgDgHQgCgGAAgIIAAg1QAAgIACgGQADgHAHgDQAHgEAHAAQAJAAAHAEQAFAEAEAHQADAGgBAJIAAAIIgSAAIAAgJQAAgHgCgDQgEgDgDAAQgDAAgDADQgCADAAAGIAAA1QAAAGACADQADADADAAQAFAAACgDQACgDAAgFIAAgNIASAAIAAAMQABAIgDAGQgEAHgFADQgHAEgJAAQgHAAgHgEg");
	this.shape_7.setTransform(30.5,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgOAzQgGgDgDgHQgDgGgBgIIAAg1QABgIADgGQADgHAGgDQAGgEAIAAQAKAAAFAEQAHAEACAHQAEAGAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgDgDAAQgEAAgCADQgCADAAAGIAAA1QAAAGACADQACADAEAAQAFAAACgDQACgDAAgFIAAgNIATAAIAAAMQAAAIgEAGQgCAHgHADQgFAEgKAAQgIAAgGgEg");
	this.shape_8.setTransform(23,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_9.setTransform(16,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgOAzQgGgEgDgHQgEgHAAgIIASgCQAAAIADAEQADAEADAAQAFAAADgCQACgDABgFQgBgGgDgFIgIgKIgLgIQgGgEgDgHQgEgHAAgJQAAgNAHgHQAIgHAMAAQAHAAAGADQAFAEADAGQAEAFAAAIIgRACQgBgHgDgCQgDgDgDAAQgDAAgCADQgDADAAAFQABAFADAFIAIAJIALAIQAGAFADAHQAEAHAAAIQAAAJgDAHQgEAGgHADQgGADgIAAQgIAAgGgEg");
	this.shape_10.setTransform(5.9,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AANA2IgDgYIgTAAIgDAYIgSAAIAUhrIAVAAIAUBrgAAHAOIgHgtIAAAAIgGAtIANAAg");
	this.shape_11.setTransform(-0.6,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA2IgOhGIgLBGIgQAAIgUhrIASAAIALBDIAMhDIANAAIANBDIABAAIAKhDIARAAIgTBrg");
	this.shape_12.setTransform(-9.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,0,102.4,22);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape.setTransform(86.6,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_1.setTransform(69.7,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape_2.setTransform(52.8,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIAAAAIAghpIAwAAIg5CfIAAByg");
	this.shape_3.setTransform(36.1,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_4.setTransform(21,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_5.setTransform(4.9,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-1,103.3,49.6);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIAUAAIASBjgAAGAMIgGgpIgFApIALAAg");
	this.shape.setTransform(139.6,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaAyIAAhjIAZAAQANAAAIAGQAHAHAAARQAAAQgHAEQgIAIgNAAIgIAAIAAApgAgJgEIAGAAQAHABADgEQADgEAAgIQAAgJgDgEQgDgDgHAAIgGAAg");
	this.shape_1.setTransform(133.1,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgSAtQgHgIAAgLIAAgzQAAgHADgFQADgHAFgDQAGgDAIgBQAHAAAGAFQAGADADAHQADAFAAAIIAAAHIgRAAIgBgMQgBgEgCgCQgCgCgCABQgDgBgCADQgCADAAAFIAAAzQgBAEACAEQACACAEAAQAEAAACgDQACgDAAgIIAAgKIgJAAIAAgMIAbAAIAAAyIgJAAIgDgHQgEAEgEACQgEADgEAAQgKgBgGgGg");
	this.shape_2.setTransform(125.9,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgVAyIAAhjIASAAIAABUIAZAAIAAAPg");
	this.shape_3.setTransform(116.9,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgNAwQgGgDgDgHQgDgGAAgGIAAgzQAAgHADgFQADgHAGgDQAFgDAIgBQAIABAGADQAHADACAHQADAFAAAHIAAAzQAAAGgDAGQgCAHgHADQgGAEgIAAQgIAAgFgEgAgFghQgDADABAGIAAAxQgBAFADAEQABACAEAAQAEAAACgCQADgEAAgFIAAgxQAAgGgDgDQgCgCgEAAQgEAAgBACg");
	this.shape_4.setTransform(110.4,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOAwQgFgDgDgHQgDgGAAgGIAAgzQAAgHADgFQADgHAFgDQAHgDAHgBQAJABAGADQAGADACAHQADAFAAAHIAAAzQAAAGgDAGQgCAHgGADQgGAEgJAAQgHAAgHgEgAgGghQgCADABAGIAAAxQgBAFACAEQADACADAAQAFAAACgCQACgEAAgFIAAgxQAAgGgCgDQgCgCgFAAQgDAAgDACg");
	this.shape_5.setTransform(103.4,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAIAyIAAgtIgQAAIAAAtIgRAAIAAhjIARAAIAAApIAQAAIAAgpIASAAIAABjg");
	this.shape_6.setTransform(96.4,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgNAwQgGgDgDgHQgDgGAAgGIAAgzQAAgHADgFQADgHAGgDQAGgDAHgBQAIAAAGAFQAGADADAHQADAFAAAIIAAAIIgSAAIAAgIQAAgHgCgDQgDgCgDAAQgDAAgCACQgDADABAGIAAAxQgBAFADAEQACACADAAQAEAAACgCQACgDAAgFIAAgMIASAAIAAAMQAAAGgDAGQgDAHgGADQgGAEgIAAQgHAAgGgEg");
	this.shape_7.setTransform(89.4,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgNAvQgGgDgDgHQgDgGAAgHIAQgDQABAHADAFQACADADAAQAEAAADgCQADgCAAgFQgBgGgDgEIgHgJIgKgIQgFgEgEgGQgEgGAAgJQAAgMAHgHQAHgGALgBQAHAAAFADQAGAEADAFQADAGAAAHIgQACQgBgHgDgCQgCgDgDABQgDgBgCADQgCADAAAFQAAAEAEAFIAGAJIALAHQAFAFADAGQAEAGAAAJQAAAIgDAFQgEAHgGACQgGAEgHAAQgHAAgGgFg");
	this.shape_8.setTransform(82.8,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAIAyIAAgtIgQAAIAAAtIgRAAIAAhjIARAAIAAApIAQAAIAAgpIASAAIAABjg");
	this.shape_9.setTransform(73.1,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgSAtQgHgIAAgLIAAgzQAAgHADgFQADgHAFgDQAGgDAIgBQAHAAAGAFQAGADADAHQADAFAAAIIAAAHIgRAAIgBgMQgBgEgCgCQgCgCgCABQgDgBgCADQgCADAAAFIAAAzQgBAEACAEQACACAEAAQAEAAACgDQACgDAAgIIAAgKIgJAAIAAgMIAbAAIAAAyIgJAAIgDgHQgEAEgEACQgEADgEAAQgKgBgGgGg");
	this.shape_10.setTransform(66.1,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_11.setTransform(60.7,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAIAyIAAgtIgQAAIAAAtIgRAAIAAhjIARAAIAAApIAQAAIAAgpIASAAIAABjg");
	this.shape_12.setTransform(55.2,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgKAwQgGgCgDgFQgEgFAAgIIAAgIIAQAAIAAAIQAAAEACADQACACADAAQADAAACgDQACgDAAgGIAAgXQAAgDgCgCQgCgDgDAAQgCABgCACIgEADIgNAAIABgNIAAgQIAAgVIAoAAIAAAOIgZAAIgBAWIAAABQADgEADgBIAFgBQAKAAAEAHQAFAHAAAKIAAAOQAAAQgGAIQgFAIgNAAQgFAAgFgDg");
	this.shape_13.setTransform(45.5,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_14.setTransform(40.9,12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AACAyIAAgYIgcAAIAAgOIAbg9IARAAIAAA9IAJAAIAAAOIgJAAIAAAYgAgNAMIAPAAIAAglg");
	this.shape_15.setTransform(36.1,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIATAAIATBjgAAHAMIgHgpIgGApIANAAg");
	this.shape_16.setTransform(26.9,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAIAyIAAgtIgQAAIAAAtIgRAAIAAhjIARAAIAAApIAQAAIAAgpIASAAIAABjg");
	this.shape_17.setTransform(17.2,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_18.setTransform(11,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_19.setTransform(6.3,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA+IAMg+IAMAAIAMA+IAAAAIAKg+IAQAAIgSBjg");
	this.shape_20.setTransform(-0.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-2,151.9,20.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_elissa();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,250,191);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_12.setTransform(144,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_13.setTransform(130.4,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_14.setTransform(113.3,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AhRCXIAAktIBOAAQAnAAAUAVQAUAUgBAnQAAANgDANQgEAMgIAKQgIAKgNAFQAUAHALARQALARAAAdQABAagJATQgIAUgSAMQgSALgdAAgAgcBsIAWAAQASAAAJgMQAIgLAAgXQAAgYgKgLQgJgMgWAAIgQAAgAgcgaIASAAQAOAAAJgKQAKgJAAgTQAAgVgIgLQgJgLgPAAIgTAAg");
	this.shape_15.setTransform(94,22.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_16.setTransform(74,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("Ag5CFQgVgVAAgnIAAjhIA0AAIAADjQAAARAGAIQAIAIAMAAQANAAAIgIQAGgIAAgRIAAjjIA1AAIAADhQgBAngVAVQgVAUglAAQgkAAgVgUg");
	this.shape_17.setTransform(54.2,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_18.setTransform(36.3,22.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_19.setTransform(18,22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgYCXIhAktIAzAAIAlDQIAAAAIAmjQIAzAAIg/Etg");
	this.shape_20.setTransform(-0.7,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-5,162.8,54.4);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgZCXIAAh+Ig/ivIA1AAIAjBzIAAAAIAjhzIA2AAIg/CvIAAB+g");
	this.shape_17.setTransform(159.8,17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_18.setTransform(143,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AhRCXIAAktIBOAAQAnAAAUAVQAUAUgBAnQAAANgDANQgEAMgIAKQgIAKgNAFQAUAHALARQALARAAAdQABAagJATQgIAUgSAMQgSALgdAAgAgcBsIAWAAQASAAAJgMQAIgLAAgXQAAgYgKgLQgJgMgWAAIgQAAgAgcgaIASAAQAOAAAJgKQAKgJAAgTQAAgVgIgLQgJgLgPAAIgTAAg");
	this.shape_19.setTransform(123.8,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgZCXIAAktIAyAAIAAEtg");
	this.shape_20.setTransform(107.2,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AhOCXIAAktIBNAAQAmAAAWAWQAUAXAAAvIAAB2QAAAugUAXQgWAWgmAAgAgaBsIASAAQASABAJgKQAJgJgBgYIAAiDQABgXgJgKQgJgKgSABIgSAAg");
	this.shape_21.setTransform(90.9,17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_22.setTransform(71.5,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAfCXIgjh9IgMABIgPAAIAAB8Ig0AAIAAktIBJAAQAqAAAWAUQAXAVgBAwQAAAZgFAPQgGAQgIAGQgIAJgJAEIAsCJgAgfgOIATAAQASABAKgLQAIgKABgbQgBgagIgKQgKgLgSABIgTAAg");
	this.shape_23.setTransform(51.7,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgqCRQgSgLgIgRQgJgSAAgVIAAiaQAAgWAJgSQAIgRASgKQARgLAaAAQAaAAARALQARAMAJASQAIATAAAXIAAAWIg0AAIAAgXQAAgTgIgJQgHgJgKAAQgOAAgGAIQgGAJAAARIAACXQAAARAGAJQAGAIAOAAQAOAAAFgIQAGgIAAgPIAAgkIA0AAIAAAjQAAAVgIASQgJARgRALQgRAKgaAAQgaAAgRgKg");
	this.shape_24.setTransform(30.1,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AAiCXIhAi7IgBAAIAAC7IgwAAIAAktIAxAAIA+CrIABAAIAAirIAuAAIAAEtg");
	this.shape_25.setTransform(9.2,17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgYCXIAAktIAxAAIAAEtg");
	this.shape_26.setTransform(-7.1,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-10,186.3,54.4);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgKANIAAgZIAWAAIAAAZg");
	this.shape_13.setTransform(208.6,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgiAwQgQgQAAggQAAgdAOgRQAOgRAWAAQAUAAANAOQAOAOAAAcIAAAKIhPAAQAAAUAKANQALANAOAAQAWAAAMgVIAOAHQgIAOgLAHQgKAIgTAAQgVAAgQgQgAgWgmQgJAKgBASIA9AAQAAgSgHgKQgIgLgOAAQgOAAgIALg");
	this.shape_14.setTransform(199,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgHBWIAAirIAPAAIAACrg");
	this.shape_15.setTransform(189.6,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgiBIIgDANIgNAAQABgGAAgWIAAiPIASAAIAAA8IABAAQAQgOAOAAQAJAAAIADQAJAEAHAHQAIAHAFANQAFALAAARQAAATgFANQgFANgIAHQgIAHgIADQgJADgIAAQgRAAgRgPgAgfgIIAABAQAJAJAHADQAHAFAIAAQAOgBAKgNQAJgMAAgYQAAgwghAAQgQAAgPARg");
	this.shape_16.setTransform(180,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgkA3QgLgJAAgQQAAgVASgJQARgLAogIIAAgHQAAgXgaAAQgLAAgIAGQgIAGgDAIIgPgIQAPgaAeAAQASAAAMAJQANAJAAATIAAA9QAAAQADALIgSAAIgCgSQgSAUgVAAQgPAAgKgJgAgdAeQAAAIAGAGQAHAFAHAAQAJAAAJgGQALgGAIgJIAAggQg5AJAAAZg");
	this.shape_17.setTransform(166.7,8.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgQBUQgJgDgHgHQgIgHgFgNQgFgNAAgTQAAgRAFgLQAFgNAHgHQAIgHAJgEQAIgDAIAAQAOAAARAOIABAAIAAg8IASAAIAACPQAAAWABAGIgRAAIgCgMQgEAGgJAEQgJAFgKgBQgIAAgIgDgAghAXQAAAYAKANQAJANAPAAQAIAAAHgFQAHgDAJgJIAAhAQgPgRgQAAQgiAAAAAwg");
	this.shape_18.setTransform(153.8,6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgcA/IAAh7IARAAIAAAZIABAAQAHgOAIgGQAJgHAPAAIAAARQgQABgKAJQgHAKgHAVIAABDg");
	this.shape_19.setTransform(144.2,8.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgkAuQgOgSAAgcQAAgbAOgSQANgSAXAAQAYAAANASQAOASAAAbQAAAcgOASQgNASgYAAQgXAAgNgSgAgXgkQgKAOAAAWQAAAXAKANQAJANAOAAQAPAAAJgNQAKgNAAgXQAAgWgKgOQgJgNgPAAQgOAAgJANg");
	this.shape_20.setTransform(133.6,8.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgLBXIAAhsIgVAAIAAgPIAVAAIAAgOQAAgVAHgIQAGgHAQAAIAPABIAAAPIgFgBIgIgBQgJAAgDAEQgEAEAAAKIAAASIAbAAIAAAPIgbAAIAABsg");
	this.shape_21.setTransform(123.6,6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgLBXIAAhsIgVAAIAAgPIAVAAIAAgOQAAgVAHgIQAGgHAQAAIAPABIAAAPIgGgBIgHgBQgIAAgEAEQgEAEAAAKIAAASIAbAAIAAAPIgbAAIAABsg");
	this.shape_22.setTransform(115.6,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAvBWIgQg2Ig9AAIgQA2IgUAAIA1irIAbAAIA1CrgAgaAQIA1AAIgahYIgBAAg");
	this.shape_23.setTransform(104.2,6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgvBTIAAgNIAJAAQAaAAAHgeIgrh8IASAAIAfBeIAAAAIAeheIATAAIgsCGQgKAjgfAAIgMgCg");
	this.shape_24.setTransform(84.3,11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgHBWIAAirIAPAAIAACrg");
	this.shape_25.setTransform(75.6,6.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgiAwQgQgQAAggQAAgdAOgRQAOgRAWAAQAUAAANAOQAOAOAAAcIAAAKIhPAAQAAAUAKANQALANAOAAQAWAAAMgVIAOAHQgIAOgLAHQgKAIgTAAQgVAAgQgQgAgWgmQgJAKgBASIA9AAQAAgSgHgKQgIgLgOAAQgOAAgIALg");
	this.shape_26.setTransform(66.4,8.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AA/A/IAAhXQAAgXgUAAQgHAAgHADIgLAHIgKAJIAABbIgPAAIAAhXQAAgXgUAAQgHAAgHADIgKAHIgKAJIAABbIgSAAIAAh7IASAAIAAARIABgBQAQgSAUAAQAMAAAIAFQAGAGAEAJQASgUAVAAQAjAAAAAmIAABXg");
	this.shape_27.setTransform(50.3,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgiAwQgQgQAAggQAAgdAOgRQAOgRAWAAQAUAAANAOQAOAOAAAcIAAAKIhPAAQAAAUAKANQALANAOAAQAWAAAMgVIAOAHQgIAOgLAHQgKAIgTAAQgVAAgQgQgAgWgmQgJAKgBASIA9AAQAAgSgHgKQgIgLgOAAQgOAAgIALg");
	this.shape_28.setTransform(34.4,8.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AgcA/IAAh7IARAAIAAAZIABAAQAHgOAIgGQAJgHAPAAIAAARQgQABgKAJQgHAKgHAVIAABDg");
	this.shape_29.setTransform(24.9,8.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgGBPQgGgEAAgMIAAhaIgUAAIAAgPIAUAAIAAgpIAPAAIAAApIAeAAIAAAPIgeAAIAABXQAAAJAPAAQAHAAAIgCIAAAPQgGACgOAAQgNAAgGgFg");
	this.shape_30.setTransform(16.1,6.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AAeA+IgegzIgdAzIgUAAIAng/Igkg8IATAAIAbAsIAZgsIATAAIgjA8IApA/g");
	this.shape_31.setTransform(7,8.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("Ag1BWIAAirIBmAAIAAAQIhTAAIAAA6IA7AAIAAAPIg7AAIAABCIBYAAIAAAQg");
	this.shape_32.setTransform(-5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-10,229.4,32.4);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.833,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(310));

	// Layer 1
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(164,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 2
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).to({y:242.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;