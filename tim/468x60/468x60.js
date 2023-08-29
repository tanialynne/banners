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
		{src:"_468_bg.jpg", id:"_468_bg"},
		{src:"_468_btn.png", id:"_468_btn"},
		{src:"_468_logo.png", id:"_468_logo"},
		{src:"_468_tim.jpg", id:"_468_tim"},
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


(lib._468_tim = function() {
	this.initialize(img._468_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape.setTransform(239.5,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgpCMQgQgLgKgTQgJgSgBgXIAxgGQABAWAIALQAIAMALAAQANgBAIgGQAIgIAAgNQAAgRgKgOQgLgNgNgNIgegYQgQgOgKgSQgKgTgBgZQAAgjAVgTQAUgUAkABQAVgBAPAKQAPAJAIAQQAJAQADAVIgxAFQgCgSgIgIQgIgGgJAAQgKAAgHAIQgGAHAAAOQAAAOAKANQALANANANQAPAMAPANQAQAOAKASQALATAAAXQAAAZgKARQgLARgSAJQgSAIgWABQgXAAgRgMg");
	this.shape_1.setTransform(225.7,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgpCMQgQgLgKgTQgJgSgBgXIAxgGQABAWAIALQAIAMALAAQANgBAIgGQAIgIAAgNQAAgRgKgOQgLgNgNgNIgegYQgQgOgKgSQgKgTgBgZQAAgjAVgTQAUgUAkABQAVgBAPAKQAPAJAIAQQAJAQADAVIgxAFQgCgSgIgIQgIgGgJAAQgKAAgHAIQgGAHAAAOQAAAOAKANQALANANANQAPAMAPANQAQAOAKASQALATAAAXQAAAZgKARQgLARgSAJQgSAIgWABQgXAAgRgMg");
	this.shape_2.setTransform(207.5,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhGCTIAAkmICHAAIAAAsIhTAAIAABNIA/AAIAAArIg/AAIAABWIBZAAIAAAsg");
	this.shape_3.setTransform(189.9,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhACTIAAkmIAzAAIAAD6IBOAAIAAAsg");
	this.shape_4.setTransform(173.2,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAeCUIgih7IgMABIgOAAIAAB6IgzAAIAAkmIBHAAQApgBAWAVQAWAUAAAvQgBAYgFAPQgFAPgIAGQgJAJgIAEIArCGgAgegNIASAAQASAAAJgKQAJgKgBgaQABgagJgKQgJgKgSABIgSAAg");
	this.shape_5.setTransform(145.5,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgqCNQgSgKgIgRQgJgRAAgWIAAiWQAAgVAJgRQAIgRASgKQARgKAZAAQAaAAASAKQAQAKAJARQAJARAAAVIAACWQAAAWgJARQgJARgQAKQgSALgaAAQgZAAgRgLgAgThiQgHAIABAQIAACUQgBARAHAJQAGAHANABQAPgBAFgHQAHgJAAgRIAAiUQAAgQgHgIQgFgIgPAAQgNAAgGAIg");
	this.shape_6.setTransform(124.6,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgpCMQgQgLgKgTQgJgSgBgXIAxgGQABAWAIALQAIAMALAAQANgBAIgGQAIgIAAgNQAAgRgKgOQgLgNgNgNIgegYQgQgOgKgSQgKgTgBgZQAAgjAVgTQAUgUAkABQAVgBAPAKQAPAJAIAQQAJAQADAVIgxAFQgCgSgIgIQgIgGgJAAQgKAAgHAIQgGAHAAAOQAAAOAKANQALANANANQAPAMAPANQAQAOAKASQALATAAAXQAAAZgKARQgLARgSAJQgSAIgWABQgXAAgRgMg");
	this.shape_7.setTransform(96,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAeCUIgih7IgMABIgOAAIAAB6IgzAAIAAkmIBIAAQAogBAWAVQAWAUgBAvQAAAYgFAPQgFAPgJAGQgIAJgIAEIArCGgAgegNIASAAQASAAAJgKQAJgKgBgaQABgagJgKQgJgKgSABIgSAAg");
	this.shape_8.setTransform(77.2,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAlCTIgJhBIg2AAIgJBBIgyAAIA3kmIA9AAIA2EmgAAUAmIgUh9IAAAAIgTB9IAnAAg");
	this.shape_9.setTransform(57.4,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhFCTIAAkmICGAAIAAAsIhUAAIAABNIBAAAIAAArIhAAAIAABWIBZAAIAAAsg");
	this.shape_10.setTransform(39.7,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgYCTIAAh7Ig9irIAzAAIAiBxIABAAIAihxIAzAAIg9CrIAAB7g");
	this.shape_11.setTransform(21,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgrCNQgQgKgJgRQgJgRABgWIAAiWQgBgVAJgRQAJgRAQgKQASgKAZAAQAaAAARAKQARAKAJARQAJARAAAVIAACWQAAAWgJARQgJARgRAKQgRALgaAAQgZAAgSgLgAgThiQgHAIAAAQIAACUQAAARAHAJQAFAHAOABQAOgBAHgHQAFgJAAgRIAAiUQAAgQgFgIQgHgIgOAAQgOAAgFAIg");
	this.shape_12.setTransform(-7.4,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAmCTIgljBIgBAAIggDBIgrAAIg4kmIAvAAIAfC7IABAAIAhi7IAoAAIAjC7IABAAIAci7IAvAAIg0Emg");
	this.shape_13.setTransform(-31.8,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgYCTIAAj6IgxAAIAAgsICTAAIAAAsIgxAAIAAD6g");
	this.shape_14.setTransform(-53,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAhCTIg+i2IgBAAIAAC2IguAAIAAkmIAvAAIA8CoIABAAIAAioIAuAAIAAEmg");
	this.shape_15.setTransform(-80.3,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgYCTIAAkmIAxAAIAAEmg");
	this.shape_16.setTransform(-96.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-9,350.3,53.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgZBZQgLgHgGgMQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgIgHgIIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANAAAKAGQAJAGAGAKQAFALACANIgfADQgBgMgFgEQgFgFgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAIAIAJIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape.setTransform(10.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgxBdIAAi6IAwAAQAXABANANQAMANAAAYQAAAHgDAJQgCAHgFAGQgFAGgIADQANAEAGALQAHAKAAASQAAAQgFAMQgFAMgLAHQgLAIgSgBgAgRBDIAOAAQAKAAAGgIQAFgGAAgPQAAgPgGgGQgGgIgMAAIgLAAgAgRgPIAMAAQAHAAAGgHQAGgFAAgMQAAgNgFgHQgFgGgJgBIgMAAg");
	this.shape_1.setTransform(-1.2,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgbBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQAMgHAPAAQAQAAALAHQALAGAFALQAGALAAANIAABfQAAANgGALQgFALgLAHQgLAGgQAAQgPAAgMgGgAgMg9QgEAEAAALIAABdQAAALAEAFQAEAFAIAAQAJAAAEgFQAEgFgBgLIAAhdQABgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_2.setTransform(-14.3,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgaBfIAAgcIAGAAQAKAAADgEQAEgEAAgIIAAiRIAeAAIAACVQAAAMgDAJQgEAJgKAFQgKAFgQAAg");
	this.shape_3.setTransform(-25.2,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_4.setTransform(-38.8,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_5.setTransform(-49.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAbg");
	this.shape_6.setTransform(-60.9,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBUgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_7.setTransform(-73.2,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgjBTQgMgMAAgXIAAhfQAAgNAFgLQAFgLALgGQAKgHAQAAQAOAAALAIQALAGAFAMQAGAMAAAOIAAALIgfAAQAAgNgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAFQgEAEAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABdIgQAAIgFgNQgHAIgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_8.setTransform(-86.6,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-4,114,35.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(-10,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPBeIAAhPIgnhsIAhAAIAVBIIAAAAIAWhIIAhAAIgnBsIAABPg");
	this.shape_1.setTransform(-18.7,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBeIAAieIgfAAIAAgdIBdAAIAAAdIggAAIAACeg");
	this.shape_2.setTransform(-29.5,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPBeIAAi7IAfAAIAAC7g");
	this.shape_3.setTransform(-38.2,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBVgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgQgGgGQgFgHgLAAIgLAAg");
	this.shape_4.setTransform(-48,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgiBSQgNgNgBgYIAAiLIAgAAIAACMQAAALAEAFQAFAFAHAAQAJAAADgFQAFgFAAgLIAAiMIAgAAIAACLQAAAYgNANQgNANgXAAQgWAAgMgNg");
	this.shape_5.setTransform(-61.3,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAGAFAMQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAALAEAFQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAANgFALQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_6.setTransform(-74.4,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgsBeIAAi7IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAcg");
	this.shape_7.setTransform(-86.3,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgMgBgOIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANABAKAFQAJAGAGAKQAFALACANIgfADQgBgMgFgFQgFgEgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAJAIAIIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_8.setTransform(-98.2,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBVgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgQgGgGQgFgHgLAAIgLAAg");
	this.shape_9.setTransform(-110.1,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgsBeIAAi7IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAcg");
	this.shape_10.setTransform(-122.4,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgxBeIAAi7IAwAAQAXABANANQAMANAAAYQAAAHgDAIQgCAIgFAGQgFAHgIACQANAEAGALQAHAKAAASQAAAQgFAMQgFAMgLAHQgLAIgSAAgAgRBDIAOAAQAKAAAGgIQAFgGAAgPQAAgOgGgIQgGgHgMAAIgLAAgAgRgPIAMAAQAHgBAGgFQAGgHAAgLQAAgNgFgHQgFgGgJgBIgMAAg");
	this.shape_11.setTransform(-134.8,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgPBeIAAhPIgnhsIAhAAIAVBIIAAAAIAWhIIAhAAIgnBsIAABPg");
	this.shape_12.setTransform(-147.2,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAGAFAMQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAALAEAFQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAANgFALQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_13.setTransform(-159.6,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-14,163.1,35.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAVBdIgnhzIgBAAIAABzIgdAAIAAi6IAeAAIAlBqIABAAIAAhqIAdAAIAAC6g");
	this.shape.setTransform(-53.5,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPBdIAAi6IAfAAIAAC6g");
	this.shape_1.setTransform(-63.7,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZAAANAOQAOANAAAdQAAAPgDAJQgEALgFACQgFAGgFADIAbBUgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgQgGgHQgFgGgLAAIgLAAg");
	this.shape_2.setTransform(-79.3,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAwIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_3.setTransform(-91.5,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgsBdIAAi6IBVAAIAAAdIg0AAIAAAwIAoAAIAAAaIgoAAIAAA3IA3AAIAAAcg");
	this.shape_4.setTransform(-103.1,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZAAANAOQAOANAAAdQAAAPgDAJQgEALgFACQgFAGgFADIAbBUgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgQgGgHQgFgGgLAAIgLAAg");
	this.shape_5.setTransform(-115.4,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_6.setTransform(-127.9,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgKAAgOIAAheQAAgOAFgLQAGgLAKgGQALgGAPgBQAQAAALAHQALAIAFALQAFALAAAPIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHABgEAFQgEAEAAALIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAAOgFAKQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_7.setTransform(-140.3,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_8.setTransform(-158.2,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-2,121.2,35.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhBDWQgagQgNgaQgNgZAAggIAAjlQAAgfANgbQANgZAagQQAagPAnAAQAoAAAaAPQAaAQANAZQANAbgBAfIAADlQABAggNAZQgNAagaAQQgaAQgoAAQgnAAgagQgAgeiWQgJANAAAaIAADgQAAAZAJANQAIALAWAAQAXAAAJgLQAIgNABgZIAAjgQgBgagIgNQgJgLgXgBQgWABgIALg");
	this.shape.setTransform(-98.4,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglDfIAAl7IhKAAIAAhCIDfAAIAABCIhKAAIAAF7g");
	this.shape_1.setTransform(-126,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,0,59.3,78.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgxBeIAAi7IAwAAQAXABANANQAMANAAAYQAAAHgDAIQgCAIgFAGQgFAHgIACQANAEAGALQAHAKAAASQAAAQgFAMQgFAMgLAHQgLAIgSAAgAgRBDIAOAAQAKAAAGgIQAFgGAAgPQAAgOgGgIQgGgHgMAAIgLAAgAgRgPIAMAAQAHgBAGgFQAGgHAAgLQAAgNgFgHQgFgGgJgBIgMAAg");
	this.shape.setTransform(6.3,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgbBaQgKgHgFgLQgGgLAAgNIAAhfQAAgNAGgLQAFgLAKgGQALgGAQgBQARABALAGQAKAGAFALQAGALAAANIAABfQAAANgGALQgFALgKAHQgLAGgRAAQgQAAgLgGgAgMg9QgEAEABALIAABdQgBALAEAFQAEAFAIAAQAJAAAEgFQAEgFgBgLIAAhdQABgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_1.setTransform(-6.8,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgaBfIAAgcIAGAAQAKAAADgEQAEgEAAgIIAAiRIAeAAIAACVQAAAMgDAJQgEAJgKAFQgKAFgQAAg");
	this.shape_2.setTransform(-17.7,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgjBTQgMgNAAgWIAAhfQAAgNAFgLQAFgLALgGQAKgGAQgBQAOAAALAIQALAGAFAMQAGAMAAAOIAAAMIgfAAQAAgOgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAEQgEAFAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABeIgQAAIgFgPQgHAJgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_3.setTransform(-32.9,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAVBeIgnh0IgBAAIAAB0IgdAAIAAi7IAeAAIAlBqIABAAIAAhqIAdAAIAAC7g");
	this.shape_4.setTransform(-45.8,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPBeIAAi7IAfAAIAAC7g");
	this.shape_5.setTransform(-55.9,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgwBeIAAi7IAwAAQAXABANAOQANAOAAAcIAABJQAAAcgNAOQgNAOgXABgAgQBDIALAAQALAAAFgGQAGgGgBgPIAAhQQABgOgGgGQgFgGgLAAIgLAAg");
	this.shape_6.setTransform(-66,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBVgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgQgGgGQgFgHgLAAIgLAAg");
	this.shape_7.setTransform(-78.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii7IAnAAIAiC7gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_8.setTransform(-91.3,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAYBeIgYh7IAAAAIgUB7IgbAAIgki7IAeAAIAUB2IABAAIAVh2IAYAAIAWB2IABAAIASh2IAeAAIghC7g");
	this.shape_9.setTransform(-106,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgsBeIAAi7IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAcg");
	this.shape_10.setTransform(-119.9,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBVgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgQgGgGQgFgHgLAAIgLAAg");
	this.shape_11.setTransform(-132.2,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAVBeIgoh0IAAAAIAAB0IgdAAIAAi7IAeAAIAmBqIAAAAIAAhqIAdAAIAAC7g");
	this.shape_12.setTransform(-145.5,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgiBSQgNgNgBgYIAAiLIAgAAIAACMQAAALAEAFQAFAFAHAAQAJAAADgFQAFgFAAgLIAAiMIAgAAIAACLQAAAYgNANQgNANgXAAQgWAAgMgNg");
	this.shape_13.setTransform(-158.5,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-14,181.9,35.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAVBdIgohzIAAAAIAABzIgdAAIAAi6IAeAAIAmBqIAAAAIAAhqIAdAAIAAC6g");
	this.shape.setTransform(-30,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_1.setTransform(-42.3,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAlBdIAAiQIgBAAIgdCQIgOAAIgciQIgBAAIAACQIgcAAIAAi6IAqAAIAWBtIAAAAIAWhtIArAAIAAC6g");
	this.shape_2.setTransform(-61.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgbBaQgKgHgGgLQgFgKAAgOIAAhfQAAgNAFgLQAGgLAKgGQAMgGAPgBQARABAKAGQALAGAFALQAGALAAANIAABfQAAAOgGAKQgFALgLAHQgKAGgRAAQgPAAgMgGgAgMg9QgEAEAAALIAABdQAAAKAEAGQAEAFAIAAQAJAAAEgFQAEgGgBgKIAAhdQABgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_3.setTransform(-76.2,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZAAANAOQAOANAAAdQAAAPgDAJQgEALgFADQgFAFgFADIAbBUgAgSgIIALAAQALAAAFgGQAGgHAAgQQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_4.setTransform(-88.9,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgrBdIAAi6IBYAAIAAAdIg4AAIAAAxIApAAIAAAZIgpAAIAABTg");
	this.shape_5.setTransform(-101.2,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_6.setTransform(-118,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAVBdIgnhzIgBAAIAABzIgdAAIAAi6IAeAAIAlBqIABAAIAAhqIAdAAIAAC6g");
	this.shape_7.setTransform(-129.6,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAoAAIAAAZIgoAAIAAA3IA4AAIAAAcg");
	this.shape_8.setTransform(-141.6,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAYBdIgYh6IAAAAIgUB6IgbAAIgki6IAeAAIAUB3IABAAIAVh3IAYAAIAWB3IABAAIASh3IAeAAIghC6g");
	this.shape_9.setTransform(-156.6,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-3,145.7,35.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABZDfIAAlbIgBAAIhGFbIgjAAIhGlbIgBAAIAAFbIhDAAIAAm9IBlAAIA2EDIAAAAIA3kDIBlAAIAAG9g");
	this.shape.setTransform(-73.8,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglDfIAAm9IBLAAIAAG9g");
	this.shape_1.setTransform(-101.3,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglDfIAAl7IhKAAIAAhCIDfAAIAABCIhKAAIAAF7g");
	this.shape_2.setTransform(-122,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,0,83.4,78.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_tim();

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


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib._728_border();
	this.instance.setTransform(0,0,0.643,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(358));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(342).to({_off:false},0).to({y:62},13).wait(3));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(336).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 5
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(243).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).wait(23));

	// Layer 6
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(236).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).wait(23));

	// Layer 4
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(858.1,63,1,1,0,0,0,108.1,23.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142).to({_off:false},0).to({x:498.1},12).wait(73).to({alpha:0},9).wait(122));

	// Layer 3
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(833.1,26.6,1,1,0,0,0,83.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(135).to({_off:false},0).to({x:473.1},12).wait(80).to({alpha:0},9).wait(122));

	// Layer 12
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(339.3,134.8,1,1,0,0,0,40.3,53.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(127).to({_off:false},0).to({y:44.8},12).wait(88).to({alpha:0},9).wait(122));

	// Layer 2
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(870.1,63,1,1,0,0,0,125.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({x:510.1},12).wait(66).to({alpha:0},9).wait(232));

	// Layer 1
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(845.1,26.6,1,1,0,0,0,100.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).to({x:485.1},12).wait(74).to({alpha:0},9).wait(232));

	// Layer 13
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(321.1,134.8,1,1,0,0,0,57.1,53.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({y:44.8},12).wait(81).to({alpha:0},9).wait(232));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({x:89.5},12).wait(334));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},12).wait(346));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;