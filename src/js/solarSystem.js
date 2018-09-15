import * as THREE from "three";
import spaceTexture from '../assets/stars.jpg';
import OrbitControls from 'three-orbitcontrols';

export default class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 40000);
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        let spaceGeometry = new THREE.SphereBufferGeometry(20000, 50, 50);
        spaceGeometry.scale(- 1, 1, 1 );
        let spaceMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(spaceTexture)});
        let space = new THREE.Mesh(spaceGeometry, spaceMaterial);
        this.scene.add(space);

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