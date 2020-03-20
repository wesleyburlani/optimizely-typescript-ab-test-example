import * as optimizely from "@optimizely/optimizely-sdk";

export let optimizelyClientInstance = optimizely.createInstance({
    sdkKey: "HTeqyYASMHXBgz4HhfXWh8",
    datafileOptions: {
        autoUpdate: true,
        updateInterval: 1000,  // 1 second in milliseconds
    },
});