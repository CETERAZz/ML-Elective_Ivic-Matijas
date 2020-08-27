let model = "model/model.json";
let classifier;
let video;
let pLabel;
let pConf;

function setup() {
  noCanvas();

  video = createCapture(VIDEO);
  video.size(350, 350);
  pLabel = createP("It seems like you're: ");
  pConf = createP();


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
    // document.getElementById("bestmatch").innerHTML = "It seems like you're " + results[0].label;
    pLabel.html("It seems like you're " + results[0].label);
    pConf.html("I'm " + results[0].confidence + "% sure");

    console.log(results[0].label);
    classifier.predict(gotResult);

  }

}
