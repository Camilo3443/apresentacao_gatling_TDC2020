var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2050",
        "ok": "2050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles1": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "percentiles2": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "percentiles3": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1797",
        "ok": "1797",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 5
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2050",
        "ok": "2050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "618",
        "ok": "618",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles2": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1930",
        "ok": "1930",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 10
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "669",
        "ok": "669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "440",
        "ok": "440",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles1": {
        "total": "409",
        "ok": "409",
        "ko": "-"
    },
    "percentiles2": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles3": {
        "total": "599",
        "ok": "599",
        "ko": "-"
    },
    "percentiles4": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
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
