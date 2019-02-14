

function MediaPlayer() {

    function setup() {
        mediaPlayerInitialized = false;
        playbackInitialized = false;
        autoPlay = true;
        protectionController = null;
        protectionData = null;
        adapter = null;
        Events.extend(MediaPlayerEvents);
        mediaPlayerModel = MediaPlayerModel(context).getInstance();
    }
}