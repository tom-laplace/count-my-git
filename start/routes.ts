/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import GithubController from '#controllers/github_controller'

router.on('/').renderInertia('home')

router.get('auth/github',[GithubController,'redirect'])
router.get('auth/github/callback',[GithubController,'callback'])