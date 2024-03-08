declare namespace CodeGeneratorAPI {
  interface GenTableAddDTO {
    tableNames?: string[];
  }

  interface GenTableQueryVO {
    // 主键
    tableName?: string;
    tableComment?: string;
    className?: string;
  }

  interface GenTablePageQueryVO extends CommonAPI.Page {
    data?: GenTableQueryVO;
  }

  interface GenTableInfo extends Record<string, any> {
    // 主键
    tableId?: number;
    //
    tableName?: string;
    tableComment?: string;
    className?: string;
    packageName?: string;
    moduleName?: string;
    businessName?: string;
    functionName?: string;
    functionAuthor?: string;
    genType?: string;
    genPath?: string;
    options?: string;
  }

  interface GenTablePageInfo {
    pagination: CommonAPI.Pagination;
    rows: GenTableInfo[];
  }

  interface ResultGenTableInfo extends CommonAPI.Result {
    data: GenTableInfo[];
  }

  interface Result_GenTablePageInfo extends CommonAPI.Result {
    data: GenTablePageInfo;
  }

  interface GenTableColumnQueryVO {
    // 主键
    tableId?: number;
  }

  interface GenTableColumnPageQueryVO extends CommonAPI.Page {
    data?: GenTableColumnQueryVO;
  }

  interface GenTableColumnInfo {
    // 主键
    columnId: number;
    tableId?: number;
    //
    columnName?: string;
    columnComment?: string;
    columnType?: string;
    javaType?: string;
    javaField?: string;
    isPk?: string;
    isIncrement?: string;
    isRequired?: string;
    isInsert?: string;
    isEdit?: string;
    isList?: string;
    isQuery?: string;
    queryType?: string;
    htmlType?: string;
    dictType?: string;
  }

  interface Result_GenTableColumnPageInfo extends CommonAPI.Result {
    data: GenTableColumnInfo[];
  }
}
