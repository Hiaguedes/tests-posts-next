import { screen, render, waitFor } from '@testing-library/react';
import Posts from './';
describe(('Na página de posts'), () => {
    beforeEach(() => {
        render(<Posts />)
    })
    test('A logo aparece',async () => {
        await waitFor(() => {
            return expect(global.window.location.pathname).toBe('/posts');
        })

        expect(screen.getByTestId('logo')).toBeInTheDocument();
    })
})