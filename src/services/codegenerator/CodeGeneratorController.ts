import { request } from '@umijs/max';

export async function deleteGenTables(
  body?: (number | undefined)[],
  options?: { [p: string]: any },
) {
  return request<CommonAPI.Result>('/api-generator/gen-table', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function importTableSave(
  body?: (string | undefined)[] | undefined,
  options?: { [p: string]: any },
) {
  return request<CommonAPI.Result>('/api-generator/generator/import-table', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function queryUnusedTableList(
  params: {
    /** current */
    currentPage?: number;
    /** pageSize */
    pageSize?: number;
  },
  sorter?: any,
  options?: { [key: string]: any },
) {
  return request<CodeGeneratorAPI.ResultGenTableInfo>(
    '/api-generator/generator/unused/tables',
    {
      method: 'GET',
      params: {},
      ...(options || {}),
    },
  );
}

export async function queryGenTableList(
  body?: CodeGeneratorAPI.GenTablePageQueryVO,
  options?: { [key: string]: any },
) {
  return request<CodeGeneratorAPI.Result_GenTablePageInfo>(
    '/api-generator/gen-table/list',
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  );
}

export async function queryGenTableColumnList(tableId?: number) {
  return request<CodeGeneratorAPI.Result_GenTableColumnPageInfo>(
    '/api-generator/gen-table/column/table-id/' + tableId,
    {
      method: 'GET',
    },
  );
}
