(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_120_arthur.jpg", id:"_120_arthur"},
		{src:"_120_bg.jpg", id:"_120_bg"},
		{src:"_120_btn.png", id:"_120_btn"},
		{src:"_120_logo.png", id:"_120_logo"},
		{src:"_160_border.png", id:"_160_border"}
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



(lib._120_arthur = function() {
	this.initialize(img._120_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_bg = function() {
	this.initialize(img._120_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib._120_btn = function() {
	this.initialize(img._120_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib._120_logo = function() {
	this.initialize(img._120_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(113,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_1.setTransform(100.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_2.setTransform(84.9,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_3.setTransform(69.4,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag4CCIAAkCIAsAAIAADaIBFAAIAAAog");
	this.shape_4.setTransform(54.7,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBATASQATASAAApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_5.setTransform(30.4,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACEQAAASgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_6.setTransform(12,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,47.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHAKQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgQgKgLQgJgMgLgMIgbgUQgNgNgJgQQgJgQgBgXQAAgeASgRQASgRAfAAQATAAANAIQANAIAHAOQAIAOACATIgqAEQgCgQgHgGQgHgGgIAAQgJAAgFAGQgGAHAAAMQAAANAJAMQAJALAMALQANALANALQAOAMAJAQQAJARAAAUQAAAWgJAPQgJAOgPAJQgQAHgTAAQgVAAgPgKg");
	this.shape.setTransform(92.9,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgIAIgHADIAmB2gAgagMIAQAAQAPABAIgJQAIgJgBgXQABgWgIgJQgIgJgPABIgQAAg");
	this.shape_1.setTransform(76.4,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAgCBIgIg5IgvAAIgIA5IgrAAIAvkCIA3AAIAvECgAASAhIgShuIAAAAIgQBuIAiAAg");
	this.shape_2.setTransform(59,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag9CBIAAkCIB2AAIAAAoIhJAAIAABCIA4AAIAAAlIg4AAIAABNIBOAAIAAAmg");
	this.shape_3.setTransform(43.4,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVCBIAAhsIg2iWIAuAAIAdBjIAAAAIAehjIAuAAIg2CWIAABsg");
	this.shape_4.setTransform(27,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,120,47.2);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACBQAAAPAFAHQAFAHAMAAQANAAAFgHQAGgHgBgPIAAiBQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape.setTransform(97,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_1.setTransform(75.7,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAjbIgrAAIAAgnICBAAIAAAnIgrAAIAADbg");
	this.shape_2.setTransform(57,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_3.setTransform(33,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_4.setTransform(19,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,120,47.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgjBTQgMgNAAgWIAAhfQAAgNAFgLQAFgLALgGQAKgGAQgBQAOAAALAIQALAGAFAMQAGALAAAOIAAANIgfAAQAAgPgCgHQgCgIgEgDQgEgDgFABQgGgBgEAEQgEAFAAAMIAABeQAAAKADAEQAEAGAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABeIgQAAIgFgPQgHAJgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape.setTransform(97.5,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAVBeIgoh0IAAAAIAAB0IgdAAIAAi6IAeAAIAmBpIAAAAIAAhpIAdAAIAAC6g");
	this.shape_1.setTransform(84.6,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_2.setTransform(74.4,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAVBeIgoh0IAAAAIAAB0IgdAAIAAi6IAeAAIAmBpIAAAAIAAhpIAdAAIAAC6g");
	this.shape_3.setTransform(64.3,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_4.setTransform(54.2,29.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_5.setTransform(44.8,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi6IAuAAQAZgBANANQAOANAAAeQAAAPgDAKQgEAKgFADQgFAFgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_6.setTransform(32.8,29.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgOBeIAAieIggAAIAAgcIBdAAIAAAcIgfAAIAACeg");
	this.shape_7.setTransform(21,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,120,35.2);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgoBdIAAi6IAhAAIAACeIAwAAIAAAcg");
	this.shape.setTransform(106.7,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_1.setTransform(95.4,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgKAAgOIAAheQAAgOAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAHAFALQAFALAAAPIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHABgEAFQgEAEAAALIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAAOgFAKQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_2.setTransform(83,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPBdIAAi6IAfAAIAAC6g");
	this.shape_3.setTransform(73,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAVBdIgohzIAAAAIAABzIgdAAIAAi6IAeAAIAmBqIAAAAIAAhqIAdAAIAAC6g");
	this.shape_4.setTransform(62.9,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AARBdIAAhTIghAAIAABTIggAAIAAi6IAgAAIAABOIAhAAIAAhOIAgAAIAAC6g");
	this.shape_5.setTransform(49.9,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgKAAgOIAAheQAAgOAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAHAFALQAFALAAAPIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHABgEAFQgEAEAAALIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAAOgFAKQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_6.setTransform(36.8,33.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgsBdIAAi6IBVAAIAAAdIg0AAIAAAxIAnAAIAAAZIgnAAIAAA3IA3AAIAAAcg");
	this.shape_7.setTransform(24.9,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPBdIAAidIgfAAIAAgdIBdAAIAAAdIgfAAIAACdg");
	this.shape_8.setTransform(13.8,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,120,35.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAnBcQgJgDgIgIQgHAIgJAEQgHADgMAAQgUAAgMgMQgMgMgBgUQAAgKAEgJQADgKAGgIQAFgJAHgGIgKgZQgFgNAAgMQAAgNAFgLQAEgKAJgFQAJgGAOAAQAQABAKAKQAKALAAARQAAAMgFAKQgFAKgHAIIgNAQIAJATIAMATIAHgSIAFgRIAaAGQgDANgEAMIgKAZQADADAFADIAKADIAAAcQgLAAgJgEgAgaAkQgCAFAAAHQAAAIAFAGQAFAFAJABIAIgBIAFgFIgMgSQgHgJgFgKQgEAGgCAFgAgJhMQgGAAgDAEQgDAGAAAJQAAAIACAKIAHASIAKgQQADgJAAgKQAAgKgBgGQgCgEgGAAIgBAAg");
	this.shape.setTransform(99.7,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi6IAuAAQAZgBANANQAOANAAAeQAAAPgDAKQgEAKgFACQgFAGgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLABIgLAAg");
	this.shape_1.setTransform(80.5,37.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBeIAAi6IBUAAIAAAcIg0AAIAAAwIAnAAIAAAbIgnAAIAAA3IA4AAIAAAcg");
	this.shape_2.setTransform(68.2,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgsBeIAAi6IBVAAIAAAcIg0AAIAAAwIAoAAIAAAbIgoAAIAAA3IA3AAIAAAcg");
	this.shape_3.setTransform(56.7,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi6IAuAAQAZgBANANQAOANAAAeQAAAPgDAKQgEAKgFACQgFAGgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLABIgLAAg");
	this.shape_4.setTransform(44.4,37.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_5.setTransform(31.8,37.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaBZQgKgGgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgHAPAAQAQABALAGQALAIAFALQAFALAAAOIAAAPIggAAIAAgPQAAgMgFgGQgEgFgHABQgHAAgEAEQgEAGAAAKIAABdQAAAKAEAGQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgXIAgAAIAAAWQAAANgFALQgFALgLAGQgLAHgQAAQgPAAgLgHg");
	this.shape_6.setTransform(19.5,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,35.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape.setTransform(86.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVBMQgKgGgEgJQgFgJAAgLIAAhQQAAgMAFgJQAEgJAKgFQAJgGAMAAQAOAAAJAGQAJAGAEAJQAFAKAAANIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGABQgGgBgDAFQgDAEAAAKIAABOQAAAIADAFQADAFAGAAQAIAAADgFQADgEgBgHIAAgUIAcAAIAAATQAAALgFAJQgEAJgJAGQgJAFgOAAQgMAAgJgFg");
	this.shape_1.setTransform(78.8,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVBMQgKgGgEgJQgFgJAAgLIAAhQQAAgMAFgJQAEgJAKgFQAJgGAMAAQAOAAAJAGQAJAGAEAJQAFAKAAANIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGABQgGgBgDAFQgDAEAAAKIAABOQAAAIADAFQADAFAGAAQAIAAADgFQADgEgBgHIAAgUIAcAAIAAATQAAALgFAJQgEAJgJAGQgJAFgOAAQgMAAgJgFg");
	this.shape_2.setTransform(67.8,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_3.setTransform(58.1,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_4.setTransform(44.7,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_5.setTransform(35.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,120,30.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAgBPIAAh6IgBAAIgZB6IgLAAIgYh6IgBAAIAAB6IgYAAIAAidIAkAAIASBbIAAAAIAThbIAkAAIAACdg");
	this.shape.setTransform(92.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_1.setTransform(80.8,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJgBAFgFQAFgFAAgOQAAgOgFgFQgFgGgJAAIgJAAg");
	this.shape_2.setTransform(70.6,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgdBGQgKgKgBgTIAAhQQAAgLAFgKQAEgJAJgFQAJgGANAAQAMAAAJAGQAJAGAFAKQAEAKAAALIAAAKIgaAAQAAgLgBgHQgCgGgDgDQgEgCgDgBQgFAAgEAEQgDAEAAAKIAABQQAAAIADAEQADAEAGABQAHAAADgGQAEgFgBgMIAAgPIgPAAIAAgUIArAAIAABPIgNAAIgGgMQgFAIgHACQgGAEgHAAQgQAAgKgLg");
	this.shape_3.setTransform(59.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWBMQgKgGgEgJQgEgJgBgLIAAhQQABgLAEgKQAEgJAKgFQAJgGANAAQAOAAAJAGQAKAFAEAJQAFAKgBALIAABQQABALgFAJQgEAJgKAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAJIAABPQAAAJADAEQADAEAHABQAHgBAEgEQADgEAAgJIAAhPQAAgJgDgEQgEgEgHgBQgHABgDAEg");
	this.shape_4.setTransform(48.4,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJgBAFgFQAFgFAAgOQAAgOgFgFQgFgGgJAAIgJAAg");
	this.shape_5.setTransform(37.6,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgrBPIAAidIAoAAQAXAAAMALQAMALAAAZQAAAZgMAJQgMALgXAAIgMAAIAABBgAgPgGIAKAAQALgBAGgFQAFgFAAgOQAAgOgFgFQgGgGgLAAIgKAAg");
	this.shape_6.setTransform(26.6,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,30.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKAAgMIAagDQAAALAFAHQAEAFAFAAQAHABAFgEQADgEAAgHQAAgJgFgHQgFgIgHgHIgQgMQgIgHgGgKQgFgKgBgOQAAgSALgLQALgKATAAQAKAAAJAFQAIAFAEAJQAFAIACALIgaADQgCgKgEgDQgEgEgFgBQgFAAgDAFQgDAEAAAHQAAAJAFAGQAFAHAGAHIARANQAIAHAGAKQAFAJAAANQABANgGAKQgFAJgKAEQgJAFgMAAQgMAAgJgGg");
	this.shape.setTransform(108.8,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_1.setTransform(98.4,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_2.setTransform(89.9,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AASBPIghhhIAABhIgaAAIAAidIAaAAIAgBZIAAhZIAZAAIAACdg");
	this.shape_3.setTransform(81.4,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgWBLQgKgFgEgJQgEgJAAgMIAAhQQAAgKAEgKQAEgJAKgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAKgBAKIAABQQABAMgFAJQgFAJgJAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAFAAAIIAABPQAAAJADAEQADAFAHgBQAHABAEgFQADgEAAgJIAAhPQAAgIgDgFQgEgFgHAAQgHAAgDAFg");
	this.shape_4.setTransform(70.4,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgHIAJAAQAJABAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_5.setTransform(59.6,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_6.setTransform(49.6,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_7.setTransform(39.7,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_8.setTransform(29.7,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgiBPIAAidIAbAAIAACFIAqAAIAAAYg");
	this.shape_9.setTransform(20.7,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_10.setTransform(11.4,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,120,30.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAwIAvAAIAAAXg");
	this.shape.setTransform(70,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAOBPIAAhHIgbAAIAABHIgcAAIAAidIAcAAIAABBIAbAAIAAhBIAcAAIAACdg");
	this.shape_1.setTransform(59.4,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgMBPIAAiFIgaAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_2.setTransform(49.6,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9,120,30.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABHEgIgRiAIhrAAIgRCAIhgAAIBqo/IB5AAIBqI/gAAnBKIgnj2IAAAAIgmD2IBNAAg");
	this.shape.setTransform(88.9,70.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgwEgIAAo/IBhAAIAAI/g");
	this.shape_1.setTransform(60,70.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgwEgIh5o/IBiAAIBHGOIAAAAIBImOIBiAAIh5I/g");
	this.shape_2.setTransform(31.2,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,100);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAbBsIgHgwIgmAAIgHAwIgkAAIAnjXIAtAAIAoDXgAAOAbIgOhbIAAAAIgOBbIAcAAg");
	this.shape.setTransform(97.5,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_1.setTransform(84.1,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgNBbIAcAAg");
	this.shape_2.setTransform(70.9,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAYBsIguiGIAAAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_3.setTransform(56.7,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIASAAQATAAANAIQAMAHAGANQAHAMAAAQIAABtQAAAQgHAMQgGANgMAHQgNAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAFAGAJAAQAKAAAFgGQAFgGAAgMIAAhrQAAgNgFgGQgFgFgKAAQgJAAgFAFg");
	this.shape_4.setTransform(35.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_5.setTransform(21.7,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,40);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgRBsIAAhaIgth9IAmAAIAYBTIABAAIAZhTIAlAAIgsB9IAABag");
	this.shape.setTransform(104.1,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRBsIgtjXIAkAAIAaCUIAAAAIAbiUIAkAAIgtDXg");
	this.shape_1.setTransform(90.8,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAaBsIgGgwIgmAAIgIAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgOBbIAdAAg");
	this.shape_2.setTransform(77.5,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAYBsIguiGIAAAAIAACGIghAAIAAjXIAiAAIArB6IABAAIAAh6IAhAAIAADXg");
	this.shape_3.setTransform(63.4,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgyBsIAAjXIBhAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBBAAIAAAhg");
	this.shape_4.setTransform(42.9,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAUBsIAAhgIgnAAIAABgIglAAIAAjXIAlAAIAABYIAnAAIAAhYIAlAAIAADXg");
	this.shape_5.setTransform(28.4,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_6.setTransform(15.1,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,120,40);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAiBWIAAiFIAAAAIgbCFIgNAAIgbiFIAAAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape.setTransform(104,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYBTQgKgHgFgJQgFgLAAgMIAAhXQAAgMAFgLQAFgJAKgHQAKgFAOAAQAPAAAKAFQAKAHAFAJQAFALAAAMIAABXQAAAMgFALQgFAJgKAHQgKAFgPAAQgOAAgKgFgAgLg5QgEAFAAAKIAABVQAAAKAEAFQAEAFAHgBQAJABADgFQADgFAAgKIAAhVQAAgKgDgFQgDgFgJAAQgHAAgEAFg");
	this.shape_1.setTransform(90.7,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_2.setTransform(78.9,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgoBWIAAirIBRAAIAAAaIgzAAIAAAtIAlAAIAAAXIglAAIAABNg");
	this.shape_3.setTransform(67.6,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_4.setTransform(52,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBWIgkhqIAABqIgbAAIAAirIAcAAIAiBhIABAAIAAhhIAaAAIAACrg");
	this.shape_5.setTransform(41.3,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_6.setTransform(30.3,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_7.setTransform(16.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,120,32.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_arthur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape.setTransform(104.7,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgzB4QgUgTABgjIAAjMIAuAAIAADNQAAAQAHAIQAFAGAMABQAMgBAHgGQAFgIABgQIAAjNIAvAAIAADMQgBAjgSATQgUASghAAQghAAgSgSg");
	this.shape_1.setTransform(85.3,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAYCJIAAh6IgvAAIAAB6IgvAAIAAkRIAvAAIAABwIAvAAIAAhwIAwAAIAAERg");
	this.shape_2.setTransform(66.3,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgWCJIAAjoIguAAIAAgpICJAAIAAApIguAAIAADog");
	this.shape_3.setTransform(49.4,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAcCJIgfhyIgMABIgNAAIAABxIgvAAIAAkRIBCAAQAmAAAUATQAUATAAArQAAAWgFAOQgFAOgIAGQgHAIgIADIAoB9gAgcgMIARAAQARAAAIgJQAIgKAAgYQAAgYgIgJQgIgJgRAAIgRAAg");
	this.shape_4.setTransform(32.9,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAiCJIgJg9IgxAAIgIA9IguAAIAykRIA5AAIAyERgAATAjIgTh0IAAAAIgRB0IAkAAg");
	this.shape_5.setTransform(14.6,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,120,49.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();
	this.instance.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(378));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(62.5,350,1,1,0,0,0,53.5,17.5);
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

	// Layer 24
	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(27));

	// Layer 23
	this.instance_6 = new lib.Symbol19();
	this.instance_6.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(247).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(27));

	// Layer 6
	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(243).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(27));

	// Layer 22
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(135));

	// Layer 21
	this.instance_9 = new lib.Symbol16();
	this.instance_9.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(138).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(135));

	// Layer 19
	this.instance_10 = new lib.Symbol15();
	this.instance_10.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(135));

	// Layer 18
	this.instance_11 = new lib.Symbol13();
	this.instance_11.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(135));

	// Layer 3
	this.instance_12 = new lib.Symbol12();
	this.instance_12.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(135));

	// Layer 17
	this.instance_13 = new lib.Symbol11();
	this.instance_13.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(66).to({alpha:0},7).wait(253));

	// Layer 16
	this.instance_14 = new lib.Symbol10();
	this.instance_14.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(70).to({alpha:0},7).wait(253));

	// Layer 9
	this.instance_15 = new lib.Symbol9();
	this.instance_15.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(75).to({alpha:0},7).wait(253));

	// Layer 14
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(79).to({alpha:0},7).wait(253));

	// Layer 2
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).to({y:559,alpha:1},13).wait(352));

	// Layer 13
	this.instance_18 = new lib.Symbol5();
	this.instance_18.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).to({alpha:1},13).wait(352));

	// Layer 12
	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},13).wait(365));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;