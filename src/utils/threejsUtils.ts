
import * as THREE from 'three';

export const initSunflowerScene = (container: HTMLDivElement) => {
  if (!container) return () => {};

  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Set camera position
  camera.position.z = 5;
  
  // Create lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Create sunflower petals
  const createSunflower = () => {
    const group = new THREE.Group();
    
    // Center of the sunflower
    const centerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const centerMaterial = new THREE.MeshPhongMaterial({
      color: 0x8B4513, // Brown
      shininess: 30
    });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    group.add(center);
    
    // Create petals
    const petalCount = 12;
    const petalGeometry = new THREE.ConeGeometry(0.2, 1, 32);
    const petalMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700, // Sunflower yellow
      shininess: 100
    });
    
    for (let i = 0; i < petalCount; i++) {
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      const angle = (i / petalCount) * Math.PI * 2;
      petal.position.set(Math.cos(angle) * 0.7, Math.sin(angle) * 0.7, 0);
      petal.rotation.z = angle + Math.PI / 2;
      petal.rotation.y = Math.PI / 2;
      group.add(petal);
    }
    
    // Create stem
    const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 32);
    const stemMaterial = new THREE.MeshPhongMaterial({
      color: 0x228B22, // Forest green
      shininess: 10
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.set(0, -1.5, 0);
    group.add(stem);
    
    // Create leaves
    const leafGeometry = new THREE.SphereGeometry(0.2, 32, 16);
    leafGeometry.scale(1, 0.3, 0.5);
    const leafMaterial = new THREE.MeshPhongMaterial({
      color: 0x32CD32, // Lime green
      shininess: 10
    });
    
    const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
    leaf1.position.set(0.3, -1, 0);
    leaf1.rotation.z = Math.PI / 4;
    group.add(leaf1);
    
    const leaf2 = new THREE.Mesh(leafGeometry, leafMaterial);
    leaf2.position.set(-0.3, -0.7, 0);
    leaf2.rotation.z = -Math.PI / 4;
    group.add(leaf2);
    
    return group;
  };
  
  // Create multiple sunflowers
  const sunflowers = [];
  for (let i = 0; i < 5; i++) {
    const sunflower = createSunflower();
    sunflower.position.set(
      (Math.random() * 2 - 1) * 4,
      (Math.random() * 2 - 1) * 3,
      (Math.random() * 2 - 1) * 2
    );
    const scale = 0.5 + Math.random() * 0.5;
    sunflower.scale.set(scale, scale, scale);
    sunflowers.push(sunflower);
    scene.add(sunflower);
  }
  
  // Add mouse interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredSunflower = null;
  
  const onMouseMove = (event: MouseEvent) => {
    // Calculate mouse position in normalized device coordinates
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / container.offsetWidth) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / container.offsetHeight) * 2 + 1;
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Find intersections
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    if (intersects.length > 0) {
      // Find which sunflower was intersected
      let found = false;
      for (const sunflower of sunflowers) {
        if (intersects.some(intersect => sunflower.children.includes(intersect.object) || sunflower === intersect.object)) {
          if (hoveredSunflower !== sunflower) {
            // Reset previous hovered sunflower
            if (hoveredSunflower) {
              hoveredSunflower.children.forEach(child => {
                if (child.material && child.material.color && child.material.emissive) {
                  child.material.emissive.setRGB(0, 0, 0);
                }
              });
            }
            
            // Set new hovered sunflower
            hoveredSunflower = sunflower;
            hoveredSunflower.children.forEach(child => {
              if (child.material && child.material.emissive) {
                child.material.emissive.setRGB(0.2, 0.2, 0);
              }
            });
          }
          found = true;
          break;
        }
      }
      
      if (!found && hoveredSunflower) {
        // Reset hovered sunflower if no sunflower is intersected
        hoveredSunflower.children.forEach(child => {
          if (child.material && child.material.color && child.material.emissive) {
            child.material.emissive.setRGB(0, 0, 0);
          }
        });
        hoveredSunflower = null;
      }
    } else if (hoveredSunflower) {
      // Reset hovered sunflower if no intersections
      hoveredSunflower.children.forEach(child => {
        if (child.material && child.material.color && child.material.emissive) {
          child.material.emissive.setRGB(0, 0, 0);
        }
      });
      hoveredSunflower = null;
    }
  };
  
  container.addEventListener('mousemove', onMouseMove);
  
  // Animation
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Animate sunflowers
    sunflowers.forEach((sunflower, index) => {
      // Gentle floating movement
      sunflower.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      
      // Slight rotation
      sunflower.rotation.z = Math.sin(Date.now() * 0.0005 + index) * 0.1;
      sunflower.rotation.x = Math.cos(Date.now() * 0.0005 + index * 2) * 0.05;
      
      // If this is the hovered sunflower, make it rotate faster
      if (sunflower === hoveredSunflower) {
        sunflower.rotation.y += 0.01;
      }
    });
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    container.removeEventListener('mousemove', onMouseMove);
    container.removeChild(renderer.domElement);
    
    // Dispose of geometries and materials
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    
    scene.clear();
    renderer.dispose();
  };
};
