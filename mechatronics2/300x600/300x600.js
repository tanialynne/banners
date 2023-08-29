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


(lib.twoyears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("AGbB4QgMgEgLgIQgKgJgHgMQgJgOgEgRIAugKQACALADAHQAFAJAEAEQAKAJAMAAQANAAAHgHQAJgJAAgNQAAgIgGgHQgDgGgIgGQgHgFgcgRIgTgJQgLgHgGgHQgIgIgDgKQgGgKAAgMQAAgQAGgNQAFgMAIgJQAJgJAOgEQAOgFASAAQAPAAAMAFQANADAKAJQAJAHAGAMQAGAKAEANIgqAMQgGgRgJgIQgHgIgNAAQgLABgIAGQgGAHAAANQAAAGAFAHQADAEAIAGIAkAUIASAMQALAFAGAIQAJAJADALQAFAMAAANQAAAQgGANQgFANgJAJQgLAIgOAFQgOAFgTAAQgOAAgMgEgADhB4QgNgEgLgIQgKgJgHgMQgJgOgDgRIAtgKQACALAEAHQAEAJAFAEQAJAJAMAAQANAAAHgHQAJgJAAgNQAAgIgFgHQgDgGgJgGQgGgFgegRIgSgJQgKgHgHgHQgHgIgEgKQgFgKAAgMQAAgQAFgNQAEgMAKgJQAIgJAOgEQAOgFATAAQAOAAANAFQAMADAKAJQAJAHAGAMQAHAKADANIgqAMQgFgRgJgIQgIgIgMAAQgMABgHAGQgHAHABANQgBAGAFAHQAEAEAHAGIAkAUIATAMQAKAFAHAIQAHAJAFALQAEAMAAANQAAAQgFANQgGANgJAJQgLAIgOAFQgPAFgRAAQgOAAgMgEgAovB4QgOgFgKgJQgLgJgFgQQgFgQgBgWIAAhVQABgVAFgRQAFgPALgKQAKgJAOgFQAOgEARAAQASAAAMAEQAPAFAKAJQALAKAFAPQAGARgBAVIAABVQABAWgGAQQgFAQgLAJQgKAJgPAFQgMAEgSAAQgRAAgOgEgAomhLQgEAEgCAHQgDAHAAAJIAABhQAAAKADAHQACAGAEAEQAHAHAPAAQAPAAAHgHQAEgEACgGQACgHAAgKIAAhhQAAgJgCgHQgCgHgEgEQgHgHgPAAQgPAAgHAHgAIuB5IAAgwIAvAAIAAAwgAANB5IAAjxIB/AAIAAApIhQAAIAAA4IA9AAIAAAnIg9AAIAABAIBUAAIAAApgAiFB5IAAjxIAuAAIAADIIBKAAIAAApgAkxB5IgphjIgVAAIAABjIgvAAIAAjxIBDAAQAUABAQAEQAQAFAKAKQAKAJAGANQAEAOAAARQAAAMgBAJQgCAKgFAIQgFAHgGAEQgIAHgJADIAtBsgAlvgPIAXAAQAQAAAIgHQAEgFADgGQACgGAAgJQAAgIgCgHQgDgGgEgEQgIgIgQAAIgXAAg");
	this.shape.setTransform(1.4,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("ALnBkQgKgDgJgHQgIgHgGgLQgHgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgGgGQgGgHgDgIQgEgIAAgLQAAgNAEgKQAEgLAHgHQAIgHALgEQAMgEAPAAQAMAAALAEQAKADAIAHQAIAGAFAJQAFAJADALIgjAKQgFgOgHgHQgGgGgKAAQgKAAgGAGQgGAFAAALQAAAFAEAFQADAEAHAFIAeARIAPAKQAJAEAFAGQAHAIADAJQAEAKAAALQAAANgFALQgEAKgIAIQgJAHgLAEQgNAEgPAAQgMAAgKgDgAhhBkQgMgEgIgIQgJgIgEgNQgFgNAAgSIAAhHQAAgSAFgNQAEgNAJgIQAIgIAMgEQAMgDAOAAQAPAAALADQAMAEAIAIQAJAIAEANQAFANAAASIAABHQAAASgFANQgEANgJAIQgIAIgMAEQgLADgPAAQgOAAgMgDgAhZg+QgEADgBAGQgCAFAAAJIAABQQAAAIACAGQABAFAEAEQAGAFAMAAQAMAAAHgFQADgEACgFQABgGAAgIIAAhQQAAgJgBgFQgCgGgDgDQgHgGgMAAQgMAAgGAGgAKCBlIghhTIgTAAIAABTIgmAAIAAjIIA4AAQARAAANAEQANAEAIAIQAJAHAEAMQAEALAAAOQAAAKgBAIQgCAIgEAGQgEAHgFADQgGAFgIADIAmBagAJOgMIAUAAQANAAAHgGQAEgEACgFQACgFAAgHQAAgIgCgFQgCgFgEgEQgHgGgNAAIgUAAgAHuBlIgKgrIg1AAIgLArIgmAAIAyjIIAyAAIAxDIgAHcAYIgThQIAAAAIgTBQIAmAAgAEABlIAAjIIBqAAIAAAiIhDAAIAAAuIAzAAIAAAgIgzAAIAAA2IBGAAIAAAigACOBlIAAhSIg3h2IApAAIAiBRIAghRIAqAAIg4B2IAABSgAjtBlIgciJIgBAAIgeCJIglAAIgqjIIAjAAIAcCCIAAAAIAciCIAlAAIAcCCIABAAIAbiCIAkAAIgtDIgAnXBlIAAimIgtAAIAAgiICBAAIAAAiIgtAAIAACmgAqQBlIg7iBIgBAAIAACBIgjAAIAAjIIAqAAIA2B1IAAAAIAAh1IAkAAIAADIgAs9BlIAAjIIAnAAIAADIg");
	this.shape_1.setTransform(2.8,-16.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("ALQhXQgHAHgEALQgEAKAAANQAAALAEAIQADAIAGAHQAGAGAIAFIAQAIQAYANAGAFQAGAFADAFQAEAGAAAHQAAALgHAGQgGAHgLAAQgKAAgHgIQgFgEgDgGQgDgHgCgIIgmAIQAEAOAHALQAGALAIAHQAJAHAKADQAKADAMAAQAPAAANgEQALgEAJgHQAIgIAEgKQAFgLAAgNQAAgLgEgKQgDgJgHgIQgFgGgJgEIgPgKQgWgMgIgFQgHgFgDgEQgEgFAAgFQAAgLAGgFQAGgGAKAAQAKAAAGAGQAHAHAFAOIAjgKQgDgLgFgJQgFgJgIgGQgIgHgKgDQgLgEgMAAQgPAAgMAEQgLAEgIAHgAJghjIg4AAIAADIIAmAAIAAhTIATAAIAhBTIAqAAIgmhaQAIgDAGgFQAFgDAEgHQAEgGACgIQABgIAAgKQAAgOgEgLQgEgMgJgHQgIgIgNgEQgNgEgRAAgAJ2g9QAEAEACAFQACAFAAAIQAAAHgCAFQgCAFgEAEQgHAGgNAAIgUAAIAAg3IAUAAQANAAAHAGgAs9hjIAADIIAnAAIAAjIgArLgcIA7CBIAlAAIAAjIIgkAAIAAB1IAAAAIg2h1IgqAAIAADIIAjAAIAAiBgAoEhBIAtAAIAACmIAnAAIAAimIAtAAIAAgiIiBAAgAl3hjIAqDIIAlAAIAeiJIABAAIAcCJIAlAAIAtjIIgkAAIgbCCIgBAAIgciCIglAAIgcCCIAAAAIgciCgAhhhjQgMAEgIAIQgJAIgEANQgFANAAASIAABHQAAASAFANQAEANAJAIQAIAIAMAEQAMADAOAAQAPAAALgDQAMgEAIgIQAJgIAEgNQAFgNAAgSIAAhHQAAgSgFgNQgEgNgJgIQgIgIgMgEQgLgDgPAAQgOAAgMADgAheg1QABgGAEgDQAGgGAMAAQAMAAAHAGQADADACAGQABAFAAAJIAABQQAAAIgBAGQgCAFgDAEQgHAFgMAAQgMAAgGgFQgEgEgBgFQgCgGAAgIIAAhQQAAgJACgFgABXhjIA3B2IAABSIAmAAIAAhSIA4h2IgqAAIggBRIgihRgAFaANIAAggIgzAAIAAguIBDAAIAAgiIhqAAIAADIIBtAAIAAgiIhGAAIAAg2gAGwhjIgyDIIAmAAIALgrIA1AAIAKArIAlAAIgxjIgAHJg4IATBQIgmAAIAThQg");
	this.shape_2.setTransform(2.8,-16.1,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ALnBkQgKgDgJgHQgIgHgGgLQgHgLgEgOIAmgIQACAIADAHQADAGAFAEQAHAIAKAAQALAAAGgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgGgGQgGgHgDgIQgEgIAAgLQAAgNAEgKQAEgLAHgHQAIgHALgEQAMgEAPAAQAMAAALAEQAKADAIAHQAIAGAFAJQAFAJADALIgjAKQgFgOgHgHQgGgGgKAAQgKAAgGAGQgGAFAAALQAAAFAEAFQADAEAHAFIAeARIAPAKQAJAEAFAGQAHAIADAJQAEAKAAALQAAANgFALQgEAKgIAIQgJAHgLAEQgNAEgPAAQgMAAgKgDgAhhBkQgMgEgIgIQgJgIgEgNQgFgNAAgSIAAhHQAAgSAFgNQAEgNAJgIQAIgIAMgEQAMgDAOAAQAPAAALADQAMAEAIAIQAJAIAEANQAFANAAASIAABHQAAASgFANQgEANgJAIQgIAIgMAEQgLADgPAAQgOAAgMgDgAhZg+QgEADgBAGQgCAFAAAJIAABQQAAAIACAGQABAFAEAEQAGAFAMAAQAMAAAHgFQADgEACgFQABgGAAgIIAAhQQAAgJgBgFQgCgGgDgDQgHgGgMAAQgMAAgGAGgAKCBlIghhTIgTAAIAABTIgmAAIAAjIIA4AAQARAAANAEQANAEAIAIQAJAHAEAMQAEALAAAOQAAAKgBAIQgCAIgEAGQgEAHgFADQgGAFgIADIAmBagAJOgMIAUAAQANAAAHgGQAEgEACgFQACgFAAgHQAAgIgCgFQgCgFgEgEQgHgGgNAAIgUAAgAHuBlIgKgrIg1AAIgLArIgmAAIAyjIIAyAAIAxDIgAHcAYIgThQIAAAAIgTBQIAmAAgAEABlIAAjIIBqAAIAAAiIhDAAIAAAuIAzAAIAAAgIgzAAIAAA2IBGAAIAAAigACOBlIAAhSIg3h2IApAAIAiBRIAghRIAqAAIg4B2IAABSgAjtBlIgciJIgBAAIgeCJIglAAIgqjIIAjAAIAcCCIAAAAIAciCIAlAAIAcCCIABAAIAbiCIAkAAIgtDIgAnXBlIAAimIgtAAIAAgiICBAAIAAAiIgtAAIAACmgAqQBlIg7iBIgBAAIAACBIgjAAIAAjIIAqAAIA2B1IAAAAIAAh1IAkAAIAADIgAs9BlIAAjIIAnAAIAADIg");
	this.shape_3.setTransform(2.8,-16.1,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("An4gjIAABHQAAASAFANQAEANAJAIQAIAIAMAEQAMADAOAAQAPAAALgDQAMgEAIgIQAJgIAEgNQAFgNAAgSIAAhHQAAgSgFgNQgEgNgJgIQgIgIgMgEQgLgDgPAAQgOAAgMADQgMAEgIAIQgJAIgEANQgFANAAASgAlZhjIAADIIAnAAIAAhTIASAAIAiBTIApAAIgmhaQAIgDAGgFQAGgDAEgHQADgGACgIQACgIAAgKQAAgOgEgLQgFgMgIgHQgJgIgNgEQgNgEgRAAgAnPg1QABgGAEgDQAGgGAMAAQAMAAAHAGQADADACAGQABAFAAAJIAABQQAAAIgBAGQgCAFgDAEQgHAFgMAAQgMAAgGgFQgEgEgBgFQgCgGAAgIIAAhQQAAgJACgFgAkygMIAAg3IAUAAQANAAAHAGQADAEACAFQACAFAAAIQAAAHgCAFQgCAFgDAEQgHAGgNAAgAAyhBIBDAAIAAgiIhqAAIAADIIBtAAIAAgiIhGAAIAAg2IAzAAIAAggIgzAAgADohiQgKgEgMAAQgPAAgMAEQgMAEgHAHQgIAHgEALQgEAKAAANQAAALAEAIQADAIAHAHQAFAGAJAFIAPAIQAZANAFAFQAHAFADAFQAEAGAAAHQAAALgHAGQgHAHgKAAQgKAAgIgIQgEgEgDgGQgEgHgBgIIgmAIQADAOAHALQAHALAIAHQAIAHALADQAKADAMAAQAPAAAMgEQAMgEAIgHQAJgIAEgKQAEgLAAgNQAAgLgDgKQgEgJgGgIQgFgGgJgEIgQgKQgVgMgJgFQgGgFgDgEQgEgFAAgFQAAgLAFgFQAGgGAKAAQAKAAAHAGQAHAHAFAOIAigKQgCgLgGgJQgFgJgHgGQgIgHgLgDgAEwguQAAALAEAIQADAIAHAHQAFAGAIAFIAQAIQAYANAGAFQAGAFADAFQAEAGAAAHQAAALgHAGQgGAHgLAAQgKAAgHgIQgEgEgEgGQgDgHgCgIIgmAIQAEAOAHALQAGALAIAHQAJAHALADQAKADAMAAQAPAAAMgEQAMgEAIgHQAIgIAFgKQAEgLAAgNQAAgLgEgKQgDgJgHgIQgFgGgJgEIgPgKQgVgMgJgFQgGgFgEgEQgDgFAAgFQAAgLAFgFQAGgGAKAAQAKAAAGAGQAIAHAFAOIAigKQgCgLgGgJQgFgJgIgGQgHgHgLgDQgKgEgNAAQgPAAgMAEQgLAEgHAHQgIAHgEALQgEAKAAANgAhvhjIAADIIBlAAIAAgiIg+AAIAAimgAHRA9IAAAoIAoAAIAAgog");
	this.shape_4.setTransform(1.3,18.9,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFWBkQgKgDgJgHQgIgHgGgLQgHgLgEgOIAngIQABAIADAHQADAGAFAEQAHAIAKAAQALAAAHgHQAGgGABgLQAAgHgFgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgFgGQgHgHgDgIQgEgIAAgLQAAgNAEgKQAEgLAIgHQAHgHAMgEQALgEAPAAQAMAAALAEQALADAHAHQAIAGAFAJQAGAJACALIgiAKQgFgOgHgHQgHgGgKAAQgKAAgGAGQgGAFAAALQAAAFAFAFQADAEAGAFIAeARIAQAKQAIAEAFAGQAHAIAEAJQADAKAAALQAAANgFALQgEAKgIAIQgJAHgLAEQgNAEgOAAQgMAAgLgDgAC7BkQgKgDgJgHQgIgHgHgLQgGgLgEgOIAmgIQABAIAEAHQADAGAFAEQAHAIAKAAQALAAAGgHQAHgGAAgLQAAgHgEgGQgDgFgGgFQgGgFgYgNIgQgIQgIgFgGgGQgHgHgDgIQgDgIAAgLQAAgNADgKQAFgLAHgHQAIgHALgEQALgEAQAAQAMAAAKAEQALADAIAHQAHAGAGAJQAFAJACALIgiAKQgFgOgHgHQgHgGgKAAQgJAAgGAGQgGAFAAALQAAAFAEAFQADAEAHAFIAeARIAPAKQAIAEAGAGQAHAIADAJQAEAKAAALQAAANgFALQgFAKgHAIQgJAHgLAEQgNAEgPAAQgMAAgKgDgAnSBkQgLgEgJgIQgJgIgEgNQgEgNgBgSIAAhHQABgSAEgNQAEgNAJgIQAJgIALgEQAMgDAOAAQAPAAALADQAMAEAIAIQAJAIAFANQAEANAAASIAABHQAAASgEANQgFANgJAIQgIAIgMAEQgLADgPAAQgOAAgMgDgAnKg+QgEADgBAGQgCAFAAAJIAABQQAAAIACAGQABAFAEAEQAGAFAMAAQAMAAAHgFQADgEACgFQABgGAAgIIAAhQQAAgJgBgFQgCgGgDgDQgHgGgMAAQgMAAgGAGgAHRBlIAAgoIAnAAIAAAogAAMBlIAAjIIBpAAIAAAiIhDAAIAAAuIAzAAIAAAgIgzAAIAAA2IBGAAIAAAigAhuBlIAAjIIAmAAIAACmIA+AAIAAAigAj+BlIgihTIgSAAIAABTIgmAAIAAjIIA3AAQARAAANAEQAOAEAIAIQAIAHAFAMQAEALAAAOQAAAKgCAIQgBAIgEAGQgEAHgFADQgHAFgIADIAmBagAkygMIAUAAQANAAAHgGQADgEACgFQACgFAAgHQAAgIgCgFQgCgFgDgEQgHgGgNAAIgUAAg");
	this.shape_5.setTransform(1.3,18.9,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.8,-29.6,201.5,62.2);


(lib.newFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(107.2,116.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBEQgJgOgBgbIAAgzQAAgOADgLQACgKAFgHQAFgIAJgDQAKgFALAAQAXAAALANQALAMgBAXIAAAIIgcAAIAAgIIAAgJIgBgHQgBgEgCgCIgFgCIgHgBIgEABIgFABIgCAEIgCAEIgBAGIAAAFIAAAHIAAA/QgBAPAEAHQAEAHAIgBQAFAAAEgCQADgBACgFIADgJIABgNIAAgMIgRAAIAAgSIAsAAIAABRIgUAAIgCgRQgHATgTAAQgXgBgKgOg");
	this.shape_1.setTransform(99.4,109.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_2.setTransform(88.4,109.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBRIAAigIAbAAIAACgg");
	this.shape_3.setTransform(80.3,109.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBRIgShLIgNAAIAABLIgdAAIAAigIAlAAQALAAAJACQAJACAHAFQAHAEADAJQADAIAAANQAAAPgEAJQgFAKgKADIAWBQgAgPgLIAHAAQAMABAFgGQAGgFAAgOQAAgNgFgGQgFgFgLAAIgJAAg");
	this.shape_4.setTransform(72.2,109.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBPQgIgCgFgFQgEgFgEgHQgDgHgBgIIgBgUIAAhpIAdAAIAABsIAAAKIABAIQABAFACACQACADADABQADACADAAQAEAAADgCQADgBACgDIADgHIABgIIAAgKIAAhsIAdAAIAABpQAAALgCAJQgBAIgDAHQgCAHgGAFQgFAFgIACQgIACgKABQgJgBgJgCg");
	this.shape_5.setTransform(60.8,110);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBRIAAiLIgbAAIAAgVIBRAAIAAAVIgaAAIAACLg");
	this.shape_6.setTransform(50.9,109.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBQQgIgDgFgEQgFgFgDgHQgEgHgBgIQgBgIgBgKIAAg3QABgKABgIQABgIAEgHQADgHAFgFQAFgEAIgCQAIgEAIAAQANAAAIAEQAJADAFAHQAFAFACAJQACAJAAALIAAANIgcAAIAAgNQAAgMgBgEQgDgJgKAAIgCAAIgEABIgEACIgDAEIgCAGIgBAGIAAAIIAABCQAAAOAEAHQADAFAHAAIAGAAIAEgCIADgDIACgEIABgFIAAgGIAAgGIAAgOIAcAAIAAANQAAAJgBAHQgBAIgDAGQgDAGgGAFQgEAEgIACQgHACgLABQgIgBgIgCg");
	this.shape_7.setTransform(41.4,109.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_8.setTransform(30.7,109.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBRIAAigIBBAAIAAAUIgjAAIAAAvIAbAAIAAATIgbAAIAABKg");
	this.shape_9.setTransform(21.9,109.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBPQgIgCgEgFQgFgFgEgHQgDgHgBgIIgBgUIAAhpIAdAAIAABsIAAAKIABAIQABAFACACQACADADABQADACADAAQAEAAADgCQADgBACgDIADgHIABgIIAAgKIAAhsIAdAAIAABpQAAALgCAJQgBAIgCAHQgDAHgGAFQgFAFgIACQgIACgKABQgJgBgJgCg");
	this.shape_10.setTransform(11.8,110);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_11.setTransform(0.7,109.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_12.setTransform(-10,109.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBRIgChuIgYBuIgPAAIgYhvIgBBvIgXAAIADigIAeAAIAWBvIAYhvIAdAAIADCgg");
	this.shape_13.setTransform(-22,109.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBRIAAigIAmAAQAMAAALADQAJADAGAGQAGAGACAKQADAIAAAOIAAA5QAAAOgDAJQgCAJgGAHQgGAHgJADQgKADgMABgAgNA8IAIAAIAGgBIAFgCIAEgDIACgFIABgGIABgHIAAgJIAAg5IAAgJIgBgIIgCgFIgEgEIgGgCIgGAAIgIAAg");
	this.shape_14.setTransform(-39.1,109.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghBRIAAigIBCAAIAAAVIgkAAIAAAuIAcAAIAAASIgcAAIAAA2IAlAAIAAAVg");
	this.shape_15.setTransform(-48.7,109.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQBQQgIgDgFgEQgFgFgDgHQgEgHgBgIQgCgIABgKIAAg3QgBgKACgIQABgIAEgHQADgHAFgFQAFgEAIgCQAIgEAIAAQANAAAIAEQAJADAFAHQAFAFACAJQACAJABALIAAANIgdAAIAAgNQAAgMgBgEQgDgJgKAAIgCAAIgEABIgEACIgDAEIgCAGIgBAGIAAAIIAABCQABAOADAHQADAFAHAAIAGAAIAEgCIADgDIACgEIABgFIAAgGIAAgGIAAgOIAdAAIAAANQgBAJgBAHQgBAIgDAGQgDAGgGAFQgEAEgIACQgHACgLABQgIgBgIgCg");
	this.shape_16.setTransform(-58.6,109.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWBRIgmhfIAABfIgZAAIAAigIAVAAIAlBaIAAhaIAZAAIAACgg");
	this.shape_17.setTransform(-69.5,109.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_18.setTransform(-80.1,109.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBRIghigIAbAAIATBuIAUhuIAbAAIghCgg");
	this.shape_19.setTransform(-90.5,109.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBRIAAigIAmAAQAMAAAKADQAKADAGAGQAGAGADAKQACAIAAAOIAAA5QAAAOgCAJQgDAJgGAHQgFAHgLADQgJADgMABgAgNA8IAIAAIAFgBIAGgCIAEgDIADgFIABgGIAAgHIAAgJIAAg5IAAgJIgBgIIgCgFIgEgEIgGgCIgHAAIgHAAg");
	this.shape_20.setTransform(-101,109.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBRIgHgmIgaAAIgHAmIgcAAIAhigIAdAAIAhCggAgJAXIAUAAIgLhAg");
	this.shape_21.setTransform(-111.9,109.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAZBZIgqhpIAABpIgcAAIAAixIAWAAIAqBjIAAhjIAbAAIAACxg");
	this.shape_22.setTransform(60.4,84.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBZIAAixIAdAAIAACxg");
	this.shape_23.setTransform(51.5,84.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtAlIAcgGQAAAjASAAQAHAAAEgFQADgEABgIQAAgHgEgGQgCgGgDgEIgIgKIgYgSQgKgJgGgKQgEgKAAgOQAAgVAMgMQAMgLAVAAQAIgBAIADQAHADAFAEQAFAEADAGQAEAHABAHIACAPIgbAFIgBgJIgCgIQgBgEgCgDIgFgEQgDgBgCAAQgIAAgDAFQgEAEAAAHQAAAJAEAGQADAFAHAGIAVAVIAKAIIAIALQAEAGACAIQACAIAAAIQAAAUgMAMQgMAMgVAAQgsAAgCg2g");
	this.shape_24.setTransform(37.8,84.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARBZIgThSIgOAAIAABSIghAAIAAixIApAAQAMABAKACQAKACAIAFQAHAGAEAJQAEAKAAANQAAARgFAKQgFALgMACIAZBZgAgQgMIAHAAQANAAAGgFQAGgHAAgPQAAgOgFgGQgGgHgMAAIgJAAg");
	this.shape_25.setTransform(26.3,84.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkBZIAAixIBJAAIAAAYIgpAAIAAAyIAfAAIAAAWIgfAAIAAA6IApAAIAAAXg");
	this.shape_26.setTransform(15.7,84.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkBZIAAixIBJAAIAAAYIgoAAIAAAyIAfAAIAAAWIgfAAIAAA6IAoAAIAAAXg");
	this.shape_27.setTransform(6.3,84.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARBZIgThSIgOAAIAABSIghAAIAAixIApAAQAMABAKACQAKACAIAFQAHAGAEAJQAEAKAAANQAAARgFAKQgFALgMACIAZBZgAgQgMIAHAAQANAAAGgFQAGgHAAgPQAAgOgFgGQgGgHgMAAIgJAAg");
	this.shape_28.setTransform(-4.7,84.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXBZIgIgqIgcAAIgIAqIgfAAIAlixIAfAAIAkCxgAgKAaIAWAAIgMhHg");
	this.shape_29.setTransform(-16.8,84.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRBYQgJgDgGgFQgGgGgDgHQgEgIgBgIQgCgJAAgLIAAg9QAAgLACgJQABgJAEgIQADgHAGgFQAGgFAJgDQAIgDAKABQANgBAKAEQAJAEAGAGQAFAHADAJQACAKAAAMIAAAPIgfAAIAAgPQAAgOgCgEQgCgJgLgBIgCAAIgFACQgDAAgCADIgDAEIgCAGIgBAHIAAAIIAABJQAAARAEAGQAEAHAIgBIAGAAIAFgCIADgEIABgEIABgFIABgGIAAgIIAAgQIAfAAIAAAPIgBASQgCAIgDAHQgEAHgFAFQgFAFgJACQgIACgLAAQgKAAgIgCg");
	this.shape_30.setTransform(-28.3,84.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPBZIAAiYIgdAAIAAgZIBZAAIAAAZIgdAAIAACYg");
	this.shape_31.setTransform(-44.3,84.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmBLQgMgOAAgdIAAhAQAAgOADgLQADgKAGgIQAFgHAKgEQAKgEANABQAbAAAMAOQAMAPAAAcIAABAQAAAOgDAKQgDALgGAIQgGAHgKAFQgKADgNAAQgaAAgMgPgAgIhAQgEACgCAEQgCADAAAFIgBAKIAABPIABAJIABAHQABAEACADQACACADABQAEABADAAQAEAAAEgBQADgBACgCIADgHIACgHIAAgJIAAhPIgBgKQAAgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_32.setTransform(-55.2,84.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASBZIAAhRIgiAAIAABRIghAAIAAixIAhAAIAABLIAiAAIAAhLIAgAAIAACxg");
	this.shape_33.setTransform(-67.8,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.2,67.2,230.6,64.1);


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
	this.instance = new lib._300x250();
	this.instance.setTransform(-71.8,355.8,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,355.8,244.2,203.5);


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
	this.shape.setTransform(39.6,133.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_1.setTransform(30.7,133.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA+QgKgMAAgYIAAg0QAAgLACgJQADgIAFgHQAEgGAJgDQAIgDAKAAQAWAAAKAMQAJAMAAAXIAAA0QAAALgCAJQgCAJgFAGQgFAHgIADQgIADgLAAQgVAAgKgMgAgGg0QgDACgCADIgCAGIgBAJIAABAIABAHIABAGIACAFQACACADABIAFABIAGgBQADgBACgCIACgFIABgGIAAgHIAAhAIAAgJIgCgGQgCgDgCgCQgEgCgEAAQgDAAgDACg");
	this.shape_2.setTransform(20.4,133.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBIIgBhiIgVBiIgOAAIgVhiIgCBiIgUAAIACiPIAcAAIATBkIAVhkIAbAAIACCPg");
	this.shape_3.setTransform(9.2,133.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBIIgihUIAABUIgWAAIAAiPIASAAIAiBQIAAhQIAVAAIAACPg");
	this.shape_4.setTransform(-6.2,133.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBIIgQhCIgLAAIAABCIgbAAIAAiPIAiAAQAJAAAIABQAJACAGAFQAGAEADAIQADAHAAALQAAAOgEAJQgEAIgKACIAVBIgAgNgJIAGAAQAKAAAFgFQAFgFAAgMQAAgMgEgFQgFgFgJAAIgIAAg");
	this.shape_5.setTransform(-15.9,133.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBIIgGgiIgXAAIgGAiIgZAAIAeiPIAZAAIAeCPgAgIAVIARAAIgJg6g");
	this.shape_6.setTransform(-25.8,133.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIA7AAIAAASIghAAIAAAqIAZAAIAAARIgZAAIAAAwIAhAAIAAASg");
	this.shape_7.setTransform(-33.9,133.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBIIAAiPIAaAAIAAB9IAhAAIAAASg");
	this.shape_8.setTransform(-41.5,133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91D2E5").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAqICRIURAAIAAkhI0RAAg");
	this.shape_9.setTransform(-1.1,134.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// hit
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(-1.1,134.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,117.6,134,33.1);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_172 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(172).call(this.frame_172).wait(2));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("EAXXguyMAAABdlMgutAAAMAAAhdlg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(174));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({y:100.9},0).to({y:79.7,alpha:1},13,cjs.Ease.get(1)).wait(35));

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
	this.shape_22.graphics.f("#2C4F67").s().p("ApACJQAKgHARgQQAQgRgKAHIgCABQgOAHgrAHQgMgMgLgPQAfgIAfgTQARgKAJgIQBSgRArAGQAXADAGAGQgJhBhKAaQgXAJgaARQgOAIgIAHQgnAMgfABQgWABgPgEQgJgbgBgcQAbAoBBgdQAhgNAbgVQBBgPAtAIQAWAEAJAHQgHhDhGAZQgVAIgZAQQgWAPAEgBQhBAPgqACQgeACgPgFQACgdALgaQAcAjA4gXQAfgMAdgYQBLgPAuAHQAeAEAMAMQAUAmAAAoQAABEgyAxQgyAxhGAAQg3AAglgdgAmxBpQgJgygxARQgOAFgQALQgPALAEgBQAvgJAeAHQAQAEAGAFIAAAAgADxCZIAAgHIADAAQAFAAABgDIABgEIgKgiIAJAAIAFAWIAAAAIAGgWIAJAAIgLAjQgDAIgDADQgDACgFAAgABJCRQABgHAGAAIgDgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQABgEAFgCQgFgEAAgFQAAgFAEgEQADgEAHAAQAFAAAEADQACgDAGAAIAAAGIgGABQACACAAAEQAAAFgDADQgEAEgGAAQgGAAgBACQAAACAMABQAMABAAAIQAAAEgFADQgDADgJAAQgPAAgBgIgABRCQQAAAEAKAAQADAAADgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgEgKAAQgHAAAAAEgABUBwQAAABAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAAGAGAAQAGAAAAgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAjCXIADgLIgEAAIAAgJIAKAAIAAAJIgFALgAGnCIQgFgFABgIQgBgJAFgFQAEgFAHAAQAHAAAEAFQAEAFAAAHIAAADIgVAAQAAAKAGAAQAFAAADgEIAHAEQgFAHgKAAQgHAAgEgFgAGsB2IANAAQgBgIgGAAQgHAAABAIgAFrCIQgEgFAAgIQAAgJAEgFQAFgFAHAAQAHAAAEAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAFAAADgEIAGAEQgFAHgJAAQgHAAgFgFgAFwB2IANAAQAAgIgGAAQgHAAAAAIgACqCKQgDgDAAgDQAAgMAUgCIAAgDQAAgFgFAAQgFAAgDAFIgFgEQABgDAEgCQAEgCAEAAQAHABADADQAEADAAAHIAAARIABAFIgJAAIAAgDQgGAEgFAAQgFAAgCgDgACzB+QgDABAAADQAAAFADAAQAEAAAEgEIAAgIIgIADgAByCIQgFgFAAgIQAAgJAFgFQAEgFAHAAQAIAAADAFQAFAFAAAJQAAAIgFAFQgDAFgIAAQgHAAgEgFgAB2B7QABALAGAAQAHAAAAgLQAAgMgHAAQgGAAgBAMgAAACIQgDgFgBgIQABgJADgFQADgFAHAAQAHAAAEAFQADAFABAHIAAADIgWAAQABAKAGAAQAFAAADgEIAHAEQgGAHgKAAQgGAAgDgFgAADB2IAOAAQgBgIgGAAQgHAAAAAIgAg7CIQgEgFAAgIQAAgJAEgFQAEgFAIAAQAGAAAFAFQADAFAAAHIAAADIgVAAQAAAKAHAAQAEAAAEgEIAGAEQgFAHgJAAQgIAAgEgFgAg2B2IANAAQAAgIgGAAQgHAAAAAIgAjWCIQgDgFAAgIQAAgJADgFQAFgFAHAAQAHAAAFAFQADAFAAAJQAAAIgDAFQgFAFgHAAQgHAAgFgFgAjRB7QAAALAHAAQAHAAAAgLQAAgMgHAAQgHAAAAAMgAHKCMIAAgJIAJAAIAAAJgAGNCMIAAgjIAIAAIAAAGQADgGAGgBIAAAJIgBAAQgCAAgDADIgDADIAAAVgAFXCMIAAgXQABgGgFAAQgFAAgCAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAEAAQALAAAAAMIAAAYgAEsCMIgFgWIgGAWIgIAAIgJgjIAIAAIAGAWIAEgWIAIAAIAGAWIAEgWIAIAAIgJAjgADiCMIAAgXQAAgGgEAAQgFAAgDAEIAAAZIgIAAIAAgjIAHAAIAAAEQAIgFADAAQAKAAAAAMIAAAYgAgZCMIAAgjIAIAAIAAAGQADgGAHgBIAAAJIgBAAQgDAAgDADIgDADIAAAVgAhPCMIAAgXQAAgGgEAAQgEAAgDAEIAAAZIgJAAIAAgxIAJAAIAAASQAFgFAFAAQAKAAAAAMIAAAYgAiMCMIAAgYQAAgFgEAAQgDAAgFAEIAAAZIgIAAIAAgYQAAgFgDAAQgEAAgEAEIAAAZIgIAAIAAgjIAIAAIAAAEQAEgFAGAAQAHAAACAFQAFgFA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");
	this.shape_22.setTransform(75.4,573.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(174));

	// in 2 years
	this.instance_1 = new lib.twoyears();
	this.instance_1.setTransform(147.6,147.6,0.6,0.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({scaleX:1.05,scaleY:1.05,alpha:1},9).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(66));

	// high demand
	this.instance_2 = new lib.jobs();
	this.instance_2.setTransform(134.4,104.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({x:148.4,alpha:1},22).wait(79));

	// high tech
	this.instance_3 = new lib.mechanics();
	this.instance_3.setTransform(141.2,59.5,1,1,0,0,0,62.1,14);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({x:148.2,alpha:1},22,cjs.Ease.get(1)).wait(101));

	// high paying'
	this.instance_4 = new lib._if();
	this.instance_4.setTransform(65.9,25.1,1,1,0,0,0,48.3,12);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({x:72.9,alpha:1},22,cjs.Ease.get(1)).wait(123));

	// Layer 9
	this.instance_5 = new lib.newFrame();
	this.instance_5.setTransform(149.7,167.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(126).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(30));

	// images
	this.instance_6 = new lib.image();
	this.instance_6.setTransform(272.2,14.2,1.229,1.228,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({alpha:1},21,cjs.Ease.get(1)).wait(147));

	// Layer 12
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91D2E5").s().p("A3YEFIAAoJMAuxAAAIAAIJg");
	this.shape_23.setTransform(149.8,573.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4F67").s().p("EgXYAqwMAAAhVfMAuxAAAMAAABVfg");
	this.shape_24.setTransform(149.8,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(174));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.7,254.7,355.7,645.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;