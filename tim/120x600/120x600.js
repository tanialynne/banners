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
		{src:"_120_bg.jpg", id:"_120_bg"},
		{src:"_120_btn.png", id:"_120_btn"},
		{src:"_120_logo.png", id:"_120_logo"},
		{src:"_120_tim.jpg", id:"_120_tim"},
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


(lib._120_tim = function() {
	this.initialize(img._120_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AglBIIAAiPIAlAAQARAAAKAKQAJAKAAATIgCAMQgCAGgEAEQgEAFgFADQAJACAGAIQAEAIAAAOQAAAMgDAJQgEAKgJAFQgIAGgOAAgAgNAzIALAAQAIAAADgFQAFgGgBgLQABgLgFgGQgEgFgKAAIgIAAgAgNgMIAJAAQAGAAAEgEQAEgFABgJQAAgKgEgFQgEgFgHAAIgJAAg");
	this.shape.setTransform(67.9,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgEgIgBgKIAAhJQABgKAEgIQADgJAJgFQAIgFAMAAQANAAAIAFQAIAFAEAJQAFAIAAAKIAABJQAAAKgFAIQgEAJgIAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_1.setTransform(57.8,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBJIAAgWIAFAAQAIAAACgDQADgDABgGIAAhvIAWAAIAAByQAAAJgDAHQgDAHgHAEQgIAEgMAAg");
	this.shape_2.setTransform(49.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,28);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(113,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACAUAHAJQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgQgKgLQgJgNgLgLIgbgUQgNgNgJgQQgJgQgBgXQAAgeASgRQASgRAfAAQATAAANAIQANAIAHAPQAIANACATIgqAFQgCgRgHgGQgHgHgIABQgJAAgFAGQgGAHAAAMQAAANAJAMQAJALAMALQANALANALQAOANAJAPQAJARAAAUQAAAWgJAPQgJAOgPAIQgQAIgTAAQgVAAgPgKg");
	this.shape_1.setTransform(100.9,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACAUAHAJQAHAKAJAAQAMAAAHgGQAHgGAAgLQAAgQgKgLQgJgNgLgLIgbgUQgNgNgJgQQgJgQgBgXQAAgeASgRQASgRAfAAQATAAANAIQANAIAHAPQAIANACATIgqAFQgCgRgHgGQgHgHgIABQgJAAgFAGQgGAHAAAMQAAANAJAMQAJALAMALQANALANALQAOANAJAPQAJARAAAUQAAAWgJAPQgJAOgPAIQgQAIgTAAQgVAAgPgKg");
	this.shape_2.setTransform(84.9,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag9CBIAAkBIB1AAIAAAnIhIAAIAABCIA4AAIAAAmIg4AAIAABLIBOAAIAAAng");
	this.shape_3.setTransform(69.4,-6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag4CBIAAkBIAsAAIAADaIBFAAIAAAng");
	this.shape_4.setTransform(54.7,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBATASQATASAAApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_5.setTransform(30.4,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgTIAAiDQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACDQAAATgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACBQgBAPAGAHQAFAHAMAAQANAAAFgHQAFgHAAgPIAAiBQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_6.setTransform(12,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30,120,47.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgqCQQgRgMgKgTQgJgTgBgXIAygHQABAXAJAMQAIALALAAQAOAAAHgHQAJgHAAgOQAAgRgLgOQgKgOgOgNIgfgZQgQgOgKgTQgMgTAAgaQAAgkAWgTQAUgUAlAAQAVAAAPAJQAQAKAJAQQAJARACAVIgxAGQgDgTgHgIQgJgHgJAAQgLAAgGAIQgHAIAAAOQAAAPALANQAKAOAOAMQAQANAQANQAPAPAKATQALASABAZQgBAZgJARQgLARgTAJQgSAJgWAAQgZAAgRgLg");
	this.shape.setTransform(98.4,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAfCXIgjh9IgMABIgPAAIAAB8Ig0AAIAAktIBJAAQAqAAAWAUQAXAVgBAwQAAAZgFAPQgGAQgIAGQgIAJgJAEIAsCJgAgfgOIATAAQASABAKgLQAIgKABgbQgBgagIgKQgKgLgSABIgTAAg");
	this.shape_1.setTransform(79.1,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAlCXIgJhDIg3AAIgJBDIgzAAIA4ktIA/AAIA4EtgAAUAnIgUiBIAAAAIgTCBIAnAAg");
	this.shape_2.setTransform(58.8,-13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhHCXIAAktICJAAIAAAtIhVAAIAABPIBBAAIAAArIhBAAIAABZIBbAAIAAAtg");
	this.shape_3.setTransform(40.6,-13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYCXIAAh+Ig/ivIA0AAIAjBzIABAAIAihzIA1AAIg/CvIAAB+g");
	this.shape_4.setTransform(21.6,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-41,120,54.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgsCRQgRgLgJgRQgIgSgBgVIAAiaQABgWAIgSQAJgRARgKQASgLAaAAQAbAAARALQASAKAIARQAKASAAAWIAACaQAAAVgKASQgIARgSALQgRAKgbAAQgaAAgSgKgAgUhlQgGAJAAARIAACXQAAARAGAJQAGAIAOAAQAPAAAGgIQAGgJAAgRIAAiXQAAgRgGgJQgGgIgPAAQgOAAgGAIg");
	this.shape.setTransform(103.2,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAnCXIgmjGIgBAAIghDGIgsAAIg6ktIAyAAIAfC/IABAAIAii/IApAAIAjC/IABAAIAdi/IAxAAIg1Etg");
	this.shape_1.setTransform(78.3,-22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgZCXIAAkAIgyAAIAAgtICXAAIAAAtIgzAAIAAEAg");
	this.shape_2.setTransform(56.5,-22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAiCXIhBi7IgBAAIAAC7IguAAIAAktIAwAAIA9CrIABAAIAAirIAwAAIAAEtg");
	this.shape_3.setTransform(28.5,-22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgZCXIAAktIAzAAIAAEtg");
	this.shape_4.setTransform(12.2,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50,120,54.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgVBLQgJgGgFgKQgFgKAAgMIAZgEQACAMAEAGQAEAHAFgBQAHAAAFgDQADgEAAgHQAAgKgFgGQgGgIgFgHIgRgMQgJgIgFgJQgFgKAAgOQgBgSALgKQALgLATAAQAKAAAJAFQAIAFAEAJQAFAIACAMIgaACQgCgKgEgDQgEgFgFAAQgFABgDAEQgEAEABAHQgBAJAGAGQAFAHAHAHIAQANQAIAHAGAKQAFAJABANQAAANgGAKQgFAIgKAFQgKAFgLAAQgMAAgJgGg");
	this.shape.setTransform(101.5,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgqBPIAAidIApAAQAUAAAKALQAKAKAAAVQAAAHgCAGQgBAHgFAFQgEAGgHACQALADAFAJQAGAJABAPQAAANgFALQgEAKgJAGQgJAGgQAAgAgOA5IALAAQAJAAAFgHQAFgGAAgMQAAgMgGgGQgFgHgKABIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgEgGQgFgFgHgBIgKAAg");
	this.shape_1.setTransform(91.3,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgWBLQgJgFgFgJQgEgJAAgMIAAhQQAAgLAEgJQAFgJAJgGQAJgFANAAQAOAAAJAFQAJAGAFAJQAFAJgBALIAABQQABAMgFAJQgFAJgJAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAFAAAIIAABPQAAAIADAFQADAEAHAAQAHAAAEgEQADgFAAgIIAAhPQAAgIgDgFQgEgEgHgBQgHABgDAEg");
	this.shape_2.setTransform(80.2,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgWBQIAAgYIAGAAQAHAAAEgDQADgDAAgHIAAh6IAZAAIAAB9QAAALgDAHQgDAHgJAFQgIAEgNAAg");
	this.shape_3.setTransform(71,35.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBPAAIAAAYIgbAAIAACFg");
	this.shape_4.setTransform(59.4,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_5.setTransform(50.2,35.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAvIAvAAIAAAXg");
	this.shape_6.setTransform(40.7,35.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEADQgEAEgFACIAXBIgAgPgGIAJAAQAJAAAFgGQAFgFAAgOQAAgOgFgFQgFgFgJgBIgJAAg");
	this.shape_7.setTransform(30.3,35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgdBHQgKgLgBgUIAAhQQAAgLAFgJQAEgJAJgGQAJgFANAAQAMAAAJAGQAJAGAFAJQAEALAAALIAAALIgaAAQAAgMgBgGQgCgHgDgDQgEgCgDgBQgFAAgEAFQgDADAAAKIAABPQAAAJADAEQADAEAGAAQAHAAADgEQAEgGgBgLIAAgQIgPAAIAAgUIArAAIAABPIgNAAIgGgMQgFAHgHADQgGAEgHAAQgQAAgKgKg");
	this.shape_8.setTransform(19,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,120,30.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(113,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgJBBIAAg3IgbhJIAWAAIAOAxIAAAAIAPgxIAWAAIgbBJIAAA3g");
	this.shape_1.setTransform(107,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_2.setTransform(99.5,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgJBBIAAiAIATAAIAACAg");
	this.shape_3.setTransform(93.5,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgGAAIAAA2IgXAAIAAiAIAgAAQARAAAJAJQAJAIABAVQgBALgCAGQgCAHgEACQgDADgFABIATA8gAgMgFIAIAAQAGAAAEgEQAEgFAAgLQAAgMgEgEQgEgFgGABIgIAAg");
	this.shape_4.setTransform(86.7,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgYA4QgIgIgBgSIAAheIAXAAIAABfQAAAIACAEQAEADAEAAQAGAAACgDQADgEAAgIIAAhfIAXAAIAABeQAAASgJAIQgKAJgPAAQgOAAgKgJg");
	this.shape_5.setTransform(77.5,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAIgEAJAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgJAAgIgFg");
	this.shape_6.setTransform(68.5,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_7.setTransform(60.2,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgEgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQAEgDAAgGQAAgIgFgGQgFgGgEgFIgOgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgVACQgCgIgDgDQgDgDgEAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAHAGAEAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_8.setTransform(52,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgHAAIAAA2IgVAAIAAiAIAfAAQAQAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA8gAgNgFIAJAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgJAAg");
	this.shape_9.setTransform(43.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgdBBIAAiAIA5AAIAAATIgkAAIAAAhIAbAAIAAASIgbAAIAAAmIAnAAIAAAUg");
	this.shape_10.setTransform(35.2,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AghBBIAAiAIAgAAQARAAAHAJQAJAIAAARIgCALQgBAGgEAEQgDAEgGACQAJACAFAHQAFAIgBAMQAAALgDAIQgEAJgHAEQgIAGgMAAgAgMAuIAKAAQAHAAAEgFQADgFAAgKQAAgKgEgFQgEgFgIAAIgIAAgAgMgKIAJAAQAEAAAEgFQAFgDAAgJQAAgJgEgFQgDgEgGAAIgJAAg");
	this.shape_11.setTransform(26.6,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgJBBIAAg3IgbhJIAWAAIAOAxIAAAAIAPgxIAWAAIgbBJIAAA3g");
	this.shape_12.setTransform(18,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAJAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgDgEgFAAQgFAAgCADQgDAEAAAHIAABAQAAAHADAEQACAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgJAAgIgFg");
	this.shape_13.setTransform(9.5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,25.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOBBIgahPIAAAAIAABPIgUAAIAAiBIAUAAIAZBJIABAAIAAhJIATAAIAACBg");
	this.shape.setTransform(62.5,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_1.setTransform(55.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,120,25.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AANBBIgOg2IgFAAIgHAAIAAA2IgVAAIAAiBIAeAAQASABAJAIQAKAJAAAVQAAAKgDAHQgCAGgEADQgDADgEABIATA8gAgNgFIAIAAQAHAAAFgFQADgDAAgMQAAgLgDgFQgFgEgHAAIgIAAg");
	this.shape.setTransform(87.2,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeBBIAAiBIA6AAIAAAUIgkAAIAAAhIAcAAIAAASIgcAAIAAAmIAnAAIAAAUg");
	this.shape_1.setTransform(78.7,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgeBBIAAiBIA6AAIAAAUIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAAUg");
	this.shape_2.setTransform(70.7,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AANBBIgOg2IgFAAIgGAAIAAA2IgXAAIAAiBIAgAAQARABAJAIQAKAJAAAVQgBAKgCAHQgCAGgEADQgEADgDABIASA8gAgMgFIAHAAQAIAAAEgFQADgDAAgMQAAgLgDgFQgEgEgIAAIgHAAg");
	this.shape_3.setTransform(62.2,27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAPBBIgDgeIgXAAIgDAeIgXAAIAZiBIAZAAIAZCBgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_4.setTransform(53.5,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgEADQgCAEAAAHIAABAQAAAHACAEQAEAEAEAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_5.setTransform(45,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBBIgFgeIgVAAIgFAeIgVAAIAYiBIAaAAIAXCBgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_6.setTransform(32.5,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15,120,25.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhpFZQgqgZgVgqQgUgpAAg0IAAlxQAAg0AUgqQAVgqAqgYQApgZBAgBQBBABAqAZQAqAYAUAqQAVAqAAA0IAAFxQAAA0gVApQgUAqgqAZQgqAZhBABQhAgBgpgZgAgzjyQgOAUAAAoIAAFtQAAAoAOAUQAPATAkABQAkgBAQgTQAOgUgBgoIAAltQABgogOgUQgQgUgkAAQgkAAgPAUg");
	this.shape.setTransform(79.5,72.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag8FoIAApkIh5AAIAAhsIFrAAIAABsIh4AAIAAJkg");
	this.shape_1.setTransform(34.9,72.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,120,124);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbBAQgJgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFAEAJQADAJAAALIAAAJIgXAAQAAgLgBgGQgCgFgDgDQgEgCgCAAQgFAAgDADQgDAEAAAJIAABIQgBAHADAEQADAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgGAEQgFADgHAAQgOAAgKgKg");
	this.shape.setTransform(108.3,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape_1.setTransform(98.4,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_2.setTransform(90.6,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQALALgBAWIAAA3QABAWgLALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgIAAg");
	this.shape_3.setTransform(82.8,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(73,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_5.setTransform(63.4,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_6.setTransform(52,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_7.setTransform(41.3,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_8.setTransform(31.9,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAQBIIgdhYIgBAAIAABYIgXAAIAAiPIAYAAIAbBRIABAAIAAhRIAXAAIAACPg");
	this.shape_9.setTransform(21.7,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgbA/QgJgKgBgTIAAhqIAZAAIAABrQAAAIADAEQAEAEAFAAQAGAAAEgEQADgEAAgIIAAhrIAZAAIAABqQgBATgJAKQgKAKgSAAQgQAAgLgKg");
	this.shape_10.setTransform(11.7,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,17,120,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape.setTransform(87.2,46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAKASIgKg8IAAAAIgIA8IASAAg");
	this.shape_1.setTransform(77.8,46.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAcBIIAAhvIAAAAIgWBvIgKAAIgXhvIgBAAIAABvIgVAAIAAiPIAhAAIAQBTIARhTIAhAAIAACPg");
	this.shape_2.setTransform(62.8,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgUBFQgJgFgEgJQgDgIAAgKIAAhJQAAgKADgIQAEgJAJgFQAJgFALAAQAMAAAJAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_3.setTransform(51.7,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_4.setTransform(41.9,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_5.setTransform(32.4,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,32,120,28);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape.setTransform(76.1,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgXAAIAAiPIAXAAIAcBRIABAAIAAhRIAXAAIAACPg");
	this.shape_1.setTransform(67.2,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_2.setTransform(58,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_3.setTransform(46.4,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,37,120,28);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABzEgIAAnBIgBAAIhaHBIguAAIhanBIgCAAIAAHBIhWAAIAAo/ICCAAIBGFPIAAAAIBGlPICDAAIAAI/g");
	this.shape.setTransform(86.6,49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgwEgIAAo/IBhAAIAAI/g");
	this.shape_1.setTransform(51.1,49.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgwEgIAAnpIhgAAIAAhWIEhAAIAABWIhgAAIAAHpg");
	this.shape_2.setTransform(24.4,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,120,100);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_tim();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(13).to({_off:false},0).to({y:559,alpha:1},13).wait(352));

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
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;