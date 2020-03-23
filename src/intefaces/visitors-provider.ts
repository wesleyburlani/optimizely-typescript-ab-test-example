import { Visitor } from "./visitor";

export interface VisitorsProvider {
    getVisitors(): Visitor[];
}