/*
 * Template group dmnfile
 * Compiled on Wed Feb 24 2021 19:52:19 GMT+0530 (India Standard Time)
 */
var path = require("path");
var base = path.dirname(module.filename);

function getInstance(st, group) {
    "use strict";
var r;
var gFile = "dmnfile"; 

group.name = "dmnfile";





//
// Template /dmnfile
//
r = function(w, rc) {
    var g = this.owningGroup,
        s = this.scope;
    
    w.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    w.write("\n");
    w.write("<definitions xmlns=\"http://www.omg.org/spec/DMN/20151101/dmn.xsd\" xmlns:biodi=\"http://bpmn.io/schema/dmn/biodi/1.0\" id=\"Definitions_0fnw5vs\" name=\"DRD\" namespace=\"http://camunda.org/schema/1.0/dmn\">");
    w.write("\n");
    w.pushIndentation("  ");
    w.write("<decision id=\"Accesslevel\" name=\"Authorize\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("    ");
    w.write("<extensionElements>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("      ");
    w.write("<biodi:bounds x=\"150\" y=\"150\" width=\"180\" height=\"80\" />");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("    ");
    w.write("</extensionElements>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("    ");
    w.write("<decisionTable id=\"decisionTable_1\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("      ");
    w.write("<input id=\"input_1\" label=\"resources\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("        ");
    w.write("<inputExpression id=\"inputExpression_1\" typeRef=\"string\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("          ");
    w.write("<text>resources</text>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("        ");
    w.write("</inputExpression>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("      ");
    w.write("</input>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("      ");
    w.write("<input id=\"InputClause_1rqn79m\" label=\"resourcetype\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("        ");
    w.write("<inputExpression id=\"LiteralExpression_016sarj\" typeRef=\"string\">");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("          ");
    w.write("<text>resourcetype</text>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("        ");
    w.write("</inputExpression>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("      ");
    w.write("</input>    ");
    w.popIndentation();
    w.write("\n");
    w.write("        ");
    if (st.test(s.roles)) {
    
        st.write(w, s, g, rc, (function() {
        var tp = [],
        attr = s.roles;
        tp.push(st.makeSubTemplate(g, function(w, rc) {
            var g = this.owningGroup,
            s = this.scope;
            
                     w.write("<output id=\"output_");
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "output", { file: gFile, line: 20, column: 34 }));
                     w.write("\" label=\"");
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "role", { file: gFile, line: 20, column: 57 }));
                     w.write("\" name=\"");
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "role", { file: gFile, line: 20, column: 77 }));
                     w.write("\" typeRef=\"string\" />");
                     w.write("\n");
                     w.write("        ");
            }, [
            { name: "value"     }
            ])); 
        return st.map(attr, tp);
        })());
    
    
    }
    w.write("\n");
    w.write("      ");
    if (st.test(s.object)) {
    
        st.write(w, s, g, rc, (function() {
        var tp = [],
        attr = s.object;
        tp.push(st.makeSubTemplate(g, function(w, rc) {
            var g = this.owningGroup,
            s = this.scope;
            
                     w.write("<rule id=\"DecisionRule_");
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "DecisionRuleId", { file: gFile, line: 23, column: 38 }));
                     w.write("\">");
                     w.write("\n");
                     w.pushIndentation("        ");
                     w.write("<inputEntry id=\"UnaryTests_");
                     w.popIndentation();
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "UnaryTestsId", { file: gFile, line: 24, column: 42 }));
                     w.write("\">");
                     w.write("\n");
                     w.pushIndentation("          ");
                     w.write("<text>\"");
                     w.popIndentation();
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "screen", { file: gFile, line: 25, column: 24 }));
                     w.write("\"</text>");
                     w.write("\n");
                     w.pushIndentation("        ");
                     w.write("</inputEntry>");
                     w.popIndentation();
                     w.write("\n");
                     w.pushIndentation("        ");
                     w.write("<inputEntry id=\"UnaryTests_");
                     w.popIndentation();
                     st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "UnaryTests2Id", { file: gFile, line: 27, column: 42 }));
                     w.write("\">");
                     w.write("\n");
                     w.pushIndentation("          ");
                     w.write("<text>\"Screen\"</text>");
                     w.popIndentation();
                     w.write("\n");
                     w.pushIndentation("        ");
                     w.write("</inputEntry>");
                     w.popIndentation();
                     w.write("\n");
                     w.write("        ");
                     if (st.test(s.roles)) {
                     
                         st.write(w, s, g, rc, (function() {
                         var tp = [],
                         attr = s.roles;
                         tp.push(st.makeSubTemplate(g, function(w, rc) {
                             var g = this.owningGroup,
                             s = this.scope;
                             
                                      w.write("<outputEntry id=\"LiteralExpression_");
                                      st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "DecisionRuleId", { file: gFile, line: 31, column: 50 }));
                                      st.write(w, s, g, rc, st.prop(s, g, rc, s.values, "role", { file: gFile, line: 31, column: 73 }));
                                      w.write("\">");
                                      w.write("\n");
                                      w.pushIndentation("          ");
                                      w.write("<text>");
                                      w.popIndentation();
                                      w.write("\n");
                                      w.pushIndentation("            ");
                                      st.write(w, s, g, rc, st.prop(s, g, rc, s.value, "outputjson", { file: gFile, line: 33, column: 19 }));
                                      w.popIndentation();
                                      w.write("\n");
                                      w.pushIndentation("          ");
                                      w.write("</text>");
                                      w.popIndentation();
                                      w.write("\n");
                                      w.pushIndentation("        ");
                                      w.write("</outputEntry>");
                                      w.popIndentation();
                                      w.write("\n");
                                      w.write("         ");
                             }, [
                             { name: "values"     }
                             ])); 
                         return st.map(attr, tp);
                         })());
                     
                     
                     }
                     w.write("\n");
                     w.pushIndentation("      ");
                     w.write("</rule>");
                     w.popIndentation();
                     w.write("\n");
                     w.write("       ");
            }, [
            { name: "value"     }
            ])); 
        return st.map(attr, tp);
        })(), {separator: "\n"});
    
    
    }
    w.write("\n");
    w.pushIndentation("           ");
    w.write("</decisionTable>");
    w.popIndentation();
    w.write("\n");
    w.pushIndentation("  ");
    w.write("</decision>");
    w.popIndentation();
    w.write("\n");
    w.write("</definitions>");
};
r.args = [
        { name: "object"     },
{ name: "roles"     }
];
group.addTemplate("/dmnfile", r); 


return group;
}
getInstance.base = base;

module.exports = getInstance;