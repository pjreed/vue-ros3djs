<template>
  <div/>
</template>

<script>

/**
 * Based on https://github.com/LdwgWffnschmdt/vue-ros3djs/blob/master/src/lib-components/Ros3dMarkerClient.vue
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

import * as ROS3D from 'ros3d'

/**
 * A marker array client that listens to a given marker array topic.
 * It is a wrapper for [`ROS3D.MarkerArrayClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerArrayClient.html}.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The marker array topic to listen to
 *
 * @vue-data {ROS3D.MarkerArrayClient} object - Handle for the internal [ROS3D.MarkerArrayClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerArrayClient.html}
 */
export default {
  name: 'ros3d-marker-array-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false,
    },
    topic: {
      type: String,
      default: '',
      require: false,
    },
  },
  watch: {
    topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    visible(newState) {
      if (newState) this.show();
      else this.hide();
    }
  },
  methods: {
    show() {
      this.$parent.viewer.scene.add(this.object.rootObject);
    },
    hide() {
      this.$parent.viewer.scene.remove(this.object.rootObject);
    }
  },
  mounted() {
    this.object = new ROS3D.MarkerArrayClient({
      ros : this.$parent.ros,
      tfClient : this.$parent.tfClient,
      topic : this.topic,
    });
    this.object.name = this._uid;
    if (this.visible) {
      this.$parent.viewer.scene.add(this.object.rootObject);
    }
  },
  beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
};
</script>