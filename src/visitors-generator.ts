import { Visitor } from "./intefaces/visitor";

export class VisitorsGenerator {
    public static getVisitors(): Visitor[] {
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