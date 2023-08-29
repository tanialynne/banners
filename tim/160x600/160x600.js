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
		{src:"_160_logo.png", id:"_160_logo"},
		{src:"_160_tim.jpg", id:"_160_tim"}
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


(lib._160_logo = function() {
	this.initialize(img._160_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,114);


(lib._160_tim = function() {
	this.initialize(img._160_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgzBhIAAjBIAyAAQAYAAANANQANANgBAZQAAAJgCAIQgCAIgGAHQgFAGgIAEQANADAHALQAHALAAATQAAAQgFAMQgFANgMAHQgLAIgTAAgAgSBFIAPAAQALAAAFgHQAGgIAAgOQAAgQgHgHQgGgIgNAAIgLAAgAgSgQIANAAQAHAAAHgGQAGgHAAgMQAAgNgFgIQgGgGgJAAIgNAAg");
	this.shape.setTransform(90.6,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgcBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQARABAMAGQALAHAFALQAGAMAAAOIAABiQAAANgGAMQgFALgLAHQgMAHgRgBQgQABgMgHgAgNhAQgDAFAAALIAABhQAAALADAFQAEAGAJgBQAJABAEgGQAEgFABgLIAAhhQgBgLgEgFQgEgGgJAAQgJAAgEAGg");
	this.shape_1.setTransform(77,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBiIAAgdIAHAAQAKAAAEgEQAEgEAAgIIAAiWIAgAAIAACaQAAAMgFAKQgDAJgLAFQgKAFgQAAg");
	this.shape_2.setTransform(65.8,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,36.4);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape.setTransform(141.8,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgqCQQgRgMgKgTQgIgTgCgXIAygHQABAXAJAMQAIALALAAQAOAAAHgHQAJgHAAgOQgBgRgKgOQgKgOgOgNIgfgZQgQgOgKgTQgLgTAAgaQgBgkAWgTQAUgUAlAAQAVAAAQAJQAPAKAJAQQAJARADAVIgzAGQgCgTgHgIQgJgHgJAAQgKAAgHAIQgHAIAAAOQABAPAKANQALAOANAMQAQANAQANQAPAPALATQAKASABAZQgBAZgJARQgLARgTAJQgSAJgWAAQgZAAgRgLg");
	this.shape_1.setTransform(127.7,-22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgqCQQgRgMgJgTQgKgTgBgXIAygHQABAXAJAMQAIALALAAQAOAAAHgHQAJgHAAgOQAAgRgLgOQgKgOgOgNIgggZQgPgOgKgTQgMgTAAgaQAAgkAWgTQAUgUAlAAQAVAAAPAJQAQAKAJAQQAJARACAVIgxAGQgDgTgHgIQgJgHgJAAQgLAAgGAIQgHAIAAAOQAAAPALANQAKAOAOAMQAQANAPANQAQAPAKATQALASABAZQgBAZgKARQgKARgTAJQgSAJgXAAQgYAAgRgLg");
	this.shape_2.setTransform(109.1,-22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_3.setTransform(91,-22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhBCXIAAktIA0AAIAAEAIBPAAIAAAtg");
	this.shape_4.setTransform(73.8,-22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAfCXIgjh9IgMABIgPAAIAAB8Ig0AAIAAktIBJAAQAqAAAXAUQAVAVAAAwQAAAZgFAPQgFAQgJAGQgIAJgJAEIAsCJgAgfgOIATAAQATABAIgLQAJgKAAgbQAAgagJgKQgIgLgTABIgTAAg");
	this.shape_5.setTransform(45.5,-22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgsCRQgRgLgJgRQgIgSgBgVIAAiaQABgWAIgSQAJgRARgKQASgLAaAAQAbAAARALQASAKAIARQAKASgBAWIAACaQABAVgKASQgIARgSALQgRAKgbAAQgaAAgSgKgAgUhlQgGAJAAARIAACXQAAARAGAJQAGAIAOAAQAPAAAGgIQAHgJgBgRIAAiXQABgRgHgJQgGgIgPAAQgOAAgGAIg");
	this.shape_6.setTransform(24.1,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50,160,54.4);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwClQgUgOgKgWQgLgVgBgaIA4gIQACAaAKANQAJANANAAQAQAAAJgIQAJgIAAgQQAAgUgMgQQgMgQgQgOIgkgdQgSgQgMgWQgMgWgBgdQABgqAYgWQAYgWAqAAQAYAAASAKQARALAKATQALATACAYIg4AHQgDgWgJgJQgJgIgLABQgNAAgHAJQgIAIAAAQQABASAMAPQAMAPAQAPQASAPARAPQATAQALAVQANAWAAAcQAAAcgMAVQgMATgVAKQgVAKgaAAQgcAAgTgMg");
	this.shape.setTransform(123.8,-30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAkCtIgpiQIgOABIgQABIAACOIg8AAIAAlZIBUAAQAwAAAZAYQAZAXAAA3QAAAcgGASQgGASgKAHQgJALgKAEIAyCdgAgjgQIAVAAQAWAAAKgMQAKgLAAgfQAAgegKgMQgKgLgWAAIgVAAg");
	this.shape_1.setTransform(101.8,-30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAAXAsIgXiTIAAAAIgXCTIAuAAg");
	this.shape_2.setTransform(78.7,-30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBKAAIAAAyIhKAAIAABmIBpAAIAAA0g");
	this.shape_3.setTransform(57.9,-30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcCtIAAiQIhIjJIA8AAIAoCEIABAAIAoiEIA8AAIhIDJIAACQg");
	this.shape_4.setTransform(36.1,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61,160,61.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgyClQgUgLgKgVQgKgTABgZIAAiwQgBgaAKgTQAKgUAUgMQAUgMAeAAQAeAAAVAMQAUAMAKAUQAKATAAAaIAACwQAAAZgKATQgKAVgUALQgVAMgeAAQgeAAgUgMgAgXhzQgIAKABATIAACtQgBAUAIAKQAGAJARAAQASAAAGgJQAIgKgBgUIAAitQABgTgIgKQgGgKgSABQgRgBgGAKg");
	this.shape.setTransform(129.3,-39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAsCtIgrjjIgBAAIgmDjIgyAAIhClZIA4AAIAkDbIABAAIAnjbIAvAAIApDbIAAAAIAhjbIA4AAIg9FZg");
	this.shape_1.setTransform(100.9,-39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_2.setTransform(76,-39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAnCtIhKjXIgBAAIAADXIg1AAIAAlZIA3AAIBGDEIABAAIAAjEIA1AAIAAFZg");
	this.shape_3.setTransform(44,-39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_4.setTransform(25.3,-39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-70,160,61.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgHgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQAAgYAPgNQANgNAYAAQAOAAALAGQAJAGAGALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFABAKQAAAKAGAJQAIAJAIAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgMAGQgMAGgPAAQgQAAgMgHg");
	this.shape.setTransform(132.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag1BkIAAjHIA0AAQAZAAANANQANAOAAAaQAAAIgDAJQgCAIgFAHQgGAGgIAEQAOAEAGALQAIAMAAATQAAARgFANQgFANgMAHQgMAJgUgBgAgSBIIAOAAQAMAAAGgIQAFgIAAgPQABgPgHgJQgHgIgNAAIgLAAgAgSgRIAMAAQAIAAAGgHQAHgGABgNQgBgNgFgIQgGgHgKAAIgMAAg");
	this.shape_1.setTransform(119.8,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgcBgQgMgGgGgMQgFgMgBgOIAAhmQABgPAFgLQAGgMAMgHQALgHARAAQARAAAMAHQAMAHAGAMQAFALABAPIAABmQgBAOgFAMQgGAMgMAGQgMAHgRAAQgRAAgLgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_2.setTransform(105.7,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgcBmIAAgeIAGAAQALAAAEgEQAEgFAAgIIAAicIAgAAIAACgQAAANgDAJQgFAKgLAGQgKAFgRAAg");
	this.shape_3.setTransform(94,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgQBkIAAiqIgiAAIAAgdIBlAAIAAAdIgiAAIAACqg");
	this.shape_4.setTransform(79.2,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljHIApAAIAlDHgAANAaIgNhWIAAAAIgMBWIAZAAg");
	this.shape_5.setTransform(67.5,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgvBkIAAjHIBbAAIAAAdIg4AAIAAA1IArAAIAAAcIgrAAIAAA8IA8AAIAAAdg");
	this.shape_6.setTransform(55.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_7.setTransform(42.2,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgmBaQgNgOAAgYIAAhmQAAgPAGgLQAFgMAMgHQALgHARAAQAPAAAMAHQAMAIAFAMQAGANAAAPIAAANIghAAQAAgPgCgIQgCgJgFgDQgEgDgFAAQgGAAgFAFQgEAFAAAMIAABmQAAAKADAGQAEAFAJAAQAIAAAFgGQAEgHAAgPIAAgTIgUAAIAAgaIA3AAIAABlIgRAAIgGgPQgIAJgIAEQgIAEgJAAQgVAAgNgNg");
	this.shape_8.setTransform(27.8,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,37.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(153.6,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOBaIAAhLIgmhoIAgAAIAUBFIAAAAIAVhFIAgAAIgmBoIAABLg");
	this.shape_1.setTransform(145.3,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_2.setTransform(134.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgOBaIAAizIAdAAIAACzg");
	this.shape_3.setTransform(126.5,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_4.setTransform(117,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgiBPQgLgNgBgXIAAiFIAfAAIAACGQAAAKAEAFQAEAFAHAAQAIAAAEgFQAEgFAAgKIAAiGIAfAAIAACFQgBAXgMANQgMAMgWAAQgVAAgNgMg");
	this.shape_5.setTransform(104.3,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_6.setTransform(91.7,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_7.setTransform(80.2,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgYBVQgKgHgGgLQgGgLAAgOIAdgEQABAOAFAHQAFAGAGAAQAIAAAFgEQAFgEAAgIQAAgLgHgIQgGgIgHgIIgTgOQgJgJgHgLQgGgLAAgPQAAgWAMgMQANgLAVAAQAMAAAKAFQAJAGAFAKQAFAKACAMIgeAEQgBgMgFgEQgFgEgFAAQgGAAgEAEQgEAFAAAIQABAKAGAHQAGAIAHAIIATAOQAJAJAHALQAGALAAAPQAAAPgGAKQgGAKgLAGQgLAFgNAAQgOAAgKgHg");
	this.shape_8.setTransform(68.8,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_9.setTransform(57.3,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_10.setTransform(45.5,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgvBaIAAizIAuAAQAXAAALANQAMAMAAAXQAAAIgCAHQgDAIgFAGQgEAGgIADQAMADAHAKQAGAKAAASQAAAPgEALQgFAMgLAHQgLAHgRAAgAgQBAIANAAQAKAAAFgHQAFgHAAgOQAAgNgGgHQgFgHgMAAIgKAAgAgQgPIALAAQAHAAAGgGQAGgGAAgLQAAgMgFgHQgFgGgJAAIgLAAg");
	this.shape_11.setTransform(33.6,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgOBaIAAhLIglhoIAfAAIAUBFIABAAIAUhFIAfAAIglBoIAABLg");
	this.shape_12.setTransform(21.7,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_13.setTransform(9.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,34);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAUBaIgmhvIAAAAIAABvIgcAAIAAizIAcAAIAkBlIABAAIAAhlIAcAAIAACzg");
	this.shape.setTransform(83.5,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOBaIAAizIAdAAIAACzg");
	this.shape_1.setTransform(73.8,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,160,34);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape.setTransform(117.7,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_1.setTransform(105.9,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_2.setTransform(94.8,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_3.setTransform(83,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAWBaIgGgoIggAAIgFAoIgeAAIAhizIAlAAIAhCzgAAMAXIgMhMIAAAAIgLBMIAXAAg");
	this.shape_4.setTransform(71,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_5.setTransform(59.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAWBaIgGgoIgfAAIgGAoIgeAAIAhizIAlAAIAhCzgAAMAXIgMhMIAAAAIgLBMIAXAAg");
	this.shape_6.setTransform(41.8,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,160,34);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhqFZQgqgZgUgqQgVgpABg0IAAlxQgBg0AVgqQAUgqAqgYQAqgZBAgBQBBABAqAZQAqAYAUAqQAVAqgBA0IAAFxQABA0gVApQgUAqgqAZQgqAZhBAAQhAAAgqgZgAgzjyQgOAUABApIAAFsQgBAoAOAUQAPATAkAAQAlAAAPgTQAOgUgBgoIAAlsQABgpgOgUQgPgUglAAQgkAAgPAUg");
	this.shape.setTransform(99.5,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag8FoIAApkIh5AAIAAhsIFrAAIAABsIh4AAIAAJkg");
	this.shape_1.setTransform(54.9,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,124);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkBWQgMgMgBgZIAAhhQAAgPAGgLQAFgLALgHQALgHAQAAQAPAAALAIQAMAHAFAMQAGAMgBAPIAAAMIgfAAQAAgOgDgIQgCgJgDgCQgFgDgEAAQgHgBgEAFQgEAFAAAMIAABiQAAAJADAGQAEAGAIgBQAIAAAEgFQAFgHAAgPIAAgTIgUAAIAAgYIA1AAIAABhIgQAAIgGgOQgIAIgHAEQgHAEgKABQgUAAgMgOg");
	this.shape.setTransform(145.2,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAVBhIgoh4IAAAAIAAB4IgfAAIAAjBIAfAAIAnBtIAAAAIAAhtIAfAAIAADBg");
	this.shape_1.setTransform(131.8,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBhIAAjBIAfAAIAADBg");
	this.shape_2.setTransform(121.3,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgyBhIAAjBIAyAAQAYAAAOAOQANAPAAAeIAABLQAAAegNAPQgOAOgYAAgAgQBFIAMAAQALAAAFgFQAGgHAAgPIAAhTQAAgPgGgHQgFgFgLAAIgMAAg");
	this.shape_3.setTransform(110.8,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAUBhIgWhRIgIABIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAeQAAAQgDAKQgEAKgFAEQgGAFgFACIAcBZgAgTgJIAMAAQALABAGgHQAGgGAAgSQAAgRgGgGQgGgHgLABIgMAAg");
	this.shape_4.setTransform(97.5,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAYBhIgGgrIgjAAIgGArIggAAIAkjBIAnAAIAkDBgAANAYIgNhRIAAAAIgMBRIAZAAg");
	this.shape_5.setTransform(84.5,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAYBhIgXh/IgBAAIgVB/IgcAAIgljBIAfAAIAVB6IABAAIAVh6IAaAAIAXB6IAAAAIATh6IAfAAIgjDBg");
	this.shape_6.setTransform(69.3,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAyIAqAAIAAAcIgqAAIAAA5IA6AAIAAAdg");
	this.shape_7.setTransform(54.8,28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAUBhIgWhRIgIABIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAeQAAAQgDAKQgEAKgFAEQgGAFgFACIAcBZgAgTgJIAMAAQALABAGgHQAGgGAAgSQAAgRgGgGQgGgHgLABIgMAAg");
	this.shape_8.setTransform(42,28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAVBhIgoh4IAAAAIAAB4IgfAAIAAjBIAfAAIAnBtIAAAAIAAhtIAfAAIAADBg");
	this.shape_9.setTransform(28.3,28.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgkBVQgNgNgBgZIAAiQIAiAAIAACRQAAALAEAFQAEAFAIAAQAJAAAEgFQAEgFABgLIAAiRIAhAAIAACQQAAAZgOANQgNANgYAAQgXAAgNgNg");
	this.shape_10.setTransform(14.8,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,160,36.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAWBhIgph4IAAAAIAAB4IgfAAIAAjBIAfAAIAnBtIABAAIAAhtIAeAAIAADBg");
	this.shape.setTransform(116.8,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAXBhIgFgrIgjAAIgGArIggAAIAjjBIApAAIAjDBgAANAZIgNhSIAAAAIgMBSIAZAAg");
	this.shape_1.setTransform(104,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAnBhIAAiWIgBAAIgfCWIgNAAIgfiWIgBAAIAACWIgdAAIAAjBIAtAAIAWBwIAAAAIAXhwIAsAAIAADBg");
	this.shape_2.setTransform(83.8,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgbBdQgLgHgGgLQgGgMAAgOIAAhiQAAgNAGgMQAGgLALgHQALgHAQABQARgBALAHQAMAHAFALQAGAMAAANIAABiQAAAOgGAMQgFALgMAHQgLAGgRABQgQgBgLgGgAgNhAQgDAFAAALIAABhQAAALADAFQAFAGAIAAQAKAAADgGQAFgFAAgLIAAhhQAAgLgFgFQgDgFgKAAQgIAAgFAFg");
	this.shape_3.setTransform(68.8,40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAUBhIgWhQIgIAAIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAeQAAAQgDAKQgEAKgFAEQgGAFgFADIAcBYgAgTgIIAMAAQALAAAGgHQAGgGAAgSQAAgQgGgHQgGgGgLgBIgMAAg");
	this.shape_4.setTransform(55.5,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgtBhIAAjBIBbAAIAAAdIg6AAIAAAzIArAAIAAAaIgrAAIAABXg");
	this.shape_5.setTransform(42.8,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,22,160,36.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPBhIAAikIghAAIAAgdIBhAAIAAAdIghAAIAACkg");
	this.shape.setTransform(101.7,41.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAWBhIgph4IAAAAIAAB4IgfAAIAAjBIAfAAIAnBtIABAAIAAhtIAeAAIAADBg");
	this.shape_1.setTransform(89.8,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAzIAqAAIAAAaIgqAAIAAA6IA6AAIAAAdg");
	this.shape_2.setTransform(77.3,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAZBhIgZh/IAAAAIgVB/IgcAAIgljBIAgAAIAUB6IAAAAIAWh6IAaAAIAWB6IABAAIASh6IAgAAIgjDBg");
	this.shape_3.setTransform(61.8,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,23,160,36.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_tim();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ACQFoIAAoxIgCAAIhxIxIg5AAIhxoxIgBAAIAAIxIhsAAIAArQICjAAIBXGkIABAAIBYmkICjAAIAALQg");
	this.shape.setTransform(113.3,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag8FoIAArQIB5AAIAALQg");
	this.shape_1.setTransform(68.9,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag8FoIAApkIh5AAIAAhsIFrAAIAABsIh4AAIAAJkg");
	this.shape_2.setTransform(35.5,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,160,124);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(378));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,330,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(351).to({_off:false},0).to({alpha:1},13).wait(14));

	// Layer 5
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(250,420.8,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(27));

	// Layer 4
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(250,382.5,1,1,0,0,0,80,24.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(72).to({alpha:0},7).wait(27));

	// Layer 25
	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(27));

	// Layer 6
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(250).to({_off:false},0).to({x:80,alpha:1},13).wait(81).to({alpha:0},7).wait(27));

	// Layer 21
	this.instance_6 = new lib.Symbol16();
	this.instance_6.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(128));

	// Layer 19
	this.instance_7 = new lib.Symbol15();
	this.instance_7.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(128));

	// Layer 18
	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(136).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(128));

	// Layer 3
	this.instance_9 = new lib.Symbol12();
	this.instance_9.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(132).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(128));

	// Layer 1
	this.instance_10 = new lib.Symbol24();
	this.instance_10.setTransform(240,406.1,1,1,0,0,0,80,18.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},0).to({x:80,alpha:1},12).wait(70).to({alpha:0},7).wait(246));

	// Layer 17
	this.instance_11 = new lib.Symbol11();
	this.instance_11.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(73).to({alpha:0},7).wait(246));

	// Layer 16
	this.instance_12 = new lib.Symbol10();
	this.instance_12.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(77).to({alpha:0},7).wait(246));

	// Layer 9
	this.instance_13 = new lib.Symbol9();
	this.instance_13.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(82).to({alpha:0},7).wait(246));

	// Layer 14
	this.instance_14 = new lib.Symbol4();
	this.instance_14.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(86).to({alpha:0},7).wait(246));

	// Layer 2
	this.instance_15 = new lib.Symbol2();
	this.instance_15.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(352));

	// Layer 13
	this.instance_16 = new lib.Symbol5();
	this.instance_16.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(13).to({_off:false},0).to({alpha:1},13).wait(352));

	// Layer 12
	this.instance_17 = new lib.Symbol1();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},13).wait(365));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;