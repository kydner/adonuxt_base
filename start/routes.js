'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')


Route.post('login', 'Admin/AuthController.login').as('login').prefix('api/v1')
Route.get('logout', 'Admin/AuthController.logout').as('logout').prefix('api/v1')
Route.group(() => {
  
  Route
  .resource('users', 'UserController')
  .apiOnly()
  Route.get('user', 'Admin/UserController.index').as('user')
}).prefix('api/v1').middleware('auth')

Route.any('*', 'NuxtController.render')
