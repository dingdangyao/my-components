<template>
  <div class="record">
    <h2>点击开始录音:</h2>
    <input @click="startRecord" type="button" value="录音" />
    <input @click="stopRecord" type="button" value="停止" />
    <input @click="play" type="button" value="播放" />
    <div class="record-play" v-show="isFinished">
      <h2>voice player:</h2>
      <audio controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import Record from "./src/Record-sdk";
export default {
  name: "Record",
  data() {
    return {
      isFinished: false,
      audio: "",
      recorder: new Record()
    };
  },
  methods: {
    startRecord: function() {
      console.log("start to record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.startRecord({});
    },
    stopRecord: function() {
      console.log("stop record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.stopRecord({});
    },
    play: function() {
      console.log("play record now.");
      let self = this;
      self.isFinished = true;
      self.audio = document.querySelector("audio");
      self.recorder.play(self.audio);
    }
  }
};
</script>
