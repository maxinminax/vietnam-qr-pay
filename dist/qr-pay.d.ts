import { Consumer, Provider, AdditionalData, Merchant, VietQRService, UnreservedFieldID, EVMCoFieldID } from './constants/qr-pay';
export declare class QRPay {
    isValid: boolean;
    version: string;
    initMethod: string;
    provider: Provider;
    merchant: Merchant;
    consumer: Consumer;
    category?: string;
    currency?: string;
    amount?: string;
    tipAndFeeType?: string;
    tipAndFeeAmount?: string;
    tipAndFeePercent?: string;
    nation?: string;
    city?: string;
    zipCode?: string;
    additionalData: AdditionalData;
    crc?: string;
    EVMCo?: Record<string, string>;
    unreserved?: Record<string, string>;
    constructor(content?: string);
    parse(content: string): void;
    build(): string;
    static initVietQR(options: {
        bankBin: string;
        bankNumber: string;
        amount?: string;
        purpose?: string;
        service?: VietQRService;
    }): QRPay;
    static initVNPayQR(options: {
        merchantId: string;
        merchantName: string;
        store: string;
        terminal: string;
        amount?: string;
        purpose?: string;
        billNumber?: string;
        mobileNumber?: string;
        loyaltyNumber?: string;
        reference?: string;
        customerLabel?: string;
    }): QRPay;
    setEVMCoField(id: EVMCoFieldID, value: string): void;
    setUnreservedField(id: UnreservedFieldID, value: string): void;
    private parseRootContent;
    private parseProviderInfo;
    private parseVietQRConsumer;
    private parseAdditionalData;
    private static verifyCRC;
    static genCRCCode(content: string): string;
    private static sliceContent;
    private invalid;
    private static genFieldData;
}
