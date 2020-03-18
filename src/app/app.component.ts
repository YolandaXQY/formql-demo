import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'formqlv9';

  mockData = {
    total: 3,
    size: 3,
    tableHead: [{
      key: 'code',
      name: '品号'
    }, {
      key: 'specification',
      name: '品名/规格'
    }, {
      key: 'quantity',
      name: '数量'
    }, {
      key: 'deliveryRisk',
      name: '交期风险'
    }, {
      key: 'moneyRisk',
      name: '金额风险'
    }, {
      key: 'qualityRisk',
      name: '质量风险'
    }, {
      key: 'operator',
      name: '操作'
    }],
    tableBody: [
      {
        code: 'B013',
        specification: '钣金',
        quantity: 1500,
        deliveryRisk: '75%',
        moneyRisk: null,
        qualityRisk: null,
        operator: [{
          name: '更换厂商',
        }, {
          name: '其他操作'
        }]
      },
      {
        code: 'B012',
        specification: '齿轮箱',
        quantity: 2000,
        deliveryRisk: '8%',
        moneyRisk: "10%",
        qualityRisk: null,
        operator: [{
          name: '更换厂商',
        }]
      }
    ]
  };

  mockLayout = {
    componentName: 'table',
    label: 'ds',
    componentProperty: {},
    dataSource: {},
    childComponent: {
      quantity: {
        componentName: 'input',
        componentProperty: {
          type: 'number',
          placeholder: '请输入数量'
        }
      },
      operator: {
        componentName: 'aLink'
      }
    }
  }


}
