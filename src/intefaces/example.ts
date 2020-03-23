import * as optimizely from "@optimizely/optimizely-sdk";

export interface Example {
    execute(client: optimizely.Client): void;
}