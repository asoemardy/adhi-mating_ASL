import * as tf from '@tensorflow/tfjs';
const model = await tf.loadLayersModel('javascriptModel\model.json');
// JavaScript

var pics = d3.select("#uploads")

const example = tf.fromPixels(pics);  // for example
const prediction = model.predict(example);

