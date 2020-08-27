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
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12492",
        "ok": "12492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2621",
        "ok": "2621",
        "ko": "-"
    },
    "percentiles1": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "percentiles2": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2660",
        "ok": "2660",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10526",
        "ok": "10526",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.323",
        "ok": "0.323",
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
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2143",
        "ok": "2143",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "percentiles1": {
        "total": "521",
        "ok": "521",
        "ko": "-"
    },
    "percentiles2": {
        "total": "654",
        "ok": "654",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1700",
        "ok": "1700",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2054",
        "ok": "2054",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
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
        "total": "0.161",
        "ok": "0.161",
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
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12492",
        "ok": "12492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1752",
        "ok": "1752",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3599",
        "ok": "3599",
        "ko": "-"
    },
    "percentiles1": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "percentiles2": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7595",
        "ok": "7595",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11513",
        "ok": "11513",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.161",
        "ok": "0.161",
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
