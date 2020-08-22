let model = "model/model.json";
let classifier;
let video;

function setup() {
  noCanvas();

  video = createCapture(VIDEO);
  video.style("display: flex; justify-self: center; border-radius: 5%;");


  classifier = ml5.imageClassifier(model, video, modelReady);
}

function modelReady() {
  console.log("Model ready!");
  classifier.predict(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error();
  } else {
    document.getElementById("bestmatch").innerHTML = "It seems like you're " + results[0].label;
    classifier.predict(gotResult);
  }
}
