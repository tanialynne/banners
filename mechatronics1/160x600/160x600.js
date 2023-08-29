(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
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
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4F67").s().p("AifAGIAAgLIE/AAIAAALg");
	this.shape.setTransform(-461.4,461.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("ApACJQAKgHARgQQAQgRgKAHIgCABQgOAHgrAHQgMgMgLgPQAfgIAfgTQARgKAJgIQgnAMgfABQgWABgPgEQgJgbgBgcQAbAoBBgdQAhgNAbgVQBBgPAtAIQAWAEAJAHQgHhDhGAZQgVAIgZAQQgWAPAEgBQhBAPgqACQgeACgPgFQACgdALgaQAcAjA4gXQAfgMAdgYQBLgPAuAHQAeAEAMAMQAUAmAAAoQAABEgyAxQgyAxhGAAQg3AAglgdgAmxBpQgJgygxARQgOAFgQALQgPALAEgBQAvgJAeAHQAQAEAGAFIAAAAgAnSAGQgXAJgaARQgOAIgIAHQBSgRArAGQAXADAGAGQgGgtgnAAQgQAAgWAGgADxCZIAAgHIADAAQAFAAABgDIABgEIgKgiIAJAAIAFAWIAAAAIAGgWIAJAAIgLAjQgDAIgDADQgDACgFAAgABJCRQABgHAGAAIgDgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABgEAFgCQgFgEAAgFQAAgFAEgEQADgEAHAAQAFAAAEADQACgDAGAAIAAAGIgGABQACACAAAEQAAAFgDADQgEAEgGAAQgGAAgBACQAAACAMABQAMABAAAIQAAAEgFADQgDADgJAAQgPAAgBgIgABRCQQAAAEAKAAQADAAADgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgEgKAAQgHAAAAAEgABUBwQAAABAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAAGAGAAQAGAAAAgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAjCXIADgLIgEAAIAAgJIAKAAIAAAJIgFALgAGnCIQgFgFABgIQgBgJAFgFQAEgFAHAAQAHAAAEAFQAEAFAAAHIAAADIgVAAQAAAKAGAAQAFAAADgEIAHAEQgFAHgKAAQgHAAgEgFgAGsB2IANAAQgBgIgGAAQgHAAABAIgAFrCIQgEgFAAgIQAAgJAEgFQAFgFAHAAQAHAAAEAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAFAAADgEIAGAEQgFAHgJAAQgHAAgFgFgAFwB2IANAAQAAgIgGAAQgHAAAAAIgACqCKQgDgDAAgDQAAgMAUgCIAAgDQAAgFgFAAQgFAAgDAFIgFgEQABgDAEgCQAEgCAEAAQAHABADADQAEADAAAHIAAARIABAFIgJAAIAAgDQgGAEgFAAQgFAAgCgDgACzB+QgDABAAADQAAAFADAAQAEAAAEgEIAAgIIgIADgAByCIQgFgFAAgIQAAgJAFgFQAEgFAHAAQAIAAADAFQAFAFAAAJQAAAIgFAFQgDAFgIAAQgHAAgEgFgAB2B7QABALAGAAQAHAAAAgLQAAgMgHAAQgGAAgBAMgAAACIQgDgFgBgIQABgJADgFQADgFAHAAQAHAAAEAFQADAFABAHIAAADIgWAAQABAKAGAAQAFAAADgEIAHAEQgGAHgKAAQgGAAgDgFgAADB2IAOAAQgBgIgGAAQgHAAAAAIgAg7CIQgEgFAAgIQAAgJAEgFQAEgFAIAAQAGAAAFAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAEAAAEgEIAGAEQgFAHgJAAQgIAAgEgFgAg2B2IANAAQAAgIgGAAQgHAAAAAIgAjWCIQgDgFAAgIQAAgJADgFQAFgFAHAAQAHAAAFAFQADAFAAAJQAAAIgDAFQgFAFgHAAQgHAAgFgFgAjRB7QAAALAHAAQAHAAAAgLQAAgMgHAAQgHAAAAAMgAHKCMIAAgJIAJAAIAAAJgAGNCMIAAgjIAIAAIAAAGQADgGAGgBIAAAJIgBAAQgCAAgDADIgDADIAAAVgAFXCMIAAgXQABgGgFAAQgFAAgCAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAEAAQALAAAAAMIAAAYgAEsCMIgFgWIgGAWIgIAAIgJgjIAIAAIAGAWIAEgWIAIAAIAGAWIAEgWIAIAAIgJAjgADiCMIAAgXQAAgGgEAAQgFAAgDAEIAAAZIgIAAIAAgjIAHAAIAAAEQAIgFADAAQAKAAAAAMIAAAYgAgZCMIAAgjIAIAAIAAAGQADgGAHgBIAAAJIgBAAQgDAAgDADIgDADIAAAVgAhPCMIAAgXQAAgGgEAAQgEAAgDAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAFAAQAKAAAAAMIAAAYgAiMCMIAAgYQAAgFgEAAQgDAAgFAEIAAAZIgIAAIAAgYQAAgFgDAAQgEAAgEAEIAAAZIgIAAIAAgjIAIAAIAAAEQAEgFAGAAQAHAAACAFQAFgFAHAAQAIAAAAALIAAAZgAjvCMIAAgjIAHAAIAAAGQAEgGAGgBIAAAJIgBAAQgDAAgDADIgCADIAAAVgAkVCMIAAgxIAgAAIAAAIIgXAAIAAAMIARAAIAAAIIgRAAIAAAVgAIIBtIAAgVIgBAAIgGAVIgEAAIgGgVIAAAVIgEAAIAAgaIAHAAIAFASIABAAIAEgSIAHAAIAAAagAHjBtIAAgWIgHAAIAAgEIASAAIAAAEIgHAAIAAAWgAIuAuQgFgGAAgKIAAgqQAAgJAFgGQAGgHALAAQAKAAAGAHQAGAHgBAKIAAAFIgNAAQAAgJgCgEQgDgDgEAAQgGAAgBAJIAAAqQAAAJAIAAQAHAAABgMIAAgIIgKAAIAAgMIAYAAIAAArIgHAAIgDgGQgHAIgHAAQgJAAgGgGgAFbAtQgGgGAAgJIAAgqQAAgJAGgGQAGgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgGgHgAFkgMIAAApQAAAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAAAAJgAEeAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAFAHQAGAGAAALIAAAGIgPAAIAAgHQAAgKgGAAQgJAAABAJIAAApQgBAKAJAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgGAGQgFAHgKAAQgMAAgFgHgAAAAuQgGgGgBgLIAAg9IANAAIAAA+QAAAJAIAAQAIAAgBgJIAAg+IAPAAIAAA9QABALgHAGQgFAGgLAAQgKAAgEgGgAjTAtQgFgGAAgJIAAgqQAAgJAFgGQAHgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgHgHgAjKgMIAAApQABAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAgBAJgAkPAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAGAHQAFAHAAAKIAAAGIgPAAIAAgHQAAgKgGAAQgIAAAAAJIAAApQAAAKAIAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgFAGQgGAHgKAAQgMAAgFgHgAJmAyIAAhSIAnAAIAAAMIgYAAIAAAUIASAAIAAANIgSAAIAAAZIAaAAIAAAMgAHyAyIAAhSIAoAAIAAAMIgZAAIAAAUIATAAIAAANIgTAAIAAAZIAaAAIAAAMgAHCAyIAAhSIAPAAIAABGIAWAAIAAAMgAGSAyIAAhSIAOAAIAABGIAXAAIAAAMgADRAyIAAgjIgSgvIAPAAIAKAgIAAAAIAKggIAPAAIgRAvIAAAjgACeAyIAAhGIgPAAIAAgMIArAAIAAAMIgOAAIAABGgAB0AyIAAhSIAPAAIAABSgABUAyIgSgzIAAAzIgNAAIAAhSIANAAIASAuIAAAAIAAguIAOAAIAABSgAgjAyIAAhAIgNBAIgHAAIgOhAIAABAIgMAAIAAhSIATAAIAKAvIAAAAIAKgvIAUAAIAABSgAhtAyIAAhAIgOBAIgHAAIgNhAIAAAAIAABAIgMAAIAAhSIATAAIAKAvIAKgvIAUAAIAABSgADAg5IgLgjIgHAAIAAAjIgOAAIAAhVIAUAAQAMAAAGAGQAHAGAAANQgBARgJAFIAMAmgACuhoIAFAAQAGAAADgDQACgDAAgHQAAgHgCgDQgDgDgGAAIgFAAgABpg5IAAhVIAnAAIAAANIgZAAIAAAWIATAAIAAAMIgTAAIAAAZIAaAAIAAANgABBg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAAgg5IgDgTIgPAAIgEATIgLAAIANhVIASAAIAQBVgAAQhZIALAAIgGgkIAAAAgAgjg5IgKg4IgKA4IgNAAIgPhVIANAAIAJA2IAAAAIAKg2IALAAIALA2IAAAAIAIg2IANAAIgPBVgAiDg5IAAhVIAnAAIAAANIgYAAIAAAWIASAAIAAAMIgSAAIAAAZIAaAAIAAANgAjAg5IAAhVIAWAAQAXAAgBAaIAAAhQABAagXAAgAiyhFIAGAAQAFAAADgDQACgCAAgHIAAglQAAgHgCgCQgDgDgFAAIgGAAgAjhg5IAAhVIAOAAIAABVgAkLg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAp9hIQAWgqAogZQApgaAxAAQAzAAAqAcQgoANgiASQgWAMgJAIQhHAQgqAAQgPAAgMgCg");
	this.shape_1.setTransform(-466.6,434.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4F67").s().p("AgcAXIASgEQAAAXAKgBQAFAAACgCQACgDAAgFQAAgFgBgDQgCgEgCgDIgFgHIgPgLQgGgFgDgGQgDgGAAgKQgBgNAJgHQAHgHANAAQAFgBAFACQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgHIgBgFIgCgEIgDgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACAEIAHAHIANAMIAGAFIAFAIQADADABAGQACAEAAAGQgBAMgHAIQgIAHgNABQgcAAgBgjg");
	this.shape_2.setTransform(-394.4,484.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4F67").s().p("AgKA4QgGgDgEgDQgEgDgCgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQACgFAEgDQAEgDAGgCQAFgCAFABQAJAAAGABQAGADAEAEQADAFABAFQACAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgBgGgIAAIgBAAIgCAAIgEACIgBADIgCAEIAAAEIAAAGIAAAtQAAALACAEQADAEAEAAIAFgBIACAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgFACgIAAQgFAAgFgCg");
	this.shape_3.setTransform(-401.7,484.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4F67").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_4.setTransform(-407.5,484);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4F67").s().p("AAQA4IgahBIAABBIgSAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_5.setTransform(-413.2,484);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4F67").s().p("AgYAwQgHgJAAgTIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgDAHABQARgBAIAKQAHAJAAASIAAAoQAAAJgBAGQgCAHgEAGQgEAFgGACQgHACgIABQgQAAgIgKgAgFgoIgDADIgCAGIAAAGIAAAyIAAAGIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIAAgGIAAgyIAAgGIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDAAQgCAAgDABg");
	this.shape_6.setTransform(-420.9,484.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4F67").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQADAGAAAIQAAALgEAHQgDAGgHABIAQA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgEgEQgDgEgGAAIgHAAg");
	this.shape_7.setTransform(-428.5,484);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_8.setTransform(-435.5,484);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_9.setTransform(-442.2,484);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4F67").s().p("AALA4IAAgzIgVAAIAAAzIgVAAIAAhvIAVAAIAAAvIAVAAIAAgvIAVAAIAABvg");
	this.shape_10.setTransform(-449.9,484);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4F67").s().p("AgLA4QgFgDgEgDQgDgDgDgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAFQABAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGAAIgBAAIgDAAIgDACIgCADIgCAEIAAAEIAAAGIAAAtQAAALADAEQACAEAFAAIADgBIADAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgGACgGAAQgGAAgGgCg");
	this.shape_11.setTransform(-457.7,484.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_12.setTransform(-464.2,484);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4F67").s().p("AAXA4IgBhMIgQBMIgKAAIgRhMIgBBMIgQAAIAChvIAVAAIAPBOIAQhOIAVAAIACBvg");
	this.shape_13.setTransform(-472.2,484);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4F67").s().p("AgVA4IAehvIANAAIgeBvg");
	this.shape_14.setTransform(-479.8,484);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4F67").s().p("AgMA3QgFgCgEgDQgDgDgDgFIgDgLIAAgNIAAhKIATAAIAABLIABAIIAAAFIACAFIAEADQADACABAAQACAAADgCIADgDIACgFIABgFIABgIIAAhLIATAAIAABKIAAANIgDALQgDAFgDADQgEADgFACQgGACgHAAQgGAAgGgCg");
	this.shape_15.setTransform(-486.5,484.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4F67").s().p("AgeA4IAAhvIAbAAQAIAAAHACQAHACAEAEQAEAFACAGQACAHAAAJIAAAnQAAAKgCAHQgCAGgEAFQgEAFgHACQgHACgIAAgAgJAqIAGAAIADgBIAEgBIADgDIABgDIABgEIAAgFIABgGIAAgnIgBgHIAAgFIgCgEIgCgCIgFgCIgDAAIgGAAg");
	this.shape_16.setTransform(-494.2,484);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAZAAIAAAOg");
	this.shape_17.setTransform(-500.9,484);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4F67").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_18.setTransform(-505.6,488.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4F67").s().p("AgLA4QgFgDgEgDQgEgDgCgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQACgFAEgDQAEgDAFgCQAGgCAFABQAJAAAGABQAGADADAEQAEAFACAFQABAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGAAIgCAAIgCAAIgDACIgCADIgCAEIAAAEIAAAGIAAAtQAAALACAEQADAEAEAAIAFgBIACAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgFACgIAAQgFAAgGgCg");
	this.shape_19.setTransform(-510.9,484.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4F67").s().p("AgLA4QgFgDgEgDQgDgDgDgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAFQABAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGAAIgBAAIgDAAIgDACIgCADIgCAEIAAAEIAAAGIAAAtQAAALADAEQACAEAFAAIADgBIADAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgGACgGAAQgGAAgGgCg");
	this.shape_20.setTransform(-518.4,484.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_21.setTransform(-525.2,484);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#91D2E5").s().p("As3IKIAAwTIZuAAIAAQTg");
	this.shape_22.setTransform(-461.3,455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.7,402.7,164.8,104.5);


(lib.newFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(-7.2,117.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAXIASgEQABAWALABQAEgBACgDQADgCAAgFQAAgFgCgEQgBgEgDgCIgFgGIgOgLQgHgGgDgGQgDgHgBgIQABgOAHgHQAJgIAMAAQAFAAAFACQAFABADADQADADACAEIADAJIACAJIgSADIAAgFIgBgFIgDgFIgDgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgCADQgDACAAAFQAAAGACADIAHAIIAMANIAHAEIAFAHQADAEABAFQABAFABAFQAAANgJAHQgHAIgNAAQgcABgCgjg");
	this.shape_1.setTransform(-12.1,112.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAXIASgEQABAWAJABQAFgBADgDQABgCAAgFQAAgFgBgEQgCgEgCgCIgEgGIgQgLQgGgGgDgGQgDgHAAgIQAAgOAHgHQAIgIANAAQAFAAAFACQAFABADADQADADACAEIADAJIABAJIgRADIgBgFIAAgFIgCgFIgEgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCACAAAFQAAAGACADIAHAIIAMANIAHAEIAGAHQACAEABAFQACAFgBAFQABANgJAHQgHAIgNAAQgcABgBgjg");
	this.shape_2.setTransform(-19,112.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAZAAIAAAOg");
	this.shape_3.setTransform(-25.2,112.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAUAAIAABhIAZAAIAAAOg");
	this.shape_4.setTransform(-31.1,112.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQACAGABAIQAAALgEAHQgDAGgHABIAPA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgEgEQgCgEgHAAIgHAAg");
	this.shape_5.setTransform(-41.4,112.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgGQABgHAEgFQAEgFAGgCQAHgDAHAAQARABAIAIQAHAKAAASIAAAoQAAAJgBAHQgCAGgEAFQgEAFgGADQgHACgIAAQgQAAgIgJgAgFgoIgDAEIgCAEIAAAHIAAAyIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgyIAAgHIgCgEQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDgBQgCABgDABg");
	this.shape_6.setTransform(-49.4,112.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAXIASgEQAAAWAKABQAFgBACgDQACgCAAgFQAAgFgBgEQgCgEgCgCIgFgGIgPgLQgGgGgDgGQgDgHAAgIQgBgOAJgHQAHgIANAAQAFAAAFACQAEABADADQAEADACAEIADAJIABAJIgRADIgBgFIgBgFIgCgFIgDgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCACAAAFQAAAGACADIAHAIIANANIAGAEIAFAHQADAEABAFQACAFAAAFQgBANgHAHQgIAIgNAAQgcABgBgjg");
	this.shape_7.setTransform(-60.1,112.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALA4IgMgzIgJAAIAAAzIgVAAIAAhvIAaAAQAIAAAGABQAHACAEADQAFAEACAGQACAGAAAIQAAALgCAHQgEAGgHABIAPA4gAgKgHIAFAAQAIAAADgEQAEgDAAgKQAAgJgEgEQgCgEgIAAIgGAAg");
	this.shape_8.setTransform(-67.3,112.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_9.setTransform(-75.1,112.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIAUAAIAAANIgUAAIAAAlIAZAAIAAAOg");
	this.shape_10.setTransform(-81.4,112.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA4IAAgrIgXhEIATAAIAMAtIANgtIATAAIgXBEIAAArg");
	this.shape_11.setTransform(-88.1,112.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgGQABgHAEgFQAEgFAGgCQAHgDAHAAQARABAIAIQAHAKAAASIAAAoQAAAJgBAHQgCAGgEAFQgEAFgGADQgHACgIAAQgQAAgIgJgAgFgoIgDAEIgCAEIAAAHIAAAyIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgyIAAgHIgCgEQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDgBQgCABgDABg");
	this.shape_12.setTransform(-98.8,112.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMA4IgMhJIgLBJIgRAAIgQhvIARAAIAJBHIANhHIALAAIANBHIAJhHIARAAIgQBvg");
	this.shape_13.setTransform(-107.8,112.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA4IAAhgIgTAAIAAgPIA3AAIAAAPIgSAAIAABgg");
	this.shape_14.setTransform(-115.7,112.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQA4IgahBIAABBIgSAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_15.setTransform(-125.9,112.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_16.setTransform(-131.6,112.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_17.setTransform(-0.4,103.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAXIASgEQAAAXAKgBQAFAAACgCQACgDAAgFQABgFgCgDQgCgEgCgDIgEgHIgQgLQgGgFgDgGQgEgGABgJQgBgOAJgHQAHgHANAAQAFgBAFACQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgGIgBgGIgBgEIgEgCQAAgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACAEIAHAHIANAMIAGAFIAGAIQACADABAGQABAEAAAGQAAAMgHAIQgIAHgNABQgcAAgBgjg");
	this.shape_18.setTransform(-5.3,98.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AALA4IgMgzIgJAAIAAAzIgVAAIAAhvIAbAAQAHAAAGABQAHACAEADQAFAEACAGQACAGABAIQAAALgDAHQgEAGgHABIAPA4gAgKgHIAFAAQAIAAADgEQAEgDAAgKQAAgJgEgEQgCgEgIAAIgGAAg");
	this.shape_19.setTransform(-12.5,98.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIAUAAIAAANIgUAAIAAAlIAZAAIAAAOg");
	this.shape_20.setTransform(-19.3,98.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAZAAIAAAOg");
	this.shape_21.setTransform(-25.2,98.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQADAGAAAIQgBALgDAHQgDAGgHABIAQA4gAgKgHIAFAAQAIAAADgEQAEgDAAgKQAAgJgEgEQgDgEgGAAIgHAAg");
	this.shape_22.setTransform(-32.2,98.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_23.setTransform(-39.9,98.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA4QgFgDgEgDQgDgDgDgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAFQABAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGAAIgBAAIgDAAIgDACIgCADIgCAEIAAAEIAAAGIAAAtQAAALADAEQACAEAFAAIADgBIADAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgGACgGAAQgGAAgGgCg");
	this.shape_24.setTransform(-47.3,98.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAXIASgEQAAAXAKgBQAFAAACgCQACgDAAgFQAAgFgBgDQgCgEgCgDIgFgHIgPgLQgGgFgDgGQgDgGAAgJQgBgOAJgHQAHgHANAAQAFgBAFACQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgGIgBgGIgCgEIgDgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACAEIAHAHIANAMIAGAFIAFAIQADADABAGQACAEAAAGQgBAMgHAIQgIAHgNABQgcAAgBgjg");
	this.shape_25.setTransform(-57.8,98.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKA4QgGgDgEgDQgEgDgCgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQACgFAEgDQAEgDAGgCQAFgCAFABQAJAAAGABQAGADAEAEQADAFABAFQACAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgBgGgIAAIgBAAIgCAAIgEACIgBADIgCAEIAAAEIAAAGIAAAtQAAALACAEQADAEAEAAIAFgBIACAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgFACgIAAQgFAAgFgCg");
	this.shape_26.setTransform(-65.1,98.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_27.setTransform(-70.9,98.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQA4IgahBIAABBIgSAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_28.setTransform(-76.6,98.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAwQgHgJAAgTIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgDAHABQARgBAIAKQAHAJAAASIAAAoQAAAJgBAGQgCAHgEAGQgEAFgGACQgHACgIABQgQAAgIgKgAgFgoIgDADIgCAGIAAAGIAAAyIAAAGIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIAAgGIAAgyIAAgGIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDAAQgCAAgDABg");
	this.shape_29.setTransform(-84.3,98.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQADAGAAAIQAAALgEAHQgDAGgHABIAQA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgEgEQgDgEgGAAIgHAAg");
	this.shape_30.setTransform(-91.9,98.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_31.setTransform(-98.9,98.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_32.setTransform(-105.6,98.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AALA4IAAgzIgVAAIAAAzIgVAAIAAhvIAVAAIAAAvIAVAAIAAgvIAVAAIAABvg");
	this.shape_33.setTransform(-113.3,98.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLA4QgFgDgEgDQgDgDgDgFQgCgEgBgGIgBgMIAAgmIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAFQABAGAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGAAIgBAAIgDAAIgDACIgCADIgCAEIAAAEIAAAGIAAAtQAAALADAEQACAEAFAAIADgBIADAAIACgDIABgDIABgDIAAgEIAAgFIAAgJIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFACQgGACgGAAQgGAAgGgCg");
	this.shape_34.setTransform(-121.1,98.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_35.setTransform(-127.6,98.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAXA4IgBhMIgQBMIgKAAIgRhMIgBBMIgQAAIAChvIAVAAIAPBOIAQhOIAVAAIACBvg");
	this.shape_36.setTransform(-135.6,98.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeA4IAAhvIAbAAQAIAAAHACQAHACAEAEQAEAFACAGQACAHAAAJIAAAnQAAAKgCAHQgCAGgEAFQgEAFgHACQgHACgIAAgAgJAqIAGAAIADgBIAEgBIADgDIABgDIABgEIAAgFIABgGIAAgnIgBgHIAAgFIgCgEIgCgCIgFgCIgDAAIgGAAg");
	this.shape_37.setTransform(-28.2,84.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAPA4IgahBIAABBIgRAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_38.setTransform(-35.9,84.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_39.setTransform(-43.4,84.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAXA4IgBhMIgQBMIgKAAIgRhMIgBBMIgQAAIAChvIAVAAIAPBOIAQhOIAVAAIACBvg");
	this.shape_40.setTransform(-51.8,84.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAuAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_41.setTransform(-59.3,84.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgeA4IAAhvIAbAAQAIAAAHACQAHACAEAEQAEAFACAGQACAHAAAJIAAAnQAAAKgCAHQgCAGgEAFQgEAFgHACQgHACgIAAgAgJAqIAGAAIADgBIAEgBIADgDIABgDIABgEIAAgFIABgGIAAgnIgBgHIAAgFIgCgEIgCgCIgFgCIgDAAIgGAAg");
	this.shape_42.setTransform(-66.3,84.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAGIAAgLIAfAAIAAALg");
	this.shape_43.setTransform(-72.8,85.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPA4IgahBIAABBIgRAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_44.setTransform(-79,84.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_45.setTransform(-84.8,84.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHALQAEgBADgDQAAgDAAgEIgIAAIAAgRIARAAIAAARQAAAPgOADg");
	this.shape_46.setTransform(-91.5,90.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_47.setTransform(-96,84.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgGQABgHAEgFQAEgFAGgCQAHgDAHAAQARABAIAIQAHAKAAASIAAAoQAAAJgBAHQgCAGgEAFQgEAFgGADQgHADgIgBQgQAAgIgJgAgFgoIgDAEIgCAEIAAAIIAAAxIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgxIAAgIIgCgEQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDgBQgCABgDABg");
	this.shape_48.setTransform(-102.9,84.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AALA4IAAgzIgVAAIAAAzIgVAAIAAhvIAVAAIAAAvIAVAAIAAgvIAVAAIAABvg");
	this.shape_49.setTransform(-110.9,84.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,66.8,145.6,63);


(lib.mechanics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("Ag2ArIAhgHQACAqAUAAQAJAAAEgFQAFgGAAgJQAAgJgEgHQgDgHgEgFIgKgLIgcgWQgMgLgGgLQgGgMAAgRQAAgZAPgNQAOgOAZAAQAKAAAJADQAIADAGAFQAGAFAEAHQADAIADAIIACASIggAGIgBgLIgCgJQgBgFgDgDQgCgDgEgCQgDgCgEABQgIAAgEAFQgFAFAAAJQAAAKAEAHQAEAGAIAIIAaAYIAMAKIAKANQAEAIACAJQADAJAAAKQAAAXgPAOQgOAOgXAAQg2AAgDhAg");
	this.shape.setTransform(46.9,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_1.setTransform(33.3,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgRBpIAAjRIAjAAIAADRg");
	this.shape_2.setTransform(22.7,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AAdBpIgyh8IAAB8IggAAIAAjRIAaAAIAxB1IAAh1IAgAAIAADRg");
	this.shape_3.setTransform(12.1,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAaBpIgIgxIgjAAIgIAxIgkAAIAqjRIAmAAIArDRgAgNAfIAbAAIgOhVg");
	this.shape_4.setTransform(-1.7,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AAVBpIAAhfIgpAAIAABfIgmAAIAAjRIAmAAIAABYIApAAIAAhYIAmAAIAADRg");
	this.shape_5.setTransform(-16.1,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_6.setTransform(-30.6,28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgrBpIAAjRIBXAAIAAAbIgxAAIAAA9IAmAAIAAAZIgmAAIAABFIAxAAIAAAbg");
	this.shape_7.setTransform(-42.7,28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AAsBpIgDiPIgeCPIgVAAIgeiQIgDCQIgdAAIAEjRIAnAAIAdCSIAfiSIAmAAIAEDRg");
	this.shape_8.setTransform(-57.6,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,8.4,123.7,39.3);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250();
	this.instance.setTransform(-71.8,355.8,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,355.8,244.2,203.5);


(lib._if = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("AgOAVQAHgBAFgHQADgFAAgIIgRAAIAAghIAhAAIAAAfQAAAfgcAGg");
	this.shape.setTransform(125.7,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("Ag2ArIAigHQAAAqAVAAQAJAAAEgFQAFgGgBgJQAAgJgDgHQgDgHgEgFIgKgLIgbgWQgNgLgGgLQgGgMAAgRQAAgZAPgNQAOgOAZAAQAJAAAJADQAKADAGAFQAFAFAEAHQAEAIACAIIACASIghAGIAAgLIgCgJQgCgFgCgDQgCgDgEgCQgEgCgDABQgIAAgEAFQgFAFAAAJQAAAKAEAHQAEAGAJAIIAZAYIAMAKIAJANQAFAIACAJQADAJAAAKQAAAXgOAOQgPAOgXAAQg3AAgChAg");
	this.shape_1.setTransform(116.8,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_2.setTransform(103.2,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AgRBpIAAjRIAjAAIAADRg");
	this.shape_3.setTransform(92.6,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAeBpIgzh8IAAB8IghAAIAAjRIAbAAIAxB1IAAh1IAhAAIAADRg");
	this.shape_4.setTransform(82,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AgtBaQgOgSAAgiIAAhMQAAgQADgNQADgMAIgJQAHgJALgFQAMgEAPAAQAgAAAOARQAOASAAAhIAABMQAAAQgDANQgDAMgIAKQgGAJgMAFQgMAEgQAAQgfAAgOgRgAgKhMQgFADgCAEIgCAKIgBAMIAABeIABAKQgBAFACAEIADAHQADADAEABQAEACAEAAQAFAAAEgCQAEgBADgDIADgHIACgJIAAgKIAAheIgBgMIgDgKQgCgEgEgDQgEgCgHAAQgFAAgFACg");
	this.shape_5.setTransform(67.6,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AAVBpIgXhgIgSAAIAABgIgmAAIAAjRIAwAAQAPAAAMADQAMADAJAGQAIAHAFALQAFALAAAPQgBAUgFANQgHAMgNAEIAdBogAgUgOIAKAAQAPAAAHgHQAHgHAAgSQAAgRgGgHQgGgHgPAAIgMAAg");
	this.shape_6.setTransform(53.4,33.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgRBpIAAi0IgjAAIAAgdIBqAAIAAAdIgjAAIAAC0g");
	this.shape_7.setTransform(40.4,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_8.setTransform(28,33.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgrBpIAAjRIBWAAIAAAbIgvAAIAAA9IAlAAIAAAZIglAAIAABFIAwAAIAAAbg");
	this.shape_9.setTransform(15.8,33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgrBpIAAjRIAnAAIAAC2IAwAAIAAAbg");
	this.shape_10.setTransform(4.9,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9C993").s().p("AgrBpIAAjRIBWAAIAAAbIgwAAIAAA9IAmAAIAAAZIgmAAIAABFIAxAAIAAAbg");
	this.shape_11.setTransform(-6.2,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBhIgahBIgXBBIgfAAIAnhlIgmhcIAhAAIAYA9IAVg9IAfAAIgmBgIApBhg");
	this.shape_12.setTransform(102.6,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBhIAAjBIAhAAIAADBg");
	this.shape_13.setTransform(93.3,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApBhIgDiEIgcCEIgTAAIgciFIgCCFIgbAAIADjBIAkAAIAbCHIAciHIAkAAIADDBg");
	this.shape_14.setTransform(81.8,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBfQgKgDgFgGQgGgFgFgJQgDgIgBgKQgCgLAAgNIAAh/IAjAAIAACDIAAALIABAKIADAJQACADAFADQADACAEAAQAFAAAEgCIAGgGQACgDABgGIACgKIAAgLIAAiDIAiAAIAAB/IgBAYQgCAKgEAIQgDAJgGAFQgHAGgJADQgJADgNAAQgMAAgJgDg");
	this.shape_15.setTransform(61,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBSQgNgPAAggIAAhGQAAgPADgLQACgMAHgIQAGgJALgEQALgEAOAAQAeAAANAQQANAQgBAfIAABGQAAAPgCAMQgEALgGAJQgHAIgKAEQgLAFgPAAQgcAAgNgRgAgJhGQgEACgCAFIgDAIIAAAMIAABWIAAAKIACAIQABAEABACIAHAEQADABAEABQAEgBAEgBQAEgCACgCIAEgGIABgIIABgKIAAhWIgBgMQgBgEgCgEQgCgFgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_16.setTransform(47.5,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPBhIAAhKIgoh3IAiAAIAVBOIAYhOIAgAAIgoB3IAABKg");
	this.shape_17.setTransform(34.9,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmBhIAAjBIBOAAIAAAZIgrAAIAAA4IAiAAIAAAXIgiAAIAABZg");
	this.shape_18.setTransform(18.8,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQBhIAAjBIAhAAIAADBg");
	this.shape_19.setTransform(10,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-10.5,150.6,69.1);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape.setTransform(-28.7,496.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_1.setTransform(-37.7,496.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA+QgKgMAAgYIAAg0QAAgLACgJQACgIAFgHQAEgGAJgDQAIgDAKAAQAWAAAKAMQAKAMAAAXIAAA0QAAALgCAJQgDAJgFAGQgEAHgJADQgIADgLAAQgVAAgJgMgAgHg0QgDACgBADIgCAGIAAAJIAABAIAAAHIABAGIACAFQACACADABIAFABIAGgBQADgBABgCIADgFIACgGIAAgHIAAhAIgBgJIgCgGQgCgDgDgCQgCgCgFAAQgDAAgEACg");
	this.shape_2.setTransform(-47.9,496.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBIIgBhiIgVBiIgOAAIgVhiIgCBiIgUAAIACiPIAcAAIATBkIAVhkIAbAAIACCPg");
	this.shape_3.setTransform(-59.2,496.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBIIgihUIAABUIgXAAIAAiPIASAAIAiBQIAAhQIAXAAIAACPg");
	this.shape_4.setTransform(-74.5,496.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_5.setTransform(-84.2,496.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBIIgGgiIgXAAIgGAiIgZAAIAeiPIAZAAIAeCPgAgIAVIARAAIgJg6g");
	this.shape_6.setTransform(-94.1,496.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape_7.setTransform(-102.3,496.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIAaAAIAAB9IAhAAIAAASg");
	this.shape_8.setTransform(-109.8,496.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("ArEClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIWJAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAq6CRIV1AAIAAkhI11AAg");
	this.shape_9.setTransform(-69.5,495.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// base
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91D2E5").s().p("ArEClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIWJAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(-69.5,495.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// hit
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_11.setTransform(-74.5,495.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,479.3,144,33.1);


(lib.and = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(-26.7,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_1.setTransform(-31.9,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_2.setTransform(-37,59.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBhIAAimIggAAIAAgbIBhAAIAAAbIgfAAIAACmg");
	this.shape_3.setTransform(-44.8,51.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBhIAAjBIBPAAIAAAZIgsAAIAAA4IAjAAIAAAXIgjAAIAABAIAtAAIAAAZg");
	this.shape_4.setTransform(-54.6,51.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBSQgMgSAAggIAAg9QAAgSACgMQADgLAGgJQAGgKALgFQALgEAOAAQAdAAAMAOQANAOAAAdIAAAJIgiAAIAAgKIAAgKIgCgJQgBgDgCgDIgGgEQgDgBgGAAIgFABIgFACQgCACgCADIgCAFIgBAGIAAAIIgBAIIAABLQAAATAEAHQAFAJAKgBQAGAAAFgBQAEgDADgFQACgFABgGIABgQIAAgQIgVAAIAAgUIA1AAIAABhIgYAAIgCgUQgIAWgXAAQgbAAgMgRg");
	this.shape_5.setTransform(-66.9,51.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBfQgKgDgFgGQgGgGgFgIQgDgJgBgJQgCgKAAgOIAAh/IAjAAIAACDIAAAMIABAKIADAIQACADAFACQADADAEAAQAFAAAEgDIAGgFQACgDABgFIABgKIABgMIAAiDIAiAAIAAB/IgBAYQgCAJgEAJQgDAIgGAGQgHAGgJADQgJADgNAAQgMAAgJgDg");
	this.shape_6.setTransform(-3.8,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBTQgMgRAAgfIAAhGQAAgQADgKQACgMAHgJQAGgHALgFQALgEAOAAQAeAAANAQQANAQgBAfIAABGQAAAPgCALQgEAMgGAJQgHAIgKAEQgLAFgPAAQgcAAgOgQgAgJhGQgEACgCAEIgDAJIAAAMIAABWIAAAJIACAIQABAEABADIAHAEQADACAEAAQAEAAAEgCQAEgBACgDIAEgHIABgIIAAgJIAAhWIAAgMQgBgFgCgEQgCgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(-17.3,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBhIAAhKIgoh3IAiAAIAVBOIAYhOIAgAAIgoB3IAABKg");
	this.shape_8.setTransform(-29.9,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgRBpIAAi0IgkAAIAAgdIBqAAIAAAdIgiAAIAAC0g");
	this.shape_9.setTransform(-47.1,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgRBpIAAjRIAjAAIAADRg");
	this.shape_10.setTransform(-56.2,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIAtAAQAQAAALAEQANADAGAIQAIAIADALQADALAAAQIAABEQAAARgEALQgDAMgGAIQgHAIgMAEQgMAEgPAAgAgQBIIAJAAIAIgBIAHgCIAEgEIADgGIABgHIABgJIAAgKIAAhFIAAgLIgBgJIgDgGIgEgFQgEgCgEAAIgIgBIgJAAg");
	this.shape_11.setTransform(-71.2,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBhIguhyIAAByIgeAAIAAjBIAYAAIAuBsIAAhsIAdAAIAADBg");
	this.shape_12.setTransform(-84.5,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBhIgIgtIggAAIgIAtIghAAIAnjBIAjAAIAnDBgAgLAdIAYAAIgNhOg");
	this.shape_13.setTransform(-97.3,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,5.5,110.6,71.9);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBQIAAiJIgbAAIAAgXIBRAAIAAAXIgaAAIAACJg");
	this.shape.setTransform(45.6,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBPQgHgDgFgEQgGgFgCgHQgDgHgCgJIgBgTIAAhqIAcAAIAABtIAAAKIACAIQABAEACADQABADAEACQADACADAAQAEAAADgCQAEgCABgDIADgHIABgIIAAgKIAAhtIAdAAIAABqQAAALgCAIQgBAJgCAHQgEAHgFAFQgFAEgIADQgIACgKAAQgKAAgIgCg");
	this.shape_1.setTransform(35.8,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBFQgLgOAAgaIAAg5QAAgOACgJQADgJAFgIQAFgGAKgEQAJgDALAAQAYAAALANQALAOAAAaIAAA5QAAANgCAKQgDAJgFAHQgGAHgJAEQgJAEgMgBQgYAAgKgNgAgHg5QgEABgBADQgCAEgBAEIAAAJIAABIIAAAIIABAHQABADACACQACACADACIAGABIAHgBIAFgEIACgFIACgHIAAgIIAAhIIAAgJIgDgIQgBgDgEgBQgDgDgFAAQgEAAgDADg");
	this.shape_2.setTransform(24.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBQIAAigIApAAQAJAAAIACQAIACAHAFQAGAFAEAIQADAJgBALQABAegYADQAOADAIAIQAGAKABASQAAAXgMAMQgLAMgXgBgAgPA8IALAAQALAAAFgHQAGgFAAgPQgBgPgFgGQgGgGgLAAIgKAAgAgPgOIAKAAQALABAEgGQAFgFAAgNQAAgIgCgDQgBgFgEgCQgEgDgEAAIgLgBIgEAAg");
	this.shape_3.setTransform(13.6,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAYIAUAAIgLhBg");
	this.shape_4.setTransform(2.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,4.2,56.6,31.2);


(lib.ayear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(101.6,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBQIgShJIgNAAIAABJIgdAAIAAigIAlAAQALAAAJACQAJADAHAFQAHAEADAJQADAJAAAMQAAAPgEAKQgFAJgKACIAWBQgAgPgKIAHAAQAMgBAFgFQAGgGAAgNQAAgNgFgGQgFgFgLAAIgJAAg");
	this.shape_1.setTransform(94.1,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAYIAUAAIgLhBg");
	this.shape_2.setTransform(83.1,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBQIAAigIBCAAIAAAVIgkAAIAAAvIAcAAIAAATIgcAAIAAA1IAlAAIAAAUg");
	this.shape_3.setTransform(74,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBQIAAg9IghhjIAbAAIASBBIAThBIAbAAIggBjIAAA9g");
	this.shape_4.setTransform(64.5,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAYIAUAAIgLhBg");
	this.shape_5.setTransform(49.4,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,148,31.2);


(lib._51000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAHIAFgBQABAHACAAIACgBIABgCIgBgDIgBgCIgBgCIgEgDIgDgDIgBgFQAAgEADgDQACgCADAAIADAAIACACIACACIABADIAAADIgFABIAAgCIgBgCIAAgBIgBgBIgBAAIgBABIgBACIAAADIACADIAEADIABABIACACIABADIABADQAAAEgDADQgCACgEAAQgIAAAAgLg");
	this.shape.setTransform(40.5,65.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCASIgDgCIgCgDIgBgDIgBgEIAAgLIABgEIABgDIACgDIADgCIACAAIAEABIADACIACADIABAEIAAAEIgHAAIAAgEIAAgDQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIAAAAIAAAAIgBABIAAABIgBABIAAABIAAACIAAANIABAFQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIABAAIABAAIABgBIAAgBIAAgBIAAgBIAAgCIAAgDIAHAAIAAADIgBAEIgBADIgBACIgDACIgEAAIgCAAg");
	this.shape_1.setTransform(37.9,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCASIAAgjIAFAAIAAAjg");
	this.shape_2.setTransform(35.9,65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCASIAAgeIgGAAIAAgFIARAAIAAAFIgGAAIAAAeg");
	this.shape_3.setTransform(34.2,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAHIAGgBQAAAHACAAIACgBIAAgCIAAgDIgBgCIgBgCIgEgDIgDgDIgBgFQAAgEACgDQADgCADAAIACAAIAEACIABACIABADIAAADIgGABIAAgCIAAgCIgBgBIgBgBIAAAAIgBABIgBACIABADIABADIADADIADABIACACIAAADIABADQAAAEgCADQgDACgEAAQgIAAAAgLg");
	this.shape_4.setTransform(32,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCASIAAgjIAFAAIAAAjg");
	this.shape_5.setTransform(30.1,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCASIAAgeIgGAAIAAgFIARAAIAAAFIgGAAIAAAeg");
	this.shape_6.setTransform(28.3,65.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEASIgBgJIgFAAIgBAJIgGAAIAHgjIAFAAIAHAjgAgBAFIADAAIgCgNg");
	this.shape_7.setTransform(26,65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCASIAAgeIgGAAIAAgFIARAAIAAAFIgGAAIAAAeg");
	this.shape_8.setTransform(23.7,65.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAHIAFgBQABAHACAAIACgBIABgCIgBgDIgBgCIgBgCIgEgDIgDgDIgBgFQAAgEADgDQACgCADAAIADAAIACACIACACIABADIAAADIgFABIAAgCIgBgCIAAgBIgBgBIgBAAIgBABIgBACIAAADIACADIAEADIABABIACACIABADIABADQAAAEgDADQgCACgEAAQgIAAAAgLg");
	this.shape_9.setTransform(21.6,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADASIgDgRIgCAAIAAARIgHAAIAAgjIAIAAIAEABIADABIACADIABAFIgBAGIgDABIAFASgAgCgBIABAAIACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgEQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape_10.setTransform(17.8,65.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAPQgDgDAAgGIAAgLIABgFIACgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAEgBQAFAAADADQACADAAAGIAAALIAAAFIgCAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABQgEAAgCgDgAgBgMIgBABIAAACIAAACIAAAPIAAACIAAABIABABIABABIAAAAIACAAIABgBIAAgBIAAgBIAAgCIAAgPIAAgCIAAgCIgBgBIgCAAIgBAAg");
	this.shape_11.setTransform(15,65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAJAAIADABIADABIACADIABAFQAAAGgFABQADAAABABQACACAAAEQAAAFgDADQgCADgFAAgAgCANIACAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgCAAgAgCgCIACAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIABgEIAAgDIgCgBIgBgBIgBAAIgBAAg");
	this.shape_12.setTransform(12.4,65.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEASIgBgJIgFAAIgBAJIgGAAIAHgjIAFAAIAHAjgAgBAFIADAAIgCgNg");
	this.shape_13.setTransform(9.7,65.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGASIAAgjIAGAAIAAAeIAHAAIAAAFg");
	this.shape_14.setTransform(7.5,65.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGASIAAgjIANAAIAAAFIgHAAIAAALIAFAAIAAACIgFAAIAAARg");
	this.shape_15.setTransform(4.2,65.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAPQgDgDAAgGIAAgLIAAgFIADgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIADgBQAFAAACADQADADAAAGIAAALIAAAFIgCAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgFABQgEAAgCgDgAgBgMIgBABIAAACIAAACIAAAPIAAACIAAABIABABIABABIAAAAIACAAIABgBIAAgBIABgBIAAgCIAAgPIAAgCIgBgCIgBgBIgCAAIgBAAg");
	this.shape_16.setTransform(1.8,65.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDARIgDgBIgCgDIgBgEIAAgDIAAgXIAHAAIAAAXIAAACIAAACIABACIABABIAAAAIABAAIABgBIABgCIAAgCIAAgCIAAgXIAHAAIAAAXIgBADIgBAEIgBADIgDABIgEABIgDgBg");
	this.shape_17.setTransform(-2.2,65.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEASIgBgJIgFAAIgBAJIgGAAIAHgjIAFAAIAHAjgAgBAFIADAAIgCgNg");
	this.shape_18.setTransform(-4.8,65.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGASIAAgjIANAAIAAAFIgHAAIAAAKIAFAAIAAADIgFAAIAAAMIAHAAIAAAFg");
	this.shape_19.setTransform(-7.1,65.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADASIgDgRIgCAAIAAARIgHAAIAAgjIAJAAIACABIAEABIACADIABAFIgBAGIgDABIAFASgAgCgBIACAAIABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgEQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape_20.setTransform(-9.4,65.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDARIgDgBIgCgDIgBgEIAAgDIAAgXIAHAAIAAAXIAAACIAAACIABACIABABIAAAAIABAAIABgBIABgCIAAgCIAAgCIAAgXIAHAAIAAAXIgBADIgBAEIgBADIgDABIgEABIgDgBg");
	this.shape_21.setTransform(-12.2,65.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAJAAIACABIAEABIACADIABAFQAAAGgGABQAEAAABABQACACAAAEQAAAFgCADQgEADgEAAgAgCANIACAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgCAAgAgCgCIACAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIABgEIgBgDIgBgBIgBgBIgBAAIgBAAg");
	this.shape_22.setTransform(-14.8,65.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_23.setTransform(-18,67.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAHIAGgBQAAAHACAAIACgBIAAgCIAAgDIgBgCIgBgCIgEgDIgDgDIgBgFQAAgEACgDQADgCADAAIACAAIAEACIABACIABADIAAADIgGABIAAgCIAAgCIgBgBIgBgBIAAAAIgBABIgBACIABADIABADIADADIADABIACACIAAADIABADQAAAEgCADQgDACgEAAQgIAAAAgLg");
	this.shape_24.setTransform(-19.8,65.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCACIAAgDIAFAAIAAADg");
	this.shape_25.setTransform(-21.5,67.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDARIgDgBIgCgDIgBgEIAAgDIAAgXIAHAAIAAAXIAAACIAAACIABACIABABIAAAAIABAAIABgBIABgCIAAgCIAAgCIAAgXIAHAAIAAAXIgBADIgBAEIgBADIgDABIgEABIgDgBg");
	this.shape_26.setTransform(-23.5,65.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBAKIAAgGIADAAIAAAGgAgBgDIAAgGIADAAIAAAGg");
	this.shape_27.setTransform(-26.7,66.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGASIAAgjIANAAIAAAFIgHAAIAAAKIAFAAIAAADIgFAAIAAAMIAHAAIAAAFg");
	this.shape_28.setTransform(-28.3,65.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCASIgDgCIgCgDIgBgDIgBgEIAAgLIABgEIABgDIACgDIADgCIACAAIAEABIADACIACADIABAEIAAAEIgHAAIAAgEIAAgDQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIAAAAIAAAAIgBABIAAABIgBABIAAABIAAACIAAANIABAFQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIABAAIABAAIABgBIAAgBIAAgBIAAgBIAAgCIAAgDIAHAAIAAADIgBAEIgBADIgBACIgDACIgEAAIgCAAg");
	this.shape_29.setTransform(-30.7,65.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADASIgDgRIgCAAIAAARIgHAAIAAgjIAJAAIACABIAEABIACADIABAFIgBAGIgDABIAFASgAgCgBIACAAIABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgEQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape_30.setTransform(-33.3,65.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDARIgDgBIgCgDIgBgEIAAgDIAAgXIAHAAIAAAXIAAACIAAACIABACIABABIAAAAIABAAIABgBIABgCIAAgCIAAgCIAAgXIAHAAIAAAXIgBADIgBAEIgBADIgDABIgEABIgDgBg");
	this.shape_31.setTransform(-36,65.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAPQgDgDAAgGIAAgLIAAgFIADgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIADgBQAFAAACADQADADAAAGIAAALIAAAFIgCAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABQgEAAgCgDgAgBgMIgBABIAAACIAAACIAAAPIAAACIAAABIABABIABABIAAAAIACAAIABgBIAAgBIABgBIAAgCIAAgPIAAgCIgBgCIgBgBIgCAAIgBAAg");
	this.shape_32.setTransform(-38.7,65.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAHIAFgBQABAHACAAIACgBIAAgCIAAgDIgBgCIgBgCIgEgDIgDgDIgBgFQAAgEADgDQACgCADAAIACAAIADACIACACIABADIABADIgHABIAAgCIAAgCIAAgBIgBgBIgBAAIgBABIgBACIAAADIACADIADADIACABIADACIABADIAAADQAAAEgDADQgCACgEAAQgHAAgBgLg");
	this.shape_33.setTransform(-41.2,65.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAACIgBAFIgEgCIAEgEIgFgBIABgDIAFACIgBgFIADAAIgBAFIAFgCIABADIgFABIAEAEIgEACg");
	this.shape_34.setTransform(-43.4,64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFA54A").s().p("AAAAEIAAAAIgGAOIgIgGIAMgLIgBAAIgPgBIADgIIAOAHIAAgBIgDgPIAJAAIgDAPIAAABIAOgHIADAIIgQABIAAAAIALALIgIAGg");
	this.shape_35.setTransform(46.2,38.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#90D2E5").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEIgNgKIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_36.setTransform(-2.1,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AGLgzQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAQAHAAAFADQAFACADAEQADAEACAHgAGLheQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHQgHgJgLgEgAEjg+QgEgMgHgHQgIgJgLgEQgLgDgOAAQgNAAgLADQgLAEgIAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAIAHALAEQALAFANAAQAOAAALgFQALgEAIgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLgAEAg+QAEAEABAHQACAGAAALIAAAxQAAALgCAHQgBAGgEAFQgDAEgFACQgFABgHAAQgGAAgFgBQgFgCgDgEQgEgFgBgGQgCgHAAgLIAAgxQAAgLACgGQABgHAEgEQADgEAFgCQAFgDAGAAQAHAAAFADQAFACADAEgACShRQgHgJgLgEQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHgABnhHQAHAAAFADQAFACADAEQADAEACAHQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAgAgMAqIAAAiIAMAAIgKAkIAPAAIAPgkIAAgigAhrhUQgMAIgNADIAAASIAbAAIAACDIAeAAIAAitIgTAAQgJALgEACgAi0hgIhkAAIAABcIAaAAQAEgHAHgDQAGgEAIAAQAHAAAFADQAEABAEAFQADAEABAFQABAFAAAJQAAAJgBAHQgBAHgDAFQgDAEgGADQgFACgHAAQgGAAgFgBQgFgCgDgDQgDgDgCgFQgBgEAAgGIggAAQAAAKADAJQADAJAGAHQAHAIALAEIAMAEIAPABQAKAAARgFQALgEAHgJQAGgIAEgMQADgLAAgQQAAgNgCgJQgDgLgGgHQgGgJgJgDQgKgEgOAAQgJAAgIACQgHADgHAFIAAgkIBJAAgAk/gGQgGgGgKgEQgIgEgLgFIAAgsQAIABAHAFQAGAEAGAHIASgSQgJgKgKgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgJAEQgJADgGAGQgHAGgDAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAIAEAKABIAAAxQgJgBgIgHQgHgGgHgIIgUATQAEAFAGAGQAHAGAHAEQAHAEAHADQAHACAGAAIAAAcIATAAIAAgcQAKAAAJgDQAKgEAHgGQAHgHAEgIQAEgJAAgLQAAgLgFgKQgDgHgIgGgAmDhBQAFgFAJgBIAAApQgJgCgFgGQgHgGAAgHQAAgJAHgFgAlPAUQACAEAAAFQAAAJgGAGQgGAGgJAAIAAgtQALAFAEAEQADADABADg");
	this.shape_37.setTransform(-2.3,46.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgCQgHgDgHgEQgHgEgGgGIgLgLIAVgTQAGAIAHAGQAJAGAIACIAAgxQgJgBgJgEQgJgFgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgHQAGgFAJgEQAIgDAKAAIAAgQIATAAIAAAQQAKACAQAHQALAHAJAJIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAAKgEAKQgEAIgHAGQgHAHgJAEQgJADgLAAIAAAcgAlkAxQAKAAAGgFQAGgGAAgJQAAgFgCgEQgCgEgDgDQgEgDgLgFgAmFhBQgGAFAAAJQAAAHAGAGQAGAFAIADIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgAFlhEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAHgHALgEQALgEAOgBQAOABALAEQALAEAHAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgHAIgLAEQgLAFgOgBQgOABgLgFgADfhEQgFACgDADQgDAFgCAHQgBAGAAALIAAAxQAAAKABAHQACAHADAEQADAFAFABQAFACAHAAQAHAAAFgCQAFgBADgFQADgEACgHQABgHAAgKIAAgxQAAgLgBgGQgCgHgDgFQgDgDgFgCQgFgCgHgBQgHABgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgABahEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgAj2BNIgNgDQgKgEgHgIQgGgHgDgJQgDgKAAgKIAfAAQAAAHACAEQABAEAEADQADAEAFABQAEACAGAAQAIAAAFgCQAFgDADgFQADgFACgGIABgRQAAgIgCgFQgBgFgDgFQgDgDgFgCQgFgDgGAAQgIAAgHAEQgGADgFAHIgaAAIAAhbIBkAAIAAAbIhJAAIAAAkQAIgFAHgCQAIgDAJAAQAOAAAJADQAKAFAGAHQAFAIADALQADAJAAANQAAAQgEALQgDAMgHAIQgHAIgLAFQgQAFgKgBgAhrBMIAAiDIgaAAIAAgTQAMgCANgHQAEgDAIgMIATAAIAACug");
	this.shape_38.setTransform(-2.1,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#AFA54A").ss(2,1,1).p("AGEg/QAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCQAFgCAGAAQAHAAAFACQAFACADAEgAGchSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgAEWhSQgHgIgLgEQgLgEgOAAQgOAAgLAEQgLAEgHAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAHAHALAEQALAEAOAAQAOAAALgEQALgEAHgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgADrhHQAHAAAFACQAFACADAEQADAEACAHQABAHAAALIAAAxQAAAKgBAIQgCAGgDAEQgDAFgFACQgFABgHAAQgHAAgFgBQgFgCgDgFQgDgEgCgGQgBgIAAgKIAAgxQAAgLABgHQACgHADgEQADgEAFgCQAFgCAHAAgAB+heQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIQgIgIgLgEgABahFQAFgCAGAAQAHAAAFACQAFACADAEQAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCgAgNAqIAAAiIANAAIgLAkIAPAAIAPgkIAAgigAhshUQgNAIgMACIAAATIAaAAIAACDIAeAAIAAiuIgTAAQgIALgEADgAi2hgIhkAAIAABcIAaAAQAFgHAGgDQAHgEAIAAQAGAAAFADQAFABADAFQADAEABAFQACAFAAAJQAAAJgBAHQgCAGgDAFQgDAFgFACQgFADgIAAQgGAAgEgBQgFgCgDgDQgEgEgBgEQgCgEAAgHIgfAAQAAAKADAKQADAJAGAHQAHAIAKAEIANAEIAPAAQAKAAAQgEQALgEAHgJQAHgIADgMQAEgLAAgQQAAgOgDgIQgDgLgFgIQgGgIgKgEQgJgEgOAAQgJAAgIADQgHADgIAFIAAgkIBJAAgAk2hGQgJgKgLgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgIADQgJAEgGAFQgHAHgEAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAJAEAJABIAAAxQgIgBgJgHQgHgGgGgIIgVATQAFAFAGAGQAGAGAHAEQAHAEAHACQAHADAGAAIAAAbIATAAIAAgbQALAAAJgDQAJgEAHgGQAHgHAEgIQAEgKAAgKQAAgMgEgJQgEgHgHgGQgHgGgKgFQgHgDgMgFIAAgsQAIABAHAFQAGAEAGAHgAmLg0QAAgIAGgFQAGgFAIgBIAAApQgIgDgGgFQgGgGAAgIgAlQAUQACAEAAAFQAAAJgGAGQgGAGgKAAIAAgtQALAFAEAEQADACACAEg");
	this.shape_39.setTransform(-1.2,47.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AFA54A").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEQgHgFgGgFIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_40.setTransform(-1.2,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,34.2,94.4,36.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.about();
	this.instance.setTransform(-219.9,-36.5,1,1,0,0,0,122.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.8,-41.8,56.6,31.2);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_213 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(213).call(this.frame_213).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("EAMbguyMAAABdlI41AAMAAAhdlg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(214));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({y:100.9},0).to({y:81.7,alpha:1},11,cjs.Ease.get(1)).wait(66));

	// Layer 5
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(635,101,1,1,0,0,0,93,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214));

	// 51000
	this.instance_2 = new lib._51000();
	this.instance_2.setTransform(149.3,130.2,1.464,1.464,0,0,0,46.5,11.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// a year
	this.instance_3 = new lib.ayear();
	this.instance_3.setTransform(80.1,227.1,1,1,0,0,0,74,12);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// about
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(397.7,177.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({startPosition:0},0).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// and
	this.instance_5 = new lib.and();
	this.instance_5.setTransform(150.1,85.7,1,1,0,0,0,19.4,12);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// mechanics
	this.instance_6 = new lib.mechanics();
	this.instance_6.setTransform(150,59.5,1,1,0,0,0,62.1,14);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// if you mix
	this.instance_7 = new lib._if();
	this.instance_7.setTransform(71.7,26.9,1,1,0,0,0,48.3,12);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// Layer 13
	this.instance_8 = new lib.newFrame();
	this.instance_8.setTransform(149.7,167.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(87));

	// images
	this.instance_9 = new lib.image();
	this.instance_9.setTransform(150.7,61.7,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({alpha:1},21,cjs.Ease.get(1)).wait(186));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91D2E5").s().p("AsfIGIAAwLIY/AAIAAQLg");
	this.shape_1.setTransform(80,547.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4F67").s().p("EgMfAmuMAAAhNbIY/AAMAAABNbg");
	this.shape_2.setTransform(80,247.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,254.7,408.5,690.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;