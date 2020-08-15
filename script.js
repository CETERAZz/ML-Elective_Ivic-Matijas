// function draw() {
//   image("images/oliver.jpg", 350, 350);
// }
// let video;
function preload(){
    img = loadImage("images/Aaron_Eckhart_0001.jpg");
}

  let nn;
  // const IMAGE_WIDTH = 350;
  // const IMAGE_HEIGHT = 350;
  // const IMAGE_CHANNELS = 1;

  // Step 2: initialize your neural network
  function setup() {
    createCanvas(350, 350);

    const options = {
      dataUrl: "data/legend.csv",
      task: 'classification',
      inputs:["image"],
      outputs: ['emotion']
    }

    nn = ml5.neuralNetwork(options, dataLoaded);
  }

  function draw(){
    background(255);
    image(img, 0, 0);
  }

  // Step 3: normalize data and train the model
  function dataLoaded(){
    nn.normalizeData();
    trainModel();
  }

  // Step 4: train the model
  function trainModel(){
    const trainingOptions = {
      epochs: 32,
      batchSize: 12
    }
    nn.train(trainingOptions, finishedTraining);

  }

  // Step 5: use the trained model
  function finishedTraining(){
    classify();

  }

  // Step 6: make a classification
  function classify(){
    const input = {
      image: "Aaron_Eckhart_0001.jpg"
    };
    nn.classify(input, handleResults);
  }

  // Step 7: define a function to handle the results of your classification
  function handleResults(error, result) {
      if(error){
        console.error(error);
        return;
      }
      console.log(results); // {label: 'red', confidence: 0.8};
  }

