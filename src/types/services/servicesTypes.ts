/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

abstract class BaseAPIState {
  constructor() {}
}

export class Success<T extends any> extends BaseAPIState {
  readonly type = 'success';
  private constructor(public data: T) {
    super();
  }
  static create<T>(data: T) {
    return new Success(data);
  }
}

export class Failure<T extends any> extends BaseAPIState {
  readonly type = 'failure';
  private constructor(public message: T) {
    super();
  }
  static create<T>(message: T) {
    return new Failure(message);
  }
}

export type APIState<T, T1> = Success<T> | Failure<T1>;
