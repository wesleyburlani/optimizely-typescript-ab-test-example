import * as optimizely from "@optimizely/optimizely-sdk";
import { Example } from "./intefaces/example";
import { VisitorsProvider } from "./intefaces/visitors-provider";

/**
 * Simulates an A/B test using optimizely
 * the code takes random visitors to be a lead and sends the event o optimizely 
 */

export class ABTestExperimentExample implements Example {

    constructor(private visitorsProvider: VisitorsProvider) { }

    execute(client: optimizely.Client): void {

        this.visitorsProvider.getVisitors().forEach(visitor => {

            var variation = client.activate('landing-pages', visitor.userId);

            if (variation === 'landing-page-1') {
                document.body.innerText += `Showing landing-page-1 for user ${visitor.userId}` + '\n';
            } else if (variation === 'landing-page-2') {
                document.body.innerText += `Showing landing-page-2 for user ${visitor.userId}` + '\n';
            } else {
                document.body.innerText += `Experiment disabled for user ${visitor.userId}` + '\n';
            }
    
            let userIslead = !(+new Date()%2);
            if(userIslead){
                document.body.innerText += `user ${visitor.userId} is a lead!` + '\n';
                client.track('new_lead', visitor.userId, {}, { revenue: 1 });
            }
        });
    }
}