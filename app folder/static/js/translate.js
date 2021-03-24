const model = await tf.loadLayersModel("static/aslpredict/model.json");
// JavaScript


var pics = d3.select(".uploadcolumn").select("img");
var picture = new Image(64,64);
picture.src = '/display/1.jpg'
console.log(picture);
const example = tf.browser.fromPixels(picture);  // for example
console.log(example);
var test = tf.expandDims(example);
console.log(test);
const prediction = model.predict(test);
console.log(prediction);
console.log(tf.argMax(prediction, -1));


