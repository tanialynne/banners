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
		{src:"_468_kerry.jpg", id:"_468_kerry"},
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


(lib._468_kerry = function() {
	this.initialize(img._468_kerry);
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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgZAyIAAhjIAZAAQAMAAAHAHQAHAIAAAQIAAAlQAAAQgHAIQgHAHgMAAgAgIAjIAGAAQAFABADgDQADgDgBgIIAAgqQABgIgDgEQgDgDgFAAIgGAAg");
	this.shape.setTransform(-45.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA4IABAAIAAg4IAPAAIAABjg");
	this.shape_1.setTransform(-52.6,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAMAyIgDgXIgRAAIgDAXIgRAAIAThjIATAAIATBjgAAGANIgGgqIgGAqIAMAAg");
	this.shape_2.setTransform(-59.2,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAUAyIAAhNIgBAAIgPBNIgHAAIgPhNIgBAAIAABNIgPAAIAAhjIAXAAIALA5IAAAAIAMg5IAXAAIAABjg");
	this.shape_3.setTransform(-66.5,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_4.setTransform(-73.7,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgZAyIAAhjIAZAAQAMAAAHAHQAHAIAAAQIAAAlQAAAQgHAIQgHAHgMAAgAgHAjIAFAAQAFABADgDQADgDAAgIIAAgqQAAgIgDgEQgDgDgFAAIgFAAg");
	this.shape_5.setTransform(-80.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA4IABAAIAAg4IAPAAIAABjg");
	this.shape_6.setTransform(-90.6,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_7.setTransform(-96,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,0,60.1,20.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(122,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgFgGgEgFIgOgKQgGgGgFgIQgFgIAAgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgEgDgDAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_1.setTransform(116,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgDgDgEAAQgEAAgCADQgEAEAAAGQABAGAEAGQAFAGAEAFIAOAKQAGAGAFAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_2.setTransform(108,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAcAAIAAARIgcAAIAAAmIAnAAIAAATg");
	this.shape_3.setTransform(100.2,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgbBAIAAh/IAWAAIAABsIAhAAIAAATg");
	this.shape_4.setTransform(92.9,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQASgBAJAKQAJAJAAAUQAAAKgCAHQgDAGgDACQgDAEgEACIATA6gAgNgFIAIAAQAIAAADgEQAEgEAAgMQAAgMgEgEQgDgEgIAAIgIAAg");
	this.shape_5.setTransform(80.7,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgSA9QgHgEgEgIQgEgHABgJIAAhBQgBgKAEgHQAEgIAHgEQAIgEAKAAQALAAAIAEQAHAEAEAIQAEAHgBAKIAABBQABAJgEAHQgEAIgHAEQgIAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQACgEABgHIAAhAQgBgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_6.setTransform(71.5,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgRA9QgHgFgEgIQgFgIAAgKIAWgDQAAAKADAFQAEAFAEAAQAFAAAEgDQADgDAAgGQABgIgFgGQgFgGgEgFIgOgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgWACQAAgIgEgDQgEgDgDAAQgEAAgDADQgCAEAAAGQgBAGAFAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_7.setTransform(59,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AANBAIgOg2IgFABIgGAAIAAA1IgXAAIAAh/IAgAAQARgBAJAKQAKAJgBAUQAAAKgCAHQgCAGgEACQgDAEgFACIATA6gAgMgFIAIAAQAGAAAEgEQAEgEAAgMQAAgMgEgEQgEgEgGAAIgIAAg");
	this.shape_8.setTransform(50.7,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAPBAIgDgdIgXAAIgDAdIgXAAIAYh/IAaAAIAZB/gAAJAQIgJg1IgHA1IAQAAg");
	this.shape_9.setTransform(42,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAbAAIAAARIgbAAIAAAmIAmAAIAAATg");
	this.shape_10.setTransform(34.2,24.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgJBAIAAg2IgbhJIAWAAIAOAxIAAAAIAPgxIAWAAIgbBJIAAA2g");
	this.shape_11.setTransform(26,24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgRA9QgJgEgDgIQgDgHgBgJIAAhBQABgKADgHQADgIAJgEQAHgEAKAAQALAAAHAEQAJAEADAIQADAHABAKIAABBQgBAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgHgFgAgIgrQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAADgEQACgEAAgHIAAhAQAAgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_12.setTransform(13.5,24.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAQBAIgQhTIAAAAIgNBTIgTAAIgZh/IAVAAIAOBQIAAAAIAPhQIAQAAIAPBQIABAAIAMhQIAVAAIgXB/g");
	this.shape_13.setTransform(2.8,24.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_14.setTransform(-6.5,24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAOBAIgahPIAAAAIAABPIgUAAIAAh/IAUAAIAZBIIAAAAIAAhIIAUAAIAAB/g");
	this.shape_15.setTransform(-18.5,24.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_16.setTransform(-25.5,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,12,156.2,25.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgXBSQgKgHgGgKQgEgLgBgNIAcgEQABANAFAGQAFAHAFgBQAIAAAEgEQAFgEAAgHQAAgLgGgHQgGgIgHgIIgSgNQgJgJgGgKQgGgLAAgPQgBgUAMgLQAMgLAUAAQANAAAIAEQAKAGAFAKQAEAJACAMIgdAEQAAgLgFgFQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAHQAFAIAHAIIASANQAJAJAGALQAGAKABAOQAAAOgHAKQgFAKgLAFQgKAGgNgBQgNAAgKgGg");
	this.shape.setTransform(239.1,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_1.setTransform(228.1,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_2.setTransform(216.8,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_3.setTransform(206.2,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_4.setTransform(194.8,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_5.setTransform(183.2,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgXBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFANAAQAPgBAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAKIAABVQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAHQgKAFgPAAQgNAAgKgFg");
	this.shape_6.setTransform(171.8,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgXBSQgKgHgGgKQgEgLgBgNIAcgEQABANAFAGQAEAHAGgBQAIAAAEgEQAFgEAAgHQAAgLgGgHQgGgIgHgIIgSgNQgJgJgGgKQgGgLgBgPQABgUALgLQANgLATAAQANAAAJAEQAIAGAFAKQAFAJACAMIgcAEQgBgLgFgFQgFgEgFAAQgGAAgDAFQgEAEAAAIQAAAJAGAHQAGAIAHAIIASANQAJAJAGALQAGAKAAAOQABAOgHAKQgFAKgLAFQgLAGgMgBQgOAAgJgGg");
	this.shape_7.setTransform(155.2,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgXBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFANAAQAPgBAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAKIAABVQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAHQgKAFgPAAQgNAAgKgFg");
	this.shape_8.setTransform(143.8,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_9.setTransform(134.6,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIABAAIAAhhIAaAAIAACrg");
	this.shape_10.setTransform(125.3,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgYBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFAOAAQAPAAAKAFQAKAHAFAJQAFALAAAMIAABXQAAAMgFALQgFAJgKAHQgKAFgPAAQgOAAgKgFgAgLg5QgDAFAAAKIAABVQAAAKADAFQAEAFAHgBQAJABADgFQADgFAAgKIAAhVQAAgKgDgFQgDgFgJAAQgHAAgEAFg");
	this.shape_11.setTransform(113.3,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_12.setTransform(101.5,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_13.setTransform(90.6,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_14.setTransform(80.6,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_15.setTransform(69.3,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgXBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFANAAQAPgBAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAKIAABVQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAHQgKAFgPAAQgNAAgKgFg");
	this.shape_16.setTransform(57.2,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_17.setTransform(46.2,26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape_18.setTransform(33.3,26.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAGgFgBgNIAAhKQABgOgGgFQgEgGgKAAIgLAAg");
	this.shape_19.setTransform(14.6,26.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_20.setTransform(3.6,26.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgXBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFANAAQAPgBAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAKIAABVQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAHQgKAFgPAAQgNAAgKgFg");
	this.shape_21.setTransform(-8.1,26.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_22.setTransform(-20,26.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_23.setTransform(-31.4,26.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgNBWIglirIAeAAIAUB2IAAAAIAVh2IAeAAIglCrg");
	this.shape_24.setTransform(-42,26.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAGgFgBgNIAAhKQABgOgGgFQgEgGgKAAIgLAAg");
	this.shape_25.setTransform(-53.3,26.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_26.setTransform(-64.7,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,10,318.7,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(14.3,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(4.1,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_2.setTransform(-9.9,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgeIBkAAIAAAeIgjAAIAACqg");
	this.shape_3.setTransform(-22.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgeIBkAAIAAAeIgjAAIAACqg");
	this.shape_4.setTransform(-39.4,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljIIApAAIAlDIgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_5.setTransform(-51.1,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAoBkIAAibIgBAAIgfCbIgPAAIgfibIgBAAIAACbIgeAAIAAjIIAtAAIAYB0IAAAAIAZh0IAtAAIAADIg");
	this.shape_6.setTransform(-72,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljIIApAAIAlDIgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_7.setTransform(-86.8,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_8.setTransform(-99.7,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_9.setTransform(-114.1,2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgFgMAAgOIAAhmQAAgPAFgLQAGgMALgHQAMgHARAAQARAAAMAHQAMAHAGAMQAGALAAAPIAABmQAAAOgGAMQgGAMgMAGQgMAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_10.setTransform(-128,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_11.setTransform(-141.7,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("Ag3BlIAAjIIAyAAQAegBAPAOQAQAOAAAgQAAAggQAMQgPAOgeAAIgPAAIAABTgAgUgJIANAAQAPABAHgHQAGgHAAgSQAAgRgGgHQgHgHgPAAIgNAAg");
	this.shape_12.setTransform(-155.7,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-16,184.6,37.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFAAAKQABAKAGAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgMAGgOAAQgQAAgMgHg");
	this.shape.setTransform(30.4,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(17.1,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_2.setTransform(6.3,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgfAAIAAjJIAhAAIAoByIAAAAIAAhyIAgAAIAADJg");
	this.shape_3.setTransform(-4.6,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQANgHAQAAQASAAAMAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgMAHgSAAQgQAAgNgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(-18.6,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_5.setTransform(-32.3,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIgiAAIAACqg");
	this.shape_6.setTransform(-45,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAaIgNhVIAAAAIgMBVIAZAAg");
	this.shape_7.setTransform(-56.7,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AASBlIAAhaIgjAAIAABaIgiAAIAAjJIAiAAIAABTIAjAAIAAhTIAjAAIAADJg");
	this.shape_8.setTransform(-69.9,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_9.setTransform(-84,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg5AAIAAA0IArAAIAAAcIgrAAIAAA8IA9AAIAAAeg");
	this.shape_10.setTransform(-96.8,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAoBlIAAidIgBAAIgfCdIgPAAIggidIAAAAIAACdIgeAAIAAjJIAuAAIAXB1IAAAAIAYh1IAuAAIAADJg");
	this.shape_11.setTransform(-111.9,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAA0IArAAIAAAcIgrAAIAAA8IA8AAIAAAeg");
	this.shape_12.setTransform(-132.5,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AASBlIAAhaIgjAAIAABaIgiAAIAAjJIAiAAIAABTIAjAAIAAhTIAjAAIAADJg");
	this.shape_13.setTransform(-146.1,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIgiAAIAACqg");
	this.shape_14.setTransform(-158.5,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-3,204.9,37.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AA3DfIgNhjIhTAAIgNBjIhLAAIBTm9IBdAAIBTG9gAAeA5Igei+IAAAAIgdC+IA7AAg");
	this.shape.setTransform(-77.4,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglDfIAAm9IBLAAIAAG9g");
	this.shape_1.setTransform(-99.8,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglDfIhdm9IBLAAIA3E0IAAAAIA4k0IBLAAIhdG9g");
	this.shape_2.setTransform(-122.2,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,0,76.6,78.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAgAAIApBxIABAAIAAhxIAeAAIAADHg");
	this.shape.setTransform(-5.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgFgMAAgOIAAhmQAAgPAFgLQAGgMALgHQAMgHARAAQARAAAMAHQAMAHAGAMQAGALAAAPIAABmQAAAOgGAMQgGAMgMAGQgMAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_1.setTransform(-19.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAhAAIAoBxIABAAIAAhxIAeAAIAADHg");
	this.shape_2.setTransform(-33.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_3.setTransform(-46.3,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_4.setTransform(-59.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQALgHARAAQARAAAMAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgMAHgRAAQgRAAgLgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_5.setTransform(-79.7,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgdIBjAAIAAAdIgiAAIAACqg");
	this.shape_6.setTransform(-92.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgbBgQgMgIgGgNQgGgMgBgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAGALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFgBAKQAAAKAHAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgLAGgPAAQgQAAgLgHg");
	this.shape_7.setTransform(-110.1,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg4AAIAAA0IArAAIAAAdIgrAAIAAA8IA8AAIAAAdg");
	this.shape_8.setTransform(-122.2,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgrBkIAAjHIAjAAIAACqIA0AAIAAAdg");
	this.shape_9.setTransform(-133.7,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag1BkIAAjHIA0AAQAZAAANANQANAOAAAaQAAAJgCAIQgDAIgFAHQgGAGgIAEQAOAEAGALQAIAMAAATQAAARgFANQgGANgLAHQgMAIgUAAgAgTBIIAPAAQAMAAAGgIQAFgIAAgPQABgPgHgJQgHgHgNgBIgMAAgAgTgRIANAAQAIAAAGgHQAHgGAAgNQAAgNgFgIQgGgHgKAAIgNAAg");
	this.shape_10.setTransform(-146.5,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_11.setTransform(-159.9,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBlAAIAAAdIgiAAIAACqg");
	this.shape_12.setTransform(-171.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-17,183.1,37.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape.setTransform(27.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAgAAIAADJg");
	this.shape_1.setTransform(13.7,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_2.setTransform(2.8,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBkAAIAAAfIghAAIAACqg");
	this.shape_3.setTransform(-6.6,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_4.setTransform(-15.9,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_5.setTransform(-26.1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAaBlIgaiEIAAAAIgWCEIgdAAIgmjJIAgAAIAVB/IABAAIAXh/IAaAAIAYB/IAAAAIAUh/IAgAAIgjDJg");
	this.shape_6.setTransform(-41.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAoBlIAAidIgBAAIgfCdIgPAAIgfidIgBAAIAACdIgeAAIAAjJIAtAAIAYB0IAAAAIAZh0IAtAAIAADJg");
	this.shape_7.setTransform(-65.7,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMAMgHQAMgHAQAAQASAAAMAHQALAHAGAMQAFALAAAPIAABmQAAAOgFAMQgGAMgLAGQgMAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_8.setTransform(-81.2,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_9.setTransform(-94.9,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgvBlIAAjJIBfAAIAAAfIg8AAIAAAzIAsAAIAAAdIgsAAIAABag");
	this.shape_10.setTransform(-108.1,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBlAAIAAAfIgjAAIAACqg");
	this.shape_11.setTransform(-126.3,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAgAAIAADJg");
	this.shape_12.setTransform(-138.8,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_13.setTransform(-151.7,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAaBlIgaiEIAAAAIgWCEIgdAAIgmjJIAgAAIAVB/IABAAIAXh/IAaAAIAYB/IAAAAIAUh/IAgAAIgjDJg");
	this.shape_14.setTransform(-167.9,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.9,-4,215.8,37.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkDYIAAi0Ihaj7IBMAAIAyClIABAAIAyilIBMAAIhaD7IAAC0g");
	this.shape.setTransform(9.6,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAsDYIgyizIgSABIgVABIAACxIhKAAIAAmvIBpAAQA8gBAfAeQAgAeABBFQgBAjgHAWQgIAWgMAKQgMANgNAFIA/DEgAgtgVIAbAAQAbABANgPQANgOAAgmQAAgmgNgPQgNgOgbAAIgbAAg");
	this.shape_1.setTransform(-18,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAsDYIgyizIgSABIgVABIAACxIhKAAIAAmvIBoAAQA9gBAgAeQAfAeAABFQAAAjgIAWQgHAWgMAKQgMANgNAFIA/DEgAgtgVIAbAAQAcABANgPQAMgOAAgmQAAgmgMgPQgNgOgcAAIgbAAg");
	this.shape_2.setTransform(-48,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhnDYIAAmvIDGAAIAABBIh7AAIAABwIBeAAIAAA+IheAAIAACAICDAAIAABAg");
	this.shape_3.setTransform(-76.3,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AArDYIg7jJIgBAAIgaAwIAACZIhLAAIAAmvIBLAAIAACgIABAAIBMigIBKAAIhQChIBbEOg");
	this.shape_4.setTransform(-101.8,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,0,144.2,76);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_kerry();

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},0).to({y:62},13).wait(10));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(337).to({_off:false},0).to({alpha:1},13).wait(16));

	// Layer 5
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(65).to({alpha:0},8).wait(30));

	// Layer 6
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(73).to({alpha:0},8).wait(30));

	// Layer 7
	this.instance_5 = new lib.Symbol13();
	this.instance_5.setTransform(564.1,17.6,1,1,0,0,0,54.1,17.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(237).to({_off:false},0).to({x:284.1,alpha:1},11).wait(80).to({alpha:0},8).wait(30));

	// Layer 4
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(854.1,63,1,1,0,0,0,114.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).wait(8).to({x:494.1},12).wait(71).to({alpha:0},9).wait(129));

	// Layer 3
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(871.1,26.6,1,1,0,0,0,131.1,23.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({x:511.1},13).wait(78).to({alpha:0},9).wait(129));

	// Layer 12
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(321.3,134.8,1,1,0,0,0,52.3,53.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(129).to({_off:false},0).to({y:44.8},13).wait(86).to({alpha:0},9).wait(129));

	// Layer 2
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(858.1,63,1,1,0,0,0,117.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:538.1},13).wait(68).to({alpha:0},9).wait(237));

	// Layer 1
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(879.1,26.6,1,1,0,0,0,138.1,23.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({x:559.1},13).wait(75).to({alpha:0},9).wait(237));

	// Layer 13
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(309.4,134.8,1,1,0,0,0,102.4,53.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:44.8},13).wait(81).to({alpha:0},9).wait(237));

	// Layer 11
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({x:89.5},13).wait(340));

	// Layer 10
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;