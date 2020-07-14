/* eslint-disable */
/* istanbul ignore file */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
}

/** columns and relationships of "User" */
export interface User {
  __typename?: 'User';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  uuid: Scalars['uuid'];
}

/** aggregated selection of "User" */
export interface User_Aggregate {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
}

/** aggregate fields of "User" */
export interface User_Aggregate_Fields {
  __typename?: 'User_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
}


/** aggregate fields of "User" */
export interface User_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "User" */
export interface User_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
}

/** input type for inserting array relation for remote table "User" */
export interface User_Arr_Rel_Insert_Input {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
}

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export interface User_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint */
  UserUuidKey = 'User_uuid_key'
}

/** input type for inserting data into table "User" */
export interface User_Insert_Input {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface User_Max_Fields {
  __typename?: 'User_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "User" */
export interface User_Max_Order_By {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Min_Fields {
  __typename?: 'User_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "User" */
export interface User_Min_Order_By {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** response of any mutation on the table "User" */
export interface User_Mutation_Response {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
}

/** input type for inserting object relation for remote table "User" */
export interface User_Obj_Rel_Insert_Input {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
}

/** on conflict condition type for table "User" */
export interface User_On_Conflict {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
}

/** ordering options when selecting data from "User" */
export interface User_Order_By {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** primary key columns input for table: "User" */
export interface User_Pk_Columns_Input {
  email: Scalars['String'];
  uuid: Scalars['uuid'];
}

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "User" */
export interface User_Set_Input {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Uuid = 'uuid'
}

/** mutation root */
export interface Mutation_Root {
  __typename?: 'mutation_root';
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
}


/** mutation root */
export interface Mutation_RootDelete_UserArgs {
  where: User_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_User_By_PkArgs {
  email: Scalars['String'];
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface Mutation_RootInsert_UserArgs {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_User_OneArgs {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootUpdate_UserArgs {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_User_By_PkArgs {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export interface Query_Root {
  __typename?: 'query_root';
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
}


/** query root */
export interface Query_RootUserArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
}


/** query root */
export interface Query_RootUser_AggregateArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
}


/** query root */
export interface Query_RootUser_By_PkArgs {
  email: Scalars['String'];
  uuid: Scalars['uuid'];
}

/** subscription root */
export interface Subscription_Root {
  __typename?: 'subscription_root';
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
}


/** subscription root */
export interface Subscription_RootUserArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootUser_AggregateArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootUser_By_PkArgs {
  email: Scalars['String'];
  uuid: Scalars['uuid'];
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'uuid' | 'email' | 'first_name' | 'last_name' | 'created_at'>
  )> }
);


export const GetAllUsersDocument = gql`
    query GetAllUsers {
  User(order_by: {last_name: desc}) {
    uuid
    email
    first_name
    last_name
    created_at
  }
}
    `;
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;