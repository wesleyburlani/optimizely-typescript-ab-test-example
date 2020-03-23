import { Visitor } from "./intefaces/visitor";
import { VisitorsProvider } from "./intefaces/visitors-provider";

export class StaticVisitorsProvider implements VisitorsProvider {
    getVisitors(): Visitor[] {
        return [
            { userId: 'alice', },
            { userId: 'bob', },
            { userId: 'charlie', },
            { userId: 'don', },
            { userId: 'eli', },
            { userId: 'fabio', },
            { userId: 'gary', },
            { userId: 'helen', },
            { userId: 'ian', },
            { userId: 'jill', },
        ];
    }
}