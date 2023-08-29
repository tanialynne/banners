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
		{src:"_336_eli.jpg", id:"_336_eli"},
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


(lib._336_bg = function() {
	this.initialize(img._336_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,260);


(lib._336_eli = function() {
	this.initialize(img._336_eli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,201);


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
	this.shape.graphics.f("#034262").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape.setTransform(250.7,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgnCJQgRgLgJgSQgIgSgCgWIAwgHQABAWAIALQAIALAKAAQANAAAIgHQAIgGAAgNQAAgSgLgNQgJgNgOgMQgPgMgPgMQgOgOgLgSQgJgRgBgZQAAgjAUgSQAUgSAjgBQAUAAAPAJQAPAJAIAQQAIAPACAVIgvAGQgBgTgJgHQgHgHgJAAQgKAAgHAIQgFAHgBANQAAAPALANQAKAMAMAMIAfAZQAPAOAJASQAKARABAYQAAAXgKASQgKAQgSAIQgRAJgVAAQgYgBgPgKg");
	this.shape_1.setTransform(237.3,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_2.setTransform(221.5,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgqCKQgQgKgJgRQgHgQAAgVIAAiSQAAgWAHgQQAJgRAQgJQARgKAZgBQAaABARAKQAQAJAJARQAHAQAAAWIAACSQAAAVgHAQQgJARgQAKQgRAJgaABQgZgBgRgJgAgThgQgGAIAAARIAACPQAAARAGAIQAGAIANAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgNAAgGAIg");
	this.shape_3.setTransform(203,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgqCKQgQgKgJgRQgHgQgBgVIAAiSQABgWAHgQQAJgRAQgJQARgKAZgBQAZABASAKQAQAJAIARQAJAQgBAWIAACSQABAVgJAQQgIARgQAKQgSAJgZABQgZgBgRgJgAgThgQgGAIAAARIAACPQAAARAGAIQAFAIAOAAQAOAAAGgIQAGgIAAgRIAAiPQAAgRgGgIQgGgIgOAAQgOAAgFAIg");
	this.shape_4.setTransform(183,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAaCQIAAiAIgzAAIAACAIgyAAIAAkfIAyAAIAAB2IAzAAIAAh2IAyAAIAAEfg");
	this.shape_5.setTransform(163,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgoCKQgRgKgIgRQgIgQAAgVIAAiSQAAgWAIgQQAIgRARgJQARgKAYgBQAZAAAQALQAQALAIASQAIASAAAVIAAAWIgxAAIAAgXQAAgSgHgJQgHgIgKAAQgNAAgGAIQgGAIAAARIAACPQAAARAGAIQAGAIANAAQANAAAGgIQAFgHAAgPIAAgjIAxAAIAAAiQAAAVgIAQQgIARgQAKQgQAJgZABQgYgBgRgJg");
	this.shape_6.setTransform(142.8,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgnCJQgRgLgJgSQgIgSgCgWIAvgHQACAWAIALQAIALAKAAQANAAAIgHQAIgGAAgNQAAgSgLgNQgJgNgNgMQgQgMgPgMQgPgOgKgSQgJgRgBgZQAAgjAUgSQAUgSAjgBQAUAAAPAJQAOAJAJAQQAIAPACAVIgvAGQgBgTgJgHQgHgHgJAAQgKAAgHAIQgFAHAAANQgBAPALANQAKAMAMAMIAfAZQAPAOAKASQAJARABAYQAAAXgKASQgKAQgRAIQgSAJgVAAQgYgBgPgKg");
	this.shape_7.setTransform(124,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAdCQIghh3IgMABIgNAAIAAB2IgyAAIAAkfIBGAAQAnAAAWAUQAUAUAAAuQAAAXgEAOQgGAPgIAGQgIAJgIADIAqCDgAgdgNIARAAQASAAAJgJQAIgKAAgZQAAgagIgJQgJgKgSAAIgRAAg");
	this.shape_8.setTransform(96.8,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAkCQIgJhAIg1AAIgIBAIgxAAIA1kfIA8AAIA2EfgAAUAlIgUh6IAAAAIgTB6IAnAAg");
	this.shape_9.setTransform(77.5,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_10.setTransform(60.1,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgXCQIAAh4Ig8inIAyAAIAhBuIABAAIAhhuIAyAAIg8CnIAAB4g");
	this.shape_11.setTransform(41.9,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgvASIAAgjIBgAAIAAAjg");
	this.shape_12.setTransform(26.4,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAHCQIAAhGIhVAAIAAglIBTi0IAvAAIAAC0IAaAAIAAAlIgaAAIAABGgAgnAlIAuAAIAAhuIAAAAg");
	this.shape_13.setTransform(10.6,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,257.4,52);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape.setTransform(303.5,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_1.setTransform(289.5,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYCXIhAktIAzAAIAlDQIAAAAIAmjQIAzAAIg/Etg");
	this.shape_2.setTransform(270.9,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag5CFQgVgVAAgnIAAjhIA0AAIAADjQAAARAGAIQAIAIAMAAQANAAAIgIQAGgIAAgRIAAjjIA0AAIAADhQAAAngVAVQgVAUglAAQgkAAgVgUg");
	this.shape_3.setTransform(251.1,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgrCRQgSgLgIgRQgKgSABgVIAAiaQgBgWAKgSQAIgRASgKQARgLAaAAQAbAAASALQARAKAJARQAIASABAWIAACaQgBAVgIASQgJARgRALQgSAKgbAAQgaAAgRgKgAgUhlQgHAJABARIAACXQgBARAHAJQAGAIAOAAQAPAAAGgIQAGgJAAgRIAAiXQAAgRgGgJQgGgIgPAAQgOAAgGAIg");
	this.shape_4.setTransform(220.8,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgZCXIAAkAIgyAAIAAgtICXAAIAAAtIgyAAIAAEAg");
	this.shape_5.setTransform(202.1,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAiCXIhAi7IgBAAIAAC7IgvAAIAAktIAwAAIA+CrIAAAAIAAirIAvAAIAAEtg");
	this.shape_6.setTransform(174.1,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgsCRQgRgLgJgRQgIgSgBgVIAAiaQABgWAIgSQAJgRARgKQASgLAaAAQAbAAARALQASAKAIARQAKASgBAWIAACaQABAVgKASQgIARgSALQgRAKgbAAQgaAAgSgKgAgUhlQgGAJAAARIAACXQAAARAGAJQAGAIAOAAQAPAAAGgIQAGgJAAgRIAAiXQAAgRgGgJQgGgIgPAAQgOAAgGAIg");
	this.shape_7.setTransform(153.1,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAiCXIhAi7IgBAAIAAC7IgvAAIAAktIAwAAIA9CrIABAAIAAirIAvAAIAAEtg");
	this.shape_8.setTransform(122.8,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_9.setTransform(103.4,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAbCXIAAiGIg1AAIAACGIg0AAIAAktIA0AAIAAB8IA1AAIAAh8IA1AAIAAEtg");
	this.shape_10.setTransform(83.2,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgZCXIAAkAIgyAAIAAgtICXAAIAAAtIgzAAIAAEAg");
	this.shape_11.setTransform(64.5,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AjQAPIAAgdIGhAAIAAAdg");
	this.shape_12.setTransform(26,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-6,307.4,54.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape.setTransform(253.2,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_1.setTransform(244.6,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_2.setTransform(234.9,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(226.5,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_4.setTransform(218.1,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_5.setTransform(202.4,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_6.setTransform(191.7,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAWAAIAACPg");
	this.shape_7.setTransform(182.1,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_8.setTransform(168.2,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_9.setTransform(154.5,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgUBFQgJgFgEgJQgDgIAAgKIAAhJQAAgKADgIQAEgJAJgFQAJgFALAAQANAAAIAFQAIAFAFAJQADAIABAKIAABJQgBAKgDAIQgFAJgIAFQgIAFgNAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_10.setTransform(144.3,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_11.setTransform(135,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_12.setTransform(120.9,10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgJgFg");
	this.shape_13.setTransform(110.9,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_14.setTransform(102,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgDgIAAgKIAAhJQAAgKADgIQAFgJAIgFQAJgFALAAQAMAAAJAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_15.setTransform(88.7,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_16.setTransform(79.7,10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_17.setTransform(67.5,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_18.setTransform(58.6,10.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_19.setTransform(49.4,10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_20.setTransform(37.8,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_21.setTransform(22.7,10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AANBIIAAhAIgZAAIAABAIgZAAIAAiPIAZAAIAAA7IAZAAIAAg7IAZAAIAACPg");
	this.shape_22.setTransform(13,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-4,253.4,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(142.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgEgHAAgJIATgDQABAJACAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAIAAAHAEQAFADAEAHQADAGABAIIgTACQgBgHgCgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_1.setTransform(137.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_2.setTransform(130.6,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHABgIIAAg5QgBgJAEgGQADgHAHgEQAGgEAJAAQAKAAAGAFQAHAEADAHQADAHAAAJIAAAIIgUAAIAAgJQAAgHgCgDQgDgEgEAAQgEAAgDAEQgCADABAGIAAA5QgBAGACADQADAEAEAAQAFAAACgDQACgDAAgGIAAgOIAUAAIAAANQAAAIgDAHQgDAHgHAEQgGAEgKAAQgJAAgGgEg");
	this.shape_3.setTransform(123.4,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_4.setTransform(116.1,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_5.setTransform(108.5,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgDgHgBgJIATgDQAAAJAEAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgCgHgDgDQgCgDgEAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_6.setTransform(100.8,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_7.setTransform(93.3,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_8.setTransform(85.4,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_9.setTransform(77.4,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_10.setTransform(64.2,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_11.setTransform(55.7,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgaA5IAAhxIA1AAIAAARIghAAIAAAeIAYAAIAAAPIgYAAIAAAzg");
	this.shape_12.setTransform(48.6,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_13.setTransform(37.3,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_14.setTransform(30.2,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_15.setTransform(24.9,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_16.setTransform(17.2,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-4,136.5,23.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgeA5IAAhxIAeAAQAOAAAHAIQAIAHAAAPIgCAKQgBAFgDAEQgDADgFACQAHACAFAGQAEAHAAALQAAAJgDAIQgDAHgHAFQgHAEgLAAgAgKApIAJAAQAFAAAEgFQADgEAAgJQAAgJgEgEQgEgFgGAAIgHAAgAgKgJIAHAAQAEAAAEgEQAEgDAAgIQAAgIgEgEQgDgEgEAAIgIAAg");
	this.shape.setTransform(114.7,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA3QgHgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAHgEQAGgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_1.setTransform(106.6,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQA6IAAgRIAEAAQAGAAACgCQADgDAAgFIAAhYIASAAIAABaQAAAIgDAGQgCAFgGADQgGADgJAAg");
	this.shape_2.setTransform(99.9,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_3.setTransform(91.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAFAAAEgEQADgDAAgJIAAgxQAAgJgDgDQgEgEgFAAIgHAAg");
	this.shape_4.setTransform(80,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANA5IgYhGIAAAAIAABGIgSAAIAAhxIASAAIAXBAIAAAAIAAhAIASAAIAABxg");
	this.shape_5.setTransform(72,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_6.setTransform(64.4,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_7.setTransform(53.9,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_8.setTransform(46.8,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_9.setTransform(39.3,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QgBgJAEgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQAEAHgBAJIAAAHIgTAAIAAgNQgCgFgCgCQgDgCgCAAQgDAAgDADQgDADABAHIAAA5QAAAGABADQACADAFABQAFAAACgEQADgEgBgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_10.setTransform(31.1,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_11.setTransform(23.7,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAFAAAEgEQADgDAAgJIAAgxQAAgJgDgDQgEgEgFAAIgHAAg");
	this.shape_12.setTransform(16,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-4,110.8,23.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape.setTransform(123.8,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgEAAgDAEg");
	this.shape_1.setTransform(116.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPA3QgHgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAHgEQAGgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_2.setTransform(108.4,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_3.setTransform(100.4,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHABgIIAAg5QgBgJAEgGQADgHAHgEQAGgEAJAAQAKAAAGAFQAHAEADAHQADAHAAAJIAAAIIgUAAIAAgJQAAgHgCgDQgDgEgEAAQgEAAgDAEQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgDQABgDAAgGIAAgOIAUAAIAAANQAAAIgDAHQgDAHgHAEQgGAEgKAAQgJAAgGgEg");
	this.shape_4.setTransform(92.4,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQAAAJADAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAJAAAGAEQAFADAEAHQAEAGAAAIIgTACQgBgHgCgDQgDgDgEAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_5.setTransform(84.8,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_6.setTransform(73.8,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QgBgJAEgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQAEAHgBAJIAAAHIgTAAIgBgNQgBgFgCgCQgDgCgCAAQgDAAgDADQgDADABAHIAAA5QAAAGABADQACADAFABQAFAAACgEQADgEgBgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_7.setTransform(65.7,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_8.setTransform(59.5,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_9.setTransform(53.3,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgHAvIAPAAg");
	this.shape_10.setTransform(42.2,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_11.setTransform(31.1,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_12.setTransform(23.6,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_13.setTransform(16,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-4,118.8,23.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghDKIAAmTIBDAAIAAGTg");
	this.shape.setTransform(66.4,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhYDKIAAmTIBGAAIAAFWIBrAAIAAA9g");
	this.shape_1.setTransform(48.8,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AhfDKIAAmTIC3AAIAAA9IhyAAIAABoIBYAAIAAA7IhYAAIAAB2IB6AAIAAA9g");
	this.shape_2.setTransform(25.1,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-4,66.4,71.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._336_eli();
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


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_13.setTransform(172.7,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_14.setTransform(160.1,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_15.setTransform(147.3,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("Ag5BsIAAjXIA3AAQAcAAAOAPQAOAPAAAbQAAAKgDAJQgCAJgHAHQgFAHgJAEQAOAEAIAMQAIAMAAAVQAAASgFAOQgHAOgNAIQgMAJgVAAgAgUBNIAQAAQAMAAAHgIQAGgJAAgQQAAgRgHgIQgHgJgPAAIgMAAgAgUgSIAOAAQAIAAAIgHQAGgHABgOQgBgPgFgIQgHgHgJAAIgPAAg");
	this.shape_16.setTransform(132.9,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_17.setTransform(111.9,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgNApIAAhRIAbAAIAABRg");
	this.shape_18.setTransform(102,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgNBbIAcAAg");
	this.shape_19.setTransform(92,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_20.setTransform(81.2,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAYBsIgtiGIgBAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAiAAIAADXg");
	this.shape_21.setTransform(69.5,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_22.setTransform(57.8,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgpBgQgNgPgBgaIAAhtQABgQAFgMQAHgNALgHQANgIASAAQARAAAMAIQANAIAFAOQAHANAAAQIAAAOIgjAAQAAgQgCgJQgDgJgEgDQgGgEgFABQgHgBgFAGQgEAFAAANIAABtQAAALADAGQAEAGAKAAQAJAAAFgHQAEgHABgQIAAgVIgWAAIAAgbIA7AAIAABsIgSAAIgHgRQgIAKgJAFQgIAFgKAAQgXgBgOgOg");
	this.shape_23.setTransform(46.1,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_24.setTransform(31.5,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_25.setTransform(19.5,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgRBsIgtjXIAkAAIAaCUIAAAAIAbiUIAkAAIgtDXg");
	this.shape_26.setTransform(8.7,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,180.7,40);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgeAmQgLgPAAgXQAAgWALgQQALgPATABQAUgBALAPQALAQAAAWQAAAXgLAPQgLAQgUAAQgTAAgLgQgAgTgdQgHAKgBATQABATAHALQAHALAMAAQAMAAAIgLQAIgLgBgTQABgTgIgKQgIgLgMAAQgMAAgHALg");
	this.shape_13.setTransform(196.9,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgFBBQgEgDAAgJIAAhLIgRAAIAAgMIARAAIAAgjIAMAAIAAAjIAYAAIAAAMIgYAAIAABIQAAAHAMAAIANgBIAAAMQgGABgLABQgLAAgFgFg");
	this.shape_14.setTransform(188.4,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_15.setTransform(176.3,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYAMgOQALgOASAAQARgBALAMQALAMAAAYIAAAHIhCAAQAAARAJALQAJALALAAQATAAAKgSIALAGQgHALgIAHQgJAGgQABQgRAAgNgOgAgSggQgHAJgBAPIAzAAQgBgPgGgJQgGgIgMAAQgLAAgHAIg");
	this.shape_16.setTransform(167.5,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgJBJIAAhaIgRAAIAAgMIARAAIAAgMQAAgSAGgGQAEgHAOAAIAMABIAAANIgEgBIgGAAQgHAAgDADQgDADAAAJIAAAPIAWAAIAAAMIgWAAIAABag");
	this.shape_17.setTransform(159.1,13.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgTAwQgLgFgHgJIALgJQALAQARAAQALAAAFgFQAGgFAAgHQAAgIgGgEQgGgEgJgDIgQgFQgJgBgHgGQgFgHAAgKIAAAAQAAgOAKgHQAJgIAOABIABAAQAIgBAKAGQAKAFAGAIIgKAJQgGgIgHgDQgGgEgGAAQgJAAgFAEQgFAEAAAIQAAAFAGAEQAHAEAHADIARAFQAJADAGAFQAGAHAAALQAAAOgKAJQgLAHgPABQgKAAgLgGg");
	this.shape_18.setTransform(151.3,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhmIAOAAIAAAOIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_19.setTransform(141.4,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgJAAgHAFQgGAFgDAGIgMgHQALgVAaAAQAOgBALAJQALAHAAAQIAAAyQAAAOABAJIgOAAIgCgPQgPARgRAAQgNAAgIgIgAgYAZQAAAHAFAFQAGAEAGAAQAHAAAIgFQAIgFAHgHIAAgbQgvAHAAAVg");
	this.shape_20.setTransform(130.7,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_21.setTransform(123,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgHBIIAAiBIgrAAIAAgOIBlAAIAAAOIgsAAIAACBg");
	this.shape_22.setTransform(113.6,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgNBGQgHgDgHgGQgGgFgEgLQgEgLAAgPQAAgPAEgJQAEgLAGgGQAHgFAHgDQAHgDAGAAQAMAAAOALIABABIAAgzIAOAAIAAB4QAAASABAFIgOAAIgBgLQgEAGgHADQgIAEgIAAQgGAAgHgDgAgbATQAAAUAIALQAIAKAMAAQAHAAAFgDQAGgDAIgIIAAg0QgNgPgNAAQgcAAAAAog");
	this.shape_23.setTransform(96,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYALgOQAMgOASAAQARgBALAMQALAMAAAYIAAAHIhCAAQABARAIALQAJALALAAQAUAAAJgSIALAGQgGALgJAHQgJAGgQABQgRAAgNgOgAgSggQgIAJAAAPIAyAAQAAgPgGgJQgGgIgMAAQgLAAgHAIg");
	this.shape_24.setTransform(85.9,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYAMgOQALgOASAAQARgBALAMQALAMAAAYIAAAHIhCAAQABARAIALQAJALALAAQAUAAAJgSIALAGQgGALgJAHQgJAGgQABQgRAAgNgOgAgSggQgIAJAAAPIAyAAQAAgPgGgJQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(75.9,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgEBBQgGgDAAgJIAAhLIgRAAIAAgMIARAAIAAgjIANAAIAAAjIAYAAIAAAMIgYAAIAABIQAAAHAMAAIAMgBIAAAMQgEABgMABQgLAAgEgFg");
	this.shape_26.setTransform(67.4,14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhmIAOAAIAAAOIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_27.setTransform(58.7,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgWAAQgJAAgGAFQgHAFgCAGIgMgHQAMgVAYAAQAQgBAKAJQAKAHAAAQIAAAyQABAOABAJIgOAAIgCgPQgOARgSAAQgNAAgIgIgAgYAZQAAAHAFAFQAFAEAHAAQAHAAAIgFQAIgFAHgHIAAgbQgvAHAAAVg");
	this.shape_28.setTransform(48,16);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_29.setTransform(40.3,15.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgKAAgGAFQgHAFgCAGIgMgHQAMgVAZAAQAPgBAKAJQALAHgBAQIAAAyQAAAOACAJIgOAAIgCgPQgOARgSAAQgNAAgIgIgAgYAZQAAAHAFAFQAFAEAHAAQAHAAAIgFQAIgFAHgHIAAgbQgvAHAAAVg");
	this.shape_30.setTransform(31.3,16);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AgcAtQgIgHAAgQIAAhJIAOAAIAABIQAAATARAAQAFAAAJgEQAIgFAGgHIAAhLIAOAAIAABmIgOAAIAAgPIgBAAQgOAQgOABQgNAAgJgIg");
	this.shape_31.setTransform(20.9,16.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("AglA3QgQgTAAgkQAAgjAQgTQAPgTAYAAQAoAAAMArIgPADQgGgRgIgIQgJgHgNAAQgQAAgMAOQgMAOAAAfQAAAgAMAOQAMAOAQAAQARAAAIgJQAJgJAAgOIAAgMIggAAIAAgOIAwAAIAABGIgNAAIAAgNQgLAPgbAAQgYAAgPgTg");
	this.shape_32.setTransform(8.4,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.1,27.7);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(196,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).to({alpha:1},11).wait(5));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,278.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({y:251.5},11).wait(16));

	// Layer 9
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(258).to({_off:false},0).to({x:108.3,alpha:1},11).wait(33));

	// Layer 10
	this.instance_4 = new lib.Symbol12_1();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).to({x:103,alpha:1},11).wait(39));

	// Layer 11
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({x:77.7,alpha:1},11).wait(44));

	// Layer 7
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(453.3,42.2,1,1,0,0,0,139.3,24.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).to({x:153.3},13).wait(78).to({alpha:0},9).wait(56));

	// Layer 2
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(430.3,18.4,1,1,0,0,0,120.3,13.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({x:130.3},13).wait(87).to({alpha:0},9).wait(56));

	// Layer 6
	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(386.8,50,1,1,0,0,0,68.3,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).to({x:186.8},13).wait(67).to({alpha:0},9).wait(166));

	// Layer 5
	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(373.9,35.3,1,1,0,0,0,55.4,11.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({x:173.9},13).wait(74).to({alpha:0},9).wait(166));

	// Layer 4
	this.instance_10 = new lib.Symbol8();
	this.instance_10.setTransform(377.9,20.6,1,1,0,0,0,59.4,11.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({x:177.9},13).wait(80).to({alpha:0},9).wait(166));

	// Layer 14
	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(78.2,-35.4,1,1,0,0,0,33.2,35.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:34.6},13).wait(88).to({alpha:0},9).wait(166));

	// Layer 13
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(211).to({alpha:0},9).wait(56));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,130,336,260);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;