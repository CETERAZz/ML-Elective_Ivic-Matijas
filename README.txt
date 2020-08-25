## Emotion recognition based on facial expressions

Welcome to my first machine learning project. The goal of this project was to understand how the process of training a model
to recognize facial expressions works and to create one that can classify facial expressions in real-time using a webcam.
This ML-model was trained using Google's Teachable Machine and the image dataset of https://github.com/muxspace/facial_expressions

## Installation

You can clone this repository using GitHub Desktop or you can just download the .zip. When the download is completed, you can just start
a local web server using Python SimpleHTTP. Open your terminal and type in the path to the project directory.

With python3 installed on your computer:

```bash
cd /path/to/ML-Elective_Ivic-Matijas

python -m http.server 8000
```

With python2.7 installed on your computer:

```bash
cd /path/to/ML-Elective_Ivic-Matijas

python -m SimpleHTTPServer 8000
```

When the server started, open your browser and type in *localhost:8000*

It is possible that the stylesheet of this project will not be loaded. In this case, just clear the cache of your browser
and you should be good to go.
