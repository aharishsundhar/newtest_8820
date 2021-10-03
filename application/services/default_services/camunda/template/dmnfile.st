dmnfile(object, roles) ::=<<
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/DMN/20151101/dmn.xsd" xmlns:biodi="http://bpmn.io/schema/dmn/biodi/1.0" id="Definitions_0fnw5vs" name="DRD" namespace="http://camunda.org/schema/1.0/dmn">
  <decision id="Accesslevel" name="Authorize">
    <extensionElements>
      <biodi:bounds x="150" y="150" width="180" height="80" />
    </extensionElements>
    <decisionTable id="decisionTable_1">
      <input id="input_1" label="resources">
        <inputExpression id="inputExpression_1" typeRef="string">
          <text>resources</text>
        </inputExpression>
      </input>
      <input id="InputClause_1rqn79m" label="resourcetype">
        <inputExpression id="LiteralExpression_016sarj" typeRef="string">
          <text>resourcetype</text>
        </inputExpression>
      </input>    
        $if(roles)$$roles:{value |
        <output id="output_$value.output$" label="$value.role$" name="$value.role$" typeRef="string" />
        }$$endif$
      $if(object)$$object:{value |
        <rule id="DecisionRule_$value.DecisionRuleId$">
        <inputEntry id="UnaryTests_$value.UnaryTestsId$">
          <text>"$value.screen$"</text>
        </inputEntry>
        <inputEntry id="UnaryTests_$value.UnaryTests2Id$">
          <text>"Screen"</text>
        </inputEntry>
        $if(roles)$$roles:{values |
        <outputEntry id="LiteralExpression_$value.DecisionRuleId$$values.role$">
          <text>
            $value.outputjson$
          </text>
        </outputEntry>
         }$$endif$
      </rule>
       };separator="\n"$$endif$
           </decisionTable>
  </decision>
</definitions>
>>