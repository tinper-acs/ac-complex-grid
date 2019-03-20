"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _beeTable = require("bee-table");

var _beeTable2 = _interopRequireDefault(_beeTable);

var _multiSelect = require("bee-table/build/lib/multiSelect");

var _multiSelect2 = _interopRequireDefault(_multiSelect);

var _filterColumn = require("bee-table/build/lib/filterColumn");

var _filterColumn2 = _interopRequireDefault(_filterColumn);

var _dragColumn = require("bee-table/build/lib/dragColumn");

var _dragColumn2 = _interopRequireDefault(_dragColumn);

var _sort = require("bee-table/build/lib/sort");

var _sort2 = _interopRequireDefault(_sort);

var _sum2 = require("bee-table/build/lib/sum");

var _sum3 = _interopRequireDefault(_sum2);

var _bigData = require("bee-table/build/lib/bigData");

var _bigData2 = _interopRequireDefault(_bigData);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeCheckbox = require("bee-checkbox");

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

var _beePopover = require("bee-popover");

var _beePopover2 = _interopRequireDefault(_beePopover);

var _beePagination = require("bee-pagination");

var _beePagination2 = _interopRequireDefault(_beePagination);

var _ExportExcel = require("./ExportExcel");

var _ExportExcel2 = _interopRequireDefault(_ExportExcel);

var _ColumnsDropdown = require("./ColumnsDropdown");

var _ColumnsDropdown2 = _interopRequireDefault(_ColumnsDropdown);

var _i18n = require("./i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _tool = require("bee-locale/build/tool");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  showHeaderMenu: _propTypes2.default.bool,
  sheetName: _propTypes2.default.string,
  sheetIsRowFilter: _propTypes2.default.bool,
  exportData: _propTypes2.default.array
};
var defaultProps = {
  scroll: {
    y: true
  },
  bordered: true,
  multiSelect: { type: "checkbox" },
  draggable: true,
  dragborder: true,
  showHeaderMenu: true,
  data: [],
  exportData: [],
  locale: {},
  paginationObj: {},
  sheetName: "sheet",
  sheetIsRowFilter: false,
  columnFilterAble: true
};

var ComplexTable = _beeTable2.default;

var defualtPaginationParam = { horizontalPosition: "left", verticalPosition: 'bottom', showJump: true, first: true, prev: true, last: true, next: true, maxButtons: 5 };

var Grid = (_temp = _class = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var paginationObj = props.paginationObj,
        sortObj = props.sort,
        filterable = props.filterable;

    _this.state = {
      filterable: filterable,
      renderFlag: false,
      activePage: paginationObj.activePage,
      total: paginationObj.total,
      pageItems: paginationObj.items,
      dataNum: paginationObj.dataNum,
      showMenuKey: ''
    };

    if (sortObj) {
      sortObj.originSortFun = sortObj.originSortFun ? sortObj.originSortFun : sortObj.sortFun;
      sortObj.sortFun = _this.sortFun;
      _this.sort = sortObj;
    }

    ComplexTable = (0, _sort2.default)(_beeTable2.default, _beeIcon2.default);
    if (props.canSum) {
      ComplexTable = (0, _sum3.default)(ComplexTable);
    }
    if (props.multiSelect !== false) {
      ComplexTable = (0, _multiSelect2.default)(ComplexTable, _beeCheckbox2.default);
    }
    if (props.loadLazy) {
      ComplexTable = (0, _bigData2.default)(ComplexTable);
    }
    if (props.draggable) {
      ComplexTable = (0, _dragColumn2.default)(ComplexTable);
    }

    ComplexTable = (0, _filterColumn2.default)(ComplexTable, _beePopover2.default);

    return _this;
  }

  Grid.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var renderFlag = this.state.renderFlag;

    if (nextProps.paginationObj && nextProps.paginationObj !== 'none') {
      this.setState({
        activePage: nextProps.paginationObj.activePage,
        total: nextProps.paginationObj.total,
        pageItems: nextProps.paginationObj.items,
        dataNum: nextProps.paginationObj.dataNum
      });
    }
    if (nextProps.columns && nextProps.columns !== this.columns) {
      var newColumns = [],
          leftColumns = [],
          rightColumns = [],
          centerColumns = [];
      if (nextProps.noReplaceColumns) {
        newColumns = nextProps.columns.map(function (colItem) {
          return _extends({}, colItem);
        });
      } else {
        this.columns.forEach(function (item, index) {
          if (nextProps.columns[index].dataIndex !== item.dataIndex) {
            var curIndex = -1;
            for (var nextIndex = 0; nextIndex < nextProps.columns.length; nextIndex++) {
              if (nextProps.columns[nextIndex].dataIndex == item.dataIndex) {
                curIndex = nextIndex;
                break;
              }
            }
            nextProps.columns.splice(index, 0, nextProps.columns.splice(curIndex, 1)[0]);
          }
        });


        nextProps.columns.forEach(function (nextItem, index) {
          var newItem = {};

          _this2.columns.forEach(function (item) {
            if (nextItem.dataIndex == item.dataIndex) {
              newItem = _extends({}, item, nextItem);

              if (!item.fixed) {
                newItem.fixed = '';
              }
              if (item.width && newItem.width !== item.width) {
                newItem.width = item.width;
              }

              newItem.hasHeaderMenu = false;
            }
          });
          if (newItem.fixed == "left") {
            leftColumns.push(newItem);
          } else if (newItem.fixed == "right") {
            rightColumns.push(newItem);
          } else {
            centerColumns.push(newItem);
          }
        });
        newColumns = [].concat(leftColumns, centerColumns, rightColumns);
      }

      this.columns = newColumns, this.setState({
        renderFlag: !renderFlag,
        filterable: nextProps.filterable
      });
    }
  };

  Grid.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
    var _this3 = this;

    var icon = "uf-arrow-down";
    var _props = this.props,
        showFilterMenu = _props.showFilterMenu,
        columnFilterAble = _props.columnFilterAble;
    var filterable = this.state.filterable;

    return columns.map(function (originColumn, index, arr) {
      var column = (0, _assign2.default)({}, originColumn);

      column.hasHeaderMenu = true;

      column.title = _react2.default.createElement(_ColumnsDropdown2.default, { originColumn: originColumn, local: _this3.local, showFilterMenu: showFilterMenu,
        onMenuSelect: _this3.onMenuSelect, allColumns: arr, columnFilterAble: columnFilterAble,
        filterable: filterable
      });

      return column;
    });
  };

  Grid.prototype.render = function render() {
    var props = this.props;
    var _props$sort = props.sort,
        sort = _props$sort === undefined ? {} : _props$sort,
        paginationObj = props.paginationObj;

    var paginationParam = void 0,
        verticalPosition = void 0,
        horizontalPosition = void 0;
    this.local = (0, _tool.getComponentLocale)(this.props, this.context, "Grid", function () {
      return _i18n2.default;
    });
    if (paginationObj !== 'none') {
      paginationParam = _extends({}, defualtPaginationParam, paginationObj);
      verticalPosition = paginationParam.verticalPosition;
      horizontalPosition = paginationParam.horizontalPosition;
      delete paginationParam.freshData;
      delete paginationParam.horizontalPosition;
      delete paginationParam.verticalPosition;
    }

    var scroll = (0, _assign2.default)({}, { y: true }, props.scroll);

    var filterable = this.state.filterable;

    var columns = this.columns.slice();

    if (props.showHeaderMenu) {
      columns = this.renderColumnsDropdown(columns);
    }
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("u-grid", props.className) },
      verticalPosition == "top" && _react2.default.createElement(_beePagination2.default, _extends({}, paginationParam, {
        className: horizontalPosition,

        boundaryLinks: true,
        activePage: this.state.activePage,
        onSelect: this.handleSelectPage,
        items: this.state.pageItems,
        total: this.state.total
      })),
      _react2.default.createElement(ComplexTable, _extends({}, props, {
        scroll: scroll,
        columns: columns,
        afterFilter: this.afterFilter,
        sort: this.sort,
        onDrop: this.dragDrop,
        afterDragColWidth: this.afterDragColWidth,
        filterable: filterable
      })),
      verticalPosition == "bottom" && _react2.default.createElement(_beePagination2.default, _extends({}, paginationParam, {
        className: horizontalPosition,
        boundaryLinks: true,
        activePage: this.state.activePage,
        onSelect: this.handleSelectPage,
        items: this.state.pageItems,
        total: this.state.total
      }))
    );
  };

  return Grid;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.columns = this.props.columns.map(function (colItem) {
    return _extends({}, colItem);
  });

  this.changeMenuKey = function (key) {};

  this.handleSelectPage = function (eventKey) {
    var _props$paginationObj = _this4.props.paginationObj,
        paginationObj = _props$paginationObj === undefined ? {} : _props$paginationObj;

    _this4.setState({
      activePage: eventKey
    });
    paginationObj.freshData && paginationObj.freshData(eventKey);
  };

  this.optFixCols = function (columns, key) {
    var fixedLeftCols = [];
    var fixedRightCols = [];
    var nonColums = [];

    columns.find(function (da) {
      if (da.key == key) {
        da.fixed ? delete da.fixed : da.fixed = "left";
      }
      if (da.fixed == "left") {
        fixedLeftCols.push(da);
      } else if (da.fixed == "right") {
        fixedRightCols.push(da);
      } else {
        nonColums.push(da);
      }
    });

    columns = [].concat(fixedLeftCols, nonColums, fixedRightCols);
    return columns;
  };

  this.optShowCols = function (columns, key) {
    columns.forEach(function (item, index) {
      if (item.key == key) {
        item.ifshow = false;
        return;
      }
    });
    return columns;
  };

  this.onMenuSelect = function (_ref) {
    var key = _ref.key,
        item = _ref.item;
    var _state = _this4.state,
        filterable = _state.filterable,
        renderFlag = _state.renderFlag;
    var checkMinSize = _this4.props.checkMinSize;

    var fieldKey = item.props.data.fieldKey;
    if (key == "fix") {
      _this4.columns = _this4.optFixCols(_this4.columns, fieldKey);

      _this4.setState({
        renderFlag: !renderFlag
      });
    } else if (key == "show") {
      var _sum = 0;
      _this4.columns.forEach(function (da) {
        !da.fixed && da.ifshow !== false ? _sum++ : "";
      });
      if (_sum < checkMinSize || _sum <= 1) {
        return;
      }
      _this4.columns = _this4.optShowCols(_this4.columns, fieldKey);
      _this4.setState({
        renderFlag: !renderFlag
      });
    } else {
      if (typeof _this4.props.afterRowFilter == "function") {
        _this4.props.afterRowFilter(!filterable);
      }
      _this4.setState({ filterable: !filterable });
    }
  };

  this.afterFilter = function (optData, columns) {
    if (Array.isArray(optData)) {
      _this4.columns.forEach(function (da) {
        optData.forEach(function (optItem) {
          if (da.key == optItem.key) {
            da.ifshow = optItem.ifshow;
            return true;
          }
        });
      });
    } else {
      _this4.columns.find(function (da) {
        if (da.key == optData.key) {
          da.ifshow = optData.ifshow;
        }
      });
    }

    if (typeof _this4.props.afterFilter == "function") {
      _this4.props.afterFilter(optData, _this4.columns);
    }
  };

  this.sortFun = function (sortParam) {
    var sortObj = {};
    sortParam.forEach(function (item) {
      sortObj[item.field] = item;
    });
    _this4.columns.forEach(function (da) {
      if (sortObj[da.dataIndex]) {
        da = (0, _assign2.default)(da, sortObj[da.dataIndex]);
      } else {
        da.order = "flatscend";
        da.orderNum = "";
      }
    });

    if (typeof _this4.sort.originSortFun == "function") {
      _this4.sort.originSortFun(sortParam, _this4.columns);
    }
  };

  this.dragDrop = function (event, data, columns) {

    columns.forEach(function (item, index) {
      if (_this4.columns[index].dataIndex !== item.dataIndex) {
        var curIndex = -1;
        for (var nextIndex = 0; nextIndex < _this4.columns.length; nextIndex++) {
          if (_this4.columns[nextIndex].dataIndex == item.dataIndex) {
            curIndex = nextIndex;
            break;
          }
        }
        _this4.columns.splice(index, 0, _this4.columns.splice(curIndex, 1)[0]);
      }
    });
    if (_this4.props.onDrop) {
      _this4.props.onDrop(event, data, _this4.columns);
    }
  };

  this.getColumnsAndTablePros = function () {
    var originColumns = _this4.props.columns;
    var columns = _this4.columns.slice();

    if (_this4.dragColsData) {
      var dragColsKeyArr = (0, _keys2.default)(_this4.dragColsData);
      dragColsKeyArr.some(function (itemKey) {
        columns.forEach(function (col) {
          if (col.dataIndex == itemKey) {
            col.width = _this4.dragColsData[itemKey].width;
            return true;
          }
        });
      });
    }
    var rs = {
      columns: columns,
      tablePros: _this4.props
    };
    return rs;
  };

  this.getItem = function (da) {
    var obj = {};
    da.height ? obj.hpx = da.height : "";
    da.ifshow ? obj.hidden = true : false;
    da.level ? obj.level = da.level : "";
    return obj;
  };

  this.getRowList = function (data) {
    var rowAttr = [];
    data.forEach(function (da) {
      var item = _this4.getItem(da);
      if (item) {
        rowAttr.push(item);
      }
    });
    return rowAttr;
  };

  this.exportExcel = function () {
    var _props2 = _this4.props,
        sheetIsRowFilter = _props2.sheetIsRowFilter,
        sheetName = _props2.sheetName,
        _sheetHeader = _props2.sheetHeader,
        exportData = _props2.exportData;

    var colsAndTablePros = _this4.getColumnsAndTablePros();
    var sheetHeader = [],
        columnAttr = [],
        rowAttr = [],
        sheetFilter = [],
        _exportHidden = false;

    for (var index = 0; index < colsAndTablePros.columns.length; index++) {
      var element = colsAndTablePros.columns[index];
      if (element.exportHidden) {
        _exportHidden = true;
        break;
      }
    }
    console.log("--_excelHidden-******--", _exportHidden);
    colsAndTablePros.columns.forEach(function (column) {
      sheetHeader.push(column.title);
      var _show = false;
      if (column.ifshow != undefined && column.ifshow === false) {
        _show = true;
      }
      columnAttr.push({
        wpx: column.width,
        hidden: _exportHidden ? column.exportHidden : _show });
      var _cloum = column.exportKey ? column.exportKey : column.dataIndex;
      sheetFilter.push(_cloum);
    });
    if (_sheetHeader) {
      rowAttr.push(_this4.getItem(_sheetHeader));
    }
    if (sheetIsRowFilter) {
      _this4.getRowList(colsAndTablePros.tablePros.data);
    }
    var option = {
      datas: [{
        sheetData: exportData,
        sheetName: sheetName,
        sheetFilter: sheetFilter,
        sheetHeader: sheetHeader,
        columnAttr: columnAttr,
        rowAttr: rowAttr
      }]
    };
    var toExcel = new _ExportExcel2.default(option);
    toExcel.saveExcel();
  };

  this.afterDragColWidth = function (colData) {
    var renderFlag = _this4.state.renderFlag;
    var rows = colData.rows,
        cols = colData.cols,
        currIndex = colData.currIndex;

    _this4.columns.forEach(function (item) {
      rows.find(function (paramItem, paramIndex) {
        if (item.dataIndex == paramItem.dataindex) {
          if (paramIndex == currIndex) {
            item.width = parseInt(cols[paramIndex].style.width);
          } else {
            item.width = paramItem.width;
          }
        }
      });
    });
    _this4.setState({
      renderFlag: !renderFlag
    });
  };

  this.resetColumns = function (newColumns) {
    var renderFlag = _this4.state.renderFlag;

    if (newColumns) {
      _this4.columns = newColumns.map(function (colItem) {
        return _extends({}, colItem);
      });
      _this4.setState({
        renderFlag: !renderFlag
      });
    }
  };
}, _temp);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
Grid.contextTypes = {
  beeLocale: _propTypes2.default.object
};
exports.default = Grid;