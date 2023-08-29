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
		{src:"_160_bg.jpg", id:"_160_bg"},
		{src:"_160_border.png", id:"_160_border"},
		{src:"_160_btn.png", id:"_160_btn"},
		{src:"_160_elissa.jpg", id:"_160_elissa"},
		{src:"_160_elissa2.jpg", id:"_160_elissa2"},
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


(lib._160_elissa = function() {
	this.initialize(img._160_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160_elissa2 = function() {
	this.initialize(img._160_elissa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160_logo = function() {
	this.initialize(img._160_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,114);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(123.3,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBRQgKgGgGgLQgEgKgCgNIAdgFQABANAFAHQAFAGAFAAQAIAAAEgDQAFgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLAAgPQgBgVAMgLQAMgKAVgBQAMAAAIAGQAJAFAGAJQAEAKACANIgdACQAAgLgFgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAIQAFAHAHAHIASAOQAJAJAGAKQAGALABAOQgBAOgFAKQgHAKgKAFQgLAFgMABQgOgBgJgHg");
	this.shape_1.setTransform(115.3,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_2.setTransform(105,-3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgNAEgJQAFgLAKgFQAKgHAOAAQANABAKAGQAKAHAFAKQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAIADAGQAEAEAHAAQAHAAAEgFQAEgFAAgOIAAgQIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIABQgSgBgLgLg");
	this.shape_3.setTransform(93.3,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_4.setTransform(82.3,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_5.setTransform(72.5,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_6.setTransform(63.1,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAIAAAEgEQAEgFAAgKIAAhWQAAgKgEgEQgEgFgIAAQgIAAgDAFg");
	this.shape_7.setTransform(52,-3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgXBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHANAAQAPABAKAGQAKAHAFAKQAEAKAAAOIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAAKIAABWQAAAKAEAFQADAEAHAAQAIAAAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEALQgFAJgKAGQgKAGgPABQgNgBgKgGg");
	this.shape_8.setTransform(39.9,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,160,32.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXBRQgKgGgFgLQgGgKgBgNIAdgFQABANAFAHQAFAGAFAAQAHAAAGgDQAEgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLgBgPQAAgVANgLQAMgKATgBQANAAAJAGQAIAFAFAJQAFAKACANIgcACQgCgLgEgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAGAIQAHAHAGAHIASAOQAJAJAGAKQAGALAAAOQAAAOgFAKQgHAKgKAFQgLAFgMABQgNgBgKgHg");
	this.shape.setTransform(144.6,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AggBMQgMgMAAgWIAAiBIAdAAIAACBQAAAKAFAFQAEAEAGAAQAIAAADgEQAFgFAAgKIAAiBIAdAAIAACBQAAAWgMAMQgMALgVABQgUgBgMgLg");
	this.shape_1.setTransform(133.3,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAIAAAEgEQAEgFAAgKIAAhWQAAgKgEgEQgEgFgIAAQgIAAgDAFg");
	this.shape_2.setTransform(121.3,-3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_3.setTransform(112,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgNAEgJQAFgLAKgFQAKgHAOAAQANABAKAGQAKAHAFAKQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAIADAGQAEAEAHAAQAHAAAEgFQAEgFAAgOIAAgQIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIABQgSgBgLgLg");
	this.shape_4.setTransform(102.6,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgNBWIAAirIAcAAIAACrg");
	this.shape_5.setTransform(93.4,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_6.setTransform(85.3,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgXBRQgKgGgFgLQgGgKAAgNIAcgFQABANAFAHQAFAGAFAAQAHAAAGgDQAEgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLgBgPQAAgVANgLQAMgKATgBQANAAAJAGQAIAFAFAJQAFAKACANIgcACQgCgLgEgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAGAIQAHAHAGAHIASAOQAJAJAGAKQAGALAAAOQAAAOgFAKQgHAKgKAFQgLAFgMABQgNgBgKgHg");
	this.shape_7.setTransform(75.3,-3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_8.setTransform(65,-3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_9.setTransform(53.6,-3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_10.setTransform(41.6,-3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_11.setTransform(25.3,-3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_12.setTransform(15.3,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,160,32.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_elissa2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(129.8,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_1.setTransform(120.8,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_2.setTransform(109.3,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag1BlIAAjJIA0AAQAZAAANAOQANAOAAAaQAAAIgCAJQgDAJgFAGQgGAHgIADQAOAEAGALQAIALAAAUQAAARgFANQgGANgLAIQgMAHgUABgAgTBIIAPAAQAMAAAGgIQAFgIAAgPQABgQgHgIQgHgHgNAAIgMAAgAgTgRIANAAQAIAAAGgGQAHgHAAgMQAAgOgFgIQgGgHgKAAIgNAAg");
	this.shape_3.setTransform(96.5,58.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_4.setTransform(83.1,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgmBYQgOgOABgaIAAiVIAiAAIAACXQAAALAEAFQAFAGAIAAQAJAAAEgGQAFgFAAgLIAAiXIAjAAIAACVQAAAagPAOQgNAOgZAAQgYAAgOgOg");
	this.shape_5.setTransform(69.9,59);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_6.setTransform(58,58.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_7.setTransform(45.8,58.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgQBlIgqjJIAiAAIAYCLIAAAAIAZiLIAiAAIgqDJg");
	this.shape_8.setTransform(33.3,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,160,37.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQBlIAAhVIgqh0IAjAAIAXBOIAAAAIAYhOIAjAAIgqB0IAABVg");
	this.shape.setTransform(134.5,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_1.setTransform(123.3,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag1BlIAAjJIAzAAQAaAAANAOQANAOAAAaQAAAIgDAJQgCAJgGAGQgEAHgJADQANAEAHALQAIALAAAUQAAARgGANQgEANgNAIQgMAHgTABgAgSBIIAOAAQAMAAAFgIQAHgIAAgPQgBgQgGgIQgHgHgNAAIgLAAgAgSgRIAMAAQAIAAAHgGQAGgHABgMQAAgOgGgIQgGgHgKAAIgMAAg");
	this.shape_2.setTransform(110.5,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_3.setTransform(99.5,58.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgzBlIAAjJIAzAAQAZABANAPQAOAPABAeIAABPQgBAegOAQQgNAPgZAAgAgRBIIAMAAQAMAAAFgGQAGgGAAgRIAAhWQAAgQgGgGQgFgHgMABIgMAAg");
	this.shape_4.setTransform(88.6,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg5AAIAAAzIArAAIAAAdIgrAAIAAA7IA9AAIAAAfg");
	this.shape_5.setTransform(75.7,58.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_6.setTransform(62.4,58.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_7.setTransform(48,58.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgfAAIAAjJIAhAAIAoByIAAAAIAAhyIAgAAIAADJg");
	this.shape_8.setTransform(34.1,58.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgQBlIAAjJIAhAAIAADJg");
	this.shape_9.setTransform(23.2,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,160,37.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(144.6,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_1.setTransform(135.6,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_2.setTransform(124.1,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag1BlIAAjJIA0AAQAZAAANAOQANAOAAAaQAAAIgDAJQgCAJgFAGQgGAHgIADQAOAEAGALQAIALAAAUQAAARgFANQgGANgLAIQgMAHgUABgAgSBIIAOAAQAMAAAGgIQAFgIAAgPQABgQgHgIQgHgHgNAAIgLAAgAgSgRIAMAAQAIAAAGgGQAHgHABgMQgBgOgFgIQgGgHgKAAIgMAAg");
	this.shape_3.setTransform(111.3,58.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_4.setTransform(97.9,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgzBlIAAjJIAzAAQAZABAOAPQANAPAAAeIAABPQAAAegNAQQgOAPgZAAgAgRBIIAMAAQAMAAAFgGQAGgGAAgRIAAhWQAAgQgGgGQgFgHgMABIgMAAg");
	this.shape_5.setTransform(84.7,58.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_6.setTransform(71,58.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQANgHAQAAQASAAAMAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgMAHgSAAQgQAAgNgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_7.setTransform(56.7,58.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgvBlIAAjJIBfAAIAAAfIg8AAIAAAzIAsAAIAAAdIgsAAIAABag");
	this.shape_8.setTransform(43.8,58.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgvBlIAAjJIBfAAIAAAfIg9AAIAAAzIAtAAIAAAdIgtAAIAABag");
	this.shape_9.setTransform(31.3,58.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_10.setTransform(18.5,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,160,37.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQBlIAAhVIgqh0IAjAAIAXBOIAAAAIAYhOIAjAAIgqB0IAABVg");
	this.shape.setTransform(131.3,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_1.setTransform(120.2,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_2.setTransform(108.3,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAoBlIAAidIgBAAIgfCdIgPAAIgfidIgBAAIAACdIgeAAIAAjJIAtAAIAYB0IAAAAIAZh0IAtAAIAADJg");
	this.shape_3.setTransform(93.3,58.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_4.setTransform(78.8,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_5.setTransform(65.6,58.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIghAAIAACqg");
	this.shape_6.setTransform(52.8,58.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAYBlIgYhKIAAAAIgXBKIgiAAIAohoIglhhIAiAAIAUBAIAAAAIAThAIAiAAIgjBhIAoBog");
	this.shape_7.setTransform(41.1,58.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_8.setTransform(29,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,160,37.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgSATIAAgkIAlAAIAAAkg");
	this.shape.setTransform(144,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag2BzIAAjlIBpAAIAAAjIhBAAIAAA7IAxAAIAAAgIgxAAIAABFIBFAAIAAAig");
	this.shape_1.setTransform(133.7,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag2BzIAAjlIBpAAIAAAjIhBAAIAAA7IAxAAIAAAgIgxAAIAABFIBFAAIAAAig");
	this.shape_2.setTransform(119.5,-15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAXBzIgahfIgJAAIgLABIAABeIgoAAIAAjlIA4AAQAfAAARAQQARAQAAAkQAAATgEAMQgEALgHAFQgGAHgHADIAiBogAgXgKIAOAAQAOAAAHgIQAGgHABgVQgBgUgGgIQgHgHgOAAIgOAAg");
	this.shape_3.setTransform(104.4,-15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag2BzIAAjlIBtAAIAAAjIhFAAIAAA7IAzAAIAAAgIgzAAIAABng");
	this.shape_4.setTransform(89.3,-15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgmAOIAAgbIBNAAIAAAbg");
	this.shape_5.setTransform(76.5,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgTBzIAAjCIgmAAIAAgjIBzAAIAAAjIgnAAIAADCg");
	this.shape_6.setTransform(64.9,-15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("Ag9BzIAAjlIA7AAQAeAAAPAPQAOARAAAdQAAAKgDAKQgCAJgHAIQgFAIgKAEQAPAEAIANQAJANAAAWQAAAUgGAPQgGAOgOAJQgOAJgWAAgAgVBTIAQAAQAPgBAGgIQAHgKAAgRQAAgSgIgJQgHgIgQAAIgNAAgAgVgUIAOAAQAKAAAHgHQAHgHABgPQAAgQgHgIQgGgJgLAAIgPAAg");
	this.shape_7.setTransform(50.9,-15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag2BzIAAjlIBoAAIAAAjIhAAAIAAA7IAxAAIAAAgIgxAAIAABFIBFAAIAAAig");
	this.shape_8.setTransform(36,-15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag8BzIAAjlIA8AAQAdAAAQARQAPARABAkIAABZQgBAkgPARQgQARgdAAgAgUBTIAOAAQAOAAAGgIQAHgHgBgSIAAhjQABgSgHgIQgGgGgOgBIgOAAg");
	this.shape_9.setTransform(20.5,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37,160,42.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag8BzIAAjlIA8AAQAdAAAQARQAPARABAkIAABZQgBAjgPASQgQARgdAAgAgTBSIANAAQAOAAAHgGQAGgIgBgSIAAhjQABgSgGgHQgHgIgOAAIgNAAg");
	this.shape.setTransform(139.5,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag2BzIAAjlIBpAAIAAAiIhBAAIAAA8IAxAAIAAAhIgxAAIAABDIBFAAIAAAjg");
	this.shape_1.setTransform(124.8,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgTBzIAAjDIgmAAIAAgiIBzAAIAAAiIgnAAIAADDg");
	this.shape_2.setTransform(111.1,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAcBzIgHgzIgpAAIgHAzIgnAAIArjlIAvAAIArDlgAAPAdIgPhhIAAAAIgPBhIAeAAg");
	this.shape_3.setTransform(97.8,-18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgrBlQgQgQAAgeIAAiqIAnAAIAACsQAAAMAGAHQAFAGAJAAQALAAAEgGQAFgHABgMIAAisIAnAAIAACqQAAAegQAQQgQAQgcAAQgbAAgQgQg");
	this.shape_4.setTransform(82.7,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("Ag7BzIAAjlIA6AAQAdAAARARQAPARAAAkIAABZQAAAjgPASQgRARgdAAgAgUBSIAOAAQAOAAAGgGQAHgIAAgSIAAhjQAAgSgHgHQgGgIgOAAIgOAAg");
	this.shape_5.setTransform(66.7,-18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAcBzIgHgzIgpAAIgHAzIgnAAIArjlIAvAAIArDlgAAPAdIgPhhIAAAAIgPBhIAeAAg");
	this.shape_6.setTransform(51.6,-18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAYBzIgbhfIgJAAIgLABIAABeIgoAAIAAjlIA4AAQAgAAAQAQQARAQAAAkQAAATgEAMQgEALgGAFQgHAHgHADIAiBogAgXgKIAOAAQAOAAAGgIQAIgHAAgVQAAgUgIgIQgGgHgOAAIgOAAg");
	this.shape_7.setTransform(36.8,-18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgsBnQgOgQgBgcIAAh1QAAgQAHgOQAGgNANgIQANgIAUAAQASAAANAIQAOAJAGAPQAHANAAASIAAAPIgnAAQAAgRgCgKQgCgJgFgEQgFgEgGABQgHgBgGAFQgEAHAAAOIAAB0QAAAMADAGQAFAHAKAAQAKAAAFgHQAFgIgBgSIAAgWIgWAAIAAgdIA/AAIAABzIgUAAIgHgSQgIALgJAFQgKAFgLAAQgYAAgPgPg");
	this.shape_8.setTransform(20.4,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,160,42.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgoBPIAAidIAoAAQATAAAMAMQAKAMAAAYIAAA9QAAAYgKAMQgMAMgTAAgAgNA5IAJAAQAJAAAFgGQAEgFAAgMIAAhDQAAgNgEgEQgFgGgJAAIgJAAg");
	this.shape.setTransform(121.6,-19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AARBPIghhiIAABiIgYAAIAAidIAZAAIAfBZIAAhZIAaAAIAACdg");
	this.shape_1.setTransform(110.6,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_2.setTransform(100.2,-19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgdBFQgLgKAAgVIAAh1IAbAAIAAB2QAAAJADAEQAEAEAGAAQAHAAAEgEQADgEAAgJIAAh2IAbAAIAAB1QAAAVgLAKQgLALgTAAQgSAAgLgLg");
	this.shape_3.setTransform(84.9,-19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgpBPIAAidIApAAQAUAAALAMQAKAMABAYIAAA9QgBAYgKAMQgLAMgUAAgAgNA5IAKAAQAIAAAEgGQAFgFAAgMIAAhDQAAgNgFgEQgEgGgIAAIgKAAg");
	this.shape_4.setTransform(73.9,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgWBLQgJgFgFgJQgEgJgBgMIAAhQQABgLAEgJQAFgJAJgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAJAAALIAABQQAAAMgFAJQgFAJgJAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAEAAAJIAABPQAAAIADAFQADAEAHAAQAHAAAEgEQADgFAAgIIAAhPQAAgJgDgEQgEgEgHgBQgHABgDAEg");
	this.shape_5.setTransform(62.9,-19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgWBLQgKgFgEgJQgFgJABgMIAAhQQgBgLAFgJQAEgJAKgGQAJgFANAAQAOAAAJAFQAKAGAEAJQAEAJABALIAABQQgBAMgEAJQgEAJgKAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAEAAAJIAABPQAAAIADAFQAEAEAGAAQAIAAADgEQADgFAAgIIAAhPQAAgJgDgEQgDgEgIgBQgGABgEAEg");
	this.shape_6.setTransform(47,-19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_7.setTransform(37.2,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,160,30.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgpBPIAAidIApAAQAUAAAKAMQALAMAAAYIAAA9QAAAZgLALQgKAMgUAAgAgNA4IAJAAQAJABAFgFQAEgGAAgLIAAhEQAAgNgEgFQgFgEgJAAIgJAAg");
	this.shape.setTransform(130.7,-16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_1.setTransform(120.5,-16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJABAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_2.setTransform(110.1,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJABAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_3.setTransform(99.1,-16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_4.setTransform(88.8,-16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAWIgiAAIAABGg");
	this.shape_5.setTransform(79,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgEgKgCgMIAagDQABALAFAHQAEAFAFAAQAHABAEgEQAFgEAAgHQgBgJgFgHQgGgIgFgHIgRgMQgJgHgFgKQgGgKABgOQgBgSAMgLQALgKARAAQALAAAJAFQAIAFAEAJQAFAIACALIgaADQgBgKgFgDQgEgEgFgBQgFAAgDAFQgEAEABAHQgBAJAGAGQAFAHAHAHIAQAMQAIAIAGAKQAFAJABANQAAANgGAKQgFAJgKAEQgKAFgLAAQgMAAgJgGg");
	this.shape_6.setTransform(69,-16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBPIghhhIAABhIgZAAIAAidIAZAAIAgBZIAAhZIAYAAIAACdg");
	this.shape_7.setTransform(58.7,-16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_8.setTransform(48.3,-16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJABAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_9.setTransform(38.1,-16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_10.setTransform(28.1,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,160,30.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgMAaIALgaIgKAAIAAgZIAYAAIAAAZIgOAag");
	this.shape.setTransform(141.6,63.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_1.setTransform(133.6,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_2.setTransform(122.6,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgbAAIAACFg");
	this.shape_3.setTransform(112.9,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_4.setTransform(99.1,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgEgKgBgMIAagDQAAAMAFAGQAEAFAFAAQAHABAFgEQADgEAAgHQABgJgGgHQgFgIgHgHIgQgMQgIgHgGgKQgFgKgBgOQABgSAKgLQALgKATAAQALAAAIAFQAIAFAEAJQAFAIACALIgbADQgBgKgEgDQgEgEgFgBQgEAAgEAFQgDAEAAAHQAAAJAFAGQAGAHAFAHIARAMQAJAIAFAKQAFAJAAANQAAANgEAKQgGAJgKAEQgJAFgMAAQgMAAgJgGg");
	this.shape_5.setTransform(89.1,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgWBLQgJgFgFgJQgFgJAAgMIAAhQQAAgKAFgKQAFgJAJgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAKAAAKIAABQQAAAMgFAJQgFAJgJAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAFAAAIIAABPQAAAJADAEQADAFAHgBQAIABADgFQADgEAAgJIAAhPQAAgIgDgFQgDgFgIAAQgHAAgDAFg");
	this.shape_6.setTransform(78.8,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOBPIAAhGIgbAAIAABGIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAbAAIAACdg");
	this.shape_7.setTransform(67.8,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_8.setTransform(56.7,55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_9.setTransform(41.7,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAOBPIAAhGIgbAAIAABGIgbAAIAAidIAbAAIAABBIAbAAIAAhBIAbAAIAACdg");
	this.shape_10.setTransform(31.1,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgEgKgBgMIAagDQAAAMAFAGQAEAFAFAAQAHABAFgEQADgEAAgHQABgJgGgHQgFgIgHgHIgQgMQgIgHgGgKQgFgKgBgOQABgSAKgLQALgKATAAQALAAAIAFQAIAFAEAJQAFAIACALIgbADQgBgKgEgDQgEgEgFgBQgEAAgEAFQgDAEAAAHQAAAJAFAGQAGAHAFAHIARAMQAJAIAFAKQAFAJAAANQAAANgEAKQgGAJgKAEQgJAFgMAAQgMAAgJgGg");
	this.shape_11.setTransform(20.7,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,160,30.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_elissa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


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


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAGgFAAgNIAAhKQAAgOgGgFQgEgGgKAAIgLAAg");
	this.shape.setTransform(140,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_1.setTransform(128.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_2.setTransform(118.6,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_3.setTransform(108.2,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_4.setTransform(96.9,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgJAAgNIAAhXQAAgMAFgLQAFgJAKgGQAKgHANAAQAPABAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAAKIAABWQAAAKAEAFQADAEAHABQAIgBAEgEQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAJQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_5.setTransform(85.2,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgJAAgNIAAhXQAAgMAFgLQAFgJAKgGQAKgHANAAQAPABAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAAKIAABWQAAAKAEAFQADAEAHABQAIgBAEgEQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAJQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_6.setTransform(73.2,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_7.setTransform(62,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgXBRQgKgGgFgLQgGgLAAgNIAcgEQABANAFAHQAFAGAFABQAHAAAFgFQAFgDAAgJQAAgJgGgJQgGgHgHgIIgSgNQgJgIgGgLQgGgLgBgOQABgWAMgLQALgLAUAAQANAAAJAGQAIAFAFAJQAGAKABANIgcACQgBgLgFgEQgFgEgFAAQgFAAgEAEQgEAFAAAIQAAAJAGAIQAHAHAGAHIASAOQAJAIAGALQAGALAAAOQABAOgHAKQgFAKgLAFQgLAFgMABQgOgBgJgHg");
	this.shape_8.setTransform(45.9,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_9.setTransform(35.3,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_10.setTransform(21.8,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,160,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAwDCIgMhWIhHAAIgMBWIhBAAIBImDIBRAAIBIGDgAAbAyIgbimIAAAAIgZCmIA0AAg");
	this.shape.setTransform(138.5,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag2C4QgWgOgMgZQgMgYgCgdIBAgKQACAeALAPQALAOAOAAQASAAAKgJQALgJAAgRQgBgXgNgSQgOgSgSgQQgUgRgUgQQgUgSgOgYQgOgZAAghQAAgvAbgZQAbgZAvAAQAcAAAUAMQATAMAMAWQALAVAEAbIhAAIQgDgZgKgKQgLgJgMAAQgOAAgJAKQgIAKAAATQAAATAOARQANARASARQAVAQAUARQAUATANAYQAOAYABAgQgBAggNAWQgNAWgYAMQgYAMgdAAQgfgBgWgPg");
	this.shape_1.setTransform(114.3,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag2C4QgWgOgMgZQgMgYgCgdIBAgKQACAeALAPQALAOAOAAQASAAAKgJQALgJAAgRQgBgXgNgSQgOgSgSgQQgUgRgUgQQgUgSgOgYQgOgZAAghQAAgvAbgZQAbgZAvAAQAcAAAUAMQATAMAMAWQALAVAEAbIhAAIQgDgZgKgKQgLgJgMAAQgOAAgJAKQgIAKAAATQAAATAOARQANARASARQAVAQAUARQAUATANAYQAOAYABAgQgBAggNAWQgNAWgYAMQgYAMgdAAQgfgBgWgPg");
	this.shape_2.setTransform(90.3,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggDCIAAiiIhRjhIBEAAIAtCUIABAAIAtiUIBEAAIhRDhIAACig");
	this.shape_3.setTransform(66.5,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhUDCIAAmDIBCAAIAAFJIBnAAIAAA6g");
	this.shape_4.setTransform(45.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AhcDCIAAmDICxAAIAAA6IhuAAIAABkIBUAAIAAA5IhUAAIAAByIB2AAIAAA6g");
	this.shape_5.setTransform(22.1,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,160,68.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape.setTransform(124.6,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBPIAAidIAoAAQAXAAAMALQAMALAAAZQAAAZgMAJQgMALgXAAIgMAAIAABBgAgPgHIAKAAQALAAAGgEQAFgGAAgOQAAgOgFgGQgGgEgLAAIgKAAg");
	this.shape_1.setTransform(114.4,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgdBHQgKgMgBgSIAAhQQAAgMAFgJQAEgJAJgFQAJgGANAAQAMAAAJAGQAJAGAFAJQAEAKAAANIAAAJIgaAAQAAgLgBgHQgCgGgDgDQgEgCgDAAQgFAAgEADQgDAEAAAKIAABQQAAAHADAFQADAFAGAAQAHgBADgFQAEgFgBgMIAAgPIgPAAIAAgUIArAAIAABPIgNAAIgGgMQgFAIgHADQgGADgHAAQgQAAgKgKg");
	this.shape_2.setTransform(103.1,-5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgiBPIAAidIAbAAIAACFIApAAIAAAYg");
	this.shape_3.setTransform(89,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWBMQgJgGgFgJQgFgJAAgLIAAhQQAAgMAFgJQAFgJAJgFQAJgGANAAQAOAAAJAGQAJAFAFAJQAFAJAAAMIAABQQAAALgFAJQgFAJgJAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAKIAABOQAAAIADAFQADAFAHAAQAIAAADgFQADgFAAgIIAAhOQAAgKgDgEQgDgFgIABQgHgBgDAFg");
	this.shape_4.setTransform(78.8,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgWBMQgKgGgEgJQgEgJgBgLIAAhQQABgMAEgJQAEgJAKgFQAJgGANAAQAOAAAJAGQAKAFAEAJQAFAJgBAMIAABQQABALgFAJQgEAJgKAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAKIAABOQAAAIADAFQADAFAHAAQAHAAAEgFQADgFAAgIIAAhOQAAgKgDgEQgEgFgHABQgHgBgDAFg");
	this.shape_5.setTransform(67.8,-5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgbAAIAAidIAbAAIAABBIAbAAIAAhBIAbAAIAACdg");
	this.shape_6.setTransform(56.8,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVBMQgKgGgEgJQgFgJAAgLIAAhQQAAgMAFgJQAEgJAKgFQAJgGAMAAQAOAAAJAGQAJAGAEAJQAFAKAAANIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGABQgGgBgDAFQgDAEAAAKIAABOQAAAIADAFQADAFAGAAQAIAAADgFQADgEgBgHIAAgUIAcAAIAAATQAAALgFAJQgEAJgJAGQgJAFgOAAQgMAAgJgFg");
	this.shape_7.setTransform(45.7,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKAAgMIAZgDQACALAEAHQAEAFAFABQAHAAAFgEQADgEAAgHQAAgJgFgIQgGgHgFgGIgRgNQgJgIgFgJQgFgKAAgOQgBgSALgLQALgKATAAQAKAAAJAFQAIAFAEAIQAFAJACALIgaAEQgCgLgEgEQgEgDgFAAQgFgBgDAFQgEAEABAHQgBAIAGAHQAFAHAHAHIAQAMQAIAIAGAKQAFAJABAOQAAAMgGAJQgFAJgKAGQgKAEgLAAQgMAAgJgGg");
	this.shape_8.setTransform(35.3,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21,160,30.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAcAAIAACdg");
	this.shape.setTransform(138.6,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgdBHQgKgMgBgSIAAhQQAAgMAFgJQAEgJAJgFQAJgGANAAQAMAAAJAGQAJAGAFAJQAEAKAAANIAAAJIgaAAQAAgLgBgHQgCgGgDgDQgEgCgDAAQgFAAgEADQgDAEAAAKIAABQQAAAHADAFQADAFAGAAQAHgBADgFQAEgFgBgMIAAgPIgPAAIAAgUIArAAIAABPIgNAAIgGgMQgFAIgHADQgGADgHAAQgQAAgKgKg");
	this.shape_1.setTransform(127.5,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_2.setTransform(119.1,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAbAAIAACdg");
	this.shape_3.setTransform(110.5,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRBNQgJgEgFgIQgFgIgBgNIAAgMIAZAAIAAAMQAAAIADADQADADAGABQAFAAADgFQAEgEAAgLIAAgkQAAgFgEgEQgDgDgFgBQgEABgEADQgDADgBAEIgWAAIABgWIABgZIABghIA/AAIAAAXIgqAAIgBAiIAAABQAFgHAFgBQADgCAGAAQAQAAAHALQAHALAAASIAAAWQAAAZgJAMQgJAMgUAAQgIAAgJgDg");
	this.shape_4.setTransform(95.3,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgMAMIAAgXIAYAAIAAAXg");
	this.shape_5.setTransform(87.9,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAEBPIAAgmIguAAIAAgVIAshiIAbAAIAABiIAOAAIAAAVIgOAAIAAAmgAgVAUIAZAAIAAg7IAAAAg");
	this.shape_6.setTransform(80.4,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_7.setTransform(65.9,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAbAAIAACdg");
	this.shape_8.setTransform(50.7,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_9.setTransform(40.9,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_10.setTransform(33.6,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAUBPIgUhnIAAAAIgRBnIgXAAIgeidIAaAAIAQBkIABAAIAShkIAUAAIATBkIAAAAIAPhkIAaAAIgcCdg");
	this.shape_11.setTransform(23,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6,160,30.4);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,330,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 25
	this.instance_2 = new lib.Symbol21();
	this.instance_2.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(22));

	// Layer 24
	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(22));

	// Layer 23
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(22));

	// Layer 6
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(22));

	// Layer 22
	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(130));

	// Layer 21
	this.instance_7 = new lib.Symbol16();
	this.instance_7.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(130));

	// Layer 19
	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(130));

	// Layer 18
	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(130));

	// Layer 3
	this.instance_10 = new lib.Symbol12();
	this.instance_10.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(130));

	// Layer 17
	this.instance_11 = new lib.Symbol26();
	this.instance_11.setTransform(240,432.4,1,1,0,0,0,80,16.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(248));

	// Layer 16
	this.instance_12 = new lib.Symbol25();
	this.instance_12.setTransform(240,400.4,1,1,0,0,0,80,16.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).to({x:80,alpha:1},13).wait(71).to({alpha:0},7).wait(248));

	// Layer 9
	this.instance_13 = new lib.Symbol11();
	this.instance_13.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(74).to({alpha:0},7).wait(248));

	// Layer 14
	this.instance_14 = new lib.Symbol10();
	this.instance_14.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(78).to({alpha:0},7).wait(248));

	// Layer 7
	this.instance_15 = new lib.Symbol9();
	this.instance_15.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(83).to({alpha:0},7).wait(248));

	// Layer 10
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(87).to({alpha:0},7).wait(248));

	// Layer 2
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(355));

	// Layer 1
	this.instance_18 = new lib.Symbol24();
	this.instance_18.setTransform(80,95,1,1,0,0,0,80,95);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(359).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 13
	this.instance_19 = new lib.Symbol5();
	this.instance_19.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({alpha:1},13).wait(355));

	// Layer 12
	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},13).wait(368));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;