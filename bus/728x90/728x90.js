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
		{src:"_728_banner.png", id:"_728_banner"},
		{src:"_728_bg.jpg", id:"_728_bg"},
		{src:"_728_border.png", id:"_728_border"},
		{src:"_728_flag.png", id:"_728_flag"}
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



(lib._728_banner = function() {
	this.initialize(img._728_banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,90);


(lib._728_bg = function() {
	this.initialize(img._728_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728_flag = function() {
	this.initialize(img._728_flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,65);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_flag();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,65);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_banner();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,90);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AAMBEIgOg+IgJAAIAAA+IgcAAIAAiHIAjAAQAIAAAJABQAHACAGAEQAHAEACAHQAEAIAAAKQAAANgFAJQgDAIgJACIATBDgAgLgJIAHAAQAIAAAEgFQAEgEABgLQAAgKgFgFQgDgEgIAAIgIAAg");
	this.shape.setTransform(550.2,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgSBCQgIgDgEgGQgEgGgCgIQgCgJAAgLIAAhbIAbAAIAABeIABAHIABAGIACAFIADADIAEABIAFgBIAEgDIACgFIABgGIAAgHIAAheIAbAAIAABbQAAALgBAJQgCAIgFAGQgEAGgIADQgIADgLAAQgKAAgIgDg");
	this.shape_1.setTransform(540.2,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_2.setTransform(530.4,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AAMBEIgOg+IgJAAIAAA+IgcAAIAAiHIAjAAQAIAAAJABQAHACAGAEQAHAEACAHQAEAIAAAKQAAANgFAJQgDAIgJACIASBDgAgLgJIAHAAQAIAAAEgFQAEgEABgLQAAgKgFgFQgDgEgIAAIgIAAg");
	this.shape_3.setTransform(516.6,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_4.setTransform(506.6,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgcBEIAAiHIA5AAIAAATIgdAAIAAAlIAYAAIAAARIgYAAIAAA+g");
	this.shape_5.setTransform(498.4,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgZA8QgKgLgBgWIAYgEQABANADAGQADAHAFAAQAFAAACgDQACgEAAgFQAAgIgDgFQgEgGgGgHIgOgLIgJgIQgEgFgCgGQgDgHAAgIQAAgRAKgJQAKgJAQAAQAFAAAFABIAIADIAGAFIAFAGIADAIIABAHIABAIIgYAEIgBgHIAAgGIgCgFIgEgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgEAAgCADQgDADAAAFIABAHIADAGIADAEIADAFIAPAMIAIAGIAGAJQADAFACAGQACAGAAAHQAAAPgKAJQgKAKgQAAQgRAAgJgKg");
	this.shape_6.setTransform(486.1,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AASBEIgdhKIAABKIgYAAIAAiHIATAAIAdBFIAAhFIAXAAIAACHg");
	this.shape_7.setTransform(477,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_8.setTransform(467.4,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("AgMBEIAAiHIAaAAIAACHg");
	this.shape_9.setTransform(460.1,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgNBEIAAhzIgVAAIAAgUIBGAAIAAAUIgXAAIAABzg");
	this.shape_10.setTransform(454,20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgZA8QgKgLgBgWIAYgEQABANADAGQADAHAFAAQAFAAACgDQACgEAAgFQAAgIgDgFQgEgGgGgHIgOgLIgJgIQgEgFgCgGQgDgHAAgIQAAgRAKgJQAKgJAQAAQAFAAAFABIAIADIAGAFIAFAGIADAIIABAHIABAIIgYAEIgBgHIAAgGIgCgFIgEgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgEAAgCADQgDADAAAFIABAHIADAGIADAEIADAFIAPAMIAIAGIAGAJQADAFACAGQACAGAAAHQAAAPgKAJQgKAKgQAAQgRAAgJgKg");
	this.shape_11.setTransform(446.1,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgdBEIAAiHIA6AAIAAATIgeAAIAAAkIAXAAIAAASIgXAAIAAArIAfAAIAAATg");
	this.shape_12.setTransform(438.3,20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgSBCQgIgDgEgGQgEgGgCgIQgCgJAAgLIAAhbIAbAAIAABeIABAHIABAGIACAFIADADIAEABIAFgBIAEgDIACgFIABgGIAAgHIAAheIAbAAIAABbQAAALgBAJQgCAIgFAGQgEAGgIADQgIADgLAAQgKAAgIgDg");
	this.shape_13.setTransform(429.3,20.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AAPBJQgIgIgFgIIgCAAQgKAAgIgDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKAMQAJALAAAWIAAAxQAAAggSAJQAIAJAFADIgFASQgGgDgJgHgAgEg9QAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAHIAAA+IAAAGIABAEIACAFIADACIAEABIAFgBIAEgCIACgFIABgEIAAgGIAAg+IAAgHIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_14.setTransform(419.6,22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AANBEIgNhVIgMBVIgXAAIgSiHIAXAAIAKBSIAMhSIARAAIANBRIAJhRIAXAAIgSCHg");
	this.shape_15.setTransform(404.5,20.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgdBEIAAiHIA6AAIAAATIgeAAIAAAkIAXAAIAAASIgXAAIAAArIAfAAIAAATg");
	this.shape_16.setTransform(395,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AgcBEIAAiHIA5AAIAAATIgdAAIAAAlIAYAAIAAARIgYAAIAAA+g");
	this.shape_17.setTransform(387.7,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE6DF").s().p("AAQBEIgFgeIgUAAIgFAeIgbAAIAbiHIAdAAIAbCHgAgHAUIAPAAIgIg0g");
	this.shape_18.setTransform(375,20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAE6DF").s().p("AgZA8QgKgLgBgWIAYgEQABANADAGQADAHAFAAQAFAAACgDQACgEAAgFQAAgIgDgFQgEgGgGgHIgOgLIgJgIQgEgFgCgGQgDgHAAgIQAAgRAKgJQAKgJAQAAQAFAAAFABIAIADIAGAFIAFAGIADAIIABAHIABAIIgYAEIgBgHIAAgGIgCgFIgEgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgEAAgCADQgDADAAAFIABAHIADAGIADAEIADAFIAPAMIAIAGIAGAJQADAFACAGQACAGAAAHQAAAPgKAJQgKAKgQAAQgRAAgJgKg");
	this.shape_19.setTransform(362.1,20.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE6DF").s().p("AAQBEIgFgeIgUAAIgFAeIgbAAIAbiHIAdAAIAbCHgAgHAUIAPAAIgIg0g");
	this.shape_20.setTransform(353.1,20.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAE6DF").s().p("AAMBEIAAg9IgXAAIAAA9IgcAAIAAiHIAcAAIAAA4IAXAAIAAg4IAcAAIAACHg");
	this.shape_21.setTransform(343.5,20.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAE6DF").s().p("AgMBEIAAg2IgbhRIAaAAIANAwIAOgwIAaAAIgbBRIAAA2g");
	this.shape_22.setTransform(330,20.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAE6DF").s().p("AgNBEIAAhzIgVAAIAAgUIBGAAIAAAUIgXAAIAABzg");
	this.shape_23.setTransform(322.1,20.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAE6DF").s().p("AgNBEIAAiHIAaAAIAACHg");
	this.shape_24.setTransform(316,20.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAE6DF").s().p("AgZA8QgKgLgBgWIAYgEQABANADAGQADAHAFAAQAFAAACgDQACgEAAgFQAAgIgDgFQgEgGgGgHIgOgLIgJgIQgEgFgCgGQgDgHAAgIQAAgRAKgJQAKgJAQAAQAFAAAFABIAIADIAGAFIAFAGIADAIIABAHIABAIIgYAEIgBgHIAAgGIgCgFIgEgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgEAAgCADQgDADAAAFIABAHIADAGIADAEIADAFIAPAMIAIAGIAGAJQADAFACAGQACAGAAAHQAAAPgKAJQgKAKgQAAQgRAAgJgKg");
	this.shape_25.setTransform(309.4,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAE6DF").s().p("AAMBEIgOg+IgKAAIAAA+IgbAAIAAiHIAjAAQAIAAAIABQAIACAHAEQAFAEAEAHQADAIAAAKQAAANgFAJQgDAIgKACIATBDgAgMgJIAIAAQAIAAAEgFQAEgEAAgLQAAgKgDgFQgEgEgIAAIgJAAg");
	this.shape_26.setTransform(300.2,20.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAE6DF").s().p("AgdBEIAAiHIA6AAIAAATIgeAAIAAAkIAXAAIAAASIgXAAIAAArIAfAAIAAATg");
	this.shape_27.setTransform(291.7,20.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAE6DF").s().p("AgNBEIgaiHIAYAAIAPBcIAPhcIAZAAIgaCHg");
	this.shape_28.setTransform(283.3,20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAE6DF").s().p("AgNBEIAAiHIAaAAIAACHg");
	this.shape_29.setTransform(276.4,20.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAE6DF").s().p("AASBEIgdhKIAABKIgYAAIAAiHIATAAIAdBFIAAhFIAXAAIAACHg");
	this.shape_30.setTransform(269.2,20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAE6DF").s().p("AgSBCQgIgDgEgGQgEgGgCgIQgCgJAAgLIAAhbIAbAAIAABeIABAHIABAGIACAFIADADIAEABIAFgBIAEgDIACgFIABgGIAAgHIAAheIAbAAIAABbQAAALgBAJQgCAIgFAGQgEAGgIADQgIADgLAAQgKAAgIgDg");
	this.shape_31.setTransform(259.6,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAE6DF").s().p("AgmBEIAAiHIAiAAQALAAAJACQAIACAGAGQAFAFACAIQACAIAAAMIAAAwQAAALgCAJQgCAIgFAFQgGAGgIADQgJACgKAAgAgKAxIAGAAIAEgBIADgBIADgBIACgDIABgDIABgEIAAgFIAAgFIAAg1IAAgIIgBgGQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAAAgBgBIgFgCIgFgBIgGAAg");
	this.shape_32.setTransform(245.7,20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_33.setTransform(235.9,20.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_34.setTransform(226.1,20.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAE6DF").s().p("AANBEIgNhVIgMBVIgXAAIgSiHIAXAAIAKBSIAMhSIARAAIANBRIAJhRIAYAAIgSCHg");
	this.shape_35.setTransform(215.3,20.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAE6DF").s().p("AgTBDQgHgDgEgHQgFgGgCgJQgCgIAAgMIAAgrQAAgJACgHQABgIADgGQADgGAEgEQAFgEAHgCQAHgCAHAAQALAAAHADQAIACAFAGQAEAFACAHQACAIAAAJIAAAIIgbAAIAAgJIAAgGIgBgFIgCgFIgDgCIgGgBQgBAAgDABIgDADIgCAFIgBAFIAAAHIAAA5QAAAKADAGQACAFAGAAQAHAAADgGQADgFAAgLIAAgNIgNAAIAAgQIAnAAIAABFIgTAAIgCgMQgGAOgOAAQgKAAgIgDg");
	this.shape_36.setTransform(204.4,20.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EAE6DF").s().p("AASBEIgdhKIAABKIgYAAIAAiHIATAAIAdBFIAAhFIAXAAIAACHg");
	this.shape_37.setTransform(194.8,20.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EAE6DF").s().p("AgSBDQgIgDgEgGQgFgGgCgIQgCgIAAgLIAAgxQAAgLACgIQACgIAFgGQAEgGAIgDQAIgDAKAAQAVAAAKALQAJAMAAAWIAAAxQAAAWgJAMQgKALgVAAQgKAAgIgDgAgEgwQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAEIgBAEIAAAGIAAA+IAAAGIABAFIACAEIADADIAEABIAFgBIAEgDIACgEIABgFIAAgGIAAg+IAAgGIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_38.setTransform(185.3,20.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EAE6DF").s().p("AgdBEIAAiHIAcAAIAAB0IAfAAIAAATg");
	this.shape_39.setTransform(177.1,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,728,27.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE6DF").s().p("AgRATIAAgkIAjAAIAAAkg");
	this.shape.setTransform(475.7,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE6DF").s().p("AgUBpIAAixIghAAIAAggIBrAAIAAAgIghAAIAACxg");
	this.shape_1.setTransform(467,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE6DF").s().p("AAbBpIgthzIAABzIglAAIAAjRIAeAAIAtBsIAAhsIAkAAIAADRg");
	this.shape_2.setTransform(454.2,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE6DF").s().p("AgtBpIAAjRIBaAAIAAAeIgvAAIAAA4IAkAAIAAAcIgkAAIAABCIAwAAIAAAdg");
	this.shape_3.setTransform(441.8,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE6DF").s().p("Ag6BpIAAjRIAzAAQARAAAOAEQANAEAIAIQAIAIAEAMQACAMAAASIAABKQAAATgCAMQgEAMgIAJQgIAJgNAEQgNAEgRAAgAgPBLIAJAAIAGgBIAFgBIAFgDIADgEIABgFIABgGIABgHIAAgIIAAhSIgBgMIgBgJQgCgEgCgCQgDgCgEgBQgDgCgHAAIgIAAg");
	this.shape_4.setTransform(428.4,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE6DF").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_5.setTransform(417.1,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE6DF").s().p("AgoBbQgOgQgCghIAlgHQABATAFALQAFAKAJAAQAHAAADgFQADgFAAgHQAAgNgEgJQgGgIgKgLIgXgRQgIgIgFgGQgGgHgDgJQgEgKAAgNQAAgZAPgOQAPgOAZgBQAIABAIABIANAFIAJAIQAEAEADAFIADALIADAMIACAMIgmAFIAAgKIgCgJQgBgFgBgDQgCgCgDgBQgDgCgDAAQgGAAgFAFQgDAGAAAHQgBAFACAFIAFAJIAFAHIAFAGIAWAUIANAKQAFAGAFAHQAEAJADAIQACAKAAAKQAAAXgPAPQgPAPgYgBQgbAAgPgQg");
	this.shape_6.setTransform(407,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE6DF").s().p("AgtBpIAAjRIBaAAIAAAeIgvAAIAAA4IAkAAIAAAcIgkAAIAABCIAwAAIAAAdg");
	this.shape_7.setTransform(395,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAE6DF").s().p("AATBpIgWhfIgPAAIAABfIgrAAIAAjRIA1AAQAPAAAMADQAMACAJAHQAKAGAEALQAFALAAAQQAAAUgGANQgGANgOAEIAdBngAgSgOIAKAAQAOAAAGgHQAHgIAAgQQAAgPgGgHQgGgIgMAAIgNAAg");
	this.shape_8.setTransform(381.6,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE6DF").s().p("Ag7BpIAAjRIBAAAQA3AAAAA9QAAAQgEAMQgFALgIAFQgIAGgKADQgKADgOAAIgRAAIAABcgAgQgPIAOAAQAMAAAFgGQAFgHAAgQIgBgNIgDgJQgCgEgFgCQgFgCgGAAIgOAAg");
	this.shape_9.setTransform(367.1,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAE6DF").s().p("AgtBpIAAjRIBaAAIAAAeIgvAAIAAA4IAkAAIAAAcIgkAAIAABCIAwAAIAAAdg");
	this.shape_10.setTransform(347.8,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAE6DF").s().p("AgbBnQgMgGgHgKQgHgJgDgMQgDgNAAgRIAAhIQAAgRADgMQADgNAHgKQAHgJAMgFQAMgEAQgBQAQAAAMAFQAMAEAGAIQAHAIADALQADALAAAOIAAASIgqAAIAAgTIAAgGIAAgEIAAgFIgBgDIgCgEIgCgDIgDgCIgEgBIgFgBQgDAAgDACQgEACgCACQgCACgBAFIgBAIIAAAJIAABcQAAAQAEAHQADAIAJAAIAHgBQADgBACgDIADgEQABgCABgFIAAgHIAAgIIAAgUIAqAAIAAASQAAAOgDAMQgDALgGAIQgHAJgMAFQgLAEgRAAQgPAAgNgEg");
	this.shape_11.setTransform(334.5,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAE6DF").s().p("AgUBpIAAjRIApAAIAADRg");
	this.shape_12.setTransform(323.5,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAE6DF").s().p("AgVBpIgnjRIAkAAIAYCOIAXiOIAnAAIgpDRg");
	this.shape_13.setTransform(313,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAE6DF").s().p("AgUBpIAAixIghAAIAAggIBrAAIAAAgIghAAIAACxg");
	this.shape_14.setTransform(294,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAE6DF").s().p("AAXBpIgZhDIgYBDIglAAIAqhvIgohiIAoAAIAYA9IAUg9IAlAAIgnBqIArBng");
	this.shape_15.setTransform(281.8,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAE6DF").s().p("AgtBpIAAjRIBaAAIAAAeIgvAAIAAA4IAkAAIAAAcIgkAAIAABCIAwAAIAAAdg");
	this.shape_16.setTransform(269.9,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAE6DF").s().p("AAbBpIgthzIAABzIglAAIAAjRIAeAAIAtBsIAAhsIAkAAIAADRg");
	this.shape_17.setTransform(256.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,728,39.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDEEBD").s().p("AAAAtIgrAXIAIgxIgkgiIAzgHIAUgtIAWAtIAxAHIgkAiIAJAxg");
	this.shape.setTransform(298.1,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEEBD").s().p("AAAAtIgrAXIAJgxIgkgiIAxgHIAVgtIAWAtIAyAHIgkAiIAIAxg");
	this.shape_1.setTransform(187.1,60.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDEEBD").s().p("AgVBHQgLgEgHgHQgIgIgFgNQgEgNAAgWIAAAAQgBgPAEgPQAEgPAIgKQAIgLAMgGQAMgHAPAAIAOABIAMADIAKAGIAKAHIgRAZIgHgFIgHgEIgIgDIgIAAQgFAAgFADQgGACgDAEQgEAFgCAHIgDANIAMgHQAIgDAIAAQALAAAKADQAKAEAGAFQAIAHADAGQAFAIAAAMQgBAMgEAKQgEAIgIAHQgHAHgLAEQgKADgMABQgMAAgKgFgAgRAKQgHAGABAJIAAABQgBAKAHAFQAHAHAKAAQAMAAAHgHQAGgFAAgKIAAgBQAAgIgGgGQgIgHgLAAQgKABgHAFg");
	this.shape_2.setTransform(279.4,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDEEBD").s().p("AAABJIAAhxIgYAGIgHgaIApgMIAWAAIAACRg");
	this.shape_3.setTransform(267.3,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDEEBD").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_4.setTransform(260.6,67.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDEEBD").s().p("AANBJIAAgfIhGAAIgFgXIBOhbIAcAAIAABYIATAAIAAAaIgTAAIAAAfgAgYAQIAlAAIAAgsg");
	this.shape_5.setTransform(250.2,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDEEBD").s().p("AgaBGQgMgGgIgKQgJgLgEgNQgFgOAAgQIAAAAQAAgPAFgOQAFgNAIgLQAJgJAMgGQAMgHANAAQAOABAMAFQAMAGAJAKQAIALAFANQAFAOAAAPIAAAAQAAAQgFAOQgFAOgIAJQgJALgMAFQgMAHgOAAQgOgBgMgFgAgMgqQgGADgEAHQgEAGgCAIQgDAJAAAJIAAAAQAAAJADAJQACAJAEAGQAEAGAGAEQAGAEAGAAQAHAAAGgEQAGgDAEgHQAEgGACgIQACgJAAgKIAAAAQAAgIgCgJQgCgIgEgHQgFgGgGgDQgGgFgGAAQgGABgGADg");
	this.shape_6.setTransform(235.5,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDEEBD").s().p("AgPAQIAAgfIAgAAIAAAfg");
	this.shape_7.setTransform(224.8,67.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDEEBD").s().p("AgaBGQgMgGgIgKQgJgLgEgNQgFgOAAgQIAAAAQAAgPAFgOQAFgNAIgLQAJgJAMgGQAMgHANAAQAOABAMAFQAMAGAJAKQAIALAFANQAFAOAAAPIAAAAQAAAQgFAOQgFAOgIAJQgJALgMAFQgMAHgOAAQgOgBgMgFgAgMgqQgGADgEAHQgEAGgCAIQgDAJAAAJIAAAAQAAAJADAJQACAJAEAGQAEAGAGAEQAGAEAGAAQAHAAAGgEQAGgDAEgHQAEgGACgIQACgJAAgKIAAAAQAAgIgCgJQgCgIgEgHQgFgGgGgDQgGgFgGAAQgGABgGADg");
	this.shape_8.setTransform(214.1,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDEEBD").s().p("AAABJIAAhxIgYAGIgHgaIApgMIAWAAIAACRg");
	this.shape_9.setTransform(201.3,61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDEEBD").s().p("Ag2BJIAAiRIBsAAIAAAdIhNAAIAAAeIBEAAIAAAaIhEAAIAAAfIBOAAIAAAdg");
	this.shape_10.setTransform(417.1,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDEEBD").s().p("AgOBJIAAhzIgtAAIAAgeIB3AAIAAAeIgtAAIAABzg");
	this.shape_11.setTransform(402.9,36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDEEBD").s().p("AAsBJIgOghIg8AAIgNAhIgiAAIA/iRIAdAAIA/CRgAgSAMIAkAAIgSgug");
	this.shape_12.setTransform(387.8,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDEEBD").s().p("Ag9BJIAAiRIBDAAQAZAAANANQAKAKAAAPIAAABQAAAFgCAGQgBAEgDAFIgGAGIgIAFQAOADAGAIQAIAJAAAOQAAALgEAHQgEAIgHAFQgHAFgKACQgLADgMAAgAgdAsIAkAAQAKAAAHgDQAGgEAAgIQAAgIgFgFQgGgDgNAAIgjAAgAgdgMIAdAAQAJAAAGgFQAHgDAAgIIAAgBQAAgHgGgEQgFgEgLAAIgdAAg");
	this.shape_13.setTransform(372.4,36.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDEEBD").s().p("Ag2BJIAAiRIBsAAIAAAdIhNAAIAAAeIBEAAIAAAaIhEAAIAAAfIBOAAIAAAdg");
	this.shape_14.setTransform(357.7,36.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDEEBD").s().p("AhCBJIAAiRIA5AAQAPAAAPAGQAOAFALAKQAKAKAGANQAFAOAAAOIAAAAQAAAPgFAOQgGANgKAKQgLAJgOAHQgPAFgPAAgAgiAsIAZAAQAJAAAHgDQAIgEAGgGQAGgFADgJQAEgHAAgKIAAAAQAAgIgEgJQgDgIgGgFQgGgHgIgCQgHgEgJAAIgZAAg");
	this.shape_15.setTransform(342.4,36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDEEBD").s().p("AgzBJIAAiRIAgAAIAABzIBIAAIAAAeg");
	this.shape_16.setTransform(321.7,36.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDEEBD").s().p("AArBJIgNghIg8AAIgOAhIggAAIA/iRIAbAAIBACRgAgTAMIAlAAIgSgug");
	this.shape_17.setTransform(306.3,36.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDEEBD").s().p("AgPBJIAAiRIAfAAIAACRg");
	this.shape_18.setTransform(294.5,36.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDEEBD").s().p("AgPBJIAAhzIgtAAIAAgeIB5AAIAAAeIgtAAIAABzg");
	this.shape_19.setTransform(284.2,36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDEEBD").s().p("AAmBJIhGhcIAABcIggAAIAAiRIAeAAIBDBYIAAhYIAgAAIAACRg");
	this.shape_20.setTransform(269.1,36.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDEEBD").s().p("Ag2BJIAAiRIBtAAIAAAdIhOAAIAAAeIBEAAIAAAaIhEAAIAAAfIBOAAIAAAdg");
	this.shape_21.setTransform(254.1,36.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDEEBD").s().p("AhCBJIAAiRIA5AAQAPAAAPAGQAOAFALAKQAKAKAGANQAFAOAAAOIAAAAQAAAPgFAOQgGANgKAKQgLAJgOAHQgPAFgPAAgAgiAsIAZAAQAJAAAHgDQAIgEAGgGQAGgFADgJQAEgHAAgKIAAAAQAAgIgEgJQgDgIgGgFQgGgHgIgCQgHgEgJAAIgZAAg");
	this.shape_22.setTransform(238.8,36.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDEEBD").s().p("AgPBJIAAiRIAfAAIAACRg");
	this.shape_23.setTransform(226.8,36.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDEEBD").s().p("AgbBFQgQgFgOgNIAUgWQAKAIAKAEQALAFAKABQAKAAAGgEQAGgEAAgHIAAAAQAAgDgCgDQgBgCgDgCIgJgEIgNgFQgLgCgJgEQgJgDgHgEQgGgEgDgHQgEgHAAgMIAAAAQAAgKAEgIQAEgIAHgGQAGgGAKgDQAJgDALAAQAPAAANAFQAOAEALAJIgRAZQgJgGgKgEQgJgFgIAAQgJABgFADQgFAEAAAGQAAAEACACQABADAEACQADACAGABIAOAFIAUAHQAJADAGAEQAGAEADAIQADAHAAAJIAAABQAAALgEAIQgEAJgHAFQgIAGgJADQgKADgMAAQgPAAgQgGg");
	this.shape_24.setTransform(216.4,36.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDEEBD").s().p("Ag3BJIAAiRIBuAAIAAAdIhOAAIAAAeIBEAAIAAAaIhEAAIAAAfIBPAAIAAAdg");
	this.shape_25.setTransform(203.1,36.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDEEBD").s().p("AAZBJIgdgvIgBAAIgYAAIAAAvIghAAIAAiRIBCAAQAcAAAOAPQANAMAAAWIAAAAQAAASgJAJQgIALgPAGIAkA0gAgdgBIAeAAQAMAAAGgFQAHgGAAgJIAAgBQAAgKgHgGQgGgFgNAAIgdAAg");
	this.shape_26.setTransform(188.7,36.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDEEBD").s().p("Ag5BJIAAiRIA6AAQAOAAAKAEQALAEAHAGQAHAHAEAJQAEAKAAALQAAANgFAIQgEAJgJAHQgIAGgLADQgKAEgLAAIgYAAIAAAsgAgYAAIAYAAQAMAAAGgEQAHgHAAgJIAAAAQAAgMgHgFQgHgGgLAAIgYAAg");
	this.shape_27.setTransform(174.1,36.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDEEBD").s().p("Ag3BJIAAiRIBuAAIAAAdIhNAAIAAAeIBDAAIAAAaIhDAAIAAAfIBOAAIAAAdg");
	this.shape_28.setTransform(153.5,36.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDEEBD").s().p("AgVBFQgOgFgKgLQgKgJgGgOQgFgOAAgQIAAAAQAAgOAFgOQAGgNAKgLQAKgLAOgFQAPgHAPAAQAKABAIABIAQAFQAHADAGAEIAKAJIgUAYQgJgIgJgEQgJgFgLAAQgIAAgHAEQgIADgFAHQgGAGgDAIQgDAIAAAJIAAAAQAAAJADAIQADAIAGAHQAFAGAIAEQAHAEAIAAQANAAAJgFQAIgFAJgHIAUAUIgLALQgGAFgIADQgHAEgIACQgJABgLABQgOAAgOgHg");
	this.shape_29.setTransform(138.5,36.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDEEBD").s().p("AgPBJIAAiRIAfAAIAACRg");
	this.shape_30.setTransform(127.1,36.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDEEBD").s().p("AgNBJIg7iRIAjAAIAlBlIAmhlIAjAAIg7CRg");
	this.shape_31.setTransform(115.7,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDEEBD").s().p("AgQAQIAAgfIAhAAIAAAfg");
	this.shape_32.setTransform(98.6,42.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDEEBD").s().p("AgbBFQgQgFgOgNIAUgWQAKAIAKAEQALAFAKABQAKAAAGgEQAGgEAAgHIAAAAQAAgDgCgDQgBgCgDgCIgJgEIgNgFQgLgCgJgEQgJgDgHgEQgGgEgDgHQgEgHAAgMIAAAAQAAgKAEgIQAEgIAHgGQAGgGAKgDQAJgDALAAQAPAAANAFQAOAEALAJIgRAZQgJgGgKgEQgJgFgIAAQgJABgFADQgFAEAAAGQAAAEACACQABADAEACQADACAGABIAOAFIAUAHQAJADAGAEQAGAEADAIQADAHAAAJIAAABQAAALgEAIQgEAJgHAFQgIAGgJADQgKADgMAAQgPAAgQgGg");
	this.shape_33.setTransform(88.7,36.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDEEBD").s().p("AgPAQIAAgfIAgAAIAAAfg");
	this.shape_34.setTransform(79.1,42.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDEEBD").s().p("AgtA6QgRgRgBggIAAhSIAhAAIAABRQgBASAJAJQAJAJANAAQAOAAAJgJQAIgIAAgSIAAhSIAgAAIAABRQABAQgFANQgEAMgJAJQgJAIgMAEQgMAEgNAAQgdAAgQgQg");
	this.shape_35.setTransform(68.2,36.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDEEBD").s().p("AgPBJIAAg6Ig4hXIAmAAIAhA7IAjg7IAlAAIg4BWIAAA7g");
	this.shape_36.setTransform(345.8,11.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDEEBD").s().p("AgzBJIAAiRIAgAAIAABzIBIAAIAAAeg");
	this.shape_37.setTransform(332.4,11.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDEEBD").s().p("AAlBJIhFhcIAABcIggAAIAAiRIAeAAIBDBYIAAhYIAgAAIAACRg");
	this.shape_38.setTransform(317,11.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDEEBD").s().p("AgeBFQgOgFgLgLQgKgJgGgOQgGgOAAgQIAAAAQAAgOAGgOQAGgNALgLQAKgLAOgFQAPgHAPAAQARAAAOAHQAOAGALAJQAKALAGANQAGAPAAAOIAAAAQAAAQgGANQgGAOgLAKQgKALgOAFQgPAHgQAAQgQAAgOgHgAgRgpQgIADgFAHQgGAGgDAIQgEAIAAAJIAAAAQAAAJAEAIQADAIAGAHQAGAGAIAEQAIAEAIAAQAJAAAJgEQAIgEAFgGQAGgGADgJQAEgHAAgKIAAAAQAAgIgEgJQgDgHgGgHQgGgHgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_39.setTransform(299.8,11.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDEEBD").s().p("Ag3BJIAAiRIBtAAIAAAdIhMAAIAAAeIBDAAIAAAaIhDAAIAAAfIBNAAIAAAdg");
	this.shape_40.setTransform(277.9,11.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDEEBD").s().p("AAdBJIAAg7Ig5AAIAAA7IghAAIAAiRIAhAAIAAA6IA5AAIAAg6IAhAAIAACRg");
	this.shape_41.setTransform(262.5,11.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDEEBD").s().p("AgPBJIAAhzIgtAAIAAgeIB5AAIAAAeIgtAAIAABzg");
	this.shape_42.setTransform(247.8,11.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDEEBD").s().p("Ag3BJIAAiRIBvAAIAAAeIhOAAIAAAeIBEAAIAAAcIhEAAIAAA5g");
	this.shape_43.setTransform(228.2,11.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDEEBD").s().p("AgeBFQgOgFgLgLQgKgJgGgOQgGgOAAgQIAAAAQAAgOAGgOQAGgNALgLQAKgLAOgFQAPgHAPAAQARAAAOAHQAOAGALAJQAKALAGANQAGAPAAAOIAAAAQAAAQgGANQgGAOgLAKQgKALgOAFQgPAHgQAAQgQAAgOgHgAgRgpQgIADgFAHQgGAGgDAIQgEAIAAAJIAAAAQAAAJAEAIQADAIAGAHQAGAGAIAEQAIAEAIAAQAJAAAJgEQAIgEAFgGQAGgGADgJQAEgHAAgKIAAAAQAAgIgEgJQgDgHgGgHQgGgHgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_44.setTransform(211.9,11.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDEEBD").s().p("Ag2BJIAAiRIBsAAIAAAdIhNAAIAAAeIBEAAIAAAaIhEAAIAAAfIBOAAIAAAdg");
	this.shape_45.setTransform(190,11.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDEEBD").s().p("AApBJIAAheIgpA9IAAAAIgog9IAABeIggAAIAAiRIAjAAIAlA+IAmg+IAjAAIAACRg");
	this.shape_46.setTransform(173.5,11.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDEEBD").s().p("AgeBFQgOgFgLgLQgKgJgGgOQgGgOAAgQIAAAAQAAgOAGgOQAGgNALgLQAKgLAOgFQAPgHAPAAQARAAAOAHQAOAGALAJQAKALAGANQAGAPAAAOIAAAAQAAAQgGANQgGAOgLAKQgKALgOAFQgPAHgQAAQgQAAgOgHgAgRgpQgIADgFAHQgGAGgDAIQgEAIAAAJIAAAAQAAAJAEAIQADAIAGAHQAGAGAIAEQAIAEAIAAQAJAAAJgEQAIgEAFgGQAGgGADgJQAEgHAAgKIAAAAQAAgIgEgJQgDgHgGgHQgGgHgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_47.setTransform(155.5,11.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDEEBD").s().p("AAdBJIAAg7Ig5AAIAAA7IghAAIAAiRIAhAAIAAA6IA5AAIAAg6IAhAAIAACRg");
	this.shape_48.setTransform(138.6,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,484,78.4);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._728_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(403));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(-128,45,1,1,0,0,0,122,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({x:122},15).wait(191).to({alpha:0},11).wait(1));

	// Layer 16
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(814,37.9,1,1,0,0,0,80,27.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(177).to({_off:false},0).to({x:324,alpha:1},15).wait(199).to({alpha:0},11).wait(1));

	// Layer 14
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(364,122.4,1,1,0,0,0,364,19.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({y:62.4,alpha:1},15).wait(102).to({alpha:0},15).wait(228));

	// Layer 15
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(364,118.4,1,1,0,0,0,364,19.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({y:28.4,alpha:1},15).wait(111).to({alpha:0},15).wait(228));

	// Layer 13
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(640.5,-37.5,1,1,0,0,0,72.5,32.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({y:32.5},15).wait(129).to({y:-37.5},15).wait(216).to({alpha:0},11).wait(1));

	// Layer 12
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(87.5,-37.5,1,1,0,0,0,72.5,32.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({y:32.5},15).wait(129).to({y:-37.5},15).wait(216).to({alpha:0},11).wait(1));

	// Layer 11
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},15).wait(376).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;