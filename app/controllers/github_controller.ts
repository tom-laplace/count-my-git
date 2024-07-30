import type { HttpContext } from '@adonisjs/core/http'

export default class GithubController {
    public async redirect({ ally }: HttpContext) {
        return ally.use('github').redirect()
    }

    public async callback({ ally, inertia }: HttpContext) {
        try {
            const github = ally.use('github')

            if (github.accessDenied()) {
                return inertia.render('errors/server_error', { error: 'Access denied: You denied the request' })
            }

            if (github.stateMisMatch()) {
                return inertia.render('errors/server_error', { error: 'State mismatch: Request expired' })
            }

            if (github.hasError()) {
                return inertia.render('errors/server_error', { error: github.getError() })
            }

            const user = await github.user()

            return inertia.render('auth_home', { user })
        } catch (error) {
            console.error(error)
            return inertia.render('errors/server_error', { error: 'Could not authenticate using Github' })
        }
    }

}