import { CodeGenerator, Interface, BaseClass, Property } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const method = inter.method.toUpperCase();
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode ? `bodyParams: ${bodyParamsCode}` : `params: Params`;

    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `bodyParams: ${bodyParamsCode}` : '';
    }

    return `
      export ${paramsCode}

      export type HooksParams = (() => Params) | Params;

      export type Response = ${inter.responseType}

      export const init: Response;

      export function request(${requestParams}): Promise<Response>;

      export function createFetchAction<Key>(types: FetchTypes<Key>, stateKey?: string): (${
        requestParams ? `${requestParams}, ` : ''
      }meta?)
        => { type: Key; payload?: Response; params?: Params; url: string; types: string[]; meta } & Promise<Response>
        
        export function mutate(params?: HooksParams, newValue?: any, shouldRevalidate = true);
  
      export function trigger(params?: HooksParams, shouldRevalidate = true);

      ${
      method === 'GET'
        ? `
        export function useRequest(params?: HooksParams, options?: ConfigInterface): { isLoading: boolean; data: Response, error: Error };`
        : `
        export function useRequest(params?: HooksParams, options?: ConfigInterface): { isLoading: boolean; data: Response, error: Error };
        `
      }

      export const method: string;
        `;
  }

  getBaseClassInDeclaration(base: BaseClass) {
    const originProps = base.properties;

    base.properties = base.properties.map(prop => {
      return new Property({
        ...prop,
        required: false,
      });
    });

    const result = super.getBaseClassInDeclaration(base);
    base.properties = originProps;

    return result;
  }

  getCommonDeclaration() {
    return `
    declare type ConfigInterface = import("swr").ConfigInterface;

    interface FetchTypes<key> {
			error: 'error',
			success: key,
			loading: 'loading',
		};

		interface FetchAction<BO, key> {
			type: key,
			payload: BO,
    }
    `;
  }

  getInterfaceContent(inter: Interface) {
    const relativePath = this.usingMultipleOrigins ? '../../../' : '../../';
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();
    const requestParams = bodyParamsCode ? `bodyParams = {}` : `params = {}`;

    return `
      /**
      * @description ${inter.description}
      */
    
    import * as SWR from 'swr';
    import { getUrl } from 'src/utils/helper';
    import Request from 'src/utils/requests';
    import * as defs from '../../baseClass';
    import * as Hooks from '${relativePath}hooks';
    import { PontCore } from '${relativePath}pontCore';

    export ${inter.getParamsCode('Params', this.surrounding)}

    export const method = "${method}";

    export function mutate(params = {}, newValue = undefined, shouldRevalidate = true) {
      return SWR.mutate(Hooks.getUrlKey("${inter.path}", params, "${method}"), newValue, shouldRevalidate);
    }

    export function trigger(params = {}, shouldRevalidate = true) {
      return SWR.trigger(Hooks.getUrlKey("${inter.path}", params, "${method}"), shouldRevalidate);
    }

    ${
      method === 'GET'
        ? `
      export function useRequest(params = {}, swrOptions = { revalidateOnFocus: true }) {
        return Hooks.useRequest("${inter.path}", params, swrOptions);
      };`
        : `
      export function useDeprecatedRequest(params = {}, swrOptions = { revalidateOnFocus: true }) {
        return Hooks.useRequest("${inter.path}", params, swrOptions, { method: "${method}" });
      }
      `
      }

    export const init = ${inter.response.getInitialValue(false)};

    export const url = '${inter.path}';

    export async function request(${requestParams}) {
      return Request({
        url: getUrl('${inter.path}', ${bodyParamsCode ? 'bodyParams' : 'params'}, '${method}'),
        ${bodyParamsCode ? 'params: bodyParams' : 'params'},
        method: '${bodyParamsCode ? `${inter.method}:JSON` : inter.method}',
      });
    }

    export function createFetchAction(types, stateKey) {
      return (${bodyParamsCode ? `bodyParams = {}` : 'params = {}'}, meta) => {
        return {
          types,
          meta,
          stateKey,
          method: '${bodyParamsCode ? `${method}:JSON` : method}',
          url: getUrl('${inter.path}', ${bodyParamsCode ? 'bodyParams' : 'params'}, '${method}'),
          ${bodyParamsCode ? 'params: bodyParams,' : 'params,'}
          init,
        };
      };
    }
   `;
  }
}