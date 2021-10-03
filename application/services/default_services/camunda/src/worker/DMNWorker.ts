import { Response, response } from 'express';
import { DmnSupportWorker } from '../supportworker/DMNsupportWorker';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { camundaService } from '../config/camundaService';
import * as asyncloop from 'node-async-loop';

let dmnSupportFile = new DmnSupportWorker();

export class DmnWorkerFile {

  private screenarray = [];
  public rolesarray: any;

  public dmnTable(screens, roles, callback) {
    console.log('---screens--dmntable--->>>', roles);
    this.screenarray = [];
    this.rolesarray = roles;
  
    let roledmnarray = [];

    let listofscreens = this.ScreenName(screens);
    let saveItems = this.SaveItems(listofscreens);
    let templatepath = camundaService.TEMPLATE_PATH;
    let generationpath = camundaService.GENERATION_PATH;

    this.rolesarray.forEach(elements => {
      let dmnrole = {
        role: '',
        output: ''
      }
      console.log('------elements------', elements);
      dmnrole.role = elements;
      dmnrole.output = generate(dictionary.numbers, 6);
      roledmnarray.push(dmnrole);
    })
    console.log('----dmnrole---->', roledmnarray);
    dmnSupportFile.dmnSupportWorker(saveItems, roledmnarray, generationpath, templatepath, (response) => {
      callback(response);
    })
  }

  ScreenName(value) {
    // return new Promise(async (resolve, reject) => {
    let screens = value;
    let menu = screens;
    let output = {};
    let finaloutputarr = [];
    let lastslice = '';
    let role_key = {};

    if (menu.length > 0) {
      menu.forEach(element => {
        console.log('eachj descriptions are ----  ', element);
        output[element.resources] = [];
        let role = element.role
        asyncloop(this.rolesarray, (element, next) => {
          if (role === element) {
            role_key[element] = {
              value: true
            }
          }
          else {
            role_key[element] = {
              value: false
            }
          }
          next();
        }, (error) => {
          if (error) {
            console.log('Error occured in Asyncloop');
          }
          output[element.resources].push(role_key);
          role_key = {};
        })
        console.log("element resources-newwww>", output[element.resources]);
        finaloutputarr.push(output);
        lastslice = finaloutputarr[finaloutputarr.length - 1];
      });
      return lastslice;
    }

    else {
      console.log('----else part----');
      let screensname = {
        screen: '',
        DecisionRuleId: '',
        UnaryTestsId: '',
        UnaryTests2Id: '',
        LiteralExpressionId: '',
        LiteralExpression2Id: '',
        LiteralExpression3Id: ''
      };
      screensname.screen = 'home';
      screensname.DecisionRuleId = generate(dictionary.numbers, 6);
      screensname.UnaryTestsId = generate(dictionary.numbers, 6);
      screensname.UnaryTests2Id = generate(dictionary.numbers, 6);
      screensname.LiteralExpressionId = generate(dictionary.numbers, 6);
      screensname.LiteralExpression2Id = generate(dictionary.numbers, 6);
      screensname.LiteralExpression3Id = generate(dictionary.numbers, 6);
      this.screenarray.push(screensname);
    }
    console.log("screenarray---->", this.screenarray)
    return this.screenarray;
  }

  SaveItems(dmnvalue) {
    console.log('---------value------', dmnvalue);
    Object.keys(dmnvalue).forEach((key, index) => {
      let screensname = {
        screen: '',
        outputjson: '',
        DecisionRuleId: '',
        UnaryTestsId: '',
        UnaryTests2Id: '',
        LiteralExpressionId: '',
        LiteralExpression2Id: '',
        LiteralExpression3Id: '',
        LiteralExpression4Id: ''
      };
      console.log('------key------', key);
      screensname.screen = key;
      screensname.outputjson = JSON.stringify(dmnvalue);
      screensname.DecisionRuleId = generate(dictionary.numbers, 6);
      screensname.UnaryTestsId = generate(dictionary.numbers, 6);
      screensname.UnaryTests2Id = generate(dictionary.numbers, 6);
      screensname.LiteralExpressionId = generate(dictionary.numbers, 6);
      screensname.LiteralExpression2Id = generate(dictionary.numbers, 6);
      screensname.LiteralExpression3Id = generate(dictionary.numbers, 6);
      screensname.LiteralExpression4Id = generate(dictionary.numbers, 6);
      this.screenarray.push(screensname)
    });

    console.log('----------Finaldmnobject-------', this.screenarray)
    return this.screenarray;
  }
}