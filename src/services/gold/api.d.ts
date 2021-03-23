type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare type ConfigInterface = import('swr').ConfigInterface;

interface FetchTypes<key> {
  error: 'error';
  success: key;
  loading: 'loading';
}

interface FetchAction<BO, key> {
  type: key;
  payload: BO;
}

declare namespace defs {
  export namespace gold {}
}

declare namespace API {
  export namespace gold {}
}
