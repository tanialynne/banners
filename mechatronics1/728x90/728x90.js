(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300x250.jpg", id:"_300x250"}
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



(lib._300x250 = function() {
	this.initialize(img._300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4F67").s().p("ApACJQAKgHARgQQAQgRgKAHIgCABQgOAHgrAHQgMgMgLgPQAfgIAfgTQARgKAJgIQgnAMgfABQgWABgPgEQgJgbgBgcQAbAoBBgdQAhgNAbgVQBBgPAtAIQAWAEAJAHQgHhDhGAZQgVAIgZAQQgWAPAEgBQhBAPgqACQgeACgPgFQACgdALgaQAcAjA4gXQAfgMAdgYQBLgPAuAHQAeAEAMAMQAUAmAAAoQAABEgyAxQgyAxhGAAQg3AAglgdgAmxBpQgJgygxARQgOAFgQALQgPALAEgBQAvgJAeAHQAQAEAGAFIAAAAgAnSAGQgXAJgaARQgOAIgIAHQBSgRArAGQAXADAGAGQgGgtgnAAQgQAAgWAGgADxCZIAAgHIADAAQAFAAABgDIABgEIgKgiIAJAAIAFAWIAAAAIAGgWIAJAAIgLAjQgDAIgDADQgDACgFAAgABJCRQABgHAGAAIgDgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABgEAFgCQgFgEAAgFQAAgFAEgEQADgEAHAAQAFAAAEADQACgDAGAAIAAAGIgGABQACACAAAEQAAAFgDADQgEAEgGAAQgGAAgBACQAAACAMABQAMABAAAIQAAAEgFADQgDADgJAAQgPAAgBgIgABRCQQAAAEAKAAQADAAADgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgEgKAAQgHAAAAAEgABUBwQAAABAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAAGAGAAQAGAAAAgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAjCXIADgLIgEAAIAAgJIAKAAIAAAJIgFALgAGnCIQgFgFABgIQgBgJAFgFQAEgFAHAAQAHAAAEAFQAEAFAAAHIAAADIgVAAQAAAKAGAAQAFAAADgEIAHAEQgFAHgKAAQgHAAgEgFgAGsB2IANAAQgBgIgGAAQgHAAABAIgAFrCIQgEgFAAgIQAAgJAEgFQAFgFAHAAQAHAAAEAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAFAAADgEIAGAEQgFAHgJAAQgHAAgFgFgAFwB2IANAAQAAgIgGAAQgHAAAAAIgACqCKQgDgDAAgDQAAgMAUgCIAAgDQAAgFgFAAQgFAAgDAFIgFgEQABgDAEgCQAEgCAEAAQAHABADADQAEADAAAHIAAARIABAFIgJAAIAAgDQgGAEgFAAQgFAAgCgDgACzB+QgDABAAADQAAAFADAAQAEAAAEgEIAAgIIgIADgAByCIQgFgFAAgIQAAgJAFgFQAEgFAHAAQAIAAADAFQAFAFAAAJQAAAIgFAFQgDAFgIAAQgHAAgEgFgAB2B7QABALAGAAQAHAAAAgLQAAgMgHAAQgGAAgBAMgAAACIQgDgFgBgIQABgJADgFQADgFAHAAQAHAAAEAFQADAFABAHIAAADIgWAAQABAKAGAAQAFAAADgEIAHAEQgGAHgKAAQgGAAgDgFgAADB2IAOAAQgBgIgGAAQgHAAAAAIgAg7CIQgEgFAAgIQAAgJAEgFQAEgFAIAAQAGAAAFAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAEAAAEgEIAGAEQgFAHgJAAQgIAAgEgFgAg2B2IANAAQAAgIgGAAQgHAAAAAIgAjWCIQgDgFAAgIQAAgJADgFQAFgFAHAAQAHAAAFAFQADAFAAAJQAAAIgDAFQgFAFgHAAQgHAAgFgFgAjRB7QAAALAHAAQAHAAAAgLQAAgMgHAAQgHAAAAAMgAHKCMIAAgJIAJAAIAAAJgAGNCMIAAgjIAIAAIAAAGQADgGAGgBIAAAJIgBAAQgCAAgDADIgDADIAAAVgAFXCMIAAgXQABgGgFAAQgFAAgCAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAEAAQALAAAAAMIAAAYgAEsCMIgFgWIgGAWIgIAAIgJgjIAIAAIAGAWIAEgWIAIAAIAGAWIAEgWIAIAAIgJAjgADiCMIAAgXQAAgGgEAAQgFAAgDAEIAAAZIgIAAIAAgjIAHAAIAAAEQAIgFADAAQAKAAAAAMIAAAYgAgZCMIAAgjIAIAAIAAAGQADgGAHgBIAAAJIgBAAQgDAAgDADIgDADIAAAVgAhPCMIAAgXQAAgGgEAAQgEAAgDAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAFAAQAKAAAAAMIAAAYgAiMCMIAAgYQAAgFgEAAQgDAAgFAEIAAAZIgIAAIAAgYQAAgFgDAAQgEAAgEAEIAAAZIgIAAIAAgjIAIAAIAAAEQAEgFAGAAQAHAAACAFQAFgFAHAAQAIAAAAALIAAAZgAjvCMIAAgjIAHAAIAAAGQAEgGAGgBIAAAJIgBAAQgDAAgDADIgCADIAAAVgAkVCMIAAgxIAgAAIAAAIIgXAAIAAAMIARAAIAAAIIgRAAIAAAVgAIIBtIAAgVIgBAAIgGAVIgEAAIgGgVIAAAVIgEAAIAAgaIAHAAIAFASIABAAIAEgSIAHAAIAAAagAHjBtIAAgWIgHAAIAAgEIASAAIAAAEIgHAAIAAAWgAIuAuQgFgGAAgKIAAgqQAAgJAFgGQAGgHALAAQAKAAAGAHQAGAHgBAKIAAAFIgNAAQAAgJgCgEQgDgDgEAAQgGAAgBAJIAAAqQAAAJAIAAQAHAAABgMIAAgIIgKAAIAAgMIAYAAIAAArIgHAAIgDgGQgHAIgHAAQgJAAgGgGgAFbAtQgGgGAAgJIAAgqQAAgJAGgGQAGgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgGgHgAFkgMIAAApQAAAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAAAAJgAEeAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAFAHQAGAGAAALIAAAGIgPAAIAAgHQAAgKgGAAQgJAAABAJIAAApQgBAKAJAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgGAGQgFAHgKAAQgMAAgFgHgAAAAuQgGgGgBgLIAAg9IANAAIAAA+QAAAJAIAAQAIAAgBgJIAAg+IAPAAIAAA9QABALgHAGQgFAGgLAAQgKAAgEgGgAjTAtQgFgGAAgJIAAgqQAAgJAFgGQAHgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgHgHgAjKgMIAAApQABAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAgBAJgAkPAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAGAHQAFAHAAAKIAAAGIgPAAIAAgHQAAgKgGAAQgIAAAAAJIAAApQAAAKAIAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgFAGQgGAHgKAAQgMAAgFgHgAJmAyIAAhSIAnAAIAAAMIgYAAIAAAUIASAAIAAANIgSAAIAAAZIAaAAIAAAMgAHyAyIAAhSIAoAAIAAAMIgZAAIAAAUIATAAIAAANIgTAAIAAAZIAaAAIAAAMgAHCAyIAAhSIAPAAIAABGIAWAAIAAAMgAGSAyIAAhSIAOAAIAABGIAXAAIAAAMgADRAyIAAgjIgSgvIAPAAIAKAgIAAAAIAKggIAPAAIgRAvIAAAjgACeAyIAAhGIgPAAIAAgMIArAAIAAAMIgOAAIAABGgAB0AyIAAhSIAPAAIAABSgABUAyIgSgzIAAAzIgNAAIAAhSIANAAIASAuIAAAAIAAguIAOAAIAABSgAgjAyIAAhAIgNBAIgHAAIgOhAIAABAIgMAAIAAhSIATAAIAKAvIAAAAIAKgvIAUAAIAABSgAhtAyIAAhAIgOBAIgHAAIgNhAIAAAAIAABAIgMAAIAAhSIATAAIAKAvIAKgvIAUAAIAABSgADAg5IgLgjIgHAAIAAAjIgOAAIAAhVIAUAAQAMAAAGAGQAHAGAAANQgBARgJAFIAMAmgACuhoIAFAAQAGAAADgDQACgDAAgHQAAgHgCgDQgDgDgGAAIgFAAgABpg5IAAhVIAnAAIAAANIgZAAIAAAWIATAAIAAAMIgTAAIAAAZIAaAAIAAANgABBg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAAgg5IgDgTIgPAAIgEATIgLAAIANhVIASAAIAQBVgAAQhZIALAAIgGgkIAAAAgAgjg5IgKg4IgKA4IgNAAIgPhVIANAAIAJA2IAAAAIAKg2IALAAIALA2IAAAAIAIg2IANAAIgPBVgAiDg5IAAhVIAnAAIAAANIgYAAIAAAWIASAAIAAAMIgSAAIAAAZIAaAAIAAANgAjAg5IAAhVIAWAAQAXAAgBAaIAAAhQABAagXAAgAiyhFIAGAAQAFAAADgDQACgCAAgHIAAglQAAgHgCgCQgDgDgFAAIgGAAgAjhg5IAAhVIAOAAIAABVgAkLg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAp9hIQAWgqAogZQApgaAxAAQAzAAAqAcQgoANgiASQgWAMgJAIQhHAQgqAAQgPAAgMgCg");
	this.shape.setTransform(81.3,-56.6,1.292,1.292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("AgFCgIAAk/IALAAIAAE/g");
	this.shape_1.setTransform(-391.9,131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4F67").s().p("AgYAUIAPgDQABATAIAAQAEAAACgDQACgCAAgEQAAgEgCgEQgBgDgCgCIgDgFIgNgKQgGgEgDgGQgCgFAAgIQAAgLAGgHQAHgGALAAQAEAAAFABQAEACACACIAFAGIACAHIABAIIgOADIgBgFIgBgEIgCgEIgCgCIgDgBQgEABgBACQgCACAAAEQAAAFACADQABADAEADIALALIAFAEIAFAGQACAEABAEIABAJQAAAKgGAHQgIAGgKAAQgYAAgBgdg");
	this.shape_2.setTransform(135.1,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4F67").s().p("AgIAwQgFgCgEgDQgDgCgBgFIgEgIIgBgLIAAggIABgLIAEgJQABgFADgCQAEgDAFgBQAEgCAEAAQAIAAAFACQAFACADAEQADADABAFQACAFgBAHIAAAIIgRAAIAAgIIAAgKQgBgFgHAAIgBAAIgBABIgDABIgCADIgBADIgBAEIAAAEIAAAnQABAJACAEQACADADAAIAEAAIACgBIACgCIABgDIAAgDIAAgDIAAgEIAAgIIARAAIAAAIIAAAKIgCAIQgDAEgDACQgDADgEABIgLABQgEAAgEgBg");
	this.shape_3.setTransform(128.8,-16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4F67").s().p("AgHAwIAAhfIAPAAIAABfg");
	this.shape_4.setTransform(123.9,-16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4F67").s().p("AANAwIgWg4IAAA4IgPAAIAAhfIAMAAIAWA1IAAg1IAPAAIAABfg");
	this.shape_5.setTransform(119,-16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4F67").s().p("AgUApQgGgIgBgQIAAghQABgIABgGQABgGAEgEQADgEAGgCQAFgCAGAAQAPAAAGAIQAHAIgBAQIAAAhQAAAIgBAGQgBAGgDAEQgEAEgFACQgFACgIAAQgNAAgHgIgAgDgiIgEADIgBAFIgBAFIAAArIABAEIAAAEIADAEIADACIACAAIAEAAIADgCIABgEIABgEIAAgEIAAgrIAAgFIgBgFIgDgDIgFgBIgDABg");
	this.shape_6.setTransform(112.4,-16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4F67").s().p("AAJAwIgJgsIgIAAIAAAsIgSAAIAAhfIAWAAIALABQAGABAEAEQAEADACAEQACAGAAAHQAAAJgDAFQgCAHgHAAIAOAwgAgIgFIAEAAQAGAAADgEQADgEAAgHQAAgIgCgDQgDgEgGAAIgFAAg");
	this.shape_7.setTransform(105.8,-16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4F67").s().p("AgHAwIAAhSIgQAAIAAgNIAvAAIAAANIgPAAIAABSg");
	this.shape_8.setTransform(99.8,-16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AAMAwIgEgXIgOAAIgFAXIgRAAIAVhfIAQAAIAUBfgAgFAOIALAAIgGgmg");
	this.shape_9.setTransform(94.2,-16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4F67").s().p("AAJAwIAAgsIgSAAIAAAsIgRAAIAAhfIARAAIAAAoIASAAIAAgoIASAAIAABfg");
	this.shape_10.setTransform(87.6,-16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4F67").s().p("AgIAwQgGgCgCgDQgEgCgCgFIgDgIIAAgLIAAggIAAgLIADgJQACgFAEgCQACgDAGgBQAEgCAEAAQAHAAAGACQAFACADAEQADADABAFQABAFABAHIAAAIIgRAAIAAgIIgBgKQgBgFgHAAIgBAAIgBABIgDABIgCADIgBADIAAAEIAAAEIAAAnQgBAJADAEQACADADAAIADAAIADgBIACgCIABgDIABgDIAAgDIAAgEIAAgIIARAAIAAAIIgBAKIgCAIQgDAEgDACQgCADgFABIgLABQgEAAgEgBg");
	this.shape_11.setTransform(80.9,-16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4F67").s().p("AgTAwIAAhfIAnAAIAAAMIgVAAIAAAcIAQAAIAAALIgQAAIAAAgIAVAAIAAAMg");
	this.shape_12.setTransform(75.3,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4F67").s().p("AAUAwIgBhBIgPBBIgIAAIgOhBIgBBBIgNAAIABhfIASAAIANBCIAOhCIARAAIACBfg");
	this.shape_13.setTransform(68.5,-16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4F67").s().p("AgSAwIAahfIALAAIgaBfg");
	this.shape_14.setTransform(62,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4F67").s().p("AgKAvQgEgCgDgCQgEgDgBgEQgCgFgBgEIgBgMIAAg/IARAAIAABBIABAFIAAAFIACAEIADAEIADABIAEgBIADgEIACgEIABgFIAAgFIAAhBIARAAIAAA/IgBAMIgCAJIgFAHQgDACgFACQgFABgGAAQgFAAgFgBg");
	this.shape_15.setTransform(56.2,-16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4F67").s().p("AgZAwIAAhfIAXAAQAGAAAGABQAGACADAEQAEAEACAGQABAFAAAIIAAAhQAAAIgBAHQgCAFgEAEQgDAEgGACQgFACgHAAgAgIAjIAGAAIACAAIAEgBIACgCIABgDIABgEIAAgEIAAgFIAAgiIAAgFIgBgFIgBgCIgCgCIgEgCIgCgBIgGAAg");
	this.shape_16.setTransform(49.6,-16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4F67").s().p("AgTAwIAAhfIAnAAIAAAMIgVAAIAAAcIAQAAIAAALIgQAAIAAAgIAVAAIAAAMg");
	this.shape_17.setTransform(43.9,-16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4F67").s().p("AgHAHIAAgOIAOAAIAAAOg");
	this.shape_18.setTransform(39.9,-12.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4F67").s().p("AgIAwQgGgCgCgDQgEgCgCgFIgCgIIgBgLIAAggIABgLIACgJQACgFAEgCQACgDAGgBQAEgCAFAAQAGAAAGACQAFACADAEQADADABAFQABAFABAHIAAAIIgRAAIAAgIIgBgKQgCgFgGAAIAAAAIgDABIgCABIgCADIgBADIAAAEIAAAEIAAAnQgBAJADAEQACADAEAAIACAAIADgBIACgCIABgDIABgDIAAgDIAAgEIAAgIIARAAIAAAIIgBAKIgDAIQgCAEgCACQgDADgFABIgKABQgFAAgEgBg");
	this.shape_19.setTransform(35.4,-16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4F67").s().p("AgJAwQgEgCgEgDQgDgCgBgFIgEgIIgBgLIAAggIABgLIAEgJQABgFADgCQAEgDAEgBQAFgCAEAAQAIAAAFACQAFACADAEQADADABAFQACAFgBAHIAAAIIgRAAIAAgIIAAgKQgBgFgHAAIgBAAIgBABIgDABIgCADIgBADIgBAEIAAAEIAAAnQABAJACAEQACADADAAIAEAAIACgBIACgCIABgDIAAgDIAAgDIAAgEIAAgIIARAAIAAAIIAAAKIgCAIQgDAEgDACQgDADgEABIgLABQgEAAgFgBg");
	this.shape_20.setTransform(28.9,-16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4F67").s().p("AgHAwIAAhSIgQAAIAAgNIAvAAIAAANIgPAAIAABSg");
	this.shape_21.setTransform(23.1,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#91D2E5").s().p("AwGHFIAAuJMAgMAAAIAAOJg");
	this.shape_22.setTransform(82.3,-47.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392.5,-93.1,577.9,241);


(lib.newFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape.setTransform(290.3,-87.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAZIATgEQAAAYALAAQAFAAADgDQACgDAAgGQAAgFgCgEQgBgEgCgDIgFgGIgRgMQgGgGgEgHQgDgHAAgKQgBgOAJgIQAIgHAOgBQAFAAAFACQAFACAEADQAEADACAEIADAJIABAKIgTAEIAAgGIgBgGIgCgEIgDgDQgDgBgBAAQgEAAgDADQgDADABAFQAAAGABAEQADAEAFAEIAOAOIAGAFIAGAHQADAFABAFIACALQAAANgJAIQgIAJgOAAQgeAAgBglg");
	this.shape_1.setTransform(285,-92.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAZIAUgEQAAAYALAAQAFAAADgDQACgDAAgGQAAgFgBgEQgCgEgDgDIgEgGIgQgMQgIgGgDgHQgEgHAAgKQAAgOAJgIQAIgHAOgBQAGAAAEACQAFACAEADQADADADAEIADAJIABAKIgTAEIAAgGIgBgGIgCgEIgEgDQgCgBgBAAQgEAAgDADQgCADAAAFQAAAGACAEQACAEAFAEIANAOIAHAFIAGAHQADAFABAFIABALQABANgJAIQgIAJgOAAQgeAAgCglg");
	this.shape_2.setTransform(277.6,-92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_3.setTransform(270.8,-92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAWAAIAABoIAbAAIAAAPg");
	this.shape_4.setTransform(264.6,-92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_5.setTransform(253.5,-92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA0QgJgLABgTIAAgrQAAgKABgHQACgHAFgFQAEgFAGgDQAHgDAIAAQASAAAJAKQAHAKABAUIAAArQAAAJgCAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgIgKgAgFgrQgDABgBADIgCAFIAAAIIAAA1IAAAGIABAFIADAEIADACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IgBgIIgBgFQgCgDgCgBQgCgBgEAAQgCAAgDABg");
	this.shape_6.setTransform(245,-92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAZIATgEQABAYALAAQAFAAACgDQADgDAAgGQAAgFgDgEQgBgEgCgDIgGgGIgQgMQgGgGgEgHQgDgHAAgKQAAgOAIgIQAJgHANgBQAFAAAGACQAFACADADQADADACAEIAEAJIACAKIgTAEIgBgGIgBgGIgCgEIgDgDQgCgBgCAAQgFAAgCADQgCADgBAFQAAAGACAEQADAEAFAEIANAOIAIAFIAFAHQADAFABAFIABALQAAANgIAIQgIAJgOAAQgeAAgBglg");
	this.shape_7.setTransform(233.5,-92.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_8.setTransform(225.7,-92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgUAAIAYh3IAVAAIAZB3gAgGASIAOAAIgIgwg");
	this.shape_9.setTransform(217.5,-92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_10.setTransform(210.7,-92.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA8IAAguIgZhJIAVAAIANAwIAOgwIAVAAIgZBJIAAAug");
	this.shape_11.setTransform(203.5,-92.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaA0QgHgLgBgTIAAgrQABgKACgHQACgHADgFQAFgFAGgDQAHgDAIAAQATAAAHAKQAJAKgBAUIAAArQABAJgCAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgJgKgAgFgrQgCABgCADIgBAFIgBAIIAAA1IABAGIAAAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IAAgIIgCgFQgBgDgDgBQgDgBgDAAQgDAAgCABg");
	this.shape_12.setTransform(192,-92.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA8IgNhPIgMBPIgSAAIgSh3IATAAIAKBMIANhMIANAAIANBMIAKhMIASAAIgRB3g");
	this.shape_13.setTransform(182.5,-92.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_14.setTransform(173.9,-92.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_15.setTransform(163,-92.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_16.setTransform(156.9,-92.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_17.setTransform(347.9,-102.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAZIATgEQAAAYALAAQAFAAADgDQACgDAAgGQAAgFgCgEQgBgEgCgDIgFgGIgRgMQgGgGgEgHQgDgHAAgKQgBgOAJgIQAIgHAOgBQAFAAAFACQAGACADADQAEADACAEIADAJIABAKIgTAEIAAgGIgBgGIgCgEIgDgDQgDgBgBAAQgEAAgDADQgDADABAFQAAAGABAEQADAEAFAEIAOAOIAGAFIAGAHQADAFABAFIACALQAAANgJAIQgIAJgOAAQgeAAgBglg");
	this.shape_18.setTransform(342.6,-107.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_19.setTransform(334.8,-107.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_20.setTransform(327.5,-107.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_21.setTransform(321.1,-107.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_22.setTransform(313.7,-107.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgUAAIAYh3IAVAAIAZB3gAgHASIAPAAIgIgwg");
	this.shape_23.setTransform(305.5,-107.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_24.setTransform(297.6,-107.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAZIAUgEQABAYALAAQAFAAACgDQACgDABgGQAAgFgCgEQgCgEgDgDIgFgGIgPgMQgIgGgDgHQgDgHgBgKQABgOAIgIQAJgHANgBQAFAAAGACQAEACAEADQADADACAEIAEAJIACAKIgTAEIgBgGIgBgGIgCgEIgEgDQgBgBgCAAQgFAAgCADQgDADAAAFQAAAGADAEQACAEAFAEIANAOIAIAFIAFAHQADAFABAFQACAFgBAGQAAANgIAIQgIAJgOAAQgeAAgCglg");
	this.shape_25.setTransform(286.3,-107.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_26.setTransform(278.5,-107.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IATAAIAAB3g");
	this.shape_27.setTransform(272.4,-107.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_28.setTransform(266.2,-107.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaA0QgHgLgBgTIAAgrQAAgKACgHQADgHADgFQAEgFAHgDQAHgDAIAAQATAAAHAKQAJAKgBAUIAAArQAAAJgBAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgJgKgAgFgrQgCABgCADIgBAFIgBAIIAAA1IABAGIABAFIABAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IgBgIIgBgFQgBgDgDgBQgDgBgDAAQgCAAgDABg");
	this.shape_29.setTransform(258,-107.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_30.setTransform(249.8,-107.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_31.setTransform(242.3,-107.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgVAAIAZh3IAVAAIAYB3gAgHASIAOAAIgHgwg");
	this.shape_32.setTransform(235.2,-107.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMA8IAAg3IgXAAIAAA3IgWAAIAAh3IAWAAIAAAzIAXAAIAAgzIAWAAIAAB3g");
	this.shape_33.setTransform(226.9,-107.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_34.setTransform(218.6,-107.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_35.setTransform(211.6,-107.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAZA8IgBhRIgSBRIgLAAIgShSIgBBSIgRAAIACh3IAXAAIAQBTIARhTIAXAAIACB3g");
	this.shape_36.setTransform(203,-107.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAcAAQAKAAAGACQAIACAFAFQAEAFACAHQACAHAAAKIAAApQAAALgCAHQgCAHgEAFQgFAFgHADQgHACgJAAgAgKAtIAGAAIAFgBIADgBIAEgDIABgDIABgFIAAgFIAAgHIAAgqIAAgHIAAgFIgCgFIgDgCIgEgCIgFAAIgGAAg");
	this.shape_37.setTransform(190.2,-107.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_38.setTransform(181.8,-107.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgUAAIAYh3IAVAAIAZB3gAgGASIAOAAIgIgwg");
	this.shape_39.setTransform(173.9,-107.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZA8IgBhRIgSBRIgLAAIgShSIgBBSIgRAAIACh3IAXAAIAQBTIARhTIAXAAIACB3g");
	this.shape_40.setTransform(164.8,-107.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_41.setTransform(156.8,-107.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAdAAQAJAAAHACQAHACAEAFQAFAFACAHQACAHAAAKIAAApQAAALgCAHQgCAHgFAFQgDAFgIADQgHACgJAAgAgKAtIAHAAIADgBIAFgBIACgDIACgDIABgFIAAgFIABgHIAAgqIgBgHIgBgFIgBgFIgDgCIgFgCIgDAAIgHAAg");
	this.shape_42.setTransform(149.3,-107.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAiAAIAAANg");
	this.shape_43.setTransform(142.4,-106.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_44.setTransform(135.6,-107.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IATAAIAAB3g");
	this.shape_45.setTransform(129.5,-107.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAMQADgBAEgDQAAgEAAgEIgIAAIAAgTIARAAIAAATQAAAQgPAEg");
	this.shape_46.setTransform(122.3,-101.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_47.setTransform(117.5,-107.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZA0QgJgLABgTIAAgrQgBgKACgHQADgHAEgFQADgFAHgDQAHgDAIAAQASAAAJAKQAHAKABAUIAAArQgBAJgBAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgIgKgAgFgrQgDABgBADIgBAFIgBAIIAAA1IABAGIABAFIACAEIADACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IgBgIIgBgFQgCgDgCgBQgDgBgDAAQgCAAgDABg");
	this.shape_48.setTransform(110.2,-107.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMA8IAAg3IgXAAIAAA3IgWAAIAAh3IAWAAIAAAzIAXAAIAAgzIAWAAIAAB3g");
	this.shape_49.setTransform(101.6,-107.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.2,-119.9,256.3,44.7);


(lib.mechanics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("Ag0AqIAggHQABApAUAAQAIAAAFgGQAEgFAAgJQAAgIgEgHQgDgHgDgFIgKgLIgbgVQgLgLgHgLQgFgLAAgRQAAgYAOgNQAOgNAYAAQAKAAAIADQAIADAGAFQAGAEADAIQAFAHABAIQACAIAAAKIgfAFIgBgKIgCgKIgDgHQgDgDgDgBQgDgCgEAAQgHABgFAEQgFAGABAIQAAAKAEAGQAEAGAHAHIAZAYIAMAKQAFAFAEAHQAEAHADAJQADAJAAAKQAAAWgPAOQgOAOgXAAQg0AAgCg+g");
	this.shape.setTransform(324.6,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("AgUBkQgLgCgGgHQgGgFgEgJQgFgJgCgKQgBgKAAgNIAAhFQAAgNABgKQACgLAFgJQAEgIAGgGQAGgFALgDQAKgEALAAQAPAAALAEQALAFAGAHQAGAIADAKQADALAAAOIAAARIgkAAIAAgRQAAgPgCgFQgCgKgNgBIgCAAIgGABIgGADIgEAGIgCAGIAAAIIAAAKIAABUQAAASAEAIQAEAIAKAAIAHgBIAFgDIADgEIACgFIACgGIAAgHIAAgIIAAgSIAkAAIAAARQAAALgCAJQgBAJgEAIQgEAJgGAEQgGAGgJADQgKADgNAAQgLAAgKgEg");
	this.shape_1.setTransform(311.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgRBlIAAjJIAjAAIAADJg");
	this.shape_2.setTransform(301.2,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AAcBlIgwh3IAAB3IggAAIAAjJIAaAAIAwBxIAAhxIAeAAIAADJg");
	this.shape_3.setTransform(290.9,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAaBlIgIgvIgiAAIgIAvIgjAAIApjJIAlAAIApDJgAgMAeIAaAAIgOhSg");
	this.shape_4.setTransform(277.5,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AAUBlIAAhcIgnAAIAABcIgmAAIAAjJIAmAAIAABVIAnAAIAAhVIAlAAIAADJg");
	this.shape_5.setTransform(263.6,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AgUBkQgLgCgGgHQgGgFgFgJQgDgJgCgKQgCgKAAgNIAAhFQAAgNACgKQACgLADgJQAFgIAGgGQAGgFALgDQAKgEALAAQAQAAAKAEQALAFAGAHQAHAIADAKQACALAAAOIAAARIgkAAIAAgRQAAgPgBgFQgDgKgNgBIgCAAIgGABIgGADIgEAGIgBAGIgBAIIAAAKIAABUQgBASAFAIQAFAIAJAAIAHgBIAFgDIAEgEIACgFIABgGIAAgHIAAgIIAAgSIAkAAIAAARQAAALgBAJQgCAJgEAIQgEAJgGAEQgGAGgKADQgJADgNAAQgLAAgKgEg");
	this.shape_6.setTransform(249.6,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgqBlIAAjJIBUAAIAAAaIguAAIAAA6IAkAAIAAAYIgkAAIAABEIAuAAIAAAZg");
	this.shape_7.setTransform(237.8,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AAqBlIgCiKIgdCKIgUAAIgeiKIgCCKIgcAAIACjJIAnAAIAcCNIAeiNIAlAAIAEDJg");
	this.shape_8.setTransform(223.4,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(212.9,-19.9,119.6,37.8);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250();
	this.instance.setTransform(0.2,-44,0.752,0.752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-44,225.6,188);


(lib._if = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("AgOAUQAHgBAFgFQADgHAAgHIgQAAIAAghIAfAAIAAAgQAAAdgaAGg");
	this.shape.setTransform(462.2,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("Ag1AqIAhgHQABApAUAAQAJAAAEgGQAEgFAAgJQAAgIgEgHQgCgHgFgFIgJgLIgbgVQgLgLgHgLQgFgLAAgRQAAgYAOgNQAOgNAYAAQAJAAAJADQAJADAFAFQAGAEADAIQAEAHACAIQACAIABAKIggAFIgBgKIgCgKIgDgHQgCgDgEgBQgEgCgDAAQgHABgFAEQgEAGgBAIQAAAKAFAGQADAGAIAHIAZAYIALAKQAFAFAFAHQAEAHADAJQACAJAAAKQAAAWgOAOQgOAOgXAAQgzAAgEg+g");
	this.shape_1.setTransform(453.5,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgUBkQgLgCgGgHQgGgFgFgJQgDgJgCgKQgCgKAAgNIAAhFQAAgNACgKQACgLADgJQAFgIAGgGQAGgFALgDQAKgEALAAQAQAAAKAEQALAFAGAHQAHAIADAKQACALAAAOIAAARIgkAAIAAgRQAAgPgBgFQgDgKgNgBIgCAAIgGABIgGADIgEAGIgBAGIgBAIIAAAKIAABUQgBASAFAIQAFAIAJAAIAHgBIAFgDIAEgEIACgFIABgGIAAgHIAAgIIAAgSIAkAAIAAARQAAALgBAJQgCAJgEAIQgEAJgGAEQgGAGgKADQgJADgNAAQgLAAgKgEg");
	this.shape_2.setTransform(440.4,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AgRBlIAAjJIAjAAIAADJg");
	this.shape_3.setTransform(430.1,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAcBlIgwh3IAAB3IggAAIAAjJIAaAAIAwBxIAAhxIAfAAIAADJg");
	this.shape_4.setTransform(419.8,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AgsBXQgNgRAAghIAAhJQAAgRADgLQADgMAHgKQAGgIAMgFQALgEAPAAQAfAAAOARQANARAAAhIAABJQAAAQgDAMQgDAMgHAJQgHAJgLAEQgMAFgPAAQgeAAgOgRgAgJhJQgFACgCAFQgCADgBAGIgBAMIAABaIABAKIACAJQABAEACACQACADAEACQAEACAEAAQAFAAAEgCQAEgCACgDQACgCABgEIACgJIABgKIAAhaIgBgMQgBgGgCgDQgCgFgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_5.setTransform(405.8,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AAUBlIgXhdIgQAAIAABdIglAAIAAjJIAuAAQAPgBALADQAMADAJAGQAIAGAEALQAFAKAAAQQgBATgGAMQgFAMgNAEIAcBkgAgTgOIAJAAQAOAAAHgGQAIgIAAgRQAAgQgHgHQgGgHgOAAIgLAAg");
	this.shape_6.setTransform(392.1,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgRBlIAAiuIgiAAIAAgbIBnAAIAAAbIghAAIAACug");
	this.shape_7.setTransform(379.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AgUBkQgKgCgHgHQgGgFgEgJQgFgJgCgKQgBgKAAgNIAAhFQAAgNABgKQACgLAFgJQAEgIAGgGQAHgFAKgDQAKgEALAAQAPAAALAEQALAFAGAHQAGAIADAKQADALAAAOIAAARIgjAAIAAgRQgBgPgCgFQgDgKgMgBIgCAAIgGABIgGADIgEAGIgCAGIAAAIIgBAKIAABUQABASAEAIQAEAIAKAAIAHgBIAFgDIADgEIACgFIACgGIABgHIAAgIIAAgSIAjAAIAAARQAAALgCAJQgBAJgEAIQgEAJgGAEQgGAGgJADQgLADgMAAQgLAAgKgEg");
	this.shape_8.setTransform(367.4,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgpBlIAAjJIBSAAIAAAaIguAAIAAA6IAkAAIAAAYIgkAAIAABEIAvAAIAAAZg");
	this.shape_9.setTransform(355.7,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgpBlIAAjJIAlAAIAACwIAuAAIAAAZg");
	this.shape_10.setTransform(345.1,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9C993").s().p("AgqBlIAAjJIBUAAIAAAaIgvAAIAAA6IAlAAIAAAYIglAAIAABEIAwAAIAAAZg");
	this.shape_11.setTransform(334.4,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWBXIgXg7IgVA7IgcAAIAjhbIgihSIAeAAIAUA3IAUg3IAcAAIgiBWIAkBXg");
	this.shape_12.setTransform(318.6,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_13.setTransform(310.3,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkBXIgCh2IgZB2IgRAAIgZh3IgCB3IgYAAIACitIAhAAIAYB5IAZh5IAgAAIADCtg");
	this.shape_14.setTransform(300,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBWQgIgEgGgFQgFgEgEgIQgDgIgBgJQgCgJAAgMIAAhyIAfAAIAAB2IABAKIABAJQABAFACADIAFAEQAEACADABQAFgBADgCIAFgEQACgDABgFIACgJIAAgKIAAh2IAfAAIAAByQAAAMgCAJQgBAJgDAIQgEAIgFAEQgFAFgJAEQgJACgLAAQgKAAgJgCg");
	this.shape_15.setTransform(281.3,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBLQgMgPAAgcIAAg/QAAgOADgKQACgKAHgIQAFgIAKgDQAKgEAMAAQAaAAAMAPQAMAOAAAcIAAA/QAAANgDAKQgDALgFAHQgGAJgKADQgKAEgNAAQgaAAgLgOgAgIg/QgEACgCAEIgCAIIgBALIAABNIABAJIABAGQABAFADABIAEAEQAEACADAAQAEAAAEgCIAFgEIADgGIABgGIAAgJIAAhNIAAgLIgCgIQgCgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_16.setTransform(269.1,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBXIAAhCIgjhrIAdAAIAUBFIAVhFIAdAAIgjBrIAABCg");
	this.shape_17.setTransform(257.8,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiBXIAAitIBGAAIAAAWIgnAAIAAAzIAfAAIAAAUIgfAAIAABQg");
	this.shape_18.setTransform(243.3,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_19.setTransform(235.4,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.9,-16.7,241.4,37.9);


(lib.CTA = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape.setTransform(261.5,-51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_1.setTransform(252.6,-51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA+QgKgMAAgYIAAg0QAAgLACgJQACgIAFgHQAEgGAJgDQAIgDAKAAQAWAAAKAMQAKAMAAAXIAAA0QAAALgCAJQgDAJgFAGQgEAHgJADQgIADgLAAQgVAAgJgMgAgHg0QgDACgBADIgCAGIAAAJIAABAIAAAHIABAGIACAFQACACADABIAFABIAGgBQADgBABgCIADgFIACgGIAAgHIAAhAIgBgJIgCgGQgCgDgDgCQgCgCgFAAQgDAAgEACg");
	this.shape_2.setTransform(242.3,-51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBIIgBhiIgVBiIgOAAIgVhiIgCBiIgUAAIACiPIAcAAIATBkIAVhkIAbAAIACCPg");
	this.shape_3.setTransform(231.1,-51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBIIgihUIAABUIgXAAIAAiPIASAAIAiBQIAAhQIAXAAIAACPg");
	this.shape_4.setTransform(215.7,-51.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_5.setTransform(206,-51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBIIgGgiIgXAAIgGAiIgZAAIAeiPIAZAAIAeCPgAgIAVIARAAIgJg6g");
	this.shape_6.setTransform(196.1,-51.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape_7.setTransform(188,-51.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIAaAAIAAB9IAhAAIAAASg");
	this.shape_8.setTransform(180.4,-51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91D2E5").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAqICRIURAAIAAkhI0RAAg");
	this.shape_9.setTransform(220.8,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(220.8,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(153.8,-67.8,134,33.1);


(lib.and = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(308.6,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_1.setTransform(304,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_2.setTransform(299.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBXIAAiVIgdAAIAAgYIBXAAIAAAYIgcAAIAACVg");
	this.shape_3.setTransform(292.4,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBXIAAitIBIAAIAAAXIgnAAIAAAyIAeAAIAAAVIgeAAIAAA5IAnAAIAAAWg");
	this.shape_4.setTransform(283.6,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBKQgLgQAAgeIAAg3QAAgPACgKQADgLAFgJQAGgIAKgEQAKgEAMAAQAaAAALANQALAMAAAaIAAAJIgeAAIAAgJIAAgKIgCgHQgBgEgCgCIgFgDQgDgCgFAAIgEABIgFADIgDADIgCAFIgBAGIgBAGIAAAHIAABFQAAAQAEAHQAEAHAJAAQAGAAAEgCQADgCADgEIADgKIABgOIAAgOIgTAAIAAgTIAvAAIAABXIgUAAIgDgSQgIAUgTAAQgZAAgLgPg");
	this.shape_5.setTransform(272.5,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBWQgIgEgGgEQgFgGgEgHQgDgIgBgJQgCgJAAgMIAAhyIAfAAIAAB1IABALIABAJQABAFACACIAFAGQAEABADAAQAFAAADgBIAFgGQACgCABgFIACgJIAAgLIAAh1IAfAAIAAByQAAAMgCAJQgBAJgDAIQgEAHgFAGQgFAEgJAEQgJACgLAAQgKAAgJgCg");
	this.shape_6.setTransform(255.2,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBKQgMgOAAgdIAAg+QAAgOADgKQACgKAHgIQAFgHAKgEQAKgEAMAAQAaAAAMAPQAMAOAAAcIAAA+QAAAOgDAKQgDALgFAHQgGAJgKADQgKAEgNAAQgaAAgLgPgAgIg+QgEACgCADIgCAIIgBAKIAABOIABAIIABAHQABAFADACIAEADQAEACADgBQAEABAEgCIAFgDIADgHIACgHIAAgIIAAhOIgBgKIgCgIQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(243,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBXIAAhDIgjhqIAdAAIAUBGIAVhGIAdAAIgjBqIAABDg");
	this.shape_8.setTransform(231.7,-1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgRBlIAAiuIgiAAIAAgcIBnAAIAAAcIghAAIAACug");
	this.shape_9.setTransform(215.8,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgRBlIAAjKIAjAAIAADKg");
	this.shape_10.setTransform(207,-3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBXIAAitIAoAAQAOAAALAEQAKACAHAIQAGAGADAKQADAKAAAOIAAA9QAAAPgDALQgDAKgGAIQgHAHgKADQgKAEgNAAgAgPBAIAJAAIAHAAIAGgCIAEgEIADgFIABgHIAAgHIAAgKIAAg+IAAgKIgBgHQgBgEgBgCIgFgEIgGgCIgHgBIgJAAg");
	this.shape_11.setTransform(193.3,-1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZBXIgqhmIAABmIgbAAIAAitIAWAAIApBhIAAhhIAaAAIAACtg");
	this.shape_12.setTransform(181.3,-1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBXIgHgpIgcAAIgIApIgdAAIAjitIAgAAIAiCtgAgKAaIAVAAIgLhGg");
	this.shape_13.setTransform(169.8,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.4,-22.4,150.4,37.9);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA4IAAhgIgTAAIAAgPIA3AAIAAAPIgSAAIAABgg");
	this.shape.setTransform(26.9,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA3QgGgBgEgEQgEgDgCgFIgCgLIgBgOIAAhJIAUAAIAABMIAAAGIAAAGIACAFIAEADQACABACAAQACAAADgBIADgDIACgFIABgGIABgGIAAhMIAUAAIAABJIgBAOIgEALQgCAFgDADQgEAEgFABQgGACgHAAQgGAAgFgCg");
	this.shape_1.setTransform(20,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgGQABgHAEgFQAEgFAGgCQAHgDAHAAQARABAIAIQAHAKAAASIAAAoQAAAJgBAHQgCAGgEAFQgEAFgGADQgHADgIgBQgQAAgIgJgAgFgoIgDAEIgCAEIAAAIIAAAxIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgxIAAgIIgCgEQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDgBQgCABgDABg");
	this.shape_2.setTransform(12.1,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA4IAAhvIAcAAQAGAAAGABQAGACAEADQAFADACAGQACAGAAAIQAAAVgQACQAKACAFAFQAEAHABAMQAAARgJAIQgIAIgPAAgAgKAqIAHAAQAIAAADgFQAEgEAAgKQAAgKgEgFQgEgEgIAAIgGAAgAgKgJIAGAAQAHAAAEgEQADgEAAgJIgBgIQgBgDgDgBIgFgCIgHgBIgDAAg");
	this.shape_3.setTransform(4.5,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_4.setTransform(-3.2,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_5.setTransform(258.4,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALA4IgLgzIgKAAIAAAzIgVAAIAAhvIAaAAQAIAAAGABQAGACAFADQAFAEACAGQACAGAAAIQAAALgCAHQgEAGgHABIAPA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgDgEQgEgEgHAAIgGAAg");
	this.shape_6.setTransform(253.2,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_7.setTransform(245.4,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAuAAIAAAOIgZAAIAAAhIAUAAIAAANIgUAAIAAAlIAZAAIAAAOg");
	this.shape_8.setTransform(239.1,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA4IAAgrIgXhEIATAAIAMAtIANgtIATAAIgXBEIAAArg");
	this.shape_9.setTransform(232.4,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_10.setTransform(221.9,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-5.5,270.8,23);


(lib._51000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAJIAHgCQAAAJADAAIADgBIAAgDIAAgEIgCgCIgBgCIgFgEIgEgEIgBgGQAAgFADgEQADgCAEAAIADAAIAEACIACACIABAEIAAADIgHACIAAgCIAAgCIgBgCIgBgBIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIgBADIABADIABAEIAFAEIADABIABADIACADIAAAFQAAAEgDADQgCAEgGAAQgJAAgBgOg");
	this.shape.setTransform(247.1,-25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAWIgEgCIgCgEIgCgDIAAgGIAAgOIAAgEIACgFIACgDIAEgCIADAAIAFABQABAAABAAQAAAAABAAQAAABABAAQAAABABAAIACAEIAAAFIAAAFIgIAAIAAgFIAAgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgBAAIAAABIgBAAIgBACIgBABIAAACIAAACIAAARIABAGQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAgBIABgBIAAgBIAAgCIAAgCIAAgEIAIAAIAAAEIAAAFIgBADIgCADIgEACIgFABIgDgBg");
	this.shape_1.setTransform(244,-25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAWIAAgrIAGAAIAAArg");
	this.shape_2.setTransform(241.5,-25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAWIAAglIgIAAIAAgGIAVAAIAAAGIgHAAIAAAlg");
	this.shape_3.setTransform(239.3,-25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAJIAHgCQAAAJADAAIADgBIAAgDIAAgEIgCgCIgBgCIgFgEIgEgEIgBgGQAAgFADgEQADgCAEAAIADAAIAEACIACACIABAEIAAADIgHACIAAgCIAAgCIgBgCIgBgBIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIgCADIACADIABAEIAFAEIADABIABADIACADIAAAFQAAAEgCADQgDAEgGAAQgJAAgBgOg");
	this.shape_4.setTransform(236.6,-25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAWIAAgrIAGAAIAAArg");
	this.shape_5.setTransform(234.3,-25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAWIAAglIgIAAIAAgGIAVAAIAAAGIgHAAIAAAlg");
	this.shape_6.setTransform(232.1,-25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFAWIgBgKIgGAAIgCAKIgIAAIAJgrIAHAAIAJArgAgBAGIAEAAIgDgQg");
	this.shape_7.setTransform(229.3,-25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAWIAAglIgIAAIAAgGIAVAAIAAAGIgHAAIAAAlg");
	this.shape_8.setTransform(226.4,-25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAJIAIgCQAAAJADAAIADgBIAAgDIAAgEIgBgCIgCgCIgFgEIgEgEIgBgGQAAgFADgEQADgCAEAAIADAAIAEACIACACIABAEIABADIgIACIAAgCIAAgCIAAgCIgCgBIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgBADIABADIACAEIAFAEIACABIADADIABADIABAFQAAAEgDADQgDAEgGAAQgKAAgBgOg");
	this.shape_9.setTransform(223.7,-25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEAWIgEgVIgDAAIAAAVIgIAAIAAgrIAKAAIAEABIAFABIACAEIABAGIgBAHQgBACgDAAIAGAWgAgDgCIACAAQABAAACgBQACgCAAgEQAAgDgCgCQgBgCgCAAIgCAAg");
	this.shape_10.setTransform(219.1,-25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIATQgEgEAAgIIAAgOIABgGQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIADgCIAFgBQAHgBADAEQACAEAAAHIAAAOIAAAHIgCAEIgFAEIgFABQgGgBgCgDgAgBgPIgBACIgBACIAAACIAAASIAAADIAAACIABABIABABIABAAIACAAIABgBIABgBIAAgCIAAgDIAAgSIAAgCIgBgCIgBgCIgCgBIgBABg");
	this.shape_11.setTransform(215.7,-25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIALAAIADABIAEABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFQAAAJgHABQAEAAACABQACADAAAFQAAAGgDADQgDAEgGAAgAgDAQIADAAQACAAABgBQABgCAAgEQAAgEgBgCQgCgCgCAAIgCAAgAgDgCIACAAQACgBABgBQACgCAAgEIgBgCIgBgDIgCAAIgCgBIgBAAg");
	this.shape_12.setTransform(212.4,-25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFAWIgCgKIgGAAIgBAKIgIAAIAJgrIAGAAIAKArgAgBAGIADAAIgCgQg");
	this.shape_13.setTransform(209.2,-25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAWIAAgrIAIAAIAAAlIAJAAIAAAGg");
	this.shape_14.setTransform(206.4,-25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAWIAAgrIARAAIAAAFIgJAAIAAAOIAHAAIAAADIgHAAIAAAVg");
	this.shape_15.setTransform(202.3,-25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIATQgDgEgBgIIAAgOIACgGQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBIADgCIAFgBQAGgBAEAEQACAEAAAHIAAAOIAAAHIgCAEIgEAEIgGABQgGgBgCgDgAgBgPIgBACIgBACIAAACIAAASIAAADIAAACIABABIACABIAAAAIABAAIACgBIABgBIAAgCIAAgDIAAgSIAAgCIgBgCIgBgCIgCgBIgBABg");
	this.shape_16.setTransform(199.3,-25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAWIgDgCIgDgEIgBgEIAAgFIAAgcIAIAAIAAAcIAAADIAAACIABACIABACIABAAIACAAIABgCIABgCIAAgCIAAgDIAAgcIAIAAIAAAcIAAAFIgBAEIgDAEIgDACIgFAAIgEAAg");
	this.shape_17.setTransform(194.4,-25.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFAWIgCgKIgGAAIgBAKIgIAAIAJgrIAGAAIAKArgAgBAGIADAAIgCgQg");
	this.shape_18.setTransform(191.2,-25.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAWIAAgrIAQAAIAAAGIgIAAIAAANIAGAAIAAADIgGAAIAAAPIAJAAIAAAGg");
	this.shape_19.setTransform(188.4,-25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAEAWIgEgVIgDAAIAAAVIgIAAIAAgrIAKAAIAEABIAFABIACAEIABAGIgBAHQgBACgDAAIAGAWgAgDgCIACAAQABAAACgBQACgCAAgEQAAgDgCgCQgBgCgCAAIgCAAg");
	this.shape_20.setTransform(185.4,-25.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAWIgDgCIgDgEIgBgEIAAgFIAAgcIAIAAIAAAcIAAADIAAACIABACIABACIABAAIACAAIABgCIABgCIAAgCIAAgDIAAgcIAIAAIAAAcIAAAFIgBAEIgDAEIgDACIgFAAIgEAAg");
	this.shape_21.setTransform(182.1,-25.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIALAAIADABIAEABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFQAAAJgHABQAEAAACABQACADAAAFQAAAGgDADQgDAEgGAAgAgDAQIADAAQACAAABgBQABgCAAgEQAAgEgBgCQgCgCgCAAIgCAAgAgDgCIACAAQACgBABgBQACgCAAgEIgBgCIgBgDIgCAAIgCgBIgBAAg");
	this.shape_22.setTransform(178.8,-25.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_23.setTransform(174.8,-23.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAJIAIgCQAAAJADAAIADgBIABgDIgBgEIgBgCIgCgCIgFgEIgEgEIgBgGQAAgFADgEQADgCAEAAIAEAAIADACIACACIABAEIABADIgHACIAAgCIgBgCIAAgCIgCgBIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIAAADIAAADIACAEIAFAEIACABIACADIACADIABAFQAAAEgEADQgDAEgFAAQgKAAgBgOg");
	this.shape_24.setTransform(172.7,-25.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_25.setTransform(170.5,-23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAWIgDgCIgDgEIgBgEIAAgFIAAgcIAIAAIAAAcIAAADIAAACIABACIABACIABAAIACAAIABgCIABgCIAAgCIAAgDIAAgcIAIAAIAAAcIAAAFIgBAEIgDAEIgDACIgFAAIgEAAg");
	this.shape_26.setTransform(168.1,-25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAMIAAgHIAFAAIAAAHgAgCgEIAAgHIAFAAIAAAHg");
	this.shape_27.setTransform(164.2,-24.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAWIAAgrIARAAIAAAGIgJAAIAAANIAGAAIAAADIgGAAIAAAPIAJAAIAAAGg");
	this.shape_28.setTransform(162.2,-25.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAWIgEgCIgCgEIgCgDIAAgGIAAgOIAAgEIACgFIACgDIAEgCIADAAIAFABQABAAABAAQAAAAABAAQAAABABAAQAAABABAAIABAEIABAFIAAAFIgIAAIAAgFIAAgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgBAAIAAABIgBAAIgBACIgBABIAAACIAAACIAAARIABAGQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIAAAAIABgBIABgBIAAgBIAAgCIAAgCIAAgEIAIAAIAAAEIAAAFIgCADIgBADIgEACIgFABIgDgBg");
	this.shape_29.setTransform(159.1,-25.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAWIgEgVIgDAAIAAAVIgIAAIAAgrIAKAAIAEABIAFABIACAEIABAGIgBAHQgBACgDAAIAGAWgAgDgCIACAAQABAAACgBQACgCAAgEQAAgDgCgCQgBgCgCAAIgCAAg");
	this.shape_30.setTransform(156,-25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAWIgDgCIgDgEIgBgEIAAgFIAAgcIAIAAIAAAcIAAADIAAACIABACIABACIABAAIACAAIABgCIABgCIAAgCIAAgDIAAgcIAIAAIAAAcIAAAFIgBAEIgDAEIgDACIgFAAIgEAAg");
	this.shape_31.setTransform(152.6,-25.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIATQgEgEAAgIIAAgOIABgGQABgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBIADgCIAFgBQAGgBAEAEQACAEAAAHIAAAOIAAAHIgCAEIgFAEIgFABQgGgBgCgDgAgBgPIgBACIgBACIAAACIAAASIAAADIAAACIABABIACABIAAAAIABAAIACgBIABgBIAAgCIAAgDIAAgSIAAgCIgBgCIgBgCIgCgBIgBABg");
	this.shape_32.setTransform(149.2,-25.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAJIAIgCQAAAJADAAIADgBIABgDIgBgEIgBgCIgCgCIgFgEIgEgEIgBgGQAAgFADgEQADgCAEAAIAEAAIADACIACACIABAEIABADIgHACIAAgCIgBgCIAAgCIgCgBIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIgBADIABADIABAEIAFAEIACABIACADIACADIABAFQAAAEgEADQgDAEgFAAQgKAAgBgOg");
	this.shape_33.setTransform(146.1,-25.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAADIgCAGIgEgCIAEgGIgGgBIABgEIAGADIAAgHIADAAIAAAHIAFgDIACAEIgGABIAEAGIgEACg");
	this.shape_34.setTransform(143.4,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFA54A").s().p("AAAAEIAAAAIgGAOIgIgGIAMgLIgBAAIgPgBIADgIIAOAHIAAgBIgDgPIAJAAIgDAPIAAABIAOgHIADAIIgQABIAAAAIALALIgIAGg");
	this.shape_35.setTransform(254.3,-59.3,1.236,1.236);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#90D2E5").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEIgNgKIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_36.setTransform(194.5,-49.6,1.236,1.236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AGLgzQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAQAHAAAFADQAFACADAEQADAEACAHgAGLheQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHQgHgJgLgEgAEjg+QgEgMgHgHQgIgJgLgEQgLgDgOAAQgNAAgLADQgLAEgIAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAIAHALAEQALAFANAAQAOAAALgFQALgEAIgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLgAEAg+QAEAEABAHQACAGAAALIAAAxQAAALgCAHQgBAGgEAFQgDAEgFACQgFABgHAAQgGAAgFgBQgFgCgDgEQgEgFgBgGQgCgHAAgLIAAgxQAAgLACgGQABgHAEgEQADgEAFgCQAFgDAGAAQAHAAAFADQAFACADAEgACShRQgHgJgLgEQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHgABnhHQAHAAAFADQAFACADAEQADAEACAHQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAgAgMAqIAAAiIAMAAIgKAkIAPAAIAPgkIAAgigAhrhUQgMAIgNADIAAASIAbAAIAACDIAeAAIAAitIgTAAQgJALgEACgAi0hgIhkAAIAABcIAaAAQAEgHAHgDQAGgEAIAAQAHAAAFADQAEABAEAFQADAEABAFQABAFAAAJQAAAJgBAHQgBAHgDAFQgDAEgGADQgFACgHAAQgGAAgFgBQgFgCgDgDQgDgDgCgFQgBgEAAgGIggAAQAAAKADAJQADAJAGAHQAHAIALAEIAMAEIAPABQAKAAARgFQALgEAHgJQAGgIAEgMQADgLAAgQQAAgNgCgJQgDgLgGgHQgGgJgJgDQgKgEgOAAQgJAAgIACQgHADgHAFIAAgkIBJAAgAk/gGQgGgGgKgEQgIgEgLgFIAAgsQAIABAHAFQAGAEAGAHIASgSQgJgKgKgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgJAEQgJADgGAGQgHAGgDAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAIAEAKABIAAAxQgJgBgIgHQgHgGgHgIIgUATQAEAFAGAGQAHAGAHAEQAHAEAHADQAHACAGAAIAAAcIATAAIAAgcQAKAAAJgDQAKgEAHgGQAHgHAEgIQAEgJAAgLQAAgLgFgKQgDgHgIgGgAmDhBQAFgFAJgBIAAApQgJgCgFgGQgHgGAAgHQAAgJAHgFgAlPAUQACAEAAAFQAAAJgGAGQgGAGgJAAIAAgtQALAFAEAEQADADABADg");
	this.shape_37.setTransform(194.4,-49.6,1.236,1.236);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgCQgHgDgHgEQgHgEgGgGIgLgLIAVgTQAGAIAHAGQAJAGAIACIAAgxQgJgBgJgEQgJgFgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgHQAGgFAJgEQAIgDAKAAIAAgQIATAAIAAAQQAKACAQAHQALAHAJAJIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAAKgEAKQgEAIgHAGQgHAHgJAEQgJADgLAAIAAAcgAlkAxQAKAAAGgFQAGgGAAgJQAAgFgCgEQgCgEgDgDQgEgDgLgFgAmFhBQgGAFAAAJQAAAHAGAGQAGAFAIADIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgAFlhEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAHgHALgEQALgEAOgBQAOABALAEQALAEAHAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgHAIgLAEQgLAFgOgBQgOABgLgFgADfhEQgFACgDADQgDAFgCAHQgBAGAAALIAAAxQAAAKABAHQACAHADAEQADAFAFABQAFACAHAAQAHAAAFgCQAFgBADgFQADgEACgHQABgHAAgKIAAgxQAAgLgBgGQgCgHgDgFQgDgDgFgCQgFgCgHgBQgHABgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgABahEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgAj2BNIgNgDQgKgEgHgIQgGgHgDgJQgDgKAAgKIAfAAQAAAHACAEQABAEAEADQADAEAFABQAEACAGAAQAIAAAFgCQAFgDADgFQADgFACgGIABgRQAAgIgCgFQgBgFgDgFQgDgDgFgCQgFgDgGAAQgIAAgHAEQgGADgFAHIgaAAIAAhbIBkAAIAAAbIhJAAIAAAkQAIgFAHgCQAIgDAJAAQAOAAAJADQAKAFAGAHQAFAIADALQADAJAAANQAAAQgEALQgDAMgHAIQgHAIgLAFQgQAFgKgBgAhrBMIAAiDIgaAAIAAgTQAMgCANgHQAEgDAIgMIATAAIAACug");
	this.shape_38.setTransform(194.6,-49.6,1.236,1.236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#AFA54A").ss(2,1,1).p("AGEg/QAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCQAFgCAGAAQAHAAAFACQAFACADAEgAGchSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgAEWhSQgHgIgLgEQgLgEgOAAQgOAAgLAEQgLAEgHAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAHAHALAEQALAEAOAAQAOAAALgEQALgEAHgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgADrhHQAHAAAFACQAFACADAEQADAEACAHQABAHAAALIAAAxQAAAKgBAIQgCAGgDAEQgDAFgFACQgFABgHAAQgHAAgFgBQgFgCgDgFQgDgEgCgGQgBgIAAgKIAAgxQAAgLABgHQACgHADgEQADgEAFgCQAFgCAHAAgAB+heQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIQgIgIgLgEgABahFQAFgCAGAAQAHAAAFACQAFACADAEQAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCgAgNAqIAAAiIANAAIgLAkIAPAAIAPgkIAAgigAhshUQgNAIgMACIAAATIAaAAIAACDIAeAAIAAiuIgTAAQgIALgEADgAi2hgIhkAAIAABcIAaAAQAFgHAGgDQAHgEAIAAQAGAAAFADQAFABADAFQADAEABAFQACAFAAAJQAAAJgBAHQgCAGgDAFQgDAFgFACQgFADgIAAQgGAAgEgBQgFgCgDgDQgEgEgBgEQgCgEAAgHIgfAAQAAAKADAKQADAJAGAHQAHAIAKAEIANAEIAPAAQAKAAAQgEQALgEAHgJQAHgIADgMQAEgLAAgQQAAgOgDgIQgDgLgFgIQgGgIgKgEQgJgEgOAAQgJAAgIADQgHADgIAFIAAgkIBJAAgAk2hGQgJgKgLgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgIADQgJAEgGAFQgHAHgEAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAJAEAJABIAAAxQgIgBgJgHQgHgGgGgIIgVATQAFAFAGAGQAGAGAHAEQAHAEAHACQAHADAGAAIAAAbIATAAIAAgbQALAAAJgDQAJgEAHgGQAHgHAEgIQAEgKAAgKQAAgMgEgJQgEgHgHgGQgHgGgKgFQgHgDgMgFIAAgsQAIABAHAFQAGAEAGAHgAmLg0QAAgIAGgFQAGgFAIgBIAAApQgIgDgGgFQgGgGAAgIgAlQAUQACAEAAAFQAAAJgGAGQgGAGgKAAIAAgtQALAFAEAEQADACACAEg");
	this.shape_39.setTransform(195.7,-48.3,1.236,1.236);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AFA54A").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEQgHgFgGgFIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_40.setTransform(195.7,-48.3,1.236,1.236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,-64.4,116.7,45);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.about();
	this.instance.setTransform(-28.1,-133.4,1,1,0,0,0,122.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,-148.4,270.8,23);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("EA4zAG9MhxlAAAIAAt5MBxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(259));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207).to({y:100.9},0).to({y:79.7,alpha:1},11,cjs.Ease.get(1)).wait(41));

	// Layer 3
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(635,101,1,1,0,0,0,93,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259));

	// 51000
	this.instance_2 = new lib._51000();
	this.instance_2.setTransform(149.3,130.2,1.464,1.464,0,0,0,46.5,11.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({alpha:1},18,cjs.Ease.get(1)).wait(67).to({alpha:0},17,cjs.Ease.get(1)).wait(44));

	// about
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(397.7,177.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({y:182.6},0).to({y:177.8,alpha:1},18,cjs.Ease.get(1)).wait(75).to({startPosition:0},0).to({alpha:0},17,cjs.Ease.get(1)).wait(44));

	// and
	this.instance_4 = new lib.and();
	this.instance_4.setTransform(150.1,85.7,1,1,0,0,0,19.4,12);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(50).to({alpha:0},18,cjs.Ease.get(1)).wait(146));

	// mechanics
	this.instance_5 = new lib.mechanics();
	this.instance_5.setTransform(150,59.5,1,1,0,0,0,62.1,14);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(50).to({alpha:0},18,cjs.Ease.get(1)).wait(146));

	// if you mix
	this.instance_6 = new lib._if();
	this.instance_6.setTransform(71.7,26.9,1,1,0,0,0,48.3,12);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(50).to({alpha:0},18,cjs.Ease.get(1)).wait(146));

	// Layer 9
	this.instance_7 = new lib.newFrame();
	this.instance_7.setTransform(149.7,167.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(201).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(40));

	// images
	this.instance_8 = new lib.image();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({alpha:1},19,cjs.Ease.get(1)).wait(234));

	// Layer 12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(259));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345.7,-0.4,746.9,347.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;