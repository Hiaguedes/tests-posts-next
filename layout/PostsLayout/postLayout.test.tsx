import { screen, render, waitFor } from '@testing-library/react';
import PostsLayout from './posts-layout.component';
import '@testing-library/jest-dom'
describe(('No layout da página de posts'), () => {

    test('A logo aparece', () => {
        render(<PostsLayout>a</PostsLayout>)
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    })

    test('Snapshot do componente é o mesmo 20/01/2021', () => {
        const {container} = render(<PostsLayout>a</PostsLayout>)
        expect(container.firstChild).toMatchSnapshot();
    })
})