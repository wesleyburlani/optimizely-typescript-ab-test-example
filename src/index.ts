import { optimizelyClientInstance } from "./optimizely";
import { StaticVisitorsProvider } from "./static-visitors-provider";
import { ABTestExperimentExample } from "./ab-test-experiment-example";

optimizelyClientInstance.onReady().then(() => {
    new ABTestExperimentExample(new StaticVisitorsProvider()).execute(optimizelyClientInstance);
});