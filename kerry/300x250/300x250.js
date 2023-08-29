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
		{src:"_300_bg.jpg", id:"_300_bg"},
		{src:"_300_border.png", id:"_300_border"},
		{src:"_300_footer.png", id:"_300_footer"},
		{src:"_300_kerryjpgcopy.jpg", id:"_300_kerryjpgcopy"},
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


(lib._300_kerryjpgcopy = function() {
	this.initialize(img._300_kerryjpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib._300_logo = function() {
	this.initialize(img._300_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,67);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape.setTransform(128.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_1.setTransform(121.5,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgDAEQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_2.setTransform(111.5,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(102.6,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_4.setTransform(90.3,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_5.setTransform(82,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAdBIIAAhvIgBAAIgXBvIgJAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_6.setTransform(67,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape_7.setTransform(56.5,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_8.setTransform(47.2,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgbBAQgJgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFADAJQAEAJABALIAAAJIgYAAQAAgLgBgGQgCgFgDgDQgDgCgDAAQgFAAgDADQgDAEAAAJIAABIQAAAHACAEQADAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgFAEQgHADgGAAQgPAAgJgKg");
	this.shape_9.setTransform(37,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgDgIAAgKIAAhJQAAgKADgIQAFgJAIgFQAJgFALAAQAMAAAJAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_10.setTransform(27,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_11.setTransform(17.2,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgnBIIAAiPIAkAAQAVAAALAKQALAKAAAXQAAAXgLAIQgLAKgVAAIgLAAIAAA7gAgOgGIAKAAQAKAAAEgFQAFgEAAgNQAAgNgFgFQgEgEgKAAIgKAAg");
	this.shape_12.setTransform(7.2,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.2,28);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape.setTransform(140.9,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_1.setTransform(131.5,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(123.7,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_3.setTransform(116,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgEgIABgKIAAhJQgBgKAEgIQAFgJAIgFQAIgFAMAAQAMAAAJAFQAJAFADAJQAEAIAAAKIAABJQAAAKgEAIQgDAJgJAFQgJAFgMAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(106,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_5.setTransform(96.2,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_6.setTransform(87,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAaCPgAAKASIgKg8IAAAAIgJA8IATAAg");
	this.shape_7.setTransform(78.7,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AANBIIAAhAIgZAAIAABAIgZAAIAAiPIAZAAIAAA7IAZAAIAAg7IAZAAIAACPg");
	this.shape_8.setTransform(69.3,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_9.setTransform(59.2,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_10.setTransform(50,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAcBIIAAhvIAAAAIgWBvIgLAAIgWhvIAAAAIAABvIgWAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_11.setTransform(39.3,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_12.setTransform(24.5,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AANBIIAAhAIgZAAIAABAIgZAAIAAiPIAZAAIAAA7IAZAAIAAg7IAZAAIAACPg");
	this.shape_13.setTransform(14.8,14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_14.setTransform(5.9,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.6,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAxDKIgLhaIhLAAIgMBaIhDAAIBKmTIBUAAIBLGTgAAcA0IgcisIAAAAIgbCsIA3AAg");
	this.shape.setTransform(54.9,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AghDKIAAmTIBDAAIAAGTg");
	this.shape_1.setTransform(34.6,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghDKIhVmTIBFAAIAxEXIAAAAIAzkXIBEAAIhVGTg");
	this.shape_2.setTransform(14.4,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,71.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghDKIAAioIhUjrIBHAAIAuCaIABAAIAviaIBGAAIhUDrIAACog");
	this.shape.setTransform(120.1,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AApDKIgvioIgRACIgSAAIAACmIhGAAIAAmTIBhAAQA5AAAeAcQAdAcAABAQAAAggIAVQgGAUgMAKQgKAMgMAFIA6C3gAgpgTIAYAAQAaAAAMgNQAMgOgBgjQABgkgMgNQgMgOgaAAIgYAAg");
	this.shape_1.setTransform(94.3,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AApDKIguioIgRACIgTAAIAACmIhGAAIAAmTIBhAAQA5AAAeAcQAdAcAABAQAAAggIAVQgGAUgMAKQgLAMgLAFIA6C3gAgpgTIAYAAQAaAAAMgNQAMgOgBgjQABgkgMgNQgMgOgaAAIgYAAg");
	this.shape_2.setTransform(66.3,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhfDKIAAmTIC3AAIAAA9IhyAAIAABoIBYAAIAAA7IhYAAIAAB2IB6AAIAAA9g");
	this.shape_3.setTransform(39.9,35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAoDKIg2i8IgBAAIgZAsIAACQIhGAAIAAmTIBGAAIAACWIABAAIBHiWIBFAAIhLCXIBVD8g");
	this.shape_4.setTransform(16.2,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.8,71.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAXA5IAAhYIgBAAIgSBYIgHAAIgShYIAABYIgSAAIAAhxIAaAAIANBBIAAAAIAOhBIAaAAIAABxg");
	this.shape.setTransform(65.5,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgHgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAHgEQAHgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(56.6,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_2.setTransform(48.8,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgaA5IAAhxIA1AAIAAARIghAAIAAAeIAYAAIAAAPIgYAAIAAAzg");
	this.shape_3.setTransform(41.2,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgSAAIAABgg");
	this.shape_4.setTransform(30.9,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAMA5IgWhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape_5.setTransform(23.8,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_6.setTransform(16.4,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_7.setTransform(7.2,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,23.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgDgHgBgJIATgDQABAJADAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAJAAAGAEQAGADADAHQADAGABAIIgTACQAAgHgDgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape.setTransform(92.5,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_1.setTransform(85.6,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_2.setTransform(79.1,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgeA5IAAhxIAeAAQAOAAAHAIQAIAHAAAPIgCAKQgBAFgDAEQgDADgFACQAHACAFAGQAEAHAAALQAAAJgDAIQgDAHgHAFQgHAEgLAAgAgKApIAJAAQAFAAAEgFQADgEAAgJQAAgJgEgEQgEgFgGAAIgHAAgAgKgJIAHAAQAEAAAEgEQAEgDAAgIQAAgIgEgEQgDgEgEAAIgIAAg");
	this.shape_3.setTransform(71.8,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_4.setTransform(64.2,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgSAAIAABgg");
	this.shape_5.setTransform(57.5,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QgBgJAEgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQAEAHgBAJIAAAHIgTAAIAAgNQgCgFgCgCQgDgCgCAAQgDAAgDADQgDADABAHIAAA5QAAAGABADQACADAFABQAFAAACgEQADgEgBgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_6.setTransform(46.8,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAMA5IgXhGIAAAAIAABGIgSAAIAAhxIASAAIAWBAIABAAIAAhAIASAAIAABxg");
	this.shape_7.setTransform(38.9,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_8.setTransform(32.6,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA5AAIAAARIgUAAIAABgg");
	this.shape_9.setTransform(27.3,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(22,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgHAvIAPAAg");
	this.shape_11.setTransform(16.2,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_12.setTransform(7.2,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,23.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AANA5IgYhGIAAAAIAABGIgSAAIAAhxIASAAIAXBAIAAAAIAAhAIASAAIAABxg");
	this.shape.setTransform(54.9,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgHAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_1.setTransform(46.9,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAMA5IgXhGIAAAAIAABGIgSAAIAAhxIASAAIAWBAIABAAIAAhAIASAAIAABxg");
	this.shape_2.setTransform(38.9,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_3.setTransform(31.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAGgEAJAAQAKAAAGAFQAHAEADAHQAEAHAAAJIAAAIIgVAAIAAgJQAAgHgDgDQgCgEgEAAQgEAAgDAEQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAACgDQACgDAAgGIAAgOIAVAAIAAANQAAAIgEAHQgDAHgHAEQgGAEgKAAQgJAAgGgEg");
	this.shape_4.setTransform(23.7,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAGAEQAHAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgHAEQgGAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAGAAACgEQACgDAAgGIAAg5QAAgGgCgDQgCgEgGAAQgFAAgCAEg");
	this.shape_5.setTransform(12.2,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgIA5IAAhgIgUAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_6.setTransform(5.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,23.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_kerryjpgcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,186);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_13.setTransform(251.3,52.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AghB0QgPgJgHgPQgIgQgBgSIApgGQABASAHAKQAHAJAIAAQALAAAHgGQAGgGAAgLQAAgOgJgLQgIgLgLgLQgMgKgNgKQgNgLgIgPQgJgQAAgVQAAgdARgQQAQgPAegBQARABAMAHQANAIAHANQAHANADASIgpAEQgCgPgGgGQgGgGgIAAQgJAAgEAGQgGAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAJAPQAIAPABAUQAAAUgJAOQgIAOgQAHQgOAIgTAAQgTgBgNgJg");
	this.shape_14.setTransform(239.9,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AghB0QgOgJgIgPQgIgQAAgSIAogGQABASAHAKQAHAJAIAAQALAAAHgGQAGgGABgLQgBgOgIgLQgJgLgLgLQgMgKgNgKQgNgLgJgPQgIgQgBgVQABgdARgQQAQgPAegBQARABANAHQAMAIAHANQAIANACASIgpAEQgCgPgGgGQgHgGgHAAQgIAAgGAGQgFAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAIAPQAJAPABAUQgBAUgIAOQgIAOgQAHQgPAIgRAAQgUgBgNgJg");
	this.shape_15.setTransform(224.8,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_16.setTransform(210.2,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("Ag1B6IAAjzIAqAAIAADPIBBAAIAAAkg");
	this.shape_17.setTransform(196.3,42.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_18.setTransform(173.3,42.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgjB1QgOgIgHgPQgHgOAAgRIAAh9QAAgRAHgOQAHgPAOgIQAOgIAVgBQAVABAPAIQAOAIAHAPQAHAOAAARIAAB9QAAARgHAOQgHAPgOAIQgPAIgVABQgVgBgOgIgAgQhRQgFAHAAANIAAB7QAAANAFAHQAFAHALAAQAMAAAFgHQAFgHAAgNIAAh7QAAgNgFgHQgFgHgMAAQgLAAgFAHg");
	this.shape_19.setTransform(156,42.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AghB0QgOgJgIgPQgIgQgBgSIApgGQABASAHAKQAHAJAIAAQALAAAGgGQAHgGAAgLQAAgOgJgLQgIgLgLgLQgNgKgMgKQgNgLgIgPQgJgQAAgVQAAgdARgQQARgPAdgBQARABAMAHQANAIAHANQAHANACASIgnAEQgDgPgGgGQgGgGgIAAQgJAAgEAGQgGAHAAALQAAANAJAKQAIALALAKIAZAVQANAMAJAPQAIAPABAUQAAAUgJAOQgIAOgQAHQgOAIgTAAQgTgBgNgJg");
	this.shape_20.setTransform(132.3,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_21.setTransform(116.7,42.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAeB6IgIg2IgsAAIgHA2IgpAAIAujzIAyAAIAtDzgAARAfIgRhnIAAAAIgQBnIAhAAg");
	this.shape_22.setTransform(100.3,42.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_23.setTransform(85.5,42.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgUB6IAAhmIgziNIArAAIAcBdIAAAAIAdhdIAqAAIgyCNIAABmg");
	this.shape_24.setTransform(70.1,42.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgjB1QgOgIgHgPQgHgOAAgRIAAh9QAAgRAHgOQAHgPAOgIQAOgIAVgBQAWABAOAIQAOAIAHAPQAHAOAAARIAAB9QAAARgHAOQgHAPgOAIQgOAIgWABQgVgBgOgIgAgQhRQgFAHAAANIAAB7QAAANAFAHQAFAHALAAQAMAAAFgHQAFgHAAgNIAAh7QAAgNgFgHQgFgHgMAAQgLAAgFAHg");
	this.shape_25.setTransform(46.5,42.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AAfB6IgfigIAAAAIgbCgIgjAAIgvjzIAoAAIAZCaIABAAIAciaIAgAAIAdCaIABAAIAXiaIAoAAIgsDzg");
	this.shape_26.setTransform(26.3,42.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AgUB6IAAjPIgoAAIAAgkIB5AAIAAAkIgoAAIAADPg");
	this.shape_27.setTransform(8.6,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,257.3,44.8);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAZA6IAAhRQAAgUgSAAQgHAAgJAFQgJAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIAAAAQAQgSAQAAQAPAAAJAIQAJAIAAASIAABRg");
	this.shape_5.setTransform(226.9,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgGBQIAAhwIANAAIAABwgAgGg8IAAgTIANAAIAAATg");
	this.shape_6.setTransform(217.8,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgWA1QgMgFgHgLIAMgJQAMARATAAQAMAAAGgFQAGgGAAgIQAAgIgGgEQgHgFgKgDIgSgGQgKgBgHgHQgGgHAAgLIAAgBQAAgPALgIQAKgIAQAAIABAAQAJAAALAGQALAGAGAIIgLAKQgHgJgHgDQgGgEgHAAQgKAAgGAEQgFAFAAAIQAAAGAHAFQAGAEAJADIATAGQAKADAGAGQAHAIAAALQAAAQgLAJQgMAJgRAAQgLAAgNgGg");
	this.shape_7.setTransform(203.1,37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgFQAJgHANABIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_8.setTransform(195.1,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_9.setTransform(185.5,37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_10.setTransform(174.5,37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgFQAJgHANABIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_11.setTransform(165.8,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_12.setTransform(155.9,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AACBRQgaAAgQgVQgRgUAAgoQAAglAQgWQAQgVAbAAQAqAAAMAuIgQAFQgGgSgJgJQgIgJgRAAQgQAAgMARQgLARAAAfQAAAhAMAQQAMARATAAQAQAAAJgKQAJgKAEgSIAQADQgMAygrAAIgBAAg");
	this.shape_13.setTransform(143.9,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgWA1QgMgFgHgLIAMgJQAMARATAAQAMAAAGgFQAGgGAAgIQAAgIgGgEQgHgFgKgDIgSgGQgKgBgHgHQgGgHAAgLIAAgBQAAgPALgIQAKgIAQAAIABAAQAJAAALAGQALAGAGAIIgLAKQgHgJgHgDQgGgEgHAAQgKAAgGAEQgFAFAAAIQAAAGAHAFQAGAEAJADIATAGQAKADAGAGQAHAIAAALQAAAQgLAJQgMAJgRAAQgLAAgNgGg");
	this.shape_14.setTransform(125.5,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AggArQgMgQAAgbQAAgaAMgQQANgQATAAQARAAAKAIQAKAIAGAPIgPAFQgIgWgUAAQgMAAgIAMQgJAMABAUQgBAVAJAMQAIAMAMAAQALAAAIgEQAHgFAGgMIANAGQgJAPgKAHQgJAHgRAAQgTAAgNgQg");
	this.shape_15.setTransform(115.1,37.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgGBQIAAhwIANAAIAABwgAgGg8IAAgTIANAAIAAATg");
	this.shape_16.setTransform(106.6,35.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AAZA6IAAhRQAAgUgTAAQgGAAgJAFQgJAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIAAAAQAQgSAQAAQAOAAAKAIQAJAIAAASIAABRg");
	this.shape_17.setTransform(97.4,37.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AghAqQgNgRAAgZQAAgYANgRQAMgRAVAAQAWAAAMARQANARAAAYQAAAZgNARQgMARgWAAQgVAAgMgRgAgVggQgIAMAAAUQAAAVAIAMQAIAMANAAQAOAAAIgMQAJgMAAgVQAAgUgJgMQgIgMgOAAQgNAAgIAMg");
	this.shape_18.setTransform(85.8,37.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgZA6IAAhxIAPAAIAAAXIABAAQAHgNAGgFQAJgHANABIAAAPQgOAAgJAKQgHAIgGATIAAA+g");
	this.shape_19.setTransform(77.2,37.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgFBJQgGgFAAgLIAAhRIgSAAIAAgOIASAAIAAgmIAOAAIAAAmIAbAAIAAAOIgbAAIAABPQAAAIANAAIAOgBIAAANQgFACgNgBQgMAAgFgDg");
	this.shape_20.setTransform(69.1,35.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_21.setTransform(59.9,37.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAZBPIAAhRQABgUgUAAQgGAAgJAGQgJAEgGAIIAABTIgQAAIAAidIAQAAIAAA8IABAAQAPgRAQgBQAOABAKAHQAJAIAAASIAABRg");
	this.shape_22.setTransform(48.5,35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AggArQgMgQAAgbQAAgaAMgQQANgQATAAQARAAAKAIQAJAIAHAPIgQAFQgHgWgUAAQgMAAgIAMQgJAMABAUQgBAVAJAMQAIAMAMAAQALAAAIgEQAHgFAGgMIANAGQgJAPgKAHQgJAHgRAAQgTAAgNgQg");
	this.shape_23.setTransform(36.8,37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_24.setTransform(25.9,37.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AA0BPIAAiPIgsCPIgNAAIgtiPIgBAAIAACPIgQAAIAAidIAcAAIAnB+IAAAAIAoh+IAbAAIAACdg");
	this.shape_25.setTransform(11.2,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,235.3,30.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgPBNQgIgDgGgHQgIgGgEgMQgEgMgBgQQABgQAEgKQAEgMAIgHQAGgGAIgDQAIgDAHgBQANAAAQANIABABIAAg4IAPAAIAACEQAAATABAGIgPAAIgBgMQgFAHgIADQgIAEgJAAQgGAAgJgDgAgdAVQAAAWAIAMQAJALANAAQAHAAAHgDQAGgDAJgJIAAg6QgOgQgPAAQgfAAABAsg");
	this.shape.setTransform(200.9,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_1.setTransform(189.8,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AggArQgMgQAAgbQAAgaAMgQQANgQATAAQARAAAJAIQAKAIAHAPIgQAFQgGgWgVAAQgMAAgIAMQgJAMABAUQgBAVAJAMQAIAMAMAAQAMAAAGgEQAIgFAGgMIANAGQgJAPgKAHQgJAHgRAAQgTAAgNgQg");
	this.shape_2.setTransform(178.7,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAZA6IAAhRQAAgUgSAAQgHAAgIAFQgKAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIAAAAQAQgSAQAAQAPAAAJAIQAJAIAAASIAABRg");
	this.shape_3.setTransform(167.1,37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_4.setTransform(155.3,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgJA5IgjhxIAQAAIAcBdIAAAAIAdhdIAQAAIgiBxg");
	this.shape_5.setTransform(145.1,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgPBNQgHgDgHgHQgIgGgEgMQgFgMABgQQgBgQAFgKQAEgMAIgHQAGgGAIgDQAIgDAHgBQAOAAAPANIAAABIAAg4IAQAAIAACEQAAATABAGIgPAAIgCgMQgDAHgJADQgIAEgJAAQgHAAgIgDgAgdAVQgBAWAJAMQAJALANAAQAHAAAHgDQAGgDAIgJIAAg6QgOgQgOAAQgfAAABAsg");
	this.shape_6.setTransform(133.7,35.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AArBPIgOgxIg5AAIgOAxIgSAAIAwidIAZAAIAwCdgAgXAOIAvAAIgXhQIgBAAg");
	this.shape_7.setTransform(121.2,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgPBNQgHgDgHgHQgIgGgEgMQgFgMABgQQgBgQAFgKQAEgMAIgHQAGgGAIgDQAIgDAHgBQAOAAAPANIAAABIAAg4IAQAAIAACEQAAATABAGIgPAAIgCgMQgDAHgJADQgIAEgJAAQgHAAgIgDgAgdAVQgBAWAJAMQAJALANAAQAHAAAHgDQAGgDAIgJIAAg6QgOgQgOAAQgfAAABAsg");
	this.shape_8.setTransform(101.3,35.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAZA6IAAhRQABgUgUAAQgGAAgJAFQgJAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIABAAQAPgSAQAAQAOAAAKAIQAJAIAAASIAABRg");
	this.shape_9.setTransform(89.4,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgKA7QgOAAgJgIQgKgJAAgPQAAgSAQgJQAQgKAkgHIAAgGQAAgVgXAAQgKAAgHAFQgIAGgCAHIgOgIQANgYAcAAQAQAAAMAJQALAIAAASIAAA3QAAAPADAKIgQAAIgCgQQgQASgTAAIgBAAgAgbAcQAAAHAGAFQAGAFAHAAQAIAAAJgFQAJgGAHgIIAAgdQg0AHAAAYg");
	this.shape_10.setTransform(77.6,37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AA5A6IAAhQQAAgVgRAAQgHAAgHADQgGADgEADIgIAIIAABUIgPAAIAAhQQABgVgTAAQgGAAgGADQgHADgDADIgJAIIAABUIgQAAIAAhxIAQAAIAAAPIABAAQAPgRASAAQALAAAIAFQAFAFADAIQARgSAUAAQAfAAAAAjIAABQg");
	this.shape_11.setTransform(63.1,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgfAsQgOgPAAgdQAAgaAMgQQANgQAUAAQASAAAMANQANANAAAaIAAAJIhJAAQAAASAKAMQAKAMAMAAQAVAAALgTIAMAGQgHANgKAHQgJAHgSAAQgTAAgOgPgAgUgjQgIAKgBAQIA4AAQAAgQgHgKQgIgJgMAAQgMAAgIAJg");
	this.shape_12.setTransform(48.5,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("Ag4BPIAAidIArAAQAfAAATAVQAUAVAAAkQAAAjgTAXQgTAVghAAgAgmBAIAYAAQA1AAAAhAQAAgggOgQQgPgPgYAAIgYAAg");
	this.shape_13.setTransform(36.2,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AAaA6IAAhRQAAgUgUAAQgGAAgIAFQgKAFgGAHIAABUIgQAAIAAhxIAQAAIAAAQIABAAQAPgSAQAAQAPAAAIAIQAKAIAAASIAABRg");
	this.shape_14.setTransform(15.5,37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgHBPIAAidIAQAAIAACdg");
	this.shape_15.setTransform(5.7,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,209.7,30.1);


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


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(187,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(297).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({_off:false},0).to({y:238.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;