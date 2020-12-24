import React, { useCallback, useEffect, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as THREE from "three";
import NavbarIndicatorTexture from "./navbarIndicatorTexture/NavbarIndicatorTexture";
import styles from "../../../../assets/styles/css/navbarIndicator.module.css";

const loadImage = (url: string): Promise<HTMLImageElement> => {
    // Constructing a new window.Image instance. It is not necessary to
    // tell the browser it's a window.Image object since 'window' is the
    // global object that's put infront of basic class constructors or
    // functions and what not to make could more simple.
    const image = new Image();

    // Returning a promise since loading an image is an asynchronous task,
    // that is, it is not in sync with the event loop anymore.
    return new Promise((resolve) => {
        // Here a listener is provided that will be executed once the image
        // has finished loading.
        //
        // Once that's happened the promise will be resolved providing any
        // listeners attached with the then() function with the loaded
        // HTMLImageElement.
        image.onload = () => {
            console.log(image);
            resolve(image);
        };

        // The source of the image is defined as the url that's been provided
        // as an argument.
        image.src = url;
    });
};

const renderToCanvas = async (
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    Component: React.FunctionComponent
) => {
    // Defining the dimensions of the canvas, this is dependend on the
    // parameters passed to the renderToCanvas() function.
    canvas.width = width;
    canvas.height = height;

    // Getting the canvas's 2d context to draw on.
    const ctx = canvas.getContext("2d");

    // Templating a url that will allow the loadImage() function to create
    // a proper image based on a react functional component.
    //
    // This is thanks to the <foreignObject /> tag which allows XHTML to be
    // inserted into a svg tag or file, respectively.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${renderToStaticMarkup(
        <Component />
    )}</div></foreignObject></svg>`;
    const url = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

    console.log(url, svg);

    // This will generate a window.Image instance based on the url templated
    // above.
    const image = await loadImage(url);

    // Now that a image has been created out of the url, it is possible to draw
    // the image onto the canvas's context using its inherent drawImage() method.
    ctx?.drawImage(image, 0, 0);
};

const NavbarIndicator: React.FunctionComponent = () => {
    const [animationFrame, setAnimationFrame] = useState<number | null>(null);
    const navbarIndicatorRef = useRef<HTMLDivElement>(null);

    const animateLogo = useCallback(async () => {
        if (navbarIndicatorRef.current) {
            // Getting dimensional data from html reference object.
            const width = navbarIndicatorRef.current.clientWidth;
            const height = navbarIndicatorRef.current.clientHeight;

            // Creating a scene.
            const scene = new THREE.Scene();

            // Adding a renderer to render the scene later on.
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(width, height);
            navbarIndicatorRef.current.appendChild(renderer.domElement);

            // Adding a camera to have a good three dimensional perspective.
            const camera = new THREE.PerspectiveCamera(
                90,
                width / height,
                0.1,
                1000
            );
            camera.position.z = 5;

            // Creating a simple HTMLCanvasElement to use as a texture a few
            // steps later on.
            const canvas = document.createElement("canvas");

            // This renders a react component onto a canvas using svg and the
            // renderToStaticMarkup() function provided by 'react-dom/server'.
            await renderToCanvas(canvas, width, height, () => (
                <NavbarIndicatorTexture />
            ));

            // Passing THREE the canvas to handle it as a texture with default
            // UVMapping enabled.
            const texture = new THREE.CanvasTexture(canvas);

            // Creating a cube out of a geometry that's a simple box geometry
            // with same dimensions on all axes.
            // Furthermore a material is created which will be made of a UV-
            // Mapping of the texture created above.
            //
            // These two things combined make up a so called Mesh (THREE terminology)
            // which all the information needed to display it properly.
            const geometry = new THREE.BoxGeometry(3, 3, 3);
            const material = new THREE.MeshBasicMaterial({
                color: "#ffffff",
                map: texture,
            });
            const cube = new THREE.Mesh(geometry, material);

            // Now the cube is added to the scene and will be rendered
            // should the renderer be invoked.
            scene.add(cube);

            const animate = () => {
                // Request animation frame to inform browser that an animation is about to
                // happen.
                // Also save it in a react state hook, since it has to be canceled later in
                // the event loop.
                setAnimationFrame(requestAnimationFrame(animate));

                // Rotate cube on both the x and y axis by a specific number of degrees.
                cube.rotation.x += 0.005;
                cube.rotation.y += 0.005;

                // Invoking the renderer to render the created scene with the
                // camera providing the perspective.
                renderer.render(scene, camera);
            };

            // Firing up the animation.
            animate();
        }
    }, [navbarIndicatorRef]);

    const testRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // if (!animationFrame) {
        //     animateLogo();
        // }

        if (testRef.current && !animationFrame && navbarIndicatorRef.current) {
            setAnimationFrame(1);
            const width = navbarIndicatorRef.current.clientWidth;
            const height = navbarIndicatorRef.current.clientHeight;
            renderToCanvas(testRef.current, 300, 400, () => (
                <NavbarIndicatorTexture />
            ));
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [animateLogo, animationFrame]);

    return (
        <div ref={navbarIndicatorRef} className={styles.navbarIndicator}>
            <canvas ref={testRef}></canvas>
        </div>
    );
};

export default NavbarIndicator;
