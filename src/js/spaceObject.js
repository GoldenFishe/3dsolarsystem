import * as THREE from 'three';

export default class SpaceObject extends THREE.Mesh {
    constructor(radius, color, texture, positionFromSun) {
        super(positionFromSun);
        this.geometry = new THREE.SphereGeometry(radius, 50, 50);
        this.material = new THREE.MeshPhongMaterial({color: color, wireframe: true});
        this.raduis = radius;
        this.angle = 0;
        this.position.x = positionFromSun;
        this.positionFromSun = positionFromSun;
        this.loadTexture(texture);
    }

    loadTexture(texturePath) {
        return new THREE.TextureLoader().load(texturePath, texture => {
            texture.generateMipmaps = false;
            texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.minFilter = THREE.LinearFilter;
            this.material = new THREE.MeshPhongMaterial({map: texture});
        });
    }

    createOrbit(earth) {
        let material = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
        let geometry = null;
        let orbit = null;
        if (earth) {
            geometry = new THREE.RingGeometry(405, 415, 50);
            orbit = new THREE.Mesh(geometry, material);
            orbit.position.x = earth.position.x;
        } else {
            geometry = new THREE.RingGeometry(this.position.x, this.position.x + 50, 100);
            orbit = new THREE.Mesh(geometry, material);
        }
        orbit.rotation.x = Math.PI / 2;
        return orbit;
    }
}