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
		{src:"_200_elissa.jpg", id:"_200_elissa"},
		{src:"_200_footer.png", id:"_200_footer"},
		{src:"_200_logo.png", id:"_200_logo"},
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


(lib._200_elissa = function() {
	this.initialize(img._200_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib._200_footer = function() {
	this.initialize(img._200_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


(lib._200_logo = function() {
	this.initialize(img._200_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(61.8,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBeIAAi7IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_1.setTransform(53.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBeIAAi7IBUAAIAAAdIg0AAIAAAxIAoAAIAAAaIgoAAIAAA3IA4AAIAAAcg");
	this.shape_2.setTransform(41.9,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZAAANANQAOANAAAeQAAAPgDAKQgEAJgFAEQgFAFgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_3.setTransform(29.6,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgrBeIAAi7IBYAAIAAAdIg4AAIAAAxIApAAIAAAaIgpAAIAABTg");
	this.shape_4.setTransform(17.4,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgeALIAAgVIA9AAIAAAVg");
	this.shape_5.setTransform(7,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBeIAAieIggAAIAAgdIBdAAIAAAdIggAAIAACeg");
	this.shape_6.setTransform(-2.4,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgxBeIAAi7IAwAAQAXABANAMQAMANAAAZQAAAIgDAHQgCAIgFAGQgFAHgIADQANADAGALQAHAKAAASQAAAQgFAMQgFAMgLAHQgLAIgSAAgAgRBDIAOAAQAKAAAGgIQAFgGAAgPQAAgOgGgIQgGgHgMAAIgLAAgAgRgPIAMAAQAHgBAGgFQAGgHAAgLQAAgNgFgHQgFgGgJgBIgMAAg");
	this.shape_7.setTransform(-13.8,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgrBeIAAi7IBUAAIAAAdIg0AAIAAAxIAoAAIAAAaIgoAAIAAA3IA4AAIAAAcg");
	this.shape_8.setTransform(-25.9,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgwBeIAAi7IAwAAQAXABANAOQANAOAAAcIAABJQAAAcgNAOQgNAOgXABgAgQBDIAMAAQAKAAAGgGQAFgFgBgPIAAhQQABgPgFgGQgGgGgKAAIgMAAg");
	this.shape_9.setTransform(-38.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-6,113.9,35.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVArIAAhVIAVAAQAKAAAGAHQAGAGABANIAAAhQgBANgGAGQgGAHgKAAgAgHAfIAGAAQADAAADgDQACgDAAgHIAAgkQAAgGgCgDQgDgDgDAAIgGAAg");
	this.shape.setTransform(48.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUArIAAhVIAnAAIAAANIgXAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_1.setTransform(43.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_2.setTransform(38,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_3.setTransform(33,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPAmQgGgGgBgMIAAg+IAPAAIAAA/QAAAFACACQADACACAAQADAAADgCQACgCAAgFIAAg/IAOAAIAAA+QAAAMgGAGQgGAFgKAAQgJAAgGgFg");
	this.shape_4.setTransform(27.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgVArIAAhVIAVAAQALAAAFAHQAGAGABANIAAAhQgBANgGAGQgFAHgLAAgAgHAfIAGAAQADAAADgDQADgDgBgHIAAgkQABgGgDgDQgDgDgDAAIgGAAg");
	this.shape_5.setTransform(21.4,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_6.setTransform(15.7,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAJArIgJgkIgEAAIgEAAIAAAkIgPAAIAAhVIAVAAQALAAAGAGQAHAGAAAOIgCALIgEAFIgFADIANAogAgIgDIAGAAQAEAAACgDQADgDAAgHQAAgIgDgDQgCgDgEAAIgGAAg");
	this.shape_7.setTransform(10.1,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPAmQgGgFAAgLIAAgqQAAgHADgFQACgFAFgDQAEgDAHAAQAHAAAEADQAFADADAGQACAFAAAHIAAAFIgOAAIAAgKQgCgDgCgBQgCgCgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCACAAAGIAAAqQAAAFABACQACACADAAQADAAADgDQABgDAAgGIAAgIIgHAAIAAgLIAWAAIAAArIgHAAIgDgHQgDAEgDADQgEABgDAAQgJAAgFgGg");
	this.shape_8.setTransform(4,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgVArIAAhVIAVAAQALAAAFAHQAGAGABANIAAAhQgBANgGAGQgFAHgLAAgAgHAfIAFAAQAEAAADgDQADgDgBgHIAAgkQABgGgDgDQgDgDgEAAIgFAAg");
	this.shape_9.setTransform(-4.6,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAKArIgRg0IgBAAIAAA0IgOAAIAAhVIAPAAIAQAwIAAAAIAAgwIANAAIAABVg");
	this.shape_10.setTransform(-10.6,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_11.setTransform(-16.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-8.7,74.9,18.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgGAOIAGgOIgFAAIAAgNIAMAAIAAANIgHAOg");
	this.shape.setTransform(56.4,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPAmQgGgGgBgMIAAg+IAPAAIAAA/QABAFABACQADACACAAQADAAADgCQACgCAAgFIAAg/IAOAAIAAA+QAAAMgGAGQgGAFgKAAQgJAAgGgFg");
	this.shape_1.setTransform(52.1,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVArIAAhVIAVAAQALAAAFAHQAGAGABANIAAAhQgBANgGAGQgFAHgLAAgAgHAfIAGAAQADAAADgDQADgDgBgHIAAgkQABgGgDgDQgDgDgDAAIgGAAg");
	this.shape_2.setTransform(46.1,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgMApQgEgDgDgFQgCgFgBgGIAAgrQABgGACgFQADgFAEgDQAFgDAHAAQAIAAAEADQAFADADAFQADAFgBAGIAAArQABAGgDAFQgDAFgFADQgEADgIAAQgHAAgFgDgAgEgcQgCADAAAEIAAArQAAAEACADQABACADAAQAEAAABgCQACgDAAgEIAAgrQAAgEgCgDQgBgCgEAAQgDAAgBACg");
	this.shape_3.setTransform(40.1,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgMApQgEgDgDgFQgDgFABgGIAAgrQgBgGADgFQADgFAEgDQAFgDAHAAQAIAAAFADQAEADADAFQACAFABAGIAAArQgBAGgCAFQgDAFgEADQgFADgIAAQgHAAgFgDgAgEgcQgCADAAAEIAAArQAAAEACADQABACADAAQAEAAABgCQACgDAAgEIAAgrQAAgEgCgDQgBgCgEAAQgDAAgBACg");
	this.shape_4.setTransform(31.5,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_5.setTransform(26.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgWArIAAhVIAWAAQAKAAAHAHQAFAGAAANIAAAhQAAANgFAGQgHAHgKAAgAgGAfIAEAAQAFAAACgDQADgDAAgHIAAgkQAAgGgDgDQgCgDgFAAIgEAAg");
	this.shape_6.setTransform(18.2,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgTArIAAhVIAlAAIAAANIgXAAIAAAWIASAAIAAALIgSAAIAAAaIAZAAIAAANg");
	this.shape_7.setTransform(12.6,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAJArIgJgkIgEAAIgEAAIAAAkIgPAAIAAhVIAVAAQALAAAGAGQAHAGAAAOIgCALIgEAFIgFADIANAogAgIgDIAGAAQAEAAACgDQADgDAAgHQAAgIgDgDQgCgDgEAAIgGAAg");
	this.shape_8.setTransform(6.9,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAJArIgJgkIgEAAIgEAAIAAAkIgPAAIAAhVIAVAAQALAAAGAGQAHAGAAAOIgCALIgEAFIgFADIANAogAgIgDIAGAAQAEAAACgDQADgDAAgHQAAgIgDgDQgCgDgEAAIgGAAg");
	this.shape_9.setTransform(0.9,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgTArIAAhVIAlAAIAAANIgWAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_10.setTransform(-4.7,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgUArIAAhVIAoAAIAAANIgZAAIAAAWIASAAIAAALIgSAAIAAAng");
	this.shape_11.setTransform(-10.1,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgLApQgFgEgCgFQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgGQgDgFAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCACAAAEQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_12.setTransform(-15.6,5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAJArIgQg0IgBAAIAAA0IgOAAIAAhVIAPAAIAQAwIAAAAIAAgwIANAAIAABVg");
	this.shape_13.setTransform(-21.2,5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_14.setTransform(-26.9,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AAJArIgJgkIgEAAIgEAAIAAAkIgPAAIAAhVIAVAAQALAAAGAGQAHAGAAAOIgCALIgEAFIgFADIANAogAgIgDIAGAAQAEAAACgDQADgDAAgHQAAgIgDgDQgCgDgEAAIgGAAg");
	this.shape_15.setTransform(-32.5,5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_16.setTransform(-37.9,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-3.7,102.2,18.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgLAYIAKgYIgJAAIAAgXIAWAAIAAAXIgMAYg");
	this.shape.setTransform(70.5,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_1.setTransform(63.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgJgFg");
	this.shape_2.setTransform(53.3,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_3.setTransform(44.4,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUArIAAhVIAnAAIAAANIgYAAIAAAWIASAAIAAALIgSAAIAAAaIAZAAIAAANg");
	this.shape_4.setTransform(35.3,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgLApQgFgDgCgGQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgFQgDgGAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCADAAADQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_5.setTransform(29.7,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgMApQgFgDgCgFQgCgFgBgGIAAgrQABgGACgFQACgFAFgDQAGgDAGAAQAHAAAFADQAFADADAFQACAFAAAGIAAArQAAAGgCAFQgDAFgFADQgFADgHAAQgGAAgGgDgAgFgcQgBADAAAEIAAAqQAAAFABADQACACADAAQAEAAABgCQADgDAAgFIAAgqQAAgEgDgDQgBgCgEAAQgDAAgCACg");
	this.shape_6.setTransform(24.1,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAHArIAAgnIgOAAIAAAnIgOAAIAAhVIAOAAIAAAjIAOAAIAAgjIAQAAIAABVg");
	this.shape_7.setTransform(18.1,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgLApQgFgDgCgFQgDgFAAgGIAAgrQAAgGADgFQACgFAFgDQAFgDAGAAQAIAAAEADQAFADACAGQADAFAAAHIAAAGIgPAAIAAgHQAAgFgCgDQgCgCgDAAQgCAAgCACQgCADAAAEIAAAqQAAAFACADQACACACAAQAEAAACgCQABgCAAgFIAAgKIAPAAIAAAKQAAAGgDAFQgCAFgFADQgEADgIAAQgGAAgFgDg");
	this.shape_8.setTransform(12.1,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgUArIAAhVIAmAAIAAANIgWAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_9.setTransform(3.9,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAIArIAAgnIgPAAIAAAnIgPAAIAAhVIAPAAIAAAjIAPAAIAAgjIAOAAIAABVg");
	this.shape_10.setTransform(-1.9,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgLApQgFgDgCgGQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgFQgDgGAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCADAAADQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_11.setTransform(-7.6,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-0.7,87.2,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(67,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgLApQgFgEgCgFQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgGQgDgFAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCACAAAEQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_1.setTransform(62.9,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUArIAAhVIAnAAIAAANIgYAAIAAAWIASAAIAAALIgSAAIAAAaIAZAAIAAANg");
	this.shape_2.setTransform(57.8,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPAnQgFgHgBgKIAAgrQAAgGACgFQADgFAFgDQAFgDAGAAQAHAAAEADQAFADADAGQADAFgBAHIAAAGIgOAAIgBgKQgBgEgCgCQgBgBgCAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgCACAAAFIAAArQAAAEABADQADACACAAQADABACgDQACgDAAgHIAAgIIgIAAIAAgLIAXAAIAAArIgHAAIgDgGQgDADgEACQgDACgDAAQgJAAgFgFg");
	this.shape_3.setTransform(51.9,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUArIAAhVIAnAAIAAANIgXAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_4.setTransform(46.4,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgSArIAAhVIAPAAIAABIIAWAAIAAANg");
	this.shape_5.setTransform(41.5,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgSArIAAhVIAPAAIAABIIAWAAIAAANg");
	this.shape_6.setTransform(36.9,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgMApQgFgDgCgFQgCgFgBgGIAAgrQABgGACgFQACgFAFgDQAGgDAGAAQAHAAAFADQAFADADAFQACAFAAAGIAAArQAAAGgCAFQgDAFgFADQgFADgHAAQgGAAgGgDgAgFgcQgBADAAAEIAAAqQAAAFABADQACACADAAQAEAAABgCQADgDAAgFIAAgqQAAgEgDgDQgBgCgEAAQgDAAgCACg");
	this.shape_7.setTransform(31.3,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgLApQgFgDgDgFQgCgFAAgGIAAgrQAAgGACgFQADgFAFgDQAFgDAGAAQAIAAAEADQAFADADAGQACAFAAAHIAAAGIgPAAIAAgHQAAgFgCgDQgCgCgDAAQgCAAgCACQgCADAAAEIAAAqQAAAFACADQACACACAAQAEAAABgCQACgDAAgEIAAgKIAPAAIAAAKQAAAGgCAFQgDAFgFADQgEADgIAAQgGAAgFgDg");
	this.shape_8.setTransform(25.3,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgLApQgFgEgCgFQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgGQgDgFAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCACAAAEQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_9.setTransform(16.9,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgPAmQgGgGgBgMIAAg+IAQAAIAAA/QAAAFACACQABACADAAQAEAAABgCQACgCAAgFIAAg/IAPAAIAAA+QAAAMgGAGQgGAFgKAAQgJAAgGgFg");
	this.shape_10.setTransform(11.3,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgMApQgFgDgCgFQgDgFAAgGIAAgrQAAgGADgFQACgFAFgDQAFgDAHAAQAHAAAFADQAFADADAFQACAFAAAGIAAArQAAAGgCAFQgDAFgFADQgFADgHAAQgHAAgFgDgAgFgcQgCADABAEIAAAqQgBAFACADQACACADAAQAEAAACgCQACgDAAgFIAAgqQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_11.setTransform(5.3,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgGArIAAhVIANAAIAABVg");
	this.shape_12.setTransform(0.6,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgPAnQgGgHAAgKIAAgrQAAgGACgFQADgFAFgDQAEgDAHAAQAGAAAGADQAEADADAGQACAFABAHIAAAGIgPAAIgBgKQgBgEgBgCQgCgBgCAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBABAAAAQgCACAAAFIAAArQAAAEACADQACACACAAQADABACgDQACgDAAgHIAAgIIgIAAIAAgLIAXAAIAAArIgHAAIgDgGQgDADgEACQgDACgDAAQgJAAgFgFg");
	this.shape_13.setTransform(-4.1,-1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgGArIAAhVIANAAIAABVg");
	this.shape_14.setTransform(-8.7,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_15.setTransform(-12.7,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgLApQgFgEgCgFQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgGQgDgFAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCACAAAEQAAAFADAEIAGAHIAJAGIAHAKQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_16.setTransform(-17.8,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgTArIAAhVIAlAAIAAANIgXAAIAAAWIASAAIAAALIgSAAIAAAaIAZAAIAAANg");
	this.shape_17.setTransform(-22.9,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAJArIgJgkIgEAAIgEAAIAAAkIgPAAIAAhVIAVAAQALAAAGAGQAHAGAAAOIgCALIgEAFIgFADIANAogAgIgDIAGAAQAEAAACgDQADgDAAgHQAAgIgDgDQgCgDgEAAIgGAAg");
	this.shape_18.setTransform(-28.6,-1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgXArIAAhVIAWAAQAMAAAGAGQAHAGAAAOQAAANgHAEQgGAGgMAAIgHAAIAAAkgAgIgDIAGAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgDgFAAIgGAAg");
	this.shape_19.setTransform(-34.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-10.5,110.3,18.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape.setTransform(38.9,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_1.setTransform(33.9,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWArIAAhVIAWAAQAKAAAHAHQAFAGAAANIAAAhQAAANgFAGQgHAHgKAAgAgHAfIAGAAQAEAAACgDQACgDABgHIAAgkQgBgGgCgDQgCgDgEAAIgGAAg");
	this.shape_2.setTransform(25.6,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgTArIAAhVIAlAAIAAANIgWAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_3.setTransform(20,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_4.setTransform(14.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgXArIAAhVIAWAAQAMAAAGAGQAHAGAAAOQAAANgHAEQgGAGgMAAIgHAAIAAAkgAgIgDIAGAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgDgFAAIgGAAg");
	this.shape_5.setTransform(9.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgUArIAAhVIAnAAIAAANIgXAAIAAAWIARAAIAAALIgRAAIAAAaIAZAAIAAANg");
	this.shape_6.setTransform(4,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgLApQgFgDgDgFQgCgFAAgGIAAgrQAAgGACgFQADgFAFgDQAFgDAGAAQAIAAAFADQAEADADAGQACAFAAAHIAAAGIgPAAIAAgHQAAgFgCgDQgCgCgDAAQgDAAgBACQgCADAAAEIAAArQAAAEACADQABACADAAQAEAAABgCQACgDAAgEIAAgKIAPAAIAAAKQAAAGgCAFQgDAFgEADQgFADgIAAQgGAAgFgDg");
	this.shape_7.setTransform(-1.8,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgLApQgFgDgCgFQgDgFAAgGIAAgrQAAgGADgFQACgFAFgDQAFgDAGAAQAIAAAEADQAFADACAGQADAFAAAHIAAAGIgPAAIAAgHQAAgFgCgDQgCgCgDAAQgCAAgCACQgCADAAAEIAAArQAAAEACADQACACACAAQAEAAABgCQADgDgBgEIAAgKIAPAAIAAAKQAAAGgDAFQgCAFgFADQgEADgIAAQgGAAgFgDg");
	this.shape_8.setTransform(-7.8,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_9.setTransform(-13.5,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgLApQgFgEgCgFQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgEQAAgFgDgEIgFgIIgJgGQgFgDgDgGQgDgFAAgIQAAgKAGgFQAGgGAJAAQAGAAAFADQAEADACAFQADAEABAGIgOABQgBgFgCgCQgDgCgCAAQgCAAgCACQgCACAAAEQAAAFADAEIAGAHIAJAGQAEAEADAGQADAFAAAHQAAAHgDAFQgDAFgFACQgFADgGAAQgGAAgFgDg");
	this.shape_10.setTransform(-21.5,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_11.setTransform(-26.8,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AALArIgLg3IAAAAIgIA3IgNAAIgRhVIAPAAIAJA1IAAAAIAJg1IAKAAIALA1IAIg1IAOAAIgPBVg");
	this.shape_12.setTransform(-33.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-6,82.9,18.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAaBsIgGgwIgmAAIgIAwIgjAAIAnjXIAtAAIAnDXgAAPAbIgPhbIAAAAIgOBbIAdAAg");
	this.shape.setTransform(67.5,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_1.setTransform(54.1,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_2.setTransform(40.8,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgRBsIAAhaIgth9IAmAAIAYBTIABAAIAZhTIAlAAIgsB9IAABag");
	this.shape_3.setTransform(27.6,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AguBsIAAjXIAlAAIAAC2IA4AAIAAAhg");
	this.shape_4.setTransform(15.7,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_5.setTransform(3,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-3.7,82.4,40);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape.setTransform(119,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXArIAAhVIAWAAQAMAAAGAGQAHAGAAAOQAAANgHAEQgGAGgMAAIgHAAIAAAkgAgIgDIAGAAQAFAAADgDQADgDAAgHQAAgIgDgDQgDgDgFAAIgGAAg");
	this.shape_1.setTransform(113.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPAmQgFgFgBgLIAAgqQAAgHACgFQADgFAFgDQAFgDAGAAQAHAAAEAEQAFADADAFQADAFgBAHIAAAFIgOAAIgBgKQgBgDgCgBQgBgCgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCACAAAGIAAAqQAAAEACADQACACACAAQADABACgEQACgDAAgGIAAgIIgIAAIAAgLIAXAAIAAArIgHAAIgDgHQgDAFgEACQgDABgDAAQgJAAgFgGg");
	this.shape_2.setTransform(107.3,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgSArIAAhVIAPAAIAABIIAWAAIAAANg");
	this.shape_3.setTransform(99.6,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgMApQgEgDgDgFQgDgFABgGIAAgqQgBgHADgFQADgFAEgDQAFgDAHAAQAIAAAFADQAEADADAFQACAFAAAHIAAAqQAAAGgCAFQgDAFgEADQgFADgIAAQgHAAgFgDgAgEgbQgCACAAAFIAAAqQAAAFACACQABACADAAQAEAAABgCQACgCAAgFIAAgqQAAgFgCgCQgBgDgEAAQgDAAgBADg");
	this.shape_4.setTransform(94,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgMApQgFgDgCgFQgCgFgBgGIAAgqQABgHACgFQACgFAFgDQAGgDAGAAQAHAAAFADQAFADADAFQACAFAAAHIAAAqQAAAGgCAFQgDAFgFADQgFADgHAAQgGAAgGgDgAgFgbQgBACAAAFIAAAqQAAAFABACQACACADAAQAEAAABgCQADgCAAgFIAAgqQAAgFgDgCQgBgDgEAAQgDAAgCADg");
	this.shape_5.setTransform(88,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAHArIAAgnIgOAAIAAAnIgOAAIAAhVIAOAAIAAAjIAOAAIAAgjIAQAAIAABVg");
	this.shape_6.setTransform(82,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgLApQgFgDgCgFQgDgFAAgGIAAgqQAAgHADgFQACgFAFgDQAFgDAGAAQAIAAAEAEQAFADACAFQADAFAAAHIAAAHIgPAAIAAgHQAAgGgCgCQgCgDgDAAQgCAAgCADQgCACAAAFIAAAqQAAAFACACQACACACAAQAEAAACgCQABgCAAgEIAAgLIAPAAIAAAKQAAAGgDAFQgCAFgFADQgEADgIAAQgGAAgFgDg");
	this.shape_7.setTransform(76,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgLApQgFgDgCgGQgDgFAAgHIAOgCQAAAHADADQACADACAAQAEAAACgCQACgCAAgDQAAgGgDgDIgFgIIgJgHQgFgDgDgGQgDgFAAgHQAAgKAGgGQAGgGAJAAQAGAAAFADQAEACACAFQADAFABAGIgOACQgBgGgCgCQgDgCgCAAQgCAAgCADQgCABAAAFQAAAEADAEIAGAHIAJAGIAHAJQADAGAAAHQAAAHgDAFQgDAFgFADQgFACgGAAQgGAAgFgDg");
	this.shape_8.setTransform(70.3,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAIArIAAgnIgOAAIAAAnIgQAAIAAhVIAQAAIAAAjIAOAAIAAgjIAOAAIAABVg");
	this.shape_9.setTransform(62,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgPAmQgFgFgBgLIAAgqQAAgHACgFQADgFAFgDQAFgDAGAAQAHAAAEAEQAFADADAFQADAFgBAHIAAAFIgOAAIgBgKQgBgDgCgBQgBgCgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCACAAAGIAAAqQAAAEABADQADACACAAQADABACgEQACgDAAgGIAAgIIgIAAIAAgLIAXAAIAAArIgHAAIgDgHQgDAFgEACQgDABgDAAQgJAAgFgGg");
	this.shape_10.setTransform(56,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgGArIAAhVIANAAIAABVg");
	this.shape_11.setTransform(51.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAHArIAAgnIgOAAIAAAnIgOAAIAAhVIAOAAIAAAjIAOAAIAAgjIAQAAIAABVg");
	this.shape_12.setTransform(46.7,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgJApQgFgBgCgFQgDgEAAgHIAAgHIANAAIAAAHQAAAEACACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQACAAACgDQACgCAAgGIAAgUQAAgCgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgCAAgBABIgDADIgMAAIABgLIAAgOIAAgRIAjAAIgBAMIgVAAIgBATIAAAAQADgDACgBIAEgBQAJAAAEAGQADAGAAAJIAAAMQAAANgEAHQgFAGgLAAQgEAAgFgCg");
	this.shape_13.setTransform(38.3,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_14.setTransform(34.3,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AACArIAAgVIgYAAIAAgLIAXg1IAOAAIAAA1IAIAAIAAALIgIAAIAAAVgAgLALIANAAIAAggg");
	this.shape_15.setTransform(30.2,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAKArIgCgTIgPAAIgCATIgPAAIAQhVIARAAIAQBVgAAFALIgFgkIAAAAIgFAkIAKAAg");
	this.shape_16.setTransform(22.3,6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAHArIAAgnIgNAAIAAAnIgQAAIAAhVIAQAAIAAAjIANAAIAAgjIAPAAIAABVg");
	this.shape_17.setTransform(14,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgGArIAAhIIgOAAIAAgNIApAAIAAANIgOAAIAABIg");
	this.shape_18.setTransform(8.7,6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgGArIAAhVIANAAIAABVg");
	this.shape_19.setTransform(4.7,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AALArIgLg3IAAAAIgIA3IgNAAIgRhVIAOAAIAJA1IABAAIAJg1IAKAAIALA1IAJg1IANAAIgPBVg");
	this.shape_20.setTransform(-1.1,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-3.2,130.9,18.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_elissa();
	this.instance.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.5,200,155);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape_12.setTransform(129.2,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_13.setTransform(117,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_14.setTransform(101.5,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AhJCJIAAkRIBGAAQAkABARASQASATAAAjQAAAMgDALQgEAMgHAIQgHAKgMAEQASAGAKAPQAKAQAAAaQABAXgIASQgHASgQAKQgRALgaAAgAgaBiIAUAAQARAAAIgLQAHgKAAgVQAAgVgJgLQgJgKgTAAIgPAAgAgagXIARAAQAMAAAJgJQAIgJABgRQAAgTgIgKQgHgKgOAAIgSAAg");
	this.shape_15.setTransform(84.1,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_16.setTransform(65.9,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("Ag0B4QgTgTAAgjIAAjLIAwAAIAADNQAAAPAFAHQAHAIALgBQAMABAGgIQAHgHgBgPIAAjNIAvAAIAADLQABAjgUATQgSASgiABQgggBgUgSg");
	this.shape_17.setTransform(48,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_18.setTransform(31.8,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_19.setTransform(15.3,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgWCJIg5kRIAuAAIAhC9IAAAAIAii9IAvAAIg6ERg");
	this.shape_20.setTransform(-1.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-25,147.7,49.6);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgWCJIAAhyIg5ifIAwAAIAfBpIAAAAIAghpIAwAAIg5CfIAAByg");
	this.shape_17.setTransform(143.2,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("Ag7CJIAAkRIAvAAIAADoIBIAAIAAApg");
	this.shape_18.setTransform(128.1,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AhJCJIAAkRIBGAAQAkABARASQASATAAAjQAAAMgDALQgEAMgHAIQgHAKgMAEQASAGAKAPQAKAQAAAaQABAXgIASQgHASgQAKQgRALgaAAgAgaBiIAUAAQARAAAIgLQAHgKAAgVQAAgVgJgLQgJgKgTAAIgPAAgAgagXIARAAQAMAAAJgJQAIgJABgRQAAgTgIgKQgHgKgOAAIgSAAg");
	this.shape_19.setTransform(110.7,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgWCJIAAkRIAtAAIAAERg");
	this.shape_20.setTransform(95.7,-1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AhGCJIAAkRIBGAAQAiAAATAVQATAUAAAqIAABrQAAAqgTAUQgTAVgiAAgAgYBiIARAAQARAAAHgIQAIgJAAgVIAAh2QAAgWgIgJQgHgIgRAAIgRAAg");
	this.shape_21.setTransform(80.9,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AhACJIAAkRIB8AAIAAApIhNAAIAABHIA7AAIAAAnIg7AAIAABRIBSAAIAAApg");
	this.shape_22.setTransform(63.4,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_23.setTransform(45.5,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgmCDQgQgJgIgQQgIgQAAgUIAAiLQAAgUAIgQQAIgPAQgKQAQgJAWAAQAYAAAQAKQAPAKAIARQAHARAAAVIAAAUIguAAIAAgVQgBgSgHgIQgGgIgKABQgMAAgFAHQgGAIABAPIAACJQgBAPAGAIQAFAHAMAAQANAAAFgHQAGgHAAgNIAAghIAuAAIAAAfQAAAUgHAQQgIAQgPAJQgQAJgYAAQgWAAgQgJg");
	this.shape_24.setTransform(26,-1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AAfCJIg7iqIAAAAIAACqIgrAAIAAkRIAsAAIA4CbIAAAAIAAibIAqAAIAAERg");
	this.shape_25.setTransform(7.1,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgWCJIAAkRIAtAAIAAERg");
	this.shape_26.setTransform(-7.7,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-26,168.8,49.6);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgHAKIAAgTIAPAAIAAATg");
	this.shape_13.setTransform(153.2,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVALgNQAKgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgBAOIAtAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_14.setTransform(146.1,-5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgFBBIAAiBIALAAIAACBg");
	this.shape_15.setTransform(139,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgZA2IgCAKIgKAAQABgFAAgQIAAhsIAMAAIAAAuIABgBQANgKAKAAQAGAAAGACQAHAEAGAEQAGAGADAKQAEAHAAANQAAAOgEAKQgDAKgGAFQgGAGgHACQgGACgGABQgNgBgMgLgAgYgGIAAAvQAIAIAFACQAFADAGAAQAKAAAHgJQAIgKAAgRQAAglgZAAQgMAAgMANg");
	this.shape_16.setTransform(131.9,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgbApQgIgGAAgNQAAgPANgHQANgIAegGIAAgFQAAgRgUAAQgHAAgGAEQgGAFgDAGIgLgGQALgUAWAAQAOAAAJAHQAJAHAAAOIAAAtQAAAMADAIIgOAAIgBgNQgNAPgQAAQgLAAgIgHgAgWAWQAAAHAFAEQAFAEAGAAQAGAAAHgFQAIgEAGgHIAAgXQgrAFAAATg");
	this.shape_17.setTransform(121.9,-5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgMA/QgGgCgGgGQgGgFgDgKQgEgKAAgOQAAgMAEgIQADgKAGgGQAGgEAGgEQAGgCAGAAQALAAAMAKIABABIAAguIANAAIAABsQAAAQABAFIgNAAIgBgJQgDAEgHADQgHADgHABQgFgBgHgCgAgYASQAAARAHAKQAHAJAKAAQAHAAAFgDQAFgCAHgIIAAgvQgMgNgMAAQgYAAAAAlg");
	this.shape_18.setTransform(112.2,-7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgUAvIAAhbIAMAAIAAASIABAAQAFgKAGgFQAGgFAMAAIAAANQgMAAgIAIQgFAHgFAPIAAAyg");
	this.shape_19.setTransform(105,-5.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgbAiQgKgNAAgVQAAgUAKgNQAKgOARAAQASAAAKAOQAKANAAAUQAAAVgKANQgKAOgSAAQgRAAgKgOgAgRgaQgHAKAAAQQAAARAHAKQAHAKAKAAQALAAAHgKQAHgKAAgRQAAgQgHgKQgHgKgLAAQgKAAgHAKg");
	this.shape_20.setTransform(97,-5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgIBBIAAhQIgPAAIAAgLIAPAAIAAgLQAAgQAFgGQAEgFAMAAIALAAIAAAMIgDgBIgGAAQgHAAgCACQgDADAAAIIAAAOIAUAAIAAALIgUAAIAABQg");
	this.shape_21.setTransform(89.5,-7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgIBBIAAhQIgQAAIAAgLIAQAAIAAgLQAAgQAFgGQAEgFAMAAIAMAAIAAAMIgFgBIgFAAQgGAAgDACQgDADAAAIIAAAOIAUAAIAAALIgUAAIAABQg");
	this.shape_22.setTransform(83.5,-7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAjBBIgLgpIguAAIgMApIgPAAIAoiBIATAAIAoCBgAgTAMIAnAAIgUhCIAAAAg");
	this.shape_23.setTransform(75,-7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgjA/IAAgLIAIABQATgBAFgWIghhcIAOAAIAXBFIAAAAIAXhFIANAAIghBjQgHAbgXAAIgJgBg");
	this.shape_24.setTransform(60,-3.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgFBBIAAiBIALAAIAACBg");
	this.shape_25.setTransform(53.5,-7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVAKgNQALgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgCAOIAuAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_26.setTransform(46.6,-5.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AAvAvIAAhBQAAgRgPAAQgGAAgEADIgIAEIgIAHIAABEIgLAAIAAhBQAAgRgPAAQgFAAgFADIgIAEIgIAHIAABEIgMAAIAAhbIAMAAIAAAMIABgBQAMgNAPAAQAJAAAGAEQAEAEADAHQAOgPAPAAQAbAAAAAcIAABBg");
	this.shape_27.setTransform(34.5,-5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgZAkQgMgMAAgYQAAgVAKgNQALgNAQAAQAPAAAKALQAKAKAAAVIAAAHIg7AAQAAAPAIAKQAIAKAKAAQARAAAJgQIAKAFQgGAKgIAGQgIAGgOAAQgPAAgMgMgAgQgcQgGAHgBAOIAtAAQAAgNgGgIQgGgIgKAAQgKAAgGAIg");
	this.shape_28.setTransform(22.6,-5.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AgVAvIAAhbIAOAAIAAASIAAAAQAGgKAEgFQAIgFAKAAIAAANQgLAAgHAIQgGAHgEAPIAAAyg");
	this.shape_29.setTransform(15.5,-5.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgEA7QgEgDgBgJIAAhDIgOAAIAAgLIAOAAIAAgfIAMAAIAAAfIAVAAIAAALIgVAAIAABBQAAAGAKAAIALgBIAAALQgEACgLAAQgJAAgEgEg");
	this.shape_30.setTransform(8.9,-6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AAXAuIgXgmIgWAmIgPAAIAegvIgbgsIAPAAIATAhIASghIAPAAIgaAsIAeAvg");
	this.shape_31.setTransform(2,-5.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("AgnBBIAAiBIBMAAIAAANIg+AAIAAArIArAAIAAALIgrAAIAAAxIBBAAIAAANg");
	this.shape_32.setTransform(-7,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-20,173.2,25.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(310));

	// Layer 1
	this.instance_1 = new lib.Symbol3copy2();
	this.instance_1.setTransform(152,163,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 2
	this.instance_2 = new lib.Symbol2copy2();
	this.instance_2.setTransform(150,218.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).to({y:194.5},11).wait(15));

	// Layer 3
	this.instance_3 = new lib.Symbol13_1();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(267).to({_off:false},0).to({x:108.3,alpha:1},11).wait(32));

	// Layer 11
	this.instance_4 = new lib.Symbol12_1();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(261).to({_off:false},0).to({x:103,alpha:1},11).wait(38));

	// Layer 16
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({x:77.7,alpha:1},11).wait(43));

	// Layer 10
	this.instance_6 = new lib.Symbol14();
	this.instance_6.setTransform(388.1,44.8,1,1,0,0,0,78.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(163).to({_off:false},0).to({x:208.1},13).wait(71).to({alpha:0},8).wait(55));

	// Layer 9
	this.instance_7 = new lib.Symbol13();
	this.instance_7.setTransform(370.1,38.6,1,1,0,0,0,49.1,11.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({x:80.1},13).wait(78).to({alpha:0},8).wait(55));

	// Layer 7
	this.instance_8 = new lib.Symbol12();
	this.instance_8.setTransform(381.3,19.6,1,1,0,0,0,67.3,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:201.3},13).wait(84).to({alpha:0},8).wait(55));

	// Layer 15
	this.instance_9 = new lib.Symbol11();
	this.instance_9.setTransform(364,15.6,1,1,0,0,0,57,17.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(145).to({_off:false},0).to({x:74},13).wait(89).to({alpha:0},8).wait(55));

	// Layer 6
	this.instance_10 = new lib.Symbol10();
	this.instance_10.setTransform(399.9,49.2,1,1,0,0,0,81.6,12.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({x:209.9},13).wait(73).to({alpha:0},8).wait(166));

	// Layer 5
	this.instance_11 = new lib.Symbol9();
	this.instance_11.setTransform(379.4,32.8,1,1,0,0,0,61.1,12.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({x:189.4},13).wait(81).to({alpha:0},8).wait(166));

	// Layer 4
	this.instance_12 = new lib.Symbol8();
	this.instance_12.setTransform(-71.6,40.2,1,1,0,0,0,56.9,27.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({x:68.4},13).wait(89).to({alpha:0},8).wait(166));

	// Layer 14
	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(100.5,-15.4,1,1,0,0,0,86.5,11.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({y:14.6},13).wait(96).to({alpha:0},8).wait(166));

	// Layer 13
	this.instance_14 = new lib.Symbol5();
	this.instance_14.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({alpha:1},13).wait(221).to({alpha:0},8).wait(55));

	// Layer 12
	this.instance_15 = new lib.Symbol1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},13).wait(297));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;