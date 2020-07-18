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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** columns and relationships of "Chat" */
export interface Chat {
  __typename?: 'Chat';
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregated array relationship */
  Messages_aggregate: Message_Aggregate;
  type: Scalars['String'];
  uuid: Scalars['uuid'];
}


/** columns and relationships of "Chat" */
export interface ChatMessagesArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** columns and relationships of "Chat" */
export interface ChatMessages_AggregateArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}

/** aggregated selection of "Chat" */
export interface Chat_Aggregate {
  __typename?: 'Chat_aggregate';
  aggregate?: Maybe<Chat_Aggregate_Fields>;
  nodes: Array<Chat>;
}

/** aggregate fields of "Chat" */
export interface Chat_Aggregate_Fields {
  __typename?: 'Chat_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chat_Max_Fields>;
  min?: Maybe<Chat_Min_Fields>;
}


/** aggregate fields of "Chat" */
export interface Chat_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Chat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "Chat" */
export interface Chat_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Max_Order_By>;
  min?: Maybe<Chat_Min_Order_By>;
}

/** input type for inserting array relation for remote table "Chat" */
export interface Chat_Arr_Rel_Insert_Input {
  data: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
}

/** Boolean expression to filter rows from the table "Chat". All fields are combined with a logical 'AND'. */
export interface Chat_Bool_Exp {
  Messages?: Maybe<Message_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  _not?: Maybe<Chat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "Chat" */
export enum Chat_Constraint {
  /** unique or primary key constraint */
  ChatPkey = 'Chat_pkey'
}

/** input type for inserting data into table "Chat" */
export interface Chat_Insert_Input {
  Messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface Chat_Max_Fields {
  __typename?: 'Chat_max_fields';
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "Chat" */
export interface Chat_Max_Order_By {
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface Chat_Min_Fields {
  __typename?: 'Chat_min_fields';
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "Chat" */
export interface Chat_Min_Order_By {
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** response of any mutation on the table "Chat" */
export interface Chat_Mutation_Response {
  __typename?: 'Chat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat>;
}

/** input type for inserting object relation for remote table "Chat" */
export interface Chat_Obj_Rel_Insert_Input {
  data: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
}

/** on conflict condition type for table "Chat" */
export interface Chat_On_Conflict {
  constraint: Chat_Constraint;
  update_columns: Array<Chat_Update_Column>;
  where?: Maybe<Chat_Bool_Exp>;
}

/** ordering options when selecting data from "Chat" */
export interface Chat_Order_By {
  Messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** primary key columns input for table: "Chat" */
export interface Chat_Pk_Columns_Input {
  uuid: Scalars['uuid'];
}

/** select columns of table "Chat" */
export enum Chat_Select_Column {
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "Chat" */
export interface Chat_Set_Input {
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "Chat" */
export enum Chat_Update_Column {
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "Message" */
export interface Message {
  __typename?: 'Message';
  /** An object relationship */
  Chat?: Maybe<Chat>;
  /** An object relationship */
  User: User;
  chat_uuid?: Maybe<Scalars['uuid']>;
  is_deleted: Scalars['Boolean'];
  text: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  user_uuid: Scalars['uuid'];
  username: Scalars['String'];
  uuid: Scalars['uuid'];
}

/** aggregated selection of "Message" */
export interface Message_Aggregate {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
}

/** aggregate fields of "Message" */
export interface Message_Aggregate_Fields {
  __typename?: 'Message_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
}


/** aggregate fields of "Message" */
export interface Message_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "Message" */
export interface Message_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Message_Max_Order_By>;
  min?: Maybe<Message_Min_Order_By>;
}

/** input type for inserting array relation for remote table "Message" */
export interface Message_Arr_Rel_Insert_Input {
  data: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
}

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export interface Message_Bool_Exp {
  Chat?: Maybe<Chat_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  chat_uuid?: Maybe<Uuid_Comparison_Exp>;
  is_deleted?: Maybe<Boolean_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  ChatMessagePkey = 'ChatMessage_pkey'
}

/** input type for inserting data into table "Message" */
export interface Message_Insert_Input {
  Chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  chat_uuid?: Maybe<Scalars['uuid']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface Message_Max_Fields {
  __typename?: 'Message_max_fields';
  chat_uuid?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "Message" */
export interface Message_Max_Order_By {
  chat_uuid?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface Message_Min_Fields {
  __typename?: 'Message_min_fields';
  chat_uuid?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "Message" */
export interface Message_Min_Order_By {
  chat_uuid?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** response of any mutation on the table "Message" */
export interface Message_Mutation_Response {
  __typename?: 'Message_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Message>;
}

/** input type for inserting object relation for remote table "Message" */
export interface Message_Obj_Rel_Insert_Input {
  data: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
}

/** on conflict condition type for table "Message" */
export interface Message_On_Conflict {
  constraint: Message_Constraint;
  update_columns: Array<Message_Update_Column>;
  where?: Maybe<Message_Bool_Exp>;
}

/** ordering options when selecting data from "Message" */
export interface Message_Order_By {
  Chat?: Maybe<Chat_Order_By>;
  User?: Maybe<User_Order_By>;
  chat_uuid?: Maybe<Order_By>;
  is_deleted?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** primary key columns input for table: "Message" */
export interface Message_Pk_Columns_Input {
  uuid: Scalars['uuid'];
}

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  ChatUuid = 'chat_uuid',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "Message" */
export interface Message_Set_Input {
  chat_uuid?: Maybe<Scalars['uuid']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  ChatUuid = 'chat_uuid',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
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
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregated array relationship */
  Messages_aggregate: Message_Aggregate;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen: Scalars['timestamptz'];
  last_typed: Scalars['timestamptz'];
  username: Scalars['String'];
  uuid: Scalars['uuid'];
}


/** columns and relationships of "User" */
export interface UserMessagesArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** columns and relationships of "User" */
export interface UserMessages_AggregateArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
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
  Messages?: Maybe<Message_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'User_username_key',
  /** unique or primary key constraint */
  UserUuidKey = 'User_uuid_key'
}

/** input type for inserting data into table "User" */
export interface User_Insert_Input {
  Messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface User_Max_Fields {
  __typename?: 'User_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "User" */
export interface User_Max_Order_By {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Min_Fields {
  __typename?: 'User_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "User" */
export interface User_Min_Order_By {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
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
  Messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** primary key columns input for table: "User" */
export interface User_Pk_Columns_Input {
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
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "User" */
export interface User_Set_Input {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
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
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** mutation root */
export interface Mutation_Root {
  __typename?: 'mutation_root';
  /** delete data from the table: "Chat" */
  delete_Chat?: Maybe<Chat_Mutation_Response>;
  /** delete single row from the table: "Chat" */
  delete_Chat_by_pk?: Maybe<Chat>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "user_online" */
  delete_user_online?: Maybe<User_Online_Mutation_Response>;
  /** delete data from the table: "user_typing" */
  delete_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert data into the table: "Chat" */
  insert_Chat?: Maybe<Chat_Mutation_Response>;
  /** insert a single row into the table: "Chat" */
  insert_Chat_one?: Maybe<Chat>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "user_online" */
  insert_user_online?: Maybe<User_Online_Mutation_Response>;
  /** insert a single row into the table: "user_online" */
  insert_user_online_one?: Maybe<User_Online>;
  /** insert data into the table: "user_typing" */
  insert_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert a single row into the table: "user_typing" */
  insert_user_typing_one?: Maybe<User_Typing>;
  /** update data of the table: "Chat" */
  update_Chat?: Maybe<Chat_Mutation_Response>;
  /** update single row of the table: "Chat" */
  update_Chat_by_pk?: Maybe<Chat>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update data of the table: "user_online" */
  update_user_online?: Maybe<User_Online_Mutation_Response>;
  /** update data of the table: "user_typing" */
  update_user_typing?: Maybe<User_Typing_Mutation_Response>;
}


/** mutation root */
export interface Mutation_RootDelete_ChatArgs {
  where: Chat_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Chat_By_PkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface Mutation_RootDelete_MessageArgs {
  where: Message_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Message_By_PkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface Mutation_RootDelete_UserArgs {
  where: User_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_User_By_PkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface Mutation_RootDelete_User_OnlineArgs {
  where: User_Online_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_User_TypingArgs {
  where: User_Typing_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootInsert_ChatArgs {
  objects: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Chat_OneArgs {
  object: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_MessageArgs {
  objects: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Message_OneArgs {
  object: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
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
export interface Mutation_RootInsert_User_OnlineArgs {
  objects: Array<User_Online_Insert_Input>;
}


/** mutation root */
export interface Mutation_RootInsert_User_Online_OneArgs {
  object: User_Online_Insert_Input;
}


/** mutation root */
export interface Mutation_RootInsert_User_TypingArgs {
  objects: Array<User_Typing_Insert_Input>;
}


/** mutation root */
export interface Mutation_RootInsert_User_Typing_OneArgs {
  object: User_Typing_Insert_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_ChatArgs {
  _set?: Maybe<Chat_Set_Input>;
  where: Chat_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Chat_By_PkArgs {
  _set?: Maybe<Chat_Set_Input>;
  pk_columns: Chat_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_MessageArgs {
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Message_By_PkArgs {
  _set?: Maybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
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


/** mutation root */
export interface Mutation_RootUpdate_User_OnlineArgs {
  _set?: Maybe<User_Online_Set_Input>;
  where: User_Online_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_User_TypingArgs {
  _set?: Maybe<User_Typing_Set_Input>;
  where: User_Typing_Bool_Exp;
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
  /** fetch data from the table: "Chat" */
  Chat: Array<Chat>;
  /** fetch aggregated fields from the table: "Chat" */
  Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
}


/** query root */
export interface Query_RootChatArgs {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
}


/** query root */
export interface Query_RootChat_AggregateArgs {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
}


/** query root */
export interface Query_RootChat_By_PkArgs {
  uuid: Scalars['uuid'];
}


/** query root */
export interface Query_RootMessageArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** query root */
export interface Query_RootMessage_AggregateArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** query root */
export interface Query_RootMessage_By_PkArgs {
  uuid: Scalars['uuid'];
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
  uuid: Scalars['uuid'];
}


/** query root */
export interface Query_RootUser_OnlineArgs {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
}


/** query root */
export interface Query_RootUser_Online_AggregateArgs {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
}


/** query root */
export interface Query_RootUser_TypingArgs {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
}


/** query root */
export interface Query_RootUser_Typing_AggregateArgs {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
}

/** subscription root */
export interface Subscription_Root {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Chat" */
  Chat: Array<Chat>;
  /** fetch aggregated fields from the table: "Chat" */
  Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
}


/** subscription root */
export interface Subscription_RootChatArgs {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootChat_AggregateArgs {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootChat_By_PkArgs {
  uuid: Scalars['uuid'];
}


/** subscription root */
export interface Subscription_RootMessageArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootMessage_AggregateArgs {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootMessage_By_PkArgs {
  uuid: Scalars['uuid'];
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
  uuid: Scalars['uuid'];
}


/** subscription root */
export interface Subscription_RootUser_OnlineArgs {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootUser_Online_AggregateArgs {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootUser_TypingArgs {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
}


/** subscription root */
export interface Subscription_RootUser_Typing_AggregateArgs {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
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

/** columns and relationships of "user_online" */
export interface User_Online {
  __typename?: 'user_online';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregated selection of "user_online" */
export interface User_Online_Aggregate {
  __typename?: 'user_online_aggregate';
  aggregate?: Maybe<User_Online_Aggregate_Fields>;
  nodes: Array<User_Online>;
}

/** aggregate fields of "user_online" */
export interface User_Online_Aggregate_Fields {
  __typename?: 'user_online_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Online_Max_Fields>;
  min?: Maybe<User_Online_Min_Fields>;
}


/** aggregate fields of "user_online" */
export interface User_Online_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<User_Online_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "user_online" */
export interface User_Online_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Online_Max_Order_By>;
  min?: Maybe<User_Online_Min_Order_By>;
}

/** input type for inserting array relation for remote table "user_online" */
export interface User_Online_Arr_Rel_Insert_Input {
  data: Array<User_Online_Insert_Input>;
}

/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export interface User_Online_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Online_Bool_Exp>>>;
  _not?: Maybe<User_Online_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Online_Bool_Exp>>>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** input type for inserting data into table "user_online" */
export interface User_Online_Insert_Input {
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface User_Online_Max_Fields {
  __typename?: 'user_online_max_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "user_online" */
export interface User_Online_Max_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Online_Min_Fields {
  __typename?: 'user_online_min_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "user_online" */
export interface User_Online_Min_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** response of any mutation on the table "user_online" */
export interface User_Online_Mutation_Response {
  __typename?: 'user_online_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Online>;
}

/** input type for inserting object relation for remote table "user_online" */
export interface User_Online_Obj_Rel_Insert_Input {
  data: User_Online_Insert_Input;
}

/** ordering options when selecting data from "user_online" */
export interface User_Online_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** select columns of table "user_online" */
export enum User_Online_Select_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user_online" */
export interface User_Online_Set_Input {
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** columns and relationships of "user_typing" */
export interface User_Typing {
  __typename?: 'user_typing';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregated selection of "user_typing" */
export interface User_Typing_Aggregate {
  __typename?: 'user_typing_aggregate';
  aggregate?: Maybe<User_Typing_Aggregate_Fields>;
  nodes: Array<User_Typing>;
}

/** aggregate fields of "user_typing" */
export interface User_Typing_Aggregate_Fields {
  __typename?: 'user_typing_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Typing_Max_Fields>;
  min?: Maybe<User_Typing_Min_Fields>;
}


/** aggregate fields of "user_typing" */
export interface User_Typing_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<User_Typing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "user_typing" */
export interface User_Typing_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Typing_Max_Order_By>;
  min?: Maybe<User_Typing_Min_Order_By>;
}

/** input type for inserting array relation for remote table "user_typing" */
export interface User_Typing_Arr_Rel_Insert_Input {
  data: Array<User_Typing_Insert_Input>;
}

/** Boolean expression to filter rows from the table "user_typing". All fields are combined with a logical 'AND'. */
export interface User_Typing_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Typing_Bool_Exp>>>;
  _not?: Maybe<User_Typing_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Typing_Bool_Exp>>>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
}

/** input type for inserting data into table "user_typing" */
export interface User_Typing_Insert_Input {
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface User_Typing_Max_Fields {
  __typename?: 'user_typing_max_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "user_typing" */
export interface User_Typing_Max_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Typing_Min_Fields {
  __typename?: 'user_typing_min_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "user_typing" */
export interface User_Typing_Min_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** response of any mutation on the table "user_typing" */
export interface User_Typing_Mutation_Response {
  __typename?: 'user_typing_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Typing>;
}

/** input type for inserting object relation for remote table "user_typing" */
export interface User_Typing_Obj_Rel_Insert_Input {
  data: User_Typing_Insert_Input;
}

/** ordering options when selecting data from "user_typing" */
export interface User_Typing_Order_By {
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
}

/** select columns of table "user_typing" */
export enum User_Typing_Select_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user_typing" */
export interface User_Typing_Set_Input {
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
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

export type CreateMessageMutationVariables = Exact<{
  message: Message_Insert_Input;
}>;


export type CreateMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Message?: Maybe<(
    { __typename?: 'Message_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Message' }
      & Pick<Message, 'uuid' | 'timestamp' | 'text' | 'username'>
    )> }
  )> }
);

export type GetAllMessagesQueryVariables = Exact<{
  last_received_uuid?: Maybe<Scalars['uuid']>;
  last_received_timestamp?: Maybe<Scalars['timestamptz']>;
}>;


export type GetAllMessagesQuery = (
  { __typename?: 'query_root' }
  & { Message: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'uuid' | 'text' | 'username' | 'timestamp'>
  )> }
);

export type OnMessageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnMessageAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { Message: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'uuid' | 'username' | 'text' | 'timestamp'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & { returning: Array<(
      { __typename?: 'User' }
      & Pick<User, 'uuid' | 'username'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  userUuid: Scalars['uuid'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<User_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateUserTypingMutationVariables = Exact<{
  userUuid?: Maybe<Scalars['uuid']>;
}>;


export type UpdateUserTypingMutation = (
  { __typename?: 'mutation_root' }
  & { update_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<User_Mutation_Response, 'affected_rows'>
  )> }
);

export type LastUserTypingSubscriptionVariables = Exact<{
  selfUuid?: Maybe<Scalars['uuid']>;
}>;


export type LastUserTypingSubscription = (
  { __typename?: 'subscription_root' }
  & { user_typing: Array<(
    { __typename?: 'user_typing' }
    & Pick<User_Typing, 'last_typed' | 'username'>
  )> }
);

export type UsersOnlineSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UsersOnlineSubscription = (
  { __typename?: 'subscription_root' }
  & { user_online: Array<(
    { __typename?: 'user_online' }
    & Pick<User_Online, 'uuid' | 'username'>
  )> }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'uuid' | 'created_at' | 'username' | 'last_seen' | 'last_typed' | 'email' | 'first_name' | 'last_name'>
  )> }
);

export type GetUserByUuidQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type GetUserByUuidQuery = (
  { __typename?: 'query_root' }
  & { User_by_pk?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'uuid' | 'username' | 'email' | 'last_seen' | 'last_typed' | 'first_name' | 'last_name' | 'created_at'>
  )> }
);


export const CreateMessageDocument = gql`
    mutation CreateMessage($message: Message_insert_input!) {
  insert_Message(objects: [$message]) {
    returning {
      uuid
      timestamp
      text
      username
    }
  }
}
    `;
export type CreateMessageMutationResult = ApolloReactCommon.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetAllMessagesDocument = gql`
    query GetAllMessages($last_received_uuid: uuid, $last_received_timestamp: timestamptz) {
  Message(order_by: {timestamp: asc}, where: {_and: {uuid: {_neq: $last_received_uuid}, timestamp: {_gte: $last_received_timestamp}}}) {
    uuid
    text
    username
    timestamp
  }
}
    `;
export type GetAllMessagesQueryResult = ApolloReactCommon.QueryResult<GetAllMessagesQuery, GetAllMessagesQueryVariables>;
export const OnMessageAddedDocument = gql`
    subscription OnMessageAdded {
  Message(order_by: {uuid: desc}, limit: 1) {
    uuid
    username
    text
    timestamp
  }
}
    `;
export type OnMessageAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnMessageAddedSubscription>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!) {
  insert_User(objects: [{username: $username}]) {
    returning {
      uuid
      username
    }
  }
}
    `;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userUuid: uuid!) {
  update_User(_set: {last_seen: "now()"}, where: {uuid: {_eq: $userUuid}}) {
    affected_rows
  }
}
    `;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserTypingDocument = gql`
    mutation UpdateUserTyping($userUuid: uuid) {
  update_User(_set: {last_typed: "now()"}, where: {uuid: {_eq: $userUuid}}) {
    affected_rows
  }
}
    `;
export type UpdateUserTypingMutationResult = ApolloReactCommon.MutationResult<UpdateUserTypingMutation>;
export type UpdateUserTypingMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserTypingMutation, UpdateUserTypingMutationVariables>;
export const LastUserTypingDocument = gql`
    subscription LastUserTyping($selfUuid: uuid) {
  user_typing(where: {uuid: {_neq: $selfUuid}}, limit: 1, order_by: {last_typed: desc}) {
    last_typed
    username
  }
}
    `;
export type LastUserTypingSubscriptionResult = ApolloReactCommon.SubscriptionResult<LastUserTypingSubscription>;
export const UsersOnlineDocument = gql`
    subscription UsersOnline {
  user_online(order_by: {username: asc}) {
    uuid
    username
  }
}
    `;
export type UsersOnlineSubscriptionResult = ApolloReactCommon.SubscriptionResult<UsersOnlineSubscription>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  User(order_by: {username: desc}) {
    uuid
    created_at
    username
    last_seen
    last_typed
    email
    first_name
    last_name
  }
}
    `;
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserByUuidDocument = gql`
    query GetUserByUuid($uuid: uuid!) {
  User_by_pk(uuid: $uuid) {
    uuid
    username
    email
    last_seen
    last_typed
    first_name
    last_name
    created_at
  }
}
    `;
export type GetUserByUuidQueryResult = ApolloReactCommon.QueryResult<GetUserByUuidQuery, GetUserByUuidQueryVariables>;