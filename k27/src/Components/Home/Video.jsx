const Video = () => {
  return (
    <>
      <div className="w-full h-full">
        <video
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1787648096~exp=1787651696~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=2dad2eac4ef82326a0fef221dffda300da2ffe4ae210db743ad817edb6f9dead&r=dXMtZWFzdDE%3D"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
};

export default Video;
