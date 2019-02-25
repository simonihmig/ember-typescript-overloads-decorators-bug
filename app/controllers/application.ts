import Controller from '@ember/controller';
import { inject as service } from '@ember-decorators/service';
import Router from '@ember/routing/router';

export default class ApplicationController extends Controller {
  @service
  router!: Router;

  foo(bar: string[]): void;
  foo(bar: string): void;
  foo() {
    // dummy
  }


}
