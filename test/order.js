module("module1");

//(function() {
//    var moduleStart = QUnit.moduleStart;
//    var moduleDone = QUnit.moduleDone;
//    var testStart = QUnit.testStart;
//    var testDone = QUnit.testDone;
//
//    QUnit.moduleStart = function() {
//        console.log("moduleStart");
//        moduleStart(arguments);
//    };
//    QUnit.moduleDone = function() {
//        console.log("moduleDone");
//        moduleDone(arguments);
//    };
//    QUnit.testStart = function() {
//        console.log("testStart");
//        testStart(arguments);
//    };
//    QUnit.testDone = function() {
//        console.log("testDone");
//        testDone(arguments);
//    };
//})();

test("test1", function() {
    console.log("test1");
});

test("test2", function() {
    console.log("test2");
});

module("module2");

test("test3", function() {
    console.log("test3");
});

test("test4", function() {
    console.log("test4");
});