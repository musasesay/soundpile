SoundPile.Views.PersistentPlayer = Backbone.CompositeView.extend({
  template: JST["player/persistent_player"],

  initialize: function () {
    //TODO: Make sure I'm not over/under-caching files.
    //TODO: Listen for events on the collection/model?
    this.$(".play-btn").hide();
  },

  events: {
    "click .play-btn": "play",
    "click .pause-btn": "pause",
    "click .prev-btn": "previous",
    "click .next-btn": "next",
  },

  render: function () {
    var track = this.model;
    this.$el.html(this.template({ track: this.model }));
    return this;
  },

  start: function (options) {
    if (options.model === this.model) {
      this.play(); //already on this track, just play it
      return; 
    }
    // this.model.audio.pause();
    this.pause();
    this.model = options.model;
    this.render();
    // this.model.audio.play();
    this.play();
  },

  //TODO: Should this be the same function for click handling and code calls?
  play: function (event) {
    event && event.preventDefault();
    if (this.model.audio.play()) {
      // Don't toggle button if there was nothing to play
      this.$(".play-btn").hide();
      this.$(".pause-btn").show();
      this.$(".track-info").addClass("playing");
    }
  },

  pause: function (event) {
    event && event.preventDefault();
    this.model.audio.pause();
    this.$(".play-btn").show();
    this.$(".pause-btn").hide();
    this.$(".track-info").removeClass("playing");
  },

  previous: function (event) {
    event && event.preventDefault();
    console.log("TODO: Do something!");
  },

  next: function (event) {
    event && event.preventDefault();
    console.log("TODO: Do something!");
  },
});