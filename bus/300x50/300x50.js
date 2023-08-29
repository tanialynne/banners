(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300_bg.jpg", id:"_300_bg"},
		{src:"_300_border.png", id:"_300_border"},
		{src:"_300_flag.png", id:"_300_flag"},
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
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib._300_flag = function() {
	this.initialize(img._300_flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,50);


(lib._300_logo = function() {
	this.initialize(img._300_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,50);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAARIgQAJIAEgTIgOgMIATgCIAHgSIAIASIATACIgNAMIADATg");
	this.shape.setTransform(-95.8,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAbQgEgBgDgEQgDgCgCgGQgBgEgBgJIAAAAQABgEABgGQABgFAEgEQADgEAEgDQAEgCAFAAIAFAAIAFABIADACIAFACIgHAKIgCgCIgEgBIgCgBIgDAAIgDABIgDACIgCAFIgCAEIAFgCIAFgBQAEAAAEABIAGADIAEAEQABAEABAEQgBAFgBADIgFAGIgHAEQgEABgEAAQgDAAgEgBgAgFADQgDADAAAEQAAADADADQACACADAAQAEAAADgCQADgDAAgDQgBgEgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_1.setTransform(-104.4,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAcIAAgqIgIACIgDgKIAOgFIAJAAIAAA3g");
	this.shape_2.setTransform(-109.1,-6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAbQgEgDgEgEQgDgEgCgFQgBgGAAgFQAAgFABgFIAFgJQAEgEAEgCQAFgCAEAAQAFAAAFACQAEACADAEQAEAEACAFQABAFAAAFQAAAFgBAGQgCAFgEAEQgDAEgEADQgFABgFAAQgEAAgFgBgAgEgPIgDADIgDAGIgBAGIABAHIADAFIADAEQADABABABIAFgCIADgEIADgFIABgHIgBgGIgDgFIgEgEQgCgCgCABIgEABg");
	this.shape_3.setTransform(-113.4,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAcIAAgKIASgPIADgDIADgCIABgDIABgEQAAgDgCgCQgCgCgDAAQgCAAgCACIgGAGIgJgHIAFgFIAEgEIAGgCIAEgBQAFAAADABQAEABACADQADACABADQACADAAAEIgBAHIgDADIgFAFIgGAFIgHAHIAWAAIAAALg");
	this.shape_4.setTransform(-118.9,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_5.setTransform(-122.5,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFAcIAAgMIgaAAIgCgJIAdgiIAKAAIAAAhIAIAAIAAAKIgIAAIAAAMgAgIAGIANAAIAAgQg");
	this.shape_6.setTransform(-126.5,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAbQgEgDgEgEQgDgEgCgFQgBgGAAgFQAAgFABgFIAFgJQAEgEAEgCQAFgCAEAAQAFAAAFACQAEACADAEQAEAEACAFQABAFAAAFQAAAFgBAGQgCAFgEAEQgDAEgEADQgFABgFAAQgEAAgFgBgAgEgPIgDADIgDAGIgBAGIABAHIADAFIADAEQADABABABIAFgCIADgEIADgFIABgHIgBgGIgDgFIgEgEQgCgCgCABIgEABg");
	this.shape_7.setTransform(-132.1,-6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_8.setTransform(-136.1,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAbQgEgDgEgEQgDgEgCgFQgBgGAAgFQAAgFABgFIAFgJQAEgEAEgCQAFgCAEAAQAFAAAFACQAEACADAEQAEAEACAFQABAFAAAFQAAAFgBAGQgCAFgEAEQgDAEgEADQgFABgFAAQgEAAgFgBgAgEgPIgDADIgDAGIgBAGIABAHIADAFIADAEQADABABABIAFgCIADgEIADgFIABgHIgBgGIgDgFIgEgEQgCgCgCABIgEABg");
	this.shape_9.setTransform(-140.2,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAcIAAgqIgIACIgDgKIAOgFIAJAAIAAA3g");
	this.shape_10.setTransform(-145.1,-6.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAARIgQAJIAEgTIgOgMIATgCIAHgSIAIASIATACIgNAMIADATg");
	this.shape_11.setTransform(-152.5,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.1,-13.2,68,13.2);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_flag();
	this.instance.setTransform(26,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,50);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_flag();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,50);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,50);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AAHAsIgIgoIgGAAIAAAoIgSAAIAAhXIAWAAIALABQAFABAEADQAEADACAEQABAFAAAGQAAAJgCAGQgCAFgGAAIAMAsgAgHgFIAEAAQAFAAADgDQADgDAAgHQAAgHgDgDQgCgDgFAAIgFAAg");
	this.shape.setTransform(109.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgLArQgFgCgDgEQgDgEgBgFIgBgNIAAg6IARAAIAAA8IABAEIAAAEIACADIACACIACABIADgBIACgCIACgDIAAgEIAAgEIAAg8IASAAIAAA6QAAAHgBAGQgBAFgDAEQgDAEgFACQgFACgHAAQgGAAgFgCg");
	this.shape_1.setTransform(102.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_2.setTransform(96.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AAIAsIgIgoIgHAAIAAAoIgSAAIAAhXIAWAAIALABQAFABAEADQAEADACAEQACAFAAAGQAAAJgDAGQgCAFgGAAIAMAsgAgHgFIAEAAQAGAAACgDQADgDAAgHQAAgHgCgDQgDgDgEAAIgGAAg");
	this.shape_3.setTransform(87.7,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_4.setTransform(81.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgRAsIAAhXIAjAAIAAANIgSAAIAAAXIAPAAIAAALIgPAAIAAAog");
	this.shape_5.setTransform(76,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgQAnQgGgIgBgOIAQgDQABAJABAEQACAEADABQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQABgCAAgEQAAgFgDgEQgCgDgCgFIgKgHIgGgFQgDgCgBgFQgCgFAAgEQAAgLAHgGQAGgGAKAAIAHAAIAFADIAEADIACAEIACAFIABAEIABAFIgPADIgBgEIAAgFIgCgDIgCgBIgCgBQgCAAgCACQgBACAAAEIAAAEIADAEIACADIAAACIAKAIIAGAEIADAFIAEAIIABAIQgBAKgFAGQgHAGgLAAQgKAAgGgGg");
	this.shape_6.setTransform(68,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AALAsIgSgvIAAAvIgPAAIAAhXIAMAAIASAsIAAgsIAPAAIAABXg");
	this.shape_7.setTransform(62.1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_8.setTransform(55.9,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AgHAsIAAhXIAQAAIAABXg");
	this.shape_9.setTransform(51.2,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgIAsIAAhJIgNAAIAAgOIArAAIAAAOIgOAAIAABJg");
	this.shape_10.setTransform(47.2,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgQAnQgGgIgBgOIAQgDQAAAJACAEQACAEADABQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAQACgCAAgEQAAgFgDgEQgBgDgEgFIgJgHIgGgFQgCgCgCgFQgBgFgBgEQABgLAGgGQAHgGAJAAIAHAAIAFADIAEADIADAEIABAFIABAEIABAFIgPADIgBgEIgBgFIgBgDIgCgBIgCgBQgCAAgCACQgBACAAAEIAAAEIACAEIADADIABACIAJAIIAGAEIADAFIADAIIABAIQAAAKgFAGQgHAGgKAAQgKAAgHgGg");
	this.shape_11.setTransform(42.1,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgSAsIAAhXIAlAAIAAANIgTAAIAAAXIAOAAIAAALIgOAAIAAAcIATAAIAAAMg");
	this.shape_12.setTransform(37.1,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgLArQgFgCgDgEIgEgJIgBgNIAAg6IARAAIAAA8IABAEIAAAEIACADIACACIACABIADgBIACgCIACgDIAAgEIAAgEIAAg8IASAAIAAA6QAAAHgBAGQgBAFgDAEQgDAEgFACQgFACgHAAQgGAAgFgCg");
	this.shape_13.setTransform(31.3,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AAKAvQgGgFgDgFIgBAAQgGAAgFgCQgFgCgDgEQgDgEgCgFIgBgMIAAgfIABgNQACgFADgEQADgEAFgBQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAUgMAGQAFAGADACIgDALQgEgBgFgFgAgCgnIgCACIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACABIACABIADgBIACgBIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgCIgDAAIgCAAg");
	this.shape_14.setTransform(25,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAIAsIgIg3IgHA3IgPAAIgMhXIAPAAIAHA0IAIg0IAKAAIAIA0IAGg0IAPAAIgMBXg");
	this.shape_15.setTransform(15.2,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgSAsIAAhXIAlAAIAAANIgTAAIAAAXIAOAAIAAALIgOAAIAAAcIATAAIAAAMg");
	this.shape_16.setTransform(9.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AgSAsIAAhXIAkAAIAAANIgSAAIAAAXIAPAAIAAALIgPAAIAAAog");
	this.shape_17.setTransform(4.4,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE6DF").s().p("AAKAsIgEgUIgLAAIgDAUIgSAAIAShXIASAAIARBXgAgEANIAJAAIgFghg");
	this.shape_18.setTransform(-3.9,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAE6DF").s().p("AgQAnQgGgIAAgOIAPgDQABAJACAEQACAEACABQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQABgCAAgEQAAgFgCgEQgDgDgDgFIgJgHIgGgFQgDgCgBgFQgBgFAAgEQgBgLAHgGQAHgGAJAAIAGAAIAGADIADADIADAEIADAFIABAEIAAAFIgQADIAAgEIgBgFIgBgDIgCgBIgCgBQgCAAgBACQgCACAAAEIABAEIACAEIABADIABACIAKAIIAFAEIAFAFIADAIIAAAIQABAKgHAGQgGAGgLAAQgJAAgHgGg");
	this.shape_19.setTransform(-12.3,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE6DF").s().p("AAKAsIgDgUIgNAAIgCAUIgSAAIAShXIARAAIASBXgAgEANIAJAAIgFghg");
	this.shape_20.setTransform(-18.1,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE6DF").s().p("AAHAsIAAgnIgOAAIAAAnIgSAAIAAhXIASAAIAAAkIAOAAIAAgkIATAAIAABXg");
	this.shape_21.setTransform(-24.3,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAE6DF").s().p("AgHAsIAAgkIgRgzIARAAIAHAgIAJggIARAAIgRAzIAAAkg");
	this.shape_22.setTransform(-33,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAE6DF").s().p("AgIAsIAAhJIgNAAIAAgOIAsAAIAAAOIgPAAIAABJg");
	this.shape_23.setTransform(-38.1,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAE6DF").s().p("AgIAsIAAhXIAQAAIAABXg");
	this.shape_24.setTransform(-42.1,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAE6DF").s().p("AgQAnQgGgIAAgOIAPgDQABAJACAEQACAEACABQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAQACgCAAgEQAAgFgCgEQgDgDgDgFIgJgHIgGgFQgCgCgCgFQgCgFABgEQAAgLAGgGQAHgGAJAAIAGAAIAGADIADADIAEAEIACAFIABAEIAAAFIgQADIAAgEIgBgFIgBgDIgCgBIgCgBQgCAAgBACQgCACAAAEIABAEIABAEIACADIACACIAJAIIAFAEIAFAFIACAIIABAIQABAKgHAGQgGAGgKAAQgLAAgGgGg");
	this.shape_25.setTransform(-46.4,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE6DF").s().p("AAIAsIgIgoIgHAAIAAAoIgSAAIAAhXIAWAAIALABQAFABAEADQAEADACAEQACAFAAAGQAAAJgDAGQgCAFgGAAIAMAsgAgHgFIAEAAQAGAAACgDQADgDAAgHQAAgHgCgDQgDgDgEAAIgGAAg");
	this.shape_26.setTransform(-52.3,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAE6DF").s().p("AgSAsIAAhXIAlAAIAAANIgTAAIAAAXIAOAAIAAALIgOAAIAAAcIATAAIAAAMg");
	this.shape_27.setTransform(-57.8,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAE6DF").s().p("AgIAsIgRhXIAQAAIAJA7IAJg7IARAAIgRBXg");
	this.shape_28.setTransform(-63.2,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAE6DF").s().p("AgIAsIAAhXIAQAAIAABXg");
	this.shape_29.setTransform(-67.6,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAE6DF").s().p("AALAsIgSgvIAAAvIgPAAIAAhXIAMAAIASAsIAAgsIAPAAIAABXg");
	this.shape_30.setTransform(-72.3,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE6DF").s().p("AgLArQgFgCgDgEIgEgJIgBgNIAAg6IARAAIAAA8IABAEIAAAEIACADIACACIACABIADgBIACgCIACgDIAAgEIAAgEIAAg8IASAAIAAA6QAAAHgBAGQgBAFgDAEQgDAEgFACQgFACgHAAQgGAAgFgCg");
	this.shape_31.setTransform(-78.5,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAE6DF").s().p("AgYAsIAAhXIAWAAQAGAAAGACQAFABAEADQADAEABAFQACAFAAAIIAAAeQAAAIgCAFQgBAFgDAEQgEADgFACQgFACgHAAgAgGAgIAEAAIACgBIACAAIACgBIABgDIABgCIAAgCIAAgDIAAgEIAAghIAAgFIgBgEIgBgDIgEAAIgCgBIgEAAg");
	this.shape_32.setTransform(-87.4,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_33.setTransform(-93.8,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_34.setTransform(-100.1,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAE6DF").s().p("AAIAsIgIg3IgHA3IgPAAIgMhXIAPAAIAHA0IAIg0IAJAAIAIA0IAHg0IAPAAIgMBXg");
	this.shape_35.setTransform(-107.1,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE6DF").s().p("AgMArQgEgCgDgEIgEgKIgBgNIAAgbIAAgKIADgJIAFgHQADgCAEgCQAFgBAEAAQAHAAAFABQAFADADADIAEAIQABAFAAAGIAAAFIgRAAIAAgGIgBgEIAAgEIgBgCIgDgBIgDgBIgCABIgCABIgBADIgBAEIAAAEIAAAlQAAAGACAEQACADACAAQAFAAACgDQACgEAAgHIAAgJIgJAAIAAgJIAZAAIAAAsIgLAAIgCgIQgEAJgIAAQgHAAgFgCg");
	this.shape_36.setTransform(-114.2,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EAE6DF").s().p("AALAsIgSgvIAAAvIgPAAIAAhXIAMAAIASAsIAAgsIAPAAIAABXg");
	this.shape_37.setTransform(-120.4,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EAE6DF").s().p("AgLArQgFgBgDgEQgDgFgCgFIgBgMIAAgfIABgNQACgFADgEQADgDAFgCQAFgCAGAAQANAAAHAHQAGAHAAAPIAAAfQAAAOgGAIQgHAHgNAAQgGAAgFgCgAgCgeIgCABIgCADIAAADIAAADIAAAoIAAAEIAAADIACADIACACIACAAIADAAIACgCIABgDIABgDIAAgEIAAgoIAAgDIgBgEIgBgCIgCgBIgDgBIgCABg");
	this.shape_38.setTransform(-126.5,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EAE6DF").s().p("AgSAsIAAhXIASAAIAABLIATAAIAAAMg");
	this.shape_39.setTransform(-131.8,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-10.1,300.1,19);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgMAMIAAgYIAZAAIAAAYg");
	this.shape.setTransform(67.4,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgNBIIAAh6IgXAAIAAgVIBJAAIAAAVIgXAAIAAB6g");
	this.shape_1.setTransform(61.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AATBIIgfhOIAABOIgZAAIAAiPIAUAAIAfBJIAAhJIAYAAIAACPg");
	this.shape_2.setTransform(52.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AgeBIIAAiPIA9AAIAAAUIggAAIAAAnIAYAAIAAASIgYAAIAAAuIAgAAIAAAUg");
	this.shape_3.setTransform(43.8,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AgoBIIAAiPIAjAAQAMAAAJACQAKADAFAFQAGAGACAJQACAIAAAMIAAAzQAAANgCAIQgCAJgGAGQgFAGgKADQgIACgMAAgAgLA0IAHAAIAEgBIAEgBIACgCIACgCIACgEIABgEIAAgFIAAgGIAAg4IAAgIIgCgGIgDgEIgFgDIgFgBIgHAAg");
	this.shape_4.setTransform(34.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_5.setTransform(26.8,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgbA/QgKgLgBgXIAagFQAAAOADAHQAEAHAFAAQAFAAADgEQACgDAAgFQAAgJgEgGQgEgGgGgHIgPgMIgKgJQgEgFgCgHQgDgHAAgIQAAgSALgJQAKgKARAAIALABIAJADQADACADAEIAFAGIADAIIABAIIABAIIgZAEIgBgHIgBgGIgCgFIgDgDQgCgCgCABQgEAAgDADQgCAEAAAFIAAAHIADAGIAEAFIADAFIAQANIAIAGIAHAKIAFALQACAHAAAHQAAAQgKAKQgLAKgRAAQgSAAgKgLg");
	this.shape_6.setTransform(19.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AgeBIIAAiPIA9AAIAAAUIggAAIAAAnIAYAAIAAASIgYAAIAAAuIAgAAIAAAUg");
	this.shape_7.setTransform(11.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AANBIIgPhBIgKAAIAABBIgeAAIAAiPIAlAAQAJAAAJABQAIACAHAEQAGAFADAHQAEAIAAALQAAAOgEAJQgEAJgKACIAUBHgAgMgJIAHAAQAJAAAEgFQAFgGAAgLQAAgKgEgFQgEgFgIAAIgJAAg");
	this.shape_8.setTransform(2.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AgoBIIAAiPIArAAQAmAAAAApQAAAMgDAIQgDAIgGACQgFAFgHACQgHACgKAAIgLAAIAAA/gAgLgKIAKAAQAIAAADgEQADgFAAgLIAAgJIgCgGQgCgDgDgBQgEgCgDAAIgKAAg");
	this.shape_9.setTransform(-7.8,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgeBIIAAiPIA9AAIAAAUIggAAIAAAnIAYAAIAAASIgYAAIAAAuIAgAAIAAAUg");
	this.shape_10.setTransform(-21.2,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgSBHQgIgEgFgGQgFgHgCgJQgCgIAAgMIAAgxQAAgMACgJQACgIAFgHQAFgHAIgDQAJgDAKAAQALAAAIADQAIADAFAFQAEAGACAHQACAIAAAKIAAAMIgcAAIAAgNIAAgEIgBgDIAAgDIAAgDIgBgCIgCgCIgCgCIgDgBIgDAAQgCAAgCABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIgBAGIAAAGIAAA/QAAALADAFQACAFAGAAIAFgBIADgCIACgDIABgFIAAgEIABgGIAAgOIAcAAIAAAMQAAAKgBAIQgDAIgEAGQgEAGgJADQgIADgLAAQgKAAgJgDg");
	this.shape_11.setTransform(-30.4,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_12.setTransform(-38,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgOBIIgbiPIAaAAIAPBhIAPhhIAbAAIgcCPg");
	this.shape_13.setTransform(-45.3,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgNBIIAAh6IgXAAIAAgVIBJAAIAAAVIgXAAIAAB6g");
	this.shape_14.setTransform(-58.5,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAQBIIgRguIgRAuIgZAAIAdhMIgchDIAcAAIAPAqIAPgqIAZAAIgaBIIAdBHg");
	this.shape_15.setTransform(-67,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgeBIIAAiPIA9AAIAAAUIggAAIAAAnIAYAAIAAASIgYAAIAAAuIAgAAIAAAUg");
	this.shape_16.setTransform(-75.2,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AATBIIgfhOIAABOIgZAAIAAiPIAUAAIAfBJIAAhJIAYAAIAACPg");
	this.shape_17.setTransform(-84.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-14.2,300,28.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAiQgEgCgEgEQgEgEgCgGQgCgGAAgLQAAgFACgIQACgHADgFQAEgFAGgDQAGgDAGABIAGAAIAGABIAFADIAEADIgIAMIgDgCIgDgCIgEgCIgEAAIgDACIgFADIgDAFIgBAGIAGgCQADgCAEAAQAFAAAEACIAIADQADAEACABQACAFAAAFQAAAGgCAEQgCAFgDADQgEADgFACQgFABgGABQgFgBgFgBgAgHAEQgDADgBAFQABAEADADQADADAEAAQAFAAADgDQAEgDAAgEQAAgFgEgDQgCgCgGAAQgEAAgDACg");
	this.shape.setTransform(222.6,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAjIAAg1IgLADIgDgNIASgGIALAAIAABFg");
	this.shape_1.setTransform(216.9,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAhQgFgDgEgEQgEgGgDgGQgCgHAAgHQAAgGACgHQADgGAEgFQAEgFAGgDQAGgDAFABQAHgBAFADQAGADAEAEQAEAFADAHQACAGAAAHQAAAHgCAGQgDAIgEAEQgEAFgGADQgFACgHABQgGgBgGgCgAgFgTIgFAEIgCAIQgCAEAAADQAAAFACAEIACAHQADADADABQACACACAAQADAAADgCIAFgEIACgHQACgEAAgFQAAgDgCgEIgCgIQgCgDgEgBQgCgCgDAAQgCAAgDACg");
	this.shape_2.setTransform(211.5,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAjIAAgMIAXgTIAEgEIADgDIACgEIABgEQAAgEgDgDQgCgCgEAAQgCAAgEACIgHAHIgKgIIAFgHIAFgEIAHgDIAHgBQAFAAAEACQAFABADADQADACACAFQACADAAAGIAAAAIgBAIIgEAEIgGAGIgIAHIgJAJIAcAAIAAANg");
	this.shape_3.setTransform(204.6,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAyAAIAAAOIgjAAIAAAOIAfAAIAAAMIgfAAIAAAPIAkAAIAAAOg");
	this.shape_4.setTransform(195.4,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAjIAAg2IgWAAIAAgPIA5AAIAAAPIgWAAIAAA2g");
	this.shape_5.setTransform(188.6,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAjIgHgQIgbAAIgHAQIgQAAIAfhFIALAAIAfBFgAgIAFIARAAIgJgUg");
	this.shape_6.setTransform(181.4,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAjIAAhFIAeAAQAMAAAGAHQAFAEAAAIIAAAAIAAAFIgCAEIgDADIgEADQAGAAAEAEQADAEAAAHIAAABQAAAEgCAEQgCAEgDABQgDADgFACIgLABgAgNAVIAQAAQAFAAADgCQADgCAAgEIAAAAQAAgDgDgCQgDgCgGAAIgPAAgAgNgFIANAAQAEAAADgCQADgBAAgFIAAAAQAAgDgDgCQgCgCgFAAIgNAAg");
	this.shape_7.setTransform(174.1,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAyAAIAAAOIgjAAIAAAOIAfAAIAAAMIgfAAIAAAPIAkAAIAAAOg");
	this.shape_8.setTransform(167.1,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAjIAAhFIAbAAQAHABAGACQAHADAFAEQAFAFADAGQADAHAAAGQAAAHgDAGQgDAGgFAGQgFAEgHADQgGACgHABgAgPAUIALAAQAEABADgCIAHgEIAEgHQACgEAAgEQAAgDgCgEQgCgEgCgDQgDgDgEgBQgDgBgEAAIgLAAg");
	this.shape_9.setTransform(159.8,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAPAAIAAA2IAgAAIAAAPg");
	this.shape_10.setTransform(149.9,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAjIgHgQIgbAAIgHAQIgQAAIAfhFIALAAIAfBFgAgIAFIAQAAIgIgUg");
	this.shape_11.setTransform(142.6,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_12.setTransform(137,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAjIAAg2IgVAAIAAgPIA4AAIAAAPIgVAAIAAA2g");
	this.shape_13.setTransform(132.1,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARAjIgggrIAAArIgOAAIAAhFIANAAIAfAqIAAgqIAQAAIAABFg");
	this.shape_14.setTransform(124.9,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAzAAIAAAOIgkAAIAAAOIAfAAIAAAMIgfAAIAAAPIAkAAIAAAOg");
	this.shape_15.setTransform(117.7,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAjIAAhFIAbAAQAHABAGACQAHADAFAEQAFAFADAGQADAHAAAGQAAAHgDAGQgDAGgFAGQgFAEgHADQgGACgHABgAgPAUIALAAQAEABADgCIAHgEIAEgHQACgEAAgEQAAgDgCgEQgCgEgCgDQgDgDgEgBQgDgBgEAAIgLAAg");
	this.shape_16.setTransform(110.5,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_17.setTransform(104.7,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAhQgIgDgGgGIAJgLQAFAFAFABQAFADAEAAQAFAAACgCQADgBAAgDIAAgBIgBgDIgCgCIgEgBIgFgDIgKgDIgHgDQgDgBgCgEQgBgDAAgFIAAgBQAAgEABgEQACgEADgCQAEgEAEgBQAFgCAEABQAHgBAGADQAHACAFAFIgIALIgJgFQgFgCgDAAQgEAAgCACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAAAIABADIACADIAFACIAFABIAKAEIAHACIAEAGQABADAAAEIAAABQAAAFgCAEIgFAHIgIAEQgFABgFABQgGAAgIgDg");
	this.shape_18.setTransform(99.8,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAyAAIAAAOIgjAAIAAAOIAfAAIAAAMIgfAAIAAAPIAkAAIAAAOg");
	this.shape_19.setTransform(93.5,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAjIgNgXIgBAAIgLAAIAAAXIgQAAIAAhFIAeAAQANAAAIAIQAGAFAAALIAAAAQAAAJgFACQgEAGgGACIARAagAgNAAIANAAQAGAAADgCQADgDAAgEQAAgFgDgDQgDgCgGAAIgNAAg");
	this.shape_20.setTransform(86.6,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAjIAAhFIAaAAQAHABAEABQAFACAEADQADADACAFQACAEAAAGIAAAAQAAAGgCADQgCAEgEAEQgEADgFABQgFABgFAAIgLAAIAAAWgAgLAAIALAAQAFAAADgBQADgDAAgFQAAgFgDgDQgDgCgFAAIgLAAg");
	this.shape_21.setTransform(79.6,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAyAAIAAAOIgjAAIAAAOIAfAAIAAAMIgfAAIAAAPIAkAAIAAAOg");
	this.shape_22.setTransform(69.8,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAhQgHgDgFgEQgFgGgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAFgFAHgDQAGgDAHABIAIAAIAIACIAGAEIAFAEIgKALQgEgDgEgCQgEgCgGgBIgGACIgGAFIgEAHQgCAEAAADQAAAEACAEIAEAHQACADAEACQADABADAAQAGAAAFgCIAIgGIAKAKIgGAFIgGAFIgIACIgJABQgGgBgGgCg");
	this.shape_23.setTransform(62.7,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_24.setTransform(57.2,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAjIgchFIARAAIAQAwIASgwIAQAAIgcBFg");
	this.shape_25.setTransform(51.8,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_26.setTransform(199.9,4.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAgQgIgCgGgGIAJgLQAFAEAFADQAFACAEAAQAFAAACgCQADgBAAgEIAAAAIgBgDIgCgBIgEgCIgFgDIgKgDIgHgDQgDgBgCgDQgBgEAAgFIAAAAQAAgFABgEQACgEADgDQAEgDAEgBQAFgBAEAAQAHAAAGACQAHACAFAFIgIALIgJgFQgFgCgDAAQgEAAgCACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAABIABACIACACIAFADIAFACIAKADIAHACIAEAFQABAEAAAEIAAABQAAAFgCAEIgFAHIgIAEQgFACgFAAQgGgBgIgDg");
	this.shape_27.setTransform(195.2,1.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_28.setTransform(190.7,4.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAbQgIgHAAgQIAAgmIAPAAIAAAmQAAAIAEAEQAEAFAGAAQAHAAADgFQAFgDAAgJIAAgmIAPAAIAAAmQAAAIgDAFQgCAHgDADQgFAEgFACQgGACgGAAQgNAAgIgIg");
	this.shape_29.setTransform(185.5,1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAiIAAgbIgbgoIASAAIAPAcIARgcIARAAIgbAnIAAAcg");
	this.shape_30.setTransform(175.1,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAPAAIAAA2IAgAAIAAANg");
	this.shape_31.setTransform(168.7,1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARAiIgfgqIAAAqIgPAAIAAhDIANAAIAfAoIAAgoIAQAAIAABDg");
	this.shape_32.setTransform(161.4,1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAhQgIgDgEgFQgFgEgDgIQgCgGgBgHQABgGACgHQADgGAFgFQAFgFAHgDQAHgCAGAAQAHAAAIACQAGADAFAFQAFAFADAGQACAHAAAGQAAAHgCAGQgDAHgFAFQgFAFgGADQgIADgHAAQgGAAgHgDgAgHgTQgEACgCADQgEADgBAEQgCAEABADQgBAEACAEQABAEAEADQACADAEACQAEABADAAQAEAAAEgBQAEgCADgDQADgDABgEQACgEAAgEQAAgDgCgEQgBgEgDgDQgDgDgEgCQgEgCgEAAQgDABgEABg");
	this.shape_33.setTransform(153.2,1.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAiIAAhDIAyAAIAAANIgjAAIAAAPIAfAAIAAALIgfAAIAAAPIAkAAIAAANg");
	this.shape_34.setTransform(142.8,1.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOAiIAAgcIgbAAIAAAcIgPAAIAAhDIAPAAIAAAbIAbAAIAAgbIAPAAIAABDg");
	this.shape_35.setTransform(135.5,1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGAiIAAg2IgWAAIAAgNIA5AAIAAANIgWAAIAAA2g");
	this.shape_36.setTransform(128.4,1.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAiIAAhDIAzAAIAAANIgkAAIAAAQIAgAAIAAALIggAAIAAAbg");
	this.shape_37.setTransform(119.1,1.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAhQgIgDgEgFQgFgEgDgIQgCgGgBgHQABgGACgHQADgGAFgFQAFgFAHgDQAHgCAGAAQAHAAAIACQAGADAFAFQAFAFADAGQACAHAAAGQAAAHgCAGQgDAHgFAFQgFAFgGADQgIADgHAAQgGAAgHgDgAgHgTQgEACgCADQgEADgBAEQgCAEABADQgBAEACAEQABAEAEADQACADAEACQAEABADAAQAEAAAEgBQAEgCADgDQADgDABgEQACgEAAgEQAAgDgCgEQgBgEgDgDQgDgDgEgCQgEgCgEAAQgDABgEABg");
	this.shape_38.setTransform(111.4,1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAiIAAhDIAyAAIAAANIgjAAIAAAPIAfAAIAAALIgfAAIAAAPIAkAAIAAANg");
	this.shape_39.setTransform(100.9,1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAiIAAgrIgTAcIAAAAIgSgcIAAArIgQAAIAAhDIARAAIARAdIASgdIARAAIAABDg");
	this.shape_40.setTransform(93.1,1.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAhQgIgDgEgFQgFgEgDgIQgCgGgBgHQABgGACgHQADgGAFgFQAFgFAHgDQAHgCAGAAQAHAAAHACQAHADAFAFQAFAFADAGQACAHAAAGQAAAHgCAGQgDAHgFAFQgFAFgHADQgHADgHAAQgGAAgHgDgAgHgTQgEACgCADQgEADgBAEQgBAEgBADQABAEABAEQABAEAEADQACADAEACQAEABADAAQAEAAAEgBQAEgCACgDQADgDACgEQACgEAAgEQAAgDgCgEQgCgEgDgDQgCgDgEgCQgEgCgEAAQgEABgDABg");
	this.shape_41.setTransform(84.5,1.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAiIAAgcIgaAAIAAAcIgPAAIAAhDIAPAAIAAAbIAaAAIAAgbIAQAAIAABDg");
	this.shape_42.setTransform(76.4,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-6,300,37.3);


// stage content:
(lib._300x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(461));

	// Layer 1
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(223.5,63.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(205).to({_off:false},0).to({y:43.3,alpha:1},14).wait(230).to({alpha:0},11).wait(1));

	// Layer 17
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(434,45,1,1,0,0,0,122,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({_off:false},0).to({x:313},17).wait(237).to({alpha:0},11).wait(1));

	// Layer 16
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(39,57.9,1,1,0,0,0,80,27.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(187).to({_off:false},0).to({y:37.9,alpha:1},14).wait(248).to({alpha:0},11).wait(1));

	// Layer 14
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(524,102.7,1,1,0,0,0,364,19.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).to({y:52.7,alpha:1},14).wait(117).to({alpha:0},12).wait(275));

	// Layer 15
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(524,84.7,1,1,0,0,0,364,19.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({y:34.7,alpha:1},16).wait(124).to({alpha:0},12).wait(275));

	// Layer 13
	this.instance_6 = new lib.Symbol6copy();
	this.instance_6.setTransform(377.5,32.5,1,1,0,0,0,72.5,32.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({x:346.5},18).wait(140).to({x:367.5},0).to({x:397.5},12).wait(263).to({alpha:0},11).wait(1));

	// Layer 12
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(42.5,32.5,1,1,0,0,0,72.5,32.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({x:72.5},18).wait(140).to({x:42.5},12).wait(263).to({alpha:0},11).wait(1));

	// Layer 11
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},15).wait(434).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,25,300,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;