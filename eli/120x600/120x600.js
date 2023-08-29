(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_120_bg.jpg", id:"_120_bg"},
		{src:"_120_btn.png", id:"_120_btn"},
		{src:"_120_eli.jpg", id:"_120_eli"},
		{src:"_120_eli2.jpg", id:"_120_eli2"},
		{src:"_120_logo.png", id:"_120_logo"},
		{src:"_160_border.png", id:"_160_border"}
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



(lib._120_bg = function() {
	this.initialize(img._120_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib._120_btn = function() {
	this.initialize(img._120_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib._120_eli = function() {
	this.initialize(img._120_eli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_eli2 = function() {
	this.initialize(img._120_eli2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_logo = function() {
	this.initialize(img._120_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(114,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgDgDgEAAQgEAAgCADQgEAEAAAGQABAGAEAGQAFAGAEAFIAOAKQAGAGAFAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_1.setTransform(108,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_2.setTransform(100.5,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQALAAAHAEQAIAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQgBgJgDgDQgDgEgEAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgIAEQgHAFgLAAQgKAAgHgFg");
	this.shape_3.setTransform(92.5,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAAUg");
	this.shape_4.setTransform(84.2,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgjBBIAAiAIAhAAQASAAAKAJQAJAIAAAVQAAAUgJAHQgKAKgSgBIgKAAIAAA2gAgMgFIAIAAQAJAAAEgEQAFgFAAgLQAAgMgFgEQgEgFgJABIgIAAg");
	this.shape_5.setTransform(75.7,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgHgFgEgIQgFgIAAgKIAVgDQABAKAEAFQADAFAEAAQAFAAAEgDQAEgDgBgGQABgIgFgGQgFgGgEgFIgOgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAOAAQAKAAAHAEQAGAEAEAHQAEAHABAJIgWACQgBgIgDgDQgEgDgDAAQgEAAgCADQgDAEAAAGQgBAGAFAGQAFAGAEAFIAOAKQAGAGAFAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_6.setTransform(67,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHgBgJIAAhBQABgKADgHQADgIAJgEQAHgEAKAAQALAAAHAEQAJAEADAIQADAHABAKIAABBQgBAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgHgFgAgIgrQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAADgEQACgEAAgHIAAhAQAAgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_7.setTransform(58.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgGAAIAAA2IgXAAIAAiAIAgAAQARAAAJAJQAKAIAAAVQgBALgCAGQgCAHgEACQgEADgEABIATA8gAgMgFIAIAAQAGAAAEgEQAEgFAAgLQAAgMgEgEQgEgFgGABIgIAAg");
	this.shape_8.setTransform(49.7,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgjBBIAAiAIAhAAQASAAAKAJQAJAIAAAVQAAAUgJAHQgKAKgSgBIgKAAIAAA2gAgMgFIAIAAQAJAAAEgEQAFgFAAgLQAAgMgFgEQgEgFgJABIgIAAg");
	this.shape_9.setTransform(40.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAQBBIgQhVIAAAAIgNBVIgTAAIgZiAIAVAAIAOBRIAAAAIAPhRIAQAAIAPBRIABAAIAMhRIAVAAIgXCAg");
	this.shape_10.setTransform(25.8,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgdBBIAAiAIA5AAIAAATIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_11.setTransform(16.2,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgdBBIAAiAIA8AAIAAATIgnAAIAAAhIAcAAIAAASIgcAAIAAA6g");
	this.shape_12.setTransform(8.2,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,25.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBBIgFgdIgVAAIgFAdIgVAAIAXiBIAaAAIAYCBgAAJAQIgJg2IgHA2IAQAAg");
	this.shape.setTransform(98,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AALBBIAAg6IgVAAIAAA6IgXAAIAAiBIAXAAIAAA1IAVAAIAAg1IAXAAIAACBg");
	this.shape_1.setTransform(85.5,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgUIA/AAIAAAUIgVAAIAABtg");
	this.shape_2.setTransform(77.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_3.setTransform(71.5,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAQBBIgQhVIAAAAIgNBVIgTAAIgZiBIAVAAIAOBSIAAAAIAPhSIAQAAIAPBSIABAAIAMhSIAVAAIgXCBg");
	this.shape_4.setTransform(62.8,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgiBBIAAiBIAiAAQAPABAJAIQAIAJAAARQAAAFgCAGQgCAFgCAEQgEAFgFACQAIACAFAHQAEAHABANQgBALgDAIQgEAJgHAEQgIAGgMAAgAgLAuIAJAAQAHAAADgFQAEgFAAgKQABgKgFgFQgEgFgIAAIgHAAgAgLgKIAHAAQAFAAAFgEQADgFAAgIQAAgJgDgEQgDgFgGAAIgIAAg");
	this.shape_5.setTransform(48.6,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHgBgJIAAhBQABgKADgHQADgIAJgEQAHgEAKAAQALAAAHAEQAJAEADAIQAEAHAAAKIAABBQAAAJgEAHQgDAIgJAEQgHAFgLAAQgKAAgHgFgAgIgrQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAADgEQADgEgBgHIAAhAQABgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_6.setTransform(39.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgSBBIAAgTIAFAAQAGAAADgDQADgCAAgGIAAhkIAUAAIAABnQAAAIgDAGQgCAGgHAEQgHADgKAAg");
	this.shape_7.setTransform(32,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAPBBIgDgdIgXAAIgDAdIgXAAIAZiBIAZAAIAZCBgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_8.setTransform(22,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,120,25.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_eli2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(105.9,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFAAAKQABAKAGAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgMAGgOAAQgQAAgMgHg");
	this.shape_1.setTransform(96.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBkIAAjHIAjAAIAACqIA0AAIAAAdg");
	this.shape_2.setTransform(85.4,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQAMgHAQAAQARAAAMAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgMAHgRAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_3.setTransform(72.5,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQANgHAQAAQASAAAMAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgMAHgSAAQgQAAgNgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(58.5,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AASBkIAAhZIgjAAIAABZIgjAAIAAjHIAjAAIAABSIAjAAIAAhSIAjAAIAADHg");
	this.shape_5.setTransform(44.5,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_6.setTransform(30.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgHgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQABgYAOgNQANgNAYAAQAOAAALAGQAJAGAGALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFABAKQAAAKAGAJQAIAJAIAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgMAGQgMAGgPAAQgQAAgMgHg");
	this.shape_7.setTransform(17.2,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,37.6);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape.setTransform(89.9,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljIIApAAIAlDIgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_1.setTransform(76.3,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBlIAAjIIBbAAIAAAeIg4AAIAAA0IArAAIAAAcIgrAAIAAA8IA8AAIAAAeg");
	this.shape_2.setTransform(64.2,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAhUIgqh0IAjAAIAXBMIAAAAIAYhMIAjAAIgqB0IAABUg");
	this.shape_3.setTransform(51.4,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghAMIAAgXIBDAAIAAAXg");
	this.shape_4.setTransform(40.6,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAFBlIAAgxIg7AAIAAgaIA5h9IAhAAIAAB9IATAAIAAAaIgTAAIAAAxgAgcAaIAhAAIAAhNIAAAAg");
	this.shape_5.setTransform(29.5,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,120,37.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBkAAIAAAfIghAAIAACqg");
	this.shape.setTransform(79.5,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAFALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFAAAKQABAKAGAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgMAGgOAAQgQAAgMgHg");
	this.shape_1.setTransform(67.7,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_2.setTransform(55.7,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag1BlIAAjJIAzAAQAaAAANAOQANAOAAAaQAAAIgCAJQgDAIgFAHQgFAHgJADQANAEAIALQAHALAAAUQAAARgFANQgFANgMAIQgMAHgUABgAgTBIIAPAAQAMAAAFgIQAGgIABgPQAAgPgHgIQgHgIgNAAIgMAAgAgTgRIANAAQAIAAAGgGQAHgHAAgMQABgPgGgHQgGgHgJAAIgOAAg");
	this.shape_3.setTransform(42.3,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14,120,37.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgGgMgBgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgHgKgIgIQgLgIgKgIQgKgKgHgMQgIgNAAgRQABgYAOgNQANgNAYAAQAOAAALAGQAKAGAGALQAGALABAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgFAFABAKQgBAKAIAJQAGAJAJAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgMAGQgNAGgOAAQgQAAgMgHg");
	this.shape.setTransform(108.2,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgMAmIAAhLIAZAAIAABLg");
	this.shape_1.setTransform(98.9,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAaIgNhVIAAAAIgMBVIAZAAg");
	this.shape_2.setTransform(89.6,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_3.setTransform(79.5,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAgAAIAADJg");
	this.shape_4.setTransform(68.6,33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_5.setTransform(57.7,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_6.setTransform(46.7,33.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_7.setTransform(33.1,33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_8.setTransform(21.9,33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgQBlIgqjJIAiAAIAYCKIAAAAIAZiKIAiAAIgqDJg");
	this.shape_9.setTransform(11.7,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15,120,37.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgDgIAAgKIAAhJQAAgKADgIQAFgJAIgFQAIgFAMAAQAMAAAJAFQAJAFADAJQAEAIAAAKIAABJQAAAKgEAIQgDAJgJAFQgJAFgMAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape.setTransform(102.8,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_1.setTransform(93.9,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_2.setTransform(80.8,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_3.setTransform(71.3,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_4.setTransform(62.4,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_5.setTransform(53.2,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAcBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_6.setTransform(43.9,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_7.setTransform(34.4,34.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_8.setTransform(25.2,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_9.setTransform(16,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,28);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQALALgBAWIAAA3QABAWgLALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgIAAg");
	this.shape.setTransform(101.7,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_1.setTransform(92.5,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_2.setTransform(83.6,39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(75,39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_4.setTransform(66.1,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_5.setTransform(56.7,39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_6.setTransform(47.4,39.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_7.setTransform(37.8,39.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgbA/QgJgKgBgTIAAhqIAZAAIAABrQAAAIADAEQAEAEAFAAQAGAAAEgEQADgEAAgIIAAhrIAZAAIAABqQgBATgJAKQgKAKgSAAQgQAAgLgKg");
	this.shape_8.setTransform(28.3,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgaBAQgKgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFADAJQAFAJAAALIAAAJIgYAAQAAgLgBgGQgCgFgDgDQgEgCgCAAQgFAAgDADQgDAEAAAJIAABIQgBAHAEAEQACAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgFAEQgHADgGAAQgPAAgIgKg");
	this.shape_9.setTransform(18.3,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,25,120,28);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(112.1,-14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_1.setTransform(102.8,-23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBlIgqjJIAiAAIAYCLIAAAAIAZiLIAiAAIgqDJg");
	this.shape_2.setTransform(90.3,-23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgmBYQgOgOABgaIAAiVIAiAAIAACXQAAALAEAFQAFAGAIAAQAJAAAEgGQAFgFAAgLIAAiXIAjAAIAACVQAAAagOAOQgOAOgZAAQgYAAgOgOg");
	this.shape_3.setTransform(77.1,-23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMAMgHQAMgHAQAAQASAAAMAHQALAHAGAMQAFALAAAPIAABmQAAAOgFAMQgGAMgLAGQgMAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(56.9,-23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgQBlIAAirIgiAAIAAgeIBlAAIAAAeIgiAAIAACrg");
	this.shape_5.setTransform(44.5,-23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAgAAIAADJg");
	this.shape_6.setTransform(25.8,-23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQAMgHAQAAQASAAALAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgLAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_7.setTransform(11.8,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42,120,37.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgfAAIAAjJIAhAAIAoByIAAAAIAAhyIAgAAIAADJg");
	this.shape.setTransform(95.8,-23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAfg");
	this.shape_1.setTransform(82.9,-23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AASBlIAAhaIgjAAIAABaIgjAAIAAjJIAjAAIAABSIAjAAIAAhSIAjAAIAADJg");
	this.shape_2.setTransform(69.3,-23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAirIgiAAIAAgeIBkAAIAAAeIghAAIAACrg");
	this.shape_3.setTransform(56.9,-23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AiLAKIAAgTIEWAAIAAATg");
	this.shape_4.setTransform(31.2,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42,120,37.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape.setTransform(107,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBPIgRhBIgHAAIgHAAIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAANgDAIQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJAAAFgEQAFgGAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_1.setTransform(97.4,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_2.setTransform(86.8,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_3.setTransform(77.7,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgEgKgBgMIAagDQABALAEAHQAEAFAFAAQAHAAAFgDQADgEAAgHQABgJgGgIQgFgHgHgHIgQgMQgIgHgGgKQgFgKgBgOQABgSAKgLQALgKATAAQALAAAIAFQAIAFAEAIQAFAJABALIgaAEQgBgLgEgEQgEgDgFAAQgEgBgEAFQgDAEgBAHQABAJAFAGQAGAHAFAHIARAMQAIAIAGAKQAGAJgBAOQAAAMgEAJQgGAJgKAGQgJAEgMAAQgMAAgJgGg");
	this.shape_4.setTransform(68.5,-24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBPIgUhnIAAAAIgRBnIgXAAIgeidIAaAAIAQBjIABAAIAShjIAUAAIATBjIAAAAIAPhjIAaAAIgcCdg");
	this.shape_5.setTransform(51.2,-24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAvIAvAAIAAAYg");
	this.shape_6.setTransform(39.5,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBPIghhhIAABhIgZAAIAAidIAZAAIAfBZIAAhZIAZAAIAACdg");
	this.shape_7.setTransform(28.9,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_8.setTransform(13.6,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,120,30.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJgBAFgFQAFgFAAgOQAAgOgFgFQgFgGgJAAIgJAAg");
	this.shape.setTransform(88.3,-19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgWBLQgKgFgEgJQgEgJAAgMIAAhQQAAgLAEgJQAEgJAKgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAJgBALIAABQQABAMgFAJQgFAJgJAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAEAAAJIAABPQAAAIADAFQADAEAHAAQAHAAAEgEQADgFAAgIIAAhPQAAgJgDgEQgEgEgHgBQgHABgDAEg");
	this.shape_1.setTransform(77.1,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAWIgiAAIAABGg");
	this.shape_2.setTransform(67,-19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgLAFgJQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAKQAFAJAAAMIAAAMIgcAAIAAgMQAAgKgEgFQgDgEgGgBQgGABgDAEQgDAEAAAJIAABPQAAAIADAFQADAEAGAAQAIAAADgEQADgEgBgIIAAgTIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_3.setTransform(51.4,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgLAFgJQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAKQAFAJAAAMIAAAMIgcAAIAAgMQAAgKgEgFQgDgEgGgBQgGABgDAEQgDAEAAAJIAABPQAAAIADAFQADAEAGAAQAIAAADgEQADgEgBgIIAAgTIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_4.setTransform(40.4,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_5.setTransform(30.7,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,120,30.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgWBLQgKgFgEgJQgEgJgBgMIAAhQQABgKAEgKQAEgJAKgGQAJgFANAAQAOAAAJAFQAKAGAEAJQAFAKgBAKIAABQQABAMgFAJQgEAJgKAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAFAAAIIAABPQAAAJADAEQADAFAHgBQAHABAEgFQADgEAAgJIAAhPQAAgIgDgFQgEgFgHAAQgHAAgDAFg");
	this.shape.setTransform(101.5,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_1.setTransform(91.7,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBPAAIAAAYIgaAAIAACFg");
	this.shape_2.setTransform(78.3,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AARBPIghhhIAABhIgZAAIAAidIAaAAIAfBZIAAhZIAaAAIAACdg");
	this.shape_3.setTransform(68.5,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_4.setTransform(58.4,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBPIgUhnIAAAAIgRBnIgXAAIgeidIAaAAIAQBjIABAAIAShjIAUAAIATBjIAAAAIAPhjIAaAAIgcCdg");
	this.shape_5.setTransform(45.7,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_6.setTransform(29.1,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOBPIAAhGIgbAAIAABGIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAcAAIAACdg");
	this.shape_7.setTransform(18.5,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,120,30.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghBAIAAh/IAhAAQAQAAAJAJQAIAKABAUIAAAxQgBAUgIAKQgJAJgQAAgAgLAuIAIAAQAHABAEgFQADgEAAgKIAAg3QAAgKgDgEQgEgFgHABIgIAAg");
	this.shape.setTransform(97,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAOBAIgahPIgBAAIAABPIgUAAIAAh/IAVAAIAZBIIAAAAIAAhIIAVAAIAAB/g");
	this.shape_1.setTransform(88,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAPBAIgDgcIgXAAIgDAcIgXAAIAZh/IAaAAIAYB/gAAIAQIgIg1IgIA1IAQAAg");
	this.shape_2.setTransform(79.5,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAbAAIAAARIgbAAIAAAmIAnAAIAAATg");
	this.shape_3.setTransform(67.7,32.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAcAAIAAARIgcAAIAAAmIAnAAIAAATg");
	this.shape_4.setTransform(59.7,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQASgBAJAKQAKAIAAAVQAAAKgDAHQgDAHgDABQgDAEgEACIATA6gAgNgFIAIAAQAHAAAFgEQADgFAAgLQAAgMgDgEQgFgFgHABIgIAAg");
	this.shape_5.setTransform(51.2,32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKAEgHQADgIAHgEQAIgEAKAAQAKAAAHAEQAHAFAEAIQAEAIAAAKIAAAIIgVAAQAAgJgCgGQgBgFgCgCQgDgCgDAAQgEAAgDADQgDADAAAIIAABBQAAAGACAEQADADAFABQAFAAADgFQADgEAAgJIAAgNIgMAAIAAgQIAiAAIAABAIgKAAIgFgKQgFAGgFADQgFADgFAAQgOAAgIgJg");
	this.shape_6.setTransform(42,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAcAAIAAARIgcAAIAAAmIAnAAIAAATg");
	this.shape_7.setTransform(33.7,32.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AggBAIAAh/IAgAAQAQAAAJAJQAIAKABAUIAAAxQgBAUgIAKQgJAJgQAAgAgLAuIAIAAQAHABAEgFQADgEAAgKIAAg3QAAgKgDgEQgEgFgHABIgIAAg");
	this.shape_8.setTransform(25,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,20,120,25.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbBAIAAh/IAWAAIAABsIAhAAIAAATg");
	this.shape.setTransform(83.4,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHAAAKIAABBQAAAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_1.setTransform(75,48.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHAAAKIAABBQAAAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_2.setTransform(66,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAMBAIAAg5IgXAAIAAA5IgVAAIAAh/IAVAAIAAA0IAXAAIAAg0IAVAAIAAB/g");
	this.shape_3.setTransform(57,48.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgEgEgEAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_4.setTransform(48,48.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgEgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgFgGgFgFIgNgKQgGgGgFgIQgFgIAAgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgEgDgDAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_5.setTransform(39.5,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,36,120,25.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AALBAIAAg5IgVAAIAAA5IgXAAIAAh/IAXAAIAAA0IAVAAIAAg0IAXAAIAAB/g");
	this.shape.setTransform(93.5,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKADgHQAEgIAHgEQAHgEALAAQAKAAAHAEQAHAFAFAIQADAIAAAKIAAAIIgVAAQAAgJgCgGQgBgFgDgCQgCgCgDAAQgEAAgDADQgDADAAAIIAABBQAAAGACAEQADADAFABQAGAAACgFQADgEAAgJIAAgNIgMAAIAAgQIAiAAIAABAIgKAAIgFgKQgEAGgGADQgFADgFAAQgOAAgIgJg");
	this.shape_1.setTransform(84.5,57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_2.setTransform(77.5,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAMBAIAAg5IgXAAIAAA5IgVAAIAAh/IAVAAIAAA0IAXAAIAAg0IAVAAIAAB/g");
	this.shape_3.setTransform(70.5,57.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAPBAIgDgcIgXAAIgDAcIgXAAIAZh/IAZAAIAZB/gAAIAQIgIg2IgIA2IAQAAg");
	this.shape_4.setTransform(58,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AggBAIAAh/IAgAAQAQgBAIAKQAJAKAAAUIAAAxQAAAUgJAKQgIAJgQAAgAgLAuIAIAAQAHAAAEgEQADgEABgKIAAg3QgBgKgDgEQgEgFgHABIgIAAg");
	this.shape_5.setTransform(45.5,57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBAIgFgcIgVAAIgFAcIgVAAIAYh/IAaAAIAXB/gAAIAQIgIg2IgIA2IAQAAg");
	this.shape_6.setTransform(37,57.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AALBAIAAg5IgWAAIAAA5IgVAAIAAh/IAVAAIAAA0IAWAAIAAg0IAWAAIAAB/g");
	this.shape_7.setTransform(28.5,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,45,120,25.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_eli();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwEgIAAo/IBhAAIAAI/g");
	this.shape.setTransform(93.3,61.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ah+EgIAAo/IBjAAIAAHpICaAAIAABWg");
	this.shape_1.setTransform(68.2,61.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AiJEgIAAo/IEIAAIAABWIilAAIAACVIB+AAIAABUIh+AAIAACqICwAAIAABWg");
	this.shape_2.setTransform(34.3,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11,120,100);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_logo();
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15,120,98);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();
	this.instance.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(386));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(62.5,350,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).to({alpha:1},13).wait(14));

	// Layer 5
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(250,420.8,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(271).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(27));

	// Layer 4
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(250,382.5,1,1,0,0,0,80,24.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(267).to({_off:false},0).to({x:80,alpha:1},13).wait(72).to({alpha:0},7).wait(27));

	// Layer 25
	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(27));

	// Layer 24
	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(27));

	// Layer 23
	this.instance_6 = new lib.Symbol19();
	this.instance_6.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(27));

	// Layer 6
	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(27));

	// Layer 22
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(135));

	// Layer 21
	this.instance_9 = new lib.Symbol16();
	this.instance_9.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(146).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(135));

	// Layer 19
	this.instance_10 = new lib.Symbol15();
	this.instance_10.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(135));

	// Layer 18
	this.instance_11 = new lib.Symbol13();
	this.instance_11.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(137).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(135));

	// Layer 3
	this.instance_12 = new lib.Symbol12();
	this.instance_12.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(133).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(135));

	// Layer 10
	this.instance_13 = new lib.Symbol26();
	this.instance_13.setTransform(240,432.4,1,1,0,0,0,80,16.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(253));

	// Layer 7
	this.instance_14 = new lib.Symbol25();
	this.instance_14.setTransform(240,400.4,1,1,0,0,0,80,16.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(42).to({_off:false},0).to({x:80,alpha:1},13).wait(71).to({alpha:0},7).wait(253));

	// Layer 17
	this.instance_15 = new lib.Symbol11();
	this.instance_15.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(74).to({alpha:0},7).wait(253));

	// Layer 16
	this.instance_16 = new lib.Symbol10();
	this.instance_16.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(78).to({alpha:0},7).wait(253));

	// Layer 9
	this.instance_17 = new lib.Symbol9();
	this.instance_17.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(83).to({alpha:0},7).wait(253));

	// Layer 14
	this.instance_18 = new lib.Symbol4();
	this.instance_18.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(87).to({alpha:0},7).wait(253));

	// Layer 2
	this.instance_19 = new lib.Symbol2();
	this.instance_19.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(360));

	// Layer 1
	this.instance_20 = new lib.Symbol24();
	this.instance_20.setTransform(80,95,1,1,0,0,0,80,95);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(359).to({_off:false},0).to({alpha:1},13).wait(14));

	// Layer 13
	this.instance_21 = new lib.Symbol5();
	this.instance_21.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(13).to({_off:false},0).to({alpha:1},13).wait(360));

	// Layer 12
	this.instance_22 = new lib.Symbol1();
	this.instance_22.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({alpha:1},13).wait(373));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;