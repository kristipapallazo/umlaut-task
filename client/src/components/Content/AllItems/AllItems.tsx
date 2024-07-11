import { FC, useCallback, useEffect, useState } from "react";
import ScrollableTable from "../../UI/Table/ScrollableTable";
import { Spin } from "antd";
import { Names, Result, Results, ServerResp } from "../../../types/types";
import { handlePostReq } from "../../../utils/request-api";
import { ColumnsType } from "antd/es/table";
import ItemLabel from "../../UI/ItemLabel/ItemLabel";

interface Data {
  results: Results;
}
interface DataSource extends Result {
  key: string;
}

interface AllItemsProps {
  names: Names;
}

const AllItems: FC<AllItemsProps> = ({ names }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Results | undefined>(undefined);
  const [dataSource, setDataSource] = useState<DataSource[]>([]);
  const [columns, setColumns] = useState<ColumnsType<DataSource>>();
  const [error, setError] = useState<string | undefined>(undefined);

  const init = useCallback(async () => {
    const serverResp: ServerResp<Data> = await handlePostReq(
      "/all-items-generation",
      {
        body: JSON.stringify({ items: names }),
      }
    );
    if (serverResp.error) {
      setError(serverResp.message);
      return;
    }
    setResults(serverResp.data?.results);
  }, [names]);

  useEffect(() => {
    if (!results || Object.keys(results).length === 0) return;
    const tempDataSource = Object.keys(results).map((name) => {
      return { key: name, ...results[name] };
    });
    const tempColumns: ColumnsType<DataSource> = [
      {
        key: "name",
        title: "Name",
        dataIndex: "key",
      },
      {
        key: "convertion",
        title: "Convertion",
        dataIndex: "umlautConvertion",
      },
      {
        key: "variations",
        title: "Variations",
        dataIndex: "variations",
      },
      {
        key: "query",
        title: "Query",
        dataIndex: "sqlQuery",
      },
    ];
    setColumns(tempColumns);
    setDataSource(tempDataSource);
  }, [results]);

  useEffect(() => {
    setLoading(true);
    init();
    setLoading(false);
  }, [names]);
  if (loading) return <Spin />;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {error && (
        <ItemLabel label="Error" item={error} style={{ flexShrink: 1 }} />
      )}
      <ScrollableTable
        dataSource={dataSource}
        columns={columns}
        bordered={true}
        pagination={false}
      />
    </div>
  );
};

export default AllItems;
