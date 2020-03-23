import { optimizelyClientInstance } from "./optimizely";
import { VisitorsProvider } from "./visitors-provider";

optimizelyClientInstance.onReady().then(() => {
    testFeatureFlag();
    document.body.innerText += "\n\n\n";
    testExperiment();

});

function testFeatureFlag() {

    let enabledFlagCounter = 0;
    let disabledFlagCounter = 0;
    VisitorsProvider.getVisitors().forEach(visitor => {
        var enabled = optimizelyClientInstance.isFeatureEnabled('my-feature-1', visitor.userId);
        if (enabled) {
            enabledFlagCounter++;
        }
        else {
            disabledFlagCounter++;
        }
    });

    document.body.innerText += `${enabledFlagCounter} usuarios tiveram a feature mostrada` + '\n';
    document.body.innerText += `${disabledFlagCounter} usuarios não tiveram a feature mostrada` + '\n';
}


function testExperiment() {
    let counter: { [key: string]: number; } = {};

    VisitorsProvider.getVisitors().forEach(visitor => {
        const experiment = optimizelyClientInstance.activate('landing-pages-test', visitor.userId);
        if (!experiment) {
            document.body.innerText += `experimento desativado para usuário ${visitor.userId}` + '\n';
        }
        else {
            document.body.innerText += `mostrando ${experiment} para usuário ${visitor.userId}` + '\n';
            if (counter[experiment as string])
                counter[experiment as string] += 1;
            else
                counter[experiment as string] = 1;

            if (experiment == "landing-page-1") {
                optimizelyClientInstance.track('my_conversion', visitor.userId, {}, {revenue: 1});
            }
        }
    });

    document.body.innerText += '\n' + '\n';

    for (let key in counter) {
        let value = counter[key];
        document.body.innerText += `${key} recebeu ${value} visita(s)` + '\n';
    };
}