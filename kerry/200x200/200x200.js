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
		{src:"_200_footer.png", id:"_200_footer"},
		{src:"_200_kerry.jpg", id:"_200_kerry"},
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


(lib._200_footer = function() {
	this.initialize(img._200_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,17);


(lib._200_kerry = function() {
	this.initialize(img._200_kerry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,155);


(lib._200_logo = function() {
	this.initialize(img._200_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,49);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(67.5,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQALAAAHAEQAIAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQgBgJgDgDQgDgEgEAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgIAEQgHAFgLAAQgKAAgHgFg");
	this.shape_1.setTransform(61,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgRA9QgIgEgDgIQgEgHAAgJIAAhBQAAgKAEgHQADgIAIgEQAHgEAKAAQALAAAHAEQAIAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQgBgJgDgDQgDgEgEAAQgFAAgDADQgCAEAAAHIAABAQAAAHACAEQADAEAFAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgIAEQgHAFgLAAQgKAAgHgFg");
	this.shape_2.setTransform(52,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_3.setTransform(44,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_4.setTransform(33,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAPBAIgDgcIgXAAIgDAcIgXAAIAZh/IAaAAIAYB/gAAIAQIgIg2IgIA2IAQAAg");
	this.shape_5.setTransform(25.5,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAZBAIAAhjIAAAAIgUBjIgJAAIgUhjIgBAAIAABjIgTAAIAAh/IAeAAIAOBJIAPhJIAeAAIAAB/g");
	this.shape_6.setTransform(12,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAQBAIgFgcIgWAAIgEAcIgVAAIAXh/IAaAAIAYB/gAAJAQIgJg2IgHA2IAQAAg");
	this.shape_7.setTransform(2.5,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQARAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA7gAgNgFIAJAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgJAAg");
	this.shape_8.setTransform(-5.8,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgYA5QgIgJAAgPIAAhBQAAgKADgHQAEgIAIgEQAGgEALAAQAKAAAHAEQAIAFADAIQAEAIAAAKIAAAIIgVAAQAAgJgBgGQgCgFgDgCQgDgCgCAAQgEAAgDADQgDADAAAIIAABBQAAAGADAEQACADAFABQAFAAADgFQADgEAAgJIAAgNIgNAAIAAgQIAjAAIAABAIgLAAIgEgKQgFAGgEADQgGADgGAAQgNAAgIgJg");
	this.shape_9.setTransform(-15,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHAAAKIAABBQAAAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_10.setTransform(-24,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQARAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA7gAgNgFIAJAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgJAAg");
	this.shape_11.setTransform(-32.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgiBAIAAh/IAfAAQATAAAKAJQAKAIAAAVQAAAUgKAHQgKAKgTgBIgKAAIAAA1gAgNgFIAJAAQAJAAAFgEQADgFAAgLQAAgMgDgEQgFgFgJABIgJAAg");
	this.shape_12.setTransform(-41.8,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-13.5,120.2,25.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgRA9QgIgFgDgIQgFgIAAgKIAWgDQAAAKADAFQAEAFAEAAQAFAAAEgDQAEgDAAgGQAAgIgFgGQgFgGgEgFIgOgKQgHgGgEgIQgFgIAAgLQAAgQAKgIQAIgIAOAAQAKAAAGAEQAHAEAEAHQADAHACAJIgWACQAAgIgEgDQgEgDgDAAQgEAAgDADQgCAEAAAGQAAAGAEAGQAEAGAGAFIANAKQAHAGAEAIQAEAIABALQAAAKgFAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape.setTransform(78,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAIgEAJAAQALAAAIAEQAHAFADAIQAEAIAAAKIAAAKIgWAAIAAgKQgBgJgCgDQgDgEgFAAQgEAAgDADQgDAEAAAHIAABAQAAAHADAEQADAEAEAAQAGAAADgEQACgDAAgHIAAgPIAWAAIAAAPQAAAJgEAHQgDAIgHAEQgIAFgLAAQgJAAgIgFg");
	this.shape_1.setTransform(69.5,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_2.setTransform(62.5,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOBAIgahPIgBAAIAABPIgTAAIAAh/IAUAAIAZBIIAAAAIAAhIIAUAAIAAB/g");
	this.shape_3.setTransform(55.5,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHAAgJIAAhBQAAgKADgHQADgIAJgEQAHgEAKAAQALAAAIAEQAHAEAEAIQADAHAAAKIAABBQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFgAgIgrQgDAEAAAHIAABAQAAAHADAEQADAEAFAAQAGAAADgEQACgEABgHIAAhAQgBgHgCgEQgDgDgGAAQgFAAgDADg");
	this.shape_4.setTransform(46.5,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANBAIgOg2IgFABIgHAAIAAA1IgVAAIAAh/IAeAAQASgBAJAKQAKAIAAAVQAAAKgDAHQgDAHgDABQgDAEgEACIATA6gAgNgFIAIAAQAHAAAFgEQADgFAAgLQAAgMgDgEQgFgFgHABIgIAAg");
	this.shape_5.setTransform(37.7,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_6.setTransform(29.5,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAPBAIgDgdIgXAAIgDAdIgXAAIAZh/IAZAAIAZB/gAAIAQIgIg1IgIA1IAQAAg");
	this.shape_7.setTransform(22,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AALBAIAAg5IgVAAIAAA5IgXAAIAAh/IAXAAIAAA1IAVAAIAAg1IAXAAIAAB/g");
	this.shape_8.setTransform(13.5,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgEADQgCAEAAAHIAABAQAAAHACAEQAEAEAEAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_9.setTransform(4.5,5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgeBAIAAh/IA6AAIAAATIgjAAIAAAiIAaAAIAAARIgaAAIAAAmIAlAAIAAATg");
	this.shape_10.setTransform(-3.8,5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAaBAIAAhjIgBAAIgUBjIgJAAIgUhjIgBAAIAABjIgTAAIAAh/IAdAAIAPBJIAQhJIAdAAIAAB/g");
	this.shape_11.setTransform(-13.5,5.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgdBAIAAh/IA5AAIAAATIgkAAIAAAiIAbAAIAAARIgbAAIAAAmIAnAAIAAATg");
	this.shape_12.setTransform(-26.8,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAMBAIAAg5IgXAAIAAA5IgVAAIAAh/IAVAAIAAA1IAXAAIAAg1IAVAAIAAB/g");
	this.shape_13.setTransform(-35.5,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgKBAIAAhsIgVAAIAAgTIA/AAIAAATIgVAAIAABsg");
	this.shape_14.setTransform(-43.5,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-7,133.2,25.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAtC0IgLhQIhCAAIgLBQIg9AAIBDlnIBLAAIBCFngAAZAuIgZiZIAAAAIgYCZIAxAAg");
	this.shape.setTransform(14.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgdC0IAAlnIA8AAIAAFng");
	this.shape_1.setTransform(-3.8,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgeC0IhLlnIA9AAIAsD5IAAAAIAtj5IA9AAIhMFng");
	this.shape_2.setTransform(-21.9,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-7.5,62.5,64);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgaCeIAAiDIhCi5IA4AAIAkB6IABAAIAkh6IA4AAIhCC5IAACDg");
	this.shape.setTransform(66.9,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAhCeIgliDIgNABIgPAAIAACCIg3AAIAAk8IBNAAQAsAAAXAWQAXAWAAAzQAAAZgGAQQgFAQgJAHQgJAKgJADIAuCQgAgggPIATAAQAUABAJgLQAKgKgBgcQABgdgKgKQgJgLgUAAIgTAAg");
	this.shape_1.setTransform(46.6,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAhCeIgliDIgNABIgPAAIAACCIg3AAIAAk8IBNAAQAsAAAXAWQAXAWAAAzQAAAZgGAQQgFAQgJAHQgJAKgJADIAuCQgAgggPIATAAQAUABAJgLQAKgKgBgcQABgdgKgKQgJgLgUAAIgTAAg");
	this.shape_2.setTransform(24.6,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhLCeIAAk8ICQAAIAAAwIhZAAIAABTIBEAAIAAAtIhEAAIAABdIBgAAIAAAvg");
	this.shape_3.setTransform(3.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAfCeIgqiTIgBAAIgTAjIAABwIg3AAIAAk8IA3AAIAAB2IABAAIA3h2IA2AAIg7B3IBDDFg");
	this.shape_4.setTransform(-14.9,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-3.5,106.9,56.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAUAyIAAhNIgBAAIgPBNIgHAAIgPhNIgBAAIAABNIgPAAIAAhjIAXAAIALA5IAAAAIAMg5IAXAAIAABjg");
	this.shape.setTransform(-2.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOAwQgGgEgCgFQgDgHAAgHIAAgxQAAgIADgGQACgFAGgEQAGgEAIABQAIgBAHAEQAFAEADAFQADAGAAAIIAAAxQAAAHgDAHQgDAFgFAEQgHAEgIgBQgIABgGgEgAgGggQgCACAAAGIAAAxQAAAFACADQACAEAEAAQAEAAADgEQACgDgBgFIAAgxQABgGgCgCQgDgDgEgBQgEABgCADg");
	this.shape_1.setTransform(-10.7,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAKAyIgKgqIgFABIgEAAIAAApIgRAAIAAhjIAYAAQANAAAHAHQAHAGAAAQQAAAJgBAFQgCAFgEABQgCADgDABIAOAugAgJgEIAGAAQAFAAADgDQADgDAAgKQAAgIgDgDQgDgEgFAAIgGAAg");
	this.shape_2.setTransform(-17.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgXAyIAAhjIAvAAIAAAPIgdAAIAAAaIAVAAIAAANIgVAAIAAAtg");
	this.shape_3.setTransform(-24.1,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_4.setTransform(-33.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA3IABAAIAAg3IAPAAIAABjg");
	this.shape_5.setTransform(-39.4,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_6.setTransform(-45.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA+IAMg+IAMAAIAMA+IAAAAIAKg+IAQAAIgSBjg");
	this.shape_7.setTransform(-54,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-9.5,67.1,20.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgNAwQgGgFgDgFQgDgHAAgHIAQgDQABAIADAEQACADADAAQAEAAADgCQADgDAAgEQgBgGgDgFIgHgJIgKgHQgFgEgEgHQgEgFAAgKQAAgMAHgGQAHgHALABQAHAAAFADQAGADADAGQADAFAAAHIgQACQgBgGgDgDQgCgCgDgBQgDABgCACQgCADAAAEQAAAGAEAEIAGAIIALAIQAFAFADAGQAEAHAAAHQAAAJgDAGQgEAGgGADQgGACgHAAQgHAAgGgDg");
	this.shape.setTransform(20.8,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgXAyIAAhjIAtAAIAAAPIgbAAIAAAaIAUAAIAAANIgUAAIAAAeIAdAAIAAAPg");
	this.shape_1.setTransform(14.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVAyIAAhjIASAAIAABUIAZAAIAAAPg");
	this.shape_2.setTransform(9,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgaAyIAAhjIAaAAQAMAAAGAHQAHAGAAAOIgBAIQgCAEgCADQgDAEgEABQAGACAEAFQAEAGAAAKQAAAIgDAGQgDAIgGADQgGAEgJAAgAgIAjIAHAAQAFAAADgDQACgEAAgIQAAgHgDgFQgDgDgGAAIgFAAgAgIgIIAGAAQADABADgEQADgDAAgGQAAgIgCgDQgDgEgEAAIgGAAg");
	this.shape_3.setTransform(2.6,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAMAyIgDgXIgRAAIgDAXIgRAAIAThjIATAAIATBjgAAHANIgHgqIgGAqIANAAg");
	this.shape_4.setTransform(-4,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgRAAIAABUg");
	this.shape_5.setTransform(-9.9,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgSAsQgHgGAAgNIAAgyQAAgHADgGQADgFAFgEQAGgDAIAAQAHAAAGADQAGAEADAGQADAHAAAHIAAAGIgRAAIgBgLQgBgEgCgCQgCgBgCgBQgDABgCACQgCACAAAGIAAAyQgBAGACACQACADAEAAQAEAAACgDQACgDAAgIIAAgJIgJAAIAAgNIAbAAIAAAyIgJAAIgDgIQgEAFgEACQgEADgEgBQgKAAgGgHg");
	this.shape_6.setTransform(-19.2,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AALAyIgUg9IAAAAIAAA9IgQAAIAAhjIAQAAIATA3IAAAAIAAg3IAQAAIAABjg");
	this.shape_7.setTransform(-26.2,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_8.setTransform(-31.6,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgRAAIAABUg");
	this.shape_9.setTransform(-36.3,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_10.setTransform(-41,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAMAyIgDgXIgRAAIgDAXIgRAAIAThjIAUAAIASBjgAAGANIgGgqIgFAqIALAAg");
	this.shape_11.setTransform(-46,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AANAyIgNhBIAAAAIgKBBIgPAAIgThjIARAAIAKA/IAMg/IAMAAIAMA/IAAAAIAKg/IAQAAIgSBjg");
	this.shape_12.setTransform(-54,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-11.5,86.6,20.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AALAyIgUg9IgBAAIAAA9IgPAAIAAhjIAQAAIATA3IABAAIAAg3IAPAAIAABjg");
	this.shape.setTransform(-11.7,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgOAwQgFgEgDgFQgDgGAAgHIAAgyQAAgIADgGQADgFAFgEQAGgDAIAAQAIAAAGADQAHAEACAFQADAGAAAIIAAAyQAAAHgDAGQgCAFgHAEQgGADgIAAQgIAAgGgDgAgFggQgDACABAGIAAAxQgBAFADADQABAEAEAAQAEAAACgEQADgDAAgFIAAgxQAAgGgDgCQgCgDgEAAQgEAAgBADg");
	this.shape_1.setTransform(-18.7,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AALAyIgUg9IAAAAIAAA9IgQAAIAAhjIAQAAIATA3IAAAAIAAg3IAQAAIAABjg");
	this.shape_2.setTransform(-25.7,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAMAyIgDgWIgRAAIgDAWIgRAAIAThjIAUAAIASBjgAAGAMIgGgpIgFApIALAAg");
	this.shape_3.setTransform(-32.3,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgNAwQgGgEgDgFQgDgGAAgHIAAgyQAAgIADgGQADgFAGgEQAGgDAHAAQAIAAAGADQAGAEADAGQADAHAAAHIAAAIIgSAAIAAgIQAAgGgCgDQgDgDgDAAQgDAAgCADQgDACABAGIAAAxQgBAFADADQACAEADAAQAEAAACgEQACgCAAgFIAAgMIASAAIAAAMQAAAHgDAGQgDAFgGAEQgGADgIAAQgHAAgGgDg");
	this.shape_4.setTransform(-39,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgOAwQgFgEgDgFQgDgGAAgHIAAgyQAAgIADgGQADgFAFgEQAGgDAIAAQAIAAAHADQAFAEADAFQADAGAAAIIAAAyQAAAHgDAGQgDAFgFAEQgHADgIAAQgIAAgGgDgAgGggQgCACAAAGIAAAxQAAAFACADQADAEADAAQAEAAADgEQACgDgBgFIAAgxQABgGgCgCQgDgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(-49,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgHAyIAAhUIgRAAIAAgPIAxAAIAAAPIgQAAIAABUg");
	this.shape_6.setTransform(-55.3,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-13,54,20.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_kerry();
	this.instance.setTransform(0,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.5,200,155);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._200_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_13.setTransform(163,30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgXBRQgKgGgFgLQgGgKAAgNIAcgFQABANAFAHQAFAGAFAAQAHAAAGgDQAEgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLgBgPQAAgVANgLQAMgKATgBQANAAAJAGQAIAFAFAJQAFAKACANIgcACQgCgLgEgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAGAIQAHAHAGAHIASAOQAJAJAGAKQAGALAAAOQAAAOgFAKQgHAKgKAFQgLAFgMAAQgNAAgKgHg");
	this.shape_14.setTransform(154.9,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgXBRQgKgGgGgLQgEgKgBgNIAcgFQABANAFAHQAEAGAGAAQAIAAAEgDQAFgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLgBgPQAAgVAMgLQAMgKAUgBQANAAAIAGQAKAFAFAJQAEAKACANIgcACQgCgLgEgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAIQAFAHAHAHIASAOQAJAJAGAKQAGALABAOQAAAOgHAKQgFAKgLAFQgKAFgNAAQgOAAgJgHg");
	this.shape_15.setTransform(144.3,23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgoBWIAAirIBOAAIAAAaIgwAAIAAAtIAkAAIAAAXIgkAAIAAAzIAzAAIAAAag");
	this.shape_16.setTransform(134,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AglBWIAAirIAeAAIAACRIAtAAIAAAag");
	this.shape_17.setTransform(124.1,23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_18.setTransform(107.9,23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPAAQgOAAgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAIAAAEgEQAEgFAAgKIAAhWQAAgKgEgEQgEgFgIAAQgIAAgDAFg");
	this.shape_19.setTransform(95.7,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgXBRQgKgGgGgLQgEgKgBgNIAcgFQABANAFAHQAFAGAFAAQAIAAAEgDQAFgFAAgIQAAgJgGgJQgGgHgHgHIgSgOQgJgIgGgLQgGgLAAgPQgBgVAMgLQAMgKAUgBQANAAAIAGQAKAFAFAJQAEAKACANIgdACQAAgLgFgEQgFgEgFAAQgFAAgEAFQgEAEAAAIQAAAJAHAIQAFAHAHAHIASAOQAJAJAGAKQAGALABAOQAAAOgHAKQgFAKgLAFQgKAFgNAAQgNAAgKgHg");
	this.shape_20.setTransform(78.9,23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AARBWIgThHIgHAAIgIAAIAABHIgeAAIAAirIAqAAQAXAAANAMQAMAMAAAbQAAAOgDAJQgDAJgFADQgEAFgGACIAaBOgAgRgHIAKAAQAKAAAFgGQAGgGAAgPQAAgPgGgGQgFgGgKAAIgKAAg");
	this.shape_21.setTransform(67.9,23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAVBWIgFgmIgfAAIgFAmIgdAAIAgirIAjAAIAgCrgAAMAWIgMhIIAAAAIgKBIIAWAAg");
	this.shape_22.setTransform(56.3,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgoBWIAAirIBOAAIAAAaIgxAAIAAAtIAlAAIAAAXIglAAIAAAzIA0AAIAAAag");
	this.shape_23.setTransform(46,23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgNBWIAAhIIgkhjIAeAAIATBCIAAAAIAUhCIAeAAIgkBjIAABIg");
	this.shape_24.setTransform(35,23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgYBSQgKgGgFgJQgFgLAAgMIAAhXQAAgNAFgJQAFgLAKgFQAKgHAOAAQAPAAAKAHQAKAFAFALQAFAJAAANIAABXQAAAMgFALQgFAJgKAGQgKAGgPAAQgOAAgKgGgAgLg5QgDAEgBAKIAABWQABAKADAFQADAEAIAAQAJAAADgEQAEgFAAgKIAAhWQAAgKgEgEQgDgFgJAAQgIAAgDAFg");
	this.shape_25.setTransform(18.4,23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AAWBWIgWhwIAAAAIgSBwIgZAAIghirIAcAAIASBsIAAAAIAUhsIAWAAIAUBsIABAAIAQhsIAcAAIgeCrg");
	this.shape_26.setTransform(4.1,23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgcAAIAACRg");
	this.shape_27.setTransform(-8.3,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,7,182.9,32.8);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAAMIAAA7g");
	this.shape_5.setTransform(150.7,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgEA6IAAhRIAJAAIAABRgAgEgrIAAgOIAJAAIAAAOg");
	this.shape_6.setTransform(144,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgPAnQgJgEgFgIIAJgHQAIANANAAQAJAAAFgEQAEgEAAgGQAAgGgFgDQgFgEgHgCIgMgEQgIAAgFgFQgEgFAAgIIAAgBQAAgLAIgGQAHgGAMAAIAAAAQAHABAIAEQAHAEAFAGIgIAHQgFgGgFgDQgFgDgEAAQgIAAgDAEQgFADAAAGQAAAFAGADQAFADAFACIAOAEQAHACAFAEQAFAGAAAIQAAAMgJAGQgIAHgNAAQgHAAgJgEg");
	this.shape_7.setTransform(133.3,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgSAqIAAhRIAMAAIAAAQIAAAAQAFgJAEgEQAGgFAKAAIAAAMQgKAAgGAHQgFAGgEAOIAAAsg");
	this.shape_8.setTransform(127.5,21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgWAgQgLgLAAgVQAAgSAJgMQAKgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAIAAQAQAAAIgOIAJAEQgGAKgHAFQgHAFgNAAQgMAAgLgLgAgPgZQgFAHgBAMIAoAAQAAgMgFgHQgFgHgJAAQgIAAgHAHg");
	this.shape_9.setTransform(120.5,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgWAgQgLgLAAgVQABgSAIgMQAKgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAIAAQAQAAAIgOIAJAEQgGAKgHAFQgHAFgNAAQgMAAgLgLgAgPgZQgFAHgBAMIAoAAQABgMgGgHQgFgHgJAAQgIAAgHAHg");
	this.shape_10.setTransform(112.5,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgSAqIAAhRIAMAAIAAAQIAAAAQAFgJAEgEQAGgFAKAAIAAAMQgLAAgFAHQgFAGgEAOIAAAsg");
	this.shape_11.setTransform(106.2,21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_12.setTransform(99,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgcAsQgNgPAAgdQAAgbAMgPQAMgQASAAQAfAAAJAiIgNADQgDgNgHgGQgGgHgMAAQgMAAgHAMQgJANAAAWQAAAYAJAMQAIAMAOAAQALAAAHgIQAGgHAEgNIALADQgIAkghAAQgSAAgLgPg");
	this.shape_13.setTransform(90.2,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgPAnQgJgEgFgIIAJgHQAIANAOAAQAIAAAEgEQAFgEAAgGQAAgGgFgDQgFgEgHgCIgNgEQgHAAgEgFQgFgFAAgIIAAgBQAAgLAHgGQAIgGAMAAIAAAAQAGABAIAEQAJAEAEAGIgIAHQgFgGgFgDQgFgDgFAAQgGAAgEAEQgEADgBAGQABAFAEADQAFADAGACIAOAEQAHACAFAEQAEAGABAIQAAAMgJAGQgIAHgMAAQgIAAgJgEg");
	this.shape_14.setTransform(76.8,21.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgWAfQgKgLABgUQgBgSAKgMQAJgMAOAAQALAAAIAGQAGAGAFALIgLAEQgFgRgOAAQgJAAgGAJQgGAJAAAOQAAAPAGAJQAGAJAJAAQAIAAAFgDQAEgEAFgIIAJAEQgGALgHAFQgHAFgLAAQgOAAgJgMg");
	this.shape_15.setTransform(69.3,21.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgEA6IAAhRIAJAAIAABRgAgEgrIAAgOIAJAAIAAAOg");
	this.shape_16.setTransform(63.1,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAAMIAAA7g");
	this.shape_17.setTransform(56.4,21.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgXAfQgKgNAAgSQAAgRAKgMQAIgNAPAAQAQAAAJANQAIAMABARQgBASgIANQgJAMgQAAQgPAAgIgMgAgPgXQgGAJAAAOQAAAPAGAJQAGAJAJAAQAKAAAGgJQAGgJAAgPQAAgOgGgJQgGgJgKAAQgJAAgGAJg");
	this.shape_18.setTransform(48,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgSAqIAAhRIAMAAIAAAQIAAAAQAFgJAEgEQAGgFAKAAIAAAMQgKAAgHAHQgEAGgEAOIAAAsg");
	this.shape_19.setTransform(41.7,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgDA0QgEgCAAgIIAAg7IgOAAIAAgKIAOAAIAAgbIAJAAIAAAbIATAAIAAAKIgTAAIAAA5QAAAGAKgBIAKAAIAAAJIgOABQgIAAgDgDg");
	this.shape_20.setTransform(35.8,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_21.setTransform(29.1,21.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AASA5IAAg6QAAgPgNAAQgFAAgGAEIgLAJIAAA8IgMAAIAAhxIAMAAIAAArIAAAAQAMgNALAAQAKAAAHAGQAHAGAAANIAAA6g");
	this.shape_22.setTransform(20.8,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgXAfQgJgLAAgUQAAgSAJgMQAKgMAOAAQALAAAIAGQAGAGAFALIgLAEQgFgRgOAAQgJAAgGAJQgGAJAAAOQAAAPAGAJQAGAJAJAAQAHAAAFgDQAGgEAEgIIAJAEQgGALgHAFQgHAFgLAAQgOAAgKgMg");
	this.shape_23.setTransform(12.3,21.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgWAgQgLgLAAgVQAAgSAJgMQAKgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAIAAQAQAAAIgOIAJAEQgGAKgHAFQgHAFgNAAQgMAAgLgLgAgPgZQgFAHgBAMIAoAAQAAgMgFgHQgFgHgJAAQgIAAgHAHg");
	this.shape_24.setTransform(4.4,21.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AAlA5IAAhnIggBnIgIAAIghhnIAABnIgMAAIAAhxIAUAAIAcBbIAAAAIAdhbIAUAAIAABxg");
	this.shape_25.setTransform(-6.3,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,8,172.4,23);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgKA4QgGgCgFgFQgFgFgDgIQgDgJAAgMQAAgLADgIQADgIAFgFQAFgFAGgCQAFgDAFAAQAKAAALAKIABABIAAgpIALAAIAABgIAAASIgKAAIgBgJQgDAFgGADQgHACgGAAQgEAAgGgCgAgVAPQAAAQAGAIQAHAJAIAAQAGAAAFgCQAEgDAHgGIAAgqQgLgMgLABQgVAAAAAfg");
	this.shape.setTransform(131.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgWAgQgLgLABgVQAAgSAJgMQAJgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAJAAQAPAAAHgOIAJAEQgFAKgGAFQgIAFgMAAQgOAAgKgLgAgOgZQgGAHgBAMIApAAQAAgMgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_1.setTransform(123.6,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgWAfQgJgLAAgUQAAgSAJgMQAJgMANAAQAMAAAIAGQAGAGAFALIgLAEQgFgRgPAAQgIAAgGAJQgGAJAAAOQAAAPAGAJQAGAJAIAAQAJAAAFgDQAFgEAFgIIAIAEQgGALgHAFQgHAFgMAAQgNAAgJgMg");
	this.shape_2.setTransform(115.5,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAANIAAA6g");
	this.shape_3.setTransform(107.1,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_4.setTransform(98.5,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgGApIgZhRIAMAAIATBDIAVhDIAMAAIgaBRg");
	this.shape_5.setTransform(91.1,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgKA4QgGgCgFgFQgFgFgDgIQgEgJAAgMQAAgLAEgIQADgIAFgFQAFgFAGgCQAFgDAFAAQAKAAAKAKIABABIAAgpIAMAAIAABgIABASIgLAAIgCgJQgCAFgHADQgFACgHAAQgEAAgGgCgAgVAPQAAAQAGAIQAGAJAJAAQAGAAAEgCQAFgDAGgGIAAgqQgKgMgLABQgVAAAAAfg");
	this.shape_6.setTransform(82.8,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AAfA5IgKgkIgpAAIgKAkIgOAAIAkhxIARAAIAjBxgAgRAKIAiAAIgQg5IgBAAg");
	this.shape_7.setTransform(73.8,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgKA4QgGgCgFgFQgFgFgEgIQgDgJAAgMQAAgLADgIQAEgIAFgFQAFgFAFgCQAGgDAFAAQAJAAALAKIABABIAAgpIAMAAIAABgIABASIgMAAIgBgJQgCAFgHADQgGACgGAAQgFAAgFgCgAgVAPQAAAQAGAIQAHAJAJAAQAFAAAEgCQAFgDAGgGIAAgqQgKgMgKABQgWAAAAAfg");
	this.shape_8.setTransform(59.2,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAANIAAA6g");
	this.shape_9.setTransform(50.6,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgYAlQgHgGAAgLQAAgOAMgGQAMgHAZgFIAAgEQAAgQgRAAQgGAAgGAEQgFAEgCAFIgKgFQAKgSATAAQAMAAAIAHQAJAGAAAMIAAAoQAAALACAHIgMAAIgBgLQgMANgOAAQgKAAgHgGgAgTAUQAAAGAEADQAFAEAFAAQAFAAAGgEQAHgEAFgGIAAgVQglAFAAARg");
	this.shape_10.setTransform(42,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AApAqIAAg5QABgQgNAAQgFAAgFACIgHAFIgHAGIAAA8IgJAAIAAg5QAAgQgNAAQgFAAgFACIgGAFIgHAGIAAA8IgMAAIAAhRIAMAAIAAALIABgBQAKgMAOAAQAHAAAFAEQAEADADAGQAMgNAOAAQAXAAAAAaIAAA5g");
	this.shape_11.setTransform(31.5,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgWAgQgKgLAAgVQgBgSAKgMQAJgMAOAAQANAAAJAKQAJAJAAATIAAAGIg0AAQAAANAHAJQAHAJAJAAQAPAAAHgOIAJAEQgEAKgIAFQgHAFgMAAQgOAAgKgLgAgOgZQgGAHgBAMIApAAQgBgMgFgHQgFgHgJAAQgJAAgFAHg");
	this.shape_12.setTransform(20.9,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgoA5IAAhxIAfAAQAWAAAOAPQAOAPAAAaQAAAagOAPQgOAQgWAAgAgbAuIARAAQAmAAAAguQABgXgLgLQgLgLgQAAIgSAAg");
	this.shape_13.setTransform(11.9,21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AASAqIAAg6QAAgPgNAAQgFAAgGAEIgLAIIAAA9IgMAAIAAhRIAMAAIAAALIAAAAQAMgNALAAQAKAAAHAGQAHAGAAANIAAA6g");
	this.shape_14.setTransform(-3.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_15.setTransform(-10.3,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,10,153.7,23);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy2();
	this.instance_1.setTransform(152,163,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(297).to({_off:false},0).to({alpha:1},11).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy2();
	this.instance_2.setTransform(150,218.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({_off:false},0).to({y:194.5},11).wait(15));

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
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;