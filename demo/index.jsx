
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";import Demo4 from "./demolist/Demo4";
var DemoArray = [{"example":<Demo1 />,"title":" 高级表格的基础应用grid","code":"/**\n * @title 高级表格的基础应用grid\n * @description 全选、分页、过滤功能、交换\n *\n */\nimport React, { Component } from \"react\";\nimport Grid from \"../../src\";\n\nfunction fmoney(s, n) {\n  n = n > 0 && n <= 20 ? n : 2;\n  s = parseFloat((s + \"\").replace(/[^\\d\\.-]/g, \"\")).toFixed(n) + \"\";\n  let l = s.split(\".\")[0].split(\"\").reverse(), r = s.split(\".\")[1];\n  let t = \"\";\n  for (let i = 0; i < l.length; i++) {\n  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? \",\" : \"\");\n  }\n  return t.split(\"\").reverse().join(\"\") + \".\" + r;\n  }\n  \nconst column = [\n  {\n    title: \"序号\",\n    dataIndex: \"index\",\n    key: \"index\",\n    width: 100\n  },\n  {\n    title: \"订单编号\",\n    dataIndex: \"orderCode\",\n    key: \"orderCode\",\n    width: 150\n  },\n  {\n    title: \"金额\",\n    dataIndex: \"money\",\n    key: \"money\",\n    width: 160,\n    textAlign:'right',\n    render(text, record, index) {\n       let money = fmoney(text,2);\n       return (<span>{money}</span>)\n    }\n  },\n  {\n    title: \"类型\",\n    dataIndex: \"type_name\",\n    key: \"type_name\",\n    width: 100\n  },\n  {\n    title: \"采购组织\",\n    dataIndex: \"purchasing\",\n    key: \"purchasing\",\n    width: 150\n  },\n  {\n    title: \"采购组\",\n    dataIndex: \"purchasingGroup\",\n    key: \"purchasingGroup\",\n    width: 300\n  },\n  {\n    title: \"凭证日期\",\n    dataIndex: \"voucherDate\",\n    key: \"voucherDate\",\n    width: 150\n  },\n  {\n    title: \"审批状态\",\n    dataIndex: \"approvalState_name\",\n    key: \"approvalState_name\",\n    width: 150\n  },\n  {\n    title: \"确认状态\",\n    dataIndex: \"confirmState_name\",\n    key: \"confirmState_name\",\n    width: 500\n  },\n  {\n    title: \"关闭状态\",\n    dataIndex: \"closeState_name\",\n    key: \"closeState_name\",\n    width: 150\n  },\n  {\n    title: \"操作\",\n    dataIndex: \"d\",\n    key: \"d\",\n    width: 100,\n    fixed: \"right\",\n    render(text, record, index) {\n      return (\n        <div className=\"operation-btn\">\n          <a\n            href=\"#\"\n            tooltip={text}\n            onClick={() => {\n              alert(\"这是第\" + index + \"列，内容为:\" + text);\n            }}\n          >\n            一些操作\n          </a>\n        </div>\n      );\n    }\n  }\n];\nconst dataList = [\n  {\n    index: 1,\n    orderCode: \"2343\",\n    supplierName: \"xxx\",\n    type_name: \"123\",\n    purchasing: \"内行\",\n    purchasingGroup: \"323\",\n    voucherDate: \"kkkk\",\n    approvalState_name: \"vvvv\",\n    confirmState_name: \"aaaa\",\n    closeState_name: \"vnnnnn\",\n    money:'1232.56',\n    d: \"操作\",\n    key: \"1\"\n  },\n  {\n    index: 2,\n    _checked: true,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    money:'2341232.56',\n    d: \"2操作\",\n    key: \"2\"\n  },\n  {\n    index: 3,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    _disabled: true,\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    money:'122368732.56',\n    d: \"3操作\",\n    key: \"3\"\n  },\n  {\n    index: 4,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    money:'18765232.56',\n    d: \"4操作\",\n    key: \"4\"\n  }\n];\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n  }\n  //临时加个判断\n  shouldComponentUpdate(){\n    if(this.props.className =='u-panel-title'){\n      return false;\n    }\n  }\n  getSelectedDataFunc = data => {\n    console.log(\"data\", data);\n  };\n\n  selectedRow = (record, index) => {};\n  /**\n   * 请求页面数据\n   */\n  freshata=()=>{\n\n  }\n  onDataNumSelect=()=>{\n    console.log('选择每页多少条的回调函数');\n  }\n  render() {\n    let paginationObj = {\n      items:10,//一页显示多少条\n      total:100,//总共多少条、\n      freshData:this.freshData,//点击下一页刷新的数据\n      onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件\n      showJump:false\n    }\n    return (\n      <Grid\n        className=\"demo\"\n        columns={column}\n        data={dataList}\n        getSelectedDataFunc={this.getSelectedDataFunc}\n        paginationObj={paginationObj}\n      />\n    );\n  }\n}\n","desc":" 全选、分页、过滤功能、交换"},{"example":<Demo2 />,"title":" 高级表格(排序)应用","code":"/**\n *\n * @title 高级表格(排序)应用\n * @description 基础grid上添加排序功能\n *\n */\nimport React, { Component } from \"react\";\nimport Grid from \"../../src\";\nconst column = [\n    {\n      title: \"名字\",\n      dataIndex: \"a\",\n      key: \"a\",\n      className:'dfasd',\n      width: 200\n    },\n    {\n      title: \"功力指数\",\n      dataIndex: \"b\",\n      key: \"b\",\n      width: 200,\n      sumCol: true,\n      sorter: (a, b) => a.c - b.c,\n      sorterClick:(data,type)=>{//排序的回调函数\n        //type value is up or down\n        console.log(\"data\",data);\n      }\n    },\n    {\n      title: \"年龄\",\n      dataIndex: \"c\",\n      key: \"c\",\n      width: 200,\n      sumCol: true,\n      sorter: (a, b) => a.c - b.c,\n      sorterClick:(data,type)=>{//排序的回调函数\n        //type value is up or down\n        console.log(\"data\",data);\n      }\n    },\n    {\n      title: \"成绩\",\n      dataIndex: \"e\",\n      key: \"e\",\n      width: 200,\n      sumCol: true,\n      sorter: (a, b) => a.c - b.c,\n    },\n    {\n      title: \"武功级别\",\n      dataIndex: \"d\",\n      key: \"d\",\n      width: 200\n    }\n  ];\n  const dataList = [\n    { a: \"杨过\", b: 675, c: 30, d: \"内行\",e:100, key: \"2\" },\n    { a: \"令狐冲\", b: 43, c: 41, d: \"大侠\",e:90, key: \"1\" },\n    { a: \"令狐冲1\", b: 43, c: 81, d: \"大侠\", e:120,key: \"4\" },\n    { a: \"令狐冲2\", b: 43, c: 81, d: \"大侠\", e:130,key: \"5\" },\n    { a: \"郭靖\", b: 153, c: 25, d: \"大侠\",e:90, key: \"3\" }\n  ];\n\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n  }\n\n  //临时加个判断\n  shouldComponentUpdate(){\n    if(this.props.className =='u-panel-title'){\n      return false;\n    }\n  }\n  getSelectedDataFunc = data => {\n    console.log(\"data\", data);\n  };\n\n  getCloumnsScroll = columns => {\n    let sum = 0;\n    columns.forEach(da => {\n      sum += da.width;\n    });\n    console.log(\"sum\", sum);\n    return sum;\n  };\n\n  selectedRow = (record, index) => {};\n  /**\n   * 请求页面数据\n   */\n  freshData=()=>{\n\n  }\n  /**\n   * 后端获取数据\n   */\n  sortFun = (sortParam)=>{\n    console.info(sortParam);\n    //将参数传递给后端排序\n  }\n  render() {\n    let paginationObj = {\n      items:10,//总页数\n      freshData:this.freshData\n    }\n    let sortObj = {\n        mode:'multiple',\n        // backSource:true,\n        sortFun:this.sortFun\n      }\n    return (\n      <Grid\n        className=\"demo\"\n        columns={column}\n        data={dataList}\n        getSelectedDataFunc={this.getSelectedDataFunc}\n        selectedRow={this.selectedRow}\n        sort={sortObj}\n        headerScroll={true}\n        sortFun={this.sortFun}\n        paginationObj={paginationObj}\n      />\n    );\n  }\n}\n","desc":" 基础grid上添加排序功能"},{"example":<Demo3 />,"title":" 高级表格(保存操作模板、导出excel","code":"/**\n  * @title 高级表格(保存操作模板、导出excel)应用 \n * @description 拖住表格宽度、交换列、以及导出excel功能\n *\n */\nimport React, { Component } from \"react\";\nimport Button from 'bee-button';\nimport Grid from \"../../src\";\n\nconst column = [\n  {\n    title: \"序号\",\n    dataIndex: \"index\",\n    key: \"index\",\n    width: 100,\n    // exportHidden:true //是否在导出中隐藏此列,此属性如不设置的话，他会读取当前页面的列是否隐藏和显示\n  },\n  {\n    title: \"订单编号\",\n    dataIndex: \"orderCode\",\n    key: \"orderCode\",\n    exportKey:'supplierName',//单独设置当前列的导出的key\n    width: 100\n  },\n  {\n    title: \"供应商名称\",\n    dataIndex: \"supplierName\",\n    key: \"supplierName\",\n    width: 100\n  },\n  {\n    title: \"类型\",\n    dataIndex: \"type_name\",\n    key: \"type_name\",\n    width: 100\n  },\n  {\n    title: \"采购组织\",\n    dataIndex: \"purchasing\",\n    key: \"purchasing\",\n    width: 100,\n  },\n  {\n    title: \"采购组\",\n    dataIndex: \"purchasingGroup\",\n    key: \"purchasingGroup\",\n    width: 300\n  },\n  {\n    title: \"凭证日期\",\n    dataIndex: \"voucherDate\",\n    key: \"voucherDate\",\n    width: 100\n  },\n  {\n    title: \"审批状态\",\n    dataIndex: \"approvalState_name\",\n    key: \"approvalState_name\",\n    width: 100\n  },\n  {\n    title: \"确认状态\",\n    dataIndex: \"confirmState_name\",\n    key: \"confirmState_name\",\n    width: 500\n  },\n  {\n    title: \"关闭状态\",\n    dataIndex: \"closeState_name\",\n    key: \"closeState_name\",\n    width: 100\n  },\n  {\n    title: \"操作\",\n    dataIndex: \"d\",\n    key: \"d\",\n    width: 100,\n    fixed: \"right\",\n    render(text, record, index) {\n      return (\n        <div className=\"operation-btn\">\n          <a\n            href=\"#\"\n            tooltip={text}\n            onClick={() => {\n              alert(\"这是第\" + index + \"列，内容为:\" + text);\n            }}\n          >\n            一些操作\n          </a>\n        </div>\n      );\n    }\n  }\n];\nconst dataList = [\n  {\n    index: 1,\n    orderCode: \"2343\",\n    supplierName: \"xxx\",\n    type_name: \"123\",\n    purchasing: \"内行\",\n    purchasingGroup: \"323\",\n    voucherDate: \"kkkk\",\n    approvalState_name: \"vvvv\",\n    confirmState_name: \"aaaa\",\n    closeState_name: \"vnnnnn\",\n    d: \"操作\",\n    key: \"1\"\n  },\n  {\n    index: 2,\n    _checked: true,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    d: \"2操作\",\n    key: \"2\"\n  },\n  {\n    index: 3,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    _disabled: true,\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    d: \"3操作\",\n    key: \"3\"\n  },\n  {\n    index: 4,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    d: \"4操作\",\n    key: \"4\"\n  }\n];\n\nconst exportDataList = [\n  {\n    index: 1,\n    orderCode: \"2343\",\n    supplierName: \"xxx\",\n    type_name: \"123\",\n    purchasing: \"内行\",\n    purchasingGroup: \"323\",\n    voucherDate: \"kkkk\",\n    approvalState_name: \"vvvv\",\n    confirmState_name: \"aaaa\",\n    closeState_name: \"vnnnnn\",\n    d: \"操作\",\n    key: \"1\"\n  },\n  {\n    index: 4,\n    orderCode: \"222\",\n    supplierName: \"22xxx\",\n    type_name: \"1223\",\n    purchasing: \"内行2\",\n    purchasingGroup: \"3223\",\n    voucherDate: \"222kk\",\n    approvalState_name: \"22vvvv\",\n    confirmState_name: \"2aaaa\",\n    closeState_name: \"2vnnnnn\",\n    d: \"4操作\",\n    key: \"4\"\n  }\n];\n\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state={\n      showTemTable:false\n    }\n  }\n  \n  getSelectedDataFunc = data => {\n    console.log(\"data\", data);\n  };\n\n  getCloumnsScroll = columns => {\n    let sum = 0;\n    columns.forEach(da => {\n      sum += da.width;\n    });\n    console.log(\"sum\", sum);\n    return sum;\n  };\n\n  selectedRow = (record, index) => {};\n  /**\n   * 请求页面数据\n   */\n  freshData=()=>{\n\n  }\n  createTemTable=()=>{\n    const colsAndTablePros = this.refs.grid.getColumnsAndTablePros();\n    this.setState({\n      showTemTable:true,\n      tablePros:colsAndTablePros.tablePros,\n      temColumns:colsAndTablePros.columns\n    });\n  }\n\n  exportExcel = ()=>{\n    this.refs.grid.exportExcel();\n  }\n\n  render() {\n    let paginationObj = {\n      items:10,//总页数\n      total:100,\n      freshData:this.freshData\n    }\n    return (\n      <div>\n        <div className='btn_group'>\n          <Button colors=\"primary\" onClick={this.createTemTable}>生成模板表格</Button>\n          <Button colors=\"primary\" onClick={this.exportExcel}>导出数据</Button>\n        </div>\n        <Grid\n          ref=\"grid\"\n          className='gridDemo demo'\n          columns={column}\n          data={dataList}\n          exportData={exportDataList}\n          getSelectedDataFunc={this.getSelectedDataFunc}\n          checkMinSize={7}\n          // draggable={true}\n          dragborder\n          multiSelect={{ type: \"checkbox\" }}\n          scroll={{ x: \"130%\", y: 100 }}\n          selectedRow={this.selectedRow}\n          paginationObj={paginationObj}\n          showFilterPopover={true}\n        />\n        <h3>根据模板生成的表格</h3>\n        {this.state.showTemTable?\n          <Grid {...this.state.tablePros} columns={this.state.temColumns}/>\n          :\"\"}\n      </div>\n    );\n  }\n}\n","desc":" 拖住表格宽度、交换列、以及导出excel功能"},{"example":<Demo4 />,"title":" 高级表格的基础应用grid","code":"/**\n * @title 高级表格的基础应用grid\n * @description 全选、分页、过滤功能、交换\n *\n */\nimport React, { Component } from \"react\";\nimport Grid from \"../../src\";\nconst columns = [\n    {\n        title:'序号',\n        dataIndex:'index',\n        width:'80',\n        render:(text,record,index)=>{\n            return index\n        },\n        fixed:'left'\n    },\n    {\n    title: \"用户名\", dataIndex: \"a\", key: \"a\", width: 580, className: \"rowClassName\",\n  },\n  { id: \"123\", title: \"性别\", dataIndex: \"b\", key: \"b\", width: 80},\n  { title: \"年龄\", dataIndex: \"c\", key: \"c\", width: 200 },\n  {\n    title: \"操作\",\n    dataIndex: \"d\",\n    key: \"d\",\n    fixed:'right',\n    render(text, record, index) {\n      return (\n        <div style={{ position: 'relative' }} title={text} >\n          <a\n            href=\"javascript:;\"\n            tooltip={text}\n            onClick={() => {\n              alert('这是第' + index + '列，内容为:' + text);\n            }}\n          >\n            一些操作\n              </a>\n        </div>\n      );\n    }\n  }\n];\n\nconst data = [ ...new Array(10000) ].map((e, i) => {\n    const rs = { a: i + 'a', b: i + 'b', c: i + 'c', d: i + 'd', key: i };\n    if(i%3==0){\n        rs.b = '女';\n    }\n    return rs;\n   })\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n  }\n  //临时加个判断\n  shouldComponentUpdate(){\n    if(this.props.className =='u-panel-title'){\n      return false;\n    }\n  }\n  getSelectedDataFunc = data => {\n    console.log(\"data\", data);\n  };\n\n  selectedRow = (record, index) => {};\n  /**\n   * 请求页面数据\n   */\n  freshata=()=>{\n\n  }\n  onDataNumSelect=()=>{\n    console.log('选择每页多少条的回调函数');\n  }\n  render() {\n    let paginationObj = {\n      items:10,//一页显示多少条\n      total:100,//总共多少条\n      freshData:this.freshData,//点击下一页刷新的数据\n      onDataNumSelect:this.onDataNumSelect //每页大小改变触发的事件\n    }\n    return (\n      <Grid\n        className=\"demo\"\n        columns={columns}\n        data={data}\n        getSelectedDataFunc={this.getSelectedDataFunc}\n        paginationObj={paginationObj}\n        loadLazy={true}\n        heigth={40}\n        scroll = {{y:300}}\n      />\n    );\n  }\n}\n","desc":" 全选、分页、过滤功能、交换"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

