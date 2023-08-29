(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,50);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(350.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_1.setTransform(341.4,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBEQgNgFgLgKQgKgKgFgOQgGgNABgQQgBgPAGgNQAFgOAKgKQALgKANgFQAOgGAPAAQAQAAAOAGQANAFALAKQAKAKAFAOQAGANgBAPQABAQgGANQgFAOgKAKQgLAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgFAKQgDAKAAALQAAAMADAKQAFAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_2.setTransform(327.6,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBzIAAjiIAUAAIAAAYIABAAQAEgHAHgFQAGgFAIgEQAOgGAOAAQARAAANAFQAOAGAKAKQAKAKAGANQAFAOAAAQQAAAPgFAOQgGAMgKAKQgKAKgOAGQgNAFgRAAQgOAAgOgGQgIgEgGgFQgHgFgEgHIgBAAIAABugAgVhcQgKAEgIAIQgHAIgFAKQgEAKAAAMQAAALAEALQAFAKAHAHQAIAHAKAEQAKAEALAAQAMAAAKgEQAKgEAHgHQAHgHAEgKQADgLAAgLQAAgMgDgKQgEgLgHgHQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_3.setTransform(310,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBEQgHgEgGgFQgGgFgFgHIARgMQAGAKAJAFQAKAGALAAQANAAAJgGQAFgDADgEQADgFAAgGQAAgJgIgGQgGgEgNgDIgSgEQgkgKAAgaQAAgLAEgIQAEgIAIgFQAHgGAJgCQAJgDAKAAQAPAAAMAGQAGADAFAFQAFAFADAGIgRAMQgFgJgHgFQgIgFgKAAQgLAAgIAFQgKAGAAAKQAAAKAHAFQAGAEAOADIAUAFQAHACAHADQAGADAEAFQAFAFADAGQACAGAAAIQAAALgEAIQgFAIgIAGQgHAFgKACQgKADgKAAQgUgCgJgEg");
	this.shape_4.setTransform(294,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_5.setTransform(274.3,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBEQgNgFgLgKQgKgKgFgOQgGgNABgQQgBgPAGgNQAFgOAKgKQALgKANgFQAOgGAPAAQAQAAAOAGQANAFALAKQAKAKAFAOQAGANgBAPQABAQgGANQgFAOgKAKQgLAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgFAKQgDAKAAALQAAAMADAKQAFAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_6.setTransform(260.5,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoBxIAAhNQAAgMgBgJQgCgJgFgGQgEgFgHgDQgIgDgLgBQgMABgKAHQgIAFgFAKQgGARAAANIAABIIgUAAIAAjiIAUAAIAABtIAAAAQAHgLANgHQANgIANAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADALAAANIAABYg");
	this.shape_7.setTransform(243.1,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBIIAAhgIgBgsIAUAAIAAAaIAAAAQAFgMALgIQAFgEAHgDQAHgCAJAAQAJAAAGACIgEATIgLgBQgLAAgJAEQgGAEgGAHQgFAGgDAJQgDAIAAAHIAABOg");
	this.shape_8.setTransform(222.9,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBHQgIgCgHgFQgGgGgEgHQgFgIAAgKQABgJACgGQACgHAEgFQAIgIAPgGQARgGAmgBIAKAAIAAgDQAAgKgCgGQgDgHgEgFQgEgEgHgDQgHgCgJAAQgMAAgLAFQgKAEgKAIIgLgOQAJgKAQgFQAOgGATAAQAKAAAKADQAJADAHAGQAHAHAFAJQADAKAAAMIAAA+QAAAQACAPIgTAAQgBgKAAgNIgBAAQgEAHgFAFQgGAFgFAEQgGADgIABIgPACQgJAAgJgDgAgMAFQgLADgHAGQgHAGAAAKQAAAHADAFQADAFAFADQAIAGAOAAQAJAAAIgEQAJgDAFgGQAGgHACgIQACgIABgKIAAgKIgKAAQgbABgNAEg");
	this.shape_9.setTransform(208.6,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBuQgOgGgKgKQgKgKgFgNQgGgOAAgPQAAgQAGgOQAFgMAKgKQAKgKAOgGQAOgFAPAAQAPAAAOAGQAIAEAGAFQAHAFAFAHIAAAAIAAhuIAUAAIAADiIgUAAIAAgYIAAAAQgFAHgHAFQgGAFgIAEQgOAGgPAAQgPAAgOgFgAgVgJQgKAEgHAHQgHAHgDALQgEAKAAAMQAAALAEALQADAKAHAHQAHAIAKAEQAKAEALAAQAMAAAKgEQAKgEAIgIQAIgHAEgKQAEgLAAgLQAAgMgEgKQgEgKgIgIQgIgHgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_10.setTransform(191.5,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBHQgIgCgHgFQgGgGgFgHQgEgIABgKQAAgJACgGQACgHAEgFQAIgIAOgGQASgGAmgBIAKAAIAAgDQAAgKgCgGQgDgHgEgFQgFgEgGgDQgIgCgIAAQgLAAgMAFQgKAEgJAIIgMgOQAJgKAPgFQAQgGASAAQALAAAJADQAJADAHAGQAHAHAFAJQAEAKgBAMIAAA+QABAQABAPIgTAAQgBgKAAgNIgBAAQgEAHgFAFQgFAFgGAEQgGADgIABIgPACQgJAAgJgDgAgMAFQgLADgHAGQgHAGAAAKQAAAHADAFQACAFAGADQAIAGAOAAQAKAAAHgEQAJgDAFgGQAGgHACgIQACgIABgKIAAgKIgKAAQgbABgNAEg");
	this.shape_11.setTransform(174.7,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBIIAAhgIgBgsIAUAAIAAAaIAAAAQAFgMALgIQAFgEAHgDQAHgCAJAAQAJAAAGACIgEATIgLgBQgLAAgJAEQgGAEgGAHQgFAGgDAJQgDAIAAAHIAABOg");
	this.shape_12.setTransform(163.6,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape_13.setTransform(152.4,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgJgKQgLgKgEgOQgGgNAAgQQAAgPAGgNQAEgOALgKQAJgKANgFQANgGAOAAQAPAAANAGQAMAFAKAKQAIAKAEAMQAFANAAAOIAAAJIh0AAQABAKAEAJQAEAJAHAHQAHAHAJAEQAJAEAJAAQALAAARgIQALgGAGgKIAQAMIgNAOQgHAFgIAEQgHADgJACQgHACgKAAQgOAAgOgGgAAvgKQABgKgEgIQgDgIgGgGQgGgGgIgEQgJgDgKAAQgJAAgJAEQgIAEgIAGQgGAGgFAJQgDAIAAAIIBdAAIAAAAg");
	this.shape_14.setTransform(139.1,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAoBxIAAhNQAAgMgBgJQgCgJgFgGQgEgFgHgDQgIgDgLgBQgMABgKAHQgIAFgFAKQgGARAAANIAABIIgUAAIAAjiIAUAAIAABtIAAAAQAHgLANgHQANgIANAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADALAAANIAABYg");
	this.shape_15.setTransform(122.3,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_16.setTransform(109.1,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmAKIAAgTIBMAAIAAATg");
	this.shape_17.setTransform(99.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBzIAAh5IgeAAIAAgSIAeAAIAAgnQAAgNADgKQAEgKAFgGQAFgGAKgDQAIgDALAAQAHAAAKACIgEASQgIgCgHAAQgIAAgFADQgFACgDAFQgEAIAAASIAAAkIAhAAIAAASIghAAIAAB5g");
	this.shape_18.setTransform(90.5,13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQBzIAAh5IgeAAIAAgSIAeAAIAAgnQAAgNADgKQADgKAHgGQAFgGAIgDQAJgDALAAQAHAAAKACIgEASQgIgCgHAAQgIAAgFADQgFACgDAFQgEAIAAASIAAAkIAhAAIAAASIghAAIAAB5g");
	this.shape_19.setTransform(81.6,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdBEQgOgFgKgKQgKgKgFgOQgFgNAAgQQAAgPAFgNQAFgOAKgKQAKgKAOgFQAOgGAPAAQAQAAAOAGQANAFAKAKQALAKAFAOQAGANgBAPQABAQgGANQgFAOgLAKQgKAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgEAKQgEAKAAALQAAAMAEAKQAEAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_20.setTransform(67.7,17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AApBIIAAhNQAAgMgCgJQgBgIgFgHQgEgGgIgDQgHgDgLAAQgMABgKAHQgIAGgGAKQgFARAAAMIAABIIgVAAIAAhsIgBggIAVAAIABAXIAAAAQAHgMANgGQANgIANAAQANAAALADQAJAFAHAHQAGAHADAJQAEALAAANIAABYg");
	this.shape_21.setTransform(41.9,17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABOBqIgYg4IhsAAIgXA4IgZAAIBcjTIAUAAIBdDTgAAuAfIguhvIguBvIBcAAg");
	this.shape_22.setTransform(23.6,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A7sAnQgHgIAAgPQAAgNAFgLQAGgLAKgIQAJgIAOgCIAAAPQgIACgEAEQgFAFgDAFQgCAGAAAJQALAAAFAHQAFAGAAAGQAAAJgFAFQgHAGgHAAQgKAAgHgJgA8lAnQgIgIAAgPQABgNAFgLQAGgLAJgIQAKgIAOgCIAAAPQgJACgEAEQgEAFgDAFQgDAGAAAJQAMAAAEAHQAGAGAAAGQAAAJgGAFQgGAGgHAAQgKAAgHgJgAcBAXQAIgCAFgEQAEgFADgFQACgHABgIQgMAAgFgHQgFgGAAgGQAAgJAGgFQAGgGAHAAQAKAAAIAJQAGAIAAAPQABANgGAKQgGAMgKAIQgJAIgOACgAbHAXQAJgCAEgEQAFgFACgFQADgHAAgIQgLAAgFgHQgFgGAAgGQAAgJAGgFQAFgGAIAAQAKAAAHAJQAHAIAAAPQAAANgGAKQgFAMgJAIQgLAIgOACg");
	this.shape_23.setTransform(183.8,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,367.5,34), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(143.2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_1.setTransform(136.1,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVApIAAg2IAAgZIALAAIAAAPQACgHAHgFQACgCAEgBQAEgCAFAAIAJABIgDALIgGgBQgHAAgEADQgEACgDAEQgDAEgCAEIgBAJIAAAsg");
	this.shape_2.setTransform(129.3,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_3.setTransform(121,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBAIAAgsIgBgMQgBgFgDgDQgCgDgEgBQgEgCgHAAQgGAAgGAEQgFADgCAFQgEAKAAAHIAAApIgLAAIAAh/IALAAIAAA9IABAAQADgGAIgEQAHgEAHAAQAIAAAFACQAGACAEAEQADAEACAFQACAFAAAIIAAAyg");
	this.shape_4.setTransform(111.5,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMA8IgKgDIgJgFIgIgHIAJgJQAFAHAIAEIAIADIAJABQAHAAAHgDQAGgCADgEQAEgEACgGQABgGAAgGIAAgPIgGAHIgIAFQgGADgKAAQgIAAgHgDQgHgDgGgFQgGgGgDgGQgDgIAAgIQAAgJACgHQADgIAGgFQAGgGAHgDQAIgDAIAAQAIAAAGADQAFABAEADIAHAIIAAgNIALAAIAABOQABAHgCAGQgCAIgFAGQgHAHgFADIgKADIgLABIgMgBgAgKgwQgFADgFAEQgEAEgCAGQgCAFAAAGQAAAHACAFQACAGAEADQAFAEAFADQAFACAGAAQAGAAAFgCQAGgCAEgEQAEgDADgGQACgGAAgHQAAgGgCgFQgCgGgEgEQgEgEgGgDQgGgCgGAAQgGAAgFACg");
	this.shape_5.setTransform(96.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXApIAAgrIgBgMQgBgFgCgEQgDgDgEgCQgEgCgGAAQgHABgGAEQgFADgCAGQgDAKgBAGIAAApIgLAAIAAg9IAAgSIALAAIAAANIABAAQADgHAIgEQAIgEAGAAQAIAAAGACQAGACADAEQADAEACAGQACAGAAAHIAAAyg");
	this.shape_6.setTransform(87,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEA7IAAhOIAKAAIAABOgAgEgsQgDgCAAgEQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAAEgCACQgDACgDAAQgCAAgCgCg");
	this.shape_7.setTransform(80.3,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAwQgEgCgBgEQgCgFAAgGIAAgxIgRAAIAAgKIARAAIAAgXIAKAAIAAAXIAXAAIAAAKIgXAAIAAAtQAAAJADADQADADAGAAQAGAAAFgDIABAKQgHADgIAAQgKgBgCgDg");
	this.shape_8.setTransform(75.5,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_9.setTransform(68,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_10.setTransform(58.5,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwApIAAguIgBgKQgBgFgCgDQgCgDgEgCQgEgCgGAAQgGAAgEADQgEACgDAEQgDAEgBAGQgBAFAAAFIAAAqIgKAAIAAguIgBgKQgBgFgCgDQgDgDgEgCQgEgCgFAAQgHABgGAEQgEADgDAGQgDAKAAAGIAAApIgLAAIAAg9IgBgSIAMAAIAAAMIABAAIAFgGIAGgEQAHgEAHAAQAIAAAGADIAHAFQACAEACAFQABgEADgDIAGgFQAEgDAEgBIAIgBQAHAAAGACQAGACADAEQAEAEACAGQACAGAAAHIAAAyg");
	this.shape_11.setTransform(46.5,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBAwQgEgCgBgEQgCgFAAgGIAAgxIgRAAIAAgKIARAAIAAgXIAKAAIAAAXIAXAAIAAAKIgXAAIAAAtQAAAJADADQADADAGAAQAGAAAFgDIABAKQgHADgIAAQgKgBgCgDg");
	this.shape_12.setTransform(31.9,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAoIgZgjIgaAjIgOAAIAhgqIgdglIAPAAIAVAeIAWgeIANAAIgcAlIAiAqg");
	this.shape_13.setTransform(25,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_14.setTransform(16.2,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXApIAAgrIgBgMQgBgFgCgEQgDgDgEgCQgEgCgHAAQgGABgFAEQgGADgCAGQgEAKAAAGIAAApIgLAAIAAg9IgBgSIAMAAIAAANIABAAQAEgHAHgEQAIgEAGAAQAIAAAGACQAFACAEAEQAEAEABAGQADAGAAAHIAAAyg");
	this.shape_15.setTransform(6.6,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,147.7,21), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAfIAAgpIAAgTIAIAAIAAAMIAAAAQACgGAFgDIAFgDIAHgBIAGABIgCAIIgFgBQgEAAgEACIgFAFQgCADgBADIgBAHIAAAhg");
	this.shape.setTransform(69.3,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAeQgEgCgDgDQgDgDgBgEQgBgFAAgFIAAgmIAIAAIAAAhIABAJQABAEACACIAFAEQADACAFAAIACgBQAEgBADgCIAGgHIABgGIABgHIAAgeIAJAAIAAAuIAAAOIgIAAIgBgKIAAAAQgDAFgGADQgFADgGAAQgFAAgFgBg");
	this.shape_1.setTransform(62.9,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAeQgGgDgEgEQgEgEgDgGQgCgGAAgHQAAgGACgFQADgGAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAFAEQAEAFACAGQACAFABAGQgBAHgCAGQgCAGgEAEQgFAEgGADQgGACgHAAQgGAAgGgCgAgJgVQgDABgEAEQgDADgBAEQgCAFAAAEQAAAFACAEIAEAIIAHAGQAFACAEgBQAFABAEgCIAIgGQADgDACgFQABgEAAgFQAAgEgBgFQgCgEgDgDQgDgEgFgBQgEgCgFAAQgEAAgFACg");
	this.shape_2.setTransform(55.5,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAuIABgJQADABAEABQADAAADgEQADgCACgFIAEgMIgYg9IALAAIARAyIATgyIAKAAIgdBMIgDAGIgEAFIgFADIgHABIgIAAg");
	this.shape_3.setTransform(48.6,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAeQgGgDgEgEQgEgEgCgGQgDgGAAgHQAAgGADgFQACgGAEgFQAEgEAGgDQAGgCAFAAQAGAAAGACQAGADADAEQAEAEACAGQACAGAAAFIAAAEIgxAAQAAAEACAEIAEAHQAEADADACQAFACACgBQAFAAAHgDQAGgDACgEIAHAFIgGAGIgGAEIgHADIgIAAQgFAAgGgCgAAUgDIgBgIIgDgHQgDgCgEgBQgEgCgEAAIgHACQgEABgDADQgDACgBAEQgCADAAAFIAnAAIAAAAg");
	this.shape_4.setTransform(38.2,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAfIAAgpIAAgTIAIAAIAAAMIAAAAQACgGAFgDIAFgDIAHgBIAGABIgCAIIgFgBQgEAAgEACIgFAFQgCADgBADIgBAHIAAAhg");
	this.shape_5.setTransform(33,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAeQgEgCgDgDQgDgDgBgEQgBgFAAgFIAAgmIAIAAIAAAhIABAJQABAEACACIAFAEQADACAFAAIACgBQAEgBADgCIAGgHIABgGIABgHIAAgeIAJAAIAAAuIAAAOIgIAAIgBgKIAAAAQgDAFgGADQgFADgGAAQgFAAgFgBg");
	this.shape_6.setTransform(26.7,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAlIgEgFQgBgEAAgEIAAgmIgNAAIAAgIIANAAIAAgRIAIAAIAAARIARAAIAAAIIgRAAIAAAjQAAAGACADQACACAEAAQAFAAAEgCIABAIQgFACgHAAQgHgBgCgCg");
	this.shape_7.setTransform(21,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAeQgGgDgEgEQgFgEgCgGQgCgGAAgHQAAgGACgFQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFADQAGADAEAFIgHAFQgCgDgEgCQgEgDgFAAQgFAAgDACIgIAEQgDAEgBAEQgCAFAAAEQAAAFACAEQABAGADACQAEAEAEACQADACAFgBQAFAAAEgCQAEgCACgEIAHAGQgEAEgGAEQgFACgHAAQgGAAgGgCg");
	this.shape_8.setTransform(15.9,8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAtIAAg8IAHAAIAAA8gAgDghQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_9.setTransform(11,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAuIAAhbIAbAAQAHAAAFABQAFACAFADQADADACAEQACAFAAAHQAAAGgCAFQgCAEgDADQgFACgFABQgFACgHAAIgRAAIAAArgAgSgFIAPAAIAKgBIAHgDIADgFIABgGIgBgHIgDgFIgHgDQgFgCgFABIgPAAg");
	this.shape_10.setTransform(6.1,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,73.1,17), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,320,50), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,135,50), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_178 = function() {
		if(!this.alreadyExecuted){
			this.alreadyExecuted=true;
			this.loopNum=1;
		} else {
			this.loopNum++;
			if(this.loopNum==2){
				this.stop();
			}
		}
	}
	this.frame_239 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(178).call(this.frame_178).wait(61).call(this.frame_239).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.border, null, new cjs.Matrix2D(1,0,0,1,-197,-25)).s().p("AkrD6IAAnzIJXAAIAAHzg");
	this.shape.setTransform(187,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.border, null, new cjs.Matrix2D(1,0,0,1,-248.5,-25)).s().p("AoCD6IAAnzIQFAAIAAHzg");
	this.shape_1.setTransform(268.5,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.border, null, new cjs.Matrix2D(1,0,0,1,-78.5,-25)).s().p("AsQD6IAAnzIYhAAIAAHzg");
	this.shape_2.setTransform(78.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

	// Layer 11
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(402.5,25,1,1,0,0,0,67.5,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165).to({_off:false},0).to({x:252.5},11).wait(64));

	// Layer 10
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(410,35.6,1,1,0,0,0,73.9,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({x:90,alpha:1},11).wait(80));

	// Layer 9
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.6,16.6,1,1,0,0,0,36.5,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({_off:false},0).to({x:52.6,alpha:1},11).wait(88));

	// Layer 8
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,25,1,1,0,0,0,160,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).to({alpha:1},11).wait(46).to({alpha:0},11).wait(100));

	// Layer 7
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.3,74.8,0.73,0.73,0,0,0,184.1,16.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:24.8,alpha:1},11).to({_off:true},61).wait(157));

	// Layer 6
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,25);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},11).wait(229));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,alpha:1},11).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,320,50);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"border.png", id:"border"},
		{src:"logo.png", id:"logo"},
		{src:"p1.jpg", id:"p1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;