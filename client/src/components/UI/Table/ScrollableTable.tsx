import { Table } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { TablePaginationConfig, TableProps } from "antd/es/table";
import "./AntdStyle.css";

interface ScrollableTableProps<T> extends TableProps<T> {
  pagination?: false | undefined | TablePaginationConfig;
  scroll?: object;
}

const DEFAULT_PAGINATION = {
  showLessItems: true,
  responsive: true,
  defaultPageSize: 50,
  pageSizeOptions: [50, 100, 200],
};
const DEFAULT_SCROLL = { y: "max-content" };
// const DEFAULT_SCROLL = { y: "auto", x: "auto" }; //or that

function ScrollableTable<T extends AnyObject>(props: ScrollableTableProps<T>) {
  const {
    dataSource,
    columns,
    pagination = {},
    components,
    bordered = true,
    scroll = {},
    rowKey,
    loading,
    virtual,
    expandable,
    size,
    rowClassName,
    rowSelection,
    onChange,
  } = props;
  const finalPagination = pagination
    ? { ...DEFAULT_PAGINATION, ...pagination }
    : false;
  const finalScroll = scroll
    ? { ...DEFAULT_SCROLL, ...scroll }
    : DEFAULT_SCROLL;
  return (
    <Table
      className={"scrollable-table"}
      components={components}
      columns={columns}
      dataSource={dataSource}
      pagination={finalPagination}
      sticky={true}
      scroll={finalScroll}
      loading={loading}
      bordered={bordered}
      rowKey={rowKey}
      rowClassName={rowClassName}
      virtual={virtual}
      expandable={expandable}
      rowSelection={rowSelection}
      onChange={onChange}
      size={size}
    />
  );
}
export default ScrollableTable;
