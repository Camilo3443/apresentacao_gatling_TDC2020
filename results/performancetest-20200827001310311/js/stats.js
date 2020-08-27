var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles1": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles3": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles4": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
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
        "total": "2",
        "ok": "2",
        "ko": "-"
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
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles2": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles3": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles4": {
        "total": "499",
        "ok": "499",
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
        "total": "1",
        "ok": "1",
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
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles2": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles3": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles4": {
        "total": "203",
        "ok": "203",
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
        "total": "1",
        "ok": "1",
        "ko": "-"
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
