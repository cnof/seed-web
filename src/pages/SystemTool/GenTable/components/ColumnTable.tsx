import { queryGenTableColumnList } from '@/services/codegenerator/CodeGeneratorController';
import { EditableProTable, ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

export interface ColumnTableProps {
  tableId?: number;
  onCancel: () => void;
  onSubmit: () => void;
}

const ColumnTable: React.FC<ColumnTableProps> = (props) => {
  const [columnData, setColumnData] = useState<
    CodeGeneratorAPI.GenTableColumnInfo[]
  >([]);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>();
  const columns: ProColumns<CodeGeneratorAPI.GenTableColumnInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 40,
    },
    {
      title: '字段列名',
      key: 'columnId',
      dataIndex: 'columnId',
      hidden: true,
      valueType: 'text',
      editable: false,
    },
    {
      title: '字段列名',
      key: 'columnName',
      dataIndex: 'columnName',
      valueType: 'text',
      editable: false,
    },
    {
      title: '字段描述',
      dataIndex: 'columnComment',
      valueType: 'text',
    },
    {
      title: '物理类型',
      dataIndex: 'columnType',
      valueType: 'text',
      editable: false,
    },
    {
      title: 'Java类型',
      dataIndex: 'javaType',
      valueType: 'select',
      valueEnum: {
        Long: {
          text: 'Long',
        },
        String: {
          text: 'String',
        },
        Integer: {
          text: 'Integer',
        },
        Double: {
          text: 'Double',
        },
        BigDecimal: {
          text: 'BigDecimal',
        },
        Date: {
          text: 'Date',
        },
      },
    },
    {
      title: 'Java属性',
      dataIndex: 'javaField',
      valueType: 'text',
    },
    {
      title: '插入',
      dataIndex: 'isInsert',
      valueType: 'radio',
      valueEnum: {
        1: {
          text: '是',
        },
        0: {
          text: '否',
        },
      },
    },
    {
      title: '编辑',
      dataIndex: 'isEdit',
      valueType: 'radio',
      valueEnum: {
        1: {
          text: '是',
        },
        0: {
          text: '否',
        },
      },
    },
    {
      title: '列表',
      dataIndex: 'isList',
      valueType: 'text',
    },
    {
      title: '查询',
      dataIndex: 'isQuery',
      valueType: 'text',
    },
    {
      title: '查询方式',
      dataIndex: 'queryType',
      valueType: 'text',
    },
    {
      title: '必填',
      dataIndex: 'isRequired',
      valueType: 'text',
    },
  ];

  // 加载数据
  const reloadList = useCallback(async () => {
    let res = await queryGenTableColumnList(props.tableId);
    let columnIds = res.data.map((val) => {
      return val.columnId;
    });
    setEditableRowKeys(columnIds);
    setColumnData(res.data);
  }, []);
  useEffect(() => {
    reloadList().then(() => {});
  }, []);

  return (
    <EditableProTable<CodeGeneratorAPI.GenTableColumnInfo>
      rowKey={'columnId'}
      columns={columns}
      value={columnData}
      toolBarRender={() => {
        return [
          <Button
            type="primary"
            key="save"
            onClick={() => {
              // dataSource 就是当前数据，可以调用 api 将其保存
              console.log(111);
            }}
          >
            保存数据
          </Button>,
        ];
      }}
      editable={{
        type: 'multiple',
        editableKeys: editableKeys,
      }}
    />
  );
};

export default ColumnTable;
