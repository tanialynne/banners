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
		{src:"_160_eli.jpg", id:"_160_eli"},
		{src:"_160_eli2.jpg", id:"_160_eli2"},
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


(lib._160_eli = function() {
	this.initialize(img._160_eli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160_eli2 = function() {
	this.initialize(img._160_eli2);
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
	this.shape.setTransform(152,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBRQgKgGgGgKQgEgLgBgNIAcgFQABAOAFAGQAEAHAGgBQAIAAAEgDQAFgEAAgIQAAgLgGgHQgGgJgHgGIgSgOQgJgJgGgKQgGgLgBgPQABgVALgKQANgMATAAQANABAJAEQAIAGAFAKQAFAJACAMIgcADQgBgKgFgFQgFgEgFAAQgGAAgDAFQgEAEAAAIQAAAJAGAHQAGAIAHAIIASANQAJAJAGALQAGAKAAAOQABAOgHAKQgFAKgLAFQgLAGgMgBQgOAAgJgHg");
	this.shape_1.setTransform(143.9,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_2.setTransform(134,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgXBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFANgBQAPAAAKAHQAKAGAFALQAEAKAAAOIAAAMIgdAAIAAgNQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAFAAAJIAABWQAAAKAEAFQADAFAHgBQAIABAEgFQADgEAAgJIAAgVIAdAAIAAAUQAAANgEAKQgFAKgKAGQgKAFgPAAQgNAAgKgFg");
	this.shape_3.setTransform(123.2,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_4.setTransform(112.3,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_5.setTransform(100.9,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXBRQgKgGgGgKQgEgLgBgNIAcgFQABAOAFAGQAFAHAFgBQAIAAAEgDQAFgEAAgIQAAgLgGgHQgGgJgHgGIgSgOQgJgJgGgKQgGgLAAgPQgBgVAMgKQAMgMAUAAQANABAIAEQAKAGAFAKQAEAJACAMIgdADQAAgKgFgFQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAHQAFAIAHAIIASANQAJAJAGALQAGAKABAOQAAAOgHAKQgFAKgLAFQgKAGgNgBQgNAAgKgHg");
	this.shape_6.setTransform(89.3,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFAOgBQAPABAKAFQAKAHAFAKQAFAKAAAMIAABXQAAANgFAKQgFAKgKAGQgKAFgPAAQgOAAgKgFgAgLg5QgDAFAAAJIAABWQAAAKADAFQADAFAIgBQAIABAEgFQADgFAAgKIAAhWQAAgJgDgFQgEgFgIAAQgIAAgDAFg");
	this.shape_7.setTransform(78,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_8.setTransform(66.3,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_9.setTransform(54.3,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_10.setTransform(34.4,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_11.setTransform(21.6,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIg0AAIAAAtIAnAAIAAAXIgnAAIAABNg");
	this.shape_12.setTransform(11,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,32.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape.setTransform(130.7,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_1.setTransform(114,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_2.setTransform(103.3,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_3.setTransform(95.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_4.setTransform(83.8,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgtBWIAAirIAsAAQAWAAALAMQALALAAAXQAAAHgCAIQgCAHgFAFQgFAGgHADQAMADAGAKQAGAJAAARQAAAPgEALQgFALgKAHQgKAGgRAAgAgQA+IANAAQAKAAAFgHQAFgHAAgNQAAgNgGgHQgGgHgLAAIgKAAgAgQgOIALAAQAHAAAFgGQAGgFAAgLQAAgMgFgGQgEgHgIAAIgMAAg");
	this.shape_5.setTransform(64.8,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgYBTQgKgGgFgKQgFgKAAgNIAAhXQAAgMAFgKQAFgKAKgHQAKgFAOgBQAPABAKAFQAKAHAFAKQAFAKAAAMIAABXQAAANgFAKQgFAKgKAGQgKAFgPAAQgOAAgKgFgAgLg5QgDAFgBAJIAABWQABAKADAFQADAFAIgBQAJABADgFQADgFABgKIAAhWQgBgJgDgFQgDgFgJAAQgIAAgDAFg");
	this.shape_6.setTransform(52.7,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgZBXIAAgaIAHAAQAIABAEgEQADgDAAgIIAAiFIAdAAIAACIQgBALgDAJQgEAIgJAFQgJAEgPAAg");
	this.shape_7.setTransform(42.7,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_8.setTransform(29.3,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,32.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_eli2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(135.7,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgiB0QgNgJgIgPQgHgQgBgSIAngGQACASAHAKQAGAJAJAAQALAAAGgGQAHgGABgLQgBgOgIgLQgJgLgLgLQgNgKgMgKQgNgLgJgPQgIgQgBgVQABgdAQgQQARgPAegBQARABANAHQAMAIAHANQAHANACASIgnAEQgCgPgHgGQgGgGgIAAQgIAAgGAGQgFAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAIAPQAJAPAAAUQABAUgJAOQgJAOgOAHQgQAIgRAAQgUgBgOgJg");
	this.shape_1.setTransform(124.3,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag1B6IAAjzIAqAAIAADPIBBAAIAAAkg");
	this.shape_2.setTransform(110.9,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgjB1QgOgIgHgPQgHgOAAgRIAAh9QAAgRAHgOQAHgPAOgIQAOgIAVgBQAVABAPAIQAOAIAHAPQAHAOAAARIAAB9QAAARgHAOQgHAPgOAIQgPAIgVABQgVgBgOgIgAgQhRQgFAHAAANIAAB7QAAANAFAHQAFAHALAAQAMAAAFgHQAFgHAAgNIAAh7QAAgNgFgHQgFgHgMAAQgLAAgFAHg");
	this.shape_3.setTransform(95.1,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgjB1QgOgIgHgPQgHgOAAgRIAAh9QAAgRAHgOQAHgPAOgIQAOgIAVgBQAVABAPAIQAOAIAHAPQAHAOAAARIAAB9QAAARgHAOQgHAPgOAIQgPAIgVABQgVgBgOgIgAgQhRQgFAHAAANIAAB7QAAANAFAHQAFAHALAAQAMAAAFgHQAFgHAAgNIAAh7QAAgNgFgHQgFgHgMAAQgLAAgFAHg");
	this.shape_4.setTransform(78.1,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAWB6IAAhsIgrAAIAABsIgqAAIAAjzIAqAAIAABkIArAAIAAhkIAqAAIAADzg");
	this.shape_5.setTransform(61.1,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgiB1QgOgIgHgPQgHgOAAgRIAAh9QAAgRAHgOQAHgPAOgIQAPgIATgBQAWABAOAJQAOAJAGAPQAHAPAAATIAAASIgqAAIAAgTQAAgQgGgHQgGgHgJAAQgKAAgFAHQgFAHAAANIAAB7QAAANAFAHQAFAHAKAAQAMAAAFgHQAEgGAAgMIAAgeIAqAAIAAAdQAAARgHAOQgGAPgOAIQgOAIgWABQgTgBgPgIg");
	this.shape_6.setTransform(44,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AghB0QgPgJgHgPQgIgQgBgSIApgGQABASAHAKQAHAJAIAAQALAAAHgGQAGgGAAgLQAAgOgJgLQgIgLgLgLQgMgKgNgKQgNgLgIgPQgJgQAAgVQAAgdARgQQAQgPAegBQARABAMAHQANAIAHANQAHANADASIgpAEQgCgPgGgGQgGgGgIAAQgJAAgEAGQgGAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAJAPQAIAPABAUQAAAUgJAOQgIAOgQAHQgOAIgTAAQgTgBgNgJg");
	this.shape_7.setTransform(28,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,44.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape.setTransform(116.2,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAeB6IgIg2IgsAAIgHA2IgpAAIAtjzIAzAAIAtDzgAARAfIgRhnIAAAAIgQBnIAhAAg");
	this.shape_1.setTransform(99.8,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_2.setTransform(85.1,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgTB6IAAhmIg0iNIArAAIAcBdIAAAAIAdhdIAqAAIgyCNIAABmg");
	this.shape_3.setTransform(69.6,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoAPIAAgdIBRAAIAAAdg");
	this.shape_4.setTransform(56.4,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAGB6IAAg7IhIAAIAAgfIBGiZIAoAAIAACZIAXAAIAAAfIgXAAIAAA7gAgiAgIAoAAIAAheIAAAAg");
	this.shape_5.setTransform(42.9,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,160,44.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUB6IAAjPIgoAAIAAgkIB5AAIAAAkIgoAAIAADPg");
	this.shape.setTransform(103.6,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgiB0QgOgJgHgPQgHgQgCgSIAogGQACASAHAKQAGAJAJAAQALAAAGgGQAHgGAAgLQAAgOgIgLQgJgLgLgLIgZgUQgNgLgJgPQgIgQgBgVQABgdAQgQQASgPAdgBQARABAMAHQANAIAHANQAHANACASIgnAEQgCgPgHgGQgHgGgHAAQgJAAgEAGQgGAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAIAPQAJAPAAAUQABAUgJAOQgJAOgOAHQgQAIgSAAQgTgBgOgJg");
	this.shape_1.setTransform(89.3,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_2.setTransform(74.7,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhBB6IAAjzIA/AAQAfAAAQAQQAQARAAAgQAAAKgDALQgDAKgHAIQgGAIgKAEQAQAFAJAOQAJAOAAAXQAAAVgHAQQgGAPgPAKQgOAJgYAAgAgXBYIASAAQAPAAAHgKQAHgKAAgSQAAgTgIgKQgIgJgRAAIgOAAgAgXgVIAQAAQAKAAAIgIQAIgIAAgPQAAgRgHgJQgHgJgMAAIgQAAg");
	this.shape_3.setTransform(58.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,160,44.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgiB0QgOgJgHgPQgIgQgBgSIApgGQABASAHAKQAGAJAJAAQALAAAGgGQAHgGAAgLQAAgOgJgLQgIgLgLgLQgNgKgMgKQgNgLgIgPQgJgQAAgVQAAgdAQgQQASgPAdgBQARABAMAHQANAIAHANQAHANACASIgnAEQgCgPgHgGQgHgGgHAAQgJAAgEAGQgGAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAJAPQAIAPABAUQAAAUgJAOQgJAOgOAHQgPAIgTAAQgTgBgOgJg");
	this.shape.setTransform(138.5,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPAuIAAhbIAfAAIAABbg");
	this.shape_1.setTransform(127.2,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAeB6IgIg2IgsAAIgHA2IgpAAIAujzIAyAAIAtDzgAARAfIgRhnIAAAAIgPBnIAgAAg");
	this.shape_2.setTransform(115.9,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgUB6IAAjzIApAAIAADzg");
	this.shape_3.setTransform(103.6,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAcB6Ig0iXIgBAAIAACXIgmAAIAAjzIAnAAIAxCKIABAAIAAiKIAmAAIAADzg");
	this.shape_4.setTransform(90.4,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgUB6IAAjzIApAAIAADzg");
	this.shape_5.setTransform(77.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgvBtQgOgRgBgdIAAh9QAAgRAGgOQAIgPANgIQAOgIAVgBQATABAOAJQAOAJAHAPQAHAPAAATIAAAPIgoAAQAAgSgCgKQgDgKgFgEQgGgEgGAAQgIAAgFAGQgGAGAAAPIAAB8QAAAMAFAHQAEAHALAAQAKAAAGgIQAFgIAAgSIAAgYIgZAAIAAgfIBDAAIAAB6IgVAAIgHgSQgKALgJAFQgJAGgMAAQgagBgQgQg");
	this.shape_6.setTransform(63.9,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_7.setTransform(47.3,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgUB6IAAjzIApAAIAADzg");
	this.shape_8.setTransform(33.7,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgTB6Ig0jzIAqAAIAdCoIAAAAIAfioIApAAIgzDzg");
	this.shape_9.setTransform(21.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,44.8);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQANgHAQAAQASAAAMAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgMAHgSAAQgQAAgNgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape.setTransform(139.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBlAAIAAAdIgjAAIAACqg");
	this.shape_1.setTransform(127.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_2.setTransform(109.1,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_3.setTransform(95.9,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgvBkIAAjHIBfAAIAAAdIg8AAIAAA1IAsAAIAAAcIgsAAIAABZg");
	this.shape_4.setTransform(83.5,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAFgFABgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQAAgYAOgNQAOgNAYAAQAOAAALAGQAJAGAGALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFABAKQAAAKAGAJQAIAJAIAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgNAGQgLAGgPAAQgQAAgMgHg");
	this.shape_5.setTransform(70.6,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAXBkIgrh8IAAAAIAAB8IggAAIAAjHIAgAAIApBxIABAAIAAhxIAeAAIAADHg");
	this.shape_6.setTransform(57.5,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_7.setTransform(44.2,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_8.setTransform(31.3,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBlAAIAAAdIgiAAIAACqg");
	this.shape_9.setTransform(18.6,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag0BkIAAjHIA0AAQAZgBAOAPQAOAQgBAfIAABNQABAfgOAQQgOAPgZgBgAgRBIIAMAAQALAAAHgGQAFgHAAgPIAAhXQAAgQgFgGQgHgGgLAAIgMAAg");
	this.shape.setTransform(138.4,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_1.setTransform(125.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg5AAIAAA1IArAAIAAAcIgrAAIAAA8IA9AAIAAAdg");
	this.shape_2.setTransform(113,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgdIBkAAIAAAdIgjAAIAACqg");
	this.shape_3.setTransform(101,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAWBkIgqh8IgBAAIAAB8IgeAAIAAjHIAgAAIAoBxIAAAAIAAhxIAgAAIAADHg");
	this.shape_4.setTransform(88.6,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_5.setTransform(75.3,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_6.setTransform(62.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_7.setTransform(48.9,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AglBYQgOgOgBgaIAAiVIAjAAIAACXQAAALAFAFQAEAGAIAAQAJAAAFgGQAEgFAAgLIAAiXIAjAAIAACVQgBAagOAOQgOAOgYAAQgYAAgNgOg");
	this.shape_8.setTransform(35.7,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_9.setTransform(21.6,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(150.7,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_1.setTransform(138,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWCJIg5kRIAuAAIAhC9IAAAAIAii9IAvAAIg6ERg");
	this.shape_2.setTransform(121.2,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag0B4QgSgTgBgjIAAjLIAvAAIAADNQABAPAFAHQAHAIALgBQANABAFgIQAHgHAAgPIAAjNIAuAAIAADLQABAjgUATQgSATgiAAQggAAgUgTg");
	this.shape_3.setTransform(103.3,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgIgQAAgUIAAiLQAAgUAIgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAHAQAAAUIAACLQAAAUgHAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgGAIAAAPIAACJQAAAPAGAIQAFAHANAAQANAAAGgHQAFgIAAgPIAAiJQAAgPgFgIQgGgHgNAAQgNAAgFAHg");
	this.shape_4.setTransform(75.8,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_5.setTransform(58.9,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAeCJIg5iqIgBAAIAACqIgqAAIAAkRIArAAIA4CbIAAAAIAAibIArAAIAAERg");
	this.shape_6.setTransform(33.6,-7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgnCDQgQgJgIgQQgIgQABgUIAAiLQgBgUAIgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAIAQAAAUIAACLQAAAUgIAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgFAIAAAPIAACJQAAAPAFAIQAFAHANAAQAOAAAFgHQAGgIgBgPIAAiJQABgPgGgIQgFgHgOAAQgNAAgFAHg");
	this.shape_7.setTransform(14.6,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,160,49.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAfCJIg7iqIAAAAIAACqIgrAAIAAkRIAsAAIA4CbIAAAAIAAibIAqAAIAAERg");
	this.shape.setTransform(128.6,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_1.setTransform(111.1,-13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAZCJIAAh6IgxAAIAAB6IgvAAIAAkRIAvAAIAABwIAxAAIAAhwIAvAAIAAERg");
	this.shape_2.setTransform(92.7,-13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_3.setTransform(75.8,-13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_4.setTransform(41,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-38,160,49.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIgiAAIAACqg");
	this.shape.setTransform(139.9,-21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_1.setTransform(127.8,-21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_2.setTransform(114.2,-21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIgiAAIAACqg");
	this.shape_3.setTransform(102.6,-21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgbBgQgMgIgGgNQgHgMAAgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgGgKgJgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQABgYAOgNQANgNAYAAQAOAAAKAGQAKAGAHALQAFALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFgBAKQAAAKAIAJQAGAJAJAIIAVARQAKAKAIAMQAHAMAAARQgBAQgGAMQgHALgMAGQgNAGgOAAQgQAAgLgHg");
	this.shape_4.setTransform(90.8,-21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaBlIgaiEIAAAAIgWCEIgdAAIgmjJIAgAAIAVB/IABAAIAXh/IAaAAIAYB/IAAAAIAUh/IAgAAIgjDJg");
	this.shape_5.setTransform(68.8,-21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_6.setTransform(53.9,-21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAgAAIAADJg");
	this.shape_7.setTransform(40.3,-21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_8.setTransform(20.9,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,160,37.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape.setTransform(116.1,-21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQAMgHARAAQARAAANAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgNAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_1.setTransform(101.8,-21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgvBlIAAjJIBfAAIAAAfIg8AAIAAAzIAsAAIAAAdIgsAAIAABag");
	this.shape_2.setTransform(88.9,-21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_3.setTransform(69,-21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_4.setTransform(55,-21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBlAAIAAAfIgiAAIAACqg");
	this.shape_5.setTransform(42.7,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,160,37.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQAMgHARAAQARAAAMAHQAMAHAGAMQAGALAAAPIAABmQAAAOgGAMQgGAMgMAGQgMAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape.setTransform(132.9,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQBlIAAirIghAAIAAgeIBkAAIAAAeIgjAAIAACrg");
	this.shape_1.setTransform(120.5,48.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBlIAAirIghAAIAAgeIBjAAIAAAeIgiAAIAACrg");
	this.shape_2.setTransform(103.4,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAXBlIgrh9IAAAAIAAB9IggAAIAAjJIAhAAIAoByIAAAAIAAhyIAgAAIAADJg");
	this.shape_3.setTransform(90.9,48.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAfg");
	this.shape_4.setTransform(78,48.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaBlIgaiEIAAAAIgWCEIgdAAIgmjJIAgAAIAVB/IABAAIAXh/IAaAAIAYB/IAAAAIAUh/IAgAAIgjDJg");
	this.shape_5.setTransform(61.8,48.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAfg");
	this.shape_6.setTransform(40.7,48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBlIAAhaIgjAAIAABaIgjAAIAAjJIAjAAIAABSIAjAAIAAhSIAiAAIAADJg");
	this.shape_7.setTransform(27.1,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,160,37.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgOA+IAKAAQAJAAAGgGQAEgFAAgNIAAhKQAAgOgEgFQgGgGgJAAIgKAAg");
	this.shape.setTransform(128,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_1.setTransform(116,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_2.setTransform(104.6,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgwAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_3.setTransform(88.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_4.setTransform(78.3,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_5.setTransform(66.9,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgNAEgJQAFgLAKgFQAKgHAOAAQANABAKAGQAKAHAFAKQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAEgBALIAABXQAAAIADAGQAEAEAHAAQAHAAAEgFQAEgFAAgOIAAgQIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIAAQgSAAgLgLg");
	this.shape_6.setTransform(54.6,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_7.setTransform(43.6,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgOA+IAKAAQAJAAAGgGQAEgFAAgNIAAhKQAAgOgEgFQgGgGgJAAIgKAAg");
	this.shape_8.setTransform(32,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,160,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape.setTransform(109.8,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgEAEAAALIAABVQAAAKAEAFQADAEAIABQAJgBADgEQADgFABgKIAAhVQgBgLgDgEQgDgFgJAAQgIAAgDAFg");
	this.shape_1.setTransform(98.7,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBALIAABVQABAKADAFQADAEAIABQAIgBAEgEQAEgFAAgKIAAhVQAAgLgEgEQgEgFgIAAQgIAAgDAFg");
	this.shape_2.setTransform(86.7,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_3.setTransform(74.7,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_4.setTransform(62.6,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgXBSQgKgHgGgKQgEgMgCgNIAdgDQABAMAFAHQAEAGAGABQAIAAAFgFQAEgDAAgIQAAgKgGgJQgGgIgHgHIgSgNQgJgJgGgKQgGgLAAgOQAAgWALgLQAMgLAVABQAMAAAIAEQAJAGAGAJQAFAKABANIgdADQgBgMgEgEQgFgEgFAAQgGAAgDAEQgEAFAAAIQAAAJAHAHQAFAIAHAHIASAOQAJAIAGAMQAGAKABAOQgBAOgFAKQgHAKgKAFQgLAGgMAAQgOgBgJgGg");
	this.shape_5.setTransform(51.3,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,22,160,32.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBWIAAhNIgfAAIAABNIgdAAIAAirIAdAAIAABHIAfAAIAAhHIAdAAIAACrg");
	this.shape.setTransform(123.3,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AggBNQgLgMAAgVIAAhXQAAgMAEgLQAFgJAKgHQAKgFAOAAQANgBAKAHQAKAGAFALQAFAKAAAOIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAFgBAKIAABXQAAAJADAFQAEAEAHAAQAHABAEgGQAEgFAAgNIAAgRIgRAAIAAgWIAuAAIAABWIgOAAIgFgNQgHAIgHAEQgGADgIAAQgSAAgLgLg");
	this.shape_1.setTransform(111.2,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgNBWIAAirIAcAAIAACrg");
	this.shape_2.setTransform(102,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_3.setTransform(92.7,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_4.setTransform(76,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgsBWIAAirIAsAAQAVAAAMANQAMANAAAaIAABDQAAAagMANQgMANgVAAgAgPA+IALAAQAKAAAEgGQAFgFABgNIAAhKQgBgOgFgFQgEgGgKAAIgLAAg");
	this.shape_5.setTransform(59.3,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_6.setTransform(48,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAPBWIAAhNIgeAAIAABNIgdAAIAAirIAdAAIAABHIAeAAIAAhHIAeAAIAACrg");
	this.shape_7.setTransform(36.7,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,28,160,32.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_eli();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag8FpIAArRIB6AAIAALRg");
	this.shape.setTransform(121.7,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AieFpIAArRIB8AAIAAJlIDBAAIAABsg");
	this.shape_1.setTransform(90.2,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AisFpIAArRIFKAAIAABsIjOAAIAAC7ICeAAIAABpIieAAIAADVIDdAAIAABsg");
	this.shape_2.setTransform(47.8,38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24,160,124);


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


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(386));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,330,1,1,0,0,0,53.5,17.5);
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
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;