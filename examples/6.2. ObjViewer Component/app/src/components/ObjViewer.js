import React, { Component } from 'react';
import * as THREE from 'three';

import OBJLoader from "three-react-obj-loader";
import MTLLoader from 'three-react-mtl-loader';

let renderer, scene, camera, mainObject;

class ObjViewer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ canvas: this.refs.threeCanvas, alpha: true , antialias: true});
    renderer.setSize(500, 400);

    camera.position.z = 10;

    var mtlLoader = new MTLLoader();
    mtlLoader.load("./models/heart.mtl", function (materials) {

      materials.preload();

      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("./models/heart.obj", function (object) {
        mainObject = object;
        mainObject.position.y = -5;
        scene.add(mainObject);
      });

    });

    //luzes
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    this._render();
  }

  _render = () => {

    requestAnimationFrame(this._render);
    renderer.render(scene, camera);
    if(mainObject)
    mainObject.rotation.y += 0.01;

  }

  render() {
    return (
      <div>
        <canvas ref="threeCanvas">
        </canvas>
      </div>
    );
  }
}

export default ObjViewer;
