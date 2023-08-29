(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
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


(lib.newFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(63.4,119.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAXIASgEQAAAXAKgBQAFAAADgCQABgDAAgFQABgFgCgEQgCgDgCgDIgEgGIgQgMQgGgFgDgGQgEgGABgKQAAgNAIgHQAHgHANgBQAFABAFABQAFACACACQAEADACAEIADAIIABAKIgRAEIgBgHIgBgEIgBgFIgEgCQAAgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACADIAHAIIAMAMIAHAFIAGAIQACADABAGQABAEAAAGQAAAMgIAHQgHAJgNAAQgcgBgBgig");
	this.shape_1.setTransform(58.5,114.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAXIASgEQACAXAJgBQAFAAACgCQACgDAAgFQAAgFgBgEQgBgDgDgDIgFgGIgPgMQgGgFgDgGQgDgGgBgKQAAgNAJgHQAHgHANgBQAFABAFABQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgHIgBgEIgCgFIgDgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACADIAHAIIANAMIAGAFIAFAIQADADABAGQACAEAAAGQgBAMgHAHQgIAJgNAAQgcgBgCgig");
	this.shape_2.setTransform(51.6,114.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAuAAIAAAOIgZAAIAAAhIAUAAIAAANIgUAAIAAAlIAaAAIAAAOg");
	this.shape_3.setTransform(45.4,114.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAVAAIAABhIAaAAIAAAOg");
	this.shape_4.setTransform(39.5,114.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA4IgLgzIgKAAIAAAzIgVAAIAAhvIAaAAQAIAAAGABQAGACAFADQAFAEACAGQADAGgBAIQAAALgCAHQgEAGgHABIAPA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgDgEQgEgEgHAAIgGAAg");
	this.shape_5.setTransform(29.2,114.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAwQgHgJAAgTIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgCAHgBQARAAAIAJQAHAKAAASIAAAoQAAAJgBAHQgCAHgEAFQgEAEgGADQgHACgIABQgQgBgIgJgAgFgoIgDADIgCAGIAAAHIAAAxIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgxIAAgHIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgDABQgCgBgDACg");
	this.shape_6.setTransform(21.2,114.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAXIASgEQABAXALgBQAEAAADgCQACgDAAgFQgBgFgBgEQgBgDgDgDIgFgGIgOgMQgHgFgDgGQgEgGAAgKQABgNAHgHQAJgHAMgBQAFABAFABQAEACAEACQADADACAEIADAIIACAKIgSAEIAAgHIgBgEIgDgFIgDgCQAAgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgCADQgDADAAAFQAAAFACADIAHAIIAMAMIAHAFIAFAIQADADABAGQABAEABAGQAAAMgJAHQgHAJgNAAQgcgBgCgig");
	this.shape_7.setTransform(10.5,114.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALA4IgLgzIgKAAIAAAzIgUAAIAAhvIAZAAQAHAAAHABQAHACAEADQAFAEACAGQACAGAAAIQAAALgDAHQgDAGgHABIAQA4gAgKgHIAFAAQAIAAADgEQAEgDAAgKQAAgJgDgEQgEgEgGAAIgHAAg");
	this.shape_8.setTransform(3.3,114.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_9.setTransform(-4.5,114.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAuAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_10.setTransform(-10.8,114.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA4IAAgrIgXhEIATAAIAMAtIANgtIATAAIgXBEIAAArg");
	this.shape_11.setTransform(-17.5,114.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAwQgHgJAAgTIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgCAHgBQARAAAIAJQAHAKAAASIAAAoQAAAJgBAHQgCAHgEAFQgEAEgGADQgHACgIABQgQgBgIgJgAgFgoIgDADIgCAGIAAAHIAAAxIAAAFIABAFIACAEIADACIAEABIAFgBIADgCIACgEIABgFIAAgFIAAgxIAAgHIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgDABQgCgBgDACg");
	this.shape_12.setTransform(-28.2,114.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMA4IgMhJIgLBJIgRAAIgQhvIARAAIAJBHIANhHIALAAIANBHIAJhHIARAAIgQBvg");
	this.shape_13.setTransform(-37.2,114.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_14.setTransform(-45.1,114.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPA4IgahBIAABBIgRAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_15.setTransform(-55.3,114.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_16.setTransform(-61,114.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_17.setTransform(128.8,101.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAZIATgEQABAZAMAAQAFAAADgDQACgEAAgFQAAgFgCgEQgCgFgDgCIgFgHIgQgMQgHgHgEgHQgDgGAAgLQAAgOAIgIQAJgIAOAAQAGAAAFABQAFACAEADIAGAHIADAKIABAKIgTAEIAAgGIgCgGIgCgFIgEgCQgBgCgCABQgFAAgCADQgDADAAAFQAAAGADAEIAHAIIAOAPIAHAFIAGAIIAEAJQABAGAAAGQABANgJAJQgJAIgNAAQggAAgBgmg");
	this.shape_18.setTransform(123.5,96.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMA+IgNg5IgKAAIAAA5IgXAAIAAh7IAdAAQAHAAAIACQAHABAFAEQAFAEADAGQACAHAAAJQAAAMgDAHQgEAIgIABIASA+gAgLgIIAFAAQAIAAAFgEQAEgEAAgLQAAgKgEgEQgEgEgHAAIgHAAg");
	this.shape_19.setTransform(115.5,96.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA+IAAh7IAyAAIAAAQIgbAAIAAAkIAVAAIAAAOIgVAAIAAApIAcAAIAAAQg");
	this.shape_20.setTransform(108,96.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZA+IAAh7IAyAAIAAAQIgbAAIAAAkIAVAAIAAAOIgVAAIAAApIAcAAIAAAQg");
	this.shape_21.setTransform(101.5,96.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMA+IgNg5IgKAAIAAA5IgXAAIAAh7IAdAAQAHAAAIACQAHABAFAEQAFAEADAGQACAHAAAJQAAAMgDAHQgEAIgIABIASA+gAgLgIIAFAAQAIAAAFgEQAEgEAAgLQAAgKgEgEQgEgEgHAAIgHAAg");
	this.shape_22.setTransform(93.9,96.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA+IgEgdIgUAAIgFAdIgWAAIAah7IAWAAIAYB7gAgHASIAPAAIgIgxg");
	this.shape_23.setTransform(85.4,96.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMA9QgGgCgEgDQgEgEgDgFQgCgGgBgGIgBgOIAAgpIABgOQABgHACgFQADgGAEgDQAEgDAGgCQAGgCAGAAQAJAAAHACQAHADADAEQAFAFABAHQACAGAAAJIAAAKIgWAAIAAgKQAAgKgBgDQgCgGgHgBIgCAAIgCABQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgDADIgBAFIAAAFIAAAFIAAAzQAAALACAFQAEAEAEAAIAFAAIACgCIADgCIABgDIABgEIAAgEIAAgFIAAgLIAWAAIAAAKIgBANQgBAFgCAFQgCAFgEADQgEAEgGABQgGACgIAAQgGAAgGgCg");
	this.shape_24.setTransform(77.3,96.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggAZIAUgEQABAZALAAQAGAAADgDQACgEAAgFQAAgFgCgEQgCgFgDgCIgEgHIgRgMQgHgHgDgHQgEgGAAgLQAAgOAIgIQAJgIAOAAQAFAAAGABQAFACADADIAHAHIACAKIACAKIgTAEIgBgGIgBgGIgCgFIgEgCQgCgCgBABQgFAAgCADQgDADAAAFQAAAGADAEIAHAIIAOAPIAHAFIAGAIIAEAJQACAGAAAGQAAANgJAJQgJAIgOAAQgeAAgDgmg");
	this.shape_25.setTransform(65.6,96.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMA9QgGgCgEgDQgEgEgCgFQgDgGgBgGIgBgOIAAgpIABgOQABgHADgFQACgGAEgDQAEgDAGgCQAGgCAGAAQAKAAAGACQAHADADAEQAEAFACAHQACAGAAAJIAAAKIgWAAIAAgKQAAgKgBgDQgCgGgIgBIgBAAIgCABQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCADIgBAFIgBAFIAAAFIAAAzQAAALADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgFIAAgLIAWAAIAAAKIgBANQgBAFgDAFQgCAFgDADQgEAEgGABQgGACgIAAQgGAAgGgCg");
	this.shape_26.setTransform(57.6,96.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_27.setTransform(51.3,96.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARA+IgdhIIAABIIgTAAIAAh7IAPAAIAdBFIAAhFIATAAIAAB7g");
	this.shape_28.setTransform(45,96.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaA1QgIgLAAgUIAAgsQAAgKABgHQACgHAFgGQAEgFAHgDQAHgCAIAAQATAAAIAKQAIAKAAAUIAAAsQAAAKgBAHQgCAIgFAFQgEAGgHACQgHADgJAAQgSAAgIgKgAgFgsIgEAEIgCAFIAAAIIAAA3IAAAGIABAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg3IAAgIIgCgFIgEgEQgCgCgEAAQgDAAgCACg");
	this.shape_29.setTransform(36.5,96.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMA+IgNg5IgKAAIAAA5IgXAAIAAh7IAdAAQAHAAAIACQAHABAFAEQAFAEADAGQACAHAAAJQAAAMgDAHQgEAIgIABIASA+gAgLgIIAFAAQAIAAAFgEQAEgEAAgLQAAgKgEgEQgEgEgHAAIgHAAg");
	this.shape_30.setTransform(28.1,96.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKA+IAAhqIgVAAIAAgRIA+AAIAAARIgUAAIAABqg");
	this.shape_31.setTransform(20.4,96.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQA+IgGgdIgTAAIgFAdIgWAAIAah7IAVAAIAZB7gAgHASIAPAAIgIgxg");
	this.shape_32.setTransform(13.2,96.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMA+IAAg5IgXAAIAAA5IgXAAIAAh7IAXAAIAAA0IAXAAIAAg0IAXAAIAAB7g");
	this.shape_33.setTransform(4.7,96.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMA9QgGgCgEgDQgEgEgCgFQgDgGgBgGIgBgOIAAgpIABgOQABgHADgFQACgGAEgDQAEgDAGgCQAGgCAGAAQAKAAAGACQAHADADAEQAEAFACAHQACAGAAAJIAAAKIgWAAIAAgKQAAgKgBgDQgCgGgIgBIgBAAIgCABQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgDADIAAAFIgBAFIAAAFIAAAzQAAALACAFQAEAEAEAAIAFAAIACgCIADgCIABgDIABgEIAAgEIAAgFIAAgLIAWAAIAAAKIgBANQgBAFgDAFQgCAFgDADQgEAEgGABQgGACgIAAQgGAAgGgCg");
	this.shape_34.setTransform(-3.9,96.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZA+IAAh7IAyAAIAAAQIgbAAIAAAkIAVAAIAAAOIgVAAIAAApIAcAAIAAAQg");
	this.shape_35.setTransform(-11.1,96.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAaA+IgChUIgSBUIgLAAIgShUIgCBUIgRAAIACh7IAXAAIARBWIAShWIAXAAIACB7g");
	this.shape_36.setTransform(-19.9,96.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghA+IAAh7IAdAAQAJAAAIACQAIADAEAEQAFAFACAIQACAHAAAKIAAArQAAALgCAHQgCAHgFAGQgEAFgIACQgHADgJAAgAgKAuIAGAAIAEgBIAEgBIADgDIACgDIABgFIAAgGIAAgGIAAgsIAAgHIAAgFIgCgFIgDgCIgEgCIgFgBIgGAAg");
	this.shape_37.setTransform(-33.1,96.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AARA+IgdhIIAABIIgTAAIAAh7IAQAAIAcBFIAAhFIATAAIAAB7g");
	this.shape_38.setTransform(-41.6,96.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAQA+IgGgdIgTAAIgFAdIgWAAIAah7IAVAAIAZB7gAgHASIAPAAIgIgxg");
	this.shape_39.setTransform(-49.8,96.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAaA+IgChUIgSBUIgLAAIgShUIgCBUIgRAAIACh7IAXAAIARBWIAShWIAXAAIACB7g");
	this.shape_40.setTransform(-59.1,96.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZA+IAAh7IAyAAIAAAQIgbAAIAAAkIAVAAIAAAOIgVAAIAAApIAcAAIAAAQg");
	this.shape_41.setTransform(-67.3,96.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghA+IAAh7IAdAAQAJAAAIACQAIADAEAEQAFAFACAIQACAHAAAKIAAArQAAALgCAHQgCAHgFAGQgEAFgIACQgHADgJAAgAgKAuIAGAAIAEgBIAEgBIADgDIACgDIABgFIAAgGIAAgGIAAgsIAAgHIAAgFIgCgFIgDgCIgEgCIgFgBIgGAAg");
	this.shape_42.setTransform(-75,96.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAHIAAgNIAjAAIAAANg");
	this.shape_43.setTransform(-82.1,97.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARA+IgdhIIAABIIgTAAIAAh7IAPAAIAdBFIAAhFIATAAIAAB7g");
	this.shape_44.setTransform(-89,96.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_45.setTransform(-95.3,96.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgIAMQAFgBADgDQAAgDAAgFIgJAAIAAgTIATAAIAAATQAAARgQADg");
	this.shape_46.setTransform(-102.8,102.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJA+IAAhqIgWAAIAAgRIA+AAIAAARIgUAAIAABqg");
	this.shape_47.setTransform(-107.6,96.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaA1QgIgLAAgUIAAgsQAAgKABgHQACgHAFgGQAEgFAHgDQAHgCAIAAQATAAAIAKQAIAKAAAUIAAAsQAAAKgBAHQgCAIgFAFQgEAGgHACQgHADgJAAQgSAAgIgKgAgFgsIgEAEIgCAFIAAAIIAAA3IAAAGIABAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg3IAAgIIgCgFIgEgEQgCgCgEAAQgDAAgCACg");
	this.shape_48.setTransform(-115.2,96.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMA+IAAg5IgXAAIAAA5IgXAAIAAh7IAXAAIAAA0IAXAAIAAg0IAXAAIAAB7g");
	this.shape_49.setTransform(-124,96.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,83.6,263.6,47.3);


(lib.mechanics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("AhBA0IAogJQABAyAZAAQALAAAFgGQAFgGAAgLQAAgLgEgIQgDgJgFgGIgNgOIghgaQgPgNgHgOQgHgOAAgUQAAgeARgQQASgQAegBQAMAAAKAEQALADAHAGQAHAGAFAJQAEAJACAKQADAKABAMIgoAHIgBgNQAAgGgCgFQgCgGgCgEQgDgDgEgCQgFgDgEABQgKAAgGAHQgFAGAAAKQAAAMAFAIQAFAIAKAJIAfAdIAOAMQAGAHAGAJQAFAJADALQADALAAAMQAAAbgRASQgSARgcAAQhBAAgDhNg");
	this.shape.setTransform(124.7,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("AgZB9QgNgEgIgIQgJgHgEgLQgGgLgCgMQgBgNAAgPIAAhWQAAgRABgMQACgNAGgLQAEgLAJgHQAIgHANgEQALgEAPAAQATAAANAFQAOAFAIAKQAHAKAEANQAEANgBARIAAAWIgsAAIAAgWQAAgSgCgHQgEgNgPgBIgCAAQgFAAgDACQgFABgDADIgFAGIgCAJIgBAKIAAAMIAABpQAAAWAGAJQAFAKANAAIAIgBIAGgDIAFgFIACgGIABgIIABgJIAAgJIAAgXIAsAAIAAAVQAAAOgCALQgCALgEAKQgFAKgHAHQgJAGgLAEQgMAEgQAAQgOAAgMgEg");
	this.shape_1.setTransform(108.5,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgVB+IAAj7IArAAIAAD7g");
	this.shape_2.setTransform(95.7,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AAjB+Ig8iVIAACVIgnAAIAAj7IAfAAIA8CNIAAiNIAmAAIAAD7g");
	this.shape_3.setTransform(83,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAgB+IgKg7IgqAAIgLA7IgrAAIAzj7IAuAAIA0D7gAgPAlIAgAAIgRhmg");
	this.shape_4.setTransform(66.4,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AAZB+IAAhzIgxAAIAABzIguAAIAAj7IAuAAIAABqIAxAAIAAhqIAuAAIAAD7g");
	this.shape_5.setTransform(49.2,43.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AgaB9QgMgEgIgIQgJgHgEgLQgGgLgBgMQgCgNAAgPIAAhWQAAgRACgMQABgNAGgLQAEgLAJgHQAIgHAMgEQANgEAOAAQATAAANAFQAOAFAHAKQAJAKADANQADANAAARIAAAWIgsAAIAAgWQAAgSgCgHQgEgNgPgBIgCAAQgEAAgFACQgEABgDADIgFAGIgBAJIgCAKIAAAMIAABpQAAAWAFAJQAGAKANAAIAIgBIAGgDIAFgFIACgGIABgIIABgJIAAgJIAAgXIAsAAIAAAVQAAAOgBALQgCALgFAKQgFAKgHAHQgJAGgLAEQgMAEgQAAQgOAAgNgEg");
	this.shape_6.setTransform(31.8,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("Ag0B+IAAj7IBoAAIAAAhIg6AAIAABIIAtAAIAAAfIgtAAIAABTIA7AAIAAAgg");
	this.shape_7.setTransform(17.2,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AA1B+IgEisIgkCsIgZAAIglitIgCCtIgkAAIAEj7IAwAAIAjCwIAliwIAuAAIAFD7g");
	this.shape_8.setTransform(-0.6,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,20.1,148.4,47.2);


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
	this.shape.graphics.f("#D9C993").s().p("AgOAVQAHgCAFgFQADgGAAgIIgRAAIAAgiIAhAAIAAAhQAAAegcAGg");
	this.shape.setTransform(193.7,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("Ag2ArIAhgHQACAqAUAAQAJAAAEgFQAEgGABgJQAAgJgDgHQgEgHgEgFIgKgLIgcgWQgMgLgGgLQgGgMAAgRQAAgZAOgNQAPgOAZAAQAJAAAKADQAJADAGAFQAFAFAEAHQADAIACAIIAEASIghAGIgBgLIgCgJQgBgFgDgDQgCgDgEgCQgDgCgDABQgJAAgFAFQgEAFAAAJQAAAKAEAHQAEAGAIAIIAaAYIAMAKIAKANQAEAIADAJQACAJAAAKQAAAXgPAOQgOAOgYAAQg2AAgChAg");
	this.shape_1.setTransform(184.8,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_2.setTransform(171.2,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AgRBpIAAjRIAjAAIAADRg");
	this.shape_3.setTransform(160.6,45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAdBpIgyh8IAAB8IghAAIAAjRIAbAAIAyB1IAAh1IAfAAIAADRg");
	this.shape_4.setTransform(150,45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AgtBaQgOgSAAgiIAAhMQAAgQADgNQADgMAHgJQAIgJALgFQAMgEAPAAQAgAAAOARQAOASAAAhIAABMQAAAQgDANQgEAMgGAKQgIAJgLAFQgMAEgQAAQgfAAgOgRgAgKhMQgEADgCAEIgEAKIAAAMIAABeIAAAKQAAAFACAEIAEAHQACADAEABQAEACAEAAQAFAAAEgCQAEgBACgDIAEgHIACgJIAAgKIAAheIgBgMIgCgKQgDgEgEgDQgFgCgGAAQgGAAgEACg");
	this.shape_5.setTransform(135.6,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AAUBpIgXhgIgQAAIAABgIgnAAIAAjRIAxAAQAOAAAMADQAMADAJAGQAIAHAFALQAEALAAAPQABAUgHANQgFAMgOAEIAdBogAgTgOIAJAAQAPAAAHgHQAHgHAAgSQAAgRgGgHQgGgHgPAAIgLAAg");
	this.shape_6.setTransform(121.4,45.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgRBpIAAi0IgkAAIAAgdIBqAAIAAAdIgiAAIAAC0g");
	this.shape_7.setTransform(108.4,45.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AgVBoQgKgEgHgGQgHgGgEgJQgFgJgBgKQgCgKAAgNIAAhIQAAgOACgKQACgLAEgJQAEgJAHgGQAHgGAKgDQAKgDAMAAQAQAAALAEQALAEAHAIQAGAIADALQADALAAAPIAAASIglAAIAAgSQAAgQgCgFQgDgLgNgBIgCAAIgGABQgEABgCADQgDACgBADQgBADgBAFIgBAIIAAAJIAABYQAAASAFAIQAEAIAKAAIAHgBIAGgCIADgFIACgFIABgGIABgHIAAgIIAAgTIAlAAIAAARQAAAMgCAJQgBAKgEAIQgEAIgHAGQgGAFgKADQgKADgNAAQgMAAgKgDg");
	this.shape_8.setTransform(96,45.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgrBpIAAjRIBWAAIAAAbIgwAAIAAA9IAmAAIAAAZIgmAAIAABFIAxAAIAAAbg");
	this.shape_9.setTransform(83.8,45.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgrBpIAAjRIAmAAIAAC2IAxAAIAAAbg");
	this.shape_10.setTransform(72.9,45.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9C993").s().p("AgrBpIAAjRIBXAAIAAAbIgwAAIAAA9IAlAAIAAAZIglAAIAABFIAwAAIAAAbg");
	this.shape_11.setTransform(61.8,45.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdB0IgfhOIgdBOIglAAIAwh5IgvhuIApAAIAcBIIAahIIAlAAIgtBzIAxB0g");
	this.shape_12.setTransform(180,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUB0IAAjnIApAAIAADng");
	this.shape_13.setTransform(168.8,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxB0IgDifIgiCfIgXAAIgiifIgCCfIghAAIAEjnIAsAAIAgCiIAiiiIArAAIAEDng");
	this.shape_14.setTransform(155.1,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZByQgLgEgIgGQgIgHgEgKQgFgLgBgMQgCgMAAgQIAAiYIAqAAIAACdIAAANIABAMQACAHADAEQACAEAFACQAFADAEAAQAHAAAEgDQAFgCACgEQACgEACgHIABgMIABgNIAAidIApAAIAACYQAAAQgBAMQgCAMgFALQgEAKgHAHQgIAGgLAEQgMADgPAAQgOAAgLgDg");
	this.shape_15.setTransform(130.1,16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBjQgQgUAAglIAAhUQAAgSAEgOQADgOAIgKQAIgKANgFQANgFARAAQAjAAAQATQAQAUAAAlIAABUQAAASgEAOQgDAOgIAKQgIALgNAEQgNAGgSAAQgiAAgQgUgAgLhUQgFADgCAFQgDAFgBAFIAAAOIAABoIAAALIACAKQACAFACACQADAEAEACQAEABAFAAQAGAAAEgBQAFgCACgEQADgCABgFIACgKIABgLIAAhoIgBgOIgDgKQgDgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_16.setTransform(113.9,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTB0IAAhZIgviOIAoAAIAaBdIAchdIAnAAIgvCOIAABZg");
	this.shape_17.setTransform(98.7,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguB0IAAjnIBdAAIAAAdIgzAAIAABEIApAAIAAAcIgpAAIAABqg");
	this.shape_18.setTransform(79.4,16.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUB0IAAjnIApAAIAADng");
	this.shape_19.setTransform(68.9,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.8,-6.1,150.6,82.9);


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
	this.shape.setTransform(35.8,144.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_1.setTransform(26.8,144.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA+QgJgMgBgYIAAg0QAAgLACgJQADgIAFgHQAFgGAIgDQAIgDAKAAQAWAAAKAMQAKAMAAAXIAAA0QgBALgCAJQgCAJgFAGQgFAHgIADQgIADgLAAQgVAAgKgMgAgHg0QgCACgCADIgCAGIgBAJIAABAIABAHIABAGIADAFQABACADABIAFABIAGgBQADgBABgCIADgFIACgGIAAgHIAAhAIgBgJIgCgGQgBgDgDgCQgDgCgFAAQgDAAgEACg");
	this.shape_2.setTransform(16.6,144.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBIIgBhiIgVBiIgOAAIgVhiIgCBiIgUAAIACiPIAcAAIATBkIAVhkIAbAAIACCPg");
	this.shape_3.setTransform(5.3,144.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBIIgihUIAABUIgXAAIAAiPIASAAIAiBQIAAhQIAXAAIAACPg");
	this.shape_4.setTransform(-10,144.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_5.setTransform(-19.7,144.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBIIgGgiIgXAAIgGAiIgZAAIAeiPIAZAAIAeCPgAgIAVIARAAIgJg6g");
	this.shape_6.setTransform(-29.6,144.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape_7.setTransform(-37.8,144.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIAaAAIAAB9IAhAAIAAASg");
	this.shape_8.setTransform(-45.3,144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91D2E5").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAqICRIURAAIAAkhI0RAAg");
	this.shape_9.setTransform(-5,144.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(-5,144.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,128.1,134,33);


(lib.and = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(118.5,57.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_1.setTransform(112.3,57.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_2.setTransform(106.1,57.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTB0IAAjIIgnAAIAAgfIB1AAIAAAfIgmAAIAADIg");
	this.shape_3.setTransform(96.8,47.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwB0IAAjnIBgAAIAAAeIg1AAIAABCIAqAAIAAAdIgqAAIAABMIA2AAIAAAeg");
	this.shape_4.setTransform(85.1,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBjQgPgVAAgoIAAhJQAAgVAEgOQADgPAHgLQAIgLANgFQANgGARAAQAiAAAPARQAPARAAAjIAAALIgoAAIAAgMIAAgNIgCgKQgCgEgCgDIgHgFQgEgCgHABQgCgBgEACIgGADIgFAFIgCAGIgCAHIAAAJIgBAJIAABdQAAAVAGAJQAFAKAMAAQAIAAAFgDQAFgDADgFQADgGABgHIABgTIAAgTIgZAAIAAgaIBAAAIAAB1IgcAAIgDgYQgKAbgbAAQghAAgPgUg");
	this.shape_5.setTransform(70.3,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBxQgLgDgIgGQgIgHgEgKQgEgLgCgMQgCgMAAgQIAAiZIApAAIAACeIAAANIADANQABAGADAEQACADAFADQAFACAEABQAGgBAFgCQAEgDADgDQADgEABgGIACgNIAAgNIAAieIApAAIAACZQAAAQgCAMQgBAMgFALQgEAKgIAHQgHAGgLADQgLAEgQAAQgOAAgLgEg");
	this.shape_6.setTransform(47.3,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBkQgQgVAAglIAAhUQAAgSAEgOQADgOAIgKQAIgKANgFQANgFARAAQAjAAAQAUQAQATAAAlIAABUQAAASgEAOQgDAOgIALQgIAJgNAFQgNAGgSAAQgiAAgQgTgAgLhUQgFADgCAEQgDAFgBAGIAAAOIAABoIAAAMIACAJQACAFACADQADADAEABQAEACAFAAQAGAAAEgCQAFgBACgDQADgDABgFIACgJIABgMIAAhoIgBgOIgDgLQgDgEgFgDQgFgDgHABQgGgBgFADg");
	this.shape_7.setTransform(31,47.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTB0IAAhYIgviPIAoAAIAaBdIAchdIAnAAIgvCPIAABYg");
	this.shape_8.setTransform(15.9,47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgVB+IAAjZIgqAAIAAgiIB/AAIAAAiIgpAAIAADZg");
	this.shape_9.setTransform(-4.8,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgVB+IAAj7IArAAIAAD7g");
	this.shape_10.setTransform(-15.6,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/B0IAAjnIA2AAQAUAAAOAEQAOAEAJAKQAJAIADAOQAEANgBAUIAABRQABAVgEAOQgEANgIAKQgJAKgOAEQgNAFgTAAgAgUBWIAMAAIAJgBIAIgCQAEgCACgEIADgGIABgJIABgLIAAgMIAAhTIAAgOIgBgJIgDgJIgGgEQgDgDgFgBIgLgBIgLAAg");
	this.shape_11.setTransform(-33.6,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgB0Ig3iJIAACJIgkAAIAAjnIAdAAIA3CCIAAiCIAjAAIAADng");
	this.shape_12.setTransform(-49.6,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdB0IgJg2IgmAAIgKA2IgoAAIAvjnIAqAAIAwDngAgOAiIAdAAIgPhdg");
	this.shape_13.setTransform(-64.9,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,23.1,198.8,47.2);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBQIAAiJIgbAAIAAgXIBRAAIAAAXIgaAAIAACJg");
	this.shape.setTransform(114.6,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBPQgIgDgGgEQgEgFgEgHQgCgHgCgIIgBgUIAAhqIAcAAIAABtIAAAKIACAIQABAFACACQABADAEABQADACADAAQAEAAADgCQADgBACgDIADgHIABgIIAAgKIAAhtIAdAAIAABqQAAALgBAJQgBAIgEAHQgDAHgFAFQgFAEgIADQgIADgKAAQgKAAgHgDg");
	this.shape_1.setTransform(104.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBFQgLgNAAgbIAAg6QAAgMACgKQADgKAFgGQAFgIAKgDQAJgDALgBQAYAAALAOQALANAAAaIAAA6QAAANgCAJQgDAKgFAHQgGAHgJAEQgJAEgMAAQgYAAgKgOgAgHg5QgEABgBADQgCAEgBAEIAAAJIAABIIAAAIIABAGQABAEACACQACACADABIAGABIAHgBIAFgDIACgGIACgGIAAgIIAAhIIAAgJIgDgIQgBgDgEgBQgDgCgFAAQgEAAgDACg");
	this.shape_2.setTransform(93.5,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBQIAAigIApAAQAIABAJACQAIACAGAEQAHAFADAIQAEAJAAALQgBAegXAEQAOACAIAIQAGAKAAARQAAAXgLAMQgMAMgWAAgAgPA7IALAAQALABAFgHQAGgFgBgPQAAgOgFgHQgGgGgMgBIgJAAgAgPgNIAJAAQAMgBAEgFQAFgGAAgNQAAgGgBgEQgCgFgEgCQgEgDgEAAIgLAAIgEAAg");
	this.shape_3.setTransform(82.6,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_4.setTransform(71.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.3,7.2,56.6,31.2);


(lib.ayear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(278.2,-35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBQIgShKIgNAAIAABKIgdAAIAAigIAlAAQALABAJACQAJACAHAFQAHAEADAJQADAJAAAMQAAAPgEAJQgFAKgKADIAWBPgAgPgLIAHAAQAMAAAFgFQAGgFAAgOQAAgNgFgGQgFgFgLAAIgJAAg");
	this.shape_1.setTransform(270.6,-42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_2.setTransform(259.6,-42.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBQIAAigIBCAAIAAAWIgkAAIAAAuIAcAAIAAASIgcAAIAAA2IAlAAIAAAUg");
	this.shape_3.setTransform(250.5,-42.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBQIAAg9IgghjIAbAAIASBBIAThBIAbAAIghBjIAAA9g");
	this.shape_4.setTransform(241,-42.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_5.setTransform(226,-42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.6,-58,148,31.2);


(lib._51000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAIIAGgBQAAAIADAAIACgBIABgDIgBgDIgBgDIgBgCIgFgDIgDgEIgBgFQAAgFADgCQACgDAEAAIADAAIADACIACACIABADIAAAEIgGABIAAgCIAAgCIgBgBIgBgBIgBgBIgBACIgBACIAAADIACADIAEAEIACABIACADIACADIAAADQAAAFgDACQgDADgEAAQgJAAAAgMg");
	this.shape.setTransform(43.8,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAUIgDgCIgCgDIgCgEIAAgEIAAgMIAAgFIACgEIACgDIADgBIADgBIAFABIADACIACAEIABAFIAAADIgIAAIAAgDIAAgEQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIAAAAIAAABIgBAAIgBABIAAACIAAABIAAACIAAAPIAAAFQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIABAAIABgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgDIAIAAIAAADIgBAEIgBADIgCADIgDACIgEAAIgDAAg");
	this.shape_1.setTransform(41.1,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAUIAAgnIAFAAIAAAng");
	this.shape_2.setTransform(38.8,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAUIAAghIgHAAIAAgGIATAAIAAAGIgHAAIAAAhg");
	this.shape_3.setTransform(36.9,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAIIAGgBQAAAIADAAIACgBIABgDIgBgDIgBgDIgBgCIgFgDIgDgEIgBgFQAAgFADgCQACgDAEAAIADAAIADACIACACIABADIAAAEIgGABIAAgCIAAgCIgBgBIgBgBIgBgBIgBACIgBACIAAADIACADIAEAEIACABIACADIACADIAAADQAAAFgDACQgDADgEAAQgJAAAAgMg");
	this.shape_4.setTransform(34.5,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAUIAAgnIAFAAIAAAng");
	this.shape_5.setTransform(32.3,-14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAUIAAghIgHAAIAAgGIATAAIAAAGIgHAAIAAAhg");
	this.shape_6.setTransform(30.4,-14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFAUIgCgKIgFAAIgBAKIgIAAIAIgnIAHAAIAIAngAgBAGIADAAIgCgPg");
	this.shape_7.setTransform(27.9,-14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAUIAAghIgHAAIAAgGIATAAIAAAGIgHAAIAAAhg");
	this.shape_8.setTransform(25.4,-14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAIIAGgBQAAAIADAAIACgBIABgDIgBgDIgBgDIgBgCIgFgDIgDgEIgBgFQAAgFADgCQACgDAEAAIADAAIADACIACACIABADIAAAEIgGABIAAgCIAAgCIgBgBIgBgBIgBgBIgBACIgBACIAAADIACADIAEAEIACABIACADIACADIAAADQAAAFgDACQgDADgEAAQgJAAAAgMg");
	this.shape_9.setTransform(22.9,-14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEAUIgEgTIgCAAIAAATIgIAAIAAgnIAJAAIAEABIADACQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAIABAFIgBAGQgBACgDAAIAGAUgAgCgBIABAAQACAAABgCIABgFIgBgEQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgBAAg");
	this.shape_10.setTransform(18.8,-14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIARQgCgEAAgGIAAgNIAAgGIACgEIAEgCIAEgBQAGAAACADQADAEAAAGIAAANIAAAGIgDAEIgDACIgFABQgEAAgEgDgAgBgNIgBABIAAACIAAACIAAARIAAACIAAABIAAACIABAAIABABIACgBIABAAIAAgCIABgBIAAgCIAAgRIAAgCIgBgCIgBgBIgCgBIgBABg");
	this.shape_11.setTransform(15.7,-14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAKAAIADABIADACIADADQABACAAADQgBAHgFABQADAAACABQACADAAAEQAAAGgDADQgDADgFAAgAgDAPIADAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBQABgCAAgDQAAgEgBgBQgCgCgCAAIgCAAgAgDgCIACAAQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIgBgCIgCAAIgCAAIgBAAg");
	this.shape_12.setTransform(12.8,-14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAUIgBgKIgFAAIgBAKIgIAAIAIgnIAHAAIAIAngAgBAGIADAAIgCgPg");
	this.shape_13.setTransform(9.9,-14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAUIAAgnIAHAAIAAAiIAIAAIAAAFg");
	this.shape_14.setTransform(7.4,-14.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAUIAAgnIAPAAIAAAFIgIAAIAAAMIAGAAIAAADIgGAAIAAATg");
	this.shape_15.setTransform(3.7,-14.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIARQgCgEAAgGIAAgNIABgGIABgEIAEgCIAEgBQAGAAACADQADAEAAAGIAAANIgBAGIgCAEIgDACIgFABQgEAAgEgDgAAAgNIgCABIAAACIAAACIAAARIAAACIAAABIABACIABAAIAAABIABgBIABAAIABgCIABgBIAAgCIAAgRIAAgCIgBgCIgCgBIgBgBIAAABg");
	this.shape_16.setTransform(1,-14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDATIgEgCIgCgCIgBgEIAAgFIAAgZIAIAAIAAAaIAAACIAAACIABACIAAABIABABIABgBIACgBIABgCIAAgCIAAgCIAAgaIAHAAIAAAZIgBAFIgBAEIgCACIgDACIgEABIgDgBg");
	this.shape_17.setTransform(-3.4,-14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEAUIgBgKIgFAAIgCAKIgHAAIAIgnIAGAAIAJAngAgBAGIADAAIgCgPg");
	this.shape_18.setTransform(-6.2,-14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAUIAAgnIAPAAIAAAGIgIAAIAAALIAGAAIAAADIgGAAIAAAOIAIAAIAAAFg");
	this.shape_19.setTransform(-8.7,-14.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAEAUIgEgTIgCAAIAAATIgIAAIAAgnIAJAAIAEABIADACQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAIABAFIgBAGQgBACgDAAIAGAUgAgCgBIABAAQACAAABgCIABgFIgBgEQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgBAAg");
	this.shape_20.setTransform(-11.4,-14.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDATIgDgCIgDgCIgBgEIAAgFIAAgZIAHAAIAAAaIAAACIAAACIABACIABABIABABIACgBIABgBIABgCIAAgCIAAgCIAAgaIAHAAIAAAZIAAAFIgBAEIgDACIgDACIgEABIgDgBg");
	this.shape_21.setTransform(-14.4,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAKAAIADABIADACIADADQABACAAADQgBAHgFABQADAAACABQACADAAAEQAAAGgDADQgDADgFAAgAgDAPIADAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQACgCAAgDQAAgEgCgBQgBgCgCAAIgCAAgAgDgCIACAAQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIgBgCIgCAAIgCAAIgBAAg");
	this.shape_22.setTransform(-17.4,-14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_23.setTransform(-20.9,-13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAIIAGgBQAAAIADAAIACgBIABgDIgBgDIgBgDIgBgCIgFgDIgDgEIgBgFQAAgFADgCQACgDAEAAIADAAIADACIACACIABADIAAAEIgGABIAAgCIAAgCIgBgBIgBgBIgBgBIgBACIgBACIAAADIACADIAEAEIACABIACADIACADIAAADQAAAFgDACQgDADgEAAQgJAAAAgMg");
	this.shape_24.setTransform(-22.8,-14.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_25.setTransform(-24.8,-13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDATIgDgCIgDgCIgBgEIAAgFIAAgZIAHAAIAAAaIAAACIAAACIABACIABABIABABIACgBIABgBIAAgCIAAgCIABgCIAAgaIAHAAIAAAZIAAAFIgBAEIgDACIgDACIgEABIgDgBg");
	this.shape_26.setTransform(-26.9,-14.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALIAAgGIAFAAIAAAGgAgCgEIAAgGIAFAAIAAAGg");
	this.shape_27.setTransform(-30.5,-14.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAUIAAgnIAPAAIAAAGIgIAAIAAALIAGAAIAAADIgGAAIAAAOIAIAAIAAAFg");
	this.shape_28.setTransform(-32.3,-14.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAUIgDgCIgCgDIgCgEIAAgEIAAgMIAAgFIACgEIACgDIADgBIADgBIAFABIADACIACAEIABAFIAAADIgIAAIAAgDIAAgEQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIAAAAIAAABIgBAAIgBABIAAACIAAABIAAACIAAAPIAAAFQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAAAIABAAIABgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgDIAIAAIAAADIgBAEIgBADIgCADIgDACIgEAAIgDAAg");
	this.shape_29.setTransform(-34.9,-14.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADAUIgDgTIgCAAIAAATIgIAAIAAgnIAKAAIACABIAFACQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAIABAFIgBAGQgBACgDAAIAGAUgAgCgBIABAAQABAAACgCIABgFIgBgEQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCAAg");
	this.shape_30.setTransform(-37.8,-14.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDATIgEgCIgCgCIAAgEIgBgFIAAgZIAIAAIAAAaIAAACIAAACIABACIABABIAAABIABgBIABgBIACgCIAAgCIAAgCIAAgaIAHAAIAAAZIgBAFIgBAEIgCACIgDACIgEABIgDgBg");
	this.shape_31.setTransform(-40.8,-14.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHARQgDgEAAgGIAAgNIABgGIACgEIADgCIAEgBQAGAAADADQACAEAAAGIAAANIgBAGIgBAEIgEACIgFABQgFAAgCgDgAAAgNIgCABIgBACIAAACIAAARIAAACIABABIAAACIACAAIAAABIABgBIABAAIABgCIAAgBIAAgCIAAgRIAAgCIAAgCIgCgBIgBgBIAAABg");
	this.shape_32.setTransform(-43.8,-14.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAIIAGgBQAAAIADAAIACgBIABgDIgBgDIgBgDIgBgCIgFgDIgDgEIgBgFQAAgFADgCQACgDAEAAIADAAIADACIACACIABADIAAAEIgGABIAAgCIAAgCIgBgBIgBgBIgBgBIgBACIgBACIAAADIACADIAEAEIACABIACADIACADIAAADQAAAFgDACQgDADgEAAQgJAAAAgMg");
	this.shape_33.setTransform(-46.6,-14.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAADIgBAFIgEgCIAEgFIgGgBIACgEIAFADIgBgGIADAAIAAAGIAFgDIABAEIgFABIAEAFIgFACg");
	this.shape_34.setTransform(-49.1,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFA54A").s().p("AAAAEIAAAAIgGAOIgIgGIAMgLIgBAAIgPgBIADgIIAOAHIAAgBIgDgPIAJAAIgDAPIAAABIAOgHIADAIIgQABIAAAAIALALIgIAGg");
	this.shape_35.setTransform(50.2,-45.2,1.108,1.108);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#90D2E5").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEIgNgKIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_36.setTransform(-3.3,-36.5,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AGLheQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHQgHgJgLgEgAGLgzQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAQAHAAAFADQAFACADAEQADAEACAHgAEjg+QgEgMgHgHQgIgJgLgEQgLgDgOAAQgNAAgLADQgLAEgIAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAIAHALAEQALAFANAAQAOAAALgFQALgEAIgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLgAEAg+QAEAEABAHQACAGAAALIAAAxQAAALgCAHQgBAGgEAFQgDAEgFACQgFABgHAAQgGAAgFgBQgFgCgDgEQgEgFgBgGQgCgHAAgLIAAgxQAAgLACgGQABgHAEgEQADgEAFgCQAFgDAGAAQAHAAAFADQAFACADAEgACShRQgHgJgLgEQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHgABnhHQAHAAAFADQAFACADAEQADAEACAHQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAgAgMAqIAAAiIAMAAIgKAkIAPAAIAPgkIAAgigAhrhUQgMAIgNADIAAASIAbAAIAACDIAeAAIAAitIgTAAQgJALgEACgAi0hgIhkAAIAABcIAaAAQAEgHAHgDQAGgEAIAAQAHAAAFADQAEABAEAFQADAEABAFQABAFAAAJQAAAJgBAHQgBAHgDAFQgDAEgGADQgFACgHAAQgGAAgFgBQgFgCgDgDQgDgDgCgFQgBgEAAgGIggAAQAAAKADAJQADAJAGAHQAHAIALAEIAMAEIAPABQAKAAARgFQALgEAHgJQAGgIAEgMQADgLAAgQQAAgNgCgJQgDgLgGgHQgGgJgJgDQgKgEgOAAQgJAAgIACQgHADgHAFIAAgkIBJAAgAk/gGQgGgGgKgEQgIgEgLgFIAAgsQAIABAHAFQAGAEAGAHIASgSQgJgKgKgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgJAEQgJADgGAGQgHAGgDAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAIAEAKABIAAAxQgJgBgIgHQgHgGgHgIIgUATQAEAFAGAGQAHAGAHAEQAHAEAHADQAHACAGAAIAAAcIATAAIAAgcQAKAAAJgDQAKgEAHgGQAHgHAEgIQAEgJAAgLQAAgLgFgKQgDgHgIgGgAmDhBQAFgFAJgBIAAApQgJgCgFgGQgHgGAAgHQAAgJAHgFgAlPAUQACAEAAAFQAAAJgGAGQgGAGgJAAIAAgtQALAFAEAEQADADABADg");
	this.shape_37.setTransform(-3.4,-36.5,1.108,1.108);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgCQgHgDgHgEQgHgEgGgGIgLgLIAVgTQAGAIAHAGQAJAGAIACIAAgxQgJgBgJgEQgJgFgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgHQAGgFAJgEQAIgDAKAAIAAgQIATAAIAAAQQAKACAQAHQALAHAJAJIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAAKgEAKQgEAIgHAGQgHAHgJAEQgJADgLAAIAAAcgAlkAxQAKAAAGgFQAGgGAAgJQAAgFgCgEQgCgEgDgDQgEgDgLgFgAmFhBQgGAFAAAJQAAAHAGAGQAGAFAIADIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgAFlhEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAHgHALgEQALgEAOgBQAOABALAEQALAEAHAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgHAIgLAEQgLAFgOgBQgOABgLgFgADfhEQgFACgDADQgDAFgCAHQgBAGAAALIAAAxQAAAKABAHQACAHADAEQADAFAFABQAFACAHAAQAHAAAFgCQAFgBADgFQADgEACgHQABgHAAgKIAAgxQAAgLgBgGQgCgHgDgFQgDgDgFgCQgFgCgHgBQgHABgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgABahEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgAj2BNIgNgDQgKgEgHgIQgGgHgDgJQgDgKAAgKIAfAAQAAAHACAEQABAEAEADQADAEAFABQAEACAGAAQAIAAAFgCQAFgDADgFQADgFACgGIABgRQAAgIgCgFQgBgFgDgFQgDgDgFgCQgFgDgGAAQgIAAgHAEQgGADgFAHIgaAAIAAhbIBkAAIAAAbIhJAAIAAAkQAIgFAHgCQAIgDAJAAQAOAAAJADQAKAFAGAHQAFAIADALQADAJAAANQAAAQgEALQgDAMgHAIQgHAIgLAFQgQAFgKgBgAhrBMIAAiDIgaAAIAAgTQAMgCANgHQAEgDAIgMIATAAIAACug");
	this.shape_38.setTransform(-3.3,-36.5,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#AFA54A").ss(2,1,1).p("AGchSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgAGEg/QAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCQAFgCAGAAQAHAAAFACQAFACADAEgAEWhSQgHgIgLgEQgLgEgOAAQgOAAgLAEQgLAEgHAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAHAHALAEQALAEAOAAQAOAAALgEQALgEAHgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgADrhHQAHAAAFACQAFACADAEQADAEACAHQABAHAAALIAAAxQAAAKgBAIQgCAGgDAEQgDAFgFACQgFABgHAAQgHAAgFgBQgFgCgDgFQgDgEgCgGQgBgIAAgKIAAgxQAAgLABgHQACgHADgEQADgEAFgCQAFgCAHAAgACRhSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgABahFQAFgCAGAAQAHAAAFACQAFACADAEQAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCgAgNAqIAAAiIANAAIgLAkIAPAAIAPgkIAAgigAhshUQgNAIgMACIAAATIAaAAIAACDIAeAAIAAiuIgTAAQgIALgEADgAi2hgIhkAAIAABcIAaAAQAFgHAGgDQAHgEAIAAQAGAAAFADQAFABADAFQADAEABAFQACAFAAAJQAAAJgBAHQgCAGgDAFQgDAFgFACQgFADgIAAQgGAAgEgBQgFgCgDgDQgEgEgBgEQgCgEAAgHIgfAAQAAAKADAKQADAJAGAHQAHAIAKAEIANAEIAPAAQAKAAAQgEQALgEAHgJQAHgIADgMQAEgLAAgQQAAgOgDgIQgDgLgFgIQgGgIgKgEQgJgEgOAAQgJAAgIADQgHADgIAFIAAgkIBJAAgAk2hGQgJgKgLgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgIADQgJAEgGAFQgHAHgEAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAJAEAJABIAAAxQgIgBgJgHQgHgGgGgIIgVATQAFAFAGAGQAGAGAHAEQAHAEAHACQAHADAGAAIAAAbIATAAIAAgbQALAAAJgDQAJgEAHgGQAHgHAEgIQAEgKAAgKQAAgMgEgJQgEgHgHgGQgHgGgKgFQgHgDgMgFIAAgsQAIABAHAFQAGAEAGAHgAmLg0QAAgIAGgFQAGgFAIgBIAAApQgIgDgGgFQgGgGAAgIgAlQAUQACAEAAAFQAAAJgGAGQgGAGgKAAIAAgtQALAFAEAEQADACACAEg");
	this.shape_39.setTransform(-2.3,-35.4,1.108,1.108);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AFA54A").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEQgHgFgGgFIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_40.setTransform(-2.3,-35.4,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-49.9,104.6,40.4);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.about();
	this.instance.setTransform(-328.4,-19.3,1,1,0,0,0,122.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.3,-21.6,56.6,31.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_213 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(213).call(this.frame_213).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("EAXXguyMAAABdlMgutAAAMAAAhdlg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(214));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({y:100.9},0).to({y:85.3,alpha:1},18,cjs.Ease.get(1)).wait(87));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("AgcAXIASgEQAAAXAKAAQAFAAACgDQACgDAAgFQAAgFgBgDQgCgFgCgCIgEgHIgQgKQgGgGgDgGQgEgGABgJQgBgOAJgHQAHgHANAAQAFgBAFACQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgGIgBgGIgCgEIgDgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACAEIAHAHIANANIAGAEIAFAHQADAFABAEQACAFAAAGQgBAMgHAIQgIAHgNABQgcAAgBgjg");
	this.shape_1.setTransform(289.6,573.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4F67").s().p("AgKA3QgGgCgEgCQgEgEgCgFQgCgEgBgGIgBgNIAAglIABgNQABgGACgFQACgFAEgDQAEgDAGgCQAFgCAFABQAJAAAGABQAGADAEAEQADAFABAGQACAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgBgGgIgBIgBAAIgCABIgEACIgBADIgCAEIAAAEIAAAGIAAAuQAAAKACAEQADAEAEAAIAFAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgFADgIAAQgFAAgFgDg");
	this.shape_2.setTransform(282.3,573.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4F67").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_3.setTransform(276.5,573.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4F67").s().p("AAQA4IgahBIAABBIgSAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_4.setTransform(270.8,573.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4F67").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgDAHABQARgBAIAKQAHAJAAASIAAAoQAAAJgBAGQgCAIgEAFQgEAFgGACQgHADgIAAQgQAAgIgKgAgFgoIgDAEIgCAFIAAAGIAAAyIAAAGIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIAAgGIAAgyIAAgGIgCgFQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgDAAQgCAAgDACg");
	this.shape_5.setTransform(263.1,573.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4F67").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQADAGAAAIQAAALgEAHQgDAGgHABIAQA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgEgEQgDgEgGAAIgHAAg");
	this.shape_6.setTransform(255.5,573.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_7.setTransform(248.5,573.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4F67").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_8.setTransform(241.8,573.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AALA4IAAgzIgVAAIAAAzIgVAAIAAhvIAVAAIAAAvIAVAAIAAgvIAVAAIAABvg");
	this.shape_9.setTransform(234.1,573.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgDgEgDgFQgCgEgBgGIgBgNIAAglIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgBAAIgDABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKADAEQACAEAFAAIAEAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgGADgGAAQgGAAgGgDg");
	this.shape_10.setTransform(226.3,573.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_11.setTransform(219.8,573.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4F67").s().p("AAXA4IgBhMIgQBMIgKAAIgRhMIgBBMIgQAAIAChvIAVAAIAPBOIAQhOIAVAAIACBvg");
	this.shape_12.setTransform(211.8,573.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4F67").s().p("AgVA4IAehvIANAAIgeBvg");
	this.shape_13.setTransform(204.2,573.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4F67").s().p("AgMA3QgFgCgEgDQgEgDgCgFIgDgLIAAgNIAAhKIATAAIAABLIABAIIAAAFIACAFIAEADQADABABAAQACAAADgBIADgDIACgFIABgFIABgIIAAhLIATAAIAABKIAAANIgDALQgDAFgDADQgEADgFACQgGACgHAAQgGAAgGgCg");
	this.shape_14.setTransform(197.5,573.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4F67").s().p("AgeA4IAAhvIAbAAQAIAAAHACQAHACAEAEQAEAFACAGQACAHAAAJIAAAnQAAAKgCAHQgCAGgEAFQgEAFgHACQgHACgIAAgAgJAqIAGAAIADgBIAEgBIADgDIABgDIABgEIAAgFIABgGIAAgnIgBgHIAAgFIgCgEIgCgCIgFgCIgDAAIgGAAg");
	this.shape_15.setTransform(189.8,573.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAZAAIAAAOg");
	this.shape_16.setTransform(183.1,573.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4F67").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_17.setTransform(178.4,578.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgEgEgCgFQgCgEgBgGIgBgNIAAglIABgNQABgGACgFQACgFAEgDQAEgDAFgCQAGgCAFABQAJAAAGABQAGADADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgCAAIgCABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKACAEQADAEAEAAIAFAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgFADgIAAQgFAAgGgDg");
	this.shape_18.setTransform(173.1,573.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgDgEgDgFQgCgEgBgGIgBgNIAAglIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGABQAGADADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgBAAIgDABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKADAEQACAEAFAAIAEAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgGADgGAAQgGAAgGgDg");
	this.shape_19.setTransform(165.6,573.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_20.setTransform(158.8,573.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4F67").s().p("AifAGIAAgLIE/AAIAAALg");
	this.shape_21.setTransform(150,573.3,1,1,90);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4F67").s().p("ApACJQAKgHARgQQAQgRgKAHIgCABQgOAHgrAHQgMgMgLgPQAfgIAfgTQARgKAJgIQBSgRArAGQAXADAGAGQgJhBhKAaQgXAJgaARQgOAIgIAHQgnAMgfABQgWABgPgEQgJgbgBgcQAbAoBBgdQAhgNAbgVQBBgPAtAIQAWAEAJAHQgHhDhGAZQgVAIgZAQQgWAPAEgBQhBAPgqACQgeACgPgFQACgdALgaQAcAjA4gXQAfgMAdgYQBLgPAuAHQAeAEAMAMQAUAmAAAoQAABEgyAxQgyAxhGAAQg3AAglgdgAmxBpQgJgygxARQgOAFgQALQgPALAEgBQAvgJAeAHQAQAEAGAFIAAAAgADxCZIAAgHIADAAQAFAAABgDIABgEIgKgiIAJAAIAFAWIAAAAIAGgWIAJAAIgLAjQgDAIgDADQgDACgFAAgABJCRQABgHAGAAIgDgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABgEAFgCQgFgEAAgFQAAgFAEgEQADgEAHAAQAFAAAEADQACgDAGAAIAAAGIgGABQACACAAAEQAAAFgDADQgEAEgGAAQgGAAgBACQAAACAMABQAMABAAAIQAAAEgFADQgDADgJAAQgPAAgBgIgABRCQQAAAEAKAAQADAAADgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgEgKAAQgHAAAAAEgABUBwQAAABAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAAGAGAAQAGAAAAgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAjCXIADgLIgEAAIAAgJIAKAAIAAAJIgFALgAGnCIQgFgFABgIQgBgJAFgFQAEgFAHAAQAHAAAEAFQAEAFAAAHIAAADIgVAAQAAAKAGAAQAFAAADgEIAHAEQgFAHgKAAQgHAAgEgFgAGsB2IANAAQgBgIgGAAQgHAAABAIgAFrCIQgEgFAAgIQAAgJAEgFQAFgFAHAAQAHAAAEAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAFAAADgEIAGAEQgFAHgJAAQgHAAgFgFgAFwB2IANAAQAAgIgGAAQgHAAAAAIgACqCKQgDgDAAgDQAAgMAUgCIAAgDQAAgFgFAAQgFAAgDAFIgFgEQABgDAEgCQAEgCAEAAQAHABADADQAEADAAAHIAAARIABAFIgJAAIAAgDQgGAEgFAAQgFAAgCgDgACzB+QgDABAAADQAAAFADAAQAEAAAEgEIAAgIIgIADgAByCIQgFgFAAgIQAAgJAFgFQAEgFAHAAQAIAAADAFQAFAFAAAJQAAAIgFAFQgDAFgIAAQgHAAgEgFgAB2B7QABALAGAAQAHAAAAgLQAAgMgHAAQgGAAgBAMgAAACIQgDgFgBgIQABgJADgFQADgFAHAAQAHAAAEAFQADAFABAHIAAADIgWAAQABAKAGAAQAFAAADgEIAHAEQgGAHgKAAQgGAAgDgFgAADB2IAOAAQgBgIgGAAQgHAAAAAIgAg7CIQgEgFAAgIQAAgJAEgFQAEgFAIAAQAGAAAFAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAEAAAEgEIAGAEQgFAHgJAAQgIAAgEgFgAg2B2IANAAQAAgIgGAAQgHAAAAAIgAjWCIQgDgFAAgIQAAgJADgFQAFgFAHAAQAHAAAFAFQADAFAAAJQAAAIgDAFQgFAFgHAAQgHAAgFgFgAjRB7QAAALAHAAQAHAAAAgLQAAgMgHAAQgHAAAAAMgAHKCMIAAgJIAJAAIAAAJgAGNCMIAAgjIAIAAIAAAGQADgGAGgBIAAAJIgBAAQgCAAgDADIgDADIAAAVgAFXCMIAAgXQABgGgFAAQgFAAgCAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAEAAQALAAAAAMIAAAYgAEsCMIgFgWIgGAWIgIAAIgJgjIAIAAIAGAWIAEgWIAIAAIAGAWIAEgWIAIAAIgJAjgADiCMIAAgXQAAgGgEAAQgFAAgDAEIAAAZIgIAAIAAgjIAHAAIAAAEQAIgFADAAQAKAAAAAMIAAAYgAgZCMIAAgjIAIAAIAAAGQADgGAHgBIAAAJIgBAAQgDAAgDADIgDADIAAAVgAhPCMIAAgXQAAgGgEAAQgEAAgDAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAFAAQAKAAAAAMIAAAYgAiMCMIAAgYQAAgFgEAAQgDAAgFAEIAAAZIgIAAIAAgYQAAgFgDAAQgEAAgEAEIAAAZIgIAAIAAgjIAIAAIAAAEQAEgFAGAAQAHAAACAFQAFgFAHAAQAIAAAAALIAAAZgAjvCMIAAgjIAHAAIAAAGQAEgGAGgBIAAAJIgBAAQgDAAgDADIgCADIAAAVgAkVCMIAAgxIAgAAIAAAIIgXAAIAAAMIARAAIAAAIIgRAAIAAAVgAIIBtIAAgVIgBAAIgGAVIgEAAIgGgVIAAAVIgEAAIAAgaIAHAAIAFASIABAAIAEgSIAHAAIAAAagAHjBtIAAgWIgHAAIAAgEIASAAIAAAEIgHAAIAAAWgAIuAuQgFgGAAgKIAAgqQAAgJAFgGQAGgHALAAQAKAAAGAHQAGAHgBAKIAAAFIgNAAQAAgJgCgEQgDgDgEAAQgGAAgBAJIAAAqQAAAJAIAAQAHAAABgMIAAgIIgKAAIAAgMIAYAAIAAArIgHAAIgDgGQgHAIgHAAQgJAAgGgGgAFbAtQgGgGAAgJIAAgqQAAgJAGgGQAGgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgGgHgAFkgMIAAApQAAAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAAAAJgAEeAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAFAHQAGAGAAALIAAAGIgPAAIAAgHQAAgKgGAAQgJAAABAJIAAApQgBAKAJAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgGAGQgFAHgKAAQgMAAgFgHgAAAAuQgGgGgBgLIAAg9IANAAIAAA+QAAAJAIAAQAIAAgBgJIAAg+IAPAAIAAA9QABALgHAGQgFAGgLAAQgKAAgEgGgAjTAtQgFgGAAgJIAAgqQAAgJAFgGQAHgHAKAAQAMAAAFAHQAGAGAAAJIAAAqQAAAJgGAGQgFAHgMAAQgKAAgHgHgAjKgMIAAApQABAKAHAAQAIAAAAgKIAAgpQAAgJgIAAQgHAAgBAJgAkPAtQgGgGAAgJIAAgqQAAgJAGgGQAFgHAMAAQAKAAAGAHQAFAHAAAKIAAAGIgPAAIAAgHQAAgKgGAAQgIAAAAAJIAAApQAAAKAIAAQAGAAAAgJIAAgKIAPAAIAAAKQAAAJgFAGQgGAHgKAAQgMAAgFgHgAJmAyIAAhSIAnAAIAAAMIgYAAIAAAUIASAAIAAANIgSAAIAAAZIAaAAIAAAMgAHyAyIAAhSIAoAAIAAAMIgZAAIAAAUIATAAIAAANIgTAAIAAAZIAaAAIAAAMgAHCAyIAAhSIAPAAIAABGIAWAAIAAAMgAGSAyIAAhSIAOAAIAABGIAXAAIAAAMgADRAyIAAgjIgSgvIAPAAIAKAgIAAAAIAKggIAPAAIgRAvIAAAjgACeAyIAAhGIgPAAIAAgMIArAAIAAAMIgOAAIAABGgAB0AyIAAhSIAPAAIAABSgABUAyIgSgzIAAAzIgNAAIAAhSIANAAIASAuIAAAAIAAguIAOAAIAABSgAgjAyIAAhAIgNBAIgHAAIgOhAIAABAIgMAAIAAhSIATAAIAKAvIAAAAIAKgvIAUAAIAABSgAhtAyIAAhAIgOBAIgHAAIgNhAIAAAAIAABAIgMAAIAAhSIATAAIAKAvIAKgvIAUAAIAABSgADAg5IgLgjIgHAAIAAAjIgOAAIAAhVIAUAAQAMAAAGAGQAHAGAAANQgBARgJAFIAMAmgACuhoIAFAAQAGAAADgDQACgDAAgHQAAgHgCgDQgDgDgGAAIgFAAgABpg5IAAhVIAnAAIAAANIgZAAIAAAWIATAAIAAAMIgTAAIAAAZIAaAAIAAANgABBg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAAgg5IgDgTIgPAAIgEATIgLAAIANhVIASAAIAQBVgAAQhZIALAAIgGgkIAAAAgAgjg5IgKg4IgKA4IgNAAIgPhVIANAAIAJA2IAAAAIAKg2IALAAIALA2IAAAAIAIg2IANAAIgPBVgAiDg5IAAhVIAnAAIAAANIgYAAIAAAWIASAAIAAAMIgSAAIAAAZIAaAAIAAANgAjAg5IAAhVIAWAAQAXAAgBAaIAAAhQABAagXAAgAiyhFIAGAAQAFAAADgDQACgCAAgHIAAglQAAgHgCgCQgDgDgFAAIgGAAgAjhg5IAAhVIAOAAIAABVgAkLg5IAAhIIgOAAIAAgNIArAAIAAANIgOAAIAABIgAp9hIQAWgqAogZQApgaAxAAQAzAAAqAcQgoANgiASQgWAMgJAIQhHAQgqAAQgPAAgMgCg");
	this.shape_22.setTransform(75.4,573.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(214));

	// 51000
	this.instance_1 = new lib._51000();
	this.instance_1.setTransform(215.7,236.3,1.464,1.464,0,0,0,46.5,11.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// a year
	this.instance_2 = new lib.ayear();
	this.instance_2.setTransform(80.1,227.1,1,1,0,0,0,74,12);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// about
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(397.7,177.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({startPosition:0},0).to({alpha:1},18,cjs.Ease.get(1)).wait(117));

	// and
	this.instance_4 = new lib.and();
	this.instance_4.setTransform(150.1,85.7,1,1,0,0,0,19.4,12);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// mechanics
	this.instance_5 = new lib.mechanics();
	this.instance_5.setTransform(150,59.5,1,1,0,0,0,62.1,14);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// if you mix
	this.instance_6 = new lib._if();
	this.instance_6.setTransform(71.7,26.9,1,1,0,0,0,48.3,12);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(166));

	// Layer 11
	this.instance_7 = new lib.newFrame();
	this.instance_7.setTransform(149.7,167.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(87));

	// images
	this.instance_8 = new lib.image();
	this.instance_8.setTransform(272.2,14.2,1.229,1.228,0,0,0,150,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({alpha:1},21,cjs.Ease.get(1)).wait(187));

	// Layer 14
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91D2E5").s().p("A3YEFIAAoJMAuxAAAIAAIJg");
	this.shape_23.setTransform(149.8,573.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4F67").s().p("EgXYAqwMAAAhVfMAuxAAAMAAABVfg");
	this.shape_24.setTransform(149.8,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.7,254.7,355.7,645.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;