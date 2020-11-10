# codebar-2020-11-10-webcam

# Prerequisites

- Node
- Install dependencies (npm install)
- [ngrok](https://ngrok.com/)

# Install


### Linux

```
#Linux relies on fswebcam currently
#Tested on ubuntu

sudo apt-get install fswebcam

```

### Mac OSX

```
#Mac OSX relies on imagesnap
#Repo https://github.com/rharder/imagesnap
#Avaliable through brew

brew install imagesnap

```

### Windows

Standalone exe included. See [src/bindings/CommandCam](https://github.com/chuckfairy/node-webcam/tree/master/src/bindings/CommandCam)

### Run

```
node webcam.js
ngrok http 8000
```

### Check the file exists

Go to http://<your_ngrok_id>.ngrok.io/webcam.jpg

### Supply the Ngrok URL to the Emojify project.

http://localhost:7071/api/MojifyImage?imageUrl=<ngrok_url>

### Next

Implement a webpage that continuously loads the Emojify image into the page and replaces the old one to create a "stream".
