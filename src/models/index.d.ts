import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDummy = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dummy, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDummy = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dummy, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dummy = LazyLoading extends LazyLoadingDisabled ? EagerDummy : LazyDummy

export declare const Dummy: (new (init: ModelInit<Dummy>) => Dummy) & {
  copyOf(source: Dummy, mutator: (draft: MutableModel<Dummy>) => MutableModel<Dummy> | void): Dummy;
}