declare module 'rastrojs' {

    export interface TrackInfo {
        locale: string;
        status: string;
        observation: string;
        trackedAt: Date;
    }

    export interface Tracking {
        code: string;
        type?: string;
        tracks?: TrackInfo[];
        isDelivered?: boolean;
        postedAt?: Date;
        updatedAt?: Date;
        isInvalid?: boolean;
        error?: string;
    }

    export function track(codes: string[]): Promise<Tracking[]>;
    export function track(...codes: string[]): Promise<Tracking[]>;
    export function isValidOrderCode(code: string): boolean;

    export class RastroJS {
        public track: typeof track;
        private requestObject;
        private parseResponse;
        static isValidOrderCode: typeof isValidOrderCode;
    }

}
