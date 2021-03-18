import * as tf from '@tensorflow/tfjs';
const model = await tf.loadLayersModel('javascriptModel\model.json');
// JavaScript

var pics = d3.select("#uploads")

function lookAtSean (pics) {
    pics.forEach(function (d) {
      const example = tf.fromPixels(d);  // for example
      const prediction = model.predict(example);
})
}

