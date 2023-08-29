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
		{src:"_250_kerry.jpg", id:"_250_kerry"},
		{src:"_250_logo.png", id:"_250_logo"},
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


(lib._250_kerry = function() {
	this.initialize(img._250_kerry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,191);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(103.7,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgJgFg");
	this.shape_1.setTransform(96.5,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_2.setTransform(86.5,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(77.6,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_4.setTransform(65.3,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_5.setTransform(57,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgKAAIgWhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIAShTIAgAAIAACPg");
	this.shape_6.setTransform(42,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_7.setTransform(31.5,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_8.setTransform(22.2,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgaBAQgKgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFADAJQAFAJAAALIAAAJIgYAAQAAgLgBgGQgCgFgDgDQgEgCgCAAQgFAAgDADQgDAEAAAJIAABIQgBAHAEAEQACAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgFAEQgHADgGAAQgPAAgIgKg");
	this.shape_9.setTransform(12,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgEgIAAgKIAAhJQAAgKAEgIQAFgJAIgFQAIgFAMAAQAMAAAJAFQAJAFAEAJQADAIAAAKIAABJQAAAKgDAIQgEAJgJAFQgJAFgMAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_10.setTransform(2,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_11.setTransform(-7.8,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgnBIIAAiPIAkAAQAVAAALAKQALAKAAAXQAAAXgLAIQgLAKgVAAIgLAAIAAA7gAgOgGIAKAAQAKAAAEgFQAFgEAAgNQAAgNgFgFQgEgEgKAAIgKAAg");
	this.shape_12.setTransform(-17.8,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-5,133.2,28);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape.setTransform(115.9,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_1.setTransform(106.5,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(98.7,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_3.setTransform(91,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgFgIAAgKIAAhJQAAgKAFgIQADgJAJgFQAIgFAMAAQANAAAIAFQAJAFADAJQAFAIAAAKIAABJQAAAKgFAIQgDAJgJAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(81,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(71.2,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_6.setTransform(62,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAaCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_7.setTransform(53.7,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgZAAIAAiPIAZAAIAAA7IAYAAIAAg7IAaAAIAACPg");
	this.shape_8.setTransform(44.3,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_9.setTransform(34.2,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(25,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgJAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_11.setTransform(14.3,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_12.setTransform(-0.5,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgZAAIAAiPIAZAAIAAA7IAYAAIAAg7IAaAAIAACPg");
	this.shape_13.setTransform(-10.2,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_14.setTransform(-19.1,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-5,147.6,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAxDKIgLhaIhLAAIgMBaIhDAAIBKmTIBUAAIBLGTgAAcA0IgcisIAAAAIgaCsIA2AAg");
	this.shape.setTransform(29.9,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AghDKIAAmTIBDAAIAAGTg");
	this.shape_1.setTransform(9.6,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghDKIhVmTIBFAAIAxEXIAAAAIAzkXIBEAAIhVGTg");
	this.shape_2.setTransform(-10.6,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-5,69.5,71.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghDKIAAioIhUjrIBHAAIAuCaIABAAIAviaIBGAAIhUDrIAACog");
	this.shape.setTransform(100.1,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AApDKIguioIgRACIgTAAIAACmIhGAAIAAmTIBiAAQA4AAAeAcQAdAcAABAQAAAggIAVQgGAUgMAKQgLAMgLAFIA6C3gAgpgTIAYAAQAaAAAMgNQAMgOgBgjQABgkgMgNQgMgOgaAAIgYAAg");
	this.shape_1.setTransform(74.3,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AApDKIguioIgRACIgTAAIAACmIhGAAIAAmTIBiAAQA4AAAeAcQAdAcAABAQAAAggIAVQgHAUgKAKQgMAMgMAFIA7C3gAgpgTIAYAAQAaAAAMgNQAMgOgBgjQABgkgMgNQgMgOgaAAIgYAAg");
	this.shape_2.setTransform(46.3,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhgDKIAAmTIC4AAIAAA9IhyAAIAABoIBYAAIAAA7IhYAAIAAB2IB7AAIAAA9g");
	this.shape_3.setTransform(19.9,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAoDKIg3i8IgBAAIgYAsIAACQIhFAAIAAmTIBFAAIAACWIABAAIBHiWIBFAAIhLCXIBVD8g");
	this.shape_4.setTransform(-3.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,134.8,71.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAXA5IAAhYIgBAAIgSBYIgHAAIgShYIAABYIgSAAIAAhxIAaAAIANBBIAAAAIAOhBIAaAAIAABxg");
	this.shape.setTransform(42.5,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgEAAgDAEg");
	this.shape_1.setTransform(33.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_2.setTransform(25.8,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgaA5IAAhxIA1AAIAAARIghAAIAAAeIAYAAIAAAPIgYAAIAAAzg");
	this.shape_3.setTransform(18.2,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA4AAIAAARIgTAAIAABgg");
	this.shape_4.setTransform(7.9,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANA5IgYhGIAAAAIAABGIgSAAIAAhxIASAAIAXBAIAAAAIAAhAIASAAIAABxg");
	this.shape_5.setTransform(0.8,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_6.setTransform(-6.6,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_7.setTransform(-15.8,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-5,76.2,23.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQAAAJADAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAJAAAFAEQAGADAEAHQAEAGAAAIIgTACQgBgHgDgDQgCgDgEAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape.setTransform(69.5,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_1.setTransform(62.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_2.setTransform(56.1,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgeA5IAAhxIAeAAQAOAAAHAIQAIAHAAAPIgCAKQgBAFgDAEQgDADgFACQAHACAFAGQAEAHAAALQAAAJgDAIQgDAHgHAFQgHAEgLAAgAgKApIAJAAQAFAAAEgFQADgEAAgJQAAgJgEgEQgEgFgGAAIgHAAgAgKgJIAHAAQAEAAAEgEQAEgDAAgIQAAgIgEgEQgDgEgEAAIgIAAg");
	this.shape_3.setTransform(48.8,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_4.setTransform(41.2,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgUAAIAABgg");
	this.shape_5.setTransform(34.5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QABgJADgGQADgHAHgEQAGgEAJAAQAJAAAGAFQAHAEADAHQAEAHAAAJIAAAHIgTAAIgCgNQgBgFgDgCQgCgCgCAAQgEAAgCADQgDADAAAHIAAA5QAAAGADADQABADAFABQAEAAADgEQADgEAAgIIAAgMIgLAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_6.setTransform(23.8,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AANA5IgXhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape_7.setTransform(15.9,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_8.setTransform(9.6,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgSAAIAABgg");
	this.shape_9.setTransform(4.3,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(-1,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_11.setTransform(-6.8,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_12.setTransform(-15.8,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-5,98.3,23.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAMA5IgWhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape.setTransform(31.9,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAHAEQAGAEADAHQAEAGAAAJIAAA5QAAAIgEAHQgDAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(23.9,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AANA5IgXhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape_2.setTransform(15.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_3.setTransform(8.3,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHAAgIIAAg5QAAgJAEgGQADgHAHgEQAHgEAIAAQAKAAAHAFQAGAEAEAHQACAHAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgEgEAAQgEAAgCAEQgCADAAAGIAAA5QAAAGACADQACAEAEAAQAGAAACgDQACgDAAgGIAAgOIATAAIAAANQAAAIgCAHQgEAHgGAEQgHAEgKAAQgIAAgHgEg");
	this.shape_4.setTransform(0.7,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAHAEQAGAEADAHQAEAGAAAJIAAA5QAAAIgEAHQgDAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(-10.8,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgJA5IAAhgIgSAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_6.setTransform(-17.9,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-5,61.1,23.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_kerry();
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


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_13.setTransform(202.4,47.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgbBgQgMgIgGgNQgGgMgBgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgGgKgJgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQABgYAOgNQANgNAYAAQAOAAALAGQAJAGAHALQAFALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFAAAKQgBAKAIAJQAGAJAJAIIAVARQAKAKAIAMQAHAMAAARQgBAQgGAMQgHALgMAGQgNAGgOAAQgQAAgLgHg");
	this.shape_14.setTransform(193,38.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgcBgQgLgIgGgNQgHgMAAgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgHgJQgIgKgIgIQgKgIgLgIQgLgKgGgMQgIgNAAgRQAAgYAPgNQANgNAYAAQAOAAALAGQAJAGAGALQAHALABAPIghADQgBgMgFgFQgGgFgGAAQgHAAgEAFQgFAFABAKQAAAKAGAJQAIAJAIAIIAVARQAKAKAIAMQAGAMABARQAAAQgHAMQgHALgMAGQgMAGgPAAQgQAAgMgHg");
	this.shape_15.setTransform(180.5,38.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgvBkIAAjIIBbAAIAAAeIg5AAIAAA0IArAAIAAAdIgrAAIAAA7IA9AAIAAAeg");
	this.shape_16.setTransform(168.5,38.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgrBkIAAjIIAjAAIAACqIA0AAIAAAeg");
	this.shape_17.setTransform(157,38.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_18.setTransform(138.1,38.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgdBgQgLgGgGgMQgGgMABgOIAAhmQgBgPAGgLQAGgMALgHQAMgHARAAQARAAANAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgNAHgRAAQgRAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_19.setTransform(123.8,38.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgbBgQgMgIgGgNQgHgMAAgPIAhgFQABAPAFAIQAGAHAHAAQAJAAAFgEQAFgFABgJQAAgMgIgJQgGgKgJgIQgLgIgKgIQgKgKgIgMQgGgNgBgRQABgYAOgNQANgNAYAAQAOAAAKAGQAKAGAHALQAFALACAPIghADQgBgMgGgFQgFgFgGAAQgHAAgEAFQgEAFgBAKQAAAKAIAJQAGAJAJAIIAVARQAKAKAIAMQAHAMAAARQgBAQgGAMQgHALgMAGQgNAGgOAAQgQAAgLgHg");
	this.shape_20.setTransform(104.3,38.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAUBlIgWhUIgJABIgJAAIAABTIgjAAIAAjIIAxAAQAbgBAPAOQAPAOAAAgQgBAQgDALQgEAKgFAEQgGAGgGACIAeBcgAgUgJIAMAAQAMABAGgHQAGgHAAgSQAAgRgGgHQgGgHgMAAIgMAAg");
	this.shape_21.setTransform(91.5,38.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAZBkIgHgtIgkAAIgGAtIghAAIAljIIApAAIAlDIgAANAZIgNhVIAAAAIgMBVIAZAAg");
	this.shape_22.setTransform(77.9,38.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgvBkIAAjIIBbAAIAAAeIg4AAIAAA0IArAAIAAAdIgrAAIAAA7IA8AAIAAAeg");
	this.shape_23.setTransform(65.8,38.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgQBkIAAhUIgqh0IAjAAIAXBOIAAAAIAYhOIAjAAIgqB0IAABUg");
	this.shape_24.setTransform(53,38.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgcBgQgMgGgGgMQgGgMAAgOIAAhmQAAgPAGgLQAGgMAMgHQAMgHAQAAQASAAAMAHQALAHAGAMQAGALgBAPIAABmQABAOgGAMQgGAMgLAGQgMAHgSAAQgQAAgMgHgAgNhDQgEAGAAALIAABlQAAALAEAGQAEAFAJAAQAKAAAEgFQAEgGAAgLIAAhlQAAgLgEgGQgEgFgKAAQgJAAgEAFg");
	this.shape_25.setTransform(33.6,38.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AAaBkIgaiDIAAAAIgWCDIgdAAIgmjIIAgAAIAVB/IABAAIAXh/IAaAAIAYB/IAAAAIAUh/IAgAAIgjDIg");
	this.shape_26.setTransform(17,38.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AgQBkIAAiqIghAAIAAgeIBkAAIAAAeIgjAAIAACqg");
	this.shape_27.setTransform(2.5,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,20,212.7,37.6);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhnIAOAAIAAAPIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_5.setTransform(201.3,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgGBJIAAhmIANAAIAABmgAgGg2IAAgSIANAAIAAASg");
	this.shape_6.setTransform(193,31.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgTAwQgLgFgHgJIALgJQALAQARAAQALAAAFgFQAGgFAAgHQAAgIgGgEQgGgEgJgDIgQgFQgJgBgHgGQgFgHAAgKIAAAAQAAgOAKgHQAJgIAOABIABAAQAIgBAKAGQAKAFAGAIIgKAJQgGgIgHgDQgGgEgGAAQgJAAgFAEQgFAEAAAIQAAAFAGAEQAHAEAHADIARAFQAJADAGAFQAGAHAAALQAAAOgKAJQgLAHgPABQgKAAgLgGg");
	this.shape_7.setTransform(179.6,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_8.setTransform(172.4,33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgXALgPQAMgOASAAQARgBALAMQALAMAAAXIAAAIIhBAAQAAARAJALQAIALALAAQATAAAKgSIALAGQgGALgJAHQgJAGgQABQgRAAgNgOgAgSggQgHAJgBAPIAzAAQAAgPgHgJQgGgIgMAAQgLAAgHAIg");
	this.shape_9.setTransform(163.6,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgXALgPQAMgOASAAQARgBALAMQALAMAAAXIAAAIIhBAAQAAARAJALQAIALALAAQAUAAAJgSIALAGQgHALgIAHQgJAGgQABQgRAAgNgOgAgSggQgIAJAAAPIAyAAQABgPgHgJQgGgIgMAAQgLAAgHAIg");
	this.shape_10.setTransform(153.6,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_11.setTransform(145.7,33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgeAuQgIgHgBgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgJAAgHAFQgHAFgCAGIgNgHQANgVAZAAQAOgBALAJQALAHAAAQIAAAyQAAAOACAJIgPAAIgCgPQgPARgRAAQgMAAgJgIgAgYAZQAAAHAFAFQAGAEAGAAQAHAAAHgFQAJgFAHgHIAAgbQgvAHAAAVg");
	this.shape_12.setTransform(136.8,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AglA3QgPgTAAgkQAAgiAPgTQAPgUAYAAQAmAAAKAqIgPAFQgDgRgJgIQgIgIgPAAQgPAAgKAPQgLAQAAAcQABAeAKAPQALAPARAAQAPAAAIgJQAIgKAEgPIAOADQgLAtgnAAQgYAAgPgTg");
	this.shape_13.setTransform(125.9,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgTAwQgLgFgHgJIALgJQALAQARAAQALAAAFgFQAGgFAAgHQAAgIgGgEQgGgEgJgDIgQgFQgJgBgHgGQgFgHAAgKIAAAAQAAgOAKgHQAJgIAOABIABAAQAIgBAKAGQAKAFAGAIIgKAJQgGgIgHgDQgGgEgGAAQgJAAgFAEQgFAEAAAIQAAAFAGAEQAHAEAHADIARAFQAJADAGAFQAGAHAAALQAAAOgKAJQgLAHgPABQgKAAgLgGg");
	this.shape_14.setTransform(109.1,34);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgcAnQgMgOAAgZQAAgXAMgPQALgOARAAQAPAAAKAHQAIAHAGAOIgOAEQgGgUgTAAQgLAAgHALQgIAKAAATQAAATAIALQAHALALAAQAKAAAHgEQAGgEAGgLIAMAFQgIAOgJAGQgJAHgPAAQgRAAgLgPg");
	this.shape_15.setTransform(99.7,34);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgGBJIAAhmIANAAIAABmgAgGg2IAAgSIANAAIAAASg");
	this.shape_16.setTransform(91.9,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhnIAOAAIAAAPIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_17.setTransform(83.6,33.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgeAmQgLgPAAgXQAAgWALgQQALgPATABQAUgBALAPQALAQAAAWQAAAXgLAPQgLAQgUAAQgTAAgLgQgAgTgdQgIAKABATQgBATAIALQAHALAMAAQANAAAHgLQAIgLAAgTQAAgTgIgKQgHgLgNAAQgMAAgHALg");
	this.shape_18.setTransform(73.1,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_19.setTransform(65.2,33.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgEBBQgGgDAAgJIAAhLIgRAAIAAgNIARAAIAAgiIANAAIAAAiIAYAAIAAANIgYAAIAABIQAAAHAMAAIAMgBIAAAMQgEABgMABQgLAAgEgFg");
	this.shape_20.setTransform(57.9,32.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgeAuQgJgHABgOQAAgRAOgIQAOgJAhgGIAAgGQAAgTgWAAQgIAAgHAFQgHAFgCAGIgNgHQAMgVAZAAQAPgBALAJQAKAHAAAQIAAAyQAAAOADAJIgPAAIgBgPQgPARgSAAQgMAAgJgIgAgYAZQAAAHAFAFQAGAEAGAAQAHAAAHgFQAKgFAGgHIAAgbQgvAHAAAVg");
	this.shape_21.setTransform(49.6,34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAXBIIAAhJQAAgTgRAAQgGAAgIAFQgIAFgGAGIAABMIgOAAIAAiPIAOAAIAAA3IAAAAQAOgQAPAAQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_22.setTransform(39.2,32);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgdAnQgLgOAAgZQAAgXALgPQAMgOASAAQAOAAAKAHQAIAHAFAOIgNAEQgGgUgSAAQgMAAgHALQgHAKAAATQAAATAHALQAHALAMAAQAKAAAGgEQAGgEAGgLIAMAFQgIAOgJAGQgJAHgOAAQgSAAgMgPg");
	this.shape_23.setTransform(28.6,34);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgXALgPQAMgOASAAQARgBALAMQALAMAAAXIAAAIIhBAAQAAARAJALQAIALALAAQATAAAKgSIALAGQgGALgJAHQgJAGgQABQgRAAgNgOgAgSggQgHAJgBAPIAzAAQAAgPgHgJQgGgIgMAAQgLAAgHAIg");
	this.shape_24.setTransform(18.7,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AAvBIIAAiCIgoCCIgMAAIgoiCIgBAAIAACCIgOAAIAAiPIAZAAIAjBzIAAAAIAkhzIAZAAIAACPg");
	this.shape_25.setTransform(5.3,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,18,214.1,27.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgNBGQgHgDgHgGQgGgFgEgLQgEgLAAgPQAAgPAEgJQAEgLAGgGQAHgFAHgDQAHgDAGAAQAMAAAOALIABABIAAgzIAOAAIAAB4QAAASABAFIgOAAIgBgLQgEAGgHADQgIAEgIAAQgGAAgHgDgAgbATQAAAUAIALQAIAKAMAAQAHAAAFgDQAGgDAIgIIAAg0QgNgPgNAAQgcAAAAAog");
	this.shape.setTransform(177.6,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgcAoQgNgOAAgaQAAgYAMgOQALgPASABQARgBALAMQALAMAAAXIAAAIIhCAAQAAASAJAKQAJALALAAQATAAAKgRIALAFQgHALgIAHQgJAGgQAAQgRAAgNgNgAgSggQgHAJgBAPIAzAAQgBgPgGgJQgGgIgMAAQgLAAgHAIg");
	this.shape_1.setTransform(167.5,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgcAnQgMgOAAgZQAAgYAMgOQALgPARABQAPAAAKAHQAIAHAFANIgNAGQgHgVgSAAQgLAAgHALQgHALAAASQAAATAHALQAHALALAAQALAAAGgEQAGgEAGgLIAMAFQgJAOgIAGQgJAHgPgBQgRAAgLgOg");
	this.shape_2.setTransform(157.4,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAFgGAFIAABNIgOAAIAAhnIAOAAIAAAPIAAAAQAOgQAPAAQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_3.setTransform(146.9,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgeAuQgIgIAAgNQAAgRAOgIQAOgJAhgHIAAgFQAAgTgVAAQgJAAgHAFQgGAFgDAGIgNgHQANgVAZAAQAPgBAKAJQALAHAAAQIAAAyQAAANACAKIgPAAIgCgPQgPAQgRAAQgMAAgJgHgAgYAZQAAAHAFAEQAFAFAHAAQAHAAAHgFQAKgFAGgHIAAgaQgvAGAAAVg");
	this.shape_4.setTransform(136.2,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgIA0IgghnIAPAAIAZBVIAAAAIAahVIAPAAIgfBng");
	this.shape_5.setTransform(126.9,36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgNBGQgHgDgHgGQgGgFgEgLQgEgLAAgPQAAgPAEgJQAEgLAGgGQAHgFAHgDQAHgDAGAAQAMAAAOALIABABIAAgzIAOAAIAAB4QAAASABAFIgOAAIgBgLQgEAGgHADQgIAEgIAAQgGAAgHgDgAgbATQAAAUAIALQAIAKAMAAQAHAAAFgDQAGgDAIgIIAAg0QgNgPgNAAQgcAAAAAog");
	this.shape_6.setTransform(116.5,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AAnBIIgNgtIgzAAIgNAtIgRAAIAtiPIAVAAIAtCPgAgVANIArAAIgWhIIAAAAg");
	this.shape_7.setTransform(105.3,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgNBGQgHgDgHgGQgGgFgEgLQgEgLAAgPQAAgPAEgJQAEgLAGgGQAHgFAHgDQAHgDAGAAQAMAAAOALIABABIAAgzIAOAAIAAB4QAAASABAFIgOAAIgBgLQgEAGgHADQgIAEgIAAQgGAAgHgDgAgbATQAAAUAIALQAIAKAMAAQAHAAAFgDQAGgDAIgIIAAg0QgNgPgNAAQgcAAAAAog");
	this.shape_8.setTransform(87.1,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAFgGAFIAABNIgOAAIAAhnIAOAAIAAAPIAAAAQAOgQAPAAQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_9.setTransform(76.4,35.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgeAuQgJgIABgNQAAgRAOgIQAOgJAhgHIAAgFQAAgTgWAAQgJAAgGAFQgHAFgCAGIgMgHQAMgVAYAAQAPgBALAJQAKAHAAAQIAAAyQAAANACAKIgOAAIgBgPQgPAQgSAAQgMAAgJgHgAgYAZQAAAHAFAEQAGAFAGAAQAHAAAIgFQAJgFAGgHIAAgaQgvAGAAAVg");
	this.shape_10.setTransform(65.7,36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AA0A1IAAhJQAAgTgQAAQgGAAgGADIgJAFIgIAIIAABMIgNAAIAAhJQAAgTgQAAQgGAAgGADQgGACgCADIgJAIIAABMIgOAAIAAhnIAOAAIAAAPIABgBQANgPARAAQAKAAAHAEQAFAEADAIQAPgQASAAQAcAAAAAfIAABJg");
	this.shape_11.setTransform(52.5,35.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgcAoQgNgOAAgaQAAgYAMgOQALgPASABQARgBALAMQALAMAAAXIAAAIIhBAAQgBASAJAKQAJALALAAQATAAAKgRIALAFQgHALgIAHQgJAGgQAAQgRAAgNgNgAgSggQgHAJgBAPIAzAAQgBgPgGgJQgGgIgMAAQgLAAgHAIg");
	this.shape_12.setTransform(39.3,36);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgyBIIAAiPIAmAAQAcAAASATQARATAAAhQAAAggQAUQgSAUgeAAgAgiA6IAVAAQAwAAABg6QAAgdgOgOQgNgOgVAAIgWAAg");
	this.shape_13.setTransform(28.1,34);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAFgGAFIAABNIgOAAIAAhnIAOAAIAAAPIAAAAQAOgQAPAAQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_14.setTransform(9.2,35.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgHBIIAAiPIAOAAIAACPg");
	this.shape_15.setTransform(0.3,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,20,190.8,27.7);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(164,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(297).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({_off:false},0).to({y:242.5},11).wait(15));

	// Layer 9
	this.instance_3 = new lib.Symbol12_1();
	this.instance_3.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({x:103,alpha:1},11).wait(38));

	// Layer 10
	this.instance_4 = new lib.Symbol9_1();
	this.instance_4.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({_off:false},0).to({x:77.7,alpha:1},11).wait(43));

	// Layer 11
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(397.1,27,1,1,0,0,0,93.2,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(252).to({_off:false},0).to({x:117.1,alpha:1},11).wait(49));

	// Layer 6
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(377.3,46.4,1,1,0,0,0,64.3,14);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(147).to({_off:false},0).to({x:177.3},13).wait(82).to({alpha:0},9).wait(61));

	// Layer 2
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(386.8,23,1,1,0,0,0,73.8,14);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).to({x:186.8},13).wait(91).to({alpha:0},9).wait(61));

	// Layer 15
	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(74.1,-35.4,1,1,0,0,0,34.7,35.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130).to({_off:false},0).to({y:34.6},13).wait(99).to({alpha:0},9).wait(61));

	// Layer 5
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(346.1,50,1,1,0,0,0,34.5,11.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).to({x:206.1},13).wait(62).to({alpha:0},8).wait(182));

	// Layer 4
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(360.7,35.3,1,1,0,0,0,49.1,11.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({_off:false},0).to({x:220.7},13).wait(68).to({alpha:0},8).wait(182));

	// Layer 3
	this.instance_11 = new lib.Symbol8();
	this.instance_11.setTransform(349.7,20.6,1,1,0,0,0,38.1,11.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({x:209.7},13).wait(75).to({alpha:0},8).wait(182));

	// Layer 14
	this.instance_12 = new lib.Symbol9();
	this.instance_12.setTransform(97.5,-35.4,1,1,0,0,0,67.3,35.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).to({y:34.6},13).wait(83).to({alpha:0},8).wait(182));

	// Layer 13
	this.instance_13 = new lib.Symbol5();
	this.instance_13.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({alpha:1},13).wait(216).to({alpha:0},9).wait(61));

	// Layer 12
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},13).wait(299));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;