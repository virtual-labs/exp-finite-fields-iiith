importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"6c81d45442b1ee9fe5da943fd6f221fa","url":"contributors.html"},{"revision":"662faa51418407147ab9f9cf09ae5119","url":"feedback.html"},{"revision":"595fad8380d9c83dd60847be780b477a","url":"images/exp6-fig1.png"},{"revision":"121d2a0ddc0b9ee277f5b56daa2ba828","url":"images/exp6-fig2.png"},{"revision":"f79817b715ccdff0479fd203b78d01f4","url":"images/exp6-fig3.png"},{"revision":"d93ea1cbc60a52c99c00243dc00b2960","url":"images/exp6-fig4.png"},{"revision":"3d30a71ec7b7aefd4a71399fdf18f269","url":"images/exp6-fig5.png"},{"revision":"9e93c50ed0889a2e927fbd07237267bd","url":"images/exp6-fig6.png"},{"revision":"02361ee0770a4f47bc0c17e2261d96f4","url":"images/exp6-fig7.png"},{"revision":"3e821203369a83465826e779d0319d9f","url":"images/exp6-fig8.png"},{"revision":"62e332ba55f6a28c622d8a23ceb11c36","url":"images/exp6-fig9.png"},{"revision":"d30f30a5a5976e59164e8202141f057c","url":"index.html"},{"revision":"340aae3d928b1b2fa32c2cfad68a0234","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"d17bf9bdd0a7c2d727bde6f0969ac162","url":"posttest.html"},{"revision":"45e1279f1a24f05a28b930d50b31c08c","url":"posttest.json"},{"revision":"af188648aa78daabff6f76f684f3c5c8","url":"pretest.html"},{"revision":"c438075a8c601e197d0ef8853679e6f1","url":"pretest.json"},{"revision":"b11e0a6ed3b7f8bf35c4628a3724ccab","url":"procedure.html"},{"revision":"d5c65ca486aa3cd3a7bace381cf38ff9","url":"references.html"},{"revision":"2f6e7d92e1d7c790d2460fa77863aa91","url":"simulation.html"},{"revision":"173b01d2220f48ec22aa890fce2ff482","url":"simulation/css/euclidean-division.css"},{"revision":"ab2da7f246352c7146e545b5ec637a76","url":"simulation/css/finite-field.css"},{"revision":"82877487f4cc0b48f6e5026ee52cf323","url":"simulation/css/main.css"},{"revision":"d79665d9d1e12555ec1f3b405bc68904","url":"simulation/css/minimal-polynomial.css"},{"revision":"5e2b44358ea951611ece497c38f71b20","url":"simulation/finite-field.html"},{"revision":"6e3d7caec9b6ea338e3ff460d715c202","url":"simulation/index.html"},{"revision":"b4164343ee33e5956a0c9242e71d307d","url":"simulation/js/euclidean-division.js"},{"revision":"249e791293588a8665f36548b1a1f0fe","url":"simulation/js/finite-field.js"},{"revision":"a89e034b2b52a89b08e43607073b3dfd","url":"simulation/js/minimal-polynomial.js"},{"revision":"1aab6f4bb8fa3090d5ac90b4a546cd06","url":"simulation/minimal-polynomial.html"},{"revision":"57783b0619e0de491eeeb35b6e625ffe","url":"theory.html"},{"revision":"685d9f33188bb1a031f62a885580c198","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );