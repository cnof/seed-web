import ImportForm from '@/pages/SystemTool/CodeGenerator/components/ImportForm';
import { handleRemoveGenTables } from '@/pages/SystemTool/CodeGenerator/redux';
import { queryGenTableList } from '@/services/codegenerator/CodeGeneratorController';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Divider } from 'antd';
import React, { useRef, useState } from 'react';

const TableList: React.FC<unknown> = () => {
  // 导入
  const [importModalVisible, handleImportModalVisible] =
    useState<boolean>(false);
  // 选择行
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
      valueType: 'text',
    },
    {
      title: '表描述',
      dataIndex: 'tableComment',
      valueType: 'text',
    },
    {
      title: '实体类名称',
      dataIndex: 'className',
      valueType: 'text',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'text',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <Link
            state={record}
            to={'/system-tool/gen-table/info/' + record.tableId}
          >
            编辑
          </Link>
          <Divider type="vertical" />
          <a
            onClick={() => {
              handleRemoveGenTables([record]).then(() =>
                actionRef.current?.reloadAndRest?.(),
              );
            }}
          >
            删除
          </a>
          <Divider type="vertical" />
          <a href="">同步</a>
          <Divider type="vertical" />
          <a href="">生成代码</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<CodeGeneratorAPI.GenTableInfo>
        rowKey={'tableId'}
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => handleImportModalVisible(true)}
          >
            导入
          </Button>,
        ]}
        columns={columns}
        request={async (params) => {
          let param: CodeGeneratorAPI.GenTablePageQueryVO = {
            pageSize: params.pageSize,
            currentPage: params.current,
          };
          const { data } = await queryGenTableList(param);
          return {
            data: data?.rows || [],
            total: data?.pagination.totalCount,
          };
        }}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />

      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemoveGenTables(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}

      <ImportForm
        onCancel={() => {
          handleImportModalVisible(false);
          actionRef.current?.reloadAndRest?.();
        }}
        onSubmit={() => {
          handleImportModalVisible(false);
          actionRef.current?.reloadAndRest?.();
        }}
        modalVisible={importModalVisible}
      />
    </PageContainer>
  );
};

export default TableList;
