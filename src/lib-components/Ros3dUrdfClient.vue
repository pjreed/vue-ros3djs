<template>
  <div/>
</template>

<script>

import * as ROS3D from 'ros3d'

/**
 * A URDF client that pulls the robot description from the parameter server.
 * It is a wrapper for [`ROS3D.UrdfClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.UrdfClient.html}.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [param=] - Paramter to load the URDF from, like 'robot_description'
 * @vue-prop {String} [path=] - Base path to the associated Collada models that will be loaded
 * @vue-prop {String} [tfPrefix=] - TF prefix to used for multi-robots
 *
 * @vue-data {ROS3D.UrdfClient} object - Handle for the internal [ROS3D.UrdfClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.UrdfClient.html}
 */
export default {
  name: 'ros3d-urdf-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false,
    },
    param: {
      type: String,
      default: 'robot_description',
      require: false,
    },
    path: {
      type: String,
      default: null,
      require: false,
    },
    tfPrefix: {
      type: String,
      default: null,
      require: false,
    },
  },
  watch: {
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
    this.object = new ROS3D.UrdfClient({
      ros : this.$parent.ros,
      param : this.param,
      tfClient : this.$parent.tfClient,
      path : this.path,
      tfPrefix: this.tfPrefix,
      loader: ROS3D.COLLADA_LOADER
    });
    this.object.name = this._uid;
    if (this.visible) {
      this.show();
    }
  },
  beforeDestroy() {
    this.hide();
  }
};
</script>