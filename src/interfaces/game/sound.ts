export interface GameSound {
  context: AudioContext,
  source: AudioBufferSourceNode,
  volumeGain: GainNode,
  biquadFilter: BiquadFilterNode,
  stereoPanner: StereoPannerNode
}
