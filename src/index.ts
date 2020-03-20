import { optimizelyClientInstance } from "./optimizely";

optimizelyClientInstance.onReady().then(() => {
    const experiment = optimizelyClientInstance.activate('landing-pages-test', 'wesley');
    document.body.textContent = experiment ? experiment : "experimento desativado";
}); 