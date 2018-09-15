import * as THREE from "three";
import OrbitControls from 'three-orbitcontrols';

export default class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 200000);
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.init();
    }

    add(object) {
        this.scene.add(object);
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000, 1);

        this.camera.lookAt(this.scene.position);
        this.camera.position.z = 4200;

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
    }

    start(animation) {
        requestAnimationFrame(() => {
            animation();
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
            this.start(animation);
        });
    }
}