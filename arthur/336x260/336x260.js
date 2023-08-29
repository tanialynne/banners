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
		{src:"_336_arthur.jpg", id:"_336_arthur"},
		{src:"_336_bg.jpg", id:"_336_bg"},
		{src:"_336_footer.png", id:"_336_footer"},
		{src:"_336_logo.png", id:"_336_logo"}
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


(lib._336_arthur = function() {
	this.initialize(img._336_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,201);


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
	this.shape.graphics.f("#004262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(190.2,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(180,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_2.setTransform(166,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQBlIAAiqIghAAIAAgfIBjAAIAAAfIghAAIAACqg");
	this.shape_3.setTransform(153.6,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBkAAIAAAfIghAAIAACqg");
	this.shape_4.setTransform(136.5,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_5.setTransform(124.8,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAoBlIAAidIgBAAIgfCdIgPAAIgfidIgBAAIAACdIgeAAIAAjJIAuAAIAXB0IAAAAIAYh0IAuAAIAADJg");
	this.shape_6.setTransform(103.9,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAZBlIgHgtIgkAAIgGAtIghAAIAljJIApAAIAlDJgAANAZIgNhUIAAAAIgMBUIAZAAg");
	this.shape_7.setTransform(89.1,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_8.setTransform(76.2,22.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_9.setTransform(61.8,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMAMgHQAMgHAQAAQASAAAMAHQALAHAGAMQAFALAAAPIAABmQAAAOgFAMQgGAMgLAGQgMAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_10.setTransform(47.9,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_11.setTransform(34.2,22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("Ag3BlIAAjIIAyAAQAegBAPAOQAQAOAAAgQAAAggQAMQgPAOgeAAIgPAAIAABTgAgUgJIANAAQAPABAHgHQAGgHAAgSQAAgRgGgHQgHgHgPAAIgNAAg");
	this.shape_12.setTransform(20.2,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgQBlIAAhVIgqh0IAjAAIAXBOIAAAAIAYhOIAjAAIgqB0IAABVg");
	this.shape_13.setTransform(0.5,22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_14.setTransform(-12.8,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgdBgQgLgGgGgMQgFgMAAgOIAAhmQAAgPAFgLQAGgMALgHQAMgHARAAQARAAAMAHQAMAHAGAMQAGALAAAPIAABmQAAAOgGAMQgGAMgMAGQgMAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_15.setTransform(-26.7,22.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgrBlIAAjJIAjAAIAACqIA0AAIAAAfg");
	this.shape_16.setTransform(-38.7,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQAMgHAQAAQASAAALAHQAMAHAGAMQAFALAAAPIAABmQAAAOgFAMQgGAMgMAGQgLAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_17.setTransform(-51.6,22.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAWBlIgqh9IgBAAIAAB9IgeAAIAAjJIAfAAIApByIAAAAIAAhyIAfAAIAADJg");
	this.shape_18.setTransform(-65.6,22.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AASBlIAAhaIgjAAIAABaIgjAAIAAjJIAjAAIAABSIAjAAIAAhSIAjAAIAADJg");
	this.shape_19.setTransform(-79.6,22.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_20.setTransform(-93.7,22.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgvBlIAAjJIBbAAIAAAfIg4AAIAAAzIArAAIAAAdIgrAAIAAA7IA8AAIAAAfg");
	this.shape_21.setTransform(-106.5,22.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgQBlIAAiqIgiAAIAAgfIBkAAIAAAfIghAAIAACqg");
	this.shape_22.setTransform(-118.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,4,321.5,37.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbBgQgMgIgGgNQgGgMgBgPIAhgFQABAPAGAIQAFAHAHAAQAJAAAFgEQAGgFAAgJQgBgMgGgJQgIgKgIgIQgKgIgLgIQgKgKgIgMQgGgNgBgRQAAgYAOgNQAOgNAYAAQAOAAAKAGQALAGAGALQAFALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFgBAKQAAAKAHAJQAIAJAIAIIAVARQALAKAGAMQAIAMAAARQgBAQgGAMQgHALgNAGQgLAGgPAAQgQAAgLgHg");
	this.shape.setTransform(90.1,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_1.setTransform(76.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQBkIAAjIIAhAAIAADIg");
	this.shape_2.setTransform(66.1,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAWBkIgqh8IgBAAIAAB8IgeAAIAAjIIAfAAIApByIAAAAIAAhyIAgAAIAADIg");
	this.shape_3.setTransform(55.2,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMAMgHQAMgHAQAAQASAAAMAHQALAHAGAMQAFALAAAPIAABmQAAAOgFAMQgGAMgLAGQgMAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_4.setTransform(41.2,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_5.setTransform(27.5,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgQBkIAAiqIghAAIAAgeIBjAAIAAAeIgiAAIAACqg");
	this.shape_6.setTransform(14.7,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgcBgQgLgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMALgHQAMgHAQAAQASAAALAHQALAIAGAMQAGANAAAPIAAAPIgjAAIAAgQQAAgMgFgGQgFgGgHAAQgIAAgEAFQgEAGAAALIAABlQAAALAEAGQAEAFAIAAQAKAAADgFQAEgFAAgKIAAgZIAjAAIAAAYQAAAOgGAMQgGAMgLAGQgLAHgSAAQgQAAgMgHg");
	this.shape_7.setTransform(2.2,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgvBkIAAjIIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAeg");
	this.shape_8.setTransform(-10.6,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgrBkIAAjIIAjAAIAACqIA0AAIAAAeg");
	this.shape_9.setTransform(-22.1,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgvBkIAAjIIBbAAIAAAeIg4AAIAAA0IArAAIAAAdIgrAAIAAA7IA8AAIAAAeg");
	this.shape_10.setTransform(-34,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgvBkIAAjIIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAeg");
	this.shape_11.setTransform(-52.6,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AASBkIAAhZIgjAAIAABZIgiAAIAAjIIAiAAIAABSIAjAAIAAhSIAiAAIAADIg");
	this.shape_12.setTransform(-66.2,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgeIBlAAIAAAeIgjAAIAACqg");
	this.shape_13.setTransform(-78.6,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljIIApAAIAlDIgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_14.setTransform(-96.5,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgQBkIAAjIIAhAAIAADIg");
	this.shape_15.setTransform(-106.6,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgQBkIgqjIIAiAAIAYCLIAAAAIAZiLIAiAAIgqDIg");
	this.shape_16.setTransform(-116.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-7,223.6,37.6);


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
	this.shape.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape.setTransform(126.6,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXBRQgKgGgGgLQgEgKgBgNIAcgFQABANAFAHQAEAGAGAAQAIAAAEgDQAFgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLgBgPQAAgVAMgLQAMgKAUgBQANAAAIAGQAKAFAEAJQAFAKACANIgcACQgCgLgEgEQgFgEgFAAQgGAAgDAFQgEAEAAAIQAAAJAHAIQAFAHAHAHIASAOQAJAJAGAKQAGALABAOQAAAOgHAKQgFAKgLAFQgKAFgNAAQgOAAgJgHg");
	this.shape_1.setTransform(115.9,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_2.setTransform(105.3,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIABAAIAAhhIAaAAIAACrg");
	this.shape_3.setTransform(94,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPAAQgOAAgKgGgAgLg5QgDAEAAAKIAABWQAAAKADAFQADAEAIAAQAIAAAEgEQADgFAAgKIAAhWQAAgKgDgEQgEgFgIAAQgIAAgDAFg");
	this.shape_4.setTransform(76.7,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_5.setTransform(66,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgNBWIAAhIIgkhjIAeAAIATBCIAAAAIAUhCIAeAAIgkBjIAABIg");
	this.shape_6.setTransform(50.6,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgNBWIglirIAeAAIAUB2IAAAAIAVh2IAeAAIglCrg");
	this.shape_7.setTransform(40,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_8.setTransform(29.3,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_9.setTransform(18,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-2,124.2,32.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape.setTransform(147,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBWIAAhNIgfAAIAABNIgdAAIAAirIAdAAIAABHIAfAAIAAhHIAdAAIAACrg");
	this.shape_1.setTransform(135.4,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBWIAAiRIgcAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_2.setTransform(124.7,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape_3.setTransform(107.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYBSQgKgFgFgLQgFgJAAgNIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAANgFAJQgFALgKAFQgKAGgPABQgOgBgKgGgAgLg5QgEAEABAKIAABWQgBAKAEAFQAEAEAHAAQAJAAADgEQAEgFgBgKIAAhWQABgKgEgEQgDgFgJAAQgHAAgEAFg");
	this.shape_4.setTransform(94,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_5.setTransform(82.3,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIgzAAIAAAtIAlAAIAAAXIglAAIAABNg");
	this.shape_6.setTransform(71,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_7.setTransform(55.3,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_8.setTransform(44.7,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_9.setTransform(33.6,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_10.setTransform(19.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-3,144.2,32.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAoDDIguiiIgQABIgSABIAACgIhDAAIAAmEIBeAAQA2gBAdAbQAcAbAAA+QAAAfgHAUQgHAUgLAJQgKALgMAFIA5CxgAgogSIAYAAQAZAAALgNQAMgNgBgiQABgigMgNQgLgOgZABIgYAAg");
	this.shape.setTransform(142.1,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhJCqQgcgaAAgzIAAkhIBDAAIAAEkQAAAWAIAKQAKALAQAAQASAAAIgLQAJgKAAgWIAAkkIBDAAIAAEhQAAAzgbAaQgbAbgwAAQgvAAgagbg");
	this.shape_1.setTransform(114.5,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAjDDIAAitIhFAAIAACtIhDAAIAAmFIBDAAIAACgIBFAAIAAigIBDAAIAAGFg");
	this.shape_2.setTransform(87.5,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AggDDIAAlKIhBAAIAAg7IDDAAIAAA7IhBAAIAAFKg");
	this.shape_3.setTransform(63.5,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAoDDIgtiiIgRABIgSABIAACgIhDAAIAAmEIBeAAQA2gBAcAbQAdAbAAA+QAAAfgHAUQgHAUgKAJQgLALgMAFIA5CxgAgogSIAYAAQAYAAAMgNQAMgNgBgiQABgigMgNQgMgOgYABIgYAAg");
	this.shape_4.setTransform(40.1,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAwDDIgMhXIhHAAIgMBXIhBAAIBImFIBRAAIBIGFgAAbAxIgbikIAAAAIgZCkIA0AAg");
	this.shape_5.setTransform(14,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,68.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_arthur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,201);


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
	this.instance = new lib._336_logo();
	this.instance.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,253,71);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,20);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,260);


// stage content:
(lib._336x260 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,1.12,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(196,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,278.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(277).to({_off:false},0).to({y:251.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(168,130,336,260);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;