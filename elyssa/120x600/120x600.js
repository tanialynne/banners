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
		{src:"_120_elissa.jpg", id:"_120_elissa"},
		{src:"_120_elissa2.jpg", id:"_120_elissa2"},
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



(lib._120_bg = function() {
	this.initialize(img._120_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib._120_btn = function() {
	this.initialize(img._120_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib._120_elissa = function() {
	this.initialize(img._120_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_elissa2 = function() {
	this.initialize(img._120_elissa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib._120_logo = function() {
	this.initialize(img._120_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(92.5,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgHgFgFgIQgEgIAAgKIAVgDQABAKAEAFQADAFAEAAQAGAAADgDQADgDAAgGQAAgIgEgGQgEgGgGgFIgNgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAPAAQAJAAAHAEQAGAEAEAHQADAHACAJIgVACQgCgIgDgDQgDgDgEAAQgEAAgCADQgEAEAAAGQAAAGAFAGQAFAGAEAFIAOAKQAHAGAEAIQAFAIAAALQgBAKgDAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_1.setTransform(86.5,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgkAAIAAAhIAcAAIAAASIgcAAIAAAmIAnAAIAAATg");
	this.shape_2.setTransform(78.7,-14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKAEgHQADgIAHgEQAIgEAKAAQAKAAAHAEQAHAFAEAIQAEAIAAAKIAAAIIgVAAQAAgJgCgGQgBgFgCgCQgDgCgDAAQgEAAgDADQgDADAAAIIAABBQAAAGACAEQADADAFABQAFAAADgFQADgEAAgJIAAgNIgMAAIAAgQIAiAAIAABAIgKAAIgFgKQgFAGgFADQgFADgFAAQgOAAgIgJg");
	this.shape_3.setTransform(70,-14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAATg");
	this.shape_4.setTransform(61.7,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgbBAIAAh/IAWAAIAABsIAhAAIAAATg");
	this.shape_5.setTransform(54.4,-14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgbBAIAAh/IAWAAIAABsIAhAAIAAATg");
	this.shape_6.setTransform(47.4,-14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHAAAKIAABBQAAAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_7.setTransform(39,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgEgEgEAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_8.setTransform(30,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,120,25.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgRA9QgHgFgEgIQgFgIAAgKIAWgDQAAAKADAFQAEAFAEAAQAFAAAEgDQADgDAAgGQABgIgFgGQgFgGgEgFIgOgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgWACQAAgIgEgDQgEgDgDAAQgEAAgDADQgCAEAAAGQgBAGAFAGQAEAGAGAFIANAKQAGAGAFAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape.setTransform(108.5,-7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgYA4QgIgJgBgRIAAhfIAXAAIAABgQAAAIACADQAEAEAEAAQAGAAACgEQADgDAAgIIAAhgIAXAAIAABfQAAARgJAJQgKAJgPAAQgOAAgKgJg");
	this.shape_1.setTransform(100,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgSA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHABAKIAABBQgBAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgDAEABAHIAABAQgBAHADAEQADAEAFAAQAGAAADgEQACgEAAgHIAAhAQAAgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_2.setTransform(91,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_3.setTransform(84,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKAEgHQADgIAIgEQAGgEALAAQAKAAAHAEQAIAFADAIQAEAIAAAKIAAAIIgVAAQAAgJgCgGQgBgFgCgCQgEgCgCAAQgEAAgDADQgDADAAAIIAABBQAAAGACAEQADADAFABQAFAAADgFQADgEAAgJIAAgNIgMAAIAAgQIAiAAIAABAIgKAAIgFgKQgFAGgFADQgEADgGAAQgOAAgIgJg");
	this.shape_4.setTransform(77,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_5.setTransform(70,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgUIA/AAIAAAUIgVAAIAABtg");
	this.shape_6.setTransform(64,-7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgEgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQAEgDAAgGQAAgIgFgGQgFgGgEgFIgOgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgVACQgCgIgDgDQgDgDgEAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAHAGAEAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_7.setTransform(56.5,-7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgdBBIAAiBIA5AAIAAAUIgkAAIAAAhIAbAAIAAASIgbAAIAAAmIAnAAIAAAUg");
	this.shape_8.setTransform(48.7,-7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AANBBIgOg2IgFAAIgHAAIAAA2IgVAAIAAiBIAeAAQASABAJAIQAJAKAAAUQAAALgCAGQgDAGgDADQgDADgEABIATA8gAgNgFIAIAAQAIAAADgFQAEgDAAgMQAAgLgEgFQgDgEgIAAIgIAAg");
	this.shape_9.setTransform(40.2,-7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgiBBIAAiBIAfAAQATABAKAIQAKAKAAAUQAAAVgKAHQgKAJgTgBIgKAAIAAA2gAgNgFIAJAAQAJAAAFgFQADgDAAgMQAAgLgDgFQgFgEgJAAIgJAAg");
	this.shape_10.setTransform(31.2,-7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgUIA/AAIAAAUIgVAAIAABtg");
	this.shape_11.setTransform(19,-7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAQBBIgFgdIgWAAIgEAdIgVAAIAXiBIAaAAIAZCBgAAJAQIgJg2IgHA2IAQAAg");
	this.shape_12.setTransform(11.5,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,120,25.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_elissa2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgMAMIAAgYIAYAAIAAAYg");
	this.shape.setTransform(99.1,61.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_1.setTransform(92,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgiBPIAAidIAbAAIAACFIApAAIAAAYg");
	this.shape_2.setTransform(83,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgqBPIAAidIApAAQAUAAAKALQALALgBAUQAAAHgCAGQgCAHgDAGQgFAEgHADQALADAFAJQAHAJAAAPQAAANgFAKQgEALgJAGQgKAGgPAAgAgOA4IAMAAQAIAAAFgFQAEgHABgMQgBgMgFgGQgFgGgKAAIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgEgGQgEgFgIAAIgKAAg");
	this.shape_3.setTransform(72.9,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_4.setTransform(62.4,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgdBGQgLgMAAgUIAAh1IAbAAIAAB2QAAAJADAEQAEAFAGgBQAHABAEgFQADgEAAgJIAAh2IAcAAIAAB1QgBAUgLAMQgLAKgTAAQgSAAgLgKg");
	this.shape_5.setTransform(52.1,55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AghBPIAAidIAbAAIAACFIAoAAIAAAYg");
	this.shape_6.setTransform(42.7,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_7.setTransform(33.1,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgMBPIghidIAbAAIASBsIAAAAIAUhsIAaAAIghCdg");
	this.shape_8.setTransform(23.4,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,120,30.4);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNBPIAAhCIgghbIAcAAIARA9IAAAAIATg9IAbAAIghBbIAABCg");
	this.shape.setTransform(102.8,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AghBPIAAidIAbAAIAACFIAoAAIAAAYg");
	this.shape_1.setTransform(94,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgqBPIAAidIApAAQAUAAAKALQALALAAAUQAAAHgDAGQgCAHgDAGQgFAEgGADQAKADAFAJQAHAJgBAPQAAANgDAKQgFALgJAGQgKAGgPAAgAgOA4IAMAAQAIAAAFgFQAEgHAAgMQAAgMgFgGQgFgGgKAAIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgFgGQgEgFgGAAIgLAAg");
	this.shape_2.setTransform(83.9,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_3.setTransform(75.3,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgpBPIAAidIApAAQAUAAALAMQAKAMABAYIAAA9QgBAZgKALQgLAMgUAAgAgNA4IAKAAQAIABAEgFQAFgGAAgLIAAhEQAAgNgFgFQgEgEgIAAIgKAAg");
	this.shape_4.setTransform(66.7,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_5.setTransform(56.6,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgGIAJAAQAJAAAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_6.setTransform(46.2,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVBLQgKgFgEgJQgFgJAAgMIAAhQQAAgKAFgKQAEgJAKgGQAJgFAMAAQAOAAAJAGQAJAGAEAJQAFALAAAMIAAALIgcAAIAAgMQAAgKgEgFQgDgFgGAAQgGAAgDAFQgDAFAAAIIAABPQAAAJADAEQADAFAGgBQAIABADgFQADgEgBgHIAAgUIAcAAIAAASQAAAMgFAJQgEAJgJAFQgJAGgOAAQgMAAgJgGg");
	this.shape_7.setTransform(34.9,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AARBPIghhhIAABhIgZAAIAAidIAaAAIAfBZIAAhZIAaAAIAACdg");
	this.shape_8.setTransform(24,55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_9.setTransform(15.4,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,120,30.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgMAMIAAgYIAZAAIAAAYg");
	this.shape.setTransform(110.7,61.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_1.setTransform(103.6,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgiBPIAAidIAbAAIAACFIApAAIAAAYg");
	this.shape_2.setTransform(94.6,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgqBPIAAidIApAAQAUAAAKALQAKALAAAUQAAAHgCAGQgBAHgFAGQgEAEgHADQALADAFAJQAGAJABAPQAAANgFAKQgEALgJAGQgJAGgQAAgAgOA4IALAAQAJAAAFgFQAFgHAAgMQAAgMgGgGQgFgGgKAAIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgEgGQgFgFgHAAIgKAAg");
	this.shape_3.setTransform(84.5,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_4.setTransform(74,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgoBPIAAidIAoAAQATAAAMAMQAKAMABAYIAAA9QgBAZgKALQgMAMgTAAgAgNA4IAKAAQAIABAEgFQAFgGAAgLIAAhEQAAgNgFgFQgEgEgIAAIgKAAg");
	this.shape_5.setTransform(63.7,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgGIAJAAQAJAAAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_6.setTransform(52.9,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgWBLQgKgFgEgJQgEgJgBgMIAAhQQABgKAEgKQAEgJAKgGQAJgFANAAQAOAAAJAFQAKAGAEAJQAFAKgBAKIAABQQABAMgFAJQgEAJgKAFQgJAGgOAAQgNAAgJgGgAgKg0QgDAFAAAIIAABPQAAAJADAEQADAFAHgBQAHABAEgFQADgEAAgJIAAhPQAAgIgDgFQgEgFgHAAQgHAAgDAFg");
	this.shape_7.setTransform(41.7,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAWIgiAAIAABGg");
	this.shape_8.setTransform(31.5,55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAWIgiAAIAABGg");
	this.shape_9.setTransform(21.8,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_10.setTransform(11.8,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,120,30.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgMBPIAAhCIghhbIAbAAIASA9IAAAAIATg9IAbAAIghBbIAABCg");
	this.shape.setTransform(100.3,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgiBPIAAidIAbAAIAACFIApAAIAAAYg");
	this.shape_1.setTransform(91.6,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_2.setTransform(82.2,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAfBPIAAh6IAAAAIgZB6IgLAAIgZh6IAAAAIAAB6IgYAAIAAidIAkAAIASBbIAAAAIAThbIAkAAIAACdg");
	this.shape_3.setTransform(70.4,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_4.setTransform(59,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAQBPIgRhCIgHAAIgHABIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAAMgDAJQgDAIgEACQgEAFgFACIAXBIgAgPgGIAJAAQAJAAAFgGQAFgFAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_5.setTransform(48.6,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_6.setTransform(38.6,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBPIgTg6IAAAAIgRA6IgbAAIAfhRIgdhMIAbAAIAPAzIAAAAIAPgzIAbAAIgbBMIAeBRg");
	this.shape_7.setTransform(29.5,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAWIghAAIAAAuIAvAAIAAAYg");
	this.shape_8.setTransform(20,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,120,30.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(112,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgsBeIAAi7IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAcg");
	this.shape_1.setTransform(103.6,-24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBeIAAi7IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_2.setTransform(92.1,-24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi7IAuAAQAZAAANANQAOANAAAeQAAAPgDAKQgEAJgFAEQgFAFgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_3.setTransform(79.8,-24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgsBeIAAi7IBZAAIAAAdIg4AAIAAAxIApAAIAAAaIgpAAIAABTg");
	this.shape_4.setTransform(67.5,-24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgeALIAAgVIA9AAIAAAVg");
	this.shape_5.setTransform(57.1,-21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgOBeIAAieIggAAIAAgdIBdAAIAAAdIggAAIAACeg");
	this.shape_6.setTransform(47.8,-24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgxBeIAAi7IAwAAQAXABANAMQAMANAAAZQAAAIgDAHQgCAIgFAGQgFAHgIADQANADAGALQAHAKAAASQAAAQgFAMQgFAMgLAHQgLAIgSAAgAgRBDIAOAAQAKAAAGgIQAFgGAAgPQAAgOgGgIQgGgHgMAAIgLAAgAgRgPIAMAAQAHgBAGgFQAGgHAAgLQAAgNgFgHQgFgGgJgBIgMAAg");
	this.shape_7.setTransform(36.3,-24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgrBeIAAi7IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_8.setTransform(24.2,-24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgwBeIAAi7IAwAAQAXABANAOQANAOAAAcIAABJQAAAcgNAOQgNAOgXABgAgPBDIALAAQAKAAAGgGQAFgFgBgQIAAhPQABgPgFgGQgGgGgKAAIgLAAg");
	this.shape_9.setTransform(11.7,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42,120,35.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwBdIAAi6IAwAAQAXABANAOQANANAAAeIAABIQAAAcgNAPQgNAOgXgBgAgPBDIAKAAQALAAAFgFQAGgHAAgPIAAhQQAAgOgGgGQgFgGgLAAIgKAAg");
	this.shape.setTransform(108.4,-22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAoAAIAAAaIgoAAIAAA2IA4AAIAAAcg");
	this.shape_1.setTransform(96.4,-22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBdIAAidIgfAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_2.setTransform(85.3,-22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_3.setTransform(74.4,-22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgiBSQgNgNgBgYIAAiLIAhAAIAACMQAAALADAFQAEAFAIAAQAIAAAFgFQADgFAAgLIAAiMIAhAAIAACLQAAAYgNANQgOANgWAAQgVAAgNgNg");
	this.shape_4.setTransform(62.2,-22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgwBdIAAi6IAwAAQAXABANAOQANANAAAeIAABIQAAAcgNAPQgNAOgXgBgAgQBDIALAAQALAAAFgFQAGgHgBgPIAAhQQABgOgGgGQgFgGgLAAIgLAAg");
	this.shape_5.setTransform(49.2,-22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_6.setTransform(36.9,-22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBUgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_7.setTransform(24.9,-22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgjBTQgMgMAAgXIAAhfQAAgNAFgLQAFgLALgGQAKgHAQAAQAOAAALAIQALAGAFAMQAGAMAAAOIAAALIgfAAQAAgNgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAFQgEAEAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABdIgQAAIgFgNQgHAIgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_8.setTransform(11.5,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,120,35.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AggBAIAAh/IAgAAQAQAAAIAJQAKAKgBAUIAAAxQABAUgKAKQgIAJgQAAgAgLAuIAIAAQAHAAAEgEQADgEABgKIAAg3QgBgKgDgEQgEgFgHABIgIAAg");
	this.shape.setTransform(94,-22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAOBAIgahPIAAAAIAABPIgUAAIAAh/IAUAAIAZBIIABAAIAAhIIATAAIAAB/g");
	this.shape_1.setTransform(85,-22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAQBAIgFgcIgVAAIgFAcIgVAAIAXh/IAbAAIAXB/gAAJAQIgJg1IgIA1IARAAg");
	this.shape_2.setTransform(76.5,-22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA4QgIgIgBgSIAAheIAXAAIAABgQAAAHACAEQAEADAEAAQAGAAACgDQADgEAAgHIAAhgIAXAAIAABeQAAASgJAIQgKAJgPAAQgOAAgKgJg");
	this.shape_3.setTransform(64,-22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AghBAIAAh/IAhAAQAQAAAJAJQAJAKAAAUIAAAxQAAAUgJAKQgJAJgQAAgAgKAuIAIAAQAGAAAEgEQADgEAAgKIAAg3QAAgKgDgEQgEgFgGABIgIAAg");
	this.shape_4.setTransform(55,-22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgSA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHABAKIAABBQgBAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgDAEABAHIAABAQgBAHADAEQADAEAFAAQAGAAADgEQACgEAAgHIAAhAQAAgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_5.setTransform(46,-22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHAAgJIAAhBQAAgKADgHQADgIAJgEQAHgEAKAAQALAAAIAEQAHAEAEAIQADAHAAAKIAABBQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFgAgIgrQgDAEAAAHIAABAQAAAHADAEQADAEAFAAQAGAAADgEQACgEABgHIAAhAQgBgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_6.setTransform(33,-22.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_7.setTransform(25,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,120,25.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghBAIAAh/IAhAAQAQgBAJAKQAIAKABAUIAAAxQgBAUgIAKQgJAJgQAAgAgLAuIAIAAQAHAAAEgEQADgEAAgKIAAg3QAAgKgDgEQgEgFgHABIgIAAg");
	this.shape.setTransform(101.5,-14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAATg");
	this.shape_1.setTransform(93.2,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgGAAIAAA1IgXAAIAAh/IAgAAQARAAAJAJQAKAIAAAVQgBALgCAGQgCAHgEACQgEADgDABIASA7gAgMgFIAHAAQAIAAAEgEQADgFAAgLQAAgMgDgEQgEgFgIABIgHAAg");
	this.shape_2.setTransform(84.7,-14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgGAAIAAA1IgXAAIAAh/IAgAAQARAAAJAJQAKAIAAAVQgBALgCAGQgCAHgEACQgEADgDABIASA7gAgMgFIAHAAQAIAAAEgEQADgFAAgLQAAgMgDgEQgEgFgIABIgHAAg");
	this.shape_3.setTransform(75.7,-14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAATg");
	this.shape_4.setTransform(67.2,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgeBAIAAh/IA8AAIAAATIglAAIAAAhIAbAAIAAASIgbAAIAAA5g");
	this.shape_5.setTransform(59.2,-14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgFgIAAgKIAWgDQAAAKADAFQAEAFAEAAQAFAAAEgDQAEgDAAgGQAAgIgFgGQgFgGgEgFIgOgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgWACQAAgIgEgDQgEgDgDAAQgEAAgDADQgCAEAAAGQAAAGAEAGQAEAGAGAFIANAKQAHAGAEAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_6.setTransform(51,-14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAPBAIgbhPIAAAAIAABPIgVAAIAAh/IAVAAIAZBIIABAAIAAhIIATAAIAAB/g");
	this.shape_7.setTransform(42.5,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAQBAIgFgcIgWAAIgEAcIgVAAIAXh/IAaAAIAYB/gAAJAQIgJg2IgHA2IAQAAg");
	this.shape_8.setTransform(34,-14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQARAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA7gAgNgFIAJAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgJAAg");
	this.shape_9.setTransform(25.7,-14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_10.setTransform(17.5,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,120,25.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKAWIAKgWIgJAAIAAgUIATAAIAAAUIgKAWg");
	this.shape.setTransform(110.5,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAJAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgDgEgFAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgJAAgIgFg");
	this.shape_1.setTransform(104,62.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAJAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgDgEgFAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgJAAgIgFg");
	this.shape_2.setTransform(95,62.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgUIA/AAIAAAUIgVAAIAABtg");
	this.shape_3.setTransform(87,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdBBIAAiBIA5AAIAAAUIgkAAIAAAhIAbAAIAAASIgbAAIAAAmIAnAAIAAAUg");
	this.shape_4.setTransform(75.7,62.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRA9QgIgFgEgIQgDgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQADgDABgGQgBgIgEgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQAAgQAKgIQAIgIAPAAQAJAAAGAEQAHAEAEAHQADAHACAJIgVACQgBgIgEgDQgDgDgEAAQgEAAgCADQgEAEAAAGQABAGAEAGQAFAGAEAFIAOAKQAGAGAFAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_5.setTransform(67.5,62.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgEgHABgJIAAhBQgBgKAEgHQAEgIAHgEQAIgEAKAAQALAAAIAEQAHAEAEAIQAEAHgBAKIAABBQABAJgEAHQgEAIgHAEQgIAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQACgEABgHIAAhAQgBgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_6.setTransform(59,62.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAMBBIAAg6IgXAAIAAA6IgVAAIAAiBIAVAAIAAA1IAXAAIAAg1IAVAAIAACBg");
	this.shape_7.setTransform(50,62.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAIgEAJAAQALAAAHAEQAIAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQAAgJgDgDQgDgEgFAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgIAEQgHAFgLAAQgJAAgIgFg");
	this.shape_8.setTransform(41,62.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgeBBIAAiBIA6AAIAAAUIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_9.setTransform(28.7,62.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAMBBIAAg6IgWAAIAAA6IgXAAIAAiBIAXAAIAAA1IAWAAIAAg1IAVAAIAACBg");
	this.shape_10.setTransform(20,62.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgEgIgBgKIAWgDQAAAKADAFQAEAFAEAAQAGAAADgDQAEgDAAgGQAAgIgFgGQgFgGgEgFIgOgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgVACQgCgIgDgDQgDgDgEAAQgEAAgDADQgDAEAAAGQABAGAEAGQAEAGAGAFIANAKQAHAGAEAIQAFAIAAALQAAAKgEAIQgFAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_11.setTransform(11.5,62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50,120,25.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_elissa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,201);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_logo();
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,15,120,98);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AggBAIAAh/IAgAAQAQAAAIAJQAJAKAAAUIAAAxQAAAUgJAKQgIAJgQAAgAgLAuIAIAAQAHABAEgFQADgEAAgKIAAg3QAAgKgDgEQgEgEgHAAIgIAAg");
	this.shape.setTransform(105,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgkAAIAAAiIAcAAIAAARIgcAAIAAAmIAnAAIAAATg");
	this.shape_1.setTransform(96.7,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_2.setTransform(89,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgjBAIAAh/IAhAAQASgBAKAKQAJAJAAAUQAAAVgJAGQgKAKgSgBIgKAAIAAA1gAgMgFIAIAAQAJAAAEgEQAFgEAAgMQAAgMgFgEQgEgEgJAAIgIAAg");
	this.shape_3.setTransform(81.2,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgjAAIAAAiIAaAAIAAARIgaAAIAAAmIAlAAIAAATg");
	this.shape_4.setTransform(72.7,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAIgEAJAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgJAAgIgFg");
	this.shape_5.setTransform(64,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAIgEAJAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgJAAgIgFg");
	this.shape_6.setTransform(55,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAPBAIgDgdIgXAAIgDAdIgXAAIAYh/IAaAAIAZB/gAAJAQIgJg1IgHA1IAQAAg");
	this.shape_7.setTransform(46.5,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgRA9QgHgFgFgIQgEgIAAgKIAVgDQABAKAEAFQADAFAEAAQAFAAAEgDQAEgDgBgGQABgIgFgGQgEgGgGgFIgNgKQgGgGgFgIQgEgIgBgLQABgQAIgIQAJgIAOAAQAKAAAHAEQAGAEAEAHQAEAHABAJIgWACQgBgIgDgDQgDgDgEAAQgEAAgCADQgDAEAAAGQgBAGAFAGQAFAGAEAFIAOAKQAGAGAFAIQAEAIABALQgBAKgEAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_8.setTransform(34.5,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAPBAIgDgdIgXAAIgDAdIgXAAIAZh/IAZAAIAZB/gAAIAQIgIg1IgIA1IAQAAg");
	this.shape_9.setTransform(26.5,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAQBAIgQhTIAAAAIgNBTIgTAAIgZh/IAVAAIAOBQIAAAAIAPhQIAQAAIAPBQIABAAIAMhQIAVAAIgXB/g");
	this.shape_10.setTransform(16.3,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,120,25.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAnCfIgKhHIg5AAIgKBHIg1AAIA7k9IBBAAIA7E9gAAVApIgViHIAAAAIgUCHIApAAg");
	this.shape.setTransform(108.6,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgsCWQgSgMgKgTQgJgUgCgYIA0gIQACAYAJAMQAJAMALAAQAPAAAIgHQAJgIAAgOQgBgTgLgOQgLgPgOgNIghgaQgRgPgLgUQgLgUAAgbQAAgmAWgUQAWgVAmAAQAXAAAQAKQAQAKAJARQAKASACAWIg0AGQgCgUgJgIQgIgIgKABQgLAAgHAIQgHAIAAAPQAAAQALAOQALANAPAOIAhAbQAQAPALAUQALAUABAZQAAAagLATQgLASgUAJQgTAKgYAAQgZgBgSgMg");
	this.shape_1.setTransform(88.9,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgsCWQgSgMgKgTQgJgUgCgYIA0gIQACAYAJAMQAJAMALAAQAPAAAIgHQAJgIAAgOQgBgTgLgOQgLgPgOgNIghgaQgRgPgLgUQgLgUAAgbQAAgmAWgUQAWgVAmAAQAXAAAQAKQAQAKAJARQAKASACAWIg0AGQgCgUgJgIQgIgIgKABQgLAAgHAIQgHAIAAAPQAAAQALAOQALANAPAOIAhAbQAQAPALAUQALAUABAZQAAAagLATQgLASgUAJQgTAKgYAAQgZgBgSgMg");
	this.shape_2.setTransform(69.4,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgaCfIAAiFIhCi4IA4AAIAkB6IABAAIAkh6IA4AAIhCC4IAACFg");
	this.shape_3.setTransform(50,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhFCfIAAk9IA3AAIAAENIBUAAIAAAwg");
	this.shape_4.setTransform(32.5,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AhLCfIAAk9ICQAAIAAAwIhZAAIAABTIBEAAIAAAtIhEAAIAABdIBgAAIAAAwg");
	this.shape_5.setTransform(13.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-15,120,56.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape.setTransform(92.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_1.setTransform(85,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QABgJADgGQADgHAGgEQAHgEAJAAQAIAAAHAFQAHAEADAHQAEAHAAAJIAAAHIgUAAIgBgNQgBgFgCgCQgDgCgCAAQgEAAgCADQgCADgBAHIAAA5QAAAGACADQADADAEABQAEAAADgEQACgEAAgIIAAgMIgKAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_2.setTransform(76.8,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_3.setTransform(66.5,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgFAAgCAEg");
	this.shape_4.setTransform(59.1,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAHAEADAHQADAGAAAJIAAA5QAAAIgDAHQgDAHgHAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(51.1,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_6.setTransform(43.1,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAHgEAIAAQAKAAAGAFQAHAEADAHQAEAHAAAJIAAAIIgUAAIAAgJQgBgHgDgDQgCgEgEAAQgEAAgCAEQgDADAAAGIAAA5QAAAGADADQACAEAEAAQAFAAACgDQACgDABgGIAAgOIAUAAIAAANQAAAIgEAHQgDAHgHAEQgGAEgKAAQgIAAgHgEg");
	this.shape_7.setTransform(35.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQAAAJAEAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgBgHgEgDQgDgDgDAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_8.setTransform(27.5,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,23.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape.setTransform(103.6,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QAAgJAEgGQADgHAHgEQAGgEAJAAQAIAAAHAFQAHAEADAHQADAHABAJIAAAHIgTAAIgBgNQgCgFgDgCQgCgCgCAAQgDAAgDADQgCADAAAHIAAA5QAAAGACADQACADAEABQAFAAACgEQACgEABgIIAAgMIgLAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_1.setTransform(95.6,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_2.setTransform(89.4,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_3.setTransform(83.2,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgMA4QgHgDgDgGQgEgGAAgJIAAgJIASAAIAAAJQAAAFACACQACADAEAAQADAAADgDQACgDAAgHIAAgbQAAgDgCgDQgDgDgDABQgDgBgCADQgDACgBADIgPAAIAAgQIABgSIAAgYIAuAAIAAAQIgdAAIgCAaIABAAQADgFAEgBQABgBAFAAQALAAAFAIQAFAHAAANIAAAQQAAASgGAJQgGAJgPAAQgGAAgGgCg");
	this.shape_4.setTransform(72.1,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_5.setTransform(66.7,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AACA5IAAgcIggAAIAAgOIAfhHIAUAAIAABHIAKAAIAAAOIgKAAIAAAcgAgPAPIASAAIAAgrIgBAAg");
	this.shape_6.setTransform(61.3,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOA5IgEgZIgTAAIgEAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape_7.setTransform(50.8,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_8.setTransform(39.7,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgIA5IAAhgIgUAAIAAgRIA5AAIAAARIgTAAIAABgg");
	this.shape_9.setTransform(32.6,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(27.2,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_11.setTransform(19.5,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,33,120,23.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._120_btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._160_border();
	this.instance.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381));

	// Layer 20
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(62.5,350,1,1,0,0,0,53.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 25
	this.instance_2 = new lib.Symbol21();
	this.instance_2.setTransform(250,344.2,1,1,0,0,0,80,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({x:80,alpha:1},13).wait(76).to({alpha:0},7).wait(22));

	// Layer 24
	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(250,304.8,1,1,0,0,0,80,18.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},7).wait(22));

	// Layer 23
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(250,271.5,1,1,0,0,0,80,18.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},7).wait(22));

	// Layer 6
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(250,238.2,1,1,0,0,0,80,18.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(251).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},7).wait(22));

	// Layer 22
	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(250,424.2,1,1,0,0,0,80,18.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({x:80,alpha:1},13).wait(80).to({alpha:0},8).wait(130));

	// Layer 21
	this.instance_7 = new lib.Symbol16();
	this.instance_7.setTransform(250,390.8,1,1,0,0,0,80,18.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).to({x:80,alpha:1},13).wait(84).to({alpha:0},8).wait(130));

	// Layer 19
	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(250,357.5,1,1,0,0,0,80,18.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142).to({_off:false},0).to({x:80,alpha:1},13).wait(88).to({alpha:0},8).wait(130));

	// Layer 18
	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(250,324.2,1,1,0,0,0,80,18.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({x:80,alpha:1},13).wait(93).to({alpha:0},8).wait(130));

	// Layer 3
	this.instance_10 = new lib.Symbol12();
	this.instance_10.setTransform(250,264.5,1,1,0,0,0,80,62);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).to({x:80,alpha:1},13).wait(97).to({alpha:0},8).wait(130));

	// Layer 17
	this.instance_11 = new lib.Symbol26();
	this.instance_11.setTransform(240,432.4,1,1,0,0,0,80,16.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45).to({_off:false},0).to({x:80,alpha:1},13).wait(68).to({alpha:0},7).wait(248));

	// Layer 16
	this.instance_12 = new lib.Symbol25();
	this.instance_12.setTransform(240,400.4,1,1,0,0,0,80,16.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).to({x:80,alpha:1},13).wait(71).to({alpha:0},7).wait(248));

	// Layer 9
	this.instance_13 = new lib.Symbol11();
	this.instance_13.setTransform(248,371.5,1,1,0,0,0,80,26);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({x:78,alpha:1},13).wait(74).to({alpha:0},7).wait(248));

	// Layer 14
	this.instance_14 = new lib.Symbol10();
	this.instance_14.setTransform(248,327.8,1,1,0,0,0,80,26);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},0).to({x:78,alpha:1},13).wait(78).to({alpha:0},7).wait(248));

	// Layer 7
	this.instance_15 = new lib.Symbol9();
	this.instance_15.setTransform(248,288.1,1,1,0,0,0,80,20);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({x:78,alpha:1},13).wait(83).to({alpha:0},7).wait(248));

	// Layer 10
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(248,245.4,1,1,0,0,0,80,30.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({_off:false},0).to({x:78,alpha:1},13).wait(87).to({alpha:0},7).wait(248));

	// Layer 2
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(80,663,1,1,0,0,0,80,57);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(13).to({_off:false},0).to({y:543,alpha:1},13).wait(355));

	// Layer 1
	this.instance_18 = new lib.Symbol24();
	this.instance_18.setTransform(80,95,1,1,0,0,0,80,95);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(359).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 13
	this.instance_19 = new lib.Symbol5();
	this.instance_19.setTransform(150,98,1,1,0,0,0,150,98);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(13).to({_off:false},0).to({alpha:1},13).wait(355));

	// Layer 12
	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},13).wait(368));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;