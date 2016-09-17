import { Injectable } from '@angular/core';
import utility from '../lib/utility';

interface StorageObject {
    data: any;
    expiration: number;
    obsolete: boolean;
};

/**
 * Saves values in localStorage as object:
 * key: {
 *   value: mix,
 *   expiration: milliseconds
 * }
 */
@Injectable()
export class LocalStorage {
    prefix;

    constructor() {
        this.prefix = 'EH_';
    }

    remove(key: string): void {
        window.localStorage.removeItem(this.prefix + key);
    }

    get(key: string): StorageObject {
        const strValue = window.localStorage.getItem(this.prefix + key);
        if (!strValue) {
            return undefined;
        }

        const {data, expiration} = JSON.parse(strValue);
        return {
            data,
            expiration,
            obsolete: !(expiration === 0 || expiration >= utility.time.now())
        };
    };

    refresh(key: string, expiration: number) {
        const storageObject = this.get(key);
        if (storageObject && !storageObject.obsolete) {
            this.save(key, storageObject.data, expiration);
        }
        return storageObject;
    };

    save(key: string, value: any, expiration = 0): void {
        if (expiration !== 0) {
            expiration += utility.time.now();
        }

        window.localStorage.setItem(this.prefix + key, JSON.stringify({
            obsolete: false,
            expiration: expiration,
            data: value
        }));
    };

    __clearAll() {
        window.localStorage.clear();
    };
}
