(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 336,
	height: 260,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300_border.png", id:"_300_border"},
		{src:"_336_bg.jpg", id:"_336_bg"},
		{src:"_336_footer.png", id:"_336_footer"},
		{src:"_336_logo.png", id:"_336_logo"},
		{src:"_336_tim.jpg", id:"_336_tim"}
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



(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._336_bg = function() {
	this.initialize(img._336_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,260);


(lib._336_footer = function() {
	this.initialize(img._336_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,20);


(lib._336_logo = function() {
	this.initialize(img._336_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,71);


(lib._336_tim = function() {
	this.initialize(img._336_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,201);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AghAiIAAhDIBDAAIAABDg");
	this.shape.setTransform(179.1,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag7DHQgXgRgNgZQgMgbgCgfIBEgKQACAfAMARQALAPAQAAQATAAALgKQAMgJAAgTQgBgZgOgTQgPgTgTgSQgWgRgWgSQgWgUgOgaQgPgZgBglQABgyAdgaQAdgbAzAAQAeAAAUAMQAWANAMAXQAMAXAEAeIhFAIQgDgbgKgKQgMgKgNAAQgPAAgJALQgKAKAAAUQABAVAPASQAOATAUARQAVATAWASQAWAUAOAaQAPAaAAAhQAAAjgOAYQgOAYgaAMQgaAMgfAAQgiAAgYgPg");
	this.shape_1.setTransform(159.7,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag7DHQgXgRgNgZQgMgbgDgfIBFgKQACAfAMARQAMAPAPAAQATAAALgKQAMgJAAgTQAAgZgPgTQgPgTgTgSQgWgRgWgSQgVgUgPgaQgPgZgBglQABgyAdgaQAdgbAzAAQAeAAAUAMQAWANAMAXQAMAXAEAeIhFAIQgDgbgKgKQgMgKgNAAQgPAAgJALQgKAKABAUQAAAVAPASQAOATAUARQAVATAWASQAVAUAPAaQAPAaAAAhQAAAjgOAYQgPAYgZAMQgZAMghAAQghAAgYgPg");
	this.shape_2.setTransform(133.9,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhjDRIAAmhIC/AAIAAA+Ih3AAIAABtIBbAAIAAA8IhbAAIAAB8IB/AAIAAA+g");
	this.shape_3.setTransform(109,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhbDRIAAmhIBIAAIAAFjIBvAAIAAA+g");
	this.shape_4.setTransform(85.3,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AArDRIgxitIgSABIgTABIAACrIhIAAIAAmhIBkAAQA7AAAfAdQAfAdAABCQgBAhgHAWQgHAVgMAKQgMAMgMAGIA9C9gAgrgUIAaAAQAaABAMgOQANgOAAglQAAglgNgOQgMgOgaABIgaAAg");
	this.shape_5.setTransform(46.2,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag9DIQgYgOgMgZQgMgXAAgfIAAjVQAAgeAMgZQAMgXAYgPQAZgOAkAAQAlAAAYAOQAZAPAMAXQAMAZAAAeIAADVQAAAfgMAXQgMAZgZAOQgYAOglAAQgkAAgZgOgAgdiLQgIALAAAYIAADRQAAAYAIALQAJAMAUAAQAVAAAJgMQAIgLAAgYIAAjRQAAgYgIgLQgJgMgVAAQgUAAgJAMg");
	this.shape_6.setTransform(16.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,187.8,73.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgqCQQgRgMgKgTQgIgTgCgXIAygHQABAXAJAMQAIALALAAQAOAAAHgHQAJgHAAgOQgBgRgKgOQgKgOgOgNIgfgZQgQgOgKgTQgLgTAAgaQgBgkAWgTQAUgUAlAAQAVAAAQAJQAPAKAJAQQAJARADAVIgzAGQgCgTgHgIQgJgHgJAAQgKAAgHAIQgHAIAAAOQABAPAKANQALAOANAMQAQANAQANQAPAPALATQAKASABAZQgBAZgJARQgLARgTAJQgSAJgWAAQgZAAgRgLg");
	this.shape.setTransform(162.8,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAfCXIgjh9IgNABIgOAAIAAB8Ig0AAIAAktIBJAAQAqAAAWAUQAXAVAAAwQgBAZgFAPQgFAQgJAGQgIAJgJAEIAsCJgAgfgOIATAAQATABAJgLQAIgKABgbQgBgagIgKQgJgLgTABIgTAAg");
	this.shape_1.setTransform(143.6,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_2.setTransform(123.3,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_3.setTransform(105.1,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgYCXIAAh+Ig/ivIA0AAIAjBzIABAAIAjhzIA0AAIg/CvIAAB+g");
	this.shape_4.setTransform(86,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgrCRQgSgLgIgRQgKgSABgVIAAiaQgBgWAKgSQAIgRASgKQARgLAaAAQAbAAASALQARAKAJARQAIASABAWIAACaQgBAVgIASQgJARgRALQgSAKgbAAQgaAAgRgKgAgUhlQgHAJABARIAACXQgBARAHAJQAGAIAOAAQAPAAAGgIQAGgJAAgRIAAiXQAAgRgGgJQgGgIgPAAQgOAAgGAIg");
	this.shape_5.setTransform(56.9,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAmCXIgljGIgBAAIghDGIgsAAIg5ktIAwAAIAgC/IABAAIAii/IApAAIAjC/IABAAIAdi/IAwAAIg1Etg");
	this.shape_6.setTransform(32,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgYCXIAAkAIgzAAIAAgtICXAAIAAAtIgyAAIAAEAg");
	this.shape_7.setTransform(10.2,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,174.5,54.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIABAAIAAhhIAaAAIAACrg");
	this.shape.setTransform(119,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgNBWIAAirIAcAAIAACrg");
	this.shape_1.setTransform(109.7,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_2.setTransform(95.2,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_3.setTransform(83.9,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_4.setTransform(73.3,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_5.setTransform(61.9,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_6.setTransform(50.3,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgXBTQgKgHgFgKQgFgKAAgMIAAhXQAAgMAFgLQAFgKAKgGQAKgFANAAQAPgBAKAHQAKAGAFALQAEALAAANIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAFAHAAQAIAAAEgFQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFAKgKAHQgKAFgPAAQgNAAgKgFg");
	this.shape_7.setTransform(38.9,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_8.setTransform(22.3,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-7,112.2,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(158.9,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgNBWIAAhIIgkhjIAeAAIATBCIAAAAIAUhCIAeAAIgkBjIAABIg");
	this.shape_1.setTransform(150.9,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_2.setTransform(140.9,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgNBWIAAirIAcAAIAACrg");
	this.shape_3.setTransform(133,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_4.setTransform(123.9,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AggBLQgMgMAAgWIAAiAIAdAAIAACCQAAAJAFAFQADAFAHAAQAIAAADgFQAFgFAAgJIAAiCIAdAAIAACAQAAAWgMAMQgMAMgVABQgUgBgMgMg");
	this.shape_5.setTransform(111.6,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFANAAQAPAAAKAGQAKAGAFALQAEALAAANIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAFAHAAQAIAAAEgFQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFAKgKAHQgKAFgPABQgNgBgKgFg");
	this.shape_6.setTransform(99.5,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_7.setTransform(88.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgXBSQgKgHgGgKQgEgMgBgNIAcgDQABANAFAGQAFAHAFAAQAIAAAEgFQAFgEAAgHQAAgLgGgHQgGgJgHgHIgSgNQgJgJgGgKQgGgLAAgOQgBgVAMgLQAMgMAUABQANAAAIAEQAKAGAFAJQAEAKACAMIgdAEQAAgMgFgEQgFgEgFAAQgFAAgEAEQgEAFAAAIQAAAJAHAHQAFAIAHAHIASAOQAJAJAGALQAGAKABAOQAAAOgHAKQgFAKgLAFQgKAGgNAAQgNgBgKgGg");
	this.shape_8.setTransform(77.6,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_9.setTransform(66.6,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_10.setTransform(55.3,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgtBWIAAirIAsAAQAWAAALAMQALALAAAXQAAAHgCAIQgCAHgFAFQgFAGgHADQAMADAGAKQAGAJAAARQAAAPgEALQgFALgKAHQgKAGgRAAgAgQA+IANAAQAKAAAFgHQAFgHAAgNQAAgNgGgHQgGgHgLAAIgKAAgAgQgOIALAAQAHAAAFgGQAGgFAAgLQAAgMgFgGQgEgHgIAAIgMAAg");
	this.shape_11.setTransform(43.8,10.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgNBWIAAhIIgkhjIAeAAIATBCIAAAAIAUhCIAeAAIgkBjIAABIg");
	this.shape_12.setTransform(32.3,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgXBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFANAAQAPAAAKAGQAKAGAFALQAEALAAANIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAFAHAAQAIAAAEgFQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFAKgKAHQgKAFgPABQgNgBgKgFg");
	this.shape_13.setTransform(20.9,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,-6,150.8,32.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag+DPQgagPgMgZQgNgZAAgfIAAjdQAAgfANgZQAMgZAagPQAZgPAlAAQAnAAAZAPQAZAPAMAZQANAZAAAfIAADdQAAAfgNAZQgMAZgZAPQgZAPgnAAQglAAgZgPgAgeiRQgIANAAAXIAADaQAAAZAIAMQAJALAVAAQAWAAAIgLQAKgMgBgZIAAjaQABgXgKgNQgIgMgWAAQgVAAgJAMg");
	this.shape.setTransform(50.3,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkDYIAAluIhIAAIAAhBIDZAAIAABBIhIAAIAAFug");
	this.shape_1.setTransform(23.6,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-8,57.5,76);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgtBWIAAirIAsAAQAWAAALAMQALALAAAXQAAAHgCAIQgCAHgFAFQgFAGgHADQAMADAGAKQAGAJAAARQAAAPgEALQgFALgKAHQgKAGgRAAgAgQA+IANAAQAKAAAFgHQAFgHAAgNQAAgNgGgHQgGgHgLAAIgKAAgAgQgOIALAAQAHAAAFgGQAGgFAAgLQAAgMgFgGQgEgHgIAAIgMAAg");
	this.shape.setTransform(170.1,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBALIAABVQABAKADAFQADAEAIABQAJgBADgEQADgFABgKIAAhVQgBgLgDgEQgDgFgJAAQgIAAgDAFg");
	this.shape_1.setTransform(158,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgZBYIAAgaIAHAAQAIgBAEgDQADgEAAgHIAAiGIAdAAIAACKQgBAKgDAJQgEAIgJAEQgJAFgPABg");
	this.shape_2.setTransform(148,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggBMQgLgLAAgVIAAhXQAAgNAEgKQAFgJAKgGQAKgHAOABQANAAAKAGQAKAHAFAKQAFALAAANIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAFgBAKIAABXQAAAJADAEQAEAGAHAAQAHgBAEgFQAEgGAAgNIAAgRIgRAAIAAgVIAuAAIAABWIgOAAIgFgNQgHAIgHADQgGAFgIAAQgSgBgLgMg");
	this.shape_3.setTransform(133.9,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_4.setTransform(122,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_5.setTransform(112.7,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAFgGQAEgFABgNIAAhKQgBgOgEgFQgFgGgKAAIgLAAg");
	this.shape_6.setTransform(103.3,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_7.setTransform(91.6,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_8.setTransform(80,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_9.setTransform(66.4,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_10.setTransform(53.6,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_11.setTransform(42.3,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_12.setTransform(30,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AggBLQgMgMAAgVIAAiBIAdAAIAACCQAAAJAFAFQADAEAHABQAIgBADgEQAFgFAAgJIAAiCIAdAAIAACBQAAAVgMAMQgMAMgVABQgUgBgMgMg");
	this.shape_13.setTransform(18,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-5,168.2,32.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIABAAIAAhhIAaAAIAACrg");
	this.shape.setTransform(137.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_1.setTransform(126.3,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape_2.setTransform(108.3,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYBTQgKgHgFgKQgFgKAAgMIAAhXQAAgNAFgKQAFgKAKgGQAKgFAOAAQAPAAAKAFQAKAGAFAKQAFAKAAANIAABXQAAAMgFAKQgFAKgKAHQgKAFgPABQgOgBgKgFgAgLg5QgEAEABALIAABVQgBAKAEAFQADAFAIAAQAIAAAEgFQAEgFgBgKIAAhVQABgLgEgEQgEgFgIAAQgIAAgDAFg");
	this.shape_3.setTransform(95,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_4.setTransform(83.3,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIg0AAIAAAtIAnAAIAAAXIgnAAIAABNg");
	this.shape_5.setTransform(72,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_6.setTransform(56.3,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_7.setTransform(45.7,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_8.setTransform(34.6,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_9.setTransform(20.8,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,-6,134.9,32.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABWDYIAAlQIgBAAIhEFQIgiAAIhDlQIgBAAIAAFQIhBAAIAAmvIBiAAIA0D7IAAAAIA1j7IBiAAIAAGvg");
	this.shape.setTransform(64.3,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkDYIAAmvIBIAAIAAGvg");
	this.shape_1.setTransform(37.7,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkDYIAAluIhIAAIAAhBIDZAAIAABBIhIAAIAAFug");
	this.shape_2.setTransform(17.6,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-7,80.9,76);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_tim();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,336,201);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,260);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAjBPIAAhvQAAgcgaABQgJAAgMAHQgNAHgJAKIAAByIgVAAIAAiaIAVAAIAAAVIABAAQAVgYAXAAQAUAAAMALQANALAAAYIAABvg");
	this.shape_2.setTransform(165.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgJBtIAAiaIATAAIAACagAgJhTIAAgZIATAAIAAAZg");
	this.shape_3.setTransform(152.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgeBIQgQgHgLgPIASgMQAQAYAaAAQARAAAIgIQAJgHAAgLQAAgLgKgHQgKgGgNgEIgZgIQgOgCgJgKQgIgJAAgPIAAgCQAAgUAOgKQAOgMAWAAIABAAQAOABAPAHQAPAIAIAMIgPANQgKgMgJgFQgJgFgKAAQgNAAgIAGQgHAHAAAKQAAAKAJAFQAJAGAMAEIAaAIQAOAEAJAJQAJALAAAPQAAAXgQALQgPAMgXAAQgRAAgRgIg");
	this.shape_4.setTransform(132.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgrBaIgDAQIgQAAQABgHAAgbIAAi0IAVAAIAABLIACAAQAVgSARAAQAMAAAJAFQALAEAKAJQAKAJAFAQQAHAPgBAVQABAXgHAQQgFAQgKAJQgKAJgLAEQgKAEgLAAQgWAAgVgTgAgogLIAABQQAMAMAJAFQAJAFAKAAQASAAAMgQQAMgQAAgeQAAg9gqAAQgUAAgUAVg");
	this.shape_5.setTransform(118.4,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgtA6QgSgXABgjQgBgiASgWQAQgYAdAAQAeAAARAYQARAWAAAiQAAAjgRAXQgRAWgeAAQgdAAgQgWgAgegtQgLARAAAcQAAAdALAQQAMARASAAQATAAALgRQAMgQAAgdQAAgcgMgRQgLgQgTAAQgSAAgMAQg");
	this.shape_6.setTransform(102,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgxBRIASgLQAMATATAAQAZAAAAggIAAilIAZAAIAACeQAAA7gyAAQgbAAgWgcg");
	this.shape_7.setTransform(86.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgHBjQgIgGAAgOIAAhxIgaAAIAAgSIAaAAIAAg0IATAAIAAA0IAkAAIAAASIgkAAIAABtQAAALASAAQAKAAAJgCIAAASQgHADgSAAQgQAAgHgGg");
	this.shape_8.setTransform(66.8,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AguBFQgNgLAAgUQAAgaAWgMQAWgOAygKIAAgIQAAgdggAAQgPAAgJAHQgKAIgEAJIgTgKQASggAmgBQAXAAAQAMQAPAMAAAYIAABMQAAATAEAPIgWAAIgDgWQgWAYgbAAQgTAAgNgLgAglAmQAAAKAIAHQAIAHAKAAQALAAAMgIQANgHAKgLIAAgoQhIAKAAAgg");
	this.shape_9.setTransform(54.3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgrA8QgTgVAAgnQAAgkARgVQARgXAcAAQAZAAARASQARASAAAjIAAANIhkAAQAAAZAOAQQANARASAAQAcAAAPgbIAQAJQgJARgOAKQgNAJgXAAQgbAAgUgUgAgcgwQgLANgBAWIBNAAQAAgWgKgNQgKgNgRAAQgRAAgLANg");
	this.shape_10.setTransform(39.6,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgjBPIAAiaIAWAAIAAAfIAAAAQAKgRAJgJQALgIATAAIAAAWQgUAAgLANQgLAMgHAZIAABVg");
	this.shape_11.setTransform(27.8,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("Ag5BSQgXgcAAg2QAAg1AXgdQAXgcAlAAQA8AAASBAIgXAEQgIgZgNgLQgOgLgTAAQgZAAgRAVQgSAVAAAvQAAAwASAVQARAVAZAAQAZAAAOgNQANgOAAgVIAAgSIgxAAIAAgUIBJAAIAABoIgUAAIAAgUIgBAAQgQAXgoAAQglAAgXgdg");
	this.shape_12.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,175.9,39.5);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_logo();
	this.instance.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,253,71);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,20);


// stage content:
(lib._336x260 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,1.12,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(196,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,278.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({y:251.5},11).wait(15));

	// Layer 6
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(253).to({_off:false},0).to({x:108.3,alpha:1},11).wait(32));

	// Layer 7
	this.instance_4 = new lib.Symbol12();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(247).to({_off:false},0).to({x:103,alpha:1},11).wait(38));

	// Layer 9
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(242).to({_off:false},0).to({x:77.7,alpha:1},11).wait(43));

	// Layer 5
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(367.8,45.4,1,1,0,0,0,61,14);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(141).to({_off:false},0).to({x:177.8},13).wait(77).to({alpha:0},11).wait(54));

	// Layer 4
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(353.9,23,1,1,0,0,0,47.1,14);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(132).to({_off:false},0).to({x:163.9},13).wait(86).to({alpha:0},11).wait(54));

	// Layer 15
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(87.4,-35.6,1,1,0,0,0,26.1,34.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({y:34.4},13).wait(94).to({alpha:0},11).wait(54));

	// Layer 3
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(373.5,45.4,1,1,0,0,0,70.5,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({x:193.5},13).wait(59).to({alpha:0},11).wait(173));

	// Layer 2
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(359.6,23,1,1,0,0,0,56.6,14);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({x:179.6},13).wait(65).to({alpha:0},11).wait(173));

	// Layer 14
	this.instance_11 = new lib.Symbol6();
	this.instance_11.setTransform(81.1,-35.6,1,1,0,0,0,36.6,34.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:34.4},13).wait(73).to({alpha:0},11).wait(173));

	// Layer 13
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(205).to({alpha:0},11).wait(54));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(283));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,130,336,260);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;