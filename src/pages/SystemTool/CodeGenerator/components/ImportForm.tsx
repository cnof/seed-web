import React, { useRef, useState } from 'react';

import { handleImport } from '@/pages/SystemTool/CodeGenerator/redux';
import { queryUnusedTableList } from '@/services/codegenerator/CodeGeneratorController';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';

export interface ImportFormProps {
  onCancel: () => void;
  onSubmit: () => void;
  modalVisible: boolean;
}

const ImportForm: React.FC<ImportFormProps> = (props) => {
  const [selectedRowsState, setSelectedRows] = useState<
    CodeGeneratorAPI.GenTableInfo[]
  >([]);
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<CodeGeneratorAPI.GenTableInfo>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '表名称',
      dataIndex: 'tableName',
    },
    {
      title: '表描述',
      dataIndex: 'tableComment',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'text',
      hideInSearch: true,
    },
  ];

  return (
    <Modal
      title={'导入'}
      open={props.modalVisible}
      destroyOnClose
      onCancel={() => props.onCancel()}
      width={920}
      onOk={async () => {
        let tableNames = selectedRowsState.map((val) => {
          return val.tableName;
        });

        const success = await handleImport(tableNames);
        if (success) {
          setSelectedRows([]);
          actionRef.current?.reload?.();
        }
      }}
    >
      <ProTable
        rowKey={'tableName'}
        columns={columns}
        actionRef={actionRef}
        request={async (params, sorter, filter) => {
          const { data } = await queryUnusedTableList(params, sorter, filter);
          return {
            data: data,
          };
        }}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
    </Modal>
  );
};

export default ImportForm;
