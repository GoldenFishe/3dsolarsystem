import * as THREE from "three";
import spaceTexture from '../assets/stars.jpg';
import OrbitControls from 'three-orbitcontrols';

export default class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 200000);
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.init();
    }

    add(object) {
        this.scene.add(object);
    }

    createSpace() {
        let spaceGeometry = new THREE.SphereBufferGeometry(100000, 50, 50);
        spaceGeometry.scale(-1, 1, 1);
        let spaceMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(spaceTexture)});
        let space = new THREE.Mesh(spaceGeometry, spaceMaterial);
        this.add(space);
    }

    createLite() {
        this.add(new THREE.PointLight('#ffffff'));
        this.add(new THREE.HemisphereLight('#ffffff', '#000000'));
    }

    setUpRenderer() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0xffffff);
    }

    setUpCamera() {
        //this.camera.lookAt(this.scene.position);
        this.camera.position.x = 31000;
        this.camera.position.y = 100;
    }

    init() {
        this.createLite();
        this.createSpace();
        this.setUpRenderer();
        this.setUpCamera();

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