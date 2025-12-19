
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model CircleMember
 * 
 */
export type CircleMember = $Result.DefaultSelection<Prisma.$CircleMemberPayload>
/**
 * Model Organizer
 * 
 */
export type Organizer = $Result.DefaultSelection<Prisma.$OrganizerPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs>;

  /**
   * `prisma.circleMember`: Exposes CRUD operations for the **CircleMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CircleMembers
    * const circleMembers = await prisma.circleMember.findMany()
    * ```
    */
  get circleMember(): Prisma.CircleMemberDelegate<ExtArgs>;

  /**
   * `prisma.organizer`: Exposes CRUD operations for the **Organizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizer.findMany()
    * ```
    */
  get organizer(): Prisma.OrganizerDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Trip: 'Trip',
    Booking: 'Booking',
    Circle: 'Circle',
    CircleMember: 'CircleMember',
    Organizer: 'Organizer',
    Message: 'Message',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'trip' | 'booking' | 'circle' | 'circleMember' | 'organizer' | 'message' | 'review'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>,
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>,
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      CircleMember: {
        payload: Prisma.$CircleMemberPayload<ExtArgs>
        fields: Prisma.CircleMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          findFirst: {
            args: Prisma.CircleMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          findMany: {
            args: Prisma.CircleMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>[]
          }
          create: {
            args: Prisma.CircleMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          delete: {
            args: Prisma.CircleMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          update: {
            args: Prisma.CircleMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          deleteMany: {
            args: Prisma.CircleMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CircleMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CircleMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          aggregate: {
            args: Prisma.CircleMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCircleMember>
          }
          groupBy: {
            args: Prisma.CircleMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CircleMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<CircleMemberCountAggregateOutputType> | number
          }
        }
      }
      Organizer: {
        payload: Prisma.$OrganizerPayload<ExtArgs>
        fields: Prisma.OrganizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findFirst: {
            args: Prisma.OrganizerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findMany: {
            args: Prisma.OrganizerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[]
          }
          create: {
            args: Prisma.OrganizerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          delete: {
            args: Prisma.OrganizerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          update: {
            args: Prisma.OrganizerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          deleteMany: {
            args: Prisma.OrganizerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrganizerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          aggregate: {
            args: Prisma.OrganizerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganizer>
          }
          groupBy: {
            args: Prisma.OrganizerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizerCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganizerCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    createdTrips: number
    circleMembers: number
    ownedCircles: number
    messages: number
    receivedMessages: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    createdTrips?: boolean | UserCountOutputTypeCountCreatedTripsArgs
    circleMembers?: boolean | UserCountOutputTypeCountCircleMembersArgs
    ownedCircles?: boolean | UserCountOutputTypeCountOwnedCirclesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCircleMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }



  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    bookings: number
    messages: number
    reviews: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TripCountOutputTypeCountBookingsArgs
    messages?: boolean | TripCountOutputTypeCountMessagesArgs
    reviews?: boolean | TripCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }



  /**
   * Count Type CircleCountOutputType
   */

  export type CircleCountOutputType = {
    members: number
    trips: number
    messages: number
  }

  export type CircleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CircleCountOutputTypeCountMembersArgs
    trips?: boolean | CircleCountOutputTypeCountTripsArgs
    messages?: boolean | CircleCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleCountOutputType
     */
    select?: CircleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
  }


  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type OrganizerCountOutputType
   */

  export type OrganizerCountOutputType = {
    messages: number
  }

  export type OrganizerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | OrganizerCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizerCountOutputType
     */
    select?: OrganizerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    phone: string | null
    location: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    phone: string | null
    location: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    image: number
    phone: number
    location: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    phone?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    phone?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    phone?: true
    location?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    image: string | null
    phone: string | null
    location: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    phone?: boolean
    location?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    circleMembers?: boolean | User$circleMembersArgs<ExtArgs>
    ownedCircles?: boolean | User$ownedCirclesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    phone?: boolean
    location?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    circleMembers?: boolean | User$circleMembersArgs<ExtArgs>
    ownedCircles?: boolean | User$ownedCirclesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      createdTrips: Prisma.$TripPayload<ExtArgs>[]
      circleMembers: Prisma.$CircleMemberPayload<ExtArgs>[]
      ownedCircles: Prisma.$CirclePayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      image: string | null
      phone: string | null
      location: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdTrips<T extends User$createdTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'> | Null>;

    circleMembers<T extends User$circleMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$circleMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    ownedCircles<T extends User$ownedCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * User.createdTrips
   */
  export type User$createdTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * User.circleMembers
   */
  export type User$circleMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    cursor?: CircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }


  /**
   * User.ownedCircles
   */
  export type User$ownedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    cursor?: CircleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    durationDays: number | null
    rating: number | null
    reviewCount: number | null
    price: number | null
    capacity: number | null
    platformFee: number | null
    discountAmount: number | null
    views: number | null
  }

  export type TripSumAggregateOutputType = {
    durationDays: number | null
    rating: number | null
    reviewCount: number | null
    price: number | null
    capacity: number | null
    platformFee: number | null
    discountAmount: number | null
    views: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    gallery: string | null
    location: string | null
    duration: string | null
    durationDays: number | null
    rating: number | null
    reviewCount: number | null
    price: number | null
    difficulty: string | null
    highlights: string | null
    itinerary: string | null
    inclusions: string | null
    exclusions: string | null
    bestTime: string | null
    tripType: string | null
    summitHeight: string | null
    region: string | null
    placesOfInterest: string | null
    routeImage: string | null
    route: string | null
    requirements: string | null
    startDate: Date | null
    endDate: Date | null
    isPrivate: boolean | null
    isTest: boolean | null
    activities: string | null
    capacity: number | null
    startingLocation: string | null
    returnLocation: string | null
    accommodation: string | null
    platformFee: number | null
    discountAmount: number | null
    tourGuideDetails: string | null
    tourGuidePhoto: string | null
    cancellationPolicy: string | null
    termsAndConditions: string | null
    views: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    deletedAt: Date | null
    creatorId: string | null
    circleId: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    gallery: string | null
    location: string | null
    duration: string | null
    durationDays: number | null
    rating: number | null
    reviewCount: number | null
    price: number | null
    difficulty: string | null
    highlights: string | null
    itinerary: string | null
    inclusions: string | null
    exclusions: string | null
    bestTime: string | null
    tripType: string | null
    summitHeight: string | null
    region: string | null
    placesOfInterest: string | null
    routeImage: string | null
    route: string | null
    requirements: string | null
    startDate: Date | null
    endDate: Date | null
    isPrivate: boolean | null
    isTest: boolean | null
    activities: string | null
    capacity: number | null
    startingLocation: string | null
    returnLocation: string | null
    accommodation: string | null
    platformFee: number | null
    discountAmount: number | null
    tourGuideDetails: string | null
    tourGuidePhoto: string | null
    cancellationPolicy: string | null
    termsAndConditions: string | null
    views: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    deletedAt: Date | null
    creatorId: string | null
    circleId: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    gallery: number
    location: number
    duration: number
    durationDays: number
    rating: number
    reviewCount: number
    price: number
    difficulty: number
    highlights: number
    itinerary: number
    inclusions: number
    exclusions: number
    bestTime: number
    tripType: number
    summitHeight: number
    region: number
    placesOfInterest: number
    routeImage: number
    route: number
    requirements: number
    startDate: number
    endDate: number
    isPrivate: number
    isTest: number
    activities: number
    capacity: number
    startingLocation: number
    returnLocation: number
    accommodation: number
    platformFee: number
    discountAmount: number
    tourGuideDetails: number
    tourGuidePhoto: number
    cancellationPolicy: number
    termsAndConditions: number
    views: number
    createdAt: number
    updatedAt: number
    status: number
    deletedAt: number
    creatorId: number
    circleId: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    durationDays?: true
    rating?: true
    reviewCount?: true
    price?: true
    capacity?: true
    platformFee?: true
    discountAmount?: true
    views?: true
  }

  export type TripSumAggregateInputType = {
    durationDays?: true
    rating?: true
    reviewCount?: true
    price?: true
    capacity?: true
    platformFee?: true
    discountAmount?: true
    views?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gallery?: true
    location?: true
    duration?: true
    durationDays?: true
    rating?: true
    reviewCount?: true
    price?: true
    difficulty?: true
    highlights?: true
    itinerary?: true
    inclusions?: true
    exclusions?: true
    bestTime?: true
    tripType?: true
    summitHeight?: true
    region?: true
    placesOfInterest?: true
    routeImage?: true
    route?: true
    requirements?: true
    startDate?: true
    endDate?: true
    isPrivate?: true
    isTest?: true
    activities?: true
    capacity?: true
    startingLocation?: true
    returnLocation?: true
    accommodation?: true
    platformFee?: true
    discountAmount?: true
    tourGuideDetails?: true
    tourGuidePhoto?: true
    cancellationPolicy?: true
    termsAndConditions?: true
    views?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    deletedAt?: true
    creatorId?: true
    circleId?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gallery?: true
    location?: true
    duration?: true
    durationDays?: true
    rating?: true
    reviewCount?: true
    price?: true
    difficulty?: true
    highlights?: true
    itinerary?: true
    inclusions?: true
    exclusions?: true
    bestTime?: true
    tripType?: true
    summitHeight?: true
    region?: true
    placesOfInterest?: true
    routeImage?: true
    route?: true
    requirements?: true
    startDate?: true
    endDate?: true
    isPrivate?: true
    isTest?: true
    activities?: true
    capacity?: true
    startingLocation?: true
    returnLocation?: true
    accommodation?: true
    platformFee?: true
    discountAmount?: true
    tourGuideDetails?: true
    tourGuidePhoto?: true
    cancellationPolicy?: true
    termsAndConditions?: true
    views?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    deletedAt?: true
    creatorId?: true
    circleId?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    gallery?: true
    location?: true
    duration?: true
    durationDays?: true
    rating?: true
    reviewCount?: true
    price?: true
    difficulty?: true
    highlights?: true
    itinerary?: true
    inclusions?: true
    exclusions?: true
    bestTime?: true
    tripType?: true
    summitHeight?: true
    region?: true
    placesOfInterest?: true
    routeImage?: true
    route?: true
    requirements?: true
    startDate?: true
    endDate?: true
    isPrivate?: true
    isTest?: true
    activities?: true
    capacity?: true
    startingLocation?: true
    returnLocation?: true
    accommodation?: true
    platformFee?: true
    discountAmount?: true
    tourGuideDetails?: true
    tourGuidePhoto?: true
    cancellationPolicy?: true
    termsAndConditions?: true
    views?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    deletedAt?: true
    creatorId?: true
    circleId?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string | null
    gallery: string | null
    location: string
    duration: string | null
    durationDays: number
    rating: number
    reviewCount: number
    price: number
    difficulty: string
    highlights: string | null
    itinerary: string | null
    inclusions: string | null
    exclusions: string | null
    bestTime: string | null
    tripType: string | null
    summitHeight: string | null
    region: string | null
    placesOfInterest: string | null
    routeImage: string | null
    route: string | null
    requirements: string | null
    startDate: Date | null
    endDate: Date | null
    isPrivate: boolean
    isTest: boolean
    activities: string | null
    capacity: number | null
    startingLocation: string | null
    returnLocation: string | null
    accommodation: string | null
    platformFee: number | null
    discountAmount: number | null
    tourGuideDetails: string | null
    tourGuidePhoto: string | null
    cancellationPolicy: string | null
    termsAndConditions: string | null
    views: number
    createdAt: Date
    updatedAt: Date
    status: string
    deletedAt: Date | null
    creatorId: string | null
    circleId: string | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gallery?: boolean
    location?: boolean
    duration?: boolean
    durationDays?: boolean
    rating?: boolean
    reviewCount?: boolean
    price?: boolean
    difficulty?: boolean
    highlights?: boolean
    itinerary?: boolean
    inclusions?: boolean
    exclusions?: boolean
    bestTime?: boolean
    tripType?: boolean
    summitHeight?: boolean
    region?: boolean
    placesOfInterest?: boolean
    routeImage?: boolean
    route?: boolean
    requirements?: boolean
    startDate?: boolean
    endDate?: boolean
    isPrivate?: boolean
    isTest?: boolean
    activities?: boolean
    capacity?: boolean
    startingLocation?: boolean
    returnLocation?: boolean
    accommodation?: boolean
    platformFee?: boolean
    discountAmount?: boolean
    tourGuideDetails?: boolean
    tourGuidePhoto?: boolean
    cancellationPolicy?: boolean
    termsAndConditions?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    deletedAt?: boolean
    creatorId?: boolean
    circleId?: boolean
    bookings?: boolean | Trip$bookingsArgs<ExtArgs>
    creator?: boolean | Trip$creatorArgs<ExtArgs>
    circle?: boolean | Trip$circleArgs<ExtArgs>
    messages?: boolean | Trip$messagesArgs<ExtArgs>
    reviews?: boolean | Trip$reviewsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    gallery?: boolean
    location?: boolean
    duration?: boolean
    durationDays?: boolean
    rating?: boolean
    reviewCount?: boolean
    price?: boolean
    difficulty?: boolean
    highlights?: boolean
    itinerary?: boolean
    inclusions?: boolean
    exclusions?: boolean
    bestTime?: boolean
    tripType?: boolean
    summitHeight?: boolean
    region?: boolean
    placesOfInterest?: boolean
    routeImage?: boolean
    route?: boolean
    requirements?: boolean
    startDate?: boolean
    endDate?: boolean
    isPrivate?: boolean
    isTest?: boolean
    activities?: boolean
    capacity?: boolean
    startingLocation?: boolean
    returnLocation?: boolean
    accommodation?: boolean
    platformFee?: boolean
    discountAmount?: boolean
    tourGuideDetails?: boolean
    tourGuidePhoto?: boolean
    cancellationPolicy?: boolean
    termsAndConditions?: boolean
    views?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    deletedAt?: boolean
    creatorId?: boolean
    circleId?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Trip$bookingsArgs<ExtArgs>
    creator?: boolean | Trip$creatorArgs<ExtArgs>
    circle?: boolean | Trip$circleArgs<ExtArgs>
    messages?: boolean | Trip$messagesArgs<ExtArgs>
    reviews?: boolean | Trip$reviewsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs> | null
      circle: Prisma.$CirclePayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string | null
      gallery: string | null
      location: string
      duration: string | null
      durationDays: number
      rating: number
      reviewCount: number
      price: number
      difficulty: string
      highlights: string | null
      itinerary: string | null
      inclusions: string | null
      exclusions: string | null
      bestTime: string | null
      tripType: string | null
      summitHeight: string | null
      region: string | null
      placesOfInterest: string | null
      routeImage: string | null
      route: string | null
      requirements: string | null
      startDate: Date | null
      endDate: Date | null
      isPrivate: boolean
      isTest: boolean
      activities: string | null
      capacity: number | null
      startingLocation: string | null
      returnLocation: string | null
      accommodation: string | null
      platformFee: number | null
      discountAmount: number | null
      tourGuideDetails: string | null
      tourGuidePhoto: string | null
      cancellationPolicy: string | null
      termsAndConditions: string | null
      views: number
      createdAt: Date
      updatedAt: Date
      status: string
      deletedAt: Date | null
      creatorId: string | null
      circleId: string | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }


  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
    **/
    create<T extends TripCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TripCreateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
    **/
    delete<T extends TripDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TripDeleteArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
    **/
    upsert<T extends TripUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpsertArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends Trip$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    creator<T extends Trip$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Trip$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    circle<T extends Trip$circleArgs<ExtArgs> = {}>(args?: Subset<T, Trip$circleArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    messages<T extends Trip$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    reviews<T extends Trip$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly image: FieldRef<"Trip", 'String'>
    readonly gallery: FieldRef<"Trip", 'String'>
    readonly location: FieldRef<"Trip", 'String'>
    readonly duration: FieldRef<"Trip", 'String'>
    readonly durationDays: FieldRef<"Trip", 'Int'>
    readonly rating: FieldRef<"Trip", 'Float'>
    readonly reviewCount: FieldRef<"Trip", 'Int'>
    readonly price: FieldRef<"Trip", 'Int'>
    readonly difficulty: FieldRef<"Trip", 'String'>
    readonly highlights: FieldRef<"Trip", 'String'>
    readonly itinerary: FieldRef<"Trip", 'String'>
    readonly inclusions: FieldRef<"Trip", 'String'>
    readonly exclusions: FieldRef<"Trip", 'String'>
    readonly bestTime: FieldRef<"Trip", 'String'>
    readonly tripType: FieldRef<"Trip", 'String'>
    readonly summitHeight: FieldRef<"Trip", 'String'>
    readonly region: FieldRef<"Trip", 'String'>
    readonly placesOfInterest: FieldRef<"Trip", 'String'>
    readonly routeImage: FieldRef<"Trip", 'String'>
    readonly route: FieldRef<"Trip", 'String'>
    readonly requirements: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly isPrivate: FieldRef<"Trip", 'Boolean'>
    readonly isTest: FieldRef<"Trip", 'Boolean'>
    readonly activities: FieldRef<"Trip", 'String'>
    readonly capacity: FieldRef<"Trip", 'Int'>
    readonly startingLocation: FieldRef<"Trip", 'String'>
    readonly returnLocation: FieldRef<"Trip", 'String'>
    readonly accommodation: FieldRef<"Trip", 'String'>
    readonly platformFee: FieldRef<"Trip", 'Float'>
    readonly discountAmount: FieldRef<"Trip", 'Float'>
    readonly tourGuideDetails: FieldRef<"Trip", 'String'>
    readonly tourGuidePhoto: FieldRef<"Trip", 'String'>
    readonly cancellationPolicy: FieldRef<"Trip", 'String'>
    readonly termsAndConditions: FieldRef<"Trip", 'String'>
    readonly views: FieldRef<"Trip", 'Int'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
    readonly status: FieldRef<"Trip", 'String'>
    readonly deletedAt: FieldRef<"Trip", 'DateTime'>
    readonly creatorId: FieldRef<"Trip", 'String'>
    readonly circleId: FieldRef<"Trip", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }


  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }


  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }


  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }


  /**
   * Trip.bookings
   */
  export type Trip$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Trip.creator
   */
  export type Trip$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Trip.circle
   */
  export type Trip$circleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
  }


  /**
   * Trip.messages
   */
  export type Trip$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Trip.reviews
   */
  export type Trip$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
  }



  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guests: number | null
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    guests: number | null
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    date: Date | null
    guests: number | null
    totalPrice: number | null
    status: string | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    date: Date | null
    guests: number | null
    totalPrice: number | null
    status: string | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    date: number
    guests: number
    totalPrice: number
    status: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guests?: true
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    guests?: true
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    date?: true
    guests?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    date?: true
    guests?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    date?: true
    guests?: true
    totalPrice?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    date: Date
    guests: number
    totalPrice: number
    status: string
    paymentStatus: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    date?: boolean
    guests?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    date?: boolean
    guests?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }


  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      date: Date
      guests: number
      totalPrice: number
      status: string
      paymentStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }


  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends BookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends BookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends BookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly tripId: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly totalPrice: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly paymentStatus: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }


  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }


  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }


  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }


  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
  }



  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CircleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CircleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CircleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CircleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CircleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: CircleCountAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    trips?: boolean | Circle$tripsArgs<ExtArgs>
    messages?: boolean | Circle$messagesArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    trips?: boolean | Circle$tripsArgs<ExtArgs>
    messages?: boolean | Circle$messagesArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$CircleMemberPayload<ExtArgs>[]
      trips: Prisma.$TripPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }


  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CircleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Circle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CircleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleWithIdOnly = await prisma.circle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CircleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
    **/
    create<T extends CircleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CircleCreateArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
    **/
    delete<T extends CircleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CircleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CircleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CircleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
    **/
    upsert<T extends CircleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>
    ): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    members<T extends Circle$membersArgs<ExtArgs> = {}>(args?: Subset<T, Circle$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    trips<T extends Circle$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Circle$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends Circle$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Circle$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Circle model
   */ 
  interface CircleFieldRefs {
    readonly id: FieldRef<"Circle", 'String'>
    readonly name: FieldRef<"Circle", 'String'>
    readonly description: FieldRef<"Circle", 'String'>
    readonly image: FieldRef<"Circle", 'String'>
    readonly ownerId: FieldRef<"Circle", 'String'>
    readonly createdAt: FieldRef<"Circle", 'DateTime'>
    readonly updatedAt: FieldRef<"Circle", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }


  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }


  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }


  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }


  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }


  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
  }


  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
  }


  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
  }


  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
  }


  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
  }


  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
  }


  /**
   * Circle.members
   */
  export type Circle$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    cursor?: CircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }


  /**
   * Circle.trips
   */
  export type Circle$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Circle.messages
   */
  export type Circle$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
  }



  /**
   * Model CircleMember
   */

  export type AggregateCircleMember = {
    _count: CircleMemberCountAggregateOutputType | null
    _min: CircleMemberMinAggregateOutputType | null
    _max: CircleMemberMaxAggregateOutputType | null
  }

  export type CircleMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    circleId: string | null
    joinedAt: Date | null
  }

  export type CircleMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    circleId: string | null
    joinedAt: Date | null
  }

  export type CircleMemberCountAggregateOutputType = {
    id: number
    userId: number
    circleId: number
    joinedAt: number
    _all: number
  }


  export type CircleMemberMinAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
  }

  export type CircleMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
  }

  export type CircleMemberCountAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
    _all?: true
  }

  export type CircleMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleMember to aggregate.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CircleMembers
    **/
    _count?: true | CircleMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMemberMaxAggregateInputType
  }

  export type GetCircleMemberAggregateType<T extends CircleMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCircleMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircleMember[P]>
      : GetScalarType<T[P], AggregateCircleMember[P]>
  }




  export type CircleMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithAggregationInput | CircleMemberOrderByWithAggregationInput[]
    by: CircleMemberScalarFieldEnum[] | CircleMemberScalarFieldEnum
    having?: CircleMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleMemberCountAggregateInputType | true
    _min?: CircleMemberMinAggregateInputType
    _max?: CircleMemberMaxAggregateInputType
  }

  export type CircleMemberGroupByOutputType = {
    id: string
    userId: string
    circleId: string
    joinedAt: Date
    _count: CircleMemberCountAggregateOutputType | null
    _min: CircleMemberMinAggregateOutputType | null
    _max: CircleMemberMaxAggregateOutputType | null
  }

  type GetCircleMemberGroupByPayload<T extends CircleMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CircleMemberGroupByOutputType[P]>
        }
      >
    >


  export type CircleMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleMember"]>

  export type CircleMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
  }

  export type CircleMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }


  export type $CircleMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CircleMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      circle: Prisma.$CirclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      circleId: string
      joinedAt: Date
    }, ExtArgs["result"]["circleMember"]>
    composites: {}
  }


  type CircleMemberGetPayload<S extends boolean | null | undefined | CircleMemberDefaultArgs> = $Result.GetResult<Prisma.$CircleMemberPayload, S>

  type CircleMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CircleMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CircleMemberCountAggregateInputType | true
    }

  export interface CircleMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CircleMember'], meta: { name: 'CircleMember' } }
    /**
     * Find zero or one CircleMember that matches the filter.
     * @param {CircleMemberFindUniqueArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CircleMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CircleMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CircleMemberFindUniqueOrThrowArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CircleMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CircleMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindFirstArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CircleMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleMemberFindFirstArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CircleMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindFirstOrThrowArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CircleMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CircleMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CircleMembers
     * const circleMembers = await prisma.circleMember.findMany()
     * 
     * // Get first 10 CircleMembers
     * const circleMembers = await prisma.circleMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleMemberWithIdOnly = await prisma.circleMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CircleMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CircleMember.
     * @param {CircleMemberCreateArgs} args - Arguments to create a CircleMember.
     * @example
     * // Create one CircleMember
     * const CircleMember = await prisma.circleMember.create({
     *   data: {
     *     // ... data to create a CircleMember
     *   }
     * })
     * 
    **/
    create<T extends CircleMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberCreateArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CircleMember.
     * @param {CircleMemberDeleteArgs} args - Arguments to delete one CircleMember.
     * @example
     * // Delete one CircleMember
     * const CircleMember = await prisma.circleMember.delete({
     *   where: {
     *     // ... filter to delete one CircleMember
     *   }
     * })
     * 
    **/
    delete<T extends CircleMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberDeleteArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CircleMember.
     * @param {CircleMemberUpdateArgs} args - Arguments to update one CircleMember.
     * @example
     * // Update one CircleMember
     * const circleMember = await prisma.circleMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CircleMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberUpdateArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CircleMembers.
     * @param {CircleMemberDeleteManyArgs} args - Arguments to filter CircleMembers to delete.
     * @example
     * // Delete a few CircleMembers
     * const { count } = await prisma.circleMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CircleMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CircleMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CircleMembers
     * const circleMember = await prisma.circleMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CircleMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CircleMember.
     * @param {CircleMemberUpsertArgs} args - Arguments to update or create a CircleMember.
     * @example
     * // Update or create a CircleMember
     * const circleMember = await prisma.circleMember.upsert({
     *   create: {
     *     // ... data to create a CircleMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CircleMember we want to update
     *   }
     * })
    **/
    upsert<T extends CircleMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CircleMemberUpsertArgs<ExtArgs>>
    ): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberCountArgs} args - Arguments to filter CircleMembers to count.
     * @example
     * // Count the number of CircleMembers
     * const count = await prisma.circleMember.count({
     *   where: {
     *     // ... the filter for the CircleMembers we want to count
     *   }
     * })
    **/
    count<T extends CircleMemberCountArgs>(
      args?: Subset<T, CircleMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircleMemberAggregateArgs>(args: Subset<T, CircleMemberAggregateArgs>): Prisma.PrismaPromise<GetCircleMemberAggregateType<T>>

    /**
     * Group by CircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircleMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleMemberGroupByArgs['orderBy'] }
        : { orderBy?: CircleMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircleMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CircleMember model
   */
  readonly fields: CircleMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CircleMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    circle<T extends CircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleDefaultArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CircleMember model
   */ 
  interface CircleMemberFieldRefs {
    readonly id: FieldRef<"CircleMember", 'String'>
    readonly userId: FieldRef<"CircleMember", 'String'>
    readonly circleId: FieldRef<"CircleMember", 'String'>
    readonly joinedAt: FieldRef<"CircleMember", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CircleMember findUnique
   */
  export type CircleMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where: CircleMemberWhereUniqueInput
  }


  /**
   * CircleMember findUniqueOrThrow
   */
  export type CircleMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where: CircleMemberWhereUniqueInput
  }


  /**
   * CircleMember findFirst
   */
  export type CircleMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleMembers.
     */
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }


  /**
   * CircleMember findFirstOrThrow
   */
  export type CircleMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleMembers.
     */
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }


  /**
   * CircleMember findMany
   */
  export type CircleMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMembers to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }


  /**
   * CircleMember create
   */
  export type CircleMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CircleMember.
     */
    data: XOR<CircleMemberCreateInput, CircleMemberUncheckedCreateInput>
  }


  /**
   * CircleMember update
   */
  export type CircleMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CircleMember.
     */
    data: XOR<CircleMemberUpdateInput, CircleMemberUncheckedUpdateInput>
    /**
     * Choose, which CircleMember to update.
     */
    where: CircleMemberWhereUniqueInput
  }


  /**
   * CircleMember updateMany
   */
  export type CircleMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CircleMembers.
     */
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyInput>
    /**
     * Filter which CircleMembers to update
     */
    where?: CircleMemberWhereInput
  }


  /**
   * CircleMember upsert
   */
  export type CircleMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CircleMember to update in case it exists.
     */
    where: CircleMemberWhereUniqueInput
    /**
     * In case the CircleMember found by the `where` argument doesn't exist, create a new CircleMember with this data.
     */
    create: XOR<CircleMemberCreateInput, CircleMemberUncheckedCreateInput>
    /**
     * In case the CircleMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleMemberUpdateInput, CircleMemberUncheckedUpdateInput>
  }


  /**
   * CircleMember delete
   */
  export type CircleMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter which CircleMember to delete.
     */
    where: CircleMemberWhereUniqueInput
  }


  /**
   * CircleMember deleteMany
   */
  export type CircleMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleMembers to delete
     */
    where?: CircleMemberWhereInput
  }


  /**
   * CircleMember without action
   */
  export type CircleMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleMemberInclude<ExtArgs> | null
  }



  /**
   * Model Organizer
   */

  export type AggregateOrganizer = {
    _count: OrganizerCountAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  export type OrganizerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    bio: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    bio: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    bio: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizer to aggregate.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizers
    **/
    _count?: true | OrganizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizerMaxAggregateInputType
  }

  export type GetOrganizerAggregateType<T extends OrganizerAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizer[P]>
      : GetScalarType<T[P], AggregateOrganizer[P]>
  }




  export type OrganizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizerWhereInput
    orderBy?: OrganizerOrderByWithAggregationInput | OrganizerOrderByWithAggregationInput[]
    by: OrganizerScalarFieldEnum[] | OrganizerScalarFieldEnum
    having?: OrganizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizerCountAggregateInputType | true
    _min?: OrganizerMinAggregateInputType
    _max?: OrganizerMaxAggregateInputType
  }

  export type OrganizerGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    image: string | null
    bio: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizerCountAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  type GetOrganizerGroupByPayload<T extends OrganizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
        }
      >
    >


  export type OrganizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Organizer$messagesArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizer"]>

  export type OrganizerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Organizer$messagesArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrganizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizer"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      image: string | null
      bio: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizer"]>
    composites: {}
  }


  type OrganizerGetPayload<S extends boolean | null | undefined | OrganizerDefaultArgs> = $Result.GetResult<Prisma.$OrganizerPayload, S>

  type OrganizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizerCountAggregateInputType | true
    }

  export interface OrganizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizer'], meta: { name: 'Organizer' } }
    /**
     * Find zero or one Organizer that matches the filter.
     * @param {OrganizerFindUniqueArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerFindUniqueArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organizer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganizerFindUniqueOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizerFindFirstArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizer.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizerWithIdOnly = await prisma.organizer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organizer.
     * @param {OrganizerCreateArgs} args - Arguments to create a Organizer.
     * @example
     * // Create one Organizer
     * const Organizer = await prisma.organizer.create({
     *   data: {
     *     // ... data to create a Organizer
     *   }
     * })
     * 
    **/
    create<T extends OrganizerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerCreateArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Organizer.
     * @param {OrganizerDeleteArgs} args - Arguments to delete one Organizer.
     * @example
     * // Delete one Organizer
     * const Organizer = await prisma.organizer.delete({
     *   where: {
     *     // ... filter to delete one Organizer
     *   }
     * })
     * 
    **/
    delete<T extends OrganizerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerDeleteArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organizer.
     * @param {OrganizerUpdateArgs} args - Arguments to update one Organizer.
     * @example
     * // Update one Organizer
     * const organizer = await prisma.organizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerUpdateArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organizers.
     * @param {OrganizerDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizer.
     * @param {OrganizerUpsertArgs} args - Arguments to update or create a Organizer.
     * @example
     * // Update or create a Organizer
     * const organizer = await prisma.organizer.upsert({
     *   create: {
     *     // ... data to create a Organizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizer we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizerUpsertArgs<ExtArgs>>
    ): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizer.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends OrganizerCountArgs>(
      args?: Subset<T, OrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizerAggregateArgs>(args: Subset<T, OrganizerAggregateArgs>): Prisma.PrismaPromise<GetOrganizerAggregateType<T>>

    /**
     * Group by Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizerGroupByArgs['orderBy'] }
        : { orderBy?: OrganizerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizer model
   */
  readonly fields: OrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    messages<T extends Organizer$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Organizer$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Organizer model
   */ 
  interface OrganizerFieldRefs {
    readonly id: FieldRef<"Organizer", 'String'>
    readonly name: FieldRef<"Organizer", 'String'>
    readonly email: FieldRef<"Organizer", 'String'>
    readonly password: FieldRef<"Organizer", 'String'>
    readonly image: FieldRef<"Organizer", 'String'>
    readonly bio: FieldRef<"Organizer", 'String'>
    readonly phone: FieldRef<"Organizer", 'String'>
    readonly createdAt: FieldRef<"Organizer", 'DateTime'>
    readonly updatedAt: FieldRef<"Organizer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Organizer findUnique
   */
  export type OrganizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }


  /**
   * Organizer findUniqueOrThrow
   */
  export type OrganizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }


  /**
   * Organizer findFirst
   */
  export type OrganizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }


  /**
   * Organizer findFirstOrThrow
   */
  export type OrganizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }


  /**
   * Organizer findMany
   */
  export type OrganizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }


  /**
   * Organizer create
   */
  export type OrganizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizer.
     */
    data: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
  }


  /**
   * Organizer update
   */
  export type OrganizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizer.
     */
    data: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
    /**
     * Choose, which Organizer to update.
     */
    where: OrganizerWhereUniqueInput
  }


  /**
   * Organizer updateMany
   */
  export type OrganizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<OrganizerUpdateManyMutationInput, OrganizerUncheckedUpdateManyInput>
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput
  }


  /**
   * Organizer upsert
   */
  export type OrganizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizer to update in case it exists.
     */
    where: OrganizerWhereUniqueInput
    /**
     * In case the Organizer found by the `where` argument doesn't exist, create a new Organizer with this data.
     */
    create: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
    /**
     * In case the Organizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
  }


  /**
   * Organizer delete
   */
  export type OrganizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter which Organizer to delete.
     */
    where: OrganizerWhereUniqueInput
  }


  /**
   * Organizer deleteMany
   */
  export type OrganizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizerWhereInput
  }


  /**
   * Organizer.messages
   */
  export type Organizer$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Organizer without action
   */
  export type OrganizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    isRead: boolean | null
    sender: string | null
    tripId: string | null
    circleId: string | null
    organizerId: string | null
    userId: string | null
    recipientId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    isRead: boolean | null
    sender: string | null
    tripId: string | null
    circleId: string | null
    organizerId: string | null
    userId: string | null
    recipientId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    isRead: number
    sender: number
    tripId: number
    circleId: number
    organizerId: number
    userId: number
    recipientId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    isRead?: true
    sender?: true
    tripId?: true
    circleId?: true
    organizerId?: true
    userId?: true
    recipientId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    isRead?: true
    sender?: true
    tripId?: true
    circleId?: true
    organizerId?: true
    userId?: true
    recipientId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    isRead?: true
    sender?: true
    tripId?: true
    circleId?: true
    organizerId?: true
    userId?: true
    recipientId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    isRead: boolean
    sender: string
    tripId: string | null
    circleId: string | null
    organizerId: string | null
    userId: string | null
    recipientId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    sender?: boolean
    tripId?: boolean
    circleId?: boolean
    organizerId?: boolean
    userId?: boolean
    recipientId?: boolean
    trip?: boolean | Message$tripArgs<ExtArgs>
    circle?: boolean | Message$circleArgs<ExtArgs>
    organizer?: boolean | Message$organizerArgs<ExtArgs>
    user?: boolean | Message$userArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    isRead?: boolean
    sender?: boolean
    tripId?: boolean
    circleId?: boolean
    organizerId?: boolean
    userId?: boolean
    recipientId?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | Message$tripArgs<ExtArgs>
    circle?: boolean | Message$circleArgs<ExtArgs>
    organizer?: boolean | Message$organizerArgs<ExtArgs>
    user?: boolean | Message$userArgs<ExtArgs>
    recipient?: boolean | Message$recipientArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs> | null
      circle: Prisma.$CirclePayload<ExtArgs> | null
      organizer: Prisma.$OrganizerPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      recipient: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      isRead: boolean
      sender: string
      tripId: string | null
      circleId: string | null
      organizerId: string | null
      userId: string | null
      recipientId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trip<T extends Message$tripArgs<ExtArgs> = {}>(args?: Subset<T, Message$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    circle<T extends Message$circleArgs<ExtArgs> = {}>(args?: Subset<T, Message$circleArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    organizer<T extends Message$organizerArgs<ExtArgs> = {}>(args?: Subset<T, Message$organizerArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends Message$userArgs<ExtArgs> = {}>(args?: Subset<T, Message$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    recipient<T extends Message$recipientArgs<ExtArgs> = {}>(args?: Subset<T, Message$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly sender: FieldRef<"Message", 'String'>
    readonly tripId: FieldRef<"Message", 'String'>
    readonly circleId: FieldRef<"Message", 'String'>
    readonly organizerId: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly recipientId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message.trip
   */
  export type Message$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }


  /**
   * Message.circle
   */
  export type Message$circleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
  }


  /**
   * Message.organizer
   */
  export type Message$organizerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganizerInclude<ExtArgs> | null
    where?: OrganizerWhereInput
  }


  /**
   * Message.user
   */
  export type Message$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Message.recipient
   */
  export type Message$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    content: string | null
    userId: string | null
    tripId: string | null
    isFeatured: boolean | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    content: string | null
    userId: string | null
    tripId: string | null
    isFeatured: boolean | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    content: number
    userId: number
    tripId: number
    isFeatured: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    tripId?: true
    isFeatured?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    tripId?: true
    isFeatured?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    tripId?: true
    isFeatured?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    content: string
    userId: string
    tripId: string | null
    isFeatured: boolean
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    tripId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | Review$tripArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    tripId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | Review$tripArgs<ExtArgs>
  }


  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      content: string
      userId: string
      tripId: string | null
      isFeatured: boolean
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }


  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trip<T extends Review$tripArgs<ExtArgs> = {}>(args?: Subset<T, Review$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly tripId: FieldRef<"Review", 'String'>
    readonly isFeatured: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }


  /**
   * Review.trip
   */
  export type Review$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }


  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image',
    phone: 'phone',
    location: 'location'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    gallery: 'gallery',
    location: 'location',
    duration: 'duration',
    durationDays: 'durationDays',
    rating: 'rating',
    reviewCount: 'reviewCount',
    price: 'price',
    difficulty: 'difficulty',
    highlights: 'highlights',
    itinerary: 'itinerary',
    inclusions: 'inclusions',
    exclusions: 'exclusions',
    bestTime: 'bestTime',
    tripType: 'tripType',
    summitHeight: 'summitHeight',
    region: 'region',
    placesOfInterest: 'placesOfInterest',
    routeImage: 'routeImage',
    route: 'route',
    requirements: 'requirements',
    startDate: 'startDate',
    endDate: 'endDate',
    isPrivate: 'isPrivate',
    isTest: 'isTest',
    activities: 'activities',
    capacity: 'capacity',
    startingLocation: 'startingLocation',
    returnLocation: 'returnLocation',
    accommodation: 'accommodation',
    platformFee: 'platformFee',
    discountAmount: 'discountAmount',
    tourGuideDetails: 'tourGuideDetails',
    tourGuidePhoto: 'tourGuidePhoto',
    cancellationPolicy: 'cancellationPolicy',
    termsAndConditions: 'termsAndConditions',
    views: 'views',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    deletedAt: 'deletedAt',
    creatorId: 'creatorId',
    circleId: 'circleId'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    date: 'date',
    guests: 'guests',
    totalPrice: 'totalPrice',
    status: 'status',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CircleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const CircleMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    circleId: 'circleId',
    joinedAt: 'joinedAt'
  };

  export type CircleMemberScalarFieldEnum = (typeof CircleMemberScalarFieldEnum)[keyof typeof CircleMemberScalarFieldEnum]


  export const OrganizerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    bio: 'bio',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizerScalarFieldEnum = (typeof OrganizerScalarFieldEnum)[keyof typeof OrganizerScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    isRead: 'isRead',
    sender: 'sender',
    tripId: 'tripId',
    circleId: 'circleId',
    organizerId: 'organizerId',
    userId: 'userId',
    recipientId: 'recipientId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    content: 'content',
    userId: 'userId',
    tripId: 'tripId',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    createdTrips?: TripListRelationFilter
    circleMembers?: CircleMemberListRelationFilter
    ownedCircles?: CircleListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    createdTrips?: TripOrderByRelationAggregateInput
    circleMembers?: CircleMemberOrderByRelationAggregateInput
    ownedCircles?: CircleOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    createdTrips?: TripListRelationFilter
    circleMembers?: CircleMemberListRelationFilter
    ownedCircles?: CircleListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    image?: StringNullableFilter<"Trip"> | string | null
    gallery?: StringNullableFilter<"Trip"> | string | null
    location?: StringFilter<"Trip"> | string
    duration?: StringNullableFilter<"Trip"> | string | null
    durationDays?: IntFilter<"Trip"> | number
    rating?: FloatFilter<"Trip"> | number
    reviewCount?: IntFilter<"Trip"> | number
    price?: IntFilter<"Trip"> | number
    difficulty?: StringFilter<"Trip"> | string
    highlights?: StringNullableFilter<"Trip"> | string | null
    itinerary?: StringNullableFilter<"Trip"> | string | null
    inclusions?: StringNullableFilter<"Trip"> | string | null
    exclusions?: StringNullableFilter<"Trip"> | string | null
    bestTime?: StringNullableFilter<"Trip"> | string | null
    tripType?: StringNullableFilter<"Trip"> | string | null
    summitHeight?: StringNullableFilter<"Trip"> | string | null
    region?: StringNullableFilter<"Trip"> | string | null
    placesOfInterest?: StringNullableFilter<"Trip"> | string | null
    routeImage?: StringNullableFilter<"Trip"> | string | null
    route?: StringNullableFilter<"Trip"> | string | null
    requirements?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    isPrivate?: BoolFilter<"Trip"> | boolean
    isTest?: BoolFilter<"Trip"> | boolean
    activities?: StringNullableFilter<"Trip"> | string | null
    capacity?: IntNullableFilter<"Trip"> | number | null
    startingLocation?: StringNullableFilter<"Trip"> | string | null
    returnLocation?: StringNullableFilter<"Trip"> | string | null
    accommodation?: StringNullableFilter<"Trip"> | string | null
    platformFee?: FloatNullableFilter<"Trip"> | number | null
    discountAmount?: FloatNullableFilter<"Trip"> | number | null
    tourGuideDetails?: StringNullableFilter<"Trip"> | string | null
    tourGuidePhoto?: StringNullableFilter<"Trip"> | string | null
    cancellationPolicy?: StringNullableFilter<"Trip"> | string | null
    termsAndConditions?: StringNullableFilter<"Trip"> | string | null
    views?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    status?: StringFilter<"Trip"> | string
    deletedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    creatorId?: StringNullableFilter<"Trip"> | string | null
    circleId?: StringNullableFilter<"Trip"> | string | null
    bookings?: BookingListRelationFilter
    creator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    circle?: XOR<CircleNullableRelationFilter, CircleWhereInput> | null
    messages?: MessageListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    location?: SortOrder
    duration?: SortOrderInput | SortOrder
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    difficulty?: SortOrder
    highlights?: SortOrderInput | SortOrder
    itinerary?: SortOrderInput | SortOrder
    inclusions?: SortOrderInput | SortOrder
    exclusions?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    tripType?: SortOrderInput | SortOrder
    summitHeight?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    placesOfInterest?: SortOrderInput | SortOrder
    routeImage?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isTest?: SortOrder
    activities?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    startingLocation?: SortOrderInput | SortOrder
    returnLocation?: SortOrderInput | SortOrder
    accommodation?: SortOrderInput | SortOrder
    platformFee?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    tourGuideDetails?: SortOrderInput | SortOrder
    tourGuidePhoto?: SortOrderInput | SortOrder
    cancellationPolicy?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    circleId?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    title?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    image?: StringNullableFilter<"Trip"> | string | null
    gallery?: StringNullableFilter<"Trip"> | string | null
    location?: StringFilter<"Trip"> | string
    duration?: StringNullableFilter<"Trip"> | string | null
    durationDays?: IntFilter<"Trip"> | number
    rating?: FloatFilter<"Trip"> | number
    reviewCount?: IntFilter<"Trip"> | number
    price?: IntFilter<"Trip"> | number
    difficulty?: StringFilter<"Trip"> | string
    highlights?: StringNullableFilter<"Trip"> | string | null
    itinerary?: StringNullableFilter<"Trip"> | string | null
    inclusions?: StringNullableFilter<"Trip"> | string | null
    exclusions?: StringNullableFilter<"Trip"> | string | null
    bestTime?: StringNullableFilter<"Trip"> | string | null
    tripType?: StringNullableFilter<"Trip"> | string | null
    summitHeight?: StringNullableFilter<"Trip"> | string | null
    region?: StringNullableFilter<"Trip"> | string | null
    placesOfInterest?: StringNullableFilter<"Trip"> | string | null
    routeImage?: StringNullableFilter<"Trip"> | string | null
    route?: StringNullableFilter<"Trip"> | string | null
    requirements?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    isPrivate?: BoolFilter<"Trip"> | boolean
    isTest?: BoolFilter<"Trip"> | boolean
    activities?: StringNullableFilter<"Trip"> | string | null
    capacity?: IntNullableFilter<"Trip"> | number | null
    startingLocation?: StringNullableFilter<"Trip"> | string | null
    returnLocation?: StringNullableFilter<"Trip"> | string | null
    accommodation?: StringNullableFilter<"Trip"> | string | null
    platformFee?: FloatNullableFilter<"Trip"> | number | null
    discountAmount?: FloatNullableFilter<"Trip"> | number | null
    tourGuideDetails?: StringNullableFilter<"Trip"> | string | null
    tourGuidePhoto?: StringNullableFilter<"Trip"> | string | null
    cancellationPolicy?: StringNullableFilter<"Trip"> | string | null
    termsAndConditions?: StringNullableFilter<"Trip"> | string | null
    views?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    status?: StringFilter<"Trip"> | string
    deletedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    creatorId?: StringNullableFilter<"Trip"> | string | null
    circleId?: StringNullableFilter<"Trip"> | string | null
    bookings?: BookingListRelationFilter
    creator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    circle?: XOR<CircleNullableRelationFilter, CircleWhereInput> | null
    messages?: MessageListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    location?: SortOrder
    duration?: SortOrderInput | SortOrder
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    difficulty?: SortOrder
    highlights?: SortOrderInput | SortOrder
    itinerary?: SortOrderInput | SortOrder
    inclusions?: SortOrderInput | SortOrder
    exclusions?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    tripType?: SortOrderInput | SortOrder
    summitHeight?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    placesOfInterest?: SortOrderInput | SortOrder
    routeImage?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isTest?: SortOrder
    activities?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    startingLocation?: SortOrderInput | SortOrder
    returnLocation?: SortOrderInput | SortOrder
    accommodation?: SortOrderInput | SortOrder
    platformFee?: SortOrderInput | SortOrder
    discountAmount?: SortOrderInput | SortOrder
    tourGuideDetails?: SortOrderInput | SortOrder
    tourGuidePhoto?: SortOrderInput | SortOrder
    cancellationPolicy?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    circleId?: SortOrderInput | SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringWithAggregatesFilter<"Trip"> | string
    image?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    gallery?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    location?: StringWithAggregatesFilter<"Trip"> | string
    duration?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    durationDays?: IntWithAggregatesFilter<"Trip"> | number
    rating?: FloatWithAggregatesFilter<"Trip"> | number
    reviewCount?: IntWithAggregatesFilter<"Trip"> | number
    price?: IntWithAggregatesFilter<"Trip"> | number
    difficulty?: StringWithAggregatesFilter<"Trip"> | string
    highlights?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    itinerary?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    inclusions?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    exclusions?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    bestTime?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    tripType?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    summitHeight?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    region?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    placesOfInterest?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    routeImage?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    route?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    isPrivate?: BoolWithAggregatesFilter<"Trip"> | boolean
    isTest?: BoolWithAggregatesFilter<"Trip"> | boolean
    activities?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    startingLocation?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    returnLocation?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    accommodation?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    platformFee?: FloatNullableWithAggregatesFilter<"Trip"> | number | null
    discountAmount?: FloatNullableWithAggregatesFilter<"Trip"> | number | null
    tourGuideDetails?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    tourGuidePhoto?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    cancellationPolicy?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    termsAndConditions?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    views?: IntWithAggregatesFilter<"Trip"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    status?: StringWithAggregatesFilter<"Trip"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    creatorId?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    circleId?: StringNullableWithAggregatesFilter<"Trip"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    tripId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalPrice?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentStatus?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    tripId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalPrice?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentStatus?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    tripId?: StringWithAggregatesFilter<"Booking"> | string
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    guests?: IntWithAggregatesFilter<"Booking"> | number
    totalPrice?: IntWithAggregatesFilter<"Booking"> | number
    status?: StringWithAggregatesFilter<"Booking"> | string
    paymentStatus?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    id?: StringFilter<"Circle"> | string
    name?: StringFilter<"Circle"> | string
    description?: StringFilter<"Circle"> | string
    image?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    members?: CircleMemberListRelationFilter
    trips?: TripListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type CircleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: CircleMemberOrderByRelationAggregateInput
    trips?: TripOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    name?: StringFilter<"Circle"> | string
    description?: StringFilter<"Circle"> | string
    image?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    members?: CircleMemberListRelationFilter
    trips?: TripListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type CircleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circle"> | string
    name?: StringWithAggregatesFilter<"Circle"> | string
    description?: StringWithAggregatesFilter<"Circle"> | string
    image?: StringNullableWithAggregatesFilter<"Circle"> | string | null
    ownerId?: StringWithAggregatesFilter<"Circle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
  }

  export type CircleMemberWhereInput = {
    AND?: CircleMemberWhereInput | CircleMemberWhereInput[]
    OR?: CircleMemberWhereInput[]
    NOT?: CircleMemberWhereInput | CircleMemberWhereInput[]
    id?: StringFilter<"CircleMember"> | string
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    circle?: XOR<CircleRelationFilter, CircleWhereInput>
  }

  export type CircleMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
  }

  export type CircleMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_circleId?: CircleMemberUserIdCircleIdCompoundUniqueInput
    AND?: CircleMemberWhereInput | CircleMemberWhereInput[]
    OR?: CircleMemberWhereInput[]
    NOT?: CircleMemberWhereInput | CircleMemberWhereInput[]
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    circle?: XOR<CircleRelationFilter, CircleWhereInput>
  }, "id" | "userId_circleId">

  export type CircleMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    _count?: CircleMemberCountOrderByAggregateInput
    _max?: CircleMemberMaxOrderByAggregateInput
    _min?: CircleMemberMinOrderByAggregateInput
  }

  export type CircleMemberScalarWhereWithAggregatesInput = {
    AND?: CircleMemberScalarWhereWithAggregatesInput | CircleMemberScalarWhereWithAggregatesInput[]
    OR?: CircleMemberScalarWhereWithAggregatesInput[]
    NOT?: CircleMemberScalarWhereWithAggregatesInput | CircleMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CircleMember"> | string
    userId?: StringWithAggregatesFilter<"CircleMember"> | string
    circleId?: StringWithAggregatesFilter<"CircleMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CircleMember"> | Date | string
  }

  export type OrganizerWhereInput = {
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    id?: StringFilter<"Organizer"> | string
    name?: StringFilter<"Organizer"> | string
    email?: StringFilter<"Organizer"> | string
    password?: StringFilter<"Organizer"> | string
    image?: StringNullableFilter<"Organizer"> | string | null
    bio?: StringNullableFilter<"Organizer"> | string | null
    phone?: StringNullableFilter<"Organizer"> | string | null
    createdAt?: DateTimeFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string
    messages?: MessageListRelationFilter
  }

  export type OrganizerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type OrganizerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    name?: StringFilter<"Organizer"> | string
    password?: StringFilter<"Organizer"> | string
    image?: StringNullableFilter<"Organizer"> | string | null
    bio?: StringNullableFilter<"Organizer"> | string | null
    phone?: StringNullableFilter<"Organizer"> | string | null
    createdAt?: DateTimeFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type OrganizerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizerCountOrderByAggregateInput
    _max?: OrganizerMaxOrderByAggregateInput
    _min?: OrganizerMinOrderByAggregateInput
  }

  export type OrganizerScalarWhereWithAggregatesInput = {
    AND?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    OR?: OrganizerScalarWhereWithAggregatesInput[]
    NOT?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organizer"> | string
    name?: StringWithAggregatesFilter<"Organizer"> | string
    email?: StringWithAggregatesFilter<"Organizer"> | string
    password?: StringWithAggregatesFilter<"Organizer"> | string
    image?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    sender?: StringFilter<"Message"> | string
    tripId?: StringNullableFilter<"Message"> | string | null
    circleId?: StringNullableFilter<"Message"> | string | null
    organizerId?: StringNullableFilter<"Message"> | string | null
    userId?: StringNullableFilter<"Message"> | string | null
    recipientId?: StringNullableFilter<"Message"> | string | null
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
    circle?: XOR<CircleNullableRelationFilter, CircleWhereInput> | null
    organizer?: XOR<OrganizerNullableRelationFilter, OrganizerWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    sender?: SortOrder
    tripId?: SortOrderInput | SortOrder
    circleId?: SortOrderInput | SortOrder
    organizerId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    trip?: TripOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
    organizer?: OrganizerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    sender?: StringFilter<"Message"> | string
    tripId?: StringNullableFilter<"Message"> | string | null
    circleId?: StringNullableFilter<"Message"> | string | null
    organizerId?: StringNullableFilter<"Message"> | string | null
    userId?: StringNullableFilter<"Message"> | string | null
    recipientId?: StringNullableFilter<"Message"> | string | null
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
    circle?: XOR<CircleNullableRelationFilter, CircleWhereInput> | null
    organizer?: XOR<OrganizerNullableRelationFilter, OrganizerWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    sender?: SortOrder
    tripId?: SortOrderInput | SortOrder
    circleId?: SortOrderInput | SortOrder
    organizerId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    sender?: StringWithAggregatesFilter<"Message"> | string
    tripId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    circleId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    organizerId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    recipientId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    tripId?: StringNullableFilter<"Review"> | string | null
    isFeatured?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    tripId?: StringNullableFilter<"Review"> | string | null
    isFeatured?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    tripId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutTripInput
    creator?: UserCreateNestedOneWithoutCreatedTripsInput
    circle?: CircleCreateNestedOneWithoutTripsInput
    messages?: MessageCreateNestedManyWithoutTripInput
    reviews?: ReviewCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creatorId?: string | null
    circleId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
    messages?: MessageUncheckedCreateNestedManyWithoutTripInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneWithoutCreatedTripsNestedInput
    circle?: CircleUpdateOneWithoutTripsNestedInput
    messages?: MessageUpdateManyWithoutTripNestedInput
    reviews?: ReviewUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTripNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    id?: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    trip: TripCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    trips?: TripCreateNestedManyWithoutCircleInput
    messages?: MessageCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    trips?: TripUncheckedCreateNestedManyWithoutCircleInput
    messages?: MessageUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    trips?: TripUpdateManyWithoutCircleNestedInput
    messages?: MessageUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    trips?: TripUncheckedUpdateManyWithoutCircleNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutCircleMembersInput
    circle: CircleCreateNestedOneWithoutMembersInput
  }

  export type CircleMemberUncheckedCreateInput = {
    id?: string
    userId: string
    circleId: string
    joinedAt?: Date | string
  }

  export type CircleMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCircleMembersNestedInput
    circle?: CircleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CircleMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizerCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    bio?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    bio?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    trip?: TripCreateNestedOneWithoutMessagesInput
    circle?: CircleCreateNestedOneWithoutMessagesInput
    organizer?: OrganizerCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    tripId?: string | null
    circleId?: string | null
    organizerId?: string | null
    userId?: string | null
    recipientId?: string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneWithoutMessagesNestedInput
    circle?: CircleUpdateOneWithoutMessagesNestedInput
    organizer?: OrganizerUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    content: string
    isFeatured?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    trip?: TripCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    content: string
    userId: string
    tripId?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    trip?: TripUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type CircleMemberListRelationFilter = {
    every?: CircleMemberWhereInput
    some?: CircleMemberWhereInput
    none?: CircleMemberWhereInput
  }

  export type CircleListRelationFilter = {
    every?: CircleWhereInput
    some?: CircleWhereInput
    none?: CircleWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CircleNullableRelationFilter = {
    is?: CircleWhereInput | null
    isNot?: CircleWhereInput | null
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    difficulty?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    inclusions?: SortOrder
    exclusions?: SortOrder
    bestTime?: SortOrder
    tripType?: SortOrder
    summitHeight?: SortOrder
    region?: SortOrder
    placesOfInterest?: SortOrder
    routeImage?: SortOrder
    route?: SortOrder
    requirements?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPrivate?: SortOrder
    isTest?: SortOrder
    activities?: SortOrder
    capacity?: SortOrder
    startingLocation?: SortOrder
    returnLocation?: SortOrder
    accommodation?: SortOrder
    platformFee?: SortOrder
    discountAmount?: SortOrder
    tourGuideDetails?: SortOrder
    tourGuidePhoto?: SortOrder
    cancellationPolicy?: SortOrder
    termsAndConditions?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    creatorId?: SortOrder
    circleId?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    platformFee?: SortOrder
    discountAmount?: SortOrder
    views?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    difficulty?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    inclusions?: SortOrder
    exclusions?: SortOrder
    bestTime?: SortOrder
    tripType?: SortOrder
    summitHeight?: SortOrder
    region?: SortOrder
    placesOfInterest?: SortOrder
    routeImage?: SortOrder
    route?: SortOrder
    requirements?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPrivate?: SortOrder
    isTest?: SortOrder
    activities?: SortOrder
    capacity?: SortOrder
    startingLocation?: SortOrder
    returnLocation?: SortOrder
    accommodation?: SortOrder
    platformFee?: SortOrder
    discountAmount?: SortOrder
    tourGuideDetails?: SortOrder
    tourGuidePhoto?: SortOrder
    cancellationPolicy?: SortOrder
    termsAndConditions?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    creatorId?: SortOrder
    circleId?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    difficulty?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    inclusions?: SortOrder
    exclusions?: SortOrder
    bestTime?: SortOrder
    tripType?: SortOrder
    summitHeight?: SortOrder
    region?: SortOrder
    placesOfInterest?: SortOrder
    routeImage?: SortOrder
    route?: SortOrder
    requirements?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPrivate?: SortOrder
    isTest?: SortOrder
    activities?: SortOrder
    capacity?: SortOrder
    startingLocation?: SortOrder
    returnLocation?: SortOrder
    accommodation?: SortOrder
    platformFee?: SortOrder
    discountAmount?: SortOrder
    tourGuideDetails?: SortOrder
    tourGuidePhoto?: SortOrder
    cancellationPolicy?: SortOrder
    termsAndConditions?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    creatorId?: SortOrder
    circleId?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    durationDays?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    price?: SortOrder
    capacity?: SortOrder
    platformFee?: SortOrder
    discountAmount?: SortOrder
    views?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TripRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    guests?: SortOrder
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    guests?: SortOrder
    totalPrice?: SortOrder
  }

  export type CircleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CircleRelationFilter = {
    is?: CircleWhereInput
    isNot?: CircleWhereInput
  }

  export type CircleMemberUserIdCircleIdCompoundUniqueInput = {
    userId: string
    circleId: string
  }

  export type CircleMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
  }

  export type CircleMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
  }

  export type CircleMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
  }

  export type OrganizerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripNullableRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type OrganizerNullableRelationFilter = {
    is?: OrganizerWhereInput | null
    isNot?: OrganizerWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    sender?: SortOrder
    tripId?: SortOrder
    circleId?: SortOrder
    organizerId?: SortOrder
    userId?: SortOrder
    recipientId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    sender?: SortOrder
    tripId?: SortOrder
    circleId?: SortOrder
    organizerId?: SortOrder
    userId?: SortOrder
    recipientId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    sender?: SortOrder
    tripId?: SortOrder
    circleId?: SortOrder
    organizerId?: SortOrder
    userId?: SortOrder
    recipientId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type CircleMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type CircleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type CircleMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type CircleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type CircleMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutUserInput | CircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutUserInput | CircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutUserInput | CircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type CircleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutOwnerInput | CircleUpsertWithWhereUniqueWithoutOwnerInput[]
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutOwnerInput | CircleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutOwnerInput | CircleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientInput | MessageUpsertWithWhereUniqueWithoutRecipientInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientInput | MessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientInput | MessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type CircleMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutUserInput | CircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutUserInput | CircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutUserInput | CircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type CircleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput> | CircleCreateWithoutOwnerInput[] | CircleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutOwnerInput | CircleCreateOrConnectWithoutOwnerInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutOwnerInput | CircleUpsertWithWhereUniqueWithoutOwnerInput[]
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutOwnerInput | CircleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutOwnerInput | CircleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput> | MessageCreateWithoutRecipientInput[] | MessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientInput | MessageCreateOrConnectWithoutRecipientInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientInput | MessageUpsertWithWhereUniqueWithoutRecipientInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientInput | MessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientInput | MessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTripsInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    connect?: UserWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutTripsInput = {
    create?: XOR<CircleCreateWithoutTripsInput, CircleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutTripsInput
    connect?: CircleWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutTripInput = {
    create?: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput> | MessageCreateWithoutTripInput[] | MessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTripInput | MessageCreateOrConnectWithoutTripInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTripInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput> | MessageCreateWithoutTripInput[] | MessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTripInput | MessageCreateOrConnectWithoutTripInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedTripsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    upsert?: UserUpsertWithoutCreatedTripsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTripsInput, UserUpdateWithoutCreatedTripsInput>, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type CircleUpdateOneWithoutTripsNestedInput = {
    create?: XOR<CircleCreateWithoutTripsInput, CircleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutTripsInput
    upsert?: CircleUpsertWithoutTripsInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutTripsInput, CircleUpdateWithoutTripsInput>, CircleUncheckedUpdateWithoutTripsInput>
  }

  export type MessageUpdateManyWithoutTripNestedInput = {
    create?: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput> | MessageCreateWithoutTripInput[] | MessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTripInput | MessageCreateOrConnectWithoutTripInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTripInput | MessageUpsertWithWhereUniqueWithoutTripInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTripInput | MessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTripInput | MessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTripInput | ReviewUpsertWithWhereUniqueWithoutTripInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTripInput | ReviewUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTripInput | ReviewUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput> | MessageCreateWithoutTripInput[] | MessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTripInput | MessageCreateOrConnectWithoutTripInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTripInput | MessageUpsertWithWhereUniqueWithoutTripInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTripInput | MessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTripInput | MessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTripInput | ReviewUpsertWithWhereUniqueWithoutTripInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTripInput | ReviewUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTripInput | ReviewUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingsInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type TripUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingsInput
    upsert?: TripUpsertWithoutBookingsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBookingsInput, TripUpdateWithoutBookingsInput>, TripUncheckedUpdateWithoutBookingsInput>
  }

  export type UserCreateNestedOneWithoutOwnedCirclesInput = {
    create?: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type CircleMemberCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutCircleInput = {
    create?: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput> | TripCreateWithoutCircleInput[] | TripUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCircleInput | TripCreateOrConnectWithoutCircleInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutCircleInput = {
    create?: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput> | MessageCreateWithoutCircleInput[] | MessageUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCircleInput | MessageCreateOrConnectWithoutCircleInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CircleMemberUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput> | TripCreateWithoutCircleInput[] | TripUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCircleInput | TripCreateOrConnectWithoutCircleInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput> | MessageCreateWithoutCircleInput[] | MessageUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCircleInput | MessageCreateOrConnectWithoutCircleInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedCirclesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCirclesInput
    upsert?: UserUpsertWithoutOwnedCirclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedCirclesInput, UserUpdateWithoutOwnedCirclesInput>, UserUncheckedUpdateWithoutOwnedCirclesInput>
  }

  export type CircleMemberUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutCircleInput | CircleMemberUpsertWithWhereUniqueWithoutCircleInput[]
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutCircleInput | CircleMemberUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutCircleInput | CircleMemberUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type TripUpdateManyWithoutCircleNestedInput = {
    create?: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput> | TripCreateWithoutCircleInput[] | TripUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCircleInput | TripCreateOrConnectWithoutCircleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCircleInput | TripUpsertWithWhereUniqueWithoutCircleInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCircleInput | TripUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCircleInput | TripUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutCircleNestedInput = {
    create?: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput> | MessageCreateWithoutCircleInput[] | MessageUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCircleInput | MessageCreateOrConnectWithoutCircleInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCircleInput | MessageUpsertWithWhereUniqueWithoutCircleInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCircleInput | MessageUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCircleInput | MessageUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CircleMemberUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutCircleInput | CircleMemberUpsertWithWhereUniqueWithoutCircleInput[]
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutCircleInput | CircleMemberUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutCircleInput | CircleMemberUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput> | TripCreateWithoutCircleInput[] | TripUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCircleInput | TripCreateOrConnectWithoutCircleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCircleInput | TripUpsertWithWhereUniqueWithoutCircleInput[]
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCircleInput | TripUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCircleInput | TripUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput> | MessageCreateWithoutCircleInput[] | MessageUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCircleInput | MessageCreateOrConnectWithoutCircleInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCircleInput | MessageUpsertWithWhereUniqueWithoutCircleInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCircleInput | MessageUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCircleInput | MessageUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCircleMembersInput = {
    create?: XOR<UserCreateWithoutCircleMembersInput, UserUncheckedCreateWithoutCircleMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCircleMembersInput
    connect?: UserWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutMembersInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput
    connect?: CircleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCircleMembersNestedInput = {
    create?: XOR<UserCreateWithoutCircleMembersInput, UserUncheckedCreateWithoutCircleMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCircleMembersInput
    upsert?: UserUpsertWithoutCircleMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCircleMembersInput, UserUpdateWithoutCircleMembersInput>, UserUncheckedUpdateWithoutCircleMembersInput>
  }

  export type CircleUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput
    upsert?: CircleUpsertWithoutMembersInput
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutMembersInput, CircleUpdateWithoutMembersInput>, CircleUncheckedUpdateWithoutMembersInput>
  }

  export type MessageCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput> | MessageCreateWithoutOrganizerInput[] | MessageUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOrganizerInput | MessageCreateOrConnectWithoutOrganizerInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput> | MessageCreateWithoutOrganizerInput[] | MessageUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOrganizerInput | MessageCreateOrConnectWithoutOrganizerInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput> | MessageCreateWithoutOrganizerInput[] | MessageUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOrganizerInput | MessageCreateOrConnectWithoutOrganizerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutOrganizerInput | MessageUpsertWithWhereUniqueWithoutOrganizerInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutOrganizerInput | MessageUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutOrganizerInput | MessageUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput> | MessageCreateWithoutOrganizerInput[] | MessageUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutOrganizerInput | MessageCreateOrConnectWithoutOrganizerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutOrganizerInput | MessageUpsertWithWhereUniqueWithoutOrganizerInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutOrganizerInput | MessageUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutOrganizerInput | MessageUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMessagesInput
    connect?: TripWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CircleCreateWithoutMessagesInput, CircleUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMessagesInput
    connect?: CircleWhereUniqueInput
  }

  export type OrganizerCreateNestedOneWithoutMessagesInput = {
    create?: XOR<OrganizerCreateWithoutMessagesInput, OrganizerUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutMessagesInput
    connect?: OrganizerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type TripUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMessagesInput
    upsert?: TripUpsertWithoutMessagesInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMessagesInput, TripUpdateWithoutMessagesInput>, TripUncheckedUpdateWithoutMessagesInput>
  }

  export type CircleUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<CircleCreateWithoutMessagesInput, CircleUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMessagesInput
    upsert?: CircleUpsertWithoutMessagesInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutMessagesInput, CircleUpdateWithoutMessagesInput>, CircleUncheckedUpdateWithoutMessagesInput>
  }

  export type OrganizerUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<OrganizerCreateWithoutMessagesInput, OrganizerUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutMessagesInput
    upsert?: OrganizerUpsertWithoutMessagesInput
    disconnect?: OrganizerWhereInput | boolean
    delete?: OrganizerWhereInput | boolean
    connect?: OrganizerWhereUniqueInput
    update?: XOR<XOR<OrganizerUpdateToOneWithWhereWithoutMessagesInput, OrganizerUpdateWithoutMessagesInput>, OrganizerUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TripCreateWithoutReviewsInput, TripUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TripCreateOrConnectWithoutReviewsInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TripUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<TripCreateWithoutReviewsInput, TripUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TripCreateOrConnectWithoutReviewsInput
    upsert?: TripUpsertWithoutReviewsInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutReviewsInput, TripUpdateWithoutReviewsInput>, TripUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type TripCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutTripInput
    circle?: CircleCreateNestedOneWithoutTripsInput
    messages?: MessageCreateNestedManyWithoutTripInput
    reviews?: ReviewCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    circleId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
    messages?: MessageUncheckedCreateNestedManyWithoutTripInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCreatorInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type CircleMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    circle: CircleCreateNestedOneWithoutMembersInput
  }

  export type CircleMemberUncheckedCreateWithoutUserInput = {
    id?: string
    circleId: string
    joinedAt?: Date | string
  }

  export type CircleMemberCreateOrConnectWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    create: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CircleCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    trips?: TripCreateNestedManyWithoutCircleInput
    messages?: MessageCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    trips?: TripUncheckedCreateNestedManyWithoutCircleInput
    messages?: MessageUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput>
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    trip?: TripCreateNestedOneWithoutMessagesInput
    circle?: CircleCreateNestedOneWithoutMessagesInput
    organizer?: OrganizerCreateNestedOneWithoutMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    tripId?: string | null
    circleId?: string | null
    organizerId?: string | null
    recipientId?: string | null
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutRecipientInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    trip?: TripCreateNestedOneWithoutMessagesInput
    circle?: CircleCreateNestedOneWithoutMessagesInput
    organizer?: OrganizerCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutRecipientInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    tripId?: string | null
    circleId?: string | null
    organizerId?: string | null
    userId?: string | null
  }

  export type MessageCreateOrConnectWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    content: string
    isFeatured?: boolean
    createdAt?: Date | string
    trip?: TripCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    content: string
    tripId?: string | null
    isFeatured?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    tripId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalPrice?: IntFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    paymentStatus?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type TripUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type TripUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
  }

  export type TripUpdateManyWithWhereWithoutCreatorInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    image?: StringNullableFilter<"Trip"> | string | null
    gallery?: StringNullableFilter<"Trip"> | string | null
    location?: StringFilter<"Trip"> | string
    duration?: StringNullableFilter<"Trip"> | string | null
    durationDays?: IntFilter<"Trip"> | number
    rating?: FloatFilter<"Trip"> | number
    reviewCount?: IntFilter<"Trip"> | number
    price?: IntFilter<"Trip"> | number
    difficulty?: StringFilter<"Trip"> | string
    highlights?: StringNullableFilter<"Trip"> | string | null
    itinerary?: StringNullableFilter<"Trip"> | string | null
    inclusions?: StringNullableFilter<"Trip"> | string | null
    exclusions?: StringNullableFilter<"Trip"> | string | null
    bestTime?: StringNullableFilter<"Trip"> | string | null
    tripType?: StringNullableFilter<"Trip"> | string | null
    summitHeight?: StringNullableFilter<"Trip"> | string | null
    region?: StringNullableFilter<"Trip"> | string | null
    placesOfInterest?: StringNullableFilter<"Trip"> | string | null
    routeImage?: StringNullableFilter<"Trip"> | string | null
    route?: StringNullableFilter<"Trip"> | string | null
    requirements?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    isPrivate?: BoolFilter<"Trip"> | boolean
    isTest?: BoolFilter<"Trip"> | boolean
    activities?: StringNullableFilter<"Trip"> | string | null
    capacity?: IntNullableFilter<"Trip"> | number | null
    startingLocation?: StringNullableFilter<"Trip"> | string | null
    returnLocation?: StringNullableFilter<"Trip"> | string | null
    accommodation?: StringNullableFilter<"Trip"> | string | null
    platformFee?: FloatNullableFilter<"Trip"> | number | null
    discountAmount?: FloatNullableFilter<"Trip"> | number | null
    tourGuideDetails?: StringNullableFilter<"Trip"> | string | null
    tourGuidePhoto?: StringNullableFilter<"Trip"> | string | null
    cancellationPolicy?: StringNullableFilter<"Trip"> | string | null
    termsAndConditions?: StringNullableFilter<"Trip"> | string | null
    views?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    status?: StringFilter<"Trip"> | string
    deletedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    creatorId?: StringNullableFilter<"Trip"> | string | null
    circleId?: StringNullableFilter<"Trip"> | string | null
  }

  export type CircleMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    update: XOR<CircleMemberUpdateWithoutUserInput, CircleMemberUncheckedUpdateWithoutUserInput>
    create: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CircleMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    data: XOR<CircleMemberUpdateWithoutUserInput, CircleMemberUncheckedUpdateWithoutUserInput>
  }

  export type CircleMemberUpdateManyWithWhereWithoutUserInput = {
    where: CircleMemberScalarWhereInput
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type CircleMemberScalarWhereInput = {
    AND?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
    OR?: CircleMemberScalarWhereInput[]
    NOT?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
    id?: StringFilter<"CircleMember"> | string
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
  }

  export type CircleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    update: XOR<CircleUpdateWithoutOwnerInput, CircleUncheckedUpdateWithoutOwnerInput>
    create: XOR<CircleCreateWithoutOwnerInput, CircleUncheckedCreateWithoutOwnerInput>
  }

  export type CircleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CircleWhereUniqueInput
    data: XOR<CircleUpdateWithoutOwnerInput, CircleUncheckedUpdateWithoutOwnerInput>
  }

  export type CircleUpdateManyWithWhereWithoutOwnerInput = {
    where: CircleScalarWhereInput
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CircleScalarWhereInput = {
    AND?: CircleScalarWhereInput | CircleScalarWhereInput[]
    OR?: CircleScalarWhereInput[]
    NOT?: CircleScalarWhereInput | CircleScalarWhereInput[]
    id?: StringFilter<"Circle"> | string
    name?: StringFilter<"Circle"> | string
    description?: StringFilter<"Circle"> | string
    image?: StringNullableFilter<"Circle"> | string | null
    ownerId?: StringFilter<"Circle"> | string
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    isRead?: BoolFilter<"Message"> | boolean
    sender?: StringFilter<"Message"> | string
    tripId?: StringNullableFilter<"Message"> | string | null
    circleId?: StringNullableFilter<"Message"> | string | null
    organizerId?: StringNullableFilter<"Message"> | string | null
    userId?: StringNullableFilter<"Message"> | string | null
    recipientId?: StringNullableFilter<"Message"> | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
    create: XOR<MessageCreateWithoutRecipientInput, MessageUncheckedCreateWithoutRecipientInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecipientInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecipientInput, MessageUncheckedUpdateWithoutRecipientInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecipientInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecipientInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    tripId?: StringNullableFilter<"Review"> | string | null
    isFeatured?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type BookingCreateWithoutTripInput = {
    id?: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    date: Date | string
    guests: number
    totalPrice: number
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutTripInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type UserCreateWithoutCreatedTripsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTripsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
  }

  export type CircleCreateWithoutTripsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    messages?: MessageCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutTripsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    messages?: MessageUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutTripsInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutTripsInput, CircleUncheckedCreateWithoutTripsInput>
  }

  export type MessageCreateWithoutTripInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    circle?: CircleCreateNestedOneWithoutMessagesInput
    organizer?: OrganizerCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutTripInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    circleId?: string | null
    organizerId?: string | null
    userId?: string | null
    recipientId?: string | null
  }

  export type MessageCreateOrConnectWithoutTripInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput>
  }

  export type ReviewCreateWithoutTripInput = {
    id?: string
    rating: number
    content: string
    isFeatured?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTripInput = {
    id?: string
    rating: number
    content: string
    userId: string
    isFeatured?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTripInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
  }

  export type BookingUpdateManyWithWhereWithoutTripInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTripInput>
  }

  export type UserUpsertWithoutCreatedTripsInput = {
    update: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type UserUpdateWithoutCreatedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleUpsertWithoutTripsInput = {
    update: XOR<CircleUpdateWithoutTripsInput, CircleUncheckedUpdateWithoutTripsInput>
    create: XOR<CircleCreateWithoutTripsInput, CircleUncheckedCreateWithoutTripsInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutTripsInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutTripsInput, CircleUncheckedUpdateWithoutTripsInput>
  }

  export type CircleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    messages?: MessageUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutTripInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTripInput, MessageUncheckedUpdateWithoutTripInput>
    create: XOR<MessageCreateWithoutTripInput, MessageUncheckedCreateWithoutTripInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTripInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTripInput, MessageUncheckedUpdateWithoutTripInput>
  }

  export type MessageUpdateManyWithWhereWithoutTripInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTripInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTripInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTripInput, ReviewUncheckedUpdateWithoutTripInput>
    create: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTripInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTripInput, ReviewUncheckedUpdateWithoutTripInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTripInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTripInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type TripCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreatedTripsInput
    circle?: CircleCreateNestedOneWithoutTripsInput
    messages?: MessageCreateNestedManyWithoutTripInput
    reviews?: ReviewCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creatorId?: string | null
    circleId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutTripInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBookingsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutBookingsInput = {
    update: XOR<TripUpdateWithoutBookingsInput, TripUncheckedUpdateWithoutBookingsInput>
    create: XOR<TripCreateWithoutBookingsInput, TripUncheckedCreateWithoutBookingsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBookingsInput, TripUncheckedUpdateWithoutBookingsInput>
  }

  export type TripUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreatedTripsNestedInput
    circle?: CircleUpdateOneWithoutTripsNestedInput
    messages?: MessageUpdateManyWithoutTripNestedInput
    reviews?: ReviewUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutTripNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutOwnedCirclesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedCirclesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
  }

  export type CircleMemberCreateWithoutCircleInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutCircleMembersInput
  }

  export type CircleMemberUncheckedCreateWithoutCircleInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type CircleMemberCreateOrConnectWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    create: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput>
  }

  export type TripCreateWithoutCircleInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutTripInput
    creator?: UserCreateNestedOneWithoutCreatedTripsInput
    messages?: MessageCreateNestedManyWithoutTripInput
    reviews?: ReviewCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCircleInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creatorId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
    messages?: MessageUncheckedCreateNestedManyWithoutTripInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCircleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput>
  }

  export type MessageCreateWithoutCircleInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    trip?: TripCreateNestedOneWithoutMessagesInput
    organizer?: OrganizerCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutCircleInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    tripId?: string | null
    organizerId?: string | null
    userId?: string | null
    recipientId?: string | null
  }

  export type MessageCreateOrConnectWithoutCircleInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput>
  }

  export type UserUpsertWithoutOwnedCirclesInput = {
    update: XOR<UserUpdateWithoutOwnedCirclesInput, UserUncheckedUpdateWithoutOwnedCirclesInput>
    create: XOR<UserCreateWithoutOwnedCirclesInput, UserUncheckedCreateWithoutOwnedCirclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedCirclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedCirclesInput, UserUncheckedUpdateWithoutOwnedCirclesInput>
  }

  export type UserUpdateWithoutOwnedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleMemberUpsertWithWhereUniqueWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    update: XOR<CircleMemberUpdateWithoutCircleInput, CircleMemberUncheckedUpdateWithoutCircleInput>
    create: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput>
  }

  export type CircleMemberUpdateWithWhereUniqueWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    data: XOR<CircleMemberUpdateWithoutCircleInput, CircleMemberUncheckedUpdateWithoutCircleInput>
  }

  export type CircleMemberUpdateManyWithWhereWithoutCircleInput = {
    where: CircleMemberScalarWhereInput
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyWithoutCircleInput>
  }

  export type TripUpsertWithWhereUniqueWithoutCircleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutCircleInput, TripUncheckedUpdateWithoutCircleInput>
    create: XOR<TripCreateWithoutCircleInput, TripUncheckedCreateWithoutCircleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutCircleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutCircleInput, TripUncheckedUpdateWithoutCircleInput>
  }

  export type TripUpdateManyWithWhereWithoutCircleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutCircleInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutCircleInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutCircleInput, MessageUncheckedUpdateWithoutCircleInput>
    create: XOR<MessageCreateWithoutCircleInput, MessageUncheckedCreateWithoutCircleInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutCircleInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutCircleInput, MessageUncheckedUpdateWithoutCircleInput>
  }

  export type MessageUpdateManyWithWhereWithoutCircleInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutCircleInput>
  }

  export type UserCreateWithoutCircleMembersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCircleMembersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCircleMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCircleMembersInput, UserUncheckedCreateWithoutCircleMembersInput>
  }

  export type CircleCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    trips?: TripCreateNestedManyWithoutCircleInput
    messages?: MessageCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutCircleInput
    messages?: MessageUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutMembersInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutCircleMembersInput = {
    update: XOR<UserUpdateWithoutCircleMembersInput, UserUncheckedUpdateWithoutCircleMembersInput>
    create: XOR<UserCreateWithoutCircleMembersInput, UserUncheckedCreateWithoutCircleMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCircleMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCircleMembersInput, UserUncheckedUpdateWithoutCircleMembersInput>
  }

  export type UserUpdateWithoutCircleMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCircleMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleUpsertWithoutMembersInput = {
    update: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutMembersInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
  }

  export type CircleUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    trips?: TripUpdateManyWithoutCircleNestedInput
    messages?: MessageUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutCircleNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type MessageCreateWithoutOrganizerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    trip?: TripCreateNestedOneWithoutMessagesInput
    circle?: CircleCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutOrganizerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isRead?: boolean
    sender: string
    tripId?: string | null
    circleId?: string | null
    userId?: string | null
    recipientId?: string | null
  }

  export type MessageCreateOrConnectWithoutOrganizerInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutOrganizerInput, MessageUncheckedUpdateWithoutOrganizerInput>
    create: XOR<MessageCreateWithoutOrganizerInput, MessageUncheckedCreateWithoutOrganizerInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutOrganizerInput, MessageUncheckedUpdateWithoutOrganizerInput>
  }

  export type MessageUpdateManyWithWhereWithoutOrganizerInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type TripCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutTripInput
    creator?: UserCreateNestedOneWithoutCreatedTripsInput
    circle?: CircleCreateNestedOneWithoutTripsInput
    reviews?: ReviewCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creatorId?: string | null
    circleId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMessagesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
  }

  export type CircleCreateWithoutMessagesInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCirclesInput
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    trips?: TripCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    trips?: TripUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutMessagesInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutMessagesInput, CircleUncheckedCreateWithoutMessagesInput>
  }

  export type OrganizerCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    bio?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizerUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    bio?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizerCreateOrConnectWithoutMessagesInput = {
    where: OrganizerWhereUniqueInput
    create: XOR<OrganizerCreateWithoutMessagesInput, OrganizerUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type TripUpsertWithoutMessagesInput = {
    update: XOR<TripUpdateWithoutMessagesInput, TripUncheckedUpdateWithoutMessagesInput>
    create: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMessagesInput, TripUncheckedUpdateWithoutMessagesInput>
  }

  export type TripUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneWithoutCreatedTripsNestedInput
    circle?: CircleUpdateOneWithoutTripsNestedInput
    reviews?: ReviewUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTripNestedInput
  }

  export type CircleUpsertWithoutMessagesInput = {
    update: XOR<CircleUpdateWithoutMessagesInput, CircleUncheckedUpdateWithoutMessagesInput>
    create: XOR<CircleCreateWithoutMessagesInput, CircleUncheckedCreateWithoutMessagesInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutMessagesInput, CircleUncheckedUpdateWithoutMessagesInput>
  }

  export type CircleUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCirclesNestedInput
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    trips?: TripUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    trips?: TripUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type OrganizerUpsertWithoutMessagesInput = {
    update: XOR<OrganizerUpdateWithoutMessagesInput, OrganizerUncheckedUpdateWithoutMessagesInput>
    create: XOR<OrganizerCreateWithoutMessagesInput, OrganizerUncheckedCreateWithoutMessagesInput>
    where?: OrganizerWhereInput
  }

  export type OrganizerUpdateToOneWithWhereWithoutMessagesInput = {
    where?: OrganizerWhereInput
    data: XOR<OrganizerUpdateWithoutMessagesInput, OrganizerUncheckedUpdateWithoutMessagesInput>
  }

  export type OrganizerUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizerUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberCreateNestedManyWithoutUserInput
    ownedCircles?: CircleCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    phone?: string | null
    location?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    circleMembers?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    ownedCircles?: CircleUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TripCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutTripInput
    creator?: UserCreateNestedOneWithoutCreatedTripsInput
    circle?: CircleCreateNestedOneWithoutTripsInput
    messages?: MessageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    gallery?: string | null
    location: string
    duration?: string | null
    durationDays?: number
    rating?: number
    reviewCount?: number
    price?: number
    difficulty?: string
    highlights?: string | null
    itinerary?: string | null
    inclusions?: string | null
    exclusions?: string | null
    bestTime?: string | null
    tripType?: string | null
    summitHeight?: string | null
    region?: string | null
    placesOfInterest?: string | null
    routeImage?: string | null
    route?: string | null
    requirements?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isPrivate?: boolean
    isTest?: boolean
    activities?: string | null
    capacity?: number | null
    startingLocation?: string | null
    returnLocation?: string | null
    accommodation?: string | null
    platformFee?: number | null
    discountAmount?: number | null
    tourGuideDetails?: string | null
    tourGuidePhoto?: string | null
    cancellationPolicy?: string | null
    termsAndConditions?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    deletedAt?: Date | string | null
    creatorId?: string | null
    circleId?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutTripInput
    messages?: MessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutReviewsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutReviewsInput, TripUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    circleMembers?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedCircles?: CircleUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type TripUpsertWithoutReviewsInput = {
    update: XOR<TripUpdateWithoutReviewsInput, TripUncheckedUpdateWithoutReviewsInput>
    create: XOR<TripCreateWithoutReviewsInput, TripUncheckedCreateWithoutReviewsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutReviewsInput, TripUncheckedUpdateWithoutReviewsInput>
  }

  export type TripUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneWithoutCreatedTripsNestedInput
    circle?: CircleUpdateOneWithoutTripsNestedInput
    messages?: MessageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutTripNestedInput
    circle?: CircleUpdateOneWithoutTripsNestedInput
    messages?: MessageUpdateManyWithoutTripNestedInput
    reviews?: ReviewUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTripNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CircleMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circle?: CircleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CircleMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    trips?: TripUpdateManyWithoutCircleNestedInput
    messages?: MessageUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    trips?: TripUncheckedUpdateManyWithoutCircleNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneWithoutMessagesNestedInput
    circle?: CircleUpdateOneWithoutMessagesNestedInput
    organizer?: OrganizerUpdateOneWithoutMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneWithoutMessagesNestedInput
    circle?: CircleUpdateOneWithoutMessagesNestedInput
    organizer?: OrganizerUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    circle?: CircleUpdateOneWithoutMessagesNestedInput
    organizer?: OrganizerUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCircleMembersNestedInput
  }

  export type CircleMemberUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneWithoutCreatedTripsNestedInput
    messages?: MessageUpdateManyWithoutTripNestedInput
    reviews?: ReviewUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutTripNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTripNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: NullableStringFieldUpdateOperationsInput | string | null
    inclusions?: NullableStringFieldUpdateOperationsInput | string | null
    exclusions?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    tripType?: NullableStringFieldUpdateOperationsInput | string | null
    summitHeight?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    placesOfInterest?: NullableStringFieldUpdateOperationsInput | string | null
    routeImage?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isTest?: BoolFieldUpdateOperationsInput | boolean
    activities?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    startingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    returnLocation?: NullableStringFieldUpdateOperationsInput | string | null
    accommodation?: NullableStringFieldUpdateOperationsInput | string | null
    platformFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tourGuideDetails?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuidePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cancellationPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneWithoutMessagesNestedInput
    organizer?: OrganizerUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneWithoutMessagesNestedInput
    circle?: CircleUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    circleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripCountOutputTypeDefaultArgs instead
     */
    export type TripCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CircleCountOutputTypeDefaultArgs instead
     */
    export type CircleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CircleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizerCountOutputTypeDefaultArgs instead
     */
    export type OrganizerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripDefaultArgs instead
     */
    export type TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CircleDefaultArgs instead
     */
    export type CircleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CircleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CircleMemberDefaultArgs instead
     */
    export type CircleMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CircleMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizerDefaultArgs instead
     */
    export type OrganizerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}