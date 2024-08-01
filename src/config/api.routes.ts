export const WT_API_URL = process.env.REACT_APP_API_WT_URL;
export const WT_API_URL_V2 = process.env.REACT_APP_API_WT_URL_V2;
export const INFOSEL_API_URL = process.env.REACT_APP_API_INFOSEL_URL;
export const OAUTH_API_URL = process.env.REACT_APP_TOKEN_URL;
export const AUTH_URL = process.env.REACT_APP_AUTH;
// Data Studio Report
export const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD;

export const CLIENTS_BASE_PATH = '/wt-client';
export const CLIENTS_PATH = '/wt-client/management/clients';
export const USERS_PATH = '/wt-user/management/users';
export const ROLES_PATH = '/wt-user/management/roles';
export const USER_ROLE_PATH = '/wt-user/management/oauth';
export const PORTFOLIO_PATH = '/wt-client/management/clients/portfolio';
export const ONBOARDING_STEP_PATH = '/wt-client/onboarding';
export const TAX_BURDEN = '/wt-client/onboarding/tax/burden';

export const PROFILING_STEP_ROUTE = `${WT_API_URL}/wt-client/profiling`;
export const PROFILING_INVESTING_EXPERIENCE = '/investing-experience';
export const PROFILING_ECONOMIC_SITUATION = '/economic-situation';
export const PROFILING_INVESTING_GOALS = '/investing-goals';
export const ONBOARDING_STEP_ROUTE = `${WT_API_URL}/wt-client/onboarding`;

export const CATALOGS_PATH = '/wt-catalog/values';
export const SEPOMEX_PATH = '/wt-catalog/sepomex';

export const DOCUMENT_PATH = '/wt-report';
export const PDF_DOCUMENT_PATH = '/wt-returns/inter-month/report';

export const LOG_PROCESS_PATH = '/wt-load/logs-process';
export const FILE_DETAILS_PATH = `${WT_API_URL_V2}/wt-load/detail`;
export const LOAD_PATH = `${WT_API_URL_V2}/wt-load`;
export const LOG_PROCESS_PATH_V2 = `${WT_API_URL_V2}/wt-load/paged`;
export const LOG_PROCESS_GRUPED_PATH_V2 = `${WT_API_URL_V2}/wt-load/grouped`;
export const MOVEMENTS_PATH_DEPRECATED = '/wt-load/movements';
export const MOVEMENTS_PATH = '/wt-operations/movements';
export const MOVEMENTS_UPLOAD_PATH = '/wt-load/file';
export const FILES_PATH = '/wt-load/files';
export const FILES_PATH_V2 = `${WT_API_URL_V2}/wt-load/upload`;
export const YIELDS_PATH = '/wt-returns/returns-graphics';
export const UTILS_PATH_DEPRECATED = '/wt-load/utils';

export const CLASSIFICATION_PATH = '/wt-portfolio-real/classification';
export const PROCESSES_PATH = '/wt-portfolio-real/process';
export const PORTFOLIO_REAL_PATH = '/wt-portfolio-real/portfolio';
export const ALERT_PATH = '/wt-portfolio-real/alert';
export const PORTFOLIO_POSITIONS_PATH_DEPRECATED =
  '/wt-load/positions/global/calc';
export const PORTFOLIO_POSITIONS_PATH = '/wt-portfolio-real/portfolio/header';
export const PORTFOLIO_TABLE_PATH_DEPRECATED = '/wt-load/positions';
export const PORTFOLIO_TABLE_PATH = '/wt-portfolio-real/position';

export const RFC_PATH = '/aml/utils/verificaciones/rfc';
export const CURP_PATH = '/aml/utils/verificaciones/curp';
export const PLD_PATH = '/aml/utils/kyc/personas/searchs/personas/fisicas';

export const LAST_DETAIL = '/DeudaLast';
export const GET_TOKEN = '/ObtenToken';

export const SOCKET_URL = `${WT_API_URL}/wt-websocket`;

export const MODEL_PORTFOLIO_PATH = `${WT_API_URL}/wt-portfolio/portfolio`;
export const STRATEGY_PATH = `${WT_API_URL}/wt-portfolio/strategy`;
export const STRATEGY_CLIENT_PATH = `${WT_API_URL}/wt-portfolio/client/accounts`;
export const ISSUER_PATH = `${WT_API_URL}/wt-portfolio-real/classification/autocomplete/issuer`;
export const BALANCING_PATH = `${WT_API_URL}/wt-rebalance/rebalance`;
export const DASHBOARD_BALANCING_PATH = `${WT_API_URL}/wt-report/download/rebalance/excel`;
export const BALANCING_COLLAPSE_PATH = `${WT_API_URL}/wt-rebalance/operation/collapse`;
export const BALANCING_REAL_TIME_PATH = `${WT_API_URL}/wt-rebalance/operation/realTime`;
export const BALANCING_DOWNLOAD_PATH = `${WT_API_URL}${DOCUMENT_PATH}/download/global/operations`;
export const ADVISOR_PATH = `${WT_API_URL}/wt-user/management/users/filter`;
export const ACCOUNTS_PATH = `${WT_API_URL}/wt-client/management/investment/only-accounts`;
export const COMPLIANCE_PATH = `${WT_API_URL}/wt-compliance/compliance`;
export const FEE_PATH = `${WT_API_URL}/wt-returns/fee`;

export const BLACKLIST_PATH = `${WT_API_URL}${CLIENTS_PATH}/blackLists`;
export const CLIENT_REPORTS_PATH = `${WT_API_URL}${DOCUMENT_PATH}/download/reports`;
export const BLACKLIST_REPORTS_PATH = `${WT_API_URL}${DOCUMENT_PATH}/restrincted`;

export const VALUE_CONSTRAINT = `${WT_API_URL}/wt-rebalance/value-constraint`;
export const LIQUIDITY_CONSTRAINT = `${WT_API_URL}/wt-rebalance/liquidity-constraint`;
export const INSTRUMENT_CONSTRAINT = `${WT_API_URL}/wt-rebalance/instrument-constraint`;

export const DASHBOARD_PATH = '/wt-portfolio-real/portfolio/dashboard';

export const EMISORA_PATH = `/wt-portfolio-real/classification`;
export const HOMOLOGATION_PATH = `wt-catalog/values/new-homo-cla`;

export const INVESTMENT_PATH = `${WT_API_URL}/wt-returns/investment`;
