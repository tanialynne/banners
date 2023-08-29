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


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIASAAIAAATg");
	this.shape.setTransform(68.3,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAZIATgEQABAYALAAQAFAAACgDQADgDAAgGQAAgFgDgEQgBgEgCgDIgGgGIgQgMQgGgGgEgHQgDgHAAgKQAAgOAIgIQAJgHANgBQAFAAAGACQAFACADADQADADACAEIAEAJIACAKIgTAEIgBgGIgBgGIgCgEIgDgDQgCgBgCAAQgFAAgCADQgCADgBAFQAAAGACAEQADAEAFAEIANAOIAIAFIAFAHQADAFABAFIACALQgBANgIAIQgIAJgOAAQgeAAgBglg");
	this.shape_1.setTransform(63,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAZIATgEQAAAYALAAQAFAAADgDQACgDAAgGQAAgFgCgEQgBgEgCgDIgGgGIgQgMQgGgGgEgHQgEgHABgKQgBgOAJgIQAJgHANgBQAFAAAFACQAGACADADQADADACAEIAEAJIACAKIgUAEIAAgGIgBgGIgCgEIgDgDQgCgBgCAAQgEAAgDADQgCADAAAFQgBAGACAEQADAEAFAEIAOAOIAHAFIAFAHQADAFABAFIACALQAAANgJAIQgIAJgOAAQgeAAgBglg");
	this.shape_2.setTransform(55.6,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_3.setTransform(48.8,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAWAAIAABoIAbAAIAAAPg");
	this.shape_4.setTransform(42.6,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_5.setTransform(31.5,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA0QgJgLAAgTIAAgrQAAgKACgHQACgHAFgFQADgFAHgDQAHgDAIAAQASAAAIAKQAJAKAAAUIAAArQgBAJgBAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgIgKgAgFgrQgDABgBADIgBAFIgBAIIAAA1IABAGIABAFIABAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IgBgIIgBgFQgBgDgDgBQgDgBgDAAQgCAAgDABg");
	this.shape_6.setTransform(23,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAZIAUgEQABAYALAAQAEAAADgDQACgDAAgGQAAgFgBgEQgCgEgDgDIgEgGIgQgMQgIgGgDgHQgDgHgBgKQAAgOAJgIQAIgHAOgBQAGAAAEACQAFACAEADQADADADAEIADAJIABAKIgTAEIAAgGIgBgGIgCgEIgEgDQgCgBgBAAQgEAAgDADQgCADAAAFQAAAGACAEQACAEAFAEIANAOIAHAFIAGAHQADAFABAFIABALQABANgJAIQgIAJgOAAQgeAAgCglg");
	this.shape_7.setTransform(11.5,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_8.setTransform(3.7,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgVAAIAZh3IAVAAIAYB3gAgHASIAPAAIgIgwg");
	this.shape_9.setTransform(-4.5,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_10.setTransform(-11.3,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA8IAAguIgZhJIAVAAIANAwIAOgwIAVAAIgZBJIAAAug");
	this.shape_11.setTransform(-18.5,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA0QgJgLABgTIAAgrQAAgKABgHQACgHAFgFQAEgFAGgDQAHgDAIAAQASAAAJAKQAHAKABAUIAAArQAAAJgCAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgIgKgAgFgrQgDABgBADIgCAFIAAAIIAAA1IAAAGIABAFIADAEIADACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IgBgIIgBgFQgCgDgCgBQgCgBgEAAQgCAAgDABg");
	this.shape_12.setTransform(-30,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA8IgNhPIgMBPIgSAAIgRh3IASAAIAKBMIANhMIANAAIANBMIAKhMIATAAIgSB3g");
	this.shape_13.setTransform(-39.5,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_14.setTransform(-48.1,18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_15.setTransform(-59,18.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_16.setTransform(-65.1,18.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIASAAIAAATg");
	this.shape_17.setTransform(125.9,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAZIATgEQABAYALAAQAFAAACgDQADgDAAgGQAAgFgDgEQgBgEgDgDIgFgGIgQgMQgGgGgEgHQgDgHAAgKQAAgOAIgIQAJgHANgBQAFAAAGACQAFACADADQADADACAEIAEAJIACAKIgTAEIgBgGIgBgGIgCgEIgDgDQgCgBgCAAQgFAAgCADQgCADgBAFQAAAGACAEQADAEAFAEIANAOIAIAFIAFAHQADAFABAFIACALQgBANgIAIQgIAJgOAAQgeAAgBglg");
	this.shape_18.setTransform(120.6,4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_19.setTransform(112.8,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_20.setTransform(105.5,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_21.setTransform(99.1,4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_22.setTransform(91.7,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgVAAIAZh3IAVAAIAYB3gAgHASIAOAAIgHgwg");
	this.shape_23.setTransform(83.5,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_24.setTransform(75.6,4.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAZIAUgEQAAAYALAAQAFAAADgDQADgDgBgGQAAgFgBgEQgCgEgDgDIgEgGIgQgMQgIgGgDgHQgEgHAAgKQAAgOAJgIQAIgHAOgBQAGAAAEACQAFACAEADQAEADACAEIADAJIABAKIgTAEIAAgGIgBgGIgCgEIgEgDQgCgBgBAAQgEAAgDADQgCADAAAFQAAAGACAEQACAEAFAEIANAOIAHAFIAGAHQADAFABAFIABALQABANgJAIQgIAJgOAAQgeAAgCglg");
	this.shape_25.setTransform(64.3,4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_26.setTransform(56.5,4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_27.setTransform(50.4,4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_28.setTransform(44.2,4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaA0QgHgLAAgTIAAgrQAAgKACgHQABgHAEgFQAFgFAGgDQAHgDAIAAQATAAAHAKQAIAKAAAUIAAArQAAAJgBAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgJgKgAgFgrQgCABgCADIgCAFIAAAIIAAA1IAAAGIABAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IAAgIIgCgFQgBgDgDgBQgDgBgDAAQgDAAgCABg");
	this.shape_29.setTransform(36,4.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMA8IgNg3IgKAAIAAA3IgWAAIAAh3IAcAAQAIAAAHABQAHACAFAEQAFADACAHQADAGAAAJQAAAMgEAHQgDAHgIABIARA8gAgLgHIAGAAQAIAAAEgFQAEgEAAgKQAAgKgEgEQgDgEgIAAIgHAAg");
	this.shape_30.setTransform(27.8,4.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_31.setTransform(20.3,4.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgUAAIAYh3IAVAAIAZB3gAgGASIAOAAIgIgwg");
	this.shape_32.setTransform(13.2,4.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMA8IAAg3IgXAAIAAA3IgWAAIAAh3IAWAAIAAAzIAXAAIAAgzIAWAAIAAB3g");
	this.shape_33.setTransform(4.9,4.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLA8QgGgCgEgEQgEgDgDgFQgCgGgBgGIgBgNIAAgoIABgOQABgHACgFQADgFAEgDQAEgEAGgCQAGgCAFAAQAKAAAGADQAGACAEAFQAEAFACAGQABAGAAAJIAAAKIgVAAIAAgKQAAgKgBgDQgCgGgHAAIgCAAIgCAAIgEADIgCADIgBAEIgBAFIAAAFIAAAyQAAAKADAFQADAEAEAAIAFAAIADgCIACgCIABgDIABgEIAAgEIAAgEIAAgLIAVAAIAAAKIgBAMIgDAKQgCAFgEADQgEADgFACQgGACgIAAQgFAAgGgCg");
	this.shape_34.setTransform(-3.4,4.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_35.setTransform(-10.4,4.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAZA8IgBhRIgSBRIgLAAIgShSIgBBSIgRAAIACh3IAXAAIAQBTIARhTIAXAAIACB3g");
	this.shape_36.setTransform(-19,4.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAdAAQAIAAAIACQAHACAFAFQAEAFACAHQACAHAAAKIAAApQAAALgCAHQgCAHgEAFQgEAFgIADQgHACgJAAgAgKAtIAHAAIADgBIAFgBIACgDIACgDIABgFIAAgFIAAgHIAAgqIAAgHIgBgFIgBgFIgDgCIgFgCIgDAAIgHAAg");
	this.shape_37.setTransform(-31.8,4.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_38.setTransform(-40.2,4.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAPA8IgFgcIgTAAIgFAcIgVAAIAZh3IAVAAIAYB3gAgHASIAPAAIgIgwg");
	this.shape_39.setTransform(-48.1,4.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZA8IgBhRIgSBRIgLAAIgShSIgBBSIgRAAIACh3IAXAAIAQBTIARhTIAXAAIACB3g");
	this.shape_40.setTransform(-57.2,4.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYA8IAAh3IAxAAIAAAPIgbAAIAAAjIAVAAIAAAOIgVAAIAAAoIAbAAIAAAPg");
	this.shape_41.setTransform(-65.2,4.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAcAAQAKAAAGACQAIACAEAFQAFAFACAHQACAHAAAKIAAApQAAALgCAHQgCAHgFAFQgEAFgHADQgHACgJAAgAgKAtIAGAAIAFgBIADgBIAEgDIABgDIABgFIAAgFIABgHIAAgqIgBgHIAAgFIgCgFIgDgCIgEgCIgFAAIgGAAg");
	this.shape_42.setTransform(-72.7,4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAHIAAgNIAiAAIAAANg");
	this.shape_43.setTransform(-79.6,5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARA8IgchGIAABGIgTAAIAAh3IAPAAIAcBDIAAhDIASAAIAAB3g");
	this.shape_44.setTransform(-86.4,4.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKA8IAAh3IAUAAIAAB3g");
	this.shape_45.setTransform(-92.5,4.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgIAMQAFgBACgDQABgEAAgEIgJAAIAAgTIASAAIAAATQABAQgQAEg");
	this.shape_46.setTransform(-99.7,10.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJA8IAAhnIgVAAIAAgQIA9AAIAAAQIgUAAIAABng");
	this.shape_47.setTransform(-104.5,4.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaA0QgHgLgBgTIAAgrQAAgKADgHQACgHADgFQAFgFAGgDQAHgDAIAAQATAAAHAKQAJAKgBAUIAAArQABAJgCAHQgCAIgEAFQgEAFgHADQgHADgJAAQgRAAgJgKgAgFgrQgCABgCADIgBAFIgBAIIAAA1IABAGIAAAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIAAgGIAAg1IAAgIIgCgFQgBgDgDgBQgCgBgEAAQgDAAgCABg");
	this.shape_48.setTransform(-111.8,4.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMA8IAAg3IgXAAIAAA3IgWAAIAAh3IAWAAIAAAzIAXAAIAAgzIAWAAIAAB3g");
	this.shape_49.setTransform(-120.4,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-7.9,256.3,44.7);


(lib.mechanics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("Ag7AvIAkgIQACAtAWAAQAKAAAFgGQAEgFAAgKQAAgKgDgHQgEgJgFgFIgKgLIgegYQgNgMgHgNQgGgMAAgSQAAgbAPgPQAQgOAbAAQAKAAAKADQAKADAGAGQAGAFAEAIQAFAIABAIIADAUIgjAHIgBgMIgCgKIgDgIQgDgEgEgCQgFgBgCAAQgKABgFAFQgEAGAAAIQgBAMAFAGQAEAIAKAIIAbAaIAMAKQAGAHAFAIQAFAIACAKQAEAKAAAKQAAAZgQAQQgQAOgaAAQg5AAgEhEg");
	this.shape.setTransform(119.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("AgXBwQgLgDgHgHQgIgHgEgKQgFgJgCgLQgBgLAAgOIAAhOQAAgOABgMQACgLAFgJQAEgLAIgGQAHgGALgEQALgDANAAQARgBAMAFQAMAEAHAKQAHAIADAMQADALAAAQIAAATIgnAAIAAgSQAAgRgCgHQgEgLgOgBIgCAAQgDAAgEABQgEABgCAEIgEAFIgCAIIgBAJIgBAKIAABeQAAAUAFAIQAFAJALAAIAIgBIAGgCIADgFIADgGIABgGIABgIIAAgJIAAgUIAnAAIAAATQAAAMgBAKQgCALgEAIQgFAKgHAFQgHAGgKADQgLADgOAAQgNABgLgEg");
	this.shape_1.setTransform(105.3,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgTBxIAAjhIAnAAIAADhg");
	this.shape_2.setTransform(93.8,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AAgBxIg3iFIAACFIgjAAIAAjhIAdAAIA2B+IAAh+IAiAAIAADhg");
	this.shape_3.setTransform(82.4,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAdBxIgKg1IglAAIgJA1IgnAAIAujhIApAAIAuDhgAgNAhIAcAAIgPhbg");
	this.shape_4.setTransform(67.5,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AAWBxIAAhnIgsAAIAABnIgpAAIAAjhIApAAIAABfIAsAAIAAhfIAqAAIAADhg");
	this.shape_5.setTransform(52,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AgXBwQgLgDgHgHQgIgHgEgKQgFgJgCgLQgBgLAAgOIAAhOQAAgOABgMQACgLAFgJQAEgLAIgGQAHgGALgEQALgDANAAQARgBAMAFQAMAEAHAKQAHAIADAMQADALAAAQIAAATIgnAAIAAgSQAAgRgCgHQgEgLgOgBIgCAAQgDAAgEABQgEABgCAEIgEAFIgCAIIgBAJIgBAKIAABeQAAAUAFAIQAFAJALAAIAIgBIAGgCIADgFIADgGIABgGIABgIIAAgJIAAgUIAnAAIAAATQAAAMgBAKQgCALgEAIQgFAKgHAFQgHAGgKADQgLADgOAAQgNABgLgEg");
	this.shape_6.setTransform(36.4,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AguBxIAAjhIBdAAIAAAdIg0AAIAABBIAoAAIAAAbIgoAAIAABLIA0AAIAAAdg");
	this.shape_7.setTransform(23.3,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AAvBxIgDiaIggCaIgWAAIgiibIgCCbIggAAIAEjhIAqAAIAgCdIAhidIApAAIAFDhg");
	this.shape_8.setTransform(7.3,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-10,132.9,42.1);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x250_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._if = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C993").s().p("AgPAXQAIgCAFgGQADgHAAgIIgSAAIAAgkIAjAAIAAAiQAAAhgdAGg");
	this.shape.setTransform(252.8,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C993").s().p("Ag7AvIAkgIQACAtAWAAQAKAAAFgGQAEgFAAgKQAAgKgDgHQgEgJgFgFIgKgLIgegYQgNgMgHgNQgGgMAAgSQAAgbAPgPQAQgOAbAAQAKAAAKADQAKADAGAGQAGAFAEAIQAFAIABAIIADAUIgjAHIgBgMIgCgKIgDgIQgDgEgEgCQgFgBgCAAQgKABgFAFQgEAGAAAIQgBAMAFAGQAEAIAKAIIAbAaIAMAKQAGAHAFAIQAFAIACAKQAEAKAAAKQAAAZgQAQQgQAOgaAAQg5AAgEhEg");
	this.shape_1.setTransform(243.1,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C993").s().p("AgXBwQgLgDgHgHQgIgHgEgKQgFgJgCgLQgBgLAAgOIAAhOQAAgOABgMQACgLAFgJQAEgLAIgGQAHgGALgEQALgDANAAQARgBAMAFQAMAEAHAKQAHAIADAMQADALAAAQIAAATIgnAAIAAgSQAAgRgCgHQgEgLgOgBIgCAAQgDAAgEABQgEABgCAEIgEAFIgCAIIgBAJIgBAKIAABeQAAAUAFAIQAFAJALAAIAIgBIAGgCIADgFIADgGIABgGIABgIIAAgJIAAgUIAnAAIAAATQAAAMgBAKQgCALgEAIQgFAKgHAFQgHAGgKADQgLADgOAAQgNABgLgEg");
	this.shape_2.setTransform(228.6,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C993").s().p("AgTBxIAAjhIAnAAIAADhg");
	this.shape_3.setTransform(217.1,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C993").s().p("AAgBxIg3iFIAACFIgjAAIAAjhIAdAAIA2B+IAAh+IAiAAIAADhg");
	this.shape_4.setTransform(205.7,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9C993").s().p("AgxBgQgPgTAAgkIAAhRQAAgTADgNQAEgNAIgKQAHgJANgGQAMgEARAAQAigBAQAUQAPASAAAlIAABRQAAASgEAOQgDANgIAKQgHAJgNAGQgNAEgRAAQgiABgPgUgAgLhSQgFADgCAFIgDAKIgBAOIAABlIABALIABAJQACAFACACQADADAEADQAEABAFAAQAFAAAFgBQAEgDACgDQADgCABgFIACgJIABgLIAAhlIgBgOQgBgGgCgEQgDgFgEgDQgFgCgHAAQgGAAgFACg");
	this.shape_5.setTransform(190.2,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C993").s().p("AAWBxIgZhoIgSAAIAABoIgqAAIAAjhIA0AAQAQAAANADQANADAKAHQAJAHAFAMQAEALAAASQAAAVgGANQgGAOgPAEIAfBwgAgVgPIAKAAQAQAAAIgIQAIgIAAgTQAAgSgHgIQgHgHgQAAIgMAAg");
	this.shape_6.setTransform(174.9,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C993").s().p("AgTBxIAAjCIglAAIAAgfIByAAIAAAfIglAAIAADCg");
	this.shape_7.setTransform(160.9,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9C993").s().p("AgXBwQgLgDgHgHQgIgHgEgKQgFgJgCgLQgBgLAAgOIAAhOQAAgOABgMQACgLAFgJQAEgLAIgGQAHgGALgEQALgDANAAQARgBAMAFQAMAEAHAKQAHAIADAMQADALAAAQIAAATIgnAAIAAgSQAAgRgCgHQgEgLgOgBIgCAAQgDAAgEABQgEABgCAEIgEAFIgCAIIgBAJIgBAKIAABeQAAAUAFAIQAFAJALAAIAIgBIAGgCIADgFIADgGIABgGIABgIIAAgJIAAgUIAnAAIAAATQAAAMgBAKQgCALgEAIQgFAKgHAFQgHAGgKADQgLADgOAAQgNABgLgEg");
	this.shape_8.setTransform(147.5,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AguBxIAAjhIBdAAIAAAdIg0AAIAABBIAoAAIAAAbIgoAAIAABLIA0AAIAAAdg");
	this.shape_9.setTransform(134.4,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AguBxIAAjhIApAAIAADEIA0AAIAAAdg");
	this.shape_10.setTransform(122.7,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9C993").s().p("AguBxIAAjhIBdAAIAAAdIg0AAIAABBIAoAAIAAAbIgoAAIAABLIA0AAIAAAdg");
	this.shape_11.setTransform(110.7,11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBhIgZhBIgYBBIgfAAIAnhlIgmhcIAhAAIAXA9IAWg9IAfAAIgmBgIApBhg");
	this.shape_12.setTransform(93.4,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBhIAAjBIAhAAIAADBg");
	this.shape_13.setTransform(84.1,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApBhIgDiEIgcCEIgTAAIgciFIgCCFIgbAAIADjBIAkAAIAbCHIAciHIAkAAIADDBg");
	this.shape_14.setTransform(72.6,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBfQgJgDgHgGQgFgFgFgJQgDgIgBgKQgCgLAAgNIAAh/IAiAAIAACDIAAALIACAKIAEAJQABADAFADQADACAEAAQAFAAAEgCIAGgGQACgDABgGIACgKIAAgLIAAiDIAiAAIAAB/IgBAYQgCAKgDAIQgEAJgGAFQgHAGgJADQgJADgNAAQgMAAgJgDg");
	this.shape_15.setTransform(51.8,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBSQgOgPAAggIAAhGQAAgPAEgLQACgMAHgIQAGgJALgEQALgEAOAAQAdAAANAQQANAQABAfIAABGQAAAPgEAMQgDALgGAJQgHAIgLAEQgKAFgPAAQgdAAgMgRgAgJhGQgEACgCAFIgDAIIgBAMIAABWIABAKIACAIQABAEACACIAGAEQADABAEABQAFgBADgBQAEgCACgCIAEgGIABgIIABgKIAAhWIgBgMQgBgEgCgEQgCgFgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_16.setTransform(38.3,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPBhIAAhKIgoh3IAhAAIAWBOIAYhOIAgAAIgnB3IAABKg");
	this.shape_17.setTransform(25.7,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmBhIAAjBIBOAAIAAAZIgrAAIAAA4IAiAAIAAAXIgiAAIAABZg");
	this.shape_18.setTransform(9.6,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQBhIAAjBIAhAAIAADBg");
	this.shape_19.setTransform(0.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-10,268.2,42.1);


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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4F67").s().p("AqrClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIVXAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAgAqhCRIVDAAIAAkhI1DAAg");
	this.shape_9.setTransform(75.3,147.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91D2E5").s().p("AqrClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIVXAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(75.3,147.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(141,216,232,0)").s().p("AqSClQgEAAgDgDQgDgDAAgEIAAk1QAAgEADgDQADgDAEAAIUlAAQAEAAADADQADADAAAEIAAE1QAAAEgDADQgDADgEAAg");
	this.shape_11.setTransform(75.3,147.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,131.2,139,33.1);


(lib.and = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQIAAgfIAeAAIAAAfg");
	this.shape.setTransform(98.4,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_1.setTransform(93.2,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_2.setTransform(88.1,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBhIAAimIggAAIAAgbIBhAAIAAAbIgfAAIAACmg");
	this.shape_3.setTransform(80.3,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBhIAAjBIBPAAIAAAZIgsAAIAAA4IAjAAIAAAXIgjAAIAABAIAtAAIAAAZg");
	this.shape_4.setTransform(70.5,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBSQgMgRAAgiIAAg9QAAgQACgNQADgMAGgIQAGgKALgFQALgEAOAAQAdAAAMAOQANAOAAAdIAAAJIgiAAIAAgJIAAgLIgCgIQgBgEgCgDIgGgDQgDgCgGAAIgFABIgFACQgCACgBACIgDAGIgBAHIAAAHIgBAHIAABMQAAASAFAJQAEAIAKAAQAGAAAFgCQAEgDADgFQACgFABgGIABgPIAAgRIgVAAIAAgUIA1AAIAABhIgYAAIgCgUQgIAWgXAAQgbAAgMgRg");
	this.shape_5.setTransform(58.2,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBfQgKgDgFgGQgGgFgFgJQgDgIgBgKQgCgLAAgNIAAh/IAjAAIAACDIAAALIABAKIADAJQACADAFADQADACAEAAQAFAAAEgCIAGgGQACgDABgGIACgKIAAgLIAAiDIAiAAIAAB/IgBAYQgCAKgEAIQgDAJgGAFQgHAGgJADQgJADgNAAQgMAAgJgDg");
	this.shape_6.setTransform(39,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBSQgMgPAAggIAAhGQAAgPADgLQACgMAHgIQAGgJALgEQALgEAOAAQAeAAANAQQANAQgBAfIAABGQAAAPgCAMQgEALgGAJQgHAIgKAEQgLAFgPAAQgcAAgOgRgAgJhGQgEACgCAFIgDAIIAAAMIAABWIAAAKIACAIQABAEABACIAHAEQADABAEABQAEgBAEgBQAEgCACgCIAEgGIABgIIAAgKIAAhWIAAgMQgBgEgCgEQgCgFgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(25.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBhIAAhKIgoh3IAiAAIAVBOIAYhOIAgAAIgoB3IAABKg");
	this.shape_8.setTransform(12.8,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9C993").s().p("AgSBxIAAjCIgmAAIAAgfIByAAIAAAfIglAAIAADCg");
	this.shape_9.setTransform(-4.8,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C993").s().p("AgTBxIAAjhIAnAAIAADhg");
	this.shape_10.setTransform(-14.6,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIAtAAQAQAAAMAEQALADAIAIQAHAIADALQADALAAAQIAABEQAAARgDALQgDAMgHAIQgHAIgMAEQgMAEgOAAgAgRBIIAKAAIAIgBIAGgCIAFgEIACgGIACgHIAAgJIABgKIAAhFIgBgLIgBgJIgCgGIgFgFQgDgCgDAAIgJgBIgKAAg");
	this.shape_11.setTransform(-29.8,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBhIguhyIAAByIgeAAIAAjBIAYAAIAuBsIAAhsIAdAAIAADBg");
	this.shape_12.setTransform(-43.2,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBhIgIgtIggAAIgIAtIghAAIAnjBIAjAAIAnDBgAgLAdIAYAAIgNhOg");
	this.shape_13.setTransform(-55.9,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-10,167.1,42.1);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA4IAAhgIgUAAIAAgPIA5AAIAAAPIgTAAIAABgg");
	this.shape.setTransform(37.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA3QgGgCgEgDQgDgDgCgFIgDgLIgCgNIAAhKIAVAAIAABLIAAAIIABAFIABAFIAEADQADACABAAQACAAADgCIAEgDIABgFIABgFIAAgIIAAhLIAVAAIAABKIgCANIgDALQgBAFgFADQgDADgGACQgFACgHAAQgGAAgFgCg");
	this.shape_1.setTransform(30.6,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAwQgHgJAAgTIAAgoQAAgJACgHQABgGAEgFQAEgFAGgCQAHgDAHABQARgBAIAKQAHAJAAASIAAAoQAAAJgBAGQgCAHgEAGQgEAFgGACQgHACgIABQgQAAgIgKgAgFgoIgDADIgCAGIAAAGIAAAyIAAAGIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIAAgGIAAgyIAAgGIgCgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDAAQgCAAgDABg");
	this.shape_2.setTransform(22.7,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA4IAAhvIAcAAQAGAAAGABQAGACAEADQAFADACAGQACAGAAAIQAAAVgQACQAKACAFAFQAEAHABAMQAAARgJAIQgIAIgPAAgAgKAqIAHAAQAIAAADgFQAEgEAAgKQAAgKgEgFQgEgEgIAAIgGAAgAgKgJIAGAAQAHAAAEgEQADgEAAgJIgBgIQgBgDgDgBIgFgCIgHgBIgDAAg");
	this.shape_3.setTransform(15.1,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_4.setTransform(7.4,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_5.setTransform(242.4,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALA4IgLgzIgKAAIAAAzIgVAAIAAhvIAaAAQAHAAAHABQAGACAFADQAFAEACAGQACAGAAAIQAAALgDAHQgDAGgHABIAQA4gAgKgHIAFAAQAHAAAEgEQAEgDAAgKQAAgJgDgEQgDgEgIAAIgGAAg");
	this.shape_6.setTransform(237.2,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_7.setTransform(229.4,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA4IAAhvIAuAAIAAAOIgZAAIAAAhIAUAAIAAANIgUAAIAAAlIAaAAIAAAOg");
	this.shape_8.setTransform(223.1,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA4IAAgrIgXhEIATAAIAMAtIANgtIATAAIgXBEIAAArg");
	this.shape_9.setTransform(216.4,5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOA4IgEgaIgSAAIgFAaIgTAAIAXhvIATAAIAXBvgAgGAQIANAAIgHgsg");
	this.shape_10.setTransform(205.9,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-6.3,247.7,23);


(lib._51000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAHIAFgBQAAAIADAAIACgBIABgDIgBgDIgBgCIgBgCIgEgDIgDgDIgBgGQAAgEACgDQADgCADAAIADAAIACACIADACIABADIAAADIgGABIAAgCIgBgBIAAgCIgBgBIgBAAIgBABIgBADIAAADIACACIAEAEIACABIACACIACADIAAAEQgBAEgCADQgCACgFAAQgIAAAAgMg");
	this.shape.setTransform(88.9,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDATIgDgCIgCgDIgBgDIAAgFIAAgLIAAgFIABgDIACgDIADgCIADAAIAEABIAEACIACADIAAAFIAAADIgHAAIAAgDIAAgEQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAAAIAAAAIgBABIgBABIAAABIAAACIAAABIAAAPIAAAFQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIABAAIABgBIAAAAIABgBIAAgBIAAgCIAAgBIAAgEIAHAAIAAADIAAAEIgBAEIgCACIgDACIgEAAIgDAAg");
	this.shape_1.setTransform(86.2,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCATIAAglIAFAAIAAAlg");
	this.shape_2.setTransform(84.1,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCATIAAggIgGAAIAAgFIASAAIAAAFIgHAAIAAAgg");
	this.shape_3.setTransform(82.3,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAHIAHgBQAAAIACAAIADgBIAAgDIAAgDIgCgCIgBgCIgEgDIgEgDIgBgGQABgEACgDQACgCAEAAIADAAIACACIACACIABADIABADIgGABIAAgCIAAgBIgBgCIgBgBIgBAAIgBABIgBADIABADIABACIAEAEIACABIACACIABADIAAAEQAAAEgCADQgDACgEAAQgIAAgBgMg");
	this.shape_4.setTransform(80,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCATIAAglIAFAAIAAAlg");
	this.shape_5.setTransform(77.9,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCATIAAggIgHAAIAAgFIATAAIAAAFIgHAAIAAAgg");
	this.shape_6.setTransform(76.1,28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAEATIgCgJIgEAAIgCAJIgGAAIAHglIAGAAIAIAlgAgBAFIADAAIgCgOg");
	this.shape_7.setTransform(73.7,28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCATIAAggIgGAAIAAgFIASAAIAAAFIgHAAIAAAgg");
	this.shape_8.setTransform(71.3,28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAHIAGgBQABAIACAAIADgBIAAgDIAAgDIgCgCIgBgCIgEgDIgDgDIgCgGQAAgEADgDQACgCAEAAIADAAIACACIACACIACADIAAADIgGABIAAgCIAAgBIgBgCIgBgBIgBAAIgBABIgBADIAAADIACACIAEAEIACABIACACIACADIAAAEQAAAEgDADQgDACgEAAQgIAAgBgMg");
	this.shape_9.setTransform(68.9,28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADATIgDgSIgCAAIAAASIgHAAIAAglIAIAAIAEABIADABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFIgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAFATgAgCgBIABAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgCAAg");
	this.shape_10.setTransform(65,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAQQgDgDABgGIAAgNIAAgFIACgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEgBQAFAAADADQADADgBAGIAAANIAAAFIgCAEIgDACIgFABQgEAAgDgDgAgCgLIAAABIAAADIAAAPIAAACIAAACIABABIABABIAAAAIABAAIABgBIABgBIAAgCIAAgCIAAgPIAAgDIgBgBIgBgCIgBAAIAAAAIgCACg");
	this.shape_11.setTransform(62.1,28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJATIAAglIAJAAIADABIADABIADADIAAAFQAAAHgFABQADAAACABQABACAAAFQAAAFgCADQgDADgFAAgAgCAOIACAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgEQAAgEgCgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgCAAgAgCgCIACAAIACgBIABgFIAAgCIgBgCIgCgBIgBAAIgBAAg");
	this.shape_12.setTransform(59.3,28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEATIgCgJIgEAAIgCAJIgGAAIAHglIAGAAIAIAlgAgBAFIADAAIgCgOg");
	this.shape_13.setTransform(56.5,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGATIAAglIAGAAIAAAgIAIAAIAAAFg");
	this.shape_14.setTransform(54.2,28.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGATIAAglIANAAIAAAFIgHAAIAAALIAGAAIAAADIgGAAIAAASg");
	this.shape_15.setTransform(50.6,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAQQgCgDAAgGIAAgNIAAgFIACgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEgBQAFAAADADQADADgBAGIAAANIAAAFIgCAEIgEACIgEABQgEAAgDgDgAgCgLIgBABIAAADIAAAPIAAACIABACIABABIABABIAAAAIABAAIABgBIABgBIAAgCIAAgCIAAgPIAAgDIgBgBIgBgCIgBAAIAAAAIgCACg");
	this.shape_16.setTransform(48.1,28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDASIgDgBIgCgDIgBgEIAAgEIAAgYIAHAAIAAAZIAAACIAAABIABACIABABIAAAAIABAAIACgBIAAgCIABgBIAAgCIAAgZIAGAAIAAAYIAAAEIgBAEIgCADIgDABIgEABIgDgBg");
	this.shape_17.setTransform(43.9,28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFATIgCgJIgFAAIgBAJIgHAAIAIglIAFAAIAIAlgAgBAFIADAAIgCgOg");
	this.shape_18.setTransform(41.2,28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGATIAAglIANAAIAAAFIgHAAIAAALIAFAAIAAADIgFAAIAAANIAHAAIAAAFg");
	this.shape_19.setTransform(38.8,28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADATIgDgSIgCAAIAAASIgHAAIAAglIAIAAIAEABIADABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFIgBAFQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAFATgAgCgBIABAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgCAAg");
	this.shape_20.setTransform(36.2,28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDASIgDgBIgCgDIgBgEIAAgEIAAgYIAHAAIAAAZIAAACIAAABIABACIABABIAAAAIABAAIACgBIAAgCIABgBIAAgCIAAgZIAGAAIAAAYIAAAEIgBAEIgCADIgDABIgEABIgDgBg");
	this.shape_21.setTransform(33.3,28.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJATIAAglIAJAAIADABIADABIADADIAAAFQAAAHgFABQADAAACABQABACAAAFQAAAFgCADQgDADgFAAgAgCAOIACAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgEQAAgEgCgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgCAAgAgCgCIACAAIACgBIABgFIAAgCIgBgCIgCgBIgBAAIgBAAg");
	this.shape_22.setTransform(30.5,28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_23.setTransform(27.1,29.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAHIAHgBQgBAIADAAIACgBIABgDIgBgDIgBgCIgBgCIgEgDIgEgDIgBgGQABgEACgDQADgCADAAIADAAIADACIACACIAAADIABADIgGABIAAgCIgBgBIAAgCIgBgBIgBAAIgBABIgBADIABADIABACIAEAEIACABIACACIABADIAAAEQABAEgDADQgDACgEAAQgIAAgBgMg");
	this.shape_24.setTransform(25.3,28.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_25.setTransform(23.4,29.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDASIgDgBIgCgDIgBgEIAAgEIAAgYIAHAAIAAAZIAAACIAAABIABACIABABIAAAAIABAAIACgBIAAgCIABgBIAAgCIAAgZIAGAAIAAAYIAAAEIgBAEIgCADIgDABIgEABIgDgBg");
	this.shape_26.setTransform(21.4,28.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALIAAgGIAFAAIAAAGgAgCgDIAAgHIAFAAIAAAHg");
	this.shape_27.setTransform(18.1,28.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHATIAAglIAPAAIAAAFIgIAAIAAALIAGAAIAAADIgGAAIAAANIAIAAIAAAFg");
	this.shape_28.setTransform(16.3,28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDATIgDgCIgCgDIgBgDIAAgFIAAgLIAAgFIABgDIACgDIADgCIADAAIAEABIAEACIACADIAAAFIAAADIgHAAIAAgDIAAgEQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAAAIAAAAIgBABIgBABIAAABIAAACIAAABIAAAPIAAAFQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIABAAIABgBIAAAAIABgBIAAgBIAAgCIAAgBIAAgEIAHAAIAAADIAAAEIgBAEIgCACIgDACIgEAAIgDAAg");
	this.shape_29.setTransform(13.8,28.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADATIgDgSIgCAAIAAASIgHAAIAAglIAIAAIAEABIADABQABABAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFIgBAFQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAFATgAgCgBIABAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgCAAg");
	this.shape_30.setTransform(11,28.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDASIgDgBIgCgDIgBgEIAAgEIAAgYIAHAAIAAAZIAAACIAAABIABACIABABIAAAAIABAAIACgBIAAgCIABgBIAAgCIAAgZIAGAAIAAAYIAAAEIgBAEIgCADIgDABIgEABIgDgBg");
	this.shape_31.setTransform(8.1,28.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAQQgCgDAAgGIAAgNIAAgFIACgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEgBQAFAAADADQADADgBAGIAAANIAAAFIgCAEIgEACIgEABQgEAAgDgDgAgCgLIgBABIAAADIAAAPIAAACIABACIABABIABABIAAAAIABAAIABgBIABgBIAAgCIAAgCIAAgPIAAgDIgBgBIgBgCIgBAAIAAAAIgCACg");
	this.shape_32.setTransform(5.3,28.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAHIAHgBQAAAIACAAIADgBIAAgDIAAgDIgCgCIgBgCIgEgDIgEgDIgBgGQAAgEADgDQACgCAEAAIADAAIACACIACACIABADIABADIgGABIAAgCIAAgBIgBgCIgBgBIgBAAIgBABIgBADIAAADIACACIAEAEIACABIACACIACADIAAAEQAAAEgDADQgCACgFAAQgIAAgBgMg");
	this.shape_33.setTransform(2.7,28.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAACIgBAGIgEgCIAEgFIgGgBIACgDIAFACIgBgGIADAAIgBAGIAFgCIACADIgFABIADAFIgEACg");
	this.shape_34.setTransform(0.3,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFA54A").s().p("AAAAEIAAAAIgGAOIgIgGIAMgLIgBAAIgPgBIADgIIAOAHIAAgBIgDgPIAJAAIgDAPIAAABIAOgHIADAIIgQABIAAAAIALALIgIAGg");
	this.shape_35.setTransform(95,-0.7,1.056,1.056);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#90D2E5").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEIgNgKIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_36.setTransform(44,7.6,1.056,1.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AGLheQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHQgHgJgLgEgAGLgzQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAQAHAAAFADQAFACADAEQADAEACAHgAEjg+QgEgMgHgHQgIgJgLgEQgLgDgOAAQgNAAgLADQgLAEgIAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAIAHALAEQALAFANAAQAOAAALgFQALgEAIgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLgAEAg+QAEAEABAHQACAGAAALIAAAxQAAALgCAHQgBAGgEAFQgDAEgFACQgFABgHAAQgGAAgFgBQgFgCgDgEQgEgFgBgGQgCgHAAgLIAAgxQAAgLACgGQABgHAEgEQADgEAFgCQAFgDAGAAQAHAAAFADQAFACADAEgACShRQgHgJgLgEQgLgDgOAAQgOAAgLADQgLAEgHAJQgHAHgEAMQgEALAAAOIAAA4QAAAOAEALQAEALAHAIQAHAHALAEQALAFAOAAQAOAAALgFQALgEAHgHQAHgIAEgLQAEgLAAgOIAAg4QAAgOgEgLQgEgMgHgHgABnhHQAHAAAFADQAFACADAEQADAEACAHQABAGAAALIAAAxQAAALgBAHQgCAGgDAFQgDAEgFACQgFABgHAAQgHAAgFgBQgFgCgDgEQgDgFgCgGQgBgHAAgLIAAgxQAAgLABgGQACgHADgEQADgEAFgCQAFgDAHAAgAgMAqIAAAiIAMAAIgKAkIAPAAIAPgkIAAgigAhrhUQgMAIgNADIAAASIAbAAIAACDIAeAAIAAitIgTAAQgJALgEACgAi0hgIhkAAIAABcIAaAAQAEgHAHgDQAGgEAIAAQAHAAAFADQAEABAEAFQADAEABAFQABAFAAAJQAAAJgBAHQgBAHgDAFQgDAEgGADQgFACgHAAQgGAAgFgBQgFgCgDgDQgDgDgCgFQgBgEAAgGIggAAQAAAKADAJQADAJAGAHQAHAIALAEIAMAEIAPABQAKAAARgFQALgEAHgJQAGgIAEgMQADgLAAgQQAAgNgCgJQgDgLgGgHQgGgJgJgDQgKgEgOAAQgJAAgIACQgHADgHAFIAAgkIBJAAgAk/gGQgGgGgKgEQgIgEgLgFIAAgsQAIABAHAFQAGAEAGAHIASgSQgJgKgKgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgJAEQgJADgGAGQgHAGgDAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAIAEAKABIAAAxQgJgBgIgHQgHgGgHgIIgUATQAEAFAGAGQAHAGAHAEQAHAEAHADQAHACAGAAIAAAcIATAAIAAgcQAKAAAJgDQAKgEAHgGQAHgHAEgIQAEgJAAgLQAAgLgFgKQgDgHgIgGgAmDhBQAFgFAJgBIAAApQgJgCgFgGQgHgGAAgHQAAgJAHgFgAlPAUQACAEAAAFQAAAJgGAGQgGAGgJAAIAAgtQALAFAEAEQADADABADg");
	this.shape_37.setTransform(43.8,7.6,1.056,1.056);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgCQgHgDgHgEQgHgEgGgGIgLgLIAVgTQAGAIAHAGQAJAGAIACIAAgxQgJgBgJgEQgJgFgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgHQAGgFAJgEQAIgDAKAAIAAgQIATAAIAAAQQAKACAQAHQALAHAJAJIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAAKgEAKQgEAIgHAGQgHAHgJAEQgJADgLAAIAAAcgAlkAxQAKAAAGgFQAGgGAAgJQAAgFgCgEQgCgEgDgDQgEgDgLgFgAmFhBQgGAFAAAJQAAAHAGAGQAGAFAIADIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgAFlhEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAHgHALgEQALgEAOgBQAOABALAEQALAEAHAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgHAIgLAEQgLAFgOgBQgOABgLgFgADfhEQgFACgDADQgDAFgCAHQgBAGAAALIAAAxQAAAKABAHQACAHADAEQADAFAFABQAFACAHAAQAHAAAFgCQAFgBADgFQADgEACgHQABgHAAgKIAAgxQAAgLgBgGQgCgHgDgFQgDgDgFgCQgFgCgHgBQgHABgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgKAAgOIAAg5QAAgOAEgLQAEgLAHgIQAIgHALgEQALgEANgBQAOABALAEQALAEAIAHQAHAIAEALQAEALAAAOIAAA5QAAAOgEAKQgEAMgHAHQgIAIgLAEQgLAFgOgBQgNABgLgFgABahEQgFACgDADQgEAFgBAHQgCAGAAALIAAAxQAAAKACAHQABAHAEAEQADAFAFABQAFACAGAAQAHAAAFgCQAFgBADgFQAEgEABgHQACgHAAgKIAAgxQAAgLgCgGQgBgHgEgFQgDgDgFgCQgFgCgHgBQgGABgFACgAj2BNIgNgDQgKgEgHgIQgGgHgDgJQgDgKAAgKIAfAAQAAAHACAEQABAEAEADQADAEAFABQAEACAGAAQAIAAAFgCQAFgDADgFQADgFACgGIABgRQAAgIgCgFQgBgFgDgFQgDgDgFgCQgFgDgGAAQgIAAgHAEQgGADgFAHIgaAAIAAhbIBkAAIAAAbIhJAAIAAAkQAIgFAHgCQAIgDAJAAQAOAAAJADQAKAFAGAHQAFAIADALQADAJAAANQAAAQgEALQgDAMgHAIQgHAIgLAFQgQAFgKgBgAhrBMIAAiDIgaAAIAAgTQAMgCANgHQAEgDAIgMIATAAIAACug");
	this.shape_38.setTransform(44,7.6,1.056,1.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#AFA54A").ss(2,1,1).p("AGchSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgAGEg/QAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCQAFgCAGAAQAHAAAFACQAFACADAEgAEWhSQgHgIgLgEQgLgEgOAAQgOAAgLAEQgLAEgHAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAHAHALAEQALAEAOAAQAOAAALgEQALgEAHgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgADrhHQAHAAAFACQAFACADAEQADAEACAHQABAHAAALIAAAxQAAAKgBAIQgCAGgDAEQgDAFgFACQgFABgHAAQgHAAgFgBQgFgCgDgFQgDgEgCgGQgBgIAAgKIAAgxQAAgLABgHQACgHADgEQADgEAFgCQAFgCAHAAgACRhSQgIgIgLgEQgLgEgOAAQgNAAgLAEQgLAEgIAIQgHAIgEALQgEALAAAOIAAA5QAAAOAEAKQAEAMAHAIQAIAHALAEQALAEANAAQAOAAALgEQALgEAIgHQAHgIAEgMQAEgKAAgOIAAg5QAAgOgEgLQgEgLgHgIgABahFQAFgCAGAAQAHAAAFACQAFACADAEQAEAEABAHQACAHAAALIAAAxQAAAKgCAIQgBAGgEAEQgDAFgFACQgFABgHAAQgGAAgFgBQgFgCgDgFQgEgEgBgGQgCgIAAgKIAAgxQAAgLACgHQABgHAEgEQADgEAFgCgAgNAqIAAAiIANAAIgLAkIAPAAIAPgkIAAgigAhshUQgNAIgMACIAAATIAaAAIAACDIAeAAIAAiuIgTAAQgIALgEADgAi2hgIhkAAIAABcIAaAAQAFgHAGgDQAHgEAIAAQAGAAAFADQAFABADAFQADAEABAFQACAFAAAJQAAAJgBAHQgCAGgDAFQgDAFgFACQgFADgIAAQgGAAgEgBQgFgCgDgDQgEgEgBgEQgCgEAAgHIgfAAQAAAKADAKQADAJAGAHQAHAIAKAEIANAEIAPAAQAKAAAQgEQALgEAHgJQAHgIADgMQAEgLAAgQQAAgOgDgIQgDgLgFgIQgGgIgKgEQgJgEgOAAQgJAAgIADQgHADgIAFIAAgkIBJAAgAk2hGQgJgKgLgGQgQgIgKgCIAAgPIgTAAIAAAPQgKABgIADQgJAEgGAFQgHAHgEAIQgEAIAAALQAAAKAEAJQAEAHAHAHQAGAGAJAFQAJAEAJABIAAAxQgIgBgJgHQgHgGgGgIIgVATQAFAFAGAGQAGAGAHAEQAHAEAHACQAHADAGAAIAAAbIATAAIAAgbQALAAAJgDQAJgEAHgGQAHgHAEgIQAEgKAAgKQAAgMgEgJQgEgHgHgGQgHgGgKgFQgHgDgMgFIAAgsQAIABAHAFQAGAEAGAHgAmLg0QAAgIAGgFQAGgFAIgBIAAApQgIgDgGgFQgGgGAAgIgAlQAUQACAEAAAFQAAAJgGAGQgGAGgKAAIAAgtQALAFAEAEQADACACAEg");
	this.shape_39.setTransform(44.9,8.7,1.056,1.056);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AFA54A").s().p("AgLBwIALgkIgNAAIAAgiIAgAAIAAAiIgPAkgAl3BoIAAgcQgGAAgHgDQgHgCgHgEQgHgFgGgFIgLgMIAVgSQAGAIAHAGQAJAHAIABIAAgxQgJgBgJgFQgJgEgGgGQgHgHgEgHQgEgJAAgKQAAgKAEgJQAEgIAHgGQAGgGAJgDQAIgEAKgBIAAgOIATAAIAAAOQAKACAQAIQALAGAJAKIgTASQgGgHgGgEQgHgFgIgBIAAAsIATAIQAKAFAHAGQAHAGAEAHQAEAJAAAMQAAALgEAIQgEAJgHAGQgHAHgJADQgJAEgLAAIAAAcgAlkAyQAKAAAGgGQAGgGAAgJQAAgFgCgEQgCgDgDgDQgEgEgLgFgAmFhBQgGAFAAAIQAAAIAGAGQAGAGAIACIAAgpQgIABgGAFgAFYBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgAFlhFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgADSBKQgLgEgHgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAHgJALgDQALgFAOAAQAOAAALAFQALADAHAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgHAIgLAEQgLAEgOABQgOgBgLgEgADfhFQgFACgDAEQgDAFgCAGQgBAIAAAKIAAAxQAAAKABAIQACAGADAEQADAFAFACQAFABAHAAQAHAAAFgBQAFgCADgFQADgEACgGQABgIAAgKIAAgxQAAgKgBgIQgCgGgDgFQgDgEgFgCQgFgCgHAAQgHAAgFACgABNBKQgLgEgIgIQgHgHgEgMQgEgLAAgOIAAg3QAAgOAEgMQAEgLAHgHQAIgJALgDQALgFANAAQAOAAALAFQALADAIAJQAHAHAEALQAEAMAAAOIAAA3QAAAOgEALQgEAMgHAHQgIAIgLAEQgLAEgOABQgNgBgLgEgABahFQgFACgDAEQgEAFgBAGQgCAIAAAKIAAAxQAAAKACAIQABAGAEAEQADAFAFACQAFABAGAAQAHAAAFgBQAFgCADgFQAEgEABgGQACgIAAgKIAAgxQAAgKgCgIQgBgGgEgFQgDgEgFgCQgFgCgHAAQgGAAgFACgAj2BOIgNgEQgKgEgHgIQgGgHgDgKQgDgIAAgLIAfAAQAAAGACAFQABAEAEADQADAEAFACQAEABAGAAQAIAAAFgCQAFgDADgEQADgGACgHIABgPQAAgJgCgFQgBgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgHADQgGAEgFAGIgaAAIAAhbIBkAAIAAAcIhJAAIAAAkQAIgFAHgCQAIgEAJAAQAOAAAJAFQAKADAGAIQAFAIADALQADAIAAAOQAAAPgEAMQgDAMgHAIQgHAJgLAEQgQAEgKABgAhrBMIAAiCIgaAAIAAgTQAMgDANgHQAEgEAIgLIATAAIAACug");
	this.shape_40.setTransform(44.9,8.7,1.056,1.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-5.2,99.7,38.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.about();
	this.instance.setTransform(-247.6,-43.7,1,1,0,0,0,122.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.6,-59.6,247.7,23);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_261 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(261).call(this.frame_261).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(1,1,1).p("AXXzcMAAAAm5MgutAAAMAAAgm5g");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(262));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150,132.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({y:100.9},0).to({y:76.7,alpha:1},11,cjs.Ease.get(1)).wait(69));

	// Layer 4
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(635,152.2,1,1,0,0,0,93,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:101},15,cjs.Ease.get(1)).wait(238));

	// 51000
	this.instance_2 = new lib._51000();
	this.instance_2.setTransform(149.3,130.2,1.464,1.464,0,0,0,46.5,11.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({alpha:1},18,cjs.Ease.get(1)).wait(109));

	// about
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(397.7,177.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({y:182.6},0).to({y:177.8,alpha:1},12,cjs.Ease.get(1)).wait(121));

	// and
	this.instance_4 = new lib.and();
	this.instance_4.setTransform(150.1,85.7,1,1,0,0,0,19.4,12);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(171));

	// mechanics
	this.instance_5 = new lib.mechanics();
	this.instance_5.setTransform(150,59.5,1,1,0,0,0,62.1,14);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(73).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(171));

	// if you mix
	this.instance_6 = new lib._if();
	this.instance_6.setTransform(71.7,26.9,1,1,0,0,0,48.3,12);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({alpha:1},18,cjs.Ease.get(-0.52)).wait(171));

	// Layer 10
	this.instance_7 = new lib.newFrame();
	this.instance_7.setTransform(149.7,167.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(154).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(90));

	// images
	this.instance_8 = new lib.image();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({alpha:0.25},20,cjs.Ease.get(1)).wait(189));

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4F67").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.7,79.7,355.7,347.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;