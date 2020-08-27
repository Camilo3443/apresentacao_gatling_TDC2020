var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "468",
        "ok": "468",
        "ko": "486"
    },
    "maxResponseTime": {
        "total": "486",
        "ok": "468",
        "ko": "486"
    },
    "meanResponseTime": {
        "total": "477",
        "ok": "468",
        "ko": "486"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "477",
        "ok": "468",
        "ko": "486"
    },
    "percentiles2": {
        "total": "482",
        "ok": "468",
        "ko": "486"
    },
    "percentiles3": {
        "total": "485",
        "ok": "468",
        "ko": "486"
    },
    "percentiles4": {
        "total": "486",
        "ok": "468",
        "ko": "486"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
    }
},
contents: {
"req_login--33de6": {
        type: "REQUEST",
        name: "Login!",
path: "Login!",
pathFormatted: "req_login--33de6",
stats: {
    "name": "Login!",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "percentiles2": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "percentiles3": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "percentiles4": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_buscar-produto--72986": {
        type: "REQUEST",
        name: "Buscar produto!",
path: "Buscar produto!",
pathFormatted: "req_buscar-produto--72986",
stats: {
    "name": "Buscar produto!",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "maxResponseTime": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "meanResponseTime": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "percentiles2": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "percentiles3": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "percentiles4": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
