import * as THREE from 'three';
import SpaceObject from './spaceObject';

import sunTexture from '../assets/sun.jpg';
import earthTexture from '../assets/earth.jpg';

import '../css/style.css';

class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({antialias: true});

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
        this.camera.position.z = 500;

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
    }

    start() {
        requestAnimationFrame(() => {
            sun.rotation.y += 0.01;
            earth.rotation.y += 0.05;
            earth.position.x = 300 * Math.cos(earth.angle);
            earth.position.z = 300 * Math.sin(earth.angle);
            earth.angle += 0.01;

            this.renderer.render(this.scene, this.camera);
            this.start();
        });
    }
}

const solarSystem = new SolarSystem();
const sun = new SpaceObject(200, '#F97005', sunTexture);
const earth = new SpaceObject(50, '#5cdff9', earthTexture);
earth.position.x = 400;

solarSystem.add(sun);
solarSystem.add(earth);
solarSystem.start();

// const x = this._x + 200 * Math.cos(this.angle);
// const y = this._y + 200 * Math.sin(this.angle);