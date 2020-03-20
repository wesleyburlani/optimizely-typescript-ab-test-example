import { optimizelyClientInstance } from "./optimizely";
import { VisitorsGenerator } from "./visitors-generator";

optimizelyClientInstance.onReady().then(() => {

    let counter: { [key: string]: number; } = {};

    VisitorsGenerator.getVisitors().forEach(visitor => {
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
        }
    });

    document.body.innerText += '\n' + '\n';

    for (let key in counter) {
        let value = counter[key];
        document.body.innerText += `${key} recebeu ${value} visita(s)` + '\n';
    };
});     