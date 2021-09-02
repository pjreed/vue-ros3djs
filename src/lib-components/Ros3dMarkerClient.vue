<template>
  <div/>
</template>

<script>
/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */
import * as ROS3D from 'ros3d'
/**
 * A marker client that listens to a given marker topic.
 * It is a wrapper for [`ROS3D.MarkerClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerClient.html}.
 * This custom version of it fires an event when our marker changes that contains information about the marker.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The marker topic to listen to
 *
 * @vue-data {ROS3D.MarkerClient} object - Handle for the internal [ROS3D.MarkerClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerClient.html}
 */
export default {
  name: 'ros3d-marker-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      required: false,
    },
    topic: {
      type: String,
      default: '',
      required: false,
    },
    useMeshLine: {
      type: Boolean,
      default: false,
      required: false
    }
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
    this.object = new ROS3D.MarkerClient({
      ros : this.$parent.ros,
      tfClient : this.$parent.tfClient,
      topic : this.topic,
      useMeshLine : this.useMeshLine,
    });
    this.object.name = this._uid;
    this.object.on('change', () => this.$emit('update:marker', {
      topic: this.topic,
      frame: this.object.markers[0].frameID,
      marker: this.object.markers[0].children[0]
    }));
    if (this.visible) {
      this.show();
    }
  },
  beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
};
</script>