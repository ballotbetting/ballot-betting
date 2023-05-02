/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dummy } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DummyUpdateFormInputValues = {
    name?: string;
};
export declare type DummyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DummyUpdateFormOverridesProps = {
    DummyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DummyUpdateFormProps = React.PropsWithChildren<{
    overrides?: DummyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dummy?: Dummy;
    onSubmit?: (fields: DummyUpdateFormInputValues) => DummyUpdateFormInputValues;
    onSuccess?: (fields: DummyUpdateFormInputValues) => void;
    onError?: (fields: DummyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DummyUpdateFormInputValues) => DummyUpdateFormInputValues;
    onValidate?: DummyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DummyUpdateForm(props: DummyUpdateFormProps): React.ReactElement;
