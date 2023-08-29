(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_200_bg.jpg", id:"_200_bg"},
		{src:"_200_footer.png", id:"_200_footer"},
		{src:"_200_logo.png", id:"_200_logo"},
		{src:"_200_tim.jpg", id:"_200_tim"},
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



(lib._200_bg = function() {
	this.initialize(img._200_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib._200_footer = function() {
	this.initialize(img._200_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


(lib._200_logo = function() {
	this.initialize(img._200_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib._200_tim = function() {
	this.initialize(img._200_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgeAfIAAg+IA9AAIAAA+g");
	this.shape.setTransform(157,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag2C4QgWgOgMgZQgMgYgCgdIBAgKQACAeALAPQALAOAOAAQASAAAKgJQALgJAAgRQgBgXgNgSQgOgSgSgQQgUgRgUgQQgUgSgOgYQgOgZAAghQAAgvAbgZQAbgZAvAAQAcAAAUAMQATAMAMAWQALAVAEAbIhAAIQgDgZgKgKQgLgJgMAAQgOAAgJAKQgIAKAAATQAAATAOARQANARASARQAVAQAUARQAUATANAYQAOAYABAgQgBAggNAWQgNAWgYAMQgYAMgdAAQgfgBgWgPg");
	this.shape_1.setTransform(138.8,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag2C4QgWgOgMgZQgMgYgCgdIBAgKQACAeALAPQALAOAOAAQASAAAKgJQALgJAAgRQgBgXgNgSQgOgSgSgQQgUgRgUgQQgUgSgOgYQgOgZAAghQAAgvAbgZQAbgZAvAAQAcAAAUAMQATAMAMAWQALAVAEAbIhAAIQgDgZgKgKQgLgJgMAAQgOAAgJAKQgIAKAAATQAAATAOARQANARASARQAVAQAUARQAUATANAYQAOAYABAgQgBAggNAWQgNAWgYAMQgYAMgdAAQgfgBgWgPg");
	this.shape_2.setTransform(114.8,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhcDCIAAmDICxAAIAAA6IhuAAIAABlIBUAAIAAA4IhUAAIAAByIB2AAIAAA6g");
	this.shape_3.setTransform(91.6,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhVDCIAAmDIBDAAIAAFJIBnAAIAAA6g");
	this.shape_4.setTransform(69.6,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAoDDIguiiIgQABIgSABIAACgIhDAAIAAmEIBeAAQA2gBAdAbQAcAbAAA+QAAAfgHAUQgHAUgLAJQgKALgMAFIA5CxgAgogSIAYAAQAZAAALgNQALgNAAgiQAAgigLgNQgLgOgZABIgYAAg");
	this.shape_5.setTransform(33.1,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag4C6QgXgNgLgXQgLgWAAgcIAAjHQAAgcALgWQALgXAXgNQAXgOAhAAQAiAAAXAOQAXANALAXQALAWAAAcIAADHQAAAcgLAWQgLAXgXANQgXANgiABQghgBgXgNgAgaiCQgJALABAWIAADDQgBAWAJALQAIAKASAAQAUAAAHgKQAJgLgBgWIAAjDQABgWgJgLQgHgLgUAAQgSAAgIALg");
	this.shape_6.setTransform(5.5,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-30,175.2,68.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgoCJQgQgLgJgSQgJgSgBgWIAwgHQABAWAIALQAIAKAKAAQANAAAIgGQAHgGABgOQAAgQgKgNQgLgOgNgMQgOgMgPgMQgPgOgKgRQgLgTAAgYQAAgjAUgSQAUgTAjAAQAUABAOAIQAQAJAIAQQAJAPACAVIgvAFQgDgSgHgHQgIgHgJABQgKAAgGAHQgHAHAAANQAAAQALAMQAKAMAMANIAeAYQAPAOAKASQALASAAAXQAAAYgKAQQgKARgSAIQgRAJgVAAQgYAAgQgLg");
	this.shape.setTransform(145.2,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAeCQIgih3IgLABIgOAAIAAB2IgyAAIAAkfIBFAAQApAAAUAUQAWAUAAAuQgBAXgFAOQgFAPgIAGQgIAJgIADIAqCDgAgdgNIARAAQASAAAIgJQAJgKAAgZQAAgagJgJQgIgKgSAAIgRAAg");
	this.shape_1.setTransform(126.9,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAkCQIgKhAIg0AAIgJBAIgvAAIA1kfIA7AAIA1EfgAATAlIgTh6IAAAAIgSB6IAlAAg");
	this.shape_2.setTransform(107.6,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAArIhRAAIAABLIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_3.setTransform(90.2,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgXCQIAAh4Ig8inIAyAAIAhBuIABAAIAhhuIAyAAIg8CnIAAB4g");
	this.shape_4.setTransform(72,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgpCKQgRgKgJgRQgHgQgBgVIAAiTQABgUAHgRQAJgRARgKQAQgKAZAAQAaAAAQAKQARAKAIARQAJARgBAUIAACTQABAVgJAQQgIARgRAKQgQAKgaAAQgZAAgQgKgAgThgQgGAIAAAQIAACRQAAAQAGAIQAFAHAOAAQAPAAAFgHQAGgIAAgQIAAiRQAAgQgGgIQgFgHgPAAQgOAAgFAHg");
	this.shape_5.setTransform(44.3,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAlCQIgki9IgBAAIggC9IgpAAIg3kfIAvAAIAeC2IABAAIAgi2IAnAAIAiC2IAAAAIAbi2IAvAAIgyEfg");
	this.shape_6.setTransform(20.5,-4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgYCQIAAj0IgwAAIAAgrICQAAIAAArIgvAAIAAD0g");
	this.shape_7.setTransform(-0.2,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-31,166.4,52);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgXAAIAAiPIAXAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape.setTransform(37.1,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_1.setTransform(29.3,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_2.setTransform(17.3,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_3.setTransform(7.8,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_4.setTransform(-1.1,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(-10.5,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgYAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_6.setTransform(-20.2,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_7.setTransform(-29.7,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_8.setTransform(-43.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-8,94.3,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(70.1,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLBIIAAg8IgehTIAZAAIAQA3IAAAAIAQg3IAaAAIgeBTIAAA8g");
	this.shape_1.setTransform(63.4,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_2.setTransform(55,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_3.setTransform(48.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(40.8,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgaA/QgLgKABgTIAAhqIAZAAIAABrQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIIAAhrIAZAAIAABqQABATgLAKQgKAKgRAAQgQAAgKgKg");
	this.shape_5.setTransform(30.6,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_6.setTransform(20.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_7.setTransform(11.4,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_8.setTransform(2.2,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_9.setTransform(-7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(-16.4,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AglBIIAAiPIAlAAQARAAAJAKQAKAKgBATQABAGgCAGQgCAGgEAEQgDAFgHADQAKACAGAIQAEAIAAAOQAAAMgEAJQgDAKgIAFQgKAGgNAAgAgMAzIAKAAQAIAAADgFQAFgGAAgLQAAgLgFgGQgFgFgJAAIgHAAgAgMgMIAJAAQAEAAAFgEQAFgFAAgJQAAgKgEgFQgEgFgGAAIgJAAg");
	this.shape_11.setTransform(-26,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgLBIIAAg8IgehTIAZAAIAQA3IAAAAIARg3IAZAAIgeBTIAAA8g");
	this.shape_12.setTransform(-35.5,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_13.setTransform(-45,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,126.5,28);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag0CsQgVgMgKgVQgKgVAAgaIAAi4QAAgZAKgVQAKgVAVgMQAVgMAfgBQAgABAVAMQAVAMAKAVQALAVAAAZIAAC4QAAAagLAVQgKAVgVAMQgVAMggABQgfgBgVgMgAgZh4QgGAKAAAUIAAC1QAAAUAGAKQAIAKARAAQASAAAHgKQAIgKAAgUIAAi1QAAgUgIgKQgHgKgSAAQgRAAgIAKg");
	this.shape.setTransform(-11,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgdC0IAAkxIg8AAIAAg2ICzAAIAAA2Ig8AAIAAExg");
	this.shape_1.setTransform(-33.3,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-8.5,48.7,64);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AggA9IAAh5IAgAAQAPAAAHAIQAIAJAAAQQAAAFgBAFQgCAFgDAEQgDAEgFADQAIABAEAHQAFAGAAANQAAAKgDAIQgEAHgHAFQgHAFgMAAgAgKAsIAIAAQAHgBADgEQAEgFAAgJQAAgKgEgFQgEgEgIAAIgGAAgAgKgJIAHAAQAEAAAEgFQAEgDAAgIQAAgJgDgEQgEgEgEgBIgIAAg");
	this.shape.setTransform(64,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA6QgHgEgDgHQgEgHAAgJIAAg9QAAgJAEgHQADgHAHgEQAIgEAJAAQALAAAGAEQAIAEADAHQAEAHAAAJIAAA9QAAAJgEAHQgDAHgIAEQgGAFgLAAQgJAAgIgFgAgIgoQgCAEABAGIAAA8QgBAIACADQADADAFABQAGgBACgDQADgDgBgIIAAg8QABgGgDgEQgCgDgGAAQgFAAgDADg");
	this.shape_1.setTransform(55.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgRA+IAAgSIAFAAQAGAAACgDQADgCAAgGIAAheIATAAIAABhQAAAIgDAFQgCAGgHAEQgGADgKAAg");
	this.shape_2.setTransform(48.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgXA3QgHgJgBgPIAAg9QABgJADgHQADgHAIgEQAGgEAKAAQAJAAAHAEQAHAFAEAIQADAHAAAJIAAAIIgUAAIgBgOQgCgFgCgCQgDgCgCAAQgEAAgCACQgDADAAAIIAAA9QAAAHACADQACADAFABQAFAAADgFQACgDAAgKIAAgLIgLAAIAAgQIAgAAIAAA9IgKAAIgEgJQgFAGgEACQgFACgFABQgNAAgIgIg");
	this.shape_3.setTransform(38.4,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AANA9IgZhLIAAAAIAABLIgTAAIAAh5IATAAIAYBFIABAAIAAhFIATAAIAAB5g");
	this.shape_4.setTransform(30,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgJA9IAAh5IATAAIAAB5g");
	this.shape_5.setTransform(23.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgfA9IAAh5IAfAAQAPAAAIAJQAJAKAAASIAAAvQAAATgJAJQgIAJgPAAgAgKAsIAHAAQAHAAADgEQAEgEAAgJIAAg0QAAgKgEgEQgDgEgHAAIgHAAg");
	this.shape_6.setTransform(16.7,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAMA9IgNgzIgFAAIgFAAIAAAzIgWAAIAAh5IAeAAQAQAAAJAIQAJAJAAATQAAAKgDAHQgCAGgDACQgDADgEACIASA3gAgLgFIAHAAQAGAAAEgDQAEgFAAgLQAAgKgEgFQgEgEgGAAIgHAAg");
	this.shape_7.setTransform(8.4,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAPA9IgEgbIgVAAIgEAbIgUAAIAWh5IAZAAIAWB5gAAIAQIgIgzIAAAAIgHAzIAPAAg");
	this.shape_8.setTransform(0.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAQA9IgQhPIgNBPIgRAAIgXh5IATAAIANBNIABAAIANhNIAPAAIAPBNIAMhNIATAAIgVB5g");
	this.shape_9.setTransform(-9.4,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgcA9IAAh5IA3AAIAAASIgiAAIAAAhIAZAAIAAAQIgZAAIAAAkIAkAAIAAASg");
	this.shape_10.setTransform(-18.5,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAMA9IgNgzIgFAAIgFAAIAAAzIgWAAIAAh5IAeAAQAQAAAJAIQAJAJAAATQAAAKgDAHQgCAGgDACQgDADgEACIASA3gAgLgFIAHAAQAGAAAEgDQAEgFAAgLQAAgKgEgFQgEgEgGAAIgHAAg");
	this.shape_11.setTransform(-26.6,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA9IgZhLIgBAAIAABLIgTAAIAAh5IAUAAIAYBFIAAAAIAAhFIATAAIAAB5g");
	this.shape_12.setTransform(-35.2,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgWA2QgJgJAAgQIAAhaIAWAAIAABbQAAAHACADQADAEAEAAQAFAAADgEQADgDgBgHIAAhbIAWAAIAABaQAAAQgJAJQgJAIgOAAQgOAAgIgIg");
	this.shape_13.setTransform(-43.7,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-11,120.4,24.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOA9IgZhKIgBAAIAABKIgTAAIAAh5IAUAAIAYBEIAAAAIAAhEIATAAIAAB5g");
	this.shape.setTransform(40.3,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAPA9IgEgbIgVAAIgEAbIgUAAIAWh5IAZAAIAWB5gAAIAPIgIgzIAAAAIgHAzIAPAAg");
	this.shape_1.setTransform(32.2,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAYA9IAAheIAAAAIgTBeIgIAAIgUheIAABeIgSAAIAAh5IAcAAIANBGIAAAAIAPhGIAbAAIAAB5g");
	this.shape_2.setTransform(19.5,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgQA6QgIgEgEgHQgDgHAAgJIAAg9QAAgJADgHQAEgHAIgEQAGgFAKAAQAKAAAIAFQAHAEAEAHQADAHAAAJIAAA9QAAAJgDAHQgEAHgHAEQgIAEgKAAQgKAAgGgEgAgHgoQgDAEAAAGIAAA9QAAAGADAEQACADAFAAQAGAAADgDQACgEAAgGIAAg9QAAgGgCgEQgDgDgGAAQgFAAgCADg");
	this.shape_3.setTransform(10.1,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAMA9IgNgzIgFABIgFAAIAAAyIgWAAIAAh5IAeAAQAQAAAJAJQAJAIAAAUQAAAJgDAGQgCAHgDACQgDADgEABIASA4gAgLgEIAHAAQAGAAAEgFQAEgEAAgKQAAgMgEgEQgEgDgGAAIgHAAg");
	this.shape_4.setTransform(1.7,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgcA9IAAh5IA5AAIAAATIgkAAIAAAfIAaAAIAAAQIgaAAIAAA3g");
	this.shape_5.setTransform(-6.3,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgJA9IAAhmIgVAAIAAgTIA8AAIAAATIgUAAIAABmg");
	this.shape_6.setTransform(-17.3,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AANA9IgZhKIAAAAIAABKIgTAAIAAh5IATAAIAYBEIABAAIAAhEIATAAIAAB5g");
	this.shape_7.setTransform(-24.8,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgcA9IAAh5IA3AAIAAATIghAAIAAAfIAZAAIAAAQIgZAAIAAAkIAjAAIAAATg");
	this.shape_8.setTransform(-32.7,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAQA9IgQhPIgNBPIgRAAIgXh5IAUAAIAMBMIAAAAIAOhMIAQAAIAOBMIAMhMIAUAAIgWB5g");
	this.shape_9.setTransform(-42.5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-6,96.7,24.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABHC0IAAkYIgBAAIg4EYIgbAAIg5kYIgBAAIAAEYIg2AAIAAlnIBSAAIArDRIAAAAIAsjRIBRAAIAAFng");
	this.shape.setTransform(11.1,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeC0IAAlnIA8AAIAAFng");
	this.shape_1.setTransform(-11.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgdC0IAAkxIg9AAIAAg2IC0AAIAAA2Ig7AAIAAExg");
	this.shape_2.setTransform(-27.8,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-8,68.1,64);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_tim();
	this.instance.setTransform(0,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19,200,155);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AAeBEIAAhgQAAgXgWAAQgIAAgLAGQgKAGgIAIIAABjIgTAAIAAiFIATAAIAAASIABAAQASgVAUABQAQAAALAJQAMAKAAAUIAABgg");
	this.shape_2.setTransform(133.6,-9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgIBfIAAiFIARAAIAACFgAgIhHIAAgXIARAAIAAAXg");
	this.shape_3.setTransform(122.7,-12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgZA/QgPgHgJgMIAPgLQAOAVAXAAQAOAAAHgHQAIgGAAgKQAAgJgJgGQgIgFgLgEIgWgHQgLgBgIgJQgIgIAAgNIAAgBQABgSAMgJQAMgKATABIABAAQALAAANAGQANAHAHAKIgNAMQgIgKgIgFQgIgEgJAAQgLAAgHAFQgGAGAAAJQAAAIAIAFQAIAFAKADIAXAHQALAEAIAHQAIAJAAAOQAAATgNAKQgOALgUAAQgOAAgOgHg");
	this.shape_4.setTransform(105.3,-9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AglBOIgDAOIgOAAQABgGAAgXIAAidIATAAIAABCIABgBQASgPAPABQAKAAAJADQAJAEAIAIQAJAHAFAPQAFAMAAATQAAATgFAOQgFAOgJAIQgJAIgJADQgJAEgJAAQgTAAgSgRgAgigJIAABFQAKAKAHAEQAIAFAJAAQAQAAAKgOQAKgOAAgZQAAg1gkAAQgRAAgRASg");
	this.shape_5.setTransform(92.9,-12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgoAxQgOgTAAgeQAAgeAOgTQAPgUAZABQAagBAOAUQAPATAAAeQAAAegPATQgOAVgagBQgZABgPgVgAgZgnQgKAOAAAZQAAAZAKAOQAKAPAPAAQAQAAALgPQAJgOAAgZQAAgZgJgOQgLgNgQAAQgPAAgKANg");
	this.shape_6.setTransform(78.7,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgqBHIAPgKQALAQAQAAQAWAAAAgcIAAiPIAVAAIAACKQAAAzgrAAQgYAAgSgYg");
	this.shape_7.setTransform(65.2,-12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgGBWQgGgFAAgNIAAhhIgXAAIAAgQIAXAAIAAgtIAQAAIAAAtIAfAAIAAAQIgfAAIAABeQAAAKAQAAIAQgCIAAAPQgHACgPAAQgOAAgGgEg");
	this.shape_8.setTransform(48.1,-11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgoA8QgLgKAAgSQAAgVATgLQATgMArgJIAAgHQAAgYgcAAQgMAAgJAFQgIAHgEAIIgQgIQAQgdAhABQATgBAOAKQANAKAAAVIAABCQAAARAEAMIgUAAIgCgTQgTAVgXAAQgRABgLgKgAggAgQAAAKAHAFQAHAGAIABQAKAAAKgHQAMgHAIgJIAAgjQg+AJAAAbg");
	this.shape_9.setTransform(37.3,-9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AglA0QgRgSAAgiQAAgfAPgTQAPgSAYAAQAWgBAOAQQAPAPAAAfIAAAKIhWAAQAAAWAMAOQALAPAPAAQAZAAAMgYIAPAIQgJAPgLAIQgLAJgVgBQgXAAgRgRgAgYgpQgJAKgCAUIBDAAQAAgTgIgLQgJgLgPAAQgPAAgJALg");
	this.shape_10.setTransform(24.6,-9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgeBEIAAiFIATAAIAAAaIAAAAQAIgPAIgGQAKgHAQAAIAAASQgRAAgKALQgIAMgHAVIAABJg");
	this.shape_11.setTransform(14.3,-9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgxBHQgUgYAAgvQAAguAUgZQAUgYAgAAQAzAAAQA4IgUADQgGgWgMgJQgMgKgQAAQgWAAgPATQgPASAAAoQAAApAPATQAPATAWgBQAVABAMgMQAMgMAAgSIAAgQIgrAAIAAgSIA/AAIAABbIgRAAIAAgRIgBAAQgOATgiAAQggAAgUgZg");
	this.shape_12.setTransform(0.3,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-30,153,34.8);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


// stage content:
(lib._200x200 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.667,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy2();
	this.instance_1.setTransform(152,163,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy2();
	this.instance_2.setTransform(150,218.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({y:194.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;