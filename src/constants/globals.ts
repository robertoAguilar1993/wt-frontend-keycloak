export const API_URL = 'https://wtech-qa.infosel-digitalfactory.com/v1/';
export const CATALOGUES_ROUTE = 'wt-catalog/values?catalogKeys';
export const SEPOMEX_ROUTE = 'wt-catalog/sepomex';
export const VALIDATIONS_URL =
  'https://infonsel-dev.aml-meltsan.info/api/api-infosel/v1/';
export const RFC_ROUTE = 'aml/utils/verificaciones/rfc';
export const CURP_ROUTE = 'aml/utils/verificaciones/curp';
export const PLD_ROUTE = 'aml/utils/kyc/personas/searchs/personas/morales';
export const PEP_ROUTE = 'aml/utils/kyc/personas/searchs/personas/fisicas';
export const ONBOARDING_STEP_ROUTE = 'wt-client/onboarding';
export const PROFILING_STEP_ROUTE = 'wt-client/profiling';
export const PORTFOLIO_ROUTE = 'wt-client/management/clients/portfolio';

export const USER_DATA = {
  onlyQuery: undefined,
};

export const HttpStatusCode = {
  OK: 200,
  MultipleChoices: 300,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  Conflict: 409,
  InternalServerError: 500,
  UnprocessableEntity: 422,
};

export const ErrorMessage = {
  Default: 'Error while processing. Please try again.',
  [HttpStatusCode.NotFound]:
    '[404] This is not the web page you are looking for.',
  [HttpStatusCode.InternalServerError]:
    '[500] Sorry, something went wrong. Please try again, or refresh the page.',
  ParsingFailed: 'Error while parsing.',
  TokenExpired: 'Token has been expired.',
};

export const REGEXP_RFC = new RegExp(
  /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
);

export const REGEXP_AMIB = new RegExp(/^[a-z0-9]+$/i);

export const RFC_PATTERN =
  '^([A-ZÑ&]{3,4}) ?(?:- ?)?(d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]d|3[01])) ?(?:- ?)?([A-Zd]{2})([Ad])$';

export const REGEXP_CURP = new RegExp(
  /^[A-Z]{1}[AEIOUX]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/
);

export const REGEXP_CP = new RegExp(/^\d{5}$/);

export const REGEXP_TEXT = new RegExp(/([a-zA-Záéíóúü])+/);

export const REGEXP_URL = new RegExp(
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi
);

export const REGEXP_DATE = new RegExp(
  /^(19[0-9]{2}|2[0-9]{3})\/(0[1-9]|1[012])\/([123]0|[012][1-9]|31)$/
);

export const debounceTime = 300;

export const MarketType = {
  fixedIncome: 'RF',
  variableIncome: 'RV',
};

export const clientRoles = {
  CLIENT: 'CL',
  CO_OWNER: 'CO',
};

export const PERSON_TYPE = {
  moral: 'MO',
  fisica: 'FI',
  fideicomiso: 'FC',
};

export const ACTIVE_STATUS_ACCOUNTS = '1';
export const ACTIVE_STATUS = '1';

// errors
export const ERROR_INFO = 'Error obteniendo informaci\u00F3n';
export const DEFAULT_ERROR = 'Ha ocurrido un error inesperado';

export const CLIENTS_URL = {
  coOwnersBack: '',
};

export const NO_RESULT_FILTERS =
  'No se encontraron coincidencias con los filtros seleccionados';

export const QUERY_STALE_TIME_DEFAULT = 1000 * 60 * 60;
