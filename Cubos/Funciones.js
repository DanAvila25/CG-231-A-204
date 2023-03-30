import * as THREE from 'https://sebastiann16.github.io/CompG/three.module.js';
import { OrbitControls } from 'https://sebastiann16.github.io/CompG/OrbitControls.js';
import "CodigoJavascript.js";
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 5;
camera.position.y = 3;
scene.add(camera);
const light = new THREE.AmbientLight(0x404040, 5);
scene.add(light);


function cubo(base, altura, ancho, col) {

    const geometry = new THREE.BoxGeometry(base, altura, ancho);
    const material = new THREE.MeshToonMaterial({ color: col });
    return new THREE.Mesh(geometry, material);
}


const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera)
}
animate();