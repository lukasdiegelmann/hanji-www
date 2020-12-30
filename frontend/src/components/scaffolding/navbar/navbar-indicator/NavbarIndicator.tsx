/**
 * @author lukasdiegelmann
 */

import React, { useCallback, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { connect, ConnectedProps } from "react-redux";
import * as THREE from "three";
import Logo from "../../../essence/displays/logo/Logo";
import useClean from "../../../../@utils/useClean";
import scss from "./NavbarIndicator.module.scss";
import { RootState } from "../../../../@intrinsic/store";

const loadImage = (url: string): Promise<HTMLImageElement> => {
    // Constructing a new window.Image instance. It is not necessary to tell the
    // browser it's a window.Image object since 'window' is the global object
    // that's put infront of basic class constructors or functions and what not
    // to make could more simple.
    const image = new Image();

    // Returning a promise since loading an image is an asynchronous task, that
    // is, it is not in sync with the event loop anymore.
    return new Promise((resolve) => {
        // Here a listener is provided that will be executed once the image has
        // finished loading.
        //
        // Once that's happened the promise will be resolved providing any
        // listeners attached with the then() function with the loaded
        // HTMLImageElement.
        image.onload = () => resolve(image);

        // The source of the image is defined as the url that's been provided as
        // an argument.
        image.src = url;
    });
};

const renderToCanvas = async (
    canvas: HTMLCanvasElement,
    Component: React.FunctionComponent
) => {
    // Defining the dimensions of the canvas, this is dependend on the
    // parameters passed to the renderToCanvas() function.
    canvas.width = 200;
    canvas.height = 200;

    // Getting the canvas's 2d context to draw on.
    const ctx = canvas.getContext("2d");

    // Templating a url that will allow the loadImage() function to create a
    // proper image based on a react functional component.
    //
    // This is thanks to the <foreignObject /> tag which allows XHTML to be
    // inserted into a svg tag or file, respectively.
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${renderToStaticMarkup(
                <Component />
            )}</div>
        </foreignObject>
    </svg>`;
    const url = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

    // This will generate a window.Image instance based on the url templated
    // above.
    const image = await loadImage(url);

    // Now that a image has been created out of the url, it is possible to draw
    // the image onto the canvas's context using its inherent drawImage()
    // method.
    ctx?.drawImage(image, 0, 0);
};

// This is the react functional component that will be rendered to the DOM
// (Document Model Object) by the react api.
const NavbarIndicator: React.FunctionComponent<
    ConnectedProps<typeof connector>
> = (props) => {
    // For more information see the comments at
    // 'frontend\src\utils\customHooks\useCleanup.ts'.
    const clean = useClean();

    // This serves as a reference of the navbarIndicator DOM element. Notice
    // that it can be null, as it is the initial value, so until
    // componentDidMount is called in the component life cycle it be that value.
    const navbarIndicatorRef = useRef<HTMLDivElement>(null);

    // The handleLogoAnimation() function is used to initiate and handle the
    // logo animation that can be seen at the top of each page of the hanji
    // docs.
    //
    // Note: The handleLogoAnimation function is an asynchonous function because
    // of the loadImage() call a little bit deeper in the call tree. This
    // results in wrapping the function into a new Promise() instantiation.
    const handleLogoAnimation = useCallback(async () => {
        // As mentioned before the navbarIndicatorRef can be null and as the
        // typescript compiler does not inherit AI level knowledge of how
        // reactjs works and what an component life cycle is it sets the
        // reference equal to a union type of null and HTMLDivElement.
        if (navbarIndicatorRef.current) {
            // This gets the dimensions at point of initialization. Those are
            // used to set the first aspect ratio of the camera.
            //
            // Note: The aspect ratio will change as the window dimensions
            // change as well. This is to ensure an best as possible viewing
            // experience of the user.
            const initialWidth = navbarIndicatorRef.current.clientWidth;
            const initialHeight = navbarIndicatorRef.current.clientHeight;

            // From this point on the THREE API will be used to render a canvas
            // with 3 dimensional object in it.
            //
            // To start with that a scene is needed. Mentioned scene will be
            // created here. Notice that the constructor does not need any
            // arguments to instantiate.
            const scene = new THREE.Scene();

            // Now a renderer is created it will be responsible for rendering
            // the scene properly onto the canvas.
            //
            // Note: The THREE.WebGLRenderer constructor accepts an object with
            // two properties on it, at least in this case of usage.
            const renderer = new THREE.WebGLRenderer({
                // The 'alpha' property is used to get an transparent
                // background. The alpha color is set to white.
                alpha: true,

                // The 'antialias' property cleans up about 50 to 70 percent of
                // the pixelation of the scene. It really makes the scene look
                // acceptable in the first place.
                antialias: true,
            });

            // This is the first use case of the initial dimensions of the DOM
            // reference - The size of the renderers DOM element is set here.
            renderer.setSize(initialWidth, initialHeight);

            // Finally the renderer's DOM element is appended to the
            // navbarIndicator DOM element reference. In other words there
            // exists now a canvas in the tree of the navbarIndicator.
            navbarIndicatorRef.current.appendChild(renderer.domElement);

            // A camera is created for proper three dimensional displaying. The
            // most interesting of its properties is probably the aspect. It is
            // calculated by dividing the width of the navbarIndicator by its
            // height.
            const fov = 90;
            const aspect = initialWidth / initialHeight;
            const near = 0.1;
            const far = 1000;

            // Every constant is used to instantiate a 'PerspectiveCamera' of
            // the THREE API.
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

            // The camera is positioned a bit farther back in the scene. If that
            // would not be done it would at point (0, 0, 0) and therefore
            // directly inside the cube we are about to create.
            camera.position.z = 5;

            // A 'Pointlight' is created to make the 'MeshToonMaterial' visible,
            // which will be used to construct the cube. It will shine a white
            // light from a specific angle, such that the cubes starts shining a
            // bit.
            const light = new THREE.PointLight(0xffffff, 1, 200);
            light.position.set(10, 10, 10);
            scene.add(light);

            // Notice that this is not the canvas that will be used to draw the
            // scene on it is used to draw the texture of the cube on! This is
            // done by converting a jsx element to a svg to a image that is then
            // drawn onto that canvas.
            const canvas = document.createElement("canvas");

            // This will initiate the process of drawing the jsx element to a
            // canvas...
            await renderToCanvas(canvas, () => <Logo size={180} />);

            // Once that is done it is converted to a 'CanvasTexture' which is a
            // class of the THREE API.
            const texture = new THREE.CanvasTexture(canvas);

            // Now a mesh is created. A mesh is composed out of a geometry like
            // a sphere or in this case a box and of a material like 'Phong' or
            // 'Basic'.
            const geometry = new THREE.BoxGeometry(3, 3, 3);
            const material = new THREE.MeshToonMaterial({
                // The texture is used as the skin of the material. It is
                // wrapped around it using the UVMapping of the
                // 'CanvasStructure'.
                map: texture,
            });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Now the main animation loop is created. It will handle the
            // rotation animation of the cube.
            const mainLoop = () => {
                // A animation frame is requested to validate the animation onto
                // the canvas.
                //
                // Note: Without this the animation would not even start
                // working.
                requestAnimationFrame(mainLoop);

                // This is the part where the cube is rotated. Notice that the
                // rotation value is in radiants and not in degrees, which is
                // also the reason pi is divided by a specific number.
                //
                // This is also where the redux state management comes into
                // play. It holds the value for 'isLoading' and should this
                // value be 'true' the cube will rotate faster the if it were
                // 'false'.
                if (props.isLoading) {
                    cube.rotation.x += Math.PI / 180;
                    cube.rotation.y += Math.PI / 180;
                } else {
                    cube.rotation.x += Math.PI / 380;
                    cube.rotation.y += Math.PI / 380;
                }

                // And the renderer combines the scene and the camera to a final
                // image that will be the cube with it's texture, rotating.
                renderer.render(scene, camera);
            };

            // And thus shall the animation begin. Notice that it will only be
            // called once per lifecycle turn.
            mainLoop();

            // A cleanup function is added to accord for removing the canvas
            // from screen on a new life cycle as there will be a new one
            // created (as it should be).
            clean.add(() => {
                renderer.domElement.remove();
            });

            // Now the renderer and the camera are returned to pose as
            // animationControls. This will become useful when changing the
            // dimensions of the canvas on an event of 'resize'.
            return { renderer, camera };
        }
    }, [props.isLoading, clean]);

    // This is the function that will create a function that will handle the
    // window's 'resize' event.
    //
    // It needs the animation controls of the handleLogoAnimation function to
    // work.
    const fabricateHandleWindowResize = useCallback(
        (animationControls: {
            renderer: THREE.WebGLRenderer;
            camera: THREE.PerspectiveCamera;
        }) => () => {
            if (navbarIndicatorRef.current) {
                const currentWidth = navbarIndicatorRef.current.clientWidth;
                const currentHeight = navbarIndicatorRef.current.clientHeight;

                animationControls.renderer.setSize(currentWidth, currentHeight);
                animationControls.camera.aspect = currentWidth / currentHeight;

                animationControls.camera.updateProjectionMatrix();
            }
        },
        []
    );

    useEffect(() => {
        // The handleLogoAnimation is called on the componentDidMount lifecycle
        // part.
        handleLogoAnimation().then((animationControls) => {
            // Again because of typescript reasons a if conditional is added to
            // prevent compilation problems.
            if (animationControls) {
                // A handleWindowResize() function is created to handle the
                // canvas resizing.
                const handleWindowResize = fabricateHandleWindowResize(
                    animationControls
                );

                // The handler is added as a window 'resize' listener and needs
                // to be removed on an event of component unmount.
                window.addEventListener("resize", handleWindowResize);

                // A cleanup function to accord to the removal of the listener.
                // This is absolutely necessary to keep a good performance of
                // the website.
                clean.add(() =>
                    window.removeEventListener("resize", handleWindowResize)
                );
            }
        });

        // A cleanup is performed on the 'unmount' event of the component.
        return clean.exec;
    }, [handleLogoAnimation, clean, fabricateHandleWindowResize]);

    // The element structure of the component is returned and simply consists of
    // a HTMLDivElement that will contain the THREE scene later on its
    // lifecycle.
    return (
        <div
            ref={navbarIndicatorRef}
            className={scss["navbar-indicator"]}
        ></div>
    );
};

// This is to connect the react component to the redux store
//
// Note: It is also possible to do this in a single step like this:
// connect(...)(NavbarIndicator) but since the connector variable is needed for
// typing purposes it is done in a double step.
const connector = connect((state: RootState) => ({
    isLoading: state.navbarIndicator.isLoading,
}));

export default connector(NavbarIndicator);
