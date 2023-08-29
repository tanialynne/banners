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
		{src:"_300_arthur.jpg", id:"_300_arthur"},
		{src:"_300_bg.jpg", id:"_300_bg"},
		{src:"_300_border.png", id:"_300_border"},
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



(lib._300_arthur = function() {
	this.initialize(img._300_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib._300_bg = function() {
	this.initialize(img._300_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_footer = function() {
	this.initialize(img._300_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,23);


(lib._300_logo = function() {
	this.initialize(img._300_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,67);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(160.9,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag1CyQgUgOgMgYQgMgXgBgdIA9gIQACAcALAOQAKAOAOAAQARAAAKgIQAKgJABgRQgBgWgNgRQgNgRgSgQQgTgQgUgQQgTgRgNgYQgNgXgBggQAAgtAbgYQAZgYAuAAQAbAAASALQAUAMAKAVQAMAUADAbIg+AGQgCgXgKgKQgKgJgMABQgNAAgJAJQgIAKAAASQAAATANAQQANAQASAQQATAQATAQQAUATANAXQANAXABAeQgBAfgMAWQgNAVgXALQgXALgdAAQgdAAgWgOg");
	this.shape_1.setTransform(143.4,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag0CyQgWgOgLgYQgMgXgBgdIA9gIQADAcAKAOQAKAOAOAAQARAAAKgIQAKgJABgRQgBgWgOgRQgNgRgQgQQgUgQgUgQQgTgRgNgYQgNgXgBggQAAgtAagYQAagYAuAAQAbAAASALQAUAMALAVQALAUACAbIg8AGQgDgXgLgKQgKgJgLABQgOAAgIAJQgIAKAAASQABATANAQQANAQAQAQQAVAQATAQQATATANAXQAOAXAAAeQAAAfgNAWQgNAVgXALQgXALgdAAQgdAAgVgOg");
	this.shape_2.setTransform(120.3,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhZC7IAAl1ICrAAIAAA4IhqAAIAABhIBRAAIAAA2IhRAAIAABuIByAAIAAA4g");
	this.shape_3.setTransform(97.9,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhSC7IAAl1IBBAAIAAE9IBkAAIAAA4g");
	this.shape_4.setTransform(76.7,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAnC7IgsibIgQABIgSAAIAACaIhAAAIAAl1IBaAAQA1gBAbAaQAcAaAAA7QgBAfgGATQgGATgLAJQgKALgMAEIA3CqgAgngSIAYAAQAYABALgNQALgNgBghQABgggLgNQgLgNgYABIgYAAg");
	this.shape_5.setTransform(41.6,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag2CzQgWgNgKgVQgLgWAAgbIAAi/QAAgbALgWQAKgVAWgNQAWgNAgAAQAiAAAVANQAWANAKAVQAMAWAAAbIAAC/QAAAbgMAWQgKAVgWANQgVANgiAAQggAAgWgNgAgZh9QgIAKAAAVIAAC9QAAAVAIAKQAHAKASAAQATAAAIgKQAHgKAAgVIAAi9QAAgVgHgKQgIgKgTAAQgSAAgHAKg");
	this.shape_6.setTransform(15,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.9,66.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgmCCQgPgLgJgRQgIgRgBgUIAtgHQABAVAIAKQAHAKAKAAQAMAAAIgGQAHgGAAgNQAAgQgKgMQgJgNgMgLIgdgXQgOgNgKgRQgJgRgBgXQABghATgSQATgRAgAAQAUAAAOAIQAOAJAHAPQAJAPACATIgtAFQgCgRgHgHQgIgHgIABQgKAAgGAHQgGAHAAANQABANAJAMQAKAMAMAMIAcAXQAPANAJARQAKARAAAWQAAAXgJAQQgKAPgRAIQgQAIgUAAQgWAAgQgKg");
	this.shape.setTransform(147.5,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_1.setTransform(130.1,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_2.setTransform(111.7,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_3.setTransform(95.3,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIAAAAIAghpIAwAAIg5CfIAAByg");
	this.shape_4.setTransform(78.1,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgnCDQgQgJgIgQQgHgQAAgUIAAiLQAAgUAHgQQAIgPAQgKQAQgJAXAAQAYAAAQAJQAQAKAIAPQAHAQABAUIAACLQgBAUgHAQQgIAQgQAJQgQAJgYAAQgXAAgQgJgAgShbQgFAIgBAPIAACJQABAPAFAIQAGAHAMAAQANAAAGgHQAGgIAAgPIAAiJQAAgPgGgIQgGgHgNAAQgMAAgGAHg");
	this.shape_5.setTransform(51.7,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAjCJIgii0IgBAAIgeC0IgoAAIgzkRIAsAAIAdCtIAAAAIAfitIAlAAIAfCtIABAAIAaitIAsAAIgvERg");
	this.shape_6.setTransform(29.1,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_7.setTransform(9.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.2,49.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(150.4,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_1.setTransform(141.6,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_2.setTransform(129.6,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_3.setTransform(119,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_4.setTransform(104.3,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_5.setTransform(94.3,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape_6.setTransform(76.3,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_7.setTransform(63.7,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_8.setTransform(52.6,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AggBMQgLgLAAgVIAAhXQAAgNAEgKQAFgJAKgGQAKgHAOABQANAAAKAGQAKAHAFAKQAFALAAANIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAFgBAKIAABXQAAAJADAEQAEAGAHAAQAHgBAEgFQAEgGAAgNIAAgRIgRAAIAAgVIAuAAIAABWIgOAAIgFgNQgHAIgHADQgGAFgIAAQgSgBgLgMg");
	this.shape_9.setTransform(40.3,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBALIAABVQABAKADAFQADAEAIABQAJgBADgEQADgFABgKIAAhVQgBgLgDgEQgDgFgJAAQgIAAgDAFg");
	this.shape_10.setTransform(28.4,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_11.setTransform(16.6,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgvBWIAAirIArAAQAZAAANAMQAOAMAAAbQAAAcgOAKQgNALgZAAIgNAAIAABHgAgRgHIALAAQANAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgNAAIgLAAg");
	this.shape_12.setTransform(4.6,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgNBWIAAhIIgkhjIAeAAIATBCIAAAAIAUhCIAeAAIgkBjIAABIg");
	this.shape_13.setTransform(-12.3,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AggBMQgLgLAAgVIAAhXQAAgNAEgKQAFgJAKgGQAKgHAOABQANAAAKAGQAKAHAFAKQAFALAAANIAAALIgcAAQAAgNgCgHQgCgIgEgCQgDgDgEAAQgGAAgEAEQgDAFgBAKIAABXQAAAJADAEQAEAGAHAAQAHgBAEgFQAEgGAAgNIAAgRIgRAAIAAgVIAuAAIAABWIgOAAIgFgNQgHAIgHADQgGAFgIAAQgSgBgLgMg");
	this.shape_14.setTransform(-23.7,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEgBALIAABVQABAKADAFQADAEAIABQAJgBADgEQAEgFAAgKIAAhVQAAgLgEgEQgDgFgJAAQgIAAgDAFg");
	this.shape_15.setTransform(-35.6,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_16.setTransform(-45.9,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEAAALIAABVQAAAKADAFQADAEAIABQAIgBAEgEQADgFAAgKIAAhVQAAgLgDgEQgEgFgIAAQgIAAgDAFg");
	this.shape_17.setTransform(-57,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_18.setTransform(-69,20.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AAQBWIAAhNIgfAAIAABNIgdAAIAAirIAdAAIAABHIAfAAIAAhHIAdAAIAACrg");
	this.shape_19.setTransform(-81,20.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_20.setTransform(-93.1,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_21.setTransform(-104,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_22.setTransform(-114.3,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,4,276.3,32.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXBSQgKgHgFgKQgGgMgBgNIAdgDQABAMAFAHQAFAGAFABQAHAAAGgFQAEgDAAgJQAAgJgGgJQgGgIgHgHIgSgNQgJgJgGgKQgGgLgBgOQAAgWANgLQAMgLAUABQAMAAAJAEQAJAGAEAJQAGAKABANIgcADQgCgMgEgEQgFgEgFAAQgGAAgDAEQgEAFAAAIQAAAJAGAHQAHAIAGAHIASAOQAJAIAGAMQAGAKAAAOQAAAOgFAKQgHAKgKAFQgKAGgNAAQgNgBgKgGg");
	this.shape.setTransform(64.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_1.setTransform(53.2,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_2.setTransform(44,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_3.setTransform(34.7,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHAOABQAPgBAKAHQAKAGAFAJQAFAKAAANIAABXQAAAMgFAKQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgDAEAAALIAABVQAAAKADAFQADAEAIABQAIgBAEgEQADgFAAgKIAAhVQAAgLgDgEQgEgFgIAAQgIAAgDAFg");
	this.shape_4.setTransform(22.7,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_5.setTransform(10.9,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_6.setTransform(0,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgXBSQgKgFgFgLQgFgKAAgMIAAhXQAAgNAFgKQAFgJAKgGQAKgHANABQAPAAAKAGQAKAHAFAKQAEALAAANIAAANIgdAAIAAgOQAAgLgFgFQgEgFgGAAQgHAAgDAFQgEAEAAALIAABVQAAAKAEAFQADAEAHABQAIgBAEgEQADgFAAgIIAAgVIAdAAIAAAUQAAAMgEAKQgFALgKAFQgKAGgPABQgNgBgKgGg");
	this.shape_7.setTransform(-10.8,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_8.setTransform(-21.7,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_9.setTransform(-31.6,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_10.setTransform(-41.7,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_11.setTransform(-57.7,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAPBWIAAhNIgdAAIAABNIgeAAIAAirIAeAAIAABHIAdAAIAAhHIAeAAIAACrg");
	this.shape_12.setTransform(-69.3,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_13.setTransform(-80,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_14.setTransform(-95.4,11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_15.setTransform(-104,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgNBWIglirIAeAAIAUB2IAAAAIAVh2IAeAAIglCrg");
	this.shape_16.setTransform(-112.7,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-5,192.2,32.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AAZA6IAAhRQAAgUgSAAQgHAAgJAFQgJAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIAAAAQAQgSAQAAQAOAAAKAIQAJAIAAASIAABRg");
	this.shape.setTransform(99.2,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgGBQIAAhxIANAAIAABxgAgGg8IAAgTIANAAIAAATg");
	this.shape_1.setTransform(90.1,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgxA0QAAgIAFgFQAEgFAKgFQgGgCgEgFQgEgEAAgFQAAgFADgEQACgDADgBIAIgFQgQgMAAgUQAAgSAMgLQANgLASAAQAPAAAMAIQAMgJAMgBIAAAQQgLAAgGADQAHAJAAAOQAAARgMAMQgMAJgQAAQgJAAgKgBQgJABAAAIQAAAEACACQADACAEAAQAlAAAQAIQAQAHAAARQAAAOgNAIQgNAJgYAAQgxAAAAgcgAgbAnQgHAFAAAIQAAAHAHAEQAIADAUAAQAPAAAJgEQAKgEAAgIQAAgJgJgEQgJgEgTAAQgRAAgIAGgAgWg4QgHAHAAAMQAAAMAIAHQAIAIANAAQALAAAIgIQAHgHAAgLQAAgNgIgHQgHgHgMAAQgOAAgHAHg");
	this.shape_2.setTransform(74.8,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAaA6IAAhRQAAgUgUAAQgGAAgIAFQgKAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIABAAQAPgSAQAAQAPAAAIAIQAKAIAAASIAABRg");
	this.shape_3.setTransform(63.2,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgHBQIAAhxIAPAAIAABxgAgHg8IAAgTIAPAAIAAATg");
	this.shape_4.setTransform(54,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAaA6IAAhRQAAgUgTAAQgHAAgIAFQgKAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIAAAAQAQgSAQAAQAPAAAIAIQAKAIAAASIAABRg");
	this.shape_5.setTransform(44.8,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgHBQIAAhxIAPAAIAABxgAgHg8IAAgTIAPAAIAAATg");
	this.shape_6.setTransform(35.7,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_7.setTransform(26.9,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgGQAJgFANAAIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_8.setTransform(18.5,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgHBPIAAiOIgwAAIAAgPIBvAAIAAAPIgwAAIAACOg");
	this.shape_9.setTransform(8.1,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.6,30.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape.setTransform(97.7,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_1.setTransform(88.7,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_2.setTransform(79.9,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAcBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_3.setTransform(70.4,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgEgIgBgKIAAhJQABgKAEgIQADgJAJgFQAIgFAMAAQANAAAIAFQAIAFAEAJQAFAIAAAKIAABJQAAAKgFAIQgEAJgIAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(56,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_5.setTransform(47,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAg8IgehTIAZAAIAQA3IAAAAIAQg3IAaAAIgeBTIAAA8g");
	this.shape_6.setTransform(34.3,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgLBIIgeiPIAZAAIAQBjIAAAAIAShjIAYAAIgeCPg");
	this.shape_7.setTransform(25.4,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAaCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_8.setTransform(16.5,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape_9.setTransform(7,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.3,28);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape.setTransform(114.5,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAMBIIAAhAIgXAAIAABAIgZAAIAAiPIAZAAIAAA7IAXAAIAAg7IAZAAIAACPg");
	this.shape_1.setTransform(104.9,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_2.setTransform(95.9,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgJAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIAShTIAgAAIAACPg");
	this.shape_3.setTransform(81.5,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgDgIgBgKIAAhJQABgKADgIQAFgJAIgFQAIgFAMAAQAMAAAJAFQAJAFADAJQAEAIAAAKIAABJQAAAKgEAIQgDAJgJAFQgJAFgMAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(70.4,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(60.6,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_6.setTransform(51.2,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_7.setTransform(38.1,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_8.setTransform(29.3,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_9.setTransform(20,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_10.setTransform(8.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,28);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAmC7IgribIgPABIgSAAIAACaIhBAAIAAl1IBbAAQA0gBAcAaQAbAaAAA7QAAAfgHATQgHATgKAJQgKALgLAEIA2CqgAgmgSIAWAAQAZABAKgNQAMgNAAghQAAgggMgNQgKgNgZABIgWAAg");
	this.shape.setTransform(136.9,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhHCkQgagZgBgxIAAkXIBBAAIAAEaQAAAUAIALQAJAKAQAAQARAAAIgKQAJgLAAgUIAAkaIBAAAIAAEXQAAAxgaAZQgaAaguAAQgtAAgagag");
	this.shape_1.setTransform(110.4,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAiC7IAAimIhDAAIAACmIhBAAIAAl1IBBAAIAACZIBDAAIAAiZIBAAAIAAF1g");
	this.shape_2.setTransform(84.4,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgfC7IAAk9Ig+AAIAAg4IC7AAIAAA4Ig+AAIAAE9g");
	this.shape_3.setTransform(61.2,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAnC7IgsibIgPABIgTAAIAACaIhAAAIAAl1IBbAAQA0gBAcAaQAbAaAAA7QgBAfgGATQgHATgKAJQgKALgMAEIA3CqgAgngSIAYAAQAXABAMgNQAKgNABghQgBgggKgNQgMgNgXABIgYAAg");
	this.shape_4.setTransform(38.7,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAuC7IgLhTIhFAAIgLBTIg/AAIBFl1IBOAAIBGF1gAAZAwIgZifIAAAAIgYCfIAxAAg");
	this.shape_5.setTransform(13.6,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.6,66.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_arthur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgHBPIAAidIAOAAIAACdg");
	this.shape.setTransform(181.1,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_1.setTransform(172.4,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgfArQgNgQAAgbQAAgaANgQQAMgQAUAAQAQAAAJAIQALAIAFAPIgOAFQgIgWgTAAQgNAAgIAMQgJAMAAAUQAAAVAJAMQAIAMANAAQAKAAAIgEQAGgFAHgMIANAGQgJAPgKAHQgJAHgQAAQgUAAgMgQg");
	this.shape_2.setTransform(161.5,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgHBQIAAhxIAPAAIAABxgAgHg8IAAgTIAPAAIAAATg");
	this.shape_3.setTransform(153,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAaA6IAAhRQAAgUgTAAQgHAAgIAFQgKAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIABAAQAPgSAQAAQAPAAAIAIQAKAIAAASIAABRg");
	this.shape_4.setTransform(143.8,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAaBPIAAhRQAAgUgUAAQgGAAgIAFQgKAGgGAHIAABTIgQAAIAAidIAQAAIAAA8IABAAQAPgSAQAAQAPABAIAHQAKAJAAARIAABRg");
	this.shape_5.setTransform(131.6,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgfArQgNgQAAgbQAAgaANgQQAMgQATAAQARAAAJAIQALAIAFAPIgPAFQgGgWgVAAQgMAAgIAMQgIAMAAAUQAAAVAIAMQAIAMAMAAQAMAAAGgEQAIgFAGgMIANAGQgKAPgJAHQgJAHgRAAQgTAAgMgQg");
	this.shape_6.setTransform(119.9,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_7.setTransform(109,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgHBPIAAiOIgwAAIAAgPIBvAAIAAAPIgwAAIAACOg");
	this.shape_8.setTransform(97.3,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgQBRQgTAAgPgNQgNgNAAgUQAAgaAjgUQgGgHgDgLQgFgLAAgJQAAgNAKgJQAKgJAQAAQAMAAAKAIQAJAIAAANQAAAHgDAGQgDAGgGAGIgKAKIgJAJQAJAUAYAaQAEgFAFgMQADgLADgLIAOACQgDANgEANQgFANgGAJQAFAFAJAEQAIAEAEAAIAAAQIgGAAQgFAAgJgFQgJgEgIgHQgQASgaAAIgBAAgAgoAPQgFAIAAAOQAAAOAJAHQAJAIANAAQARAAAOgNQgXgdgQgYQgMAHgGAIgAgTg9QgEAGgBAHQAAALAJARQAKgGAGgIQAHgIAAgJQAAgHgGgEQgCgFgGAAQgJAAgEAGg");
	this.shape_9.setTransform(77.3,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgGQAJgFANAAIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_10.setTransform(60,17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_11.setTransform(50.4,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_12.setTransform(39.4,17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgGQAJgFANAAIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_13.setTransform(30.7,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_14.setTransform(20.8,17.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AACBRQgaAAgQgVQgRgUAAgoQAAglAQgVQAQgWAbAAQArAAAKAuIgPAFQgGgSgJgJQgJgJgQAAQgRAAgLARQgLARAAAfQAAAhAMAQQALARAUAAQAQAAAJgKQAJgLAEgQIAQACQgMAygrAAIgBAAg");
	this.shape_15.setTransform(8.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.4,30.1);


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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(187,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(277).to({_off:false},0).to({y:238.5},11).wait(15));

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
	this.instance_12.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(207).to({alpha:0},10).wait(60));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;