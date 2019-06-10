const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 
	window.innerWidth / window.innerHeight, 0.1, 1000,
	camera.position.set(0,2.5,2.5)
	);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// const geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);



var geometry = new THREE.SphereGeometry(0.5, 32, 32)
var material = new THREE.MeshPhongMaterial( )
var earthMesh = new THREE.Mesh(geometry, material)

// THREE.ImageUtils.crossOrigin = '';

material.map    = THREE.ImageUtils.loadTexture('images/projectroom.jpeg')

var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();


scene.add(light);
scene.add(earthMesh)

camera.position.z = -50;



const animate = function () {
	requestAnimationFrame(animate);

	earthMesh.rotation.x += 0.01;
	earthMesh.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();