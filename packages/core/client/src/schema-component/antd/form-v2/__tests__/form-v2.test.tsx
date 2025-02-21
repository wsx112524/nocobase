import React from 'react';
import { render, screen, sleep, userEvent } from 'testUtils';
import App1 from '../demos/demo1';
import App2 from '../demos/demo2';
import App3 from '../demos/demo3';

describe('FormV2', () => {
  it('basic', async () => {
    render(<App1 />);

    const input = document.querySelector('.ant-input') as HTMLInputElement;
    const submit = screen.getByText('Submit');

    expect(input).toBeInTheDocument();
    expect(screen.getByText('Nickname')).toBeInTheDocument();

    await userEvent.type(input, '李四');
    await userEvent.click(submit);

    // notification 的内容
    expect(screen.getByText(/\{"nickname":"李四"\}/i)).toBeInTheDocument();
  });

  it('initial values', async () => {
    render(<App2 />);

    await sleep(100);

    const nicknameInput = document.querySelector('.nickname .ant-input') as HTMLInputElement;
    const passwordInput = document.querySelector('.password .ant-input') as HTMLInputElement;
    const submit = screen.getByText('Submit');

    expect(submit).toBeInTheDocument();
    expect(nicknameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(nicknameInput).toHaveValue('张三');
    expect(passwordInput).toHaveValue('123456');
    expect(screen.getByText('Nickname')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('read pretty', async () => {
    render(<App3 />);

    await sleep(100);

    expect(screen.getByText('Nickname')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('张三')).toBeInTheDocument();
    expect(screen.getByText(/\*\*\*\*\*\*\*\*/i)).toBeInTheDocument();
  });
});
