import { Computed } from '@telegram-apps/signals';
import { MethodName } from '@telegram-apps/bridge';
/**
 * @returns A signal returning true if the specified Mini Apps method is supported.
 * @param method - Mini Apps method name
 */
export declare function createIsSupported(method: MethodName): Computed<boolean>;
