import Input from './input.component';
import { screen, render } from '@testing-library/react';

describe('Teste de snapshot do input', () => {

    test('Snapshot de 20/01/2021', () => {
        const {container} = render(<Input placeholder="Input de Test"/>)
        expect(container.firstChild).toMatchSnapshot();
    })
})