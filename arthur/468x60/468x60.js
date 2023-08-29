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
		{src:"_468_arthur.jpg", id:"_468_arthur"},
		{src:"_468_bg.jpg", id:"_468_bg"},
		{src:"_468_btn.png", id:"_468_btn"},
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



(lib._468_arthur = function() {
	this.initialize(img._468_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._468_bg = function() {
	this.initialize(img._468_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib._468_btn = function() {
	this.initialize(img._468_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,24);


(lib._468_logo = function() {
	this.initialize(img._468_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,60);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape.setTransform(242.2,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgoCJQgQgLgJgSQgJgSgBgWIAvgHQACAWAIALQAIALAKAAQANgBAIgGQAHgHABgMQAAgRgKgNQgLgOgNgMQgOgMgPgMQgPgNgKgTQgLgRAAgZQAAgiAUgTQAUgSAjgBQAUAAAOAJQAQAJAIAQQAJAPACAVIgvAGQgCgTgIgHQgIgHgJAAQgKAAgGAIQgHAHAAAOQAAAPALAMQAKAMANAMIAdAZQAPAOAKASQALASAAAXQAAAYgKARQgKAPgSAKQgRAIgWAAQgWAAgRgLg");
	this.shape_1.setTransform(228.8,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgnCJQgRgLgJgSQgIgSgCgWIAvgHQACAWAIALQAIALAKAAQANgBAIgGQAIgHAAgMQgBgRgJgNQgKgOgNgMQgPgMgQgMQgPgNgJgTQgLgRAAgZQAAgiAUgTQAUgSAjgBQAUAAAPAJQAOAJAJAQQAJAPACAVIgwAGQgBgTgJgHQgHgHgJAAQgKAAgHAIQgFAHAAAOQAAAPAKAMQAKAMANAMIAdAZQAPAOALASQAKASAAAXQAAAYgKARQgKAPgRAKQgSAIgWAAQgWAAgQgLg");
	this.shape_2.setTransform(211,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_3.setTransform(193.8,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_4.setTransform(177.5,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAeCQIgih3IgMABIgNAAIAAB2IgyAAIAAkfIBFAAQAoAAAVAUQAWAUgBAuQAAAXgEAOQgGAPgIAGQgHAJgJADIAqCDgAgdgNIARAAQASAAAJgJQAIgKAAgZQAAgagIgJQgJgKgSAAIgRAAg");
	this.shape_5.setTransform(150.5,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgqCKQgQgKgJgRQgHgRAAgUIAAiSQAAgWAHgQQAJgRAQgJQARgLAZAAQAaAAARALQAQAJAJARQAHAQAAAWIAACSQAAAUgHARQgJARgQAKQgRAKgaAAQgZAAgRgKgAgThgQgGAIAAARIAACPQAAARAGAIQAGAIANAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgNAAgGAIg");
	this.shape_6.setTransform(130.1,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgoCJQgQgLgJgSQgJgSgBgWIAwgHQABAWAIALQAIALAKAAQANgBAIgGQAHgHABgMQAAgRgLgNQgKgOgNgMQgPgMgPgMQgOgNgLgTQgKgRAAgZQAAgiAUgTQAUgSAjgBQAUAAAOAJQAQAJAIAQQAIAPACAVIgvAGQgCgTgHgHQgIgHgJAAQgKAAgHAIQgFAHgBAOQAAAPALAMQAKAMAMAMIAfAZQAPAOAJASQALASAAAXQAAAYgKARQgKAPgSAKQgRAIgVAAQgXAAgRgLg");
	this.shape_7.setTransform(102.2,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAdCQIghh3IgLABIgPAAIAAB2IgxAAIAAkfIBFAAQApAAAUAUQAWAUAAAuQAAAXgGAOQgFAPgIAGQgHAJgJADIAqCDgAgegNIASAAQASAAAIgJQAJgKAAgZQAAgagJgJQgIgKgSAAIgSAAg");
	this.shape_8.setTransform(83.9,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAjCQIgJhAIg0AAIgJBAIgvAAIA1kfIA7AAIA2EfgAATAlIgTh6IAAAAIgTB6IAmAAg");
	this.shape_9.setTransform(64.6,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_10.setTransform(47.2,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgXCQIAAh4Ig8inIAyAAIAhBuIABAAIAhhuIAyAAIg8CnIAAB4g");
	this.shape_11.setTransform(29,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgqCKQgQgKgJgRQgHgRgBgUIAAiSQABgWAHgQQAJgRAQgJQARgLAZAAQAZAAASALQAQAJAIARQAIAQAAAWIAACSQAAAUgIARQgIARgQAKQgSAKgZAAQgZAAgRgKgAgThgQgGAIAAARIAACPQAAARAGAIQAGAIANAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgNAAgGAIg");
	this.shape_12.setTransform(1.3,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAlCQIgki9IgBAAIggC9IgpAAIg3kfIAvAAIAeC2IAAAAIAhi2IAnAAIAhC2IABAAIAbi2IAvAAIgyEfg");
	this.shape_13.setTransform(-22.5,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgXCQIAAjzIgxAAIAAgsICRAAIAAAsIgxAAIAADzg");
	this.shape_14.setTransform(-43.2,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAgCQIg9izIAAAAIAACzIgtAAIAAkfIAtAAIA7CjIABAAIAAijIAtAAIAAEfg");
	this.shape_15.setTransform(-69.9,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgXCQIAAkfIAvAAIAAEfg");
	this.shape_16.setTransform(-85.4,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-8,341.9,52);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgaBAQgKgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAIAFAFAJQAEAJgBALIAAAJIgXAAQAAgLgCgGQgBgFgDgDQgDgCgDAAQgFAAgDADQgDAEAAAJIAABIQAAAHADAEQACAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgGAEQgFADgHAAQgOAAgJgKg");
	this.shape.setTransform(131.9,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_1.setTransform(121.9,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(114.1,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAQBIIgehYIAAAAIAABYIgXAAIAAiPIAXAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape_3.setTransform(106.4,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_4.setTransform(98.6,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AASBIIgFggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_5.setTransform(91.4,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_6.setTransform(82.1,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_7.setTransform(73,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgeBIIAAiPIAYAAIAAB5IAlAAIAAAWg");
	this.shape_8.setTransform(61.1,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_9.setTransform(52.4,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAIAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgIAFQgJAFgMAAQgLAAgJgFg");
	this.shape_10.setTransform(42.9,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_11.setTransform(35.2,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_12.setTransform(27.4,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AANBIIAAhAIgYAAIAABAIgaAAIAAiPIAaAAIAAA7IAYAAIAAg7IAZAAIAACPg");
	this.shape_13.setTransform(17.4,14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgJgFg");
	this.shape_14.setTransform(7.4,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_15.setTransform(-1.8,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_16.setTransform(-10.4,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AAeBHQgIgDgFgFQgGAFgHADQgEADgKAAQgQAAgIgKQgKgJAAgPQAAgIADgHIAHgOIAJgLIgIgSQgEgLAAgKQAAgKAEgHQADgIAIgEQAHgFAKAAQAMABAHAIQAIAIAAANQAAAJgDAIQgEAIgGAGIgKAMIAHAOIAJAOIAGgNIADgNIAVAFIgGATIgIATQADADAEABQADACAEABIAAAWQgIAAgHgDgAgUAbQgCAEAAAGQABAGAEAFQADAEAIAAIAFgBIAEgDIgJgOIgJgPQgEAFgBADgAgNg3QgDAEAAAHQAAAHACAHIAEAOQAGgGADgHQACgGAAgIQAAgIgBgEQgCgDgEAAQgFAAgCADg");
	this.shape_17.setTransform(-24.2,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_18.setTransform(-39.1,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_19.setTransform(-48.5,14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_20.setTransform(-57.4,14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_21.setTransform(-66.9,14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_22.setTransform(-76.5,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgDAEAAAIIAABHQAAAIADAEQADAEAFAAQAHAAACgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgIgFg");
	this.shape_23.setTransform(-86,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,0,232.1,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(29.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_1.setTransform(20.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_2.setTransform(7.8,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_3.setTransform(-3.3,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_4.setTransform(-18.6,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAWBaIgFgoIggAAIgGAoIgeAAIAiizIAkAAIAhCzgAAMAXIgMhMIAAAAIgLBMIAXAAg");
	this.shape_5.setTransform(-29,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAjBaIAAiLIAAAAIgdCLIgMAAIgciLIgBAAIAACLIgbAAIAAizIApAAIAVBoIAAAAIAWhoIAoAAIAACzg");
	this.shape_6.setTransform(-47.7,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAWBaIgFgoIggAAIgGAoIgeAAIAiizIAkAAIAhCzgAAMAXIgMhMIAAAAIgLBMIAXAAg");
	this.shape_7.setTransform(-60.9,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_8.setTransform(-72.5,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgiBQQgLgMAAgWIAAhbQAAgNAFgKQAFgLAKgGQAKgGAPAAQAOAAAKAHQAKAGAGALQAFAMAAANIAAAMIgeAAQAAgOgCgHQgCgIgDgCQgEgDgEAAQgGAAgEAEQgEAEAAAMIAABaQAAAJADAFQADAFAIAAQAIAAADgGQAEgFAAgOIAAgRIgSAAIAAgXIAxAAIAABaIgPAAIgFgOQgHAIgHAEQgHAEgJAAQgSAAgMgMg");
	this.shape_9.setTransform(-85.3,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgZBWQgKgGgGgLQgFgKAAgNIAAhbQAAgNAFgKQAGgLAKgGQALgGAOAAQAQAAAKAGQALAGAFALQAFAKAAANIAABbQAAANgFAKQgFALgLAGQgKAGgQAAQgOAAgLgGgAgMg7QgDAFAAAKIAABZQAAAKADAFQAEAFAIAAQAJAAADgFQAEgFAAgKIAAhZQAAgKgEgFQgDgFgJAAQgIAAgEAFg");
	this.shape_10.setTransform(-97.7,4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_11.setTransform(-110,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgxBaIAAizIAtAAQAaAAAOAMQAOANAAAcQAAAdgOALQgOAMgaAAIgOAAIAABKgAgSgIIAMAAQANABAGgHQAGgGAAgQQAAgPgGgGQgGgHgNABIgMAAg");
	this.shape_12.setTransform(-122.5,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-13,165.4,34);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOBaIAAhLIglhoIAfAAIAUBFIABAAIAUhFIAfAAIglBoIAABLg");
	this.shape.setTransform(136.8,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgiBQQgLgMAAgWIAAhbQAAgNAFgKQAFgLAKgGQAKgGAPAAQAOAAAKAHQAKAGAGALQAFAMAAANIAAAMIgeAAQAAgOgCgHQgCgIgDgCQgEgDgEAAQgGAAgEAEQgEAEAAAMIAABaQAAAJADAFQADAFAIAAQAIAAADgGQAEgFAAgOIAAgRIgSAAIAAgXIAxAAIAABaIgPAAIgFgOQgHAIgHAEQgHAEgJAAQgSAAgMgMg");
	this.shape_1.setTransform(124.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgZBWQgKgGgGgLQgFgKAAgNIAAhbQAAgNAFgKQAGgLAKgGQALgGAOAAQAQAAAKAGQAKAGAGALQAFAKAAANIAABbQAAANgFAKQgGALgKAGQgKAGgQAAQgOAAgLgGgAgLg7QgEAFAAAKIAABZQAAAKAEAFQADAFAIAAQAJAAAEgFQADgFAAgKIAAhZQAAgKgDgFQgEgFgJAAQgIAAgDAFg");
	this.shape_2.setTransform(112.5,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgmBaIAAizIAeAAIAACYIAwAAIAAAbg");
	this.shape_3.setTransform(101.8,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgZBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQALgGAOAAQAPAAALAGQAKAGAGALQAFAKAAANIAABbQAAANgFAKQgGALgKAGQgLAGgPAAQgOAAgLgGgAgLg7QgEAFAAAKIAABZQAAAKAEAFQADAFAIAAQAJAAAEgFQADgFAAgKIAAhZQAAgKgDgFQgEgFgJAAQgIAAgDAFg");
	this.shape_4.setTransform(90.2,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBaIgmhvIAAAAIAABvIgcAAIAAizIAcAAIAkBlIABAAIAAhlIAcAAIAACzg");
	this.shape_5.setTransform(77.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBaIAAhQIgfAAIAABQIgfAAIAAizIAfAAIAABKIAfAAIAAhKIAfAAIAACzg");
	this.shape_6.setTransform(65.2,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_7.setTransform(52.6,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_8.setTransform(41.2,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_9.setTransform(30.5,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_10.setTransform(13.7,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgOBaIAAizIAdAAIAACzg");
	this.shape_11.setTransform(4.1,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAUBaIgmhvIAAAAIAABvIgcAAIAAizIAcAAIAkBlIABAAIAAhlIAcAAIAACzg");
	this.shape_12.setTransform(-5.6,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgZBWQgKgGgGgLQgFgKAAgNIAAhbQAAgNAFgKQAGgLAKgGQALgGAOAAQAQAAAKAGQALAGAFALQAFAKAAANIAABbQAAANgFAKQgFALgLAGQgKAGgQAAQgOAAgLgGgAgLg7QgEAFAAAKIAABZQAAAKAEAFQADAFAIAAQAJAAAEgFQADgFAAgKIAAhZQAAgKgDgFQgEgFgJAAQgIAAgDAFg");
	this.shape_13.setTransform(-18.1,15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AASBaIgUhLIgHABIgJAAIAABKIgfAAIAAizIAsAAQAYAAANAMQANANAAAcQAAAPgDAJQgDAJgFAEQgFAFgGACIAbBSgAgSgIIALAAQALABAFgHQAFgGAAgQQAAgPgFgGQgFgHgLABIgLAAg");
	this.shape_14.setTransform(-30.4,15.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_15.setTransform(-41.8,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgYBWQgLgGgFgLQgFgKAAgNIAAhbQAAgNAFgKQAFgLALgGQAKgGAOAAQAQAAAKAHQAKAGAFALQAFAMAAANIAAAOIgfAAIAAgPQAAgLgEgFQgFgFgGAAQgHAAgEAFQgDAFAAAKIAABZQAAAKADAFQAEAFAHAAQAJAAADgFQADgEAAgJIAAgWIAfAAIAAAVQAAANgFAKQgFALgKAGQgKAGgQAAQgOAAgKgGg");
	this.shape_16.setTransform(-53,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_17.setTransform(-64.4,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgnBaIAAizIAgAAIAACYIAuAAIAAAbg");
	this.shape_18.setTransform(-74.6,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_19.setTransform(-85.3,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_20.setTransform(-101.9,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AAQBaIAAhQIgfAAIAABQIgfAAIAAizIAfAAIAABKIAfAAIAAhKIAfAAIAACzg");
	this.shape_21.setTransform(-114,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgOBaIAAiYIgeAAIAAgbIBZAAIAAAbIgeAAIAACYg");
	this.shape_22.setTransform(-125.1,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-2,276.5,34);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AA1DYIgNhgIhQAAIgNBgIhIAAIBQmvIBaAAIBQGvgAAdA3Igdi4IAAAAIgcC4IA5AAg");
	this.shape.setTransform(-42.3,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgjDYIAAmvIBHAAIAAGvg");
	this.shape_1.setTransform(-64,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkDYIhamvIBJAAIA1ErIAAAAIA2krIBJAAIhaGvg");
	this.shape_2.setTransform(-85.7,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,1,74.2,76);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgsBdIAAi5IBVAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA3AAIAAAcg");
	this.shape.setTransform(-31.8,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AARBdIAAhTIggAAIAABTIghAAIAAi5IAhAAIAABMIAgAAIAAhMIAgAAIAAC5g");
	this.shape_1.setTransform(-44.4,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgcIBdAAIAAAcIggAAIAACdg");
	this.shape_2.setTransform(-55.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAlBdIAAiQIgBAAIgdCQIgOAAIgciQIgBAAIAACQIgcAAIAAi5IAqAAIAWBsIAAAAIAXhsIAqAAIAAC5g");
	this.shape_3.setTransform(-74.7,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgbBZQgKgGgFgLQgGgKAAgOIAAheQAAgOAGgLQAFgLAKgGQALgHAQAAQARAAALAHQAKAGAFALQAGALAAAOIAABeQAAAOgGAKQgFALgKAGQgLAHgRAAQgQAAgLgHgAgMg+QgEAFABALIAABdQgBALAEAFQAEAFAIAAQAJAAAEgFQAEgFgBgLIAAhdQABgLgEgFQgEgEgJgBQgIABgEAEg");
	this.shape_4.setTransform(-89.1,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi5IAuAAQAZAAANANQAOANAAAdQAAAPgDAJQgEALgFACQgFAGgFACIAbBVgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgQgGgHQgFgGgLABIgLAAg");
	this.shape_5.setTransform(-101.9,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgrBdIAAi5IBYAAIAAAcIg4AAIAAAwIApAAIAAAaIgpAAIAABTg");
	this.shape_6.setTransform(-114.1,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgcIBdAAIAAAcIggAAIAACdg");
	this.shape_7.setTransform(-131,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAVBdIgnhzIgBAAIAABzIgdAAIAAi5IAeAAIAlBpIABAAIAAhpIAdAAIAAC5g");
	this.shape_8.setTransform(-142.5,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgrBdIAAi5IBUAAIAAAcIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_9.setTransform(-154.5,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAYBdIgYh5IAAAAIgUB5IgbAAIgki5IAeAAIAUB2IABAAIAVh2IAYAAIAWB2IABAAIASh2IAeAAIghC5g");
	this.shape_10.setTransform(-169.5,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.9,-1,155.8,35.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape.setTransform(-53.9,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgZBZQgLgHgGgMQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgIgHgIIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANAAAKAGQAJAGAGAKQAFALACAMIgfAEQgBgMgFgEQgFgFgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAIAIAJIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_1.setTransform(-65.5,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_2.setTransform(-77,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBdIgohzIAAAAIAABzIgdAAIAAi6IAeAAIAmBqIAAAAIAAhqIAdAAIAAC6g");
	this.shape_3.setTransform(-89.2,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgaBaQgLgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLALgGQALgHAPAAQAQAAALAHQALAGAGALQAFALAAANIAABfQAAANgFALQgGALgLAHQgLAGgQAAQgPAAgLgGgAgMg9QgEAEAAALIAABdQAAALAEAFQAEAFAIAAQAJAAAEgFQAEgFAAgLIAAhdQAAgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_4.setTransform(-108,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_5.setTransform(-119.5,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgPBdIAAhOIgnhsIAhAAIAVBIIAAAAIAWhIIAhAAIgnBsIAABOg");
	this.shape_6.setTransform(-136.1,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPBdIgni6IAgAAIAWCBIAAAAIAXiBIAgAAIgnC6g");
	this.shape_7.setTransform(-147.7,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_8.setTransform(-159.2,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAVBdIgohzIAAAAIAABzIgdAAIAAi6IAeAAIAmBqIAAAAIAAhqIAdAAIAAC6g");
	this.shape_9.setTransform(-171.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-13,134.1,35.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAtDYIgzizIgSABIgUABIAACxIhLAAIAAmvIBoAAQA9gBAgAeQAfAeAABFQAAAjgIAWQgHAWgMAKQgMANgNAFIA/DEgAgsgVIAaAAQAbABANgPQANgOAAgmQAAgmgNgPQgNgOgbAAIgaAAg");
	this.shape.setTransform(56.6,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhSC+QgegeAAg4IAAlCIBKAAIAAFFQAAAYAJAMQALALASAAQAUAAAKgLQAJgMAAgYIAAlFIBKAAIAAFCQAAA4geAeQgeAdg1AAQg0AAgegdg");
	this.shape_1.setTransform(26,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAnDYIAAjAIhNAAIAADAIhLAAIAAmvIBLAAIAACxIBNAAIAAixIBLAAIAAGvg");
	this.shape_2.setTransform(-4,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgkDYIAAluIhIAAIAAhBIDZAAIAABBIhIAAIAAFug");
	this.shape_3.setTransform(-30.7,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAsDYIgyizIgSABIgUABIAACxIhLAAIAAmvIBoAAQA9gBAgAeQAfAeAABFQAAAjgIAWQgHAWgMAKQgMANgNAFIA/DEgAgsgVIAaAAQAcABANgPQAMgOAAgmQAAgmgMgPQgNgOgcAAIgaAAg");
	this.shape_4.setTransform(-56.7,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AA1DYIgNhgIhPAAIgOBgIhIAAIBQmvIBaAAIBQGvgAAdA3Igdi4IAAAAIgdC4IA6AAg");
	this.shape_5.setTransform(-85.6,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,2,174.2,76);


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_arthur();

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350).to({_off:false},0).to({y:62},13).wait(3));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 8
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(251).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).to({_off:true},1).wait(22));

	// Layer 7
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).to({_off:true},1).wait(22));

	// Layer 4
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(854.6,63,1,1,0,0,0,114.1,23.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).to({x:424.6},13).wait(70).to({alpha:0},9).wait(123));

	// Layer 3
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(938.6,26.6,1,1,0,0,0,198.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).to({x:508.6},13).wait(78).to({alpha:0},9).wait(123));

	// Layer 12
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(251.3,144.8,1,1,0,0,0,52.3,53.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135).to({_off:false},0).to({y:44.8},13).wait(86).to({alpha:0},9).wait(123));

	// Layer 2
	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(832.1,63,1,1,0,0,0,92.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({x:552.1},13).wait(70).to({alpha:0},10).wait(232));

	// Layer 1
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(847.1,26.6,1,1,0,0,0,107.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({_off:false},0).to({x:567.1},13).wait(77).to({alpha:0},10).wait(232));

	// Layer 13
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(322.9,144.8,1,1,0,0,0,123.9,53.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({y:44.8},13).wait(85).to({alpha:0},10).wait(232));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:89.5},13).wait(340));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},13).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;