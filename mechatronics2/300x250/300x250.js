(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300x250_1.jpg", id:"_300x250_1"}
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



(lib._300x250_1 = function() {
	this.initialize(img._300x250_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.twoyears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("ATLBkQgKgDgJgHQgIgHgHgLQgGgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQAKAAAHgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgZgNIgPgIQgJgFgFgGQgHgHgCgIQgEgIAAgLQAAgNAEgKQADgLAIgHQAHgHAMgEQAMgEAOAAQANAAALAEQAKADAIAHQAIAGAEAJQAGAJACALIgiAKQgFgOgHgHQgHgGgKAAQgKAAgGAGQgFAFAAALQAAAFAEAFQADAEAGAFIAfARIAPAKQAJAEAFAGQAGAIAEAJQADAKAAALQABANgFALQgFAKgHAIQgJAHgMAEQgMAEgPAAQgMAAgKgDgAQwBkQgLgDgJgHQgIgHgGgLQgHgLgDgOIAmgIQABAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAIgGAAgLQAAgHgFgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgFgGQgHgHgDgIQgEgIAAgLQAAgNAEgKQAEgLAHgHQAIgHALgEQAMgEAPAAQAMAAALAEQAKADAJAHQAHAGAFAJQAFAJADALIgjAKQgFgOgGgHQgHgGgKAAQgKAAgGAGQgGAFABALQAAAFADAFQADAEAHAFIAeARIAPAKQAJAEAGAGQAGAIAEAJQADAKAAALQAAANgEALQgFAKgIAIQgJAHgLAEQgMAEgQAAQgMAAgJgDgAGhBkQgMgEgIgIQgJgIgFgNQgEgNAAgSIAAhHQAAgSAEgNQAFgNAJgIQAIgIAMgEQALgDAPAAQAOAAAMADQALAEAJAIQAIAIAFANQAEANABASIAABHQgBASgEANQgFANgIAIQgJAIgLAEQgMADgOAAQgPAAgLgDgAGpg+QgEADgCAGQgBAFAAAJIAABQQAAAIABAGQACAFAEAEQAFAFANAAQAMAAAHgFQACgEACgFQACgGAAgIIAAhQQAAgJgCgFQgCgGgCgDQgHgGgMAAQgNAAgFAGgAC4BkQgKgDgJgHQgIgHgHgLQgGgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgZgNIgPgIQgIgFgGgGQgHgHgDgIQgDgIAAgLQAAgNADgKQAEgLAIgHQAHgHAMgEQALgEAPAAQANAAAKAEQALADAIAHQAHAGAFAJQAGAJACALIgiAKQgFgOgHgHQgHgGgKAAQgJAAgGAGQgGAFAAALQAAAFAEAFQADAEAGAFIAfARIAPAKQAJAEAFAGQAGAIAEAJQAEAKAAALQAAANgFALQgFAKgHAIQgJAHgMAEQgMAEgPAAQgMAAgKgDgAqQBkQgMgEgIgIQgJgIgEgNQgFgNAAgSIAAhHQAAgSAFgNQAEgNAJgIQAIgIAMgEQAMgDAOAAQAOAAALADQAMAEAJAIQAJAIAEANQAFANgBASIAABHQABASgFANQgEANgJAIQgJAIgMAEQgLADgOAAQgOAAgMgDgAqJg+QgDADgBAGQgCAFgBAJIAABQQABAIACAGQABAFADAEQAHAFAMAAQAMAAAGgFQAEgEACgFQABgGAAgIIAAhQQAAgJgBgFQgCgGgEgDQgGgGgMAAQgMAAgHAGgAVFBlIAAgoIAoAAIAAAogAOABlIAAjIIBqAAIAAAiIhEAAIAAAuIAzAAIAAAgIgzAAIAAA2IBGAAIAAAigAMEBlIAAjIIAnAAIAACmIA9AAIAAAigAJ0BlIghhTIgSAAIAABTIgnAAIAAjIIA4AAQARAAANAEQANAEAIAIQAJAHAFAMQADALAAAOQABAKgCAIQgCAIgEAGQgEAHgFADQgGAFgIADIAmBagAJBgMIAUAAQAMAAAHgGQAEgEACgFQACgFAAgHQAAgIgCgFQgCgFgEgEQgHgGgMAAIgUAAgABTBlIgihTIgSAAIAABTIgkAAIAAjIIA2AAQAQAAANAEQANAEAJAIQAIAHAFAMQAEALAAAOQAAAKgCAIQgCAIgDAGQgEAHgFADQgHAFgIADIAmBagAAfgMIAUAAQANAAAHgGQADgEADgFQABgFAAgHQAAgIgBgFQgDgFgDgEQgHgGgNAAIgUAAgAhABlIgJgrIg2AAIgLArIglAAIAyjIIAyAAIAwDIgAhSAYIgShQIgBAAIgTBQIAmAAgAktBlIAAjIIBqAAIAAAiIhEAAIAAAuIA0AAIAAAgIg0AAIAAA2IBHAAIAAAigAmgBlIAAhSIg3h2IAqAAIAhBRIAhhRIAqAAIg4B2IAABSgAscBlIgciJIgBAAIgfCJIglAAIgqjIIAkAAIAbCCIABAAIAciCIAlAAIAcCCIABAAIAbiCIAkAAIgtDIgAwGBlIAAimIgtAAIAAgiICAAAIAAAiIgtAAIAACmgAzABlIg6iBIgBAAIAACBIgjAAIAAjIIAqAAIA1B1IABAAIAAh1IAjAAIAADIgA1sBlIAAjIIAmAAIAADIg");
	this.shape.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("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");
	this.shape_1.setTransform(0,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ATLBkQgKgDgJgHQgIgHgHgLQgGgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQAKAAAHgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgZgNIgPgIQgJgFgFgGQgHgHgCgIQgEgIAAgLQAAgNAEgKQADgLAIgHQAHgHAMgEQAMgEAOAAQANAAALAEQAKADAIAHQAIAGAEAJQAGAJACALIgiAKQgFgOgHgHQgHgGgKAAQgKAAgGAGQgFAFAAALQAAAFAEAFQADAEAGAFIAfARIAPAKQAJAEAFAGQAGAIAEAJQADAKAAALQABANgFALQgFAKgHAIQgJAHgMAEQgMAEgPAAQgMAAgKgDgAQwBkQgLgDgJgHQgIgHgGgLQgHgLgDgOIAmgIQABAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAIgGAAgLQAAgHgFgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgFgGQgHgHgDgIQgEgIAAgLQAAgNAEgKQAEgLAHgHQAIgHALgEQAMgEAPAAQAMAAALAEQAKADAJAHQAHAGAFAJQAFAJADALIgjAKQgFgOgGgHQgHgGgKAAQgKAAgGAGQgGAFABALQAAAFADAFQADAEAHAFIAeARIAPAKQAJAEAGAGQAGAIAEAJQADAKAAALQAAANgEALQgFAKgIAIQgJAHgLAEQgMAEgQAAQgMAAgJgDgAGhBkQgMgEgIgIQgJgIgFgNQgEgNAAgSIAAhHQAAgSAEgNQAFgNAJgIQAIgIAMgEQALgDAPAAQAOAAAMADQALAEAJAIQAIAIAFANQAEANABASIAABHQgBASgEANQgFANgIAIQgJAIgLAEQgMADgOAAQgPAAgLgDgAGpg+QgEADgCAGQgBAFAAAJIAABQQAAAIABAGQACAFAEAEQAFAFANAAQAMAAAHgFQACgEACgFQACgGAAgIIAAhQQAAgJgCgFQgCgGgCgDQgHgGgMAAQgNAAgFAGgAC4BkQgKgDgJgHQgIgHgHgLQgGgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgZgNIgPgIQgIgFgGgGQgHgHgDgIQgDgIAAgLQAAgNADgKQAEgLAIgHQAHgHAMgEQALgEAPAAQANAAAKAEQALADAIAHQAHAGAFAJQAGAJACALIgiAKQgFgOgHgHQgHgGgKAAQgJAAgGAGQgGAFAAALQAAAFAEAFQADAEAGAFIAfARIAPAKQAJAEAFAGQAGAIAEAJQAEAKAAALQAAANgFALQgFAKgHAIQgJAHgMAEQgMAEgPAAQgMAAgKgDgAqQBkQgMgEgIgIQgJgIgEgNQgFgNAAgSIAAhHQAAgSAFgNQAEgNAJgIQAIgIAMgEQAMgDAOAAQAOAAALADQAMAEAJAIQAJAIAEANQAFANgBASIAABHQABASgFANQgEANgJAIQgJAIgMAEQgLADgOAAQgOAAgMgDgAqJg+QgDADgBAGQgCAFgBAJIAABQQABAIACAGQABAFADAEQAHAFAMAAQAMAAAGgFQAEgEACgFQABgGAAgIIAAhQQAAgJgBgFQgCgGgEgDQgGgGgMAAQgMAAgHAGgAVFBlIAAgoIAoAAIAAAogAOABlIAAjIIBqAAIAAAiIhEAAIAAAuIAzAAIAAAgIgzAAIAAA2IBGAAIAAAigAMEBlIAAjIIAnAAIAACmIA9AAIAAAigAJ0BlIghhTIgSAAIAABTIgnAAIAAjIIA4AAQARAAANAEQANAEAIAIQAJAHAFAMQADALAAAOQABAKgCAIQgCAIgEAGQgEAHgFADQgGAFgIADIAmBagAJBgMIAUAAQAMAAAHgGQAEgEACgFQACgFAAgHQAAgIgCgFQgCgFgEgEQgHgGgMAAIgUAAgABTBlIgihTIgSAAIAABTIgkAAIAAjIIA2AAQAQAAANAEQANAEAJAIQAIAHAFAMQAEALAAAOQAAAKgCAIQgCAIgDAGQgEAHgFADQgHAFgIADIAmBagAAfgMIAUAAQANAAAHgGQADgEADgFQABgFAAgHQAAgIgBgFQgDgFgDgEQgHgGgNAAIgUAAgAhABlIgJgrIg2AAIgLArIglAAIAyjIIAyAAIAwDIgAhSAYIgShQIgBAAIgTBQIAmAAgAktBlIAAjIIBqAAIAAAiIhEAAIAAAuIA0AAIAAAgIg0AAIAAA2IBHAAIAAAigAmgBlIAAhSIg3h2IAqAAIAhBRIAhhRIAqAAIg4B2IAABSgAscBlIgciJIgBAAIgfCJIglAAIgqjIIAkAAIAbCCIABAAIAciCIAlAAIAcCCIABAAIAbiCIAkAAIgtDIgAwGBlIAAimIgtAAIAAgiICAAAIAAAiIgtAAIAACmgAzABlIg6iBIgBAAIAACBIgjAAIAAjIIAqAAIA1B1IABAAIAAh1IAjAAIAADIgA1sBlIAAjIIAmAAIAADIg");
	this.shape_2.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-15.3,279.9,22.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4F67").s().p("AggBEIAAiHIA9AAIAAAUIglAAIAAAjIAcAAIAAATIgcAAIAAAoIAoAAIAAAVg");
	this.shape.setTransform(-403.2,132.8,0.619,0.619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("AgZA8QgJgJAAgQIAAhFQAAgPAJgKQAJgKAQAAQAQAAAJALQAJAKAAAQIAAAJIgXAAQABgPgEgFQgDgGgFAAQgKABAAAPIAABEQAAAOAKAAQALABAAgUIAAgNIgMAAIAAgRIAkAAIAABEIgLAAIgFgLQgLANgKAAQgPAAgIgKg");
	this.shape_1.setTransform(-409.1,132.8,0.619,0.619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4F67").s().p("AggBEIAAiHIA+AAIAAAUIgmAAIAAAjIAcAAIAAATIgcAAIAAAoIApAAIAAAVg");
	this.shape_2.setTransform(-414.7,132.8,0.619,0.619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4F67").s().p("AgdBEIAAiHIAYAAIAAByIAjAAIAAAVg");
	this.shape_3.setTransform(-419.7,132.8,0.619,0.619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4F67").s().p("AgdBEIAAiHIAYAAIAAByIAjAAIAAAVg");
	this.shape_4.setTransform(-424.6,132.8,0.619,0.619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4F67").s().p("AgaA7QgJgJAAgPIAAhFQAAgPAJgKQAKgKAQAAQARAAAKAKQAIAKABAPIAABFQgBAPgIAJQgKALgRAAQgQAAgKgLgAgLghIAABDQAAAPALAAQAMAAAAgPIAAhDQAAgPgMgBQgLABAAAPg");
	this.shape_5.setTransform(-430.3,132.8,0.619,0.619);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4F67").s().p("AgZA7QgJgJAAgPIAAhFQAAgPAJgKQAJgKARAAQARAAAIALQAJAKAAAQIAAAKIgXAAIAAgKQgBgRgKAAQgLABgBAPIAABDQABAPALAAQAKABABgOIAAgRIAXAAIAAAQQAAAPgJAJQgIALgRAAQgRAAgJgLg");
	this.shape_6.setTransform(-436.4,132.8,0.619,0.619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4F67").s().p("AgKBEIAAg5IgdhOIAYAAIAPA0IAAAAIAQg0IAYAAIgdBOIAAA5g");
	this.shape_7.setTransform(-445,132.8,0.619,0.619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4F67").s().p("AgKBEIAAhzIgXAAIAAgUIBDAAIAAAUIgXAAIAABzg");
	this.shape_8.setTransform(-450.1,132.8,0.619,0.619);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AgKBEIAAiHIAVAAIAACHg");
	this.shape_9.setTransform(-454.3,132.8,0.619,0.619);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4F67").s().p("AAPBEIgchUIAAAAIAABUIgWAAIAAiHIAXAAIAaBMIABAAIAAhMIAUAAIAACHg");
	this.shape_10.setTransform(-459.1,132.8,0.619,0.619);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4F67").s().p("AgZA7QgKgJAAgSIAAhkIAYAAIAABmQAAAPALgBQAMABAAgPIAAhmIAYAAIAABkQAAASgKAJQgKAKgQAAQgPAAgKgKg");
	this.shape_11.setTransform(-465.2,132.8,0.619,0.619);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4F67").s().p("AAbBEIAAhpIgWBpIgJAAIgVhpIgBAAIAABpIgUAAIAAiHIAfAAIAPBOIAAAAIAQhOIAfAAIAACHg");
	this.shape_12.setTransform(-472,132.8,0.619,0.619);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4F67").s().p("AAbBEIAAhpIgWBpIgKAAIgUhpIgBAAIAABpIgVAAIAAiHIAgAAIAPBOIAAAAIARhOIAeAAIAACHg");
	this.shape_13.setTransform(-479.4,132.8,0.619,0.619);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4F67").s().p("AgaA7QgJgJAAgPIAAhFQAAgPAJgKQAKgKAQAAQARAAAKAKQAIAKAAAPIAABFQAAAPgIAJQgKALgRAAQgQAAgKgLgAgLghIAABDQAAAPALAAQAMAAAAgPIAAhDQAAgPgMgBQgLABAAAPg");
	this.shape_14.setTransform(-486.2,132.8,0.619,0.619);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4F67").s().p("AgZA7QgJgJAAgPIAAhFQAAgPAJgKQAJgKAQAAQARAAAKALQAIAKAAAQIAAAKIgYAAIAAgKQAAgRgLAAQgKABAAAPIAABDQAAAPAKAAQALABAAgOIAAgRIAYAAIAAAQQAAAPgIAJQgKALgRAAQgQAAgJgLg");
	this.shape_15.setTransform(-492.3,132.8,0.619,0.619);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4F67").s().p("AANAVIAAggIgBAAIgJAgIgFAAIgJggIAAAgIgHAAIAAgpIALAAIAHAcIAAAAIAIgcIALAAIAAApg");
	this.shape_16.setTransform(-415.5,141.6,0.619,0.619);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4F67").s().p("AgCAVIAAgiIgMAAIAAgHIAdAAIAAAHIgLAAIAAAig");
	this.shape_17.setTransform(-418.1,141.6,0.619,0.619);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4F67").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_18.setTransform(-420.3,145.5,0.619,0.619);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4F67").s().p("AgQAVQgHgIAAgNQAAgMAHgIQAHgIAJAAQALAAAHAIQAGAHAAALIAAAEIghAAQAAAQAKAAQAHAAAGgHIAKAHQgIALgQAAQgJAAgHgIgAgJgFIAUAAQgBgNgKAAQgJAAAAANg");
	this.shape_19.setTransform(-423.2,144.2,0.619,0.619);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4F67").s().p("AgNAdIAAg4IANAAIAAAKQADgKALgBIAAAPIgCAAQgFAAgEAEQgDADAAACIAAAhg");
	this.shape_20.setTransform(-426,144.2,0.619,0.619);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4F67").s().p("AgQAVQgHgIAAgNQAAgMAHgIQAHgIAJAAQALAAAHAIQAGAHAAALIAAAEIghAAQAAAQAKAAQAHAAAGgHIAKAHQgIALgQAAQgJAAgHgIgAgJgFIAUAAQgBgNgKAAQgJAAAAANg");
	this.shape_21.setTransform(-429.2,144.2,0.619,0.619);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4F67").s().p("AAJAnIAAglQAAgIgHAAQgFAAgFAGIAAAnIgOAAIAAhNIAOAAIAAAcQAIgHAGAAQARAAAAARIAAAng");
	this.shape_22.setTransform(-432.8,143.6,0.619,0.619);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4F67").s().p("AAIAcIgIghIAAAAIgHAhIgMAAIgPg3IANAAIAIAiIAIgiIALAAIAIAiIAIgiIANAAIgPA3g");
	this.shape_23.setTransform(-437.1,144.2,0.619,0.619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4F67").s().p("AgWAmIAAgLIAGAAQAHAAACgEIACgHIgBgHIgQgvIAOAAIAIAkIAAAAIAJgkIAOAAIgSA4QgEAMgDAEQgEAFgJAAg");
	this.shape_24.setTransform(-441.1,144.9,0.619,0.619);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C4F67").s().p("AAJAdIAAgkQAAgKgHAAQgFAAgFAGIAAAoIgOAAIAAg4IAMAAIAAAHQAKgIAGAAQARAAAAAUIAAAlg");
	this.shape_25.setTransform(-444.6,144.2,0.619,0.619);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C4F67").s().p("AgSAZQgEgFAAgGQAAgRAegDIAAgFQAAgHgIAAQgGAAgEAHIgJgHQACgEAHgDQAGgDAEAAQAMAAAFAFQAFAFAAANIAAAZIABAIIgNAAIgBgFQgJAGgHAAQgHAAgEgEgAgDAEQgGADAAAFQAAAHAHAAQAEAAAGgGIAAgMIgLADg");
	this.shape_26.setTransform(-448.4,144.2,0.619,0.619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C4F67").s().p("AgRAVQgGgIgBgNQABgMAGgIQAHgIAKAAQALAAAHAIQAHAIAAAMQAAANgHAIQgHAIgLAAQgKAAgHgIgAgJAAQAAASAJAAQALAAgBgSQABgRgLAAQgJAAAAARg");
	this.shape_27.setTransform(-454.1,144.2,0.619,0.619);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C4F67").s().p("AgZAZQAAgKALAAIgFgDQgEgDAAgEQAAgFAJgDQgIgGAAgJQAAgIAFgGQAHgGAKAAQAGAAAGAFQAEgFAKAAIAAAJIgJABQADAFAAAGQAAAIgFAFQgGAEgJAAQgKAAAAADQAAADARABQASACAAANQAAAHgGAFQgHAFgMAAQgZAAAAgOgAgMAYQAAAGANAAQAGAAADgCQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgHgPAAQgKAAAAAHgAgHgZQgDACAAAEQAAAKAKAAQAHAAAAgKQAAgEgCgCQgDgDgCAAQgEAAgDADg");
	this.shape_28.setTransform(-457.6,144.9,0.619,0.619);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C4F67").s().p("AgFAQIAFgQIgGAAIAAgPIANAAIAAAPIgHAQg");
	this.shape_29.setTransform(-462.7,146,0.619,0.619);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C4F67").s().p("AgQAVQgHgIAAgNQAAgMAHgIQAHgIAJAAQALAAAHAIQAGAHAAALIAAAEIghAAQAAAQAKAAQAHAAAGgHIAKAHQgIALgQAAQgJAAgHgIgAgJgFIAUAAQgBgNgKAAQgJAAAAANg");
	this.shape_30.setTransform(-465.6,144.2,0.619,0.619);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C4F67").s().p("AgNAdIAAg4IAMAAIAAAKQAEgKALgBIAAAPIgDAAQgEAAgEAEQgDADAAACIAAAhg");
	this.shape_31.setTransform(-468.4,144.2,0.619,0.619);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C4F67").s().p("AgQAVQgHgIAAgNQAAgMAHgIQAHgIAJAAQALAAAHAIQAGAHAAALIAAAEIghAAQAAAQAKAAQAHAAAGgHIAKAHQgIALgQAAQgJAAgHgIgAgJgFIAUAAQgBgNgKAAQgJAAAAANg");
	this.shape_32.setTransform(-471.6,144.2,0.619,0.619);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C4F67").s().p("AAJAnIAAglQAAgIgHAAQgGAAgEAGIAAAnIgOAAIAAhNIAOAAIAAAcQAIgHAGAAQARAAAAARIAAAng");
	this.shape_33.setTransform(-475.2,143.6,0.619,0.619);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C4F67").s().p("AAZAdIAAgmQAAgIgHAAQgEAAgIAHIAAAnIgLAAIAAgmQAAgIgHAAQgFAAgGAHIAAAnIgOAAIAAg4IAMAAIAAAHQAJgIAJAAQAIAAAEAJQAHgJAMAAQAOAAAAASIAAAng");
	this.shape_34.setTransform(-482.3,144.2,0.619,0.619);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C4F67").s().p("AgRAVQgGgIgBgNQABgMAGgIQAHgIAKAAQALAAAHAIQAHAIAAAMQAAANgHAIQgHAIgLAAQgKAAgHgIgAgKAAQAAASAKAAQALAAAAgSQAAgRgLAAQgKAAAAARg");
	this.shape_35.setTransform(-487,144.2,0.619,0.619);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C4F67").s().p("AgNAdIAAg4IANAAIAAAKQADgKALgBIAAAPIgDAAQgEAAgEAEQgDADAAACIAAAhg");
	this.shape_36.setTransform(-489.8,144.2,0.619,0.619);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C4F67").s().p("AgYAnIAAhNIAxAAIAAANIgiAAIAAASIAZAAIAAALIgZAAIAAAjg");
	this.shape_37.setTransform(-492.9,143.6,0.619,0.619);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C4F67").s().p("AAOBEIgPg5IgMAAIAAA5IgYAAIAAiHIAhAAQATAAAJAJQAKAJAAAWQAAAbgQAGIAUA+gAgNgFIAIAAQAIgBAEgEQAEgFAAgMQAAgMgEgEQgEgFgIAAIgIAAg");
	this.shape_38.setTransform(-448.3,121.8,0.619,0.619);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C4F67").s().p("AgfBEIAAiHIA9AAIAAAUIgmAAIAAAjIAdAAIAAATIgdAAIAAAoIAoAAIAAAVg");
	this.shape_39.setTransform(-454.1,121.8,0.619,0.619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C4F67").s().p("AgKBEIAAhzIgXAAIAAgUIBDAAIAAAUIgWAAIAABzg");
	this.shape_40.setTransform(-459.3,121.8,0.619,0.619);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C4F67").s().p("AARBEIgFgeIgXAAIgFAeIgWAAIAZiHIAbAAIAZCHgAgIARIARAAIgJg5IAAAAg");
	this.shape_41.setTransform(-464.5,121.8,0.619,0.619);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C4F67").s().p("AARBEIgRhZIgOBZIgUAAIgaiHIAWAAIAOBVIABAAIAQhVIARAAIAQBVIAAAAIANhVIAWAAIgYCHg");
	this.shape_42.setTransform(-471.3,121.8,0.619,0.619);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C4F67").s().p("AgfBEIAAiHIA9AAIAAAUIgmAAIAAAjIAcAAIAAATIgcAAIAAAoIAoAAIAAAVg");
	this.shape_43.setTransform(-477.9,121.8,0.619,0.619);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C4F67").s().p("AgiBEIAAiHIAiAAQAkAAAAApIAAA1QAAApgkAAgAgLAwIAIAAQAHAAAEgDQAEgFAAgKIAAg7QAAgKgEgEQgEgFgHAAIgIAAg");
	this.shape_44.setTransform(-483.8,121.8,0.619,0.619);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C4F67").s().p("AgKBEIAAiHIAVAAIAACHg");
	this.shape_45.setTransform(-488.6,121.8,0.619,0.619);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C4F67").s().p("AgKBEIAAhzIgXAAIAAgUIBDAAIAAAUIgWAAIAABzg");
	this.shape_46.setTransform(-492.8,121.8,0.619,0.619);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C4F67").s().p("AjFBIQAjhDBBgmQBCgqBOAAQBSAABFAtQhCAVg2AbQglATgPANQhuAahEAAQgaAAgTgEg");
	this.shape_47.setTransform(-518.2,120,0.619,0.619);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C4F67").s().p("AiUCnQAQgMAcgaQAbgbgRALIgDACQgVALhGAMQgWgUgQgYQAzgNAygfQAagQAPgNQCBgaBIAIQAkAFAKAKQgPhqh3AtQgjAOgrAcQgVALgOALQg/AUgyACQgjABgYgHQgRgpAAgtQArA9BqgsQA1gXAsgkQBngXBIANQAkAHAPALQgNhshwAoQgjANgmAZQgjAYAHgCQhpAZhFAEQgvADgZgIQADgvARgqQAvA4BaglQAygTAugnQB4gYBKALQAvAHAVATQAgA9AABDQAABthRBPQhQBPhxAAQhXAAg9gugABSBzQgQhShKAcQgZAJgZASQgYARAGgBQBMgPAvAMQAZAFAKAJIAAAAg");
	this.shape_48.setTransform(-515.2,135.3,0.619,0.619);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C4F67").s().p("AgFCgIAAk/IALAAIAAE/g");
	this.shape_49.setTransform(-391.9,131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C4F67").s().p("AgcAXIASgEQAAAXAKAAQAFAAACgDQACgDAAgFQAAgFgBgDQgCgFgCgCIgFgHIgPgKQgGgGgDgGQgDgGAAgJQgBgOAJgHQAHgHANAAQAFgBAFACQAEACADACQAEADACAEIADAIIABAKIgRAEIgBgGIgBgGIgCgEIgDgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgEAAgDADQgCADAAAFQAAAFACAEIAHAHIANANIAGAEIAFAHQADAFABAEQACAFAAAGQgBAMgHAIQgIAHgNABQgcAAgBgjg");
	this.shape_50.setTransform(-251.8,132.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C4F67").s().p("AgKA3QgGgCgEgCQgEgEgCgEQgCgFgBgGIgBgNIAAglIABgNQABgGACgFQACgFAEgDQAEgDAGgCQAFgCAFABQAJAAAGACQAGACAEAEQADAFABAGQACAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgBgGgIgBIgBAAIgCABIgEACIgBADIgCAEIAAAEIAAAGIAAAuQAAAKACAEQADAEAEAAIAFAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgFADgIAAQgFAAgFgDg");
	this.shape_51.setTransform(-259.1,132.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C4F67").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_52.setTransform(-264.8,132.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C4F67").s().p("AAQA4IgahBIAABBIgSAAIAAhvIAOAAIAaA+IAAg+IARAAIAABvg");
	this.shape_53.setTransform(-270.5,132.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C4F67").s().p("AgYAwQgHgKAAgSIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgDAHABQARgBAIAKQAHAJAAASIAAAoQAAAJgBAGQgCAHgEAGQgEAFgGACQgHADgIAAQgQAAgIgKgAgFgoIgDADIgCAGIAAAGIAAAyIAAAGIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIAAgGIAAgyIAAgGIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgDAAQgCAAgDACg");
	this.shape_54.setTransform(-278.3,132.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C4F67").s().p("AALA4IgMgzIgJAAIAAAzIgUAAIAAhvIAaAAQAGAAAHABQAGACAFADQAFAEACAGQADAGAAAIQAAALgEAHQgDAGgHABIAQA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgEgEQgDgEgGAAIgHAAg");
	this.shape_55.setTransform(-285.9,132.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_56.setTransform(-292.9,132.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2C4F67").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_57.setTransform(-299.5,132.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2C4F67").s().p("AALA4IAAgzIgVAAIAAAzIgVAAIAAhvIAVAAIAAAvIAVAAIAAgvIAVAAIAABvg");
	this.shape_58.setTransform(-307.2,132.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgDgEgDgEQgCgFgBgGIgBgNIAAglIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGACQAGACADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgBAAIgDABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKADAEQACAEAFAAIADAAIADgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgGADgGAAQgGAAgGgDg");
	this.shape_59.setTransform(-315,132.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAaAAIAAAOg");
	this.shape_60.setTransform(-321.5,132.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C4F67").s().p("AAXA4IgBhMIgQBMIgKAAIgRhMIgBBMIgQAAIAChvIAVAAIAPBOIAQhOIAVAAIACBvg");
	this.shape_61.setTransform(-329.6,132.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2C4F67").s().p("AgVA4IAehvIANAAIgeBvg");
	this.shape_62.setTransform(-337.1,132.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C4F67").s().p("AgMA3QgFgCgEgDQgEgDgCgFIgDgLIAAgNIAAhKIATAAIAABMIABAHIAAAFIACAFIAEADQADABABAAQACAAADgBIADgDIACgFIABgFIABgHIAAhMIATAAIAABKIAAANIgDALQgDAFgDADQgEADgFACQgGACgHAAQgGAAgGgCg");
	this.shape_63.setTransform(-343.8,132.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C4F67").s().p("AgeA4IAAhvIAbAAQAIAAAHACQAHACAEAEQAEAFACAGQACAHAAAJIAAAnQAAAKgCAHQgCAGgEAFQgEAFgHACQgHACgIAAgAgJAqIAGAAIADgBIAEgBIADgDIABgDIABgEIAAgFIABgGIAAgnIgBgHIAAgFIgCgEIgCgCIgFgCIgDAAIgGAAg");
	this.shape_64.setTransform(-351.6,132.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C4F67").s().p("AgWA4IAAhvIAtAAIAAAOIgZAAIAAAhIATAAIAAANIgTAAIAAAlIAZAAIAAAOg");
	this.shape_65.setTransform(-358.2,132.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C4F67").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_66.setTransform(-362.9,137.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgEgEgCgEQgCgFgBgGIgBgNIAAglIABgNQABgGACgFQACgFAEgDQAEgDAFgCQAGgCAFABQAJAAAGACQAGACADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgCAAIgCABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKACAEQADAEAEAAIAFAAIACgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgFADgIAAQgFAAgGgDg");
	this.shape_67.setTransform(-368.2,132.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2C4F67").s().p("AgLA3QgFgCgEgCQgDgEgDgEQgCgFgBgGIgBgNIAAglIABgNQABgGACgFQADgFADgDQAEgDAFgCQAGgCAGABQAIAAAGACQAGACADAEQAEAFACAGQABAFAAAIIAAAKIgUAAIAAgKQAAgJgBgCQgCgGgGgBIgBAAIgDABIgDACIgCADIgCAEIAAAEIAAAGIAAAuQAAAKADAEQACAEAFAAIADAAIADgBIACgDIABgDIABgDIAAgEIAAgEIAAgKIAUAAIAAAJIgBALIgDAJQgCAFgDADQgEADgFABQgGADgGAAQgGAAgGgDg");
	this.shape_68.setTransform(-375.8,132.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C4F67").s().p("AgJA4IAAhgIgTAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape_69.setTransform(-382.5,132.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#91D2E5").s().p("A3xEGIAAoLMAvjAAAIAAILg");
	this.shape_70.setTransform(-391.5,133.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.7,107.4,304.5,52.5);


(lib.newFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(111.1,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBEQgKgOAAgbIAAgzQAAgOACgLQACgKAFgHQAFgIAJgDQAKgEALAAQAYAAAKAMQALAMAAAXIAAAIIgcAAIAAgIIgBgJIgBgHQgBgDgCgDIgEgDIgIAAIgEAAIgEACIgDAEIgCAEIgBAGIgBAFIAAAHIAAA/QABAPADAHQADAHAJAAQAFgBAEgCQADgCACgDIADgJIABgOIAAgMIgSAAIAAgSIAtAAIAABRIgUAAIgCgRQgHATgTgBQgWAAgKgOg");
	this.shape_1.setTransform(103.3,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_2.setTransform(92.3,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBRIAAigIAbAAIAACgg");
	this.shape_3.setTransform(84.2,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBRIgShKIgNAAIAABKIgdAAIAAigIAlAAQALAAAJACQAJACAHAFQAHAFADAIQADAIAAANQAAAPgEAJQgFALgKACIAWBQgAgPgLIAHAAQAMABAFgGQAGgFAAgOQAAgNgFgFQgFgGgLAAIgJAAg");
	this.shape_4.setTransform(76.1,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBPQgIgCgGgFQgEgFgEgHQgCgHgCgIIgBgUIAAhpIAcAAIAABsIAAAKIACAIQABAEACADQABADAEABQADACADABQAEgBADgCQADgBACgDIADgHIABgIIAAgKIAAhsIAdAAIAABpQAAALgBAJQgBAIgEAHQgDAHgFAFQgFAFgIACQgIACgKAAQgKAAgHgCg");
	this.shape_5.setTransform(64.7,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBRIAAiLIgbAAIAAgVIBRAAIAAAVIgaAAIAACLg");
	this.shape_6.setTransform(54.8,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBQQgIgDgFgEQgGgFgDgHQgDgHgBgIQgCgIAAgKIAAg2QAAgLACgIQABgIADgHQADgHAGgEQAFgFAIgCQAIgDAIAAQAMAAAKADQAIADAFAGQAFAGACAJQACAJAAALIAAANIgcAAIAAgNQAAgNgCgEQgCgIgKAAIgCAAIgEAAIgFADIgCAEIgCAGIAAAGIAAAIIAABCQgBAOAEAHQAEAFAGABIAGgBIAEgCIADgDIABgEIABgFIABgGIAAgGIAAgOIAcAAIAAANQAAAJgBAHQgBAIgDAGQgEAHgEADQgFAEgIADQgIACgKAAQgIAAgIgCg");
	this.shape_7.setTransform(45.3,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_8.setTransform(34.6,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBRIAAigIBBAAIAAAUIgjAAIAAAvIAbAAIAAATIgbAAIAABKg");
	this.shape_9.setTransform(25.8,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBPQgIgCgGgFQgEgFgEgHQgCgHgCgIIgBgUIAAhpIAcAAIAABsIAAAKIACAIQABAEACADQABADAEABQADACADABQAEgBADgCQADgBACgDIADgHIABgIIAAgKIAAhsIAdAAIAABpQAAALgBAJQgBAIgEAHQgDAHgFAFQgFAFgIACQgIACgKAAQgKAAgHgCg");
	this.shape_10.setTransform(15.7,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_11.setTransform(4.6,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_12.setTransform(-6.1,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBRIgChuIgYBuIgPAAIgYhvIgBBvIgXAAIADigIAeAAIAWBvIAYhvIAdAAIADCgg");
	this.shape_13.setTransform(-18.1,16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBRIAAigIAmAAQAMAAALACQAJADAGAHQAGAGADAKQACAJAAANIAAA5QAAANgCAKQgDAKgGAGQgFAHgKADQgKAEgMAAgAgOA8IAJAAIAFgBIAHgCIADgDIACgFIABgGIABgHIAAgJIAAg5IAAgKIgBgHIgCgFIgEgEIgGgCIgHgBIgIAAg");
	this.shape_14.setTransform(-35.2,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghBRIAAigIBCAAIAAAUIgkAAIAAAvIAcAAIAAATIgcAAIAAA1IAlAAIAAAVg");
	this.shape_15.setTransform(-44.8,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQBQQgIgDgFgEQgFgFgDgHQgEgHgBgIQgBgIgBgKIAAg2QABgLABgIQABgIAEgHQADgHAFgEQAFgFAIgCQAIgDAIAAQAMAAAKADQAIADAFAGQAFAGACAJQADAJgBALIAAANIgcAAIAAgNQAAgNgBgEQgDgIgKAAIgCAAIgEAAIgFADIgCAEIgCAGIAAAGIAAAIIAABCQAAAOADAHQAEAFAGABIAGgBIAEgCIADgDIACgEIAAgFIABgGIAAgGIAAgOIAcAAIAAANQABAJgCAHQgBAIgDAGQgDAHgFADQgFAEgIADQgIACgKAAQgIAAgIgCg");
	this.shape_16.setTransform(-54.7,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_17.setTransform(-65.6,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_18.setTransform(-76.2,16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBRIghigIAbAAIATBuIAUhuIAbAAIghCgg");
	this.shape_19.setTransform(-86.6,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBRIAAigIAmAAQAMAAALACQAJADAGAHQAGAGACAKQADAJAAANIAAA5QAAANgDAKQgCAKgGAGQgGAHgJADQgKAEgMAAgAgNA8IAIAAIAGgBIAFgCIAEgDIACgFIABgGIABgHIAAgJIAAg5IAAgKIgBgHIgCgFIgEgEIgGgCIgGgBIgIAAg");
	this.shape_20.setTransform(-97.1,16.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_21.setTransform(-108,16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWBQIgmheIAABeIgZAAIAAigIAVAAIAlBbIAAhbIAZAAIAACgg");
	this.shape_22.setTransform(58.5,-6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBQIAAigIAbAAIAACgg");
	this.shape_23.setTransform(50.3,-6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpAhIAZgGQABAhAQAAQAHAAADgEQADgFAAgHQAAgGgCgGQgDgFgDgEIgHgJIgVgQQgKgJgEgIQgFgJAAgNQAAgTALgLQALgKATgBQAHABAHACQAHACAFAEQAEAEADAFIAEAMIACAOIgZAGIAAgJIgCgHIgDgHIgEgDQgDgCgCABQgHABgDADQgEAEAAAHQAAAHAEAGQADAEAGAHIATASIAJAHIAIAKQADAGACAHQACAHAAAHQAAATgLAKQgLAMgSAAQgpgBgCgxg");
	this.shape_24.setTransform(37.9,-6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQBQIgShKIgNAAIAABKIgdAAIAAigIAlAAQALAAAJADQAJACAHAFQAHAFADAIQADAJAAAMQAAAPgEAKQgFAKgKABIAWBQgAgPgLIAHAAQAMAAAFgFQAGgGAAgNQAAgNgFgGQgFgFgLAAIgJAAg");
	this.shape_25.setTransform(27.5,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghBQIAAigIBCAAIAAAWIgkAAIAAAuIAcAAIAAASIgcAAIAAA2IAlAAIAAAUg");
	this.shape_26.setTransform(17.8,-6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghBQIAAigIBCAAIAAAWIgkAAIAAAuIAcAAIAAASIgcAAIAAA2IAlAAIAAAUg");
	this.shape_27.setTransform(9.2,-6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQBQIgShKIgNAAIAABKIgdAAIAAigIAlAAQALAAAJADQAJACAHAFQAHAFADAIQADAJAAAMQAAAPgEAKQgFAKgKABIAWBQgAgPgLIAHAAQAMAAAFgFQAGgGAAgNQAAgNgFgGQgFgFgLAAIgJAAg");
	this.shape_28.setTransform(-0.7,-6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVBQIgHglIgaAAIgHAlIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_29.setTransform(-11.7,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBQQgIgDgFgFQgGgEgDgHQgDgHgBgIQgCgIAAgKIAAg3QAAgKACgIQABgIADgHQADgHAGgFQAFgEAIgDQAIgDAIAAQAMABAKADQAIADAFAHQAFAFACAJQACAJAAAKIAAAPIgcAAIAAgPQAAgMgCgDQgCgJgKAAIgCAAIgEABIgFACIgCAEIgCAGIAAAGIAAAIIAABCQgBAPAEAFQAEAHAGgBIAGAAIAEgCIADgDIABgEIABgFIABgFIAAgHIAAgOIAcAAIAAANQAAAJgBAIQgBAGgDAHQgEAGgEAFQgFAEgIACQgIADgKAAQgIAAgIgDg");
	this.shape_30.setTransform(-22.2,-6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNBQIAAiJIgbAAIAAgXIBRAAIAAAXIgaAAIAACJg");
	this.shape_31.setTransform(-36.8,-6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiBFQgLgNAAgbIAAg6QAAgMACgKQADgKAFgGQAFgIAKgDQAJgDALgBQAYAAALAOQALANAAAaIAAA6QAAANgCAJQgDAKgFAHQgGAHgJAEQgJAEgMAAQgYAAgKgOgAgHg5QgEABgBADQgCAEgBAEIAAAJIAABIIAAAIIABAGQABAEACACQACACADABIAGABIAHgBIAFgDIACgGIACgGIAAgIIAAhIIAAgJIgDgIQgBgDgEgBQgDgCgFAAQgEAAgDACg");
	this.shape_32.setTransform(-46.6,-6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAQBQIAAhJIgfAAIAABJIgdAAIAAigIAdAAIAABFIAfAAIAAhFIAdAAIAACgg");
	this.shape_33.setTransform(-58,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.3,-22.6,230.6,58.3);


(lib.mechanics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAZQAIgDAFgGQAEgHAAgJIgUAAIAAgnIAnAAIAAAlQAAAjghAHg");
	this.shape.setTransform(128.9,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgtAAIAAjxIAtAAIAABlIAvAAIAAhlIAtAAIAADxg");
	this.shape_1.setTransform(116.9,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYB4QgMgEgIgHQgIgHgFgLQgFgKgBgMQgDgMAAgPIAAhTQAAgPADgNQABgMAFgKQAFgLAIgHQAIgGAMgEQAMgEANAAQASAAANAFQAOAFAHAJQAHAKAEAMQADANAAAQIAAAVIgqAAIAAgVQgBgSgCgGQgDgMgPgBIgDAAQgDAAgEABQgEABgDADIgEAGIgDAJIgBAJIAAALIAABlQAAAWAGAJQAEAJAMAAIAJgBIAGgDIAEgFIACgGIACgHIABgIIAAgKIAAgVIAqAAIAAAUQAAANgCALQgCALgFAJQgEAKgIAGQgHAHgLADQgLAEgQAAQgNAAgMgEg");
	this.shape_2.setTransform(100.2,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyB5IAAjxIBkAAIAAAgIg3AAIAABFIArAAIAAAeIgrAAIAABQIA4AAIAAAeg");
	this.shape_3.setTransform(86.1,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUB5IAAjQIgpAAIAAghIB7AAIAAAhIgoAAIAADQg");
	this.shape_4.setTransform(72.9,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAOIAAgbIBGAAIAAAbg");
	this.shape_5.setTransform(61.3,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgtAAIAAjxIAtAAIAABlIAvAAIAAhlIAtAAIAADxg");
	this.shape_6.setTransform(47.3,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BmQgQgVAAgpIAAhNQABgVADgPQADgQAIgLQAIgLANgGQAOgGASAAQAkAAAQASQAPARAAAkIAAAMIgqAAIAAgMIAAgOIgCgKQgCgFgCgDQgDgDgFgBQgEgCgHAAQgCAAgFABQgDABgDACQgCACgCADIgDAHIgCAIIgBAJIAAAKIAABgQABAWAFAKQAGAKAMAAQAJAAAFgDQAFgDAEgGQACgGABgIIABgTIAAgUIgaAAIAAgbIBDAAIAAB6IgdAAIgEgZQgKAcgdAAQgiAAgPgWg");
	this.shape_7.setTransform(30.1,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_8.setTransform(17.6,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgtAAIAAjxIAtAAIAABlIAvAAIAAhlIAsAAIAADxg");
	this.shape_9.setTransform(4.8,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-0.9,140.1,44.8);


(lib.jobs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape.setTransform(119.4,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/AyIAngIQABAwAZAAQAJAAAFgGQAGgHAAgKQgBgKgDgIQgEgJgEgFIgNgOIgggZQgNgNgIgNQgGgNAAgUQAAgcAQgQQARgQAdAAQALAAALADQAKAEAHAGQAGAFAFAJQAEAJADAJIACAVIglAHIgBgNIgCgLQgCgFgDgDIgHgGQgEgCgEAAQgKABgEAGQgGAGAAAKQAAALAFAIQAEAIAKAIIAeAcIANAMQAGAGAGAJQAFAJADAKQADAKAAAMQgBAbgQAQQgRARgbAAQg+AAgEhKg");
	this.shape_1.setTransform(108.9,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDB5IAAjxIA7AAQAPAAANADQAMADAKAHQAKAHAEAMQAFAMABASQgBAtgjAFQAVAFALAMQAKAPAAAaQAAAjgRASQgRASghAAgAgXBaIAQAAQASAAAIgKQAHgIAAgWQAAgWgIgKQgJgJgSgBIgOAAgAgXgVIANAAQASAAAHgIQAIgJAAgTQAAgKgCgHQgDgGgGgDQgFgEgHgBIgRgBIgGAAg");
	this.shape_2.setTransform(93.3,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BnQgRgUAAgnIAAhYQAAgTAFgOQADgPAIgKQAIgLAOgFQAOgFARAAQAlAAAQAUQAQAUABAnIAABYQgBATgDAOQgEAPgIAKQgIALgNAFQgOAGgTAAQgkAAgQgVgAgLhYQgFADgDAFQgCAFgCAGIgBAPIAABsIABAMQABAFACAFQABAFACADQADADAFACQAFACAEAAQAGAAAEgCQAFgCADgDIAFgIIACgKIAAgMIAAhsIgBgPQgBgGgDgFQgCgFgFgDQgFgCgIAAQgGAAgFACg");
	this.shape_3.setTransform(76.2,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglB8IAAggQAUAAAGgFQAGgHAAgSIAAi5IArAAIgBC6QAAAQgCALQgDALgGAHQgGAJgLADQgJADgQABg");
	this.shape_4.setTransform(62.1,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBB5IAAjxIA4AAQAUAAAPAEQAPAFAJAKQAJAJAEAOQADANAAAVIAABWQAAAVgDAOQgEAPgJAKQgJAJgOAFQgPAFgTAAgAgVBaIANAAIAJgBIAJgDQADgBACgFIAEgGIACgJIAAgLIAAgNIAAhXIAAgNIgBgLQgBgGgCgDIgGgFQgEgDgFAAIgLgBIgMAAg");
	this.shape_5.setTransform(42.6,-4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiB5Ig6iOIAACOIgmAAIAAjxIAfAAIA5CHIAAiHIAlAAIAADxg");
	this.shape_6.setTransform(25.9,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfB5IgKg4IgoAAIgKA4IgqAAIAyjxIAsAAIAxDxgAgPAjIAfAAIgQhhg");
	this.shape_7.setTransform(10,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzB5IgDimIgjCmIgYAAIgkimIgCCmIgiAAIAEjxIAtAAIAiCpIAkipIAsAAIAEDxg");
	this.shape_8.setTransform(-8,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyB5IAAjxIBkAAIAAAfIg3AAIAABGIArAAIAAAeIgrAAIAABPIA4AAIAAAfg");
	this.shape_9.setTransform(-24.1,-4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBB5IAAjxIA4AAQAUAAAPAEQAPAFAJAKQAJAJAEAOQADANAAAVIAABWQAAAVgDAOQgEAPgJAKQgJAJgOAFQgPAFgTAAgAgVBaIANAAIAJgBIAJgDQADgBACgFIAEgGIACgJIAAgLIAAgNIAAhXIAAgNIgBgLQgBgGgCgDIgGgFQgEgDgFAAIgLgBIgMAAg");
	this.shape_10.setTransform(-39.2,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAOIAAgbIBGAAIAAAbg");
	this.shape_11.setTransform(-52.9,-1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgsAAIAAjxIAsAAIAABlIAvAAIAAhlIAsAAIAADxg");
	this.shape_12.setTransform(-67,-4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BmQgPgVAAgpIAAhNQgBgVAEgPQADgQAIgLQAIgLAOgGQANgGASAAQAkAAAPASQAQARAAAkIAAAMIgqAAIAAgMIgBgOIgBgKQgCgFgCgDQgDgDgEgBQgFgCgGAAQgEAAgDABQgEABgDACQgDACgCADIgCAHIgBAIIgBAJIAAAKIAABgQgBAWAGAKQAFAKAOAAQAHAAAGgDQAFgDADgGIAFgOIABgTIAAgUIgaAAIAAgbIBBAAIAAB6IgcAAIgDgZQgMAcgcAAQgiAAgPgWg");
	this.shape_13.setTransform(-84.2,-4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_14.setTransform(-96.6,-4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgsAAIAAjxIAsAAIAABlIAvAAIAAhlIAsAAIAADxg");
	this.shape_15.setTransform(-109.5,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-26.7,244.9,44.8);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._if = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAZQAJgDAGgGQADgHAAgJIgTAAIAAgnIAlAAIAAAlQABAjghAHg");
	this.shape.setTransform(204.3,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BmQgPgVAAgpIAAhNQAAgVADgPQADgQAIgLQAIgLAOgGQANgGASAAQAkAAAPASQAQARAAAkIAAAMIgqAAIAAgMIgBgOIgBgKQgBgFgDgDQgDgDgEgBQgFgCgGAAQgEAAgDABQgEABgDACQgCACgDADIgCAHIgCAIIAAAJIAAAKIAABgQAAAWAFAKQAFAKAOAAQAHAAAGgDQAFgDADgGQADgGACgIIABgTIAAgUIgaAAIAAgbIBBAAIAAB6IgcAAIgDgZQgMAcgcAAQgiAAgPgWg");
	this.shape_1.setTransform(192.7,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiB5Ig6iOIAACOIgmAAIAAjxIAfAAIA5CHIAAiHIAlAAIAADxg");
	this.shape_2.setTransform(176.2,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_3.setTransform(163.9,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB5IAAhdIgyiUIApAAIAcBhIAdhhIApAAIgxCUIAABdg");
	this.shape_4.setTransform(152.5,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfB5IgKg5IgoAAIgKA5IgqAAIAyjxIAsAAIAxDxgAgPAjIAfAAIgQhhg");
	this.shape_5.setTransform(137.4,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhAB5IAAjxIBDAAQA+AAAABFQABAigSAQQgRAOgeAAIgVAAIAABsgAgUgRIAOAAQARAAAGgHQAHgIAAgTIgBgSQgBgGgDgFQgDgFgHgCQgGgBgJgBIgOAAg");
	this.shape_6.setTransform(122.4,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAOIAAgbIBGAAIAAAbg");
	this.shape_7.setTransform(108.7,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgtAAIAAjxIAtAAIAABmIAvAAIAAhmIAsAAIAADxg");
	this.shape_8.setTransform(94.7,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BmQgPgVAAgpIAAhNQAAgVADgPQADgQAIgLQAIgLAOgGQANgGASAAQAkAAAPASQAQARAAAkIAAAMIgqAAIAAgMIgBgOIgBgKQgBgFgDgDQgDgDgEgBQgFgCgGAAQgEAAgDABQgEABgDACQgCACgDADIgCAHIgBAIIgBAJIAAAKIAABgQAAAWAFAKQAFAKAOAAQAHAAAGgDQAFgDADgGQADgGACgIIABgTIAAgUIgaAAIAAgbIBBAAIAAB6IgcAAIgDgZQgMAcgcAAQgiAAgPgWg");
	this.shape_9.setTransform(77.5,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_10.setTransform(65,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYB5IAAhuIgvAAIAABuIgsAAIAAjxIAsAAIAABmIAvAAIAAhmIAsAAIAADxg");
	this.shape_11.setTransform(52.2,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.4,-1.2,168.1,44.8);


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
	this.shape.setTransform(116,147.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_1.setTransform(107.1,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA+QgKgMABgYIAAg0QAAgLABgJQADgIAFgHQAFgGAIgDQAIgDAKAAQAWAAAKAMQAJAMAAAXIAAA0QAAALgCAJQgCAJgFAGQgFAHgIADQgIADgLAAQgVAAgKgMgAgGg0QgEACgBADIgCAGIAAAJIAABAIAAAHIABAGIACAFQACACADABIAFABIAGgBQADgBACgCIACgFIABgGIAAgHIAAhAIAAgJIgCgGQgBgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_2.setTransform(96.8,147.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBIIgBhiIgVBiIgOAAIgVhiIgCBiIgUAAIACiPIAcAAIATBkIAVhkIAbAAIACCPg");
	this.shape_3.setTransform(85.6,147.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBIIgihUIAABUIgWAAIAAiPIASAAIAiBQIAAhQIAVAAIAACPg");
	this.shape_4.setTransform(70.2,147.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_5.setTransform(60.5,147.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBIIgGgiIgXAAIgGAiIgZAAIAeiPIAZAAIAeCPgAgIAVIARAAIgJg6g");
	this.shape_6.setTransform(50.6,147.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape_7.setTransform(42.5,147.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIAaAAIAAB9IAhAAIAAASg");
	this.shape_8.setTransform(34.9,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AqrClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIVXAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAqhCRIVDAAIAAkhI1DAAg");
	this.shape_9.setTransform(75.3,147.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// base
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91D2E5").s().p("AqrClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIVXAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(75.3,147.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// hit
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_11.setTransform(75.3,147.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,131.2,139,33.1);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_266 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(266).call(this.frame_266).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("AXXzcMAAAAm5MgutAAAMAAAgm5g");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(267));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({y:98.1},0).to({y:76.9,alpha:1},11,cjs.Ease.get(1)).wait(57));

	// Layer 5
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(635,152.2,1,1,0,0,0,93,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:101},15,cjs.Ease.get(1)).wait(243));

	// in 2 years
	this.instance_2 = new lib.twoyears();
	this.instance_2.setTransform(150.9,132.2,0.6,0.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({scaleX:1.05,scaleY:1.05,alpha:1},8).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(116));

	// high demand
	this.instance_3 = new lib.jobs();
	this.instance_3.setTransform(134.4,104.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({x:148.4,alpha:1},22).wait(128));

	// high tech
	this.instance_4 = new lib.mechanics();
	this.instance_4.setTransform(141.2,59.5,1,1,0,0,0,62.1,14);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({x:148.2,alpha:1},22,cjs.Ease.get(1)).wait(150));

	// high paying'
	this.instance_5 = new lib._if();
	this.instance_5.setTransform(65.9,25.1,1,1,0,0,0,48.3,12);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(73).to({x:72.9,alpha:1},22,cjs.Ease.get(1)).wait(172));

	// Layer 10
	this.instance_6 = new lib.newFrame();
	this.instance_6.setTransform(149.7,167.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(80));

	// images
	this.instance_7 = new lib.image();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({alpha:0.25},20,cjs.Ease.get(1)).wait(194));

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.7,79.7,355.7,347.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;