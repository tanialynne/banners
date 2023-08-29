(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_250_bg.jpg", id:"_250_bg"},
		{src:"_250_footer.png", id:"_250_footer"},
		{src:"_250_logo.png", id:"_250_logo"},
		{src:"_250_tim.jpg", id:"_250_tim"},
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



(lib._250_bg = function() {
	this.initialize(img._250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib._250_footer = function() {
	this.initialize(img._250_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib._250_tim = function() {
	this.initialize(img._250_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,191);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape.setTransform(67.1,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_1.setTransform(59.3,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_2.setTransform(47.3,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_3.setTransform(37.8,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_4.setTransform(28.9,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(19.5,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_6.setTransform(9.8,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_7.setTransform(0.3,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_8.setTransform(-13.5,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,94.3,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(102.1,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLBIIAAg8IgehTIAZAAIAQA3IAAAAIARg3IAZAAIgeBTIAAA8g");
	this.shape_1.setTransform(95.4,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_2.setTransform(87,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_3.setTransform(80.4,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(72.8,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgbA/QgJgKgBgTIAAhqIAZAAIAABrQAAAIADAEQAEAEAFAAQAGAAAEgEQACgEABgIIAAhrIAZAAIAABqQgBATgJAKQgLAKgRAAQgRAAgKgKg");
	this.shape_5.setTransform(62.6,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgDAEAAAIIAABHQAAAIADAEQADAEAFAAQAHAAACgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgIgFg");
	this.shape_6.setTransform(52.6,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_7.setTransform(43.4,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_8.setTransform(34.2,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_9.setTransform(25,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(15.6,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgmBIIAAiPIAlAAQASAAAKAKQAJAKAAATIgCAMQgCAGgDAEQgEAFgGADQAJACAFAIQAGAIgBAOQAAAMgDAJQgEAKgJAFQgIAGgOAAgAgNAzIALAAQAHAAAFgFQAEgGgBgLQABgLgFgGQgEgFgJAAIgJAAgAgNgMIAJAAQAGAAAEgEQAEgFABgJQAAgKgEgFQgEgFgHAAIgJAAg");
	this.shape_11.setTransform(6,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgLBIIAAg8IgehTIAZAAIAQA3IAAAAIAQg3IAaAAIgeBTIAAA8g");
	this.shape_12.setTransform(-3.5,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_13.setTransform(-13,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,126.5,28);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag4C6QgXgNgLgXQgLgWAAgcIAAjHQAAgcALgWQALgXAXgNQAXgOAhAAQAjAAAWAOQAXANALAXQALAWAAAcIAADHQAAAcgLAWQgLAXgXANQgWANgjABQghgBgXgNgAgbiCQgHALAAAWIAADDQAAAWAHALQAJAKASAAQAUAAAHgKQAJgLgBgWIAAjDQABgWgJgLQgHgLgUAAQgSAAgJALg");
	this.shape.setTransform(16.5,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AggDCIAAlJIhBAAIAAg6IDDAAIAAA6IhBAAIAAFJg");
	this.shape_1.setTransform(-7.5,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,52.2,68.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglBIIAAiPIAkAAQASAAAJAKQAKAKgBATIgBAMQgCAGgDAEQgFAFgGADQAKACAFAIQAFAIABAOQAAAMgFAJQgDAKgIAFQgKAGgNAAgAgMAzIAKAAQAHAAAEgFQAFgGAAgLQAAgLgFgGQgFgFgIAAIgIAAgAgMgMIAJAAQAEAAAFgEQAEgFABgJQAAgKgEgFQgEgFgGAAIgJAAg");
	this.shape.setTransform(103.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgDgIAAgKIAAhJQAAgKADgIQAFgJAIgFQAJgFALAAQAMAAAJAFQAJAFAEAJQADAIAAAKIAABJQAAAKgDAIQgEAJgJAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_1.setTransform(93.7,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBJIAAgWIAGAAQAGAAAEgDQACgDAAgGIAAhvIAXAAIAAByQAAAJgDAHQgDAHgIAEQgHAEgLAAg");
	this.shape_2.setTransform(85.4,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgbBAQgJgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFAEAJQADAJAAALIAAAJIgXAAQAAgLgBgGQgCgFgDgDQgEgCgCAAQgFAAgDADQgDAEAAAJIAABIQgBAHADAEQADAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgGAEQgFADgHAAQgOAAgKgKg");
	this.shape_3.setTransform(73.7,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAWAAIAACPg");
	this.shape_4.setTransform(63.7,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_5.setTransform(55.9,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQALALgBAWIAAA3QABAWgLALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgIAAg");
	this.shape_6.setTransform(48.2,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_7.setTransform(38.4,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_8.setTransform(28.7,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_9.setTransform(17.4,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(6.7,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_11.setTransform(-2.8,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_12.setTransform(-13,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgbA/QgJgKgBgTIAAhqIAZAAIAABrQAAAIADAEQAEAEAFAAQAGAAAEgEQADgEAAgIIAAhrIAZAAIAABqQgBATgJAKQgKAKgSAAQgQAAgLgKg");
	this.shape_13.setTransform(-23,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-5,140.9,28);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape.setTransform(76,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_1.setTransform(66.5,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAcBIIAAhvIAAAAIgWBvIgKAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_2.setTransform(51.5,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgUBFQgJgFgEgJQgDgIAAgKIAAhJQAAgKADgIQAEgJAJgFQAJgFALAAQAMAAAJAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_3.setTransform(40.4,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(30.6,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_5.setTransform(21.2,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_6.setTransform(8.1,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgXAAIAAiPIAXAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape_7.setTransform(-0.7,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_8.setTransform(-10,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_9.setTransform(-21.5,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-5,113.2,28);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABNDCIAAkuIgBAAIg8EuIgfAAIg8kuIgBAAIAAEuIg7AAIAAmDIBZAAIAuDhIAAAAIAwjhIBYAAIAAGDg");
	this.shape.setTransform(24.5,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AggDCIAAmDIBBAAIAAGDg");
	this.shape_1.setTransform(0.5,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AggDCIAAlJIhBAAIAAg6IDDAAIAAA6IhBAAIAAFJg");
	this.shape_2.setTransform(-17.5,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-5,73.2,68.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_tim();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,250,191);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


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
	this.instance = new lib._250_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.833,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(164,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({_off:false},0).to({y:242.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;