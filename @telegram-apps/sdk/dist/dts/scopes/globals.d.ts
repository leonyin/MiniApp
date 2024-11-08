import { postEvent as _postEvent, request as _request, PostEventFn, Version, CancelablePromise, ExecuteWithOptions, CustomMethodParams, CustomMethodName } from '@telegram-apps/bridge';
export interface ConfigureOptions {
    /**
     * A maximum supported Mini Apps version.
     * @default Being extracted using the `retrieveLaunchParams` function.
     * @see retrieveLaunchParams
     */
    version?: Version;
    /**
     * Custom postEvent function.
     *
     * Passing the "strict" value creates a function, which always checks if specified call supported
     * by currently supported Mini Apps version. If the method is unsupported, an error will be
     * thrown.
     *
     * Passing the "non-strict" value creates a postEvent function not throwing any errors, but
     * warning about a missing method support.
     *
     * @default 'strict'
     * @see createPostEvent
     */
    postEvent?: PostEventFn;
}
/**
 * Signal with a request identifier generator. Usually, you don't need to set this value manually.
 */
export declare const $createRequestId: import('@telegram-apps/signals').Signal<() => string>;
/**
 * Signal with a currently used postEvent function across the package.
 */
export declare const $postEvent: import('@telegram-apps/signals').Signal<typeof _postEvent>;
/**
 * Signal with a currently supported maximum Mini Apps version. This value is usually set via
 */
export declare const $version: import('@telegram-apps/signals').Signal<string>;
/**
 * Configures package global dependencies.
 * @param options - configuration additional options.
 */
export declare function configure(options?: ConfigureOptions): void;
/**
 * Creates a new request id.
 */
export declare function createRequestId(): string;
/**
 * Invokes known custom method. Returns method execution result.
 * @param method - method name.
 * @param params - method parameters.
 * @param options - additional options.
 * @throws {TypedError} ERR_CUSTOM_METHOD_ERR_RESPONSE
 */
export declare function invokeCustomMethod<M extends CustomMethodName>(method: M, params: CustomMethodParams<M>, options?: ExecuteWithOptions): CancelablePromise<unknown>;
/**
 * Invokes unknown custom method. Returns method execution result.
 * @param method - method name.
 * @param params - method parameters.
 * @param options - additional options.
 * @throws {TypedError} ERR_CUSTOM_METHOD_ERR_RESPONSE
 */
export declare function invokeCustomMethod(method: string, params: object, options?: ExecuteWithOptions): CancelablePromise<unknown>;
/**
 * `request` function from the bridge with applied global `postEvent` option.
 */
export declare const request: typeof _request;
/**
 * Shortcut for $postEvent call.
 */
export declare const postEvent: typeof _postEvent;
